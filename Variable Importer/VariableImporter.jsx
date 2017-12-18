/***
{
	"name" : "VariableImporter 8",
	"scriptVersion" : "8.1.10",
	"note" : "This script helps to import .CSV and tab-delimited .TXT spreadsheets as Illustrator XML datasets.",
	"author" : {
		"by" : "Vasily Hall",
    "email" : "vasily.hall@gmail.com",
    "linkedIn" : "https://www.linkedin.com/pub/vasily-hall/18/166/912?trk=biz_employee_pub"
	},
	"thanks" : [
		"Thanks to the global community of Illustrator enthusiasts who have helped make this script happen:",
    "* Hans Boon / testing on multiple versions, workstations & platforms" ,
    "* Stephen Marsh / http://prepression.blogspot.com/" ,
    "* Andy VanWagoner's CSV Parser / http://stackoverflow.com/users/1701761/andy-vanwagoner" ,
    "* Albert Bassa / 'double-backslash' line-break character suggestion" ,
    "* John Garrett / http://hypertransitory.com/" ,
    "* Dmitriy Gritsenko / help with multiple graph-data import" ,
    "* Norbert Gindl / user testing multiple graph-data import" ,
    "* Alice Elliott / bug fix in graph-data import" ,
    "* The great people of Adobe Scripting Forums"
  ]
}
***/


#target illustrator
#targetengine main
//the ui has problems and crashes when this isn't used
#script "VariableImporter"

function VariableImporter(){

	var LOCALTEST = false;

//=================================== FUNCTIONS ====================================//


if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
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

//http://stackoverflow.com/a/25094986/2864371
function arrayMakeUnique(arr){
  if(arr.length < 1){
    return [];
  }
  var a = arr.slice(0,);
  var b = a.length, c;
  while(c = --b){
    while(c--){
      a[b]!== a[c] || a.splice(c,1);
    }
  }
  return a;
};

function arrayGetAllDuplicates(arr){
  if(arr.length < 1){
    return [];
  }
  var a = arr.slice(0,);
  var b = a.length, d = [], c;
  while(c = --b){
    while(c--){
      a[b] !== a[c] || d.push(a.splice(c, 1)[0]);
    }
  }
  return d;
};

function arrayGetUniqueDuplicates(arr){
  return arrayMakeUnique(arrayGetAllDuplicates(arr));
};

function checkForSingleDuplicate(array, value){
  var found = [], thisCell;
  for (var i = 0; i < array.length; i++) {
    thisCell = array[i];
    if(thisCell == value){
      found.push(value);
    }
  }
  return found;
};

"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function quote(t){
  return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){var e=meta[t];
    return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}
  function str(t,e){var n,r,o,f,u,i=gap,p=e[t];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(t)),
    "function"==typeof rep&&(p=rep.call(e,t,p)),typeof p){case"string":return quote(p);case"number":return isFinite(p)?String(p):"null";
  case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(p)){
    for(f=p.length,n=0;f>n;n+=1)u[n]=str(n,p)||"null";return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+i+"]":"["+u.join(",")+"]",gap=i,o}
      if(rep&&"object"==typeof rep)for(f=rep.length,n=0;f>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));
    else for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(o=str(r,p),o&&u.push(quote(r)+(gap?": ":":")+o));return o=0===u.length?"{}":gap?"{\n"+gap+
    u.join(",\n"+gap)+"\n"+i+"}":"{"+u.join(",")+"}",gap=i,o}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){
      return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+
      f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){
        return this.valueOf()});var cx,escapable,gap,indent,meta,rep;"function"!=typeof JSON.stringify&&
    (escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      meta={"\b":"\\b","  ":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,n){var r;
        if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=e,
          e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),
    "function"!=typeof JSON.parse&&(cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      JSON.parse=function(text,reviver){function walk(t,e){var n,r,o=t[e];if(o&&"object"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&
      (r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&
        (text=text.replace(cx,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),
        /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@")
          .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]")
          .replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;
      throw new SyntaxError("JSON.parse")})}();

function clone(obj) {
  var copy;
  // Handle the 3 simple types, and null or undefined
  if (null == obj || "object" != typeof obj) return obj;
  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }
  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = clone(obj[i]);
    }
    return copy;
  }
  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
    }
    return copy;
  }
  throw new Error("Unable to copy obj! Its type isn't supported.");
};

String.prototype.trim = function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(callback, thisArg) {
    var T, k;
    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }
    var O = Object(this);
    var len = O.length >>> 0;
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }
    if (arguments.length > 1) {
      T = thisArg;
    }
    k = 0;
    while (k < len) {
      var kValue;
      if (k in O) {
        kValue = O[k];
        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

function unCamelCaseSplit(str){
  var newStr = str[0].toUpperCase() + str.split(/([A-Z][a-z]+)/g).join(" ").replace(/\s{2}/g," ").substr(1,);
  return newStr;
};

Number.prototype.padZero = function(decimals){
  if(typeof decimals == "undefined"){
    decimals = 2;
  }
  var numStr = this.toString();
  var decimalsFound = numStr.length;
  if(decimalsFound >= decimals){
    return this;
  }
  while(decimalsFound < decimals){
    numStr = '0' + numStr;
    decimalsFound += 1;
  }
  return numStr;
};

function writeImageFile(binary, dest){
  if(!dest instanceof "File"){
    dest = File(dest);
  }
  try {
    dest.encoding = "BINARY";
    dest.open("w");
    dest.write(binary);
    dest.close();
  } catch (e) {
    scriptAlert("writeImageFile(binary, dest)\r" + e);
  }
};

function getScriptImage(imageObj) {
  /*
    imageObj = { "data" : embeddedImageData, "name" : imageName }
  */
  var scriptDataFolder = SESSION.scriptDataFolder;
  if(!scriptDataFolder){
    return false;
  }
  var thisFile = File(scriptDataFolder + "/" + imageObj.name + '.png');
  if(!thisFile.exists){
    writeImageFile(imageObj.data, thisFile);
    if(!thisFile.exists) {
      return false;
    }
  }
  return thisFile;
};
/*
function writeScriptImages() {
  var scriptDataFolder = SESSION.scriptDataFolder;
  for(var all in ICONS){
    var thisFile = File(scriptDataFolder + "/" + all + '.png');
    if(!thisFile.exists){
      writeImageFile(ICONS[all], thisFile);
      if(!thisFile.exists) {
        return false;
      } else {
        ICONS[all] = thisFile;
      }
    } else {
      ICONS[all] = thisFile;
    }
  }
  return true;
};
*/

var CSV = {
  // ===================================================== http://stackoverflow.com/a/12785546
  // ===================================================== Andy VanWagoner
  // ===================================================== http://thetalecrafter.com/
  parse: function(csv, reviver, splitter) {
    splitter = splitter  || ',';
    reviver = reviver || function(r, c, v) { return v; };
    var chars = csv.split(''), c = 0, cc = chars.length, start, end, table = [], row;
    while (c < cc) {
      table.push(row = []);
      while (c < cc && '\r' !== chars[c] && '\n' !== chars[c]) {
        start = end = c;
        if ('"' === chars[c]){
          start = end = ++c;
          while (c < cc) {
            if ('"' === chars[c]) {
              if ('"' !== chars[c+1]) { break; }
              else { chars[++c] = ''; } // unescape ""
            }
            end = ++c;
          }
          if ('"' === chars[c]) { ++c; }
          while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && splitter !== chars[c]) { ++c; }
        } else {
          while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && splitter !== chars[c]) { end = ++c; }
        }
        row.push(reviver(table.length-1, row.length, chars.slice(start, end).join('')));
        if (splitter === chars[c]) { ++c; }
      }
      if ('\r' === chars[c]) { ++c; }
      if ('\n' === chars[c]) { ++c; }
    }
    return table;
  },
  stringify: function(table, replacer, splitter) {
    replacer = replacer || function(r, c, v) { return v; };
    var csv = '', c, cc, r, rr = table.length, cell;
    for (r = 0; r < rr; ++r) {
      if (r) { csv += '\r\n'; }
      for (c = 0, cc = table[r].length; c < cc; ++c) {
        if (c) { csv += splitter; }
        cell = replacer(r, c, table[r][c]);
        var rx = new RegExp("[" + splitter + "]\\r" + "\\n\"");
        if (rx.test(cell)) { cell = '"' + cell.replace(/"/g, '""') + '"'; }
        csv += (cell || 0 === cell) ? cell : '';
      }
    }
    return csv;
  }
};

function getTextData(dataFile){
  var df = dataFile;
  var dataFileName = decodeURI(df.name);
  var type = dataFileName.match(/(\.txt$|\.csv$)/i)[0].toLowerCase();
  var splitter = (type == '.txt')? '\t' : ',';
  df.open('r');
  var fileContents = df.read();
  var firstRow = fileContents.split(/[\r\n]/g)[0];
  if(firstRow != null && splitter != "\t"){
    if(firstRow.indexOf(",") == -1 && firstRow.indexOf(";") > -1){
      splitter = ";"; // For the .csv format: if the first row has no commas but has a semicolon, assume this is a semicolon-delimited .csv file
    }
  }
  var everyRowRaw = CSV.parse(fileContents, undefined, splitter);
  df.close();
  
  var everyRow = [];
  for(var i = 0; i < everyRowRaw.length; i++){
    // get rid of empty rows
    var thisRawRow = everyRowRaw[i];
    if(!checkRowForAllBlanks(thisRawRow)){
      if(i > 0){
        if(thisRawRow.length < everyRow[0].length){
          var diff = everyRow[0].length - thisRawRow.length;
          for(var d = 0; d < diff; d++){
            thisRawRow.push("");
          }
        }
      }
      everyRow.push(thisRawRow);
    }
  }
  return everyRow;
};

function getData(filePath){
	try{
		return getTextData(File(filePath));
	} catch(e) {
		alert(e);
		return null;
	}
};

function checkRowForAllBlanks(row){
  for(var i = 0; i < row.length; i++){
    if(row[i] != ''){
      return false;
    }
  }
  return true;
};

function getVariableType(str){
	var firstChar = str[0];
	for(var all in VARTYPES){
		if(firstChar == VARTYPES[all].key){
			return all;
		}
	}
	return "Text";
};

function transposeGrid(data){
  var newArr = [];
  var columns = data[0].length, rows = data.length, newRow = [];
  for (var i = 0; i < columns; i++) {
    newRow = [];
    for (var j = 0; j < rows; j++) {
      newRow.push(data[j][i]);
    };
    newArr.push(newRow);
  };
  return newArr;
};

function scriptAlert(msg) {
  alert(SESSION.scriptName + " " + SESSION.scriptVersion + ": '" + msg + "'");
};

function comparePropNames(compareTo, compareThis){
  var resMsg = "";
  var propCount = {};
  propCount.compareTo = 0;
  propCount.compareThis = 0;
  var compareToPropArr = [];
  var compareThisPropArr = [];
  for(var all in compareTo){
    propCount.compareTo++;
    compareToPropArr.push(all);
  }
  for(var all in compareThis){
    propCount.compareThis++;
    compareThisPropArr.push(all);
  }
  var allFound = true, thisProp, thisCompareProp;
  for (var i = 0; i < compareToPropArr.length; i++) {
    thisProp = compareToPropArr[i];
    for (var j = 0; j < compareThisPropArr.length; j++) {
      thisCompareProp = compareThisPropArr[j];
      if(compareThisPropArr.indexOf(thisProp) == -1 || compareToPropArr.indexOf(thisCompareProp) == -1){
        allFound = false;
        break;
      }
    };
  };
  if(!allFound){
    resMsg = "Not All Found"
  } else {
    resMsg = "All Found"
  }

  return {
    resMsg : resMsg,
    propCount : propCount
  };
};

function getPropertyList(obj){
  var arr = [];
  for(var all in obj){
    arr.push(all);
  }
  return arr;
};

function getSpecificPropertyListObj(obj, prop){
  var arr = [];
  for(var all in obj){
    if(obj[all].hasOwnProperty(prop)){
      arr.push(obj[all][prop]);
    }
  }
  return arr;
};

function getSpecificPropertyObj(obj, prop, value){
  for(var all in obj){
    if(obj[all].hasOwnProperty(prop) && obj[all][prop] == value){
      return obj[all];
    }
  }
  return null;
};

function getSpecificPropertyListArr(srcArr, prop){
  var arr = [];
  for (var i = 0; i < srcArr.length; i++) {
    if(srcArr[i].hasOwnProperty(prop)){
      arr.push(srcArr[i][prop]);
    }
  }
  return arr;
};

function getSpecificValuePropertyListArr(srcArr, prop, value){
  var arr = [];
  for (var i = 0; i < srcArr.length; i++) {
    if(srcArr[i].hasOwnProperty(prop) && srcArr[i][prop] == value){
      arr.push(srcArr[i][prop]);
    }
  }
  return arr;
};



//==================================================================================//

//================================== FUNCTIONS_2 ===================================//

function writeFile(fileObj, contents, encoding){
	if(typeof encoding == "string"){
		fileObj.encoding = encoding;
	}
	fileObj.open("w");
	fileObj.write(contents);
	fileObj.close();
};

function writeSettingsFile(settingsObj) {
	var scriptDataFolder = SESSION.scriptDataFolder;
 	if(scriptDataFolder.exists){
 		var settingsFile = SESSION.settingsFile;
	  try{
      writeFile(settingsFile, JSON.stringify(settingsObj));
	    alert("Settings file successfully saved in '" + decodeURI(settingsFile) + "'");
	  } catch(e) {
	    alert(e);
	  }
	} else {
		scriptAlert("The folder '" + scriptDataFolder + "' does not exist and Settings file could not be written.");
	}
};

function getScriptDataObj(){
	// must have updated object first
	var obj = {};
	obj.WARNINGSETTINGS = WARNINGSETTINGS;
	obj.PRESETS = PRESETS;
	obj.DATASETNAMEFIELDS = DATASETNAMEFIELDS_current;
	if(typeof(VI_MEMORY_SETTINGS) != "undefined"){
		obj.lastChosenDataFilePath = VI_MEMORY_SETTINGS.lastChosenDataFilePath;
	}
	return obj;
};

function updateScriptDataFromUI(UIElements, presetName){
	var presetName = presetName || SESSION.currentLoadedPresetName;
	var presetObj = {};
	for ( var all in PRESETS[0] ){
		if(UIElements.hasOwnProperty(all) && typeof UIElements[all].getValue == "function"){
			presetObj[all] = UIElements[all].getValue();
		}
	}
	var warningList = UIElements["list_warnings"];
	for ( var all in WARNINGSETTINGS ){
		WARNINGSETTINGS[all] = warningList.find(unCamelCaseSplit(all)).checked;
	}
	presetObj["datasetNameObj"] = clone(DATASETNAMEFIELDS_current);
	var loadedPreset = PRESETS.getByName(presetName);

	for(var all in presetObj){
		loadedPreset[all] = presetObj[all];
	}
};

function getUIData(UIElements){
	var presetObj = {};
	for ( var all in PRESETS[0]){
		if(UIElements.hasOwnProperty(all) && typeof UIElements[all].getValue == "function"){
			presetObj[all] = UIElements[all].getValue();
		}
	}
	for ( var all in WARNINGSETTINGS ){
		if(UIElements.hasOwnProperty(all) && typeof UIElements[all].getValue == "function"){
			WARNINGSETTINGS[all] = UIElements[all].getValue();
		}
	}
	presetObj.datasetNameObj = DATASETNAMEFIELDS_current;
	return presetObj;
};

function populateUI(UIElements){
	var currentLoadedPresetObj = PRESETS.getByName(SESSION.currentLoadedPresetName);
	for (var i = 0; i < UIElements["currentlySelectedPresetName"].length; i++) {
		UIElements["currentlySelectedPresetName"][i].setValue(SESSION.currentLoadedPresetName);
	};
	for (var all in UIElements){
	  if( all in UIElements && all in SETTINGS ){		
	    SETTINGS[all] = (currentLoadedPresetObj[all]);
	  }
	}
	for ( var all in PRESETS[0]){
		if(UIElements.hasOwnProperty(all) && typeof UIElements[all].getValue == "function"){
			UIElements[all].setValue(currentLoadedPresetObj[all]);
		}
	}
	var warningList = UIElements["list_warnings"];
	for ( var all in WARNINGSETTINGS){
		warningList.find(unCamelCaseSplit(all)).checked = WARNINGSETTINGS[all];
	}
	UIElements["disp_dataFile"].notify("onChange");
	var xmlPathStr = UIElements["xmlPath"].getValue();
	if(xmlPathStr == "" || xmlPathStr == "temp" || xmlPathStr == "undefined"){
		UIElements["xmlPath"].setValue(SETTINGS.getDataXMLDestination());
	}
	UIElements["datasetNamePreview"].setValue(getDatasetNamePreviewString());
};

function getCurrentlySelectedPresetName(){
	var thisPreset;
	for(var i = 0; i < PRESETS.length; i++){
		thisPreset = PRESETS[i];
		if(thisPreset.currentlySelected){
			return thisPreset.name;
		}
	}
};

function setCurrentlySelectedPresetName(name){
	var thisPreset;
	for(var i = 0; i < PRESETS.length; i++){
		thisPreset = PRESETS[i];
		if(name == thisPreset.name){
			thisPreset.currentlySelected = true;
		} else {
			thisPreset.currentlySelected = false;
		}
	}
};

function addVarNameDatasetNames(){
	FIELDNAMEOPTIONS_current = clone(FIELDNAMEOPTIONS);
	var varNames = DATA.getVariableNames();
	if(varNames.length == 0){
		return;
	}
	var thisName, key;
	for (var i = 0; i < varNames.length; i++) {
		thisName = varNames[i];
		key = "variable_" + (i + 1) + "_value";
		FIELDNAMEOPTIONS_current[key] = {
			defaultText : thisName,
			displayText : "Variable " + (i + 1) + " Value : \"" + thisName + "\"",
			type : key
		}
	};

	DATASETNAMEFIELDS_current = clearOutOfBoundVariables(DATASETNAMEFIELDS_current);

};

function clearOutOfBoundVariables(obj){
	var varNames = DATA.getVariableNames();
	var idx;
	for(var all in obj){
		if(obj[all].type.match(SESSION.regexps.varRx)){
			idx = (obj[all].type.match(/\d+/) * 1) - 1;
			if(idx < varNames.length){
				obj[all].text = varNames[idx];
			} else {
				obj[all].type = "nothing";
				obj[all].text = "";
			}
		}
	}
	return obj;
};

function getPrependPathValue(varObj, cellData){
  var folderDiv = (SESSION.os == "Windows")? "\\" : "/";
  cellData = varObj.url + folderDiv + cellData;
  cellData = (cellData).replace(/\\\\/g,"//").replace(/\\/g,"/");
  return cellData;
};

function getRecordDatasetName(dsNameFieldObj, row, index){
	var str = "";
	for(var all in dsNameFieldObj){
		str += getDsNameField(dsNameFieldObj, all, row, index);
	};
	return str;
};

function getDsNameField(dsNameFieldObj, fieldName, row, index){

	function getCurrentText(dsNameFieldObj, fieldName){
		return dsNameFieldObj[fieldName].text;
	};

	if(dsNameFieldObj[fieldName].type.match(SESSION.regexps.varRx)){
		var varIndex = (dsNameFieldObj[fieldName].type.replace(/[^\d]/g, "") * 1) - 1;
		if(varIndex < row.length){
			return row[varIndex];
		}
	}

	switch(dsNameFieldObj[fieldName].type){
		case "customText" : {
			return getCurrentText(dsNameFieldObj, fieldName);
			break;
		};
		case "dash" : {
			return getCurrentText(dsNameFieldObj, fieldName);
			break;
		};
		case "nothing" : {
			return getCurrentText(dsNameFieldObj, fieldName);
			break;
		};
		case "space" : {
			return getCurrentText(dsNameFieldObj, fieldName);
			break;
		};
		case "increment" : {
			return index + SETTINGS.incrementStartNumber;
			break;
		};
		case "underscore" : {
			return getCurrentText(dsNameFieldObj, fieldName);
			break;
		};
		default : {
			return "";
		};
	}
	return "";
};

function getFileRefTestResults(){
	if(DATA.currentVars.length == 0){
		return null;
	}
	var log = {
		foundImages : ["Found Images: "],
		foundGraphs : ["Found Graphs: "],
		missingImages : ["Missing Images: "],
		missingGraphs : ["Missing Graphs: "]
	};

	var item, thisVar, test;

	for(var i = 0; i < DATA.currentGrid.length; i++){
		for (var j = 0; j < DATA.currentVars.length; j++) {
			item = DATA.currentGrid[i][j];
			thisVar = DATA.currentVars[j];
			if(thisVar.varType == "Image" || thisVar.varType == "Graph"){
				test = File(item);
				if(test.exists){
					log["found" + thisVar.varType + "s"].push(item);
				} else {
					log["missing" + thisVar.varType + "s"].push(item);
				}
			}
		};
	}
	return log;
};

function getSpecificFileRefTestResultsLog(log, prop){
	// images or graphs
	if(prop != "Images" && prop != "Graphs"){
		alert("Only 'Images' and 'Graphs' are searchable properties in function 'getSpecificFileRefTestResultsLog(log, prop)'");
		return null;
	}

	var specificLog = {
		found : log["found" + prop],
		missing : log["missing" + prop]
	};

	var resMsg = "";
	for(var all in specificLog){
		specificLog[all][0] += ("(" + (specificLog[all].length - 1) + ")\n---------------");
		resMsg += (specificLog[all].join("\n") + "\r\r");
	}
	return resMsg;
};

function fileRefTestHandler(){
	// designed to be called from a button which has a .key property saying which part of the log to show. (.key = "Images" | .key = "Graphs")
	if(DATA.currentVars.length == 0){
		alert("Please import a data file first.");
		return;
	}
	DATA.getCurrentGrid();
	var allResults = getFileRefTestResults();
	var thisRefResultNumFound = allResults["found" + this.key].length - 1;
	var thisRefResultNumMissing = allResults["missing" + this.key].length - 1;
	var foundMissingNum = thisRefResultNumFound + "/" + (thisRefResultNumFound + thisRefResultNumMissing);

	// var logStr = getSpecificFileRefTestResultsLog(allResults, this.key);
	var keySingular = this.key.replace(/s$/, "");

	simpleShowModal(TestManager[keySingular.toLowerCase() + "Files"].makeUIContents, {
		title : this.key.replace(/s$/, "") + " Files Log",
		foundFiles : allResults["found" + this.key].slice(1).join("\n"),
		missingFiles : allResults["missing" + this.key].slice(1).join("\n"),
		foundMissingNum : foundMissingNum,
		size : [800, 220]
	});

	this.disp.setValue(foundMissingNum);
	var tabGroupKey = "testTabs";
	if(this.window.UITestElements.hasOwnProperty(tabGroupKey)){
		var testTabPanel = this.window.UITestElements["testTabs"], thisTab;
		for (var i = 0; i < testTabPanel.children.length; i++) {
			thisTab = testTabPanel.children[i];
			if(thisTab.hasOwnProperty("key") && thisTab.key == keySingular){
				thisTab.populateFields();
			}
		};
	}
};

function displayFoundArtBindings(UITestElements){
	var doc = app.activeDocument;
	DocumentBinding.getNamedBinds(doc);
	UITestElements["foundArtBindings"].setValue( DocumentBinding.getBindObjectTestResults().foundItemString );
	var tabItemKey = "testTabArtBinding";
	if(UITestElements.hasOwnProperty(tabItemKey)){
		UITestElements[tabItemKey].populateFields();
	}
};




//==================================================================================//

//================================== FUNCTIONS_2 ===================================//

function stringXmlSafe(str){
  str=str.toString();
  str=str.replace(/&(?!(amp;|gt;|lt;|quot;|apos;))/g, "&amp;");
  str=str.replace(/</g, "&lt;");
  str=str.replace(/>/g, "&gt;");
  str=str.replace(/'/g, "&apos;");
  str=str.replace(/"/g, "&quot;");
  return str;
};

function disguiseXmlEntities(str){
  str=str.toString();
  str=str.replace(/&(?!(amp;|gt;|lt;|quot;|apos;))/g, "_#_amp_#_");
  str=str.replace(/</g, "_#_lt_#_");
  str=str.replace(/>/g, "_#_gt_#_");
  str=str.replace(/'/g, "_#_apos_#_");
  str=str.replace(/"/g, "_#_quot_#_");
  return str;
};

function undisguiseXmlEntities(str){
  str=str.toString();
  str=str.replace(/_#_amp_#_/g, "&amp;");
  str=str.replace(/_#_lt_#_/g, "&lt;");
  str=str.replace(/_#_gt_#_/g, "&gt;");
  str=str.replace(/_#_apos_#_/g, "&apos;");
  str=str.replace(/_#_quot_#_/g, "&quot;");
  return str;
};

function wrapCDATA(str, propNm){
  str = '<data>' + str + '</data>';
  str = str.replace(/(\<data\>)/g, '<' + propNm + '><![CDATA[');
  str = str.replace(/(\<\/data\>)/g, ']]\>' + '</' + propNm + '>');
  return XML(str);
};

function isXMLTagName ( tag ){
	//http://stackoverflow.com/questions/3158274/what-would-be-a-regex-for-valid-xml-names
  var t = !/^[xX][mM][lL].*/.test(tag); // condition 3 
  t = t && /^[a-zA-Z_].*/.test(tag);  // condition 2
  t = t && /^[a-zA-Z0-9_\-\.]+$/.test(tag); // condition 4
  return t; 
};

function getXmlFileDest(userInputObj){
	if(!SETTINGS.keepXML){
		var dataFile = File(userInputObj.sourceDataPath);
		var xmlDest = File(dataFile.parent + "/" + decodeURI(dataFile.name).replace(/\.\w+$/, ".xml"))
			.saveDlg("Where would you like to save the Variable Data XML file?");
		return xmlDest;
	} else {
		return File(userInputObj.xmlPath);
	}
};

function forceRefreshDoc(){
  var temp = app.documents.add();
  temp.close(SaveOptions.DONOTSAVECHANGES);
};

function cycleUpdateAllDatasets(doc, displayElem){
  for(var i = 0; i < doc.dataSets.length; i++){
    var d = doc.dataSets[i];
    d.display();
		if(typeof displayElem != "undefined"){
			displayElem.text = (i + 1) + " of " + doc.dataSets.length;
			displayElem.window.update();
		}
    redraw();
    $.sleep(10);
    d.update();
  };
  doc.dataSets[0].display();
  displayElem.text = (1) + " of " + doc.dataSets.length;
};

function processUserInput(userInputObj) {

	var xmlDest, doc, problem;

	var xmlString = XMLStringBuilder.generateVariableLibraryXMLString();
	if(xmlString == null){
		return;
	}

	if(userInputObj.purpose == "createXML"){
		xmlDest = getXmlFileDest(userInputObj);
		if(xmlDest == null){
			alert("Cancelled: no XML file produced.");
			return;
		}

		writeFile(xmlDest, xmlString, "UTF-8");

		if(xmlDest.exists){
			// alert("File successfully saved in '" + decodeURI(xmlDest) + "'");
			finishedXMLFileDialog(xmlDest, DATA.currentVars.length, DATA.currentGrid.length);
		} else {
			alert("Sorry, the file '" + decodeURI(xmlDest) + "' could not be saved.");
		}
	} else {
		
		xmlDest = File(userInputObj.xmlPath);
		writeFile(xmlDest, xmlString, "UTF-8");
		if(!xmlDest.exists){
			alert("Sorry, the file '" + decodeURI(xmlDest) + "' could not be saved.");
			return;
		}
		doc = app.activeDocument;
		if(doc.variables.length > 0){
			if(!CONFIRMS["showExistingVariablesWarning"]( doc.variables.length )){
				alert("Cancelled: no variables were imported.");
				return;
			}
			if(SETTINGS.selectedAutobinding != "noAutoBinding"){
				for (var i = doc.variables.length - 1; i >= 0; i--) {
					doc.variables[i].remove();
				}
			}
		}

		try {
			problem = "Importing Variables into the document from created XML file.";
			doc.importVariables(xmlDest);
			forceRefreshDoc(); // force refresh actually makes binding possible?

			if(SETTINGS.selectedAutobinding != "noAutoBinding" &&
			!(userInputObj.fileRefsLog.missingImages.length > 1 || userInputObj.fileRefsLog.missingGraphs.length > 1)){
				problem = "Auto-Binding variables to art items based on '" + unCamelCaseSplit(SETTINGS.selectedAutobinding) + "'";
				DocumentBinding.bindDocumentItems(doc);
			}

			if(userInputObj.fileRefsLog.missingImages.length < 2 || userInputObj.fileRefsLog.missingGraphs.length < 2){
				if(doc.dataSets.length > 0 && SETTINGS.selectedAutobinding != "noAutoBinding"){
					problem = "Displaying first dataset of the document."
					doc.dataSets[0].display(); // display the first dataset.
				}
			}
			finishedXMLImportDialog(
				DATA.currentVars.length,
				DATA.currentGrid.length,
				userInputObj.fileRefsLog.missingImages.length - 1,
				userInputObj.fileRefsLog.missingGraphs.length - 1
			);
			// victory!
		} catch(e) {
			alert("Sorry, something went wrong with the import of the generated XML file '" + xmlDest + "':\n" + e + "\nPossible Problem: " + problem);
		}

		if(!SETTINGS.keepXML){
			xmlDest.remove();
		}
	}
};



//==================================================================================//

//==================================== OBJECTS =====================================//
var SESSION = {
	os : $.os.match('Windows') ? 'Windows' : 'Mac',
	AIVersion : parseInt(app.version.split(/\./)[0]),
	scriptName : "VariableImporter.jsx",
	"scriptVersion" : "8.1.10",
	currentLoadedPresetName : "",
	regexps : {
		varRx : /variable_\d+_value/,
		fileStartRx : /^file\:\/\/\//
	},
	multiColumnListBoxTest : true,
	documentExists : (app.documents.length > 0),
	settingsFile : function(){
		return File(Folder.myDocuments + "/VariableImporter/VariableImporter_SETTINGS.json");
	}(),
	scriptDataFolder : function(){
		var f = Folder(Folder.myDocuments + "/VariableImporter");
		if(!f.exists){
			f.create();
		}
		return f;
	}(),
	dataFileMask : function(){
		return (this.os == 'Windows')? "*.txt;*.TXT;*.csv;*.CSV;" : function(f){
			return f instanceof Folder || (f instanceof File && decodeURI(f.name).match(/(\.txt|\.csv)$/i));
		};
	},
	tabbedGroupTest : false,
	imageTest : false,
	doImageTest : function(){
		/*var thisIcon;
		var flag = true;
		try{
			for (var all in ICONS) {
				thisIcon = ICONS[all];
				parent.add("iconbutton", undefined, thisIcon);
			};
		} catch(e) {
			// fail Error 520, try to write the images
			flag = writeScriptImages();
		}
		this.imageTest = flag;
		*/
		var flag = true, thisIconString, test;
		for (var all in ICONS) {
			thisIconString = ICONS[all];
			test = getScriptImage({
				name : all,
				data : thisIconString
			});
			ICONS[all] = test;
			if(!test){
				flag = false;
			}
		};
		this.imageTest = flag;
		return flag;
	},
	init : function(){
		// load from settings function
		if(this.settingsFile.exists){
			this.settingsFile.open('r');
			var settingsObj = JSON.parse(this.settingsFile.read()), tempObj;
			this.settingsFile.close();
			if(settingsObj.hasOwnProperty("PRESETS")){
				for( var i = 0; i < settingsObj.PRESETS.length; i++ ){
					tempObj = {};
					for(var all in PRESETS[0]){
						if(settingsObj.PRESETS[i].hasOwnProperty(all)){
							tempObj[all] = settingsObj.PRESETS[i][all];
							if(all == "currentlySelected" && settingsObj.PRESETS[i][all] === true){
								if(settingsObj.PRESETS[i].hasOwnProperty("datasetNameObj")){
									DATASETNAMEFIELDS_current = clone(settingsObj.PRESETS[i].datasetNameObj);
								}
							}
						} else {
							tempObj[all] = PRESETS[0][all];
						}
					}
					PRESETS[i] = tempObj;
				}
			}
			if(settingsObj.hasOwnProperty("lastChosenDataFilePath") && VI_MEMORY_SETTINGS.lastChosenDataFilePath == ""){
				VI_MEMORY_SETTINGS.lastChosenDataFilePath = settingsObj["lastChosenDataFilePath"];
			}
			if(settingsObj.hasOwnProperty("WARNINGSETTINGS") && comparePropNames(settingsObj.WARNINGSETTINGS, WARNINGSETTINGS).resMsg == "All Found"){
				WARNINGSETTINGS = settingsObj.WARNINGSETTINGS;
				for(var all in WARNINGSETTINGS){
					if(SETTINGS.hasOwnProperty(all)){
						SETTINGS[all] = WARNINGSETTINGS[all];
					}
				}
			}
		} else {
			PRESETS.getByName("default").datasetNameObj = DATASETNAMEFIELDS_current;
		}

		this.currentLoadedPresetName = getCurrentlySelectedPresetName();
		this.multiColumnListBoxTest = (this.os == "Windows" || this.AIVersion != 16) ? true : false;
		this.tabbedGroupTest = (this.AIVersion > 13) ? true : false;
		// ScriptUI tabbedpanel was unavailable in Illustrator CS3
	}
};

var PresetDialogPurposes = {
	Add : {
		resultAction : function(presetDialogResult, UIElements, listBox){
			SESSION.currentLoadedPresetName = presetDialogResult.presetName;
			PRESETS.addItem(PRESETS.getByName("default"), SESSION.currentLoadedPresetName);
			updateScriptDataFromUI(UIElements);
			UIElements.saved = (UIElements["disp_dataFile"].getValue() != "");
			populateUI(UIElements);
			refreshPresetListbox(listBox);
		},
		presetDispEditable : true,
		placeholderName : "New Preset",
		actionButtonName : "Add",
		showRemoveButton : false
	},
	Remove : {
		resultAction : function(presetDialogResult, UIElements, listBox){
			SESSION.currentLoadedPresetName = "default";
			setCurrentlySelectedPresetName("default");
			PRESETS.removeItemByName(presetDialogResult.presetName);
			populateUI(UIElements);
			refreshPresetListbox(listBox);
		},
		presetDispEditable : false,
		placeholderName : "self",
		actionButtonName : "Remove",
		showRemoveButton : true
	},
	Activate : {
		resultAction : function(presetDialogResult, UIElements){
			var thisName = presetDialogResult.presetName;
			var thisPreset = PRESETS.getByName(thisName);
			SESSION.currentLoadedPresetName = thisName;
			setCurrentlySelectedPresetName(thisName);
			if(thisPreset.hasOwnProperty("datasetNameObj")){
				DATASETNAMEFIELDS_current = clone(thisPreset.datasetNameObj);
			}
			// switchStackView(UIElements["stackGroup"], "variablesDisplay");
			UIElements["variablesDisplayR"].notify("onClick");
			populateUI(UIElements);
		},
		presetDispEditable : false,
		placeholderName : "self",
		actionButtonName : "Activate",
		showRemoveButton : true
	},
	Update : {
		resultAction : function(presetDialogResult, UIElements, listBox){
			var oldName = presetDialogResult.oldName;
			var newName = presetDialogResult.presetName;
			if(PRESETS.getByName(newName) != null && oldName != newName){
				if(!CONFIRMS["overwriteOtherExistingPreset"]( newName )){
					return;
				}
			} else {
				PRESETS.getByName(oldName).name = newName;
			}
			SESSION.currentLoadedPresetName = newName;
			setCurrentlySelectedPresetName(newName);
			updateScriptDataFromUI(UIElements, newName);
			populateUI(UIElements);
			refreshPresetListbox(listBox);
		},
		presetDispEditable : true,
		placeholderName : "self",
		actionButtonName : "Update",
		showRemoveButton : false,
		oldName : ""
	}
};

if(typeof(VI_MEMORY_SETTINGS) == "undefined"){
	VI_MEMORY_SETTINGS = {
		"lastChosenDataFilePath" : ""
	};
}

var PRESETS = [
	{
	 	name : "default",
		useHeaders : true,
		currentlySelected : true,
		transpose : false,
		dbslNextline : false,
		keepXML : false,
		xmlPath : "temp",
		selectedAutobinding : 'bindByName',
		prependToAllImages : false,
		prependImagePath : '',
		prependToAllGraphs : false,
		prependGraphPath : '',
		datasetNameObj : {},
	}
];

PRESETS.getByName = function(value){
	var item;
	for(var i = 0; i < this.length; i++){
		item = this[i];
		if(item.hasOwnProperty("name")){
			if(item.name == value){
				return item;
			}
		}
	}
	return null;
};

PRESETS.getAllNames = function(){
	var namesArr = [];
	var item;
	for(var i = 0; i < this.length; i++){
		item = this[i];
		if(item.hasOwnProperty("name")){
			namesArr.push(item.name);
		}
	}
	return namesArr;
};

PRESETS.removeItemByName = function(name){
	var item;
	for(var i = 0; i < this.length; i++){
		item = this[i];
		if(item.hasOwnProperty("name") && item.name == name){
			this.splice(i, 1);
			break;
		}
	}
};

PRESETS.addItem = function(cloneObj, newName){
	if(this.getByName(newName) != null){
		var conf = confirm("This preset '" + newName + "' already exists, overwrite?");
		if(!conf){
			return;
		}
		this.removeItemByName(newName);
	}
	var obj = {};
	for(var all in cloneObj){
		obj[all] = cloneObj[all];
	}
	obj.name = newName;
	this.push(obj);
	var thisObj;
	for(var i = 0; i < this.length; i++){
		thisObj = this[i];
		if(thisObj.name != newName){
			thisObj.currentlySelected = false;
		} else {
			thisObj.currentlySelected = true;
		}
	}
};

var WARNINGSETTINGS = {
	showDatasetNamingWarning : true,
	showExistingVariablesWarning : true,
	confirmRemovalOfPresets : true,
	confirmUpdatingOfPresets : true
};

var CONFIRMS = {
	showDatasetNamingWarning : function(){
		if(WARNINGSETTINGS["showDatasetNamingWarning"] == true){
			return confirm("This data import has been defaulted to generic dataset names. Continue import?");
		}
		return true;
	},
	showExistingVariablesWarning : function( numVars ){
		if(WARNINGSETTINGS["showExistingVariablesWarning"] == true){
			return confirm("This document already contains " + numVars + " variable" + ((numVars > 1) ? "s" : "") +
				" which may be overwritten. Continue import?");
		}
		return true;
	},
	confirmRemovalOfPresets : function(presetName){
		if(WARNINGSETTINGS["confirmRemovalOfPresets"] == true){
			return confirm("Remove Preset '" + presetName + "' ?");
		}
		return true;
	},
	confirmUpdatingOfPresets : function(presetName){
		if(WARNINGSETTINGS["confirmUpdatingOfPresets"] == true){
			return confirm("Update Preset '" + presetName + "' ?");
		}
		return true;
	},
	overwriteOtherExistingPreset : function(presetName){
		if(WARNINGSETTINGS["confirmUpdatingOfPresets"] == true){
			return confirm("Overwrite Preset '" + presetName + "' ?");
		}
		return true;
	}
};

var SETTINGS = {
	useHeaders : true,
	transpose : false,
	dbslNextline : false,
	keepXML : false,
	xmlPath : "",
	selectedAutobinding : "noAutoBinding",
	prependToAllImages : false,
	prependImagePath : "",
	prependToAllGraphs : false,
	prependGraphPath : "",
	getDataXMLDestination : function(){
		return File(Folder.desktop + "/VariableImporterData_" + new Date().getTime() + ".xml");
	},
	incrementStartNumber : 1
};

var DATASETNAMEFIELDS = {
	field_1 : {
		type : "customText",
		text : "Record"
	},
	field_2 : {
		type : "dash",
		text : "-"
	},
	field_3 : {
		type : "increment",
		text : "INC"
	},
	field_4 : {
		type : "nothing",
		text : ""
	},
	field_5 : {
		type : "nothing",
		text : ""
	},
	field_6 : {
		type : "nothing",
		text : ""
	}
};

var FIELDNAMEOPTIONS = {
	customText : {
		defaultText : "[Edit Text]",
		displayText : "Custom Text",
		type : "customText"
	},
	dash : {
		defaultText : "-",
		displayText : "Dash",
		type : "dash"
	},
	nothing : {
		defaultText : "",
		displayText : "Nothing",
		type : "nothing"
	},
	space : {
		defaultText : " ",
		displayText : "Space",
		type : "space"
	},
	increment : {
		defaultText : "INC",
		displayText : "Increment",
		type : "increment"
	},
	underscore : {
		defaultText : "_",
		displayText : "Underscore",
		type : "underscore"
	}
};

var DATASETNAMEFIELDS_current = clone(DATASETNAMEFIELDS);
var FIELDNAMEOPTIONS_current =  clone(FIELDNAMEOPTIONS);

var VARTYPES = {
	"Text" : {
		key : "",
		type : "Text",
		itemKind : "TextFrame",
		trait : "textcontent",
		category : "&ns_flows;",
		varKind : "VariableKind.TEXTUAL",
		contentKind : "contentVariable"
	},
	"Visibility" : {
		key : "#",
		type : "Visibility",
		itemKind : "All",
		trait : "visibility",
		category : "&ns_vars;",
		varKind : "VariableKind.VISIBILITY",
		contentKind : "visibilityVariable"
	},
	"Image" : {
		key : "@",
		type : "Image",
		itemKind : "PlacedItem",
		trait : "fileref",
		category : "&ns_vars;",
		varKind : "VariableKind.IMAGE",
		contentKind : "contentVariable"
	},
	"Graph" : {
		key : "%",
		type : "Graph",
		itemKind : "GraphItem",
		trait : "graphdata",
		category : "&ns_graphs;",
		varKind : "VariableKind.GRAPH",
		contentKind : "contentVariable"
	}
};

var UI_SIZING = {
	variableDisplay : {
		small : {
			varAmt : "1-8",
			height : 150
		},
		medium : {
			varAmt : "9-15",
			height : 300
		},
		large : {
			varAmt : "16-Infinity",
			height : 500
		}
	},
	bindingTestDisplay : {
		preferredSize : [430, 300]
	},
	foundOfTotalDisp : {
		// those inputs which show found/total numbers of file references
		characters : 12
	},
	sizeSpecs : {
		platforms : {
			Windows : {

			},
			Mac : {

			}
		}
	},
	panelWidth_1 : 466,
	init : function(){

	}
};

var DATA = {
	grid : [],
	transposedGrid : [],
	currentSourceFile : "",
	currentVars : [
		/*{
			varName : "Variable1",
			varType : "Text",
			url : "",
			varIndex : 0
		}*/
	],
	oldVars : [],
	testVariableName : function(oldName, newName){
		var msg = "", allVarNames = getSpecificPropertyListArr(DATA.currentVars, "varName");
		if( !isXMLTagName(newName) ){
			msg = "The '" + newName + "' variable name doesn't not follow the proper XML syntax:\n" + INFO.xmlRequirements;
			alert(msg);
			return false;
		} else {
			if(checkForSingleDuplicate(allVarNames, newName).length > 0 && oldName != newName){
				msg = "The '" + newName + "' variable name already exists among imported variable names.";
				alert(msg);
				return false;
			}
		}
		return true;
	},
	testNameProp_unique : function(argsObj){
		// argsObj = {collection : [], prop : "varName", prefixString : "Variable", collectionName : "Variables", showDialog : true}
		var badArr = [], namesArr, msg;
		namesArr = (typeof argsObj.prop == "string") ? getSpecificPropertyListArr(argsObj.collection, argsObj.prop) : argsObj.collection;

		badArr = arrayGetUniqueDuplicates(namesArr);
		if(badArr.length > 0){

			msg = "The following " + argsObj.collectionName + " name(s) are found more than once\n" +
				"(All " + argsObj.collectionName + " names are going to be Auto-replaced):" + 
				"\n--------------------------------------\n" + (badArr).join("\n");
			if(argsObj.showDialog){
				quickView(msg, argsObj.collectionName + " Names Correction", [400, 550]);
			}
			this.genericize(argsObj.collection, argsObj.prop, argsObj.prefixString);
			return false;
		}
		return true;
	},
	testVarNames_xml : function(){
		var badArr = [], thisVar, msg;
		for (var i = 0; i < this.currentVars.length; i++) {
			thisVar = this.currentVars[i];
			if( !isXMLTagName(thisVar.varName) ){
				badArr.push(thisVar.varName);
			}
		}
		if(badArr.length > 0){

			msg = "Proper XML Syntax isn't followed by some variable name(s)\n" + INFO.xmlRequirements + "\n" +
				"(All names are going to be Auto-replaced):\n--------------------------------------\n" + (badArr).join("\n");

			quickView(msg, "Variable Name Correction", [400, 550]);
			this.genericize(this.currentVars, "varName", "Variable");
			return false;
		} else {
			return true;
		}
	},
	genericize : function(collection, prop, prefixString){
		if(typeof prop == "undefined"){
			for (var i = 0; i < collection.length; i++) {
				collection[i] = prefixString + (i + 1);
			}
		} else {
			for (var i = 0; i < collection.length; i++) {
				collection[i][prop] = prefixString + (i + 1);
			}
		}
	},
	getCurrentVars : function(UIElements){
		if(this.currentSourceFile == "" || this.grid.length == 0){
			return null;
		}
		this.oldVars = [];

		if(typeof UIElements != 'undefined' && UIElements["variableDisplay"].items.length > 0){
			for(var i = 0; i < DATA.currentVars.length; i++){
				if(i < DATA.currentVars.length){
					this.oldVars.push(DATA.currentVars[i]);
				}
			}
		}
		var data = (SETTINGS.transpose) ? this.transposedGrid : this.grid;
		this.currentVars = [];
		var varName = "", varType = "", datum = "", thisUrl;
		for(var i = 0; i < data[0].length; i++){
			// header row is variable names
			datum = data[0][i];
			varName = (SETTINGS.useHeaders) ? datum.replace(/^[@#%]/, "") : "Variable" + (i + 1);
			varType = (SETTINGS.useHeaders) ? getVariableType(datum) : "Text";
			thisUrl = "";
			if(varType == "Image" || varType == "Graph"){
				if(SETTINGS["prependToAll" + varType + "s"]){
					thisUrl = SETTINGS["prepend" + varType + "Path"];
				}
			}

			this.currentVars.push({
				varIndex : i,
				varName : varName,
				varType : varType,
				useUrl : true,
				url : thisUrl
			});
		}
		// go through variable names and make sure they follow xml syntax, if they all do, then make sure they're unique also
		// any failure will cause genericizing
		if(this.testVarNames_xml()){
			this.testNameProp_unique({
				collection : this.currentVars,
				prop : "varName",
				prefixString : "Variable",
				collectionName : "Variable",
				showDialog : true
			});
		}
	},
	getVariableNames : function(){
		if(this.currentVars.length > 0){
			return getSpecificPropertyListArr(this.currentVars, "varName");
		}
		return [];
	},
	currentGrid : [],
	currentDatasetNames : [],
	getCurrentGrid : function(){
		if(this.currentVars.length == 0){
			return [];
		}
		var data = (!SETTINGS.transpose) ? this.grid : this.transposedGrid;
		var start = (!SETTINGS.useHeaders) ? 0 : 1;
		var row, cell, arr = [], rowArr = [], thisVar, dsnArr = [];
		for (var i = start; i < data.length; i++) {
			row = data[i];
			rowArr = [];
			dsnArr.push(getRecordDatasetName(DATASETNAMEFIELDS_current, row, i - start));
			for (var j = 0; j < row.length; j++) {
				cell = row[j];
				thisVar = this.currentVars[j];
				if(thisVar.url != "" && (thisVar.varType == "Image" || thisVar.varType == "Graph")){
					cell = getPrependPathValue(thisVar, cell);
				}
				rowArr.push(cell);
			};
			arr.push(rowArr);
		};
		this.currentGrid = arr;

		this.currentDatasetNames = dsnArr;
		// untested for uniqueness at this point.
	},
	getTestDatasetNames : function(dsNameFieldObj){
		if(this.currentVars.length == 0){
			return [];
		}
		var data = (!SETTINGS.transpose) ? this.grid : this.transposedGrid;
		var start = (!SETTINGS.useHeaders) ? 0 : 1;
		var row, dsnArr = [];
		for (var i = start; i < data.length; i++) {
			row = data[i];
			dsnArr.push(getRecordDatasetName(dsNameFieldObj, row, i - start));
		};

		// make sure dataset names are unique, or else they get genericized
		// already done when getting currentGrid, omit dialog
		this.testNameProp_unique({
			collection : dsnArr,
			prop : undefined,
			prefixString : "Record ",
			collectionName : "Dataset",
			showDialog : WARNINGSETTINGS["showDatasetNamingWarning"]
		});

		return dsnArr;
	}
};

var AUTOBINDING = {
	noAutoBinding : {
		type : "noAutoBinding",
		text : "No Auto Binding",
		getProp : function(item){
			return "N/A";
		}
	},
	bindByName : {
		type : "bindByName",
		text : "Bind By Name",
		getProp : function(item){
			return item["name"];
		}
	},
	bindByNote : {
		type : "bindByNote",
		text : "Bind By Note",
		getProp : function(item){
			return item["note"];
		}
	},
	bindByTag : {
		type : "bindByTag",
		text : "Bind By Tag",
		preferredTagName : "VariableImporterBinding",
		getProp : function(item){
			if(item.tags.length > 0){
				return getSpecificPropertyListArr(item.tags, "name");
			} else {
				return [];
			}
		}
	}
};

var VisibilityKeys = [
	{
		displayText : "true",
		name : "True",
		value : true,
		enabled : true
	},
	{
		displayText : "false",
		name : "False",
		value : false,
		enabled : true
	},
	{
		displayText : "on",
		name : "On",
		value : true,
		enabled : true
	},
	{
		displayText : "off",
		name : "Off",
		value : false,
		enabled : true
	},
	{
		displayText : "1",
		name : "One",
		value : true,
		enabled : true
	},
	{
		displayText : "0",
		name : "Zero",
		value : false,
		enabled : true
	}
];

var ICONS = {
	"Visibility" : "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x02\x00\x00\x00\x02\u00EB\u008AZ\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01?IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B9\u0080qT3\x14|\u00F8\u00F0\u00E1\u00C2\u0085\x0Bp\u00AE\u0081\u0081\u0081\u0080\u0080\x00a\u00CD\x0B\x16,\u00988q\"P\u00A9\u008E\u00A9\u00C5\u0091\u00FB/\u00B9X\u0099\u008DdD\u008E\u00EC\u00DE\x01\u0094\u00CA\u00CF\u00CFOHH\u00C0\u00AEy\u00C3\u0086\r\u008D\u008D\u008D\u00FE\u00FE\u00FE@\x15L\x02\"\u00E7\u009F\u00BE\x05j~\u00F3\u00F5\x07P*\u00D9L]\u0086\u00F1;\u00D0\u00DC\u008D\x1B7\u00D6\u00D7\u00D7\x07\x04\x04@u\x035\u00BF\x7F\u00FF\x1E\u00A8\x01(t\u00FF\u00FE} \u00F7\u00F5\u0097\u00EF\x1B\u00AE<\x002z\u00A6\u00CEP\u00B1\u00F7\u0088\u009A\u00B75a\u00C5A\u00A0 P\x04\u00A8\u00C0\u00C1\u00C1\x01\u00A8\x18\u00A8\x05d+\u0090\x02z\u00A9\u00BF\u00BF\u00FF?\f\u00EC\u00BC\u00F9\u00A4d\u00F3I\u00A0N\u0088?\u0081\u00FA\u0081\u009A\u00D7_~\x00W\x00T\f\u00D4\x02\u00D4\u00C8\u0082\x19\f\u00DF~\u00FD\x01\u00BAv\u00C3\u00AA\r\u00C0`\u0083\x0Br\u00B1aQ\u00C9\x044~\u00FF\u00FE\u00FD\x17/^ttt|\u00F0\u00E0\x01P\u00C8FQ\x1CH\u009A\u00C5\u00E7\x02\u00ED\x04\" \x03\u00C85\u0092\x16\x06\u0092@\x05\u0081\u0081\u0081@\u00C5@-@\u008D\u00D8\x03\u00EC\u00C9\x7F\u00CE\u00B9\u00A7n\u00C2m\u00C0\x15`\u00D8\u00A3\nd\u00BF\u00AB\u00C7\u00B9'o\u00BE\u00FD\u00FE\x0Bt\u00C8\u0095\u00D3'\u0080^\u00C0\x17UTH$\u00A3Y\u0092\x00\x00\b0\x00\u009C \u00F4D\u0080v\u00BF\u00C6\x00\x00\x00\x00IEND\u00AEB`\u0082",
	"Image"	: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x02\x00\x00\x00\x02\u00EB\u008AZ\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\x7FIDATx\u00DAb\u009C\u009B\u00CF@6`b\u00A0\x00\u00B0@(\u00A5\t_H\u00D2v\u00AF\u0080\x07\u00C5fY\u0086j=\x06mm\x06\x0B\x1E\u0086\u00D3\u00C8\u00EA\u0098\x19\u00FE\x13v\u00B6 \u00C3\x06\u00B0\u00D2\u00CF\u00E2\fS\u0091\x04\u00BF\x0B}~y\u00E1\u00D2\u00EB\u009F?\u00FF\u00E2\u00D3\u00FC\u0097\u0081\x17\u00C2\u00F8\u00C5 \r\x17\u00E4\u00FB\u00FB\u00ED\u00E7\x1F\x06y\u00DE\u00BF\u009F>\u00FF\u00C2\u00E9g\u00907\x18\x16\u00883L\u00FB\u00C5 \u00F5\u0092!\x1B\"\u00F2\u00E3\u00F3w&\u00B6\u00DF@\u00C6\u00F3\u00CF\f\x7F\u00BF}\u00E3\u00E6b\u00E5\u00E2b\u00C1\u00AE\u00F9;\u0083\u00C6\x03\u0086Ip\u00EE\u00EB7\u00DFY>\x7F\u00E4Ud\u00E0eg\u00D8}\x07(\u00F0\u00FB\u00DA\u008DwZ\x1AB\u00C8\u00FAY\u00B0\u0086\x04P\u00E7\u00BD\u00FB\x1F!la.\u0098\u00BF\u00FE\u00FE\u00BB{\u00FF#P?33#>\u00CDJ\\?\u00CD\u00F4\x18~\u00FDe\u00B8\u00F5\x06\u00AA\x19H\u00BE\u00FD\u00C6\u00F0\u00ED\u00DB\u00EFO\u009F~\t\n\u00B2\u00A3h.L\u00E5@\u00D6l\u00A4\u00CE\u00DF]\u00F2\u00E3\u00CAK\u0084f6f\u0090\u00FB\x1F=ci\u009A\u00C5\x0F\u00E4\u00E6r#i\u00BEp\u0086\x19Y\u00F3\u00853<5\u00E9\u00AF\u009F\x7F\u00FE\x07\u00D4\t4\x02\x12f@p\u00ED\x027T\u00A5=\u00DE\u00E4\u00B9|\x13\u00AF\u00AB\n\u0083\u008F\x06\u0083\u00A5\x1CB\u00F0\u00C8\x1E\x01\u00A2\u00D2\u00F6\u00F2\u00CD\u00BCh\"\u00CF\x1F\u00B3\u00BF\x7F\u00CBB\u0094\u00E6+7\u00D9\u0081\bY\u00E4\u00C8^~\u009C\u0089\x04\x13\u00D8G\u00C8x9~57\u00FB\u00BA\u00FB\f\u00FB\u00D5\x0B\u00DCh\u00D6\x12\u00D0\f\x04\u00DB\u00F6s\x03\x11-\u00F3\u00F3\\{Fz\u0097$\x00\x01\x06\x00<\u00E3\u0084d\u0089\u00F2\x1C;\x00\x00\x00\x00IEND\u00AEB`\u0082",
	"Graph" : "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x02\x00\x00\x00\x02\u00EB\u008AZ\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00FDIDATx\u00DAbd``\u00F8\u00FF\u00FF?\x03\u00E9\u0080\u0091\u0091\u0091\x05H\u009D={\u0096\u0081,\u00C0H\u0089\u00CDL\f\x14\x00,\u00CE\u00E6z\u00FC\x14\u00C2\u00F8\u00CB\u00CE\u00FESL\u0084\u0080\x01\u00FFQ\u00C1Au]\x0F~\u00C1J\t\u0099\u008B\u00B1I\u00FFq\x03\u00A0F\u00EC\u00CE\u00DE\u00F1\u00F1\u00FD\u00E1/\u009F\b:\x1B\u008B\u00E6\x0B\u00DF\u00BE&\u008A\u0088\u00F303\x13\u00E5\u00E7\x07\u0093\u00B6\n\x1F}\x0E\u00E1?\u0089T]\u00FD\u00FEM\u00AB\u00B4\u00FC\u0082\u00B7\u00AFn\u00BF\x7F\u00FB\x1B)8\u00B8\x7F>Vz\u00B9\u00FC\u00F0\u00ED\u009F\x0F\u00DF\u00FD\u00D9s\x07\u00A6Y\u00FC/\u00C7\u00F7\x13\u00F7 *\u0096~<\x1C*\b\n$\x0F>\u0081#\u00FF\u00FE\x04\x1B\x1B\u00C35\u00FF{\u00FA{\u00CF\u00CA\u0083\u00EE\u0093^\u00C6\u009As/\u009A\u00D4\u00BC|\u00EDV\x14g?\u00FA\u00F3\u00F1\u008B4\u00A7\x01\x177\u0090-\u00C1\u00CAv\u00E7\u00D2e4w\x02\u00ED\x04\u00EA\u00CCq\u00E0E\u00F8\u00F9\u00D5\u00ABW\x10N\u00D7\u00C7\u00C3\u0099\u00FE\u00D1p\u00A5N\x1C\u00DC\u0093'O~\x06\x03w\u009F\u00BC:|\u00FB\u00C7\u00AC\x18a=\x19\u00B6\u00CF\u009F\u00BF@5\u00D7\u00EE[x\u00E5\u00D7\u00CB\u00E5_/\u00EB\u00B0\u0089\u00F33q\u00C05\u00DB\x18\x1B\x1D<x\x10\u00CE\u009D\u00BCt\x0F\u00DCN\u0084\u00CD3#J;?\x1E\u00C9y\u00BB\u00C5\u0086]NXD\x18.\u00C7\u00CE\u00C6\u00AEone\u00B3\u00EC\u00B2\u00CB\u00B1\u00BF\u00F6\x1B\x1F2\u00BE8\x05\u00B4\x13\"\u00C5\u00CB\u00CB\u0083\u0088\u00AA\f>S/N5Y\x16~4O\u00F2;\u0084~<\u00B0\x1A\u00C8x9\u00BF1<\u00BF\nKT=\x7F\u00FE\u00DC\u009A]\u00CEZT\x0E\u00C8\u00BE}\u00EB\x16\\\u00EE\u00F3\u00E7O/?}\x051N\u00EF\u00E45s\u0083\u00B0!\x00\u00A8\x05j\u00B3\u00A4\u00A4$\\TUM\r\u00CE\u00E6\u00E5\u00E5\u0093\u0092\u0094\u00FC\u00FB\u00F5\u00D3\u0093\u00AET.mKde\x106\x0B\u00C1d\x04\u00B4\u00F3\u00DF\u00D7OL\\|\f\f\u00AF\u00B18\u009B\u0080fSw \x023_c)\f\u00E4X\u00F8\u00E1Au\u00E5\u00D7+E\x0Eh\u00AA\u00FE\u00F2\u00F7\u00EFC>\x11V1Y\b\u0097\u00E3\u00E5u\x1D\u00C1\x1F\u00D0\u00D4\u00F2\u00F6\x0F0\u00C1\x00\x04\x18\x00b\u00C8\u00EF\x17\u00C9\u00FD\u009FL\x00\x00\x00\x00IEND\u00AEB`\u0082",
	"Text" : "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x02\x00\x00\x00\x02\u00EB\u008AZ\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00B1IDATx\u00DAb\u00FC\u00FF\u00FF?\x03\u00B9\u0080\x05\u0088/\\\u00B8\u00F0\u00E1\u00C3\x07\u0092\u00B4\t\b\b\x18\x18\x180\x00mvpp \u00D5N\u00A0\x16\u00A0F&\x06\n\x00\x0B\u00B2a\u00C8\x12\x0F\u00C0\x00\u00C8P\x00\x03d\u00A9\x03\x07\x0E@Ypg\u00FFG\x05\u00F5\u00F5\u00F5\x10\x05@\x06\u009A\x14\u00F5\u009C\u00DD\u00DF\u00DFORh\u00EF\u00DF\u00BF\x1F\x18\u00DAP\u00CD\u00A0@'1\u00A8!\f\u008A\u009C=\u00AA\u0099Z\u009A\x1F>|\u0088\u00C6\u00C0\u0097\u00B6\u0081\x00\u0098T\u0080\u00D9\x13\u00C8\u00D8\u00B8q\u00E3\u0082\x05\x0B \u0082@\x060I\u00F8\u00FB\u00FBCR\x04$y \u00D26\x1C\x00\u0093\x0E\u00C1\u00B4\u0085\u00AC\u009E\x11\u00B9$\u0081\u00DB\u008C\x0B\u00A0\u00D9\u00CCHI1\x04\x10`\x00\u00C5_\u0084\u00C3\u008F\u00CF\u00D1\u009F\x00\x00\x00\x00IEND\u00AEB`\u0082"
};

var INFO = {
	xmlRequirements : "1) Element names are case-sensitive" + "\n" +
		"2) Element names must start with a letter or underscore" + "\n" +
		"3) Element names cannot start with the letters xml (or XML, or Xml, etc)" + "\n" +
		"4) Element names can contain letters, digits, hyphens, underscores, and periods" + "\n" +
		"5) Element names cannot contain spaces"
};

SESSION.init(); //---------------------------------------------------------------------------------------------------- INIT SESSION



//==================================================================================//

//================================= OBJECTS PT 2 ===================================//

var DocumentBinding = {
	// names of variables are expected to be unique, but art identifying properties (.name , .note and .tags.tag) are not.
	artItems : {},
	namedArtCollection : [],
	getNamedBinds : function(doc){
		if(DATA.currentVars.length == 0){
			return null;
		}
		this.artItems = {};
		this.namedArtCollection = this.getAllDocumentNamedItems(doc, AUTOBINDING[SETTINGS.selectedAutobinding]);
		var varNames = DATA.getVariableNames(),
			varTypes = getSpecificPropertyListArr(DATA.currentVars, "varType"),
			newVarBindObj;
		for (var i = 0; i < varNames.length; i++) {
			newVarBindObj = {};
			if(SETTINGS.selectedAutobinding == "noAutoBinding"){
				newVarBindObj.bindCollection = [];
			} else {
				newVarBindObj.bindCollection = this.getSortedNamedItems(
					this.namedArtCollection,
					varNames[i],
					varTypes[i],
					AUTOBINDING[SETTINGS.selectedAutobinding]
				);
			}
			newVarBindObj.varType = varTypes[i];
			this.artItems[varNames[i]] = newVarBindObj;
		};
	},
	getAllDocumentNamedItems : function(doc, method){
		var arr = [], testProp, thisItem;
		for (var i = 0; i < doc.pageItems.length; i++) {
			thisItem = doc.pageItems[i];
			testProp = method.getProp(thisItem);
			if(testProp instanceof Array && testProp.length > 0){
				// dealing with tag
				arr.push( thisItem );
			} else if(typeof testProp == "string" && testProp != ""){
				arr.push( thisItem );
			}
		}
		return arr;
	},
	getSortedNamedItems : function(collection, varName, varType, method){
		var arr = [], thisItem, testProp, testTag;
		for (var i = 0; i < collection.length; i++) {
			thisItem = collection[i];
			if(thisItem.typename == VARTYPES[varType].itemKind || VARTYPES[varType].itemKind == "All"){
				testProp = method.getProp(thisItem);
				if(testProp instanceof Array && testProp.length > 0){
					// dealing with tag
					if(testProp.indexOf(varName) > -1){
						arr.push( thisItem ); // get item if tag's name matches the variable's name
					} else {
						try {
							testTag = thisItem.tags.getByName(method.preferredTagName);
							if(testTag.value == varName){
								arr.push( thisItem ); // get item if tag's name is "VariableImporterBinding" and value matches variable's name
							}
						} catch(e){

						}
					};
				} else if(typeof testProp == "string" && testProp == varName){
					arr.push( thisItem );
				}
			}
		};
		return arr;
	},
	getBindObjectTestResults : function(){
		var artItemNames = getPropertyList(this.artItems);
		if(artItemNames.length == 0){
			return null;
		}
		var res = {
			log : "",
			countTextVars : 0,
			foundTextItems : 0,
			countImageVars : 0,
			foundImageItems : 0,
			countGraphVars : 0,
			foundGraphItems : 0,
			countVisibilityVars : 0,
			foundVisibilityItems : 0
		};

		var arrLog = ["Autobinding method: " + unCamelCaseSplit(SETTINGS.selectedAutobinding) + "\n-------------------"];
		var thisName, thisItem, thisVarObj, thisBindCollectionCount = 0, foundItemString = "", thisFoundProp, thisVarCountProp;
		for (var i = 0; i < artItemNames.length; i++) {
			thisName = artItemNames[i];
			thisItem = this.artItems[thisName];
			thisVarObj = getSpecificPropertyObj(DATA.currentVars, "varName", thisName);
			thisBindCollectionCount = thisItem.bindCollection.length;
			res["found" + thisVarObj.varType + "Items"] += thisBindCollectionCount;
			res["count" + thisVarObj.varType + "Vars"] += 1;
			arrLog.push(thisName + " : " + thisBindCollectionCount);
		};

		for(var all in VARTYPES){
			thisFoundProp = "found" + all + "Items";
			thisVarCountProp = "count" + all + "Vars";
			foundItemString += (all + ": " + res[thisFoundProp] + "/" + res[thisVarCountProp] + ", ");
		}

		res.log = arrLog.join("\n");
		res.foundItemString = foundItemString.replace(/,\s$/, "");

		return res;
	},
	bindDocumentItems : function(doc){
		this.getNamedBinds(doc);
		var artItemNames = getPropertyList(this.artItems), artCollection, artItem, thisDocVar, thisContentKind, thisVarTypeObj;

		var artItems = this.artItems, thisArtItemsVarName = "", currentSelection;
		artItemNames.sort(function(a,b){
			if(artItems[a].varType == "Visibility"){
				return true;
			} else {
				return false;
			}
		});

		if(artItemNames.length == 0){
			return null;
		}
		for( var i = 0; i < artItemNames.length; i++ ){
			thisArtItemsVarName = artItemNames[i];
			thisDocVar = doc.variables.getByName(thisArtItemsVarName);
			for( var that in VARTYPES ){
				thisVarTypeObj = VARTYPES[that];
				if(thisVarTypeObj.varKind == thisDocVar.kind){
					thisContentKind = thisVarTypeObj.contentKind;
					break;
				}
			}
			artCollection = this.artItems[thisArtItemsVarName].bindCollection;
			for (var j = 0; j < artCollection.length; j++) {
				artItem = artCollection[j];
				artItem[thisContentKind] = thisDocVar;
			}
		}
	}
};

function FileTestSeeker(prop){
	return {
		makeUIContents : function(parent, propObj){
			parent.spacing = 4;
			var size;
			if(typeof propObj.size == "undefined"){
				size = [350, 200];
			} else {
				size = propObj.size;
			}
			var disp_foundMissingNum = parent.add("edittext { properties : {readonly : true}, justify : 'center' }");
			disp_foundMissingNum.characters = UI_SIZING.foundOfTotalDisp.characters;

			var foundNum = "", missingNum = "", parsedNums;
			if(propObj.hasOwnProperty("foundMissingNum")){
				disp_foundMissingNum.setValue(propObj.foundMissingNum);
				parsedNums = propObj.foundMissingNum.split("/");
				foundNum = parsedNums[0];
				missingNum = parsedNums[1] - foundNum;
			}
			var lbl_foundImageFiles = parent.add("statictext", undefined, "Found " + prop + " Files: " + foundNum);
			var foundList = parent.add("edittext", undefined, "", {readonly : true, multiline : true});
			foundList.size = size;
			if(propObj.hasOwnProperty("foundFiles")){
				foundList.setValue(propObj.foundFiles);
			}
			var lbl_missingImageFiles = parent.add("statictext", undefined, "Missing " + prop + " Files: " + missingNum);
			var missingList = parent.add("edittext", undefined, "", {readonly : true, multiline : true});
			missingList.size = size;
			if(propObj.hasOwnProperty("missingFiles")){
				missingList.setValue(propObj.missingFiles);
			}
			return {
				foundList : foundList,
				missingList : missingList,
				disp_foundMissingNum : disp_foundMissingNum
			};
		},
		makeTab : function(parentTabbedPanel){
			var tab = parentTabbedPanel.add("tab", undefined, prop + " Files");
			tab.key = prop;

			parentTabbedPanel.window.UITestElements["testTab" + prop] = tab;

			tab.contents = this.makeUIContents(tab, {size : [515, 130]});
			
			tab.populateFields = function(){
				var allResults = getFileRefTestResults();
				var thisRefResultNumFound = allResults["found" + prop + "s"].length - 1;
				var thisRefResultNumMissing = allResults["missing" + prop + "s"].length - 1;
				var foundFiles = allResults["found" + prop + "s"].slice(1).join("\n")
				var missingFiles = allResults["missing" + prop + "s"].slice(1).join("\n")
				var foundMissingNum = thisRefResultNumFound + "/" + (thisRefResultNumFound + thisRefResultNumMissing);
				tab.contents.foundList.setValue(foundFiles);
				tab.contents.missingList.setValue(missingFiles);
				tab.contents.disp_foundMissingNum.setValue(foundMissingNum);
			};
			tab.resetFields = function(){
				for(var all in this.contents){
					this.contents[all].setValue("");
				}
			}
			return tab;
		}
	}
};

//=============================================================================================================================================//
//=============================================================== GRAPH DATA ==================================================================//
//=============================================================================================================================================//
var GraphDataGatherer = {
	emptyGraphString : "<data  numDataColumns=\"2\">" + "\r" +
    "<values>" + "\r" +
      "<row>" + "\r" +
        "<value  key=\"name\"></value>" + "\r" +
        "<value>1</value>" + "\r" +
      "</row>" + "\r" +
    "</values>" + "\r" +
  "</data>",
	getGraphData : function( graphFilePath ){
		var graphFile;
		try {
			graphFile = File(graphFilePath);
			if(!graphFile.exists){
				throw new Error("Graph File not found: '" + decodeURI(graphFilePath) + "'");
			}
			return this.getGraphDataFromFile(graphFile);
		} catch (e) {
			// alert(e);
			return this.emptyGraphString;
		}
	},
	isquoted : function (str) {
	  return str.charAt(0) === '"' && str.charAt(str.length - 1) === '"';
	},
	unquoted : function (str) {
	  if (str.charAt(0) === '"' && str.charAt(str.length - 1) === '"') {
	    return str.substring(1, str.length - 1);
	  }
	  else {
	    return str;
	  }
	},
	analyzeCellContent : function(cell){
		var res = {
			isQuoted : false,
			isNumber : false,
			isWord : false
		};
		var rxNum = /^-?\d*[\.]?\d+$/;
		var rxWord = /[a-z]/gi;
		res.isQuoted = (cell.charAt(0) === '"' && cell.charAt(cell.length - 1) === '"');
		res.isNumber = (res.isQuoted && rxNum.test(cell.replace(/"/g, "")) || (!res.isQuoted && rxNum.test(cell)));
		res.isWord = (!res.isNumber && rxWord.test(cell) || (!res.isQuoted && !res.isNumber));
		return res;
	},
	getGraphDataFromFile : function( graphFile ){
	  var res = '', maxcol = 1, haspropertyrow = false, hasnamecol = false;
	  var col, row, numstr, myAnalyzedCell, thisCell;

	  var textData = getData( graphFile.fsName );

	  var i;
	  var rows = [], vals = [];
	  var name;
	  for ( i = 0; i < textData.length; i++) {
	    vals = textData[i];
      if (vals.length > maxcol) {
      	maxcol = vals.length;
      }
      rows.push(vals);
	  }

	  numstr = 0;
	  for (col = 0; col < rows[0].length; col++) {
	    if (rows[0][col] === '') continue;
	    if (isNaN(rows[0][col])) numstr--;
	    else numstr++;
	  }
	  haspropertyrow = (numstr <= (col > 2 ? 0 : -1));

	  numstr = 0;
	  for (row = 0; row < rows.length; row++) {
	    if (rows[row][0] === '') continue;
	    if (isNaN(rows[row][0])) numstr--;
	    else numstr++;
	  }
	  hasnamecol = (numstr <= 0);

	  // create a string
	  res += '<data  numDataColumns="' + (hasnamecol ? maxcol : maxcol + 1) + '">';
	  row = 0;
	  // propertyRow
	  if (haspropertyrow) {
	    res += '<propertyRow  key="name">';
	    col = 0;
	    thisCell = rows[row][col];
	    if (hasnamecol) {
	      // res += '<value' + (this.isquoted(rows[row][col]) || rows[row][col].match(/[a-z]/gi) ? '  type="string">' : '>')
	      //        + stringXmlSafe(this.unquoted(rows[row][col++])) + '</value>';
	      myAnalyzedCell = this.analyzeCellContent(thisCell);

 	      res += '<value' + (myAnalyzedCell.isQuoted && myAnalyzedCell.isNumber ? '  type="string">' : '>') +
        	stringXmlSafe(this.unquoted(thisCell)) + '</value>';

         col++;
	    }
	    else {
	      res += '<value></value>';
	    }
	    for (; col < rows[0].length; col++) {
	      // res += '<value' + (this.isquoted(rows[row][col]) || rows[row][col].match(/[a-z]/gi) ? '  type="string">' : '>')
	      //        + stringXmlSafe(this.unquoted(rows[row][col])) + '</value>';
	      thisCell = rows[row][col];
	      myAnalyzedCell = this.analyzeCellContent(thisCell);
	      res += '<value' + (((myAnalyzedCell.isQuoted && myAnalyzedCell.isNumber) || myAnalyzedCell.isWord) ? '  type="string">' : '>') +
      		stringXmlSafe(this.unquoted(thisCell)) + '</value>';
	    }
	    for (; col < maxcol; col++) {
	      res += '<value></value>';
	    }
	    res += '</propertyRow>';
	    row++;
	  }
	  // values
	  res += '<values>';
	  for (; row < rows.length; row++) {
	    res += '<row>';
	    col = 0;
	    if (hasnamecol) {
	      // res += '<value ' + (this.isquoted(rows[row][col]) || rows[row][col].match(/[a-z]/gi) ? ' type="string"' : '')
	      //        + ' key="name">' + stringXmlSafe(this.unquoted(rows[row][col++])) + '</value>';
	      thisCell = rows[row][col];
	      myAnalyzedCell = this.analyzeCellContent(thisCell);
	      res += '<value ' +
	      	' key="name"' + (((myAnalyzedCell.isQuoted && myAnalyzedCell.isNumber) || myAnalyzedCell.isWord) ? ' type="string">' : '>') +
	      	stringXmlSafe(this.unquoted(thisCell)) + '</value>';

       	col++;
	    }
	    else {
	      res += '<value key="name"></value>';
	    }
	    for (; col < rows[row].length; col++) {
	      res += '<value' + (isNaN(rows[row][col]) || rows[row][col].match(/[a-z]/gi) ? '  type="string">' : '>') +
        	stringXmlSafe(this.unquoted(rows[row][col])) + '</value>';
	    }
	    for (; col < maxcol; col++) {
	      res += '<value></value>';
	    }
	    res += '</row>';
	  }
	  res += '</values>';
	  res += '</data>';

	  return res;
	}
};

var TestManager = {
	datasetNames : {
		makeUIContents : function(parent, propObj){
			var list = parent.add("edittext", undefined, "", {readonly : true, multiline : true});
			list.size = propObj.size;
			if(propObj.hasOwnProperty("data")){
				list.setValue(propObj.data);
			}
			return list;
		},
		makeTab : function(parentTabbedPanel){
			var tab = parentTabbedPanel.add("tab", undefined, "Dataset Names");
			var disp_preview = tab.add("edittext { properties : {readonly : true}, justify : 'center' }");
			disp_preview.characters = 36;
			var list = this.makeUIContents(tab, {size : [300, 300]});
			
			tab.populateFields = function(){
				// make sure dataset names are unique, or else they get genericized
				DATA.testNameProp_unique({
					collection : DATA.currentDatasetNames,
					prop : undefined,
					prefixString : "Record ",
					collectionName : "Dataset",
					showDialog : WARNINGSETTINGS["showDatasetNamingWarning"]
				});
				if(DATA.currentDatasetNames.length > 0){
					list.setValue(DATA.currentDatasetNames.join("\n"));
					disp_preview.setValue(getDatasetNamePreviewString());
				}
			};
			tab.resetFields = function(){
				list.setValue("");
				disp_preview.setValue("");
			}
			return tab;
		}
	},
	imageFiles : new FileTestSeeker("Image"),
	graphFiles : new FileTestSeeker("Graph"),
	artBindings : {
		// simpleShowModal(DocumentBinding.displayTestList, {title : "Binding Test Display"});
		makeUIContents : function(parent, propObj){
			var listBox;
			if(!SESSION.multiColumnListBoxTest){
				// crazy CS6 Bug with multi-column listbox crash.
				listProps = {};
			} else {
				listProps = (SESSION.imageTest)? {
					// Embedded Image error 520
					numberOfColumns: 4,
					showHeaders: true,
					columnTitles: ["Variable Name", "", "Type", "Found Items"],
					columnWidths: [165, 25, 60, 80]
				} : {
					numberOfColumns: 3,
					showHeaders: true,
					columnTitles: ["Variable Name", "Type", "Found Items"],
					columnWidths: [165, 60, 80]
				};
			}

			listBox = parent.add("listbox", undefined, [], listProps);
			listBox.preferredSize = propObj.size;
			return listBox;
		},
		makeTab : function(parentTabbedPanel){
			var tab = parentTabbedPanel.add("tab", undefined, "Art Bindings");
			var disp_preview = tab.add("edittext { properties : {readonly : true}, justify : 'center' }");
			disp_preview.characters = 52;
			var list = this.makeUIContents(tab, {size : UI_SIZING.bindingTestDisplay.preferredSize});
			tab.list = list;
			
			tab.populateFields = function(){
				// reset the list by clearing it out
				list.removeAll();

				var varType, varName, foundCount = 0, newItem, thisItem;

				for (all in DocumentBinding.artItems) {
					thisItem = DocumentBinding.artItems[all];
					varType = thisItem.varType;
					newItem = list.add("item");
					varName = all;
					newItem.text = varName;
					foundCount = thisItem.bindCollection.length;
					if(!SESSION.multiColumnListBoxTest){
						// crazy CS6 Bug with multi-column listbox crash.
						if(SESSION.imageTest){
							// Embedded Image error 520
							newItem.image = ICONS[varType];
							newItem.text = newItem.text + " | " + varType + " | " + foundCount;
						}
					} else {
						if(SESSION.imageTest){
							newItem.subItems[0].image = ICONS[varType];
							newItem.subItems[1].text = varType;
							newItem.subItems[2].text = foundCount;
						} else {
							newItem.subItems[0].text = varType;
							newItem.subItems[1].text = foundCount;
						}
					}
				}
				disp_preview.setValue( unCamelCaseSplit(SETTINGS.selectedAutobinding) + ": " + DocumentBinding.getBindObjectTestResults().foundItemString );
			};

			tab.parent.addEventListener("mouseover", function(){
				if(this.selection == null){
					return;
				}
				if(this.selection.text == tab.text){
					if(tab.list.items.length > 0){
						tab.list.active = true;
						tab.list.active = false;
					}
				}
			});

			tab.resetFields = function(){
				list.removeAll();
				disp_preview.setValue("");
			}
			parentTabbedPanel.window.UITestElements["testTab" + "ArtBinding"] = tab;

			return tab;
		}
	},
	clearAllTestDisplays : function(UITestElements){
		var thisElem, thisTab;
		for (var all in UITestElements) {
			thisElem = UITestElements[all];
			if(typeof thisElem.setValue == 'function'){
				thisElem.setValue("");
			} else if(thisElem.type == "tabbedpanel"){
				for (var j = 0; j < thisElem.children.length; j++) {
					thisTab = thisElem.children[j];
					thisTab.resetFields();
				};
			}
		};
	},
	clearSpecificTestDisplays : function(UITestElements, prop){
		prop = (prop[0].toUpperCase() + prop.substr(1,));
		UITestElements["found" + prop + "s"].setValue("");
		var tabItemKey = "testTab" + prop;
		if(UITestElements.hasOwnProperty(tabItemKey)){
			UITestElements[tabItemKey].resetFields();
		}
	}
};

var XMLStringBuilder = {
	baseString : 
	"<?xml version=\"1.0\" encoding=\"utf-8\"?>" + "\r" +
  "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 20001102//EN\"    \"http://www.w3.org/TR/2000/CR-SVG-20001102/DTD/svg-20001102.dtd\" [" + "\r" +
  "	<!ENTITY ns_graphs \"http://ns.adobe.com/Graphs/1.0/\">" + "\r" +
  "	<!ENTITY ns_vars \"http://ns.adobe.com/Variables/1.0/\">" + "\r" +
  "	<!ENTITY ns_imrep \"http://ns.adobe.com/ImageReplacement/1.0/\">" + "\r" +
  "	<!ENTITY ns_custom \"http://ns.adobe.com/GenericCustomNamespace/1.0/\">" + "\r" +
  "	<!ENTITY ns_flows \"http://ns.adobe.com/Flows/1.0/\">" + "\r" +
  "<!ENTITY ns_extend \"http://ns.adobe.com/Extensibility/1.0/\">" + "\r" +
  "]>" + "\r" +
  "<svg>" + "\r" +
  "<variableSets  xmlns=\"&ns_vars;\">" + "\r" +
  "	<variableSet  locked=\"none\" varSetName=\"binding1\">" + "\r" +
  "		<variables>" + "\r" +
  "PUT_VARIABLES_HERE"+
  "		</variables>" + "\r" +
  "		<v:sampleDataSets xmlns=\"http://ns.adobe.com/GenericCustomNamespace/1.0/\" xmlns:v=\"http://ns.adobe.com/Variables/1.0/\">" + "\r" +
  "PUT_DATASETS_HERE"+
  "		</v:sampleDataSets>" + "\r" +
  "	</variableSet>" + "\r" +
  "</variableSets>" + "\r" +
  "</svg>",
	generateVariablesGroupXMLString : function(varsRow){
	  var variablesGroup = XML("<root></root>");
	  var thisVar, newVariable, thisVarType;
	  var traitAndCategory = {
	  	category : "",
	  	trait : ""
	  };
	  var newVarsRow = varsRow.slice(0).sort(function(a,b){
	  	return a.varType == "Visibility";
	  });
	  for(var i = 0; i < newVarsRow.length; i++){
	    thisVar = newVarsRow[i];
	    newVariable = XML('<variable></variable>');
	    thisVarType = thisVar.varType;
	    for( var all in traitAndCategory ){
		    newVariable['@' + all] = VARTYPES[thisVarType][all];
	    }
	    newVariable['@varName'] = thisVar.varName;
	    variablesGroup.appendChild(newVariable);
	  };
	  return variablesGroup.toString().replace(/&amp;/g, "&").replace(/(<root>|<\/root>)/g, '');
	},
	getTextCellContent : function( cell, varName ){
		var thisVarXMLComponent = "", returnChars, paragraphTextArr = [], paraCount = 1, paragraphText = thisText = "";
		if(SETTINGS.dbslNextline){
			cell = cell.replace(/\\\\/g,"__RETURN_CHAR");
		}
		thisVarXMLComponent = XML( "<" + varName + "></" + varName + ">" );
    returnChars = cell.match(/\n/g);

    if(returnChars != null){
      paraCount = returnChars.length + 1;
      paragraphTextArr = cell.split(/\n/g);
    } else {
      paragraphTextArr = [cell];
    }

    for(var q = 0; q < paragraphTextArr.length; q++){
      thisText = paragraphTextArr[q];
      if(paragraphTextArr.length > 1 && q == 0 || q == paragraphTextArr.length - 1){
        if(q == 0 && thisText.match(/^&quot;/)){
          thisText = thisText.replace(/^&quot;/,'');
        }
        if(q == paragraphTextArr.length - 1 && thisText.match(/&quot;$/)){
          thisText = thisText.replace(/&quot;$/,'');
        }
      }

      if(thisText.replace(/\s+/g, '') == ''){
        paragraphText = XML( "<p>" + "&#160;" + "</p>" );
        // try to create a blank line
      } else {
        paragraphText = XML( "<p>" + thisText + "</p>" );
      }
      thisVarXMLComponent.appendChild(paragraphText);
    };
    return thisVarXMLComponent;
	},
	getVisibilityCellContent : function( cell, varName ){
		var thisKey, newCell;
    cell = cell.trim().toLowerCase();
    for (var i = 0; i < VisibilityKeys.length; i++) {
    	thisKey = VisibilityKeys[i];
	    if(!thisKey.enabled || cell !== thisKey.displayText){
	      newCell = (cell !== '');
	    } else {
	      newCell = thisKey.value;
	      break;
	    }
    }
    return XML("<" + varName + ">" + newCell + "</" + varName + ">");
	},
	getImageCellContent : function( cell, varName ){
		cell = cell.replace(/\\\\/g, "//").replace(/\\/g, "/");
		if(cell != "" && !cell.match(/^file\:\/\/\//)){
			cell = "file:///" + cell;
		}
		return XML("<" + varName + ">" + cell + "</" + varName + ">");
	},
	getGraphCellContent : function( cell, varName ){
		cell = GraphDataGatherer.getGraphData( File(cell) );
		return XML("<" + varName + ">" + cell + "</" + varName + ">");
	},
	generateRecordsGroupXMLString : function(grid, datasetNames, variableRow){
		var thisRecord, dataSetNode, thisDatasetName, cell, thisVar, thisVarName, thisVarType,
			thisVarXML, thisText;

		var dataSetsGroup = XML("<root></root>");

		for(var i = 0; i < grid.length; i++){

	    thisRecord = grid[i];
	    thisDatasetName = datasetNames[i];

	    dataSetNode = XML("<sampleDataSet></sampleDataSet>");
	    // dataSetNode.setNamespace("v");
	    dataSetNode['@dataSetName'] = thisDatasetName;

	    for(var j = 0; j < variableRow.length; j++){

        cell = disguiseXmlEntities(thisRecord[j]);
        thisVar = variableRow[j];
        thisVarName = thisVar.varName;
        thisVarType = thisVar.varType;

        thisVarXML = this["get" + thisVarType + "CellContent"]( cell, thisVarName );

        dataSetNode.appendChild( thisVarXML );
	    };

	    dataSetsGroup.appendChild( dataSetNode );
		};

		// return dataSetsGroup.toString().replace(/xmlns:v="v" /g, '').replace(/(<root>|<\/root>)/g, '');
		return dataSetsGroup.toString().replace(/sampleDataSet/g, 'v:sampleDataSet').replace(/(<root>|<\/root>)/g, '');
	},
	generateVariableLibraryXMLString : function(){

		var variablesGroupString, recordsGroupString;

		var myXMLString = this.baseString;

		var variableRow = DATA.currentVars;
		var grid = DATA.currentGrid;
		var datasetNames = DATA.currentDatasetNames;
		var problem;

		try{

			problem = "Making variables group XML string";

			variablesGroupString = this.generateVariablesGroupXMLString( variableRow );

			problem = "Making data set group XML string";

			recordsGroupString = this.generateRecordsGroupXMLString( grid, datasetNames, variableRow );

			myXMLString = myXMLString.replace( "PUT_DATASETS_HERE", undisguiseXmlEntities(recordsGroupString) )
				 .replace( "PUT_VARIABLES_HERE", variablesGroupString );

			if(SETTINGS.dbslNextline){
		    myXMLString = myXMLString.replace(/__RETURN_CHAR/g, "&#13;");
			}

			return myXMLString;

		} catch(e) {
			alert("XML File could not be created:\nStage: " + problem + "\nError: " + e);
			return null;
		}

	}
};





//==================================================================================//

//=================================== UI WINDOW ====================================//

function quickView(msg, title, size){
  if(typeof title == 'undefined'){
    title = '';
  }
  var size = size || [700,500];
  var w = new Window('dialog', title);
  var e = w.add('edittext', undefined, msg, {multiline:true, readonly:true});
  e.size = size;
  var okbtn = w.add('button', undefined, 'Ok');
  w.show();
};

function simpleShowModal(contentsFunc, propObj){
	var title = propObj.title;
  if(typeof title == 'undefined'){
    title = '';
  }
  var w = new Window('dialog', title);

  contentsFunc(w, propObj);

  var okbtn = w.add('button', undefined, 'Ok');
  w.show();
};

var UIElements=[Window,Group,EditText,Panel];
for(var i = 0; i < UIElements.length; i++){
  UIElements[i].prototype.setBg = function(rgb){
    this.graphics.backgroundColor = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, [rgb[0], rgb[1], rgb[2]]);
  }
};

EditText.prototype.getValue = function(){
  return this.text;
};

Checkbox.prototype.getValue = function(){
  return this.value;
};

EditText.prototype.setValue = function(value){
  this.text = value;
};

Checkbox.prototype.setValue = function(value){
	value = value == true ? true : false;
  this.value = value;
};

DropDownList.prototype.selectWell = function(){
  //CC will let you select null
  this.addEventListener('change', function(){
    if(this.selection == null){
      this.selection = this.items[0];
    }
  });
};

DropDownList.prototype.getValue = function(){
	if(this.selection != null){
		if(this.hasOwnProperty("data") && typeof this.data == "object"){
			return this.data[this.selection.text];
		}
		return this.selection.text;
	} else {
		return null;
	}
};

DropDownList.prototype.setValue = function(value){
	for (var i = 0; i < this.items.length; i++) {
		if(this.items[i].text == value){
			this.selection = this.items[i];
			return;
		} else if(this.hasOwnProperty("data") && typeof this.data == "object"){
			if(value == this.data[this.items[i].text]){
				this.selection = this.items[i];
				return;
			}
		}
	};
	alert("The value '" + value + "' is not present in this DropDownList.");
};

function makeDropdownlist(parent, items){
  var dd = parent.add("dropdownlist", undefined, items);
  dd.selectWell();
  dd.selection = dd.items[0];
  return dd;
};

function makeEditableReadonlyEdittext(parent, chars, defaultText){
	defaultText = defaultText || "";
	chars = chars || 20;
	var stackGroup = parent.add("group");
	stackGroup.orientation = "stack";
	var readonlyEdittext = stackGroup.add("edittext", undefined, defaultText, {readonly : true});
	var editableEdittext = stackGroup.add("edittext", undefined, defaultText);
	readonlyEdittext.characters = editableEdittext.characters = chars;
	return {
		editable : editableEdittext,
		readonly : readonlyEdittext,
		getValue : function(){
			if(this.editable.visible){
				return this.editable.text;
			} else {
				return this.readonly.text;
			}
		},
		setValue : function(value){
			this.editable.text = this.readonly.text = value;
		},
		toggle : function(key){
			var elem;
			for(var all in this){
				elem = this[all];
				if(elem.hasOwnProperty("type") && elem.type == "edittext"){
					if(all == key){
						elem.visible = true;
					} else {
						elem.visible = false;
					}
				}
			}
		}
	};
};

function folderPathInput(parent, title, dialogTitle){
	var p = parent.add("panel", undefined, title);
	p.margins = [4,4,4,4];
	p.spacing = 4;
	p.orientation = "row";
	var b = p.add("button", undefined, "Choose Folder");
	var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
	disp.characters = 50;
	disp.setValue = function(value){
		this.text = value;
		this.helpTip = value;
	};
	b.onClick = function(){
		var f = Folder.selectDialog(dialogTitle);
		if(f != null){
			disp.text = decodeURI(f.fsName);
			disp.helpTip = disp.text;
			disp.notify("onChange");
		}
	}
	disp.button = b;
	return disp;
};

function filePathInput(parent, title, dialogTitle, fileSpec){
	var p = parent.add("panel", undefined, title);
	p.margins = [5,6,5,4];
	p.spacing = 4;
	p.orientation = "row";
	var b = p.add("button", undefined, "Choose Data File");
	var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
	disp.characters = 50;
	disp.setValue = function(value){
		this.text = value;
		this.helpTip = value;
	};
	b.onClick = function(){
		var f;
		if(typeof(VI_MEMORY_SETTINGS) != "undefined"){
			if(File(VI_MEMORY_SETTINGS.lastChosenDataFilePath).exists){
				f = File(File(VI_MEMORY_SETTINGS.lastChosenDataFilePath).parent + "/" + "VariableImporterDataFile.csv").openDlg(dialogTitle, fileSpec, false);
			} else {
				f = File.openDialog(dialogTitle, fileSpec);	
			}
		} else {
			f = File.openDialog(dialogTitle, fileSpec);
		}
		if(f != null){
			disp.setValue(decodeURI(f.fsName));
			disp.notify("onChange");
		}
	}
	return disp;
};

function checkboxFolderPathInput(parent, title, dialogTitle){
  var p = parent.add("panel", undefined, title);
  p.margins = [5,6,5,4];
  p.spacing = 4;
  p.orientation = "row";
  var b = p.add("checkbox", undefined, "Choose Folder");
  var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
  disp.characters = 50;
	disp.setValue = function(value){
		this.text = value;
		this.helpTip = value;
	};
  b.onClick = function(){
    if(!this.value){
      disp.setValue("");
      disp.notify("onChange");
      return;
    }
    var f = Folder.selectDialog(dialogTitle);
    if(f != null){
      disp.setValue(decodeURI(f.fsName));
      disp.notify("onChange");
    } else {
      this.value = false;
      disp.setValue("");
			disp.notify("onChange");
    }
  };
  disp.checkbox = b;
  return disp;
};

function switchStackView(parent, viewKey){
	var stackChild;
	for (var i = 0; i < parent.children.length; i++) {
		stackChild = parent.children[i];
		if(stackChild.key == viewKey){
			stackChild.visible = true;
		} else {
			stackChild.visible = false;
		}
	};
};

function refreshListForIcons(list){
	var newTime = new Date().getTime();
	if(newTime - prevMouseMove > 500){
		list.active = false;
		list.active = true;
		prevMouseMove = newTime;
	}
};

function refreshListForIconsForce(list){
	if(SESSION.imageTest){
		list.enabled = false;
		list.enabled = true;
	}
};

var prevMouseMove = new Date().getTime();

function validate(UIElements){
	var res = {
		valid : true,
		problem : ""
	};
	if(UIElements["disp_dataFile"].getValue() == ""){
		res.problem = "Please choose a comma-delimited (.csv) or tab-delimited (.txt) data file first.";
		res.valid = false;
		return res;
	}
	if(DATA.currentVars.length == 0){
		var thisDataFile = File(UIElements["disp_dataFile"].getValue());
		res.problem = "There appear to have been no variable names in the data file '" + decodeURI(thisDataFile.name) + "'";
		res.valid = false;
		return res;
	}

	DATA.getCurrentGrid();

	// make sure dataset names are unique, or else they get genericized
	var uniqueDatasetNameFlag = DATA.testNameProp_unique({
		collection : DATA.currentDatasetNames,
		prop : undefined,
		prefixString : "Record ",
		collectionName : "Dataset",
		showDialog : WARNINGSETTINGS["showDatasetNamingWarning"]
	});

	if(!uniqueDatasetNameFlag){
		if(!CONFIRMS["showDatasetNamingWarning"]()){
			res.problem = "";
			res.valid = false;
			return res;
		}
	}

	var allResults = getFileRefTestResults();
	var fileRefsLog = {
		"Graphs" : {},
		"Images" : {}
	};
	var missingFileStr = "";
	for(var all in fileRefsLog){
		fileRefsLog[all].foundNum = allResults["found" + all].length - 1;
		fileRefsLog[all].missingNum = allResults["missing" + all].length - 1;
		fileRefsLog[all].totalNum = (fileRefsLog[all].foundNum + fileRefsLog[all].missingNum);
		if(fileRefsLog[all].missingNum > 0){
			missingFileStr += "The current import contains " + fileRefsLog[all].missingNum + " missing " + all + ".\n";
		}
	}
	
	if(missingFileStr != ""){
		if(!confirm("Lost Items:\r" + missingFileStr + "Proceed?")){
			res.problem = "";
			res.valid = false;
			return res;
		}
	}

	return res;
};

function UIWindow(){
	var title = SESSION.scriptName + " " + SESSION.scriptVersion;
  var w = new Window('dialog', title, undefined);
  w.spacing = 4;

  SESSION.doImageTest();
  var imageTest = SESSION.imageTest;
  w.imageTest = imageTest;

  w.UIElements = {
  	savingPreset : false
  };
  w.UITestElements = {};


  var g_select = w.add("group");
  var s1 = g_select.add("radiobutton", undefined, "Variable Display");
  s1.key = "variablesDisplay";
  var s2 = g_select.add("radiobutton", undefined, "Options");
  s2.key = "optionsGroup";
  var s3 = g_select.add("radiobutton", undefined, "File Paths");
  s3.key = "prependPathsGroup";
  var s4 = g_select.add("radiobutton", undefined, "Presets");
  s4.key = "presetOptionsGroup";
  if(SESSION.tabbedGroupTest){
	  var s5 = g_select.add("radiobutton", undefined, "Test");
	  s5.key = "testAreaGroup";
	}

  s4.onClick = s3.onClick = s2.onClick = s1.onClick = function(){
  	switchStackView(g0, this.key);
  	if(this.text == "Options"){
  		// checkmarks do not show on 1st showing in CC2015 - action 1
  		this.window.UIElements["list_warnings"].active = true;
  	} else if(this.text == "Test"){
  		grp5.children[0].selection = grp5.children[0].children[1];
  		grp5.children[0].selection = grp5.children[0].children[0];
  		// activate an initial tab when showing this group
  		// CS5 shows all stacked and visible if selection not set like above
  	}
  };
  if(SESSION.tabbedGroupTest){
  	s5.onClick = s4.onClick;
  }

  g_select.addEventListener("mousemove", function(){
  	// checkmarks do not show on 1st showing in CC2015 - action 2
  	this.window.UIElements["list_warnings"].active = false;
  });

  var g0 = w.add('group');
  g0.orientation = 'stack';
  w.UIElements["stackGroup"] = g0;
  w.UIElements["variablesDisplayR"] = s1;

  // variables display
  var grp1 = variablesDisplayGroup(g0);

  // general options group
  var grp2 = optionsGroup(g0);

  var grp3 = prependPathsGroup(g0);

  var grp4 = presetOptionsGroup(g0);

	if(SESSION.tabbedGroupTest){
  	var grp5 = testAreaGroup(g0);
  }

	var g_btn = w.add("group");
	g_btn.spacing = 4;

	var okButtonText = (SESSION.documentExists) ? "Import Variables" : "Create XML File";
	var btn_ok = g_btn.add("button", undefined, okButtonText);
	w.defaultElement = btn_ok;
	var btn_ccl = g_btn.add("button", undefined, "Cancel");

	btn_ok.onClick = function(){
		var validationTest = validate(this.window.UIElements);

		if(validationTest.valid){
			this.window.close();
		} else {
			if(validationTest.problem != ""){
				alert(validationTest.problem);
			}
		}
	};

	w.onShow = function(){

		populateUI(this.window.UIElements);

		this.layout.layout(true);

		s1.notify("onClick");
		// show only 1 of the stacked groups when first showing window.

	};

	if(w.show() == 2){
		// alert("Cancelled");
		return null;
	} else {
		// final current grid is obtained in the validation function

		SETTINGS.dbslNextline = w.UIElements["dbslNextline"].getValue();

		var userXMLPath = w.UIElements["xmlPath"].getValue();

		return  {
			purpose : (SESSION.documentExists) ? "import" : "createXML",
			xmlPath : (userXMLPath == "temp") ? w.UIElements["xmlPath"].text : userXMLPath,
			sourceDataPath : w.UIElements["disp_dataFile"].getValue(),
			fileRefsLog : getFileRefTestResults()
		};
	}

};



//==================================================================================//

//================================= UI WINDOW PT 2 =================================//
function displayData(dataObj){

	var newItem, datum, varType, varName, oldVars = DATA.oldVars;
	if(this.items.length > 0){
		this.removeAll();
	}

	var data = dataObj;
	for(var i = 0; i < data.length; i++){
		// header row is variable names
		datum = data[i];
		newItem = this.add("item");
		if(this.window.UIElements.saved){
			datum.varType = oldVars[i].varType;
			datum.varName = oldVars[i].varName;
		}
		varName = datum.varName;
		newItem.text = varName;
		varType = datum.varType;
		if(varType == "Image" || varType == "Graph"){
			if(this.window.UIElements.saved){
				datum.url = oldVars[i].url;
			}
		}
		if(!SESSION.multiColumnListBoxTest){
			// problems with CS6 multi-column listbox
			if(this.window.imageTest){
				newItem.image = ICONS[varType];
				newItem.text = newItem.text + " | " + varType + " | " + datum.url;
			}
		} else {
			if(this.window.imageTest){
				newItem.subItems[0].image = ICONS[varType];
				newItem.subItems[1].text = varType;
				newItem.subItems[2].text = datum.url;
			} else {
				newItem.subItems[0].text = varType;
				newItem.subItems[1].text = datum.url;
			}
		}
	}

	if(SESSION.AIVersion >= 17){
		this.window.update();
	}
	addVarNameDatasetNames();
	this.window.UIElements["datasetNamePreview"].setValue(getDatasetNamePreviewString());
	this.window.UIElements.saved = false;
};

function getVariableDisplayHeight(varAmt){
	var rangePtsArr, rangePts;
	for(var all in UI_SIZING.variableDisplay){
		rangePtsArr = UI_SIZING.variableDisplay[all].varAmt.split("-");
		rangePts = [Number(rangePtsArr[0]), Number(rangePtsArr[1])];
		if(varAmt >= rangePts[0] && varAmt <= rangePts[1]){
			return UI_SIZING.variableDisplay[all].height;
		}
	}
	return 100;
};

//---------------------------------------------- Variable Display -----------------------------------------------//
function variablesDisplayGroup(parent){
	var g1 = parent.add("group");
  g1.orientation = "column";
  g1.key = "variablesDisplay";

  var imageTest = parent.window.imageTest;

  var g1_1 = g1.add("panel");
  g1_1.orientation = "row";
  g1_1.alignChildren = "left";
  g1_1.size = [UI_SIZING.panelWidth_1, 25];
  g1_1.margins = [4,4,4,4];
  var ch_useHeaders = g1_1.add("checkbox", undefined, "Use Headers");
  ch_useHeaders.value = SETTINGS.useHeaders;
  ch_useHeaders.onClick = function(){
  	SETTINGS.useHeaders = this.value;
  	if(DATA.grid.length > 0){
			DATA.getCurrentVars(parent.window.UIElements);
	  	list_varNames.displayData(DATA.currentVars);
	  	// changes DATA.currentVars
	  	refreshListForIconsForce(list_varNames);
	  	TestManager.clearAllTestDisplays(this.window.UITestElements);
	  }
  };

  var ch_transpose = g1_1.add("checkbox", undefined, "Transpose Data");
  ch_transpose.value = SETTINGS.transpose;
  ch_transpose.onClick = function(){
  	SETTINGS.transpose = this.value;
  	if(DATA.grid.length > 0){
  		DATA.getCurrentVars(parent.window.UIElements);
	  	list_varNames.displayData(DATA.currentVars);
	  	// changes DATA.currentVars
	  	refreshListForIconsForce(list_varNames);
	  	TestManager.clearAllTestDisplays(this.window.UITestElements);
	  }
  };

  var sep1 = g1_1.add("group");
  sep1.size = [10, 15];

  var lbl_currentPreset = g1_1.add("statictext", undefined, "Current Preset");
  var disp_currentPreset = g1_1.add('edittext{ properties : {readonly : true}, text : "", characters : ' + 25 + ', justify : "center"}');

  var disp_dataFile = filePathInput(
  	g1,
  	"",
  	"Choose a .txt (tab-delimited) or .csv (comma-delimited) text file to import.",
  	SESSION.dataFileMask()
	);
	disp_dataFile.addEventListener("change", function(){
		if(this.text != ""){
			VI_MEMORY_SETTINGS.lastChosenDataFilePath = this.text;
			DATA.currentSourceFile = this.text;
			DATA.grid = getData(DATA.currentSourceFile);
			DATA.transposedGrid = transposeGrid(DATA.grid);
			DATA.getCurrentVars(parent.window.UIElements);
			this.targetList.displayData(DATA.currentVars);
			this.targetList.notify("onDraw");
			TestManager.clearAllTestDisplays(this.window.UITestElements);
		}
	});

	var listProps;
	if(!SESSION.multiColumnListBoxTest){
		// crazy CS6 Bug with multi-column listbox crash.
		listProps = {};
	} else {
		listProps = (imageTest)? {
			numberOfColumns: 4,
			showHeaders: true,
			columnTitles: ["Variable Name", "", "Type", "URL"],
			columnWidths: [150, 25, 100, 220]
		} : {
			numberOfColumns: 3,
			showHeaders: true,
			columnTitles: ["Variable Name", "Type", "URL"],
			columnWidths: [150, 100, 220]
		};
	}

	var list_varNames = g1.add("listbox", undefined, [], listProps);
	list_varNames.size = [UI_SIZING.panelWidth_1, UI_SIZING.variableDisplay.medium.height];
	list_varNames.alignment = "fill";
	disp_dataFile.targetList = list_varNames;
	list_varNames.displayData = displayData;

	if(imageTest && SESSION.AIVersion >= 17){
		list_varNames.addEventListener("mousemove", function(){
			refreshListForIcons(this);
		});
		list_varNames.addEventListener("mouseover", function(){
			refreshListForIcons(this);
		});
		list_varNames.addEventListener("mouseup", function(){
			refreshListForIcons(this);
		});
	}

	list_varNames.onDoubleClick = function(){
		if(this.selection != null){
			var dialogResult = variableOptionsDialog(DATA.currentVars[this.selection.index]);
			if(dialogResult != null && dialogResult.changed){
				DATA.currentVars[this.selection.index] = dialogResult.varObj;
				/*
				this.selection.text = varObj.varName;
				if(SESSION.AIVersion == 16){
					// problems with CS6 multi-column listbox
					if(SESSION.imageTest){
						this.selection.icon = ICONS[varObj.varType];
						this.selection.text = this.selection.text + " | " + varType
					}
				} else {
					if(SESSION.imageTest){
						this.selection.subItems[0].icon = ICONS[varObj.varType];
						this.selection.subItems[1].text = varObj.varType;
						this.selection.subItems[2].text = "";
					} else {
						this.selection.subItems[0].text = varObj.varType;
						this.selection.subItems[1].text = "";
					}
				}
				*/
				this.displayData(DATA.currentVars);
				TestManager.clearAllTestDisplays(this.window.UITestElements);
			}
		}
	};

	parent.window.UIElements["useHeaders"] = ch_useHeaders;
	parent.window.UIElements["transpose"] = ch_transpose;
	parent.window.UIElements["variableDisplay"] = list_varNames;
	parent.window.UIElements["disp_dataFile"] = disp_dataFile;
	parent.window.UIElements["currentlySelectedPresetName"] = [];
	parent.window.UIElements["currentlySelectedPresetName"][0] = disp_currentPreset;

	g1.disp_dataFile = disp_dataFile;
	return g1;
};

//------------------------------------------------------------------------------------------------------//

//--------------------------------------- General Options ----------------------------------------------//

function optionsGroup(parent){
	var g1 = parent.add("group");
	g1.key = "optionsGroup";
	g1.spacing = 4;
	g1.orientation = "column";

	var g_currentPreset = g1.add("group");
	var lbl_currentPreset = g_currentPreset.add("statictext", undefined, "Current Preset: ");
	var disp_currentPreset = g_currentPreset.add('edittext{ properties : {readonly : true}, text : "", characters : ' + 40 + ', justify : "center"}');
  parent.window.UIElements["currentlySelectedPresetName"][1] = disp_currentPreset;

  var g2 = g1.add("group");
  g2.alignChildren = "fill";
	var g_scriptWarnings = g2.add("panel", undefined, "Warnings");

	var warningItems = getPropertyList(WARNINGSETTINGS), thisWarningItem, newItem;
	var list_warnings = g_scriptWarnings.add("listbox", undefined, []);
	list_warnings.size = [250, 120];
	list_warnings.data = {};
	for (var i = 0; i < warningItems.length; i++) {
		thisWarningItem = warningItems[i];
		newItem = list_warnings.add("item");
		newItem.text = unCamelCaseSplit(thisWarningItem);
		newItem.checked = WARNINGSETTINGS[thisWarningItem];
		list_warnings.data[newItem.text] = thisWarningItem;
	};

	list_warnings.onDoubleClick = function(){
		if(this.selection != null){
			this.selection.checked = !this.selection.checked;
			WARNINGSETTINGS[this.data[this.selection.text]] = this.selection.checked;
		}
	};

	var g_settings = g2.add("panel", undefined, "Settings");
	g_settings.alignChildren = "left";
	g_settings.spacing = 4;
	var ch_dbslNextline = g_settings.add("checkbox", undefined, "'\\\\' creates line break");
	ch_dbslNextline.size = [204, 20];

	if(LOCALTEST){
		var btn_visKeys = g_settings.add("button", undefined, "Edit Visibility Keywords");
		btn_visKeys.helpTip = "Control which keywords will result in a true/false for the visibility variables."
	}

	var g_datasetNames = g1.add("panel", undefined, "Dataset Names");
	g_datasetNames.size = [UI_SIZING.panelWidth_1, 100];
	g_datasetNames.orientation = "row";
	var btn_assign = g_datasetNames.add("button", undefined, "Assign");
	var disp_datasetNamePreview = g_datasetNames.add("edittext", undefined, "", {readonly : true});
	disp_datasetNamePreview.characters = 50;

	btn_assign.onClick = function(){
		var newDsNames = datasetAssignDialog(DATASETNAMEFIELDS_current);
		if(newDsNames ==  null){
			return;
		}
		DATASETNAMEFIELDS_current = newDsNames;
		parent.window.UIElements["datasetNamePreview"].setValue(getDatasetNamePreviewString());
		DATA.getCurrentGrid();
		var tabGroupKey = "testTabs";
		if(this.window.hasOwnProperty(tabGroupKey)){
			this.window.UITestElements[tabGroupKey].children[0].populateFields();
			// also populate the testing tab
		}
	};

	var g_xmlOptions = g1.add("panel", undefined, "XML Options");
	g_xmlOptions.orientation = "column";
	g_xmlOptions.size = [UI_SIZING.panelWidth_1, 100];
	g_xmlOptions.spacing = 4;
	var ch_keepXML = g_xmlOptions.add("checkbox", undefined, "Keep XML");
	var g_xmlOptions_1 = g_xmlOptions.add("group");
	var btn_xmlFile = g_xmlOptions_1.add("button", undefined, "XML File");
	var disp_xmlFile = g_xmlOptions_1.add("edittext", undefined, "", {readonly : true});
	disp_xmlFile.characters = 50;
	disp_xmlFile.setValue = function(value){
		this.text = value;
		this.helpTip = value;
	};

	var g_autobinding = g1.add("panel", undefined, "Auto Binding");
	g_autobinding.size = [UI_SIZING.panelWidth_1, 100];
	g_autobinding.spacing = 2;
	g_autobinding.margins = [7,6,6,6];
	g_autobinding.orientation = "row";

	var autoBindingPropertyText = getSpecificPropertyListObj(AUTOBINDING, "text");
	var autoBindingPropertyType = getSpecificPropertyListObj(AUTOBINDING, "type");
	var dd_selectedAutobinding = makeDropdownlist(g_autobinding, autoBindingPropertyText);
	dd_selectedAutobinding.data = {};
	for (var i = 0; i < dd_selectedAutobinding.items.length; i++) {
		dd_selectedAutobinding.data[dd_selectedAutobinding.items[i].text] = autoBindingPropertyType[i];
	};
	dd_selectedAutobinding.onChange = function(){
		SETTINGS.selectedAutobinding = this.data[this.selection.text];
		if(SESSION.documentExists){
			TestManager.clearSpecificTestDisplays(this.window.UITestElements, "artBinding");
		}
	};
	var g_autobinding_1 = g_autobinding.add("group");
	g_autobinding_1.spacing = 2;
	var btn_foundBindItems = g_autobinding_1.add("button", undefined, "Find Art");
	var disp_foundBindItems = g_autobinding_1.add("edittext", undefined, "", {readonly : true});
	disp_foundBindItems.characters = 37;

	if(!SESSION.documentExists){
		g_autobinding_1.visible = false;
	} else {
		btn_foundBindItems.onClick = function(){
			if(DATA.grid.length == 0){
				alert("Please import a data file first.");
				return;
			}
			displayFoundArtBindings(this.window.UITestElements);
		};
	}

	ch_keepXML.onClick = function(){
		SETTINGS.keepXML = this.value;
		if(!this.value){
			disp_xmlFile.setValue(decodeURI(SETTINGS.getDataXMLDestination()));
		}
	};

	btn_xmlFile.onClick = function(){
		if(!ch_keepXML.value){
			disp_xmlFile.setValue(decodeURI(SETTINGS.getDataXMLDestination()));
			return;
		}
		var dfStr = this.window.UIElements["disp_dataFile"].getValue();
		if(dfStr != ""){
			var dataFile = File(dfStr);
			if(dataFile.exists){
				var xmlFile = File(dataFile.parent + "/" + decodeURI(dataFile.name).replace(/\.\w{2,4}$/,"") + "-vi_data.xml");
				var destChoice = xmlFile.saveDlg("Choose a place to save the Variable Import XML File.");
				if(destChoice != null){
					disp_xmlFile.setValue(decodeURI(destChoice));
				} else {
					disp_xmlFile.setValue(decodeURI(SETTINGS.getDataXMLDestination()));
				}
			}
		}
	};

	disp_xmlFile.getValue = function(){
		if(SETTINGS.keepXML){
			return this.text;
		} else {
			return "temp";
		}
	};

	parent.window.UIElements["dbslNextline"] = ch_dbslNextline;
	parent.window.UIElements["selectedAutobinding"] = dd_selectedAutobinding;
	parent.window.UIElements["keepXML"] = ch_keepXML;
	parent.window.UIElements["xmlPath"] = disp_xmlFile;
	parent.window.UIElements["list_warnings"] = list_warnings;
	parent.window.UIElements["datasetNamePreview"] = disp_datasetNamePreview;

	if(SESSION.documentExists){
		// no art binding test field when a document is not present.
		parent.window.UITestElements["foundArtBindings"] = disp_foundBindItems;
	}

	return g1;
};

//------------------------------------------------------------------------------------------------------//

//---------------------------------------- Prepend Paths -----------------------------------------------//

function changeVarUrls(prop, newUrl){
	var thisObj;
	for (var i = 0; i < DATA.currentVars.length; i++) {
		thisObj = DATA.currentVars[i];
		if(thisObj.varType == prop){
			thisObj.url = newUrl;
		}
	};
};

function prependPathsGroup(parent){
	var g1 = parent.add("group");
	g1.key = "prependPathsGroup";
	g1.spacing = 4;
	g1.orientation = "column";

	var g_pst = g1.add("group");
  var lbl_currentPreset = g_pst.add("statictext", undefined, "Current Preset");
  var disp_currentPreset = g_pst.add('edittext{ properties : {readonly : true}, text : "", characters : ' + 40 + ', justify : "center"}');
	parent.window.UIElements["currentlySelectedPresetName"][2] = disp_currentPreset;

	var sep = g1.add("group");
	sep.size = [30, 30];

	var disp_prependImagePath = checkboxFolderPathInput(g1, "Prepend Image Path", "Choose Path", "Choose directory for image files.");
	disp_prependImagePath.key = "Image";
	parent.window.UIElements["prependToAllImages"] = disp_prependImagePath.checkbox;
	parent.window.UIElements["prependImagePath"] = disp_prependImagePath;

	var g_foundImages = g1.add("group");
	var lbl_foundImages = g_foundImages.add("statictext", undefined, "Found Images");
	var disp_foundImages = g_foundImages.add("edittext { properties : {readonly : true}, justify : 'center' }");
	disp_foundImages.characters = UI_SIZING.foundOfTotalDisp.characters;
	disp_foundImages.key = "Image";
	var btn_foundImages = g_foundImages.add("button", undefined, "Show Log");
	btn_foundImages.key = "Images";
	btn_foundImages.disp = disp_foundImages;

	btn_foundImages.onClick = fileRefTestHandler;

	var sep1 = g1.add("group");
	sep1.size = [30, 30];

	var disp_prependGraphPath = checkboxFolderPathInput(g1, "Prepend Graph Path", "Choose Path", "Choose directory for graph-data files.");
	disp_prependGraphPath.key = "Graph";
	parent.window.UIElements["prependToAllGraphs"] = disp_prependGraphPath.checkbox;
	parent.window.UIElements["prependGraphPath"] = disp_prependGraphPath;

	var g_foundGraphs = g1.add("group");
	var lbl_foundGraphs = g_foundGraphs.add("statictext", undefined, "Found Graphs");
	var disp_foundGraphs = g_foundGraphs.add("edittext { properties : {readonly : true}, justify : 'center' }");
	disp_foundGraphs.characters = UI_SIZING.foundOfTotalDisp.characters;
	disp_foundGraphs.key = "Graph";
	var btn_foundGraphs = g_foundGraphs.add("button", undefined, "Show Log");
	btn_foundGraphs.key = "Graphs";
	btn_foundGraphs.disp = disp_foundGraphs;

	btn_foundGraphs.onClick = fileRefTestHandler;

	disp_prependImagePath.onChange = function(){
		SETTINGS["prependToAll" + this.key + "s"] = this.checkbox.getValue();
		var thisText = this.getValue();
		SETTINGS["prepend" + this.key + "Path"] = thisText;
		if(thisText != ""){
			DATA.getCurrentVars(parent.window.UIElements);
			parent.window.UIElements["variableDisplay"].displayData(DATA.currentVars);
		} else {
			this.helpTip = "";
		}
		TestManager.clearSpecificTestDisplays(this.window.UITestElements, this.key);
	};

	disp_prependGraphPath.onChange = function(){
		SETTINGS["prependToAll" + this.key + "s"] = this.checkbox.getValue();
		var thisText = this.getValue();
		SETTINGS["prepend" + this.key + "Path"] = thisText;
		if(thisText != ""){
			DATA.getCurrentVars(parent.window.UIElements);
			parent.window.UIElements["variableDisplay"].displayData(DATA.currentVars);
		} else {
			this.helpTip = "";
		}
		TestManager.clearSpecificTestDisplays(this.window.UITestElements, this.key);
	};

	parent.window.UITestElements["foundImages"] = disp_foundImages;
	parent.window.UITestElements["foundGraphs"] = disp_foundGraphs;

	return g1;
};

//------------------------------------------------------------------------------------------------------//

//--------------------------------------- Presets Options ----------------------------------------------//

function getPropertySummaryString(obj){
  var msg = [];
  for (var all in obj) {
  	if(typeof obj[all] != "object"){
	  	if(all != "name"){
	  		if(all == "selectedAutobinding"){
	  			msg.push(unCamelCaseSplit(all) + " : " + unCamelCaseSplit(obj[all]));
	  		} else {
	  			msg.push(unCamelCaseSplit(all) + " : " + obj[all]);
	  		}
	  	}
	  } else {
	  	var dsNmMsg = [], propObj, dispText;
	  	for(var it in obj[all]){
	  		propObj = getSpecificPropertyObj(FIELDNAMEOPTIONS_current, "type", obj[all][it].type);
	  		if(propObj == null){
	  			// missing variable
	  			propObj = {
	  				type : obj[all][it].type,
	  				displayText : "Variable " + obj[all][it].type.replace(/[^\d]/g,"") + " Value : \"" + obj[all][it].text + "\""
	  			};
	  		}
	  		dispText = (propObj.displayText == "Custom Text") ? propObj.displayText + " : \"" + obj[all][it].text + "\"" : propObj.displayText;
	  		dsNmMsg.push(it + " : " + dispText);
	  	}
	  	msg.push("Dataset Names:\n" + dsNmMsg.join("\n"));
	  }
  };
  return msg;
};

function presetDialog(presetObjOrig, purpose, currentStateObj){

	var presetObj = clone(presetObjOrig);
	// if(presetObj.hasOwnProperty("datasetNameObj")){
	// 	presetObj.datasetNameObj = clearOutOfBoundVariables(presetObj.datasetNameObj);
	// }
	var purpose = clone(purpose);
	var w = new Window("dialog", "Preset Display");
	var g1 = w.add("group");
	g1.key = "presetOptionsGroup";
	g1.spacing = 4;
	g1.orientation = "column";

	var g1_1 = g1.add("group");
  var lbl_currentPreset = g1_1.add("statictext", undefined, "Name");

  var nameText = (purpose.placeholderName == "self") ? presetObj.name : purpose.placeholderName;
  var disp_currentPreset = g1_1.add("edittext", undefined,
  	nameText,
  	{readonly : (!purpose.presetDispEditable || nameText == "default")}
	);
  disp_currentPreset.characters = 36;
  var oldName = disp_currentPreset.text;

  var summary = g1.add("edittext", undefined, "", {readonly : true, multiline : true});
  summary.size = [650, 200];

  var msg = getPropertySummaryString(presetObj);

  if(purpose.actionButtonName == "Update"){
  	summary.size = [650, 250];
  	msg.unshift(presetObj.name + ":", "------------------");
  	msg.push("\r");

  	var msg2 = getPropertySummaryString(currentStateObj);
  	msg2.unshift("Current Dialog:", "------------------");
  	summary.text = msg.join("\n").trim();

  	var lbl_summary2 = g1.add('statictext', undefined, "Current Dialog");
	  var summary2 = g1.add("edittext", undefined, "", {readonly : true, multiline : true});
	  summary2.size = [650, 250];
	  summary2.text = msg2.join("\n").trim();

  } else {
  	var spacer = g1.add("group");
  	spacer.size = [10,10];
  	var lbl_summary2 = g1.add('statictext', undefined, "Dataset Names");
	  var summary2 = g1.add("edittext", undefined, "", {readonly : true, multiline : true});
	  summary2.size = [650, 100];
	  summary2.text = msg.join("\n").replace(/[.\r\n\s\S]+Dataset Names\:/g, "").trim();
  	summary.text = msg.join("\n").replace(/Dataset Names\:[.\r\n\s\S]+$/g, "").trim();
  }

  var g_btn = w.add("group");

  if(purpose.showRemoveButton && presetObj.name != "default"){
  	var btn_rmv = g_btn.add("button", undefined, "Remove");
  	btn_rmv.onClick = function(){
			if(!CONFIRMS["confirmRemovalOfPresets"]( presetObj.name )){
				return;
			}
  		purpose.resultAction = PresetDialogPurposes.Remove.resultAction;
  		purpose.actionButtonName = "Remove";
  		w.close();
  	};
  }

  var btn_ok = g_btn.add("button", undefined, purpose.actionButtonName);
  w.defaultElement = btn_ok;

  var btn_ccl = g_btn.add("button", undefined, "Cancel");

  w.onShow = function(){
  	if(purpose.presetDispEditable && presetObj.name != "default"){
  		disp_currentPreset.active = false;
  		disp_currentPreset.active = true;
  	}
  };

  if(w.show() == 2){
  	return null;
  } else {
  	return {
  		presetName : disp_currentPreset.text,
  		oldName : oldName,
  		resultAction : purpose.resultAction,
  		action : purpose.actionButtonName
  	};
  }
};

function presetOptionsGroup(parent){
	var g1 = parent.add("group");
	g1.key = "presetOptionsGroup";
	g1.spacing = 4;
	g1.orientation = "column";

	var g1_0 = g1.add("group"); // row

	var g1_1 = g1_0.add("group");
	g1_1.orientation = "column";
	g1_1.alignChildren = "left";
	var g_pst = g1_1.add("group");
  var lbl_currentPreset = g_pst.add("statictext", undefined, "Current Preset");
  var disp_currentPreset = g_pst.add('edittext{ properties : {readonly : true}, text : "", characters : ' + 42 + ', justify : "center"}');
	parent.window.UIElements["currentlySelectedPresetName"][3] = disp_currentPreset;

	var list_presets = g1_1.add("listbox", undefined, getSpecificPropertyListArr(PRESETS, "name"));
	list_presets.size = [440, 320];
	list_presets.onDoubleClick = function(){
		if(this.selection != null){
			var res = presetDialog(PRESETS.getByName(this.selection.text), PresetDialogPurposes.Activate);
			if(res == null){
				return;
			}
			if(res.action == "Remove"){
				if(!CONFIRMS["confirmRemovalOfPresets"]( this.selection.text )){
					return;
				}
			} else if(res.action == "Update"){
				if(!CONFIRMS["confirmUpdatingOfPresets"]( this.selection.text )){
					return;
				}
			}
			res.resultAction(res, this.window.UIElements, this);
		}
	};
	parent.window.UIElements["list_presets"] = list_presets;

	var g_btn = g1_0.add("group");
	g_btn.orientation = "column";
	g_btn.alignChildren = "right";
	var btn_add = g_btn.add("button", undefined, "Add");
	var btn_update = g_btn.add("button", undefined, "Update");
	var btn_remove = g_btn.add("button", undefined, "Remove");
	var btn_activate = g_btn.add("button", undefined, "Activate");

	var g_btm = g1.add("group");
	var btn_save = g_btm.add("button", undefined, "Save Presets");
	btn_save.size = [210, 30];
	btn_save.onClick = function(){
		updateScriptDataFromUI(this.window.UIElements);
		writeSettingsFile(getScriptDataObj());
	};

	btn_activate.onClick = function(){
		if(list_presets.selection != null){
			PresetDialogPurposes.Activate.resultAction({
				presetName : list_presets.selection.text
			}, this.window.UIElements, list_presets);
		} else {
			alert("Please select a preset in the Presets List");
		}
	};

	btn_remove.onClick = function(){
		if(list_presets.selection != null){
			if(list_presets.selection.text == "default"){
				scriptAlert("Cannot remove the default preset.");
				return;
			}
			if(!CONFIRMS["confirmRemovalOfPresets"]( list_presets.selection.text )){
				return;
			}
			PresetDialogPurposes.Remove.resultAction({
				presetName : list_presets.selection.text
			}, this.window.UIElements, list_presets);
		} else {
			alert("Please select a preset in the Presets List");
		}
	};

	btn_update.onClick = function(){
		if(list_presets.selection != null){
			var presetDialogResult = presetDialog(
				PRESETS.getByName(list_presets.selection.text),
				PresetDialogPurposes.Update,
				getUIData(this.window.UIElements)
			);
			if(presetDialogResult == null){
				return;
			}
			if(!CONFIRMS["confirmUpdatingOfPresets"]( list_presets.selection.text )){
				return;
			}
			presetDialogResult.resultAction(presetDialogResult, this.window.UIElements, list_presets);
		} else {
			alert("Please select a preset in the Presets List");
		}
	};

	btn_add.onClick = function(){
		var presetDialogResult = presetDialog(getUIData(this.window.UIElements), PresetDialogPurposes.Add);
		if(presetDialogResult == null){
			return;
		}
		presetDialogResult.resultAction(presetDialogResult, this.window.UIElements, list_presets);
	};

	return g1;
};

function refreshPresetListbox(elem){
	elem.removeAll();
	var newNameList = getSpecificPropertyListArr(PRESETS, "name");
	for (var i = 0; i < newNameList.length; i++) {
		elem.add("item", newNameList[i]);
	};
};

//------------------------------------------------------------------------------------------------------//


//==================================================================================//

//================================= UI WINDOW PT 3 =================================//

//---------------------------------------------- Testing Area -----------------------------------------------//

function testAreaGroup(parent){
	var g1 = parent.add("group");
	g1.key = "testAreaGroup";
	g1.spacing = 4;
	g1.orientation = "column";

	var tp = g1.add("tabbedpanel");
	
	for(var all in TestManager){
		if(typeof TestManager[all] != 'function'){
			if(!SESSION.documentExists && all == "artBindings"){
				// don't even make a binding test tab when there's no document open
				continue;
			}
			tp[TestManager[all].key] = TestManager[all].makeTab(tp);
		}
	}

	var g_btn = g1.add("group");
	var btn_refreshTest = g_btn.add("button", undefined, "Refresh Test");
	btn_refreshTest.size = [250, 30];

	btn_refreshTest.onClick = function(){
		if(DATA.currentVars.length == 0){
			alert("Please import a data file first.");
			return;
		}
		DATA.getCurrentGrid();
		var thisTab;
		for(var i = 0; i < tp.children.length; i++){
			thisTab = tp.children[i];
			if(thisTab.text != "Art Bindings"){
				// populate all places where image or graph files are listed (Prepend Paths group)
				thisTab.populateFields();
				for (var all in this.window.UITestElements) {
					thisElem = this.window.UITestElements[all];
					if(thisElem.hasOwnProperty("key") && thisElem.key == thisTab.key && typeof thisElem.setValue == 'function'){
						thisElem.setValue(thisTab.contents.disp_foundMissingNum.getValue());
					}
				}
			} else if(tp.selection.text == "Art Bindings" && SESSION.documentExists){
				// populate the "Find Art" display (Options group)
				displayFoundArtBindings(parent.window.UITestElements);
			}
		}
	};

	parent.window.UITestElements["testTabs"] = tp;

	return g1;
};

//-----------------------------------------------------------------------------------------------------------//

function toggleUrlInputVis(ddlist, toggleElem){
	if(ddlist.selection != null){
		if(ddlist.selection.text == "Graph" || ddlist.selection.text == "Image"){
			toggleElem.visible = true;
		} else {
			toggleElem.visible = false;
		}
	}
};

function variableOptionsDialog(uiVarObj){
	var w = new Window("dialog", "Variable " + (uiVarObj.varIndex + 1));
	w.spacing = 4;

	var g0 = w.add("group");

	var g1 = g0.add("panel", undefined, "Variable Name");
	var disp_varName = g1.add("edittext", undefined, uiVarObj.varName);
	disp_varName.size = [229, 30];

	var g2 = g0.add("panel", undefined, "Variable Type");
	var disp_varType = makeDropdownlist(g2, getPropertyList(VARTYPES));
	disp_varType.size = [229, 30];
	disp_varType.setValue(uiVarObj.varType);
	if(SESSION.imageTest){
		for(var i = 0; i < disp_varType.items.length; i++){
			disp_varType.items[i].image = ICONS[disp_varType.items[i]];
		}
	}
	disp_varType.onChange = function(){
		toggleUrlInputVis(this, disp_url.parent);
	};

	var disp_url = checkboxFolderPathInput(w, "Prepend Path", "Choose folder directory");
	disp_url.setValue(uiVarObj.url);
	disp_url.checkbox.value = (uiVarObj.url.trim() == "") ? false : true;

	var g_btn = w.add("group");
	var btn_ok = g_btn.add("button", undefined, "Ok");
	var btn_ccl = g_btn.add("button", undefined, "Cancel");

	disp_varName.onChanging = function(){
		if( !isXMLTagName(this.text) ){
			this.setBg([1, 0.7, 0.7]);
			this.enabled = false;
			this.enabled = true;
			this.active = false;
			this.active = true;
		} else {
			this.setBg([1, 1, 1]);
		}
	};

	btn_ok.onClick = function(){
		if( !DATA.testVariableName( uiVarObj.varName, disp_varName.getValue() ) ){
			return;
		}
		this.window.close();
	};
		
	w.onShow = function(){
		toggleUrlInputVis(disp_varType, disp_url.parent);
	};

	if(w.show() == 2){
		return null;
	} else {
		var varObj = {
			varName : disp_varName.getValue(),
			varType : disp_varType.getValue(),
			url : (disp_varType.getValue() == "Graph" || disp_varType.getValue() == "Image") ? disp_url.getValue() : "",
			varIndex : uiVarObj.varIndex
		};
		var changed = false;
		for(var all in uiVarObj){
			for(var that in varObj){
				if(uiVarObj[all] != varObj[all]){
					changed = true;
					break;
				}
			}
		}
		return {
			varObj : varObj,
			changed : changed
		};
	}
};

function datasetNameFieldComponent(parent, fieldName, datasetObj){

	function toggle(key){
		if(key == FIELDNAMEOPTIONS_current["customText"].displayText){
			disp.toggle("editable");
			disp.editable.active = false;
			disp.editable.active = true;
		} else {
			disp.toggle("readonly");
		}
	};

	var g1 = parent.add("panel", undefined, fieldName[0].toUpperCase() + fieldName.substr(1).replace("_", " "));
	g1.spacing = 4;
	g1.margins = [2, 8, 2, 2];
	var dd_options = makeDropdownlist(g1, getSpecificPropertyListObj(FIELDNAMEOPTIONS_current, "displayText"));
	var thisType = datasetObj[fieldName].type;
	dd_options.setValue(FIELDNAMEOPTIONS_current[thisType].displayText);

	var disp = makeEditableReadonlyEdittext(g1, 20, datasetObj[fieldName].text);

	toggle(dd_options.selection.text);

	dd_options.onChange = function(){
		var sel = this.selection;
		disp.setValue(getSpecificPropertyObj(FIELDNAMEOPTIONS_current, "displayText", this.selection.text).defaultText);
		toggle(this.selection.text);
	};
	return {
		typeElem : dd_options,
		textElem : disp
	};
};

function getDatasetNamePreviewString(){
	var str = "";
	for(var all in DATASETNAMEFIELDS_current){
		str += DATASETNAMEFIELDS_current[all].text;
	}
	return str;
};

function datasetAssignDialog(datasetObjOrig){

	function getUIDsNameFieldObj(tempObj){
		for(var all in tempObj){
			var type = getSpecificPropertyObj(FIELDNAMEOPTIONS_current, "displayText", tempObj[all].typeElem.getValue()).type;
			resObj[all] = {
				type : type,
				text : tempObj[all].textElem.getValue()
			};
		}
		return resObj;
	};

	var datasetObj = clearOutOfBoundVariables(clone(datasetObjOrig));

	var w = new Window("dialog", "Assign Dataset Names");
	w.spacing = 4;
	w.margins = [4, 4, 4, 4];
	var resObj = {}, tempObj = {};
	var g0 = w.add("panel");
	g0.spacing = 4;
	g0.margins = [4, 4, 4, 4];
	var g0_1 = g0.add("group");
	g0_1.spacing = 2;
	var g0_2 = g0.add("group");
	g0_2.spacing = 2;
	var groups = [g0_1, g0_2];
	var c = 0, cg = 0;
	for(var all in datasetObj){
		cg = (c < 3) ? 0 : 1;
		tempObj[all] = datasetNameFieldComponent(groups[cg], all, datasetObj);
		c++;
	};

	var g_btn = w.add("group");
	if(DATA.currentVars.length > 0){
		var btn_test = g_btn.add("button", undefined, "Test Dataset Names");
		btn_test.onClick = function(){
			DATA.getCurrentGrid();
			// quickView(DATA.getTestDatasetNames(getUIDsNameFieldObj(tempObj)).join("\n"), "Dataset Names:", [300, 450]);
			var testData = DATA.getTestDatasetNames(getUIDsNameFieldObj(tempObj)).join("\n");
			simpleShowModal(TestManager.datasetNames.makeUIContents, {
				title : "Dataset Name List",
				data : testData,
				size : [300, 450]
			});
		};
		btn_test.helpTip = "Get full list of dataset names.";
	}
	var btn_ok = g_btn.add("button", undefined, "Ok");
	var btn_ccl = g_btn.add("button", undefined, "Cancel");

	w.onShow = function(){

	};

	if(w.show() == 2){
		return null;
	} else {
		return getUIDsNameFieldObj(tempObj);
	}
};

function finishedXMLFileDialog(xmlDest, varsNum, recordsNum){
	var w = new Window("dialog", SESSION.scriptName + ": XML File created.");

	var msg = "Your XML file has been created.\rIt contains " + varsNum +
		" variable" + ((varsNum > 1)? "s" : "") + " and " + recordsNum + " record" + ((recordsNum > 1) ? "s" : "") + ".";

	var l = w.add("statictext", undefined, msg, {multiline : true});
	l.size = [260, 100];

	var e = w.add("edittext", undefined, decodeURI(xmlDest), {readonly : true});
	e.characters = 40;
	e.helpTip = decodeURI(xmlDest);
	var g_btn = w.add("group");
	var btn_ok = g_btn.add("button", undefined, "Ok");
	var btn_reveal = g_btn.add("button", undefined, "Reveal in File System");

	btn_reveal.onClick = function(){
		Folder(File(e.text).parent).execute();
		w.close();
	}
	w.show();
};

function finishedXMLImportDialog(varsNum, recordsNum, missingImgNum, missingGrfNum){
	var w = new Window("dialog", SESSION.scriptName + ": Variable Data Imported.");

	var msg = "Your variable data has been imported.\rIt contains " + varsNum +
		" variable" + ((varsNum > 1)? "s" : "") + " and " + recordsNum + " record" + ((recordsNum > 1) ? "s" : "") + ".";

	var l = w.add("statictext", undefined, msg, {multiline : true});
	l.size = [260, 50];

	if(missingImgNum > 0){
		l = w.add("statictext", undefined, missingImgNum + " Missing Image(s)", {multiline : true});
		l.size = [260, 100];
	} else if(missingGrfNum > 0){
		l = w.add("statictext", undefined, missingGrfNum + " Missing Graph(s)", {multiline : true});
		l.size = [260, 100];
	} else {
		var g_cycle = w.add("group");
		var btn_cycle = g_cycle.add("button", undefined, "Cycle Update All Datasets");
		btn_cycle.helpTip = "Cycling and updating each of the datasets ensures that update-asterisks will appear correctly";
		var disp_cycle = g_cycle.add('edittext { properties : {readonly : true}, justify : "center" }');
		disp_cycle.characters = 10;
		disp_cycle.setValue("0 of " + app.activeDocument.dataSets.length);
		btn_cycle.onClick = function(){
			cycleUpdateAllDatasets(app.activeDocument, disp_cycle);
		};
	}

	var g_btn = w.add("group");
	var btn_ok = g_btn.add("button", undefined, "Ok");

	w.show();
};




//==================================================================================//

	var userData = UIWindow();
	if(userData == null){
		// abort mission
		return;
	}

	processUserInput(userData);

};

VariableImporter();

