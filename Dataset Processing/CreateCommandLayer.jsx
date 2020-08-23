#target illustrator
function CreateCommandLayer () {
	if (!Array.prototype.indexOf) {
	  Array.prototype.indexOf = function (searchElement, fromIndex) {
	    var k;
	    if (this == null) {
	      throw new TypeError('"this" is null or not defined');
	    }
	    var o = Object(this);
	    var len = o.length >>> 0;
	    if (len === 0) {
	      return -1;
	    }
	    var n = +fromIndex || 0;
	    if (Math.abs(n) === Infinity) {
	      n = 0;
	    }
	    if (n >= len) {
	      return -1;
	    }
	    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
	    while (k < len) {
	      if (k in o && o[k] === searchElement) {
	        return k;
	      }
	      k++;
	    }
	    return -1;
	  };
	};
	var CSV={parse:function(r,n,e){e=e||",",n=n||function(r,n,e){return e};for(var t,f,i,o=r.split(""),u=0,l=o.length,g=[];u<l;){for(g.push(i=[]);u<l&&"\r"!==o[u]&&"\n"!==o[u];){if(t=f=u,'"'===o[u]){for(t=f=++u;u<l;){if('"'===o[u]){if('"'!==o[u+1])break;o[++u]=""}f=++u}for('"'===o[u]&&++u;u<l&&"\r"!==o[u]&&"\n"!==o[u]&&e!==o[u];)++u}else for(;u<l&&"\r"!==o[u]&&"\n"!==o[u]&&e!==o[u];)f=++u;i.push(n(g.length-1,i.length,o.slice(t,f).join(""))),e===o[u]&&++u}"\r"===o[u]&&++u,"\n"===o[u]&&++u}return g},stringify:function(r,n,e){n=n||function(r,n,e){return e};var t,f,i,o,u="",l=r.length;for(i=0;i<l;++i)for(i&&(u+="\r\n"),t=0,f=r[i].length;t<f;++t)t&&(u+=e),o=n(i,t,r[i][t]),new RegExp("["+e+'\\r\\n"').test(o)&&(o='"'+o.replace(/"/g,'""')+'"'),u+=o||0===o?o:"";return u}};
	function readFile (path) {
	  var f = path, contents;
	  if (!(path instanceof File)) {
	    f = File(f);
	  }
	  if (!f.exists) {
	    alert("File was not found at '" + decodeURI(f) + "'");
	    return false;
	  } else {
	    f.open('r');
	    contents = f.read();
	    f.close();
	    return contents;
	  }
	};
	function getDataFileMask (fileExtArray, includeFolders, getFunction) {
	  /*
	    fileExtArray = [".jpg", ".png"]
	    getFunction is a boolean to explicitly retrieve the function file mask in Windows
	  */
	  var winStr = "*" + fileExtArray.join(";*") + ";";
	  var macStr = "\\" + fileExtArray.join("|\\");
	  var macRx = new RegExp("(" + macStr + ")$", "i");
	  if (typeof getFunction != "boolean") {
	    getFunction = false;    
	  }
	  return ($.os.match('Windows') && !getFunction)? winStr : function (f) {
	    if (typeof includeFolders == "undefined" || includeFolders == true) {
	      return f instanceof Folder || (f instanceof File && decodeURI(f.name).match(macRx));
	    } else {
	      return f instanceof File && decodeURI(f.name).match(macRx);
	    }
	  }
	};
	function getTextData (txtFile) {
	  if (!(txtFile instanceof File)) {
	    txtFile = File(txtFile);
	  }
	  txtFile = File(txtFile.fsName.toString().replace("file://",''));
	  var type = decodeURI(txtFile.name).match(/(\.txt$|\.csv$)/i)[0];
	  var splitter = (type == '.txt')? '\t' : ',';
	  var rx = new RegExp(splitter, "g");

	  var arr = [];
	  try {
	    txtFile.open('r');
	    txtFile.seek(0,0);
	    
	    arr = CSV.parse(txtFile.read(), undefined, splitter);
	    
	    txtFile.close();
	    return arr;
	  } catch(e) {
	    alert("Problem reading the text file.  Make sure it's not locked down &/or open in Excel.");
	  }
	};
	function getColumnByHeader (grid, headerName) {
	  /* returns first column with header value of headerName */
	  var thisHeaderCell, thisColumnCell, arr = [];
	  for (var i = 0; i < grid[0].length; i++) {
	    thisHeaderCell = grid[0][i];
	    if (thisHeaderCell == headerName) {
	      for (var j = 1; j < grid.length; j++) {
	        thisColumnCell = grid[j][i];
	        arr.push(thisColumnCell);
	      }
	      return arr;
	    }
	  }
	  return arr;
	};
	function makeCommandTextFrame (parent, sourceText, targetNote, method, parameter) {
		var str = "SOURCETEXT:" + sourceText + "\r" + "TARGETNOTE:" + targetNote + "\r" + method + ":" + parameter;
		var newText = parent.textFrames.add();
		newText.contents = str;
		return newText;
	};
	if (app.documents.length < 1) {
		alert("No Illustrator document is open.");
		return;
	}
	var csvFile = File.openDialog("Choose a .csv file", getDataFileMask([".csv"]));
	if (!csvFile) {
		return;
	}
	var data = getTextData(csvFile);
	var requiredHeaders = ["target note", "source text name", "method", "parameter"];
	var dataObj = {}, thisRequiredHeader;
	for (var i = 0; i < requiredHeaders.length; i++) {
		thisRequiredHeader = requiredHeaders[i];
		if (data[0].indexOf(thisRequiredHeader) == -1) {
			alert(thisRequiredHeader + " header is missing from data file. Must have each of these headers: " + requiredHeaders.join(", "));
			return;
		}
		dataObj[thisRequiredHeader] = getColumnByHeader(data, thisRequiredHeader);
	}
	var doc = app.activeDocument;
	try {
		var existingCommandLayer = doc.layers.getByName("COMMAND");
		if (confirm("Existing COMMAND layer found. Remove and proceed?")) {
			existingCommandLayer.remove();
		} else {
			return;
		}
	} catch (e) {

	}
	var newCommandLayer = doc.layers.add();
	newCommandLayer.name = "COMMAND";
	for (var i = data.length - 2; i > -1; i--) {
		makeCommandTextFrame(newCommandLayer, dataObj["source text name"][i], dataObj["target note"][i], dataObj["method"][i], dataObj["parameter"][i]);
	}
	if (confirm("Make 'Recoloring Variable Text' layer?")) {
		try {
			var existingRecoloringLayer = doc.layers.getByName("Recoloring Variable Text");
			if (confirm("Existing 'Recoloring Variable Text' layer found. Remove and proceed?")) {
				existingRecoloringLayer.remove();
			} else {
				return;
			}
		} catch (e) {

		}
		var newRecoloringLayer = doc.layers.add();
		newRecoloringLayer.name = "Recoloring Variable Text";
		var thisSourceTextName;
		var newText;
		for (var i = dataObj["source text name"].length - 1; i > -1; i--) {
			thisSourceTextName = dataObj["source text name"][i];
			newText = newRecoloringLayer.textFrames.add();
			newText.contents = "text for " + thisSourceTextName;
			newText.name = thisSourceTextName;
		}
	}
};
CreateCommandLayer();
