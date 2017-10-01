/**
* @@@BUILDINFO@@@ Recolor.jsx !Version! Tue Sep 26 2017 22:55:16 GMT-0500
*/

var script = (
	function init() {
		if (!Array.prototype.indexOf) {
		  Array.prototype.indexOf = function(searchElement, fromIndex) {
		    var k;
		    if (this == null) {
		      throw new TypeError('"this" is null or not defined');
		    }
		    var O = Object(this);
		    var len = O.length >>> 0;
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
		      if (k in O && O[k] === searchElement) {
		        return k;
		      }
		      k++;
		    }
		    return -1;
		  };
		};
    String.prototype.trim = function () {
      return this.replace(/^\s+|\s+$/gm,'');
    };
    function getInstructionFromString(stringInput){
    	var resObj = {};
			var baseProperties = ["SOURCETEXT", "TARGETNOTE"];
			var applicationProperties = ["APPLYCOLOR", "APPLYSWATCH", "APPLYSTYLE"];
			var propCheckBase = [], propCheckApp = [];
			var rawContent = stringInput.split(/[\r\n]/g);
			var row, splitRow = [];
			try {
				for (var i = 0; i < rawContent.length; i++) {
					row = rawContent[i];
					splitRow = row.split(/:/g);
					if(splitRow.length == 2){
						resObj[splitRow[0].trim()] = splitRow[1].trim();
					}
				};
			} catch (e){
				return null;
			}
			for(var all in resObj){
				if(propCheckBase.indexOf(all) == -1){
					if(baseProperties.indexOf(all) > -1){
						propCheckBase.push(all);
					}
				}
				if(propCheckApp.indexOf(all) == -1){
					if(baseProperties.indexOf(all) > -1){
						propCheckApp.push(all);
					}
				}
			}
			if(propCheckBase.length > 1 && propCheckApp.length > 0){
				return resObj;
			}
			return null;
    };
		function getCommandObjProperties(artObj){
			var a = artObj;
			var resObj;

			if(a.note != ""){
				resObj = getInstructionFromString(a.note);
				if(resObj != null && typeof(resObj) != "undefined"){
					return resObj;
				}
			}
			if(a.typename == "TextFrame"){
				resObj = getInstructionFromString(a.contents);
				if(resObj != null && typeof(resObj) != "undefined"){
					return resObj;
				}
			}
			return null;
		}
		function hexToRgb(hex) {
			// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
	    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
	    });
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return [result[1], result[2], result[3]] ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
	    ] : null;
		}
		function getColorNumbers(sourceTextContent){
			// gets colors from these patterns:
			// #FFFFFF, rgb(255,255,255), rgba(255,255,255,1), cmyk(0,0,0,0)
			var s = sourceTextContent.toString();
			var rx_hex = /^#(?:[0-9a-f]{3}){1,2}$/i;
			var rx_rgb = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
			var rx_cmyk = /^cmyk\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
			if(s.match(rx_hex)){
				return hexToRgb(s);
			} else if(s.match(rx_rgb)){
				var m = s.match(rx_rgb);
				return [m[1], m[2], m[3]];
			} else if(s.match(rx_cmyk)){
				var m = s.match(rx_cmyk);
				return [m[1], m[2], m[3], m[4]];
			}
		}
		function buildProcessColor(numbers){
			var n = numbers, result;
			if(app.activeDocument.documentColorSpace == DocumentColorSpace.RGB){
				result = new RGBColor();
				if(n.length == 4){
					var c = app.convertSampleColor(ImageColorSpace.CMYK, n, ImageColorSpace.RGB, ColorConvertPurpose.defaultpurpose);
					result.red = c[0];
					result.green = c[1];
					result.blue = c[2];
				} else {
					result.red = n[0];
					result.green = n[1];
					result.blue = n[2];
				}
			} else {
				result = new CMYKColor();
				if(n.length == 3){
					var c = app.convertSampleColor(ImageColorSpace.RGB, n, ImageColorSpace.CMYK, ColorConvertPurpose.defaultpurpose);
					result.cyan = c[0];
					result.magenta = c[1];
					result.yellow = c[2];
					result.black = c[3];
				} else {
					result.cyan = n[0];
					result.magenta = n[1];
					result.yellow = n[2];
					result.black = n[3];
				}
			}
			return result;
		}
		function applyStrokeProcessColor(artObj, processColor){
			if(artObj.typename == "PathItem"){
				artObj.strokeColor = processColor;
			} else if(artObj.typename == "TextFrame"){
				if(artObj.textRange.characterAttributes.strokeColor != "[NoColor]"){
					artObj.textRange.characterAttributes.strokeColor = processColor;
				}
			} else if(artObj.typename == "CompoundPathItem"){
				applyStrokeProcessColor(artObj.pathItems[0], processColor)
			}
		}
		function getNoneSwatchColor(){
			return app.activeDocument.swatches.getByName("[None]").color;
		}
		function applyFillProcessColor(artObj, processColor){
			if(artObj.typename == "PathItem"){
				artObj.fillColor = processColor;
			} else if(artObj.typename == "TextFrame"){
				artObj.textRange.characterAttributes.fillColor = processColor;
			} else if(artObj.typename == "CompoundPathItem"){
				applyFillProcessColor(artObj.pathItems[0], processColor)
			}
		}

		function applyStrokeSwatch(artObj, chosenSwatch){
			if(artObj.typename == "PathItem"){
				artObj.strokeColor = chosenSwatch.color;
			} else if(artObj.typename == "TextFrame"){
				if(artObj.textRange.characterAttributes.strokeColor != "[NoColor]"){
					artObj.textRange.characterAttributes.strokeColor = chosenSwatch.color;
				}
			} else if(artObj.typename == "CompoundPathItem"){
				applyStrokeSwatch(artObj.pathItems[0], chosenSwatch)
			}
		}
		function applyFillSwatch(artObj, chosenSwatch){
			if(artObj.typename == "PathItem"){
				artObj.fillColor = chosenSwatch.color;
			} else if(artObj.typename == "TextFrame"){
				artObj.textRange.characterAttributes.fillColor = chosenSwatch.color;
			} else if(artObj.typename == "CompoundPathItem"){
				applyFillSwatch(artObj.pathItems[0], chosenSwatch)
			}
		}
		var actionsObj = {
			APPLYCOLOR : function(artObj, param, sourceTextContent){
				// param: STROKE, FILL, FILLANDSTROKE
				var processColor;
				if(sourceTextContent.trim() == "[None]"){
					processColor = getNoneSwatchColor();
				} else {
					processColor = buildProcessColor(getColorNumbers(sourceTextContent));
				}
				if(param == "STROKE"){
					applyStrokeProcessColor(artObj, processColor);
				} else if(param == "FILL"){
					applyFillProcessColor(artObj, processColor);
				} else if(param == "FILLANDSTROKE"){
					applyStrokeProcessColor(artObj, processColor);
					applyFillProcessColor(artObj, processColor);
				}
			},
			APPLYSTYLE : function(artObj, param, sourceTextContent){
				// param: APPLY, MERGE
				var chosenStyle = app.activeDocument.graphicStyles.getByName(sourceTextContent);
				if(param == "APPLY"){
					chosenStyle.applyTo(artObj);
				} else if(param == "MERGE"){
					chosenStyle.mergeTo(artObj);
				}
			},
			APPLYSWATCH : function(artObj, param, sourceTextContent){
				// param: STROKE, FILL, FILLANDSTROKE
				var chosenSwatch = app.activeDocument.swatches.getByName(sourceTextContent);
				if(param == "STROKE"){
					applyStrokeSwatch(artObj, chosenSwatch);
				} else if(param == "FILL"){
					applyFillSwatch(artObj, chosenSwatch);
				} else if(param == "FILLANDSTROKE"){
					applyStrokeSwatch(artObj, chosenSwatch);
					applyFillSwatch(artObj, chosenSwatch);
				}
			}
		}
		function performAction(doc, action, allPageItems){
			var sourceText, sourceTextContent;
			try {
				sourceText = doc.pageItems.getByName(action["SOURCETEXT"]);
				sourceTextContent = sourceText.contents.toString().trim();
				var item, param;
				for (var i = 0; i < allPageItems.length; i++) {
					item = allPageItems[i];
					if(!item.editable){
						continue;
					}
					if(item.note.trim() == action["TARGETNOTE"]){
						for(var all in action){
							if(all != "SOURCETEXT" && all != "TARGETNOTE"){
								param = action[all];
								actionsObj[all](item, param, sourceTextContent);
							}
						}
					}
				};
			} catch(e){
				return;
			}
		}

		function execute(){
			if(app.documents.length == 0){
				return;
			}
			var doc = app.activeDocument;
			var commandLayer, commands = [], allPageItems = [];
			try{
				commandLayer = doc.layers.getByName("COMMAND");
				var item, command;
				for (var i = 0; i < commandLayer.pageItems.length; i++) {
					item = commandLayer.pageItems[i];
					command = getCommandObjProperties(item);
					if(command != null){
						commands.push(command);
					}
				};
				if(commands.length > 0){
					for (var i = 0; i < doc.pageItems.length; i++) {
						allPageItems.push(doc.pageItems[i]);
					}
				}
			} catch(e){
				return;
			}
			var thisAction;

			for (var i = 0; i < commands.length; i++) {
				thisAction = commands[i];
				performAction(doc, thisAction, allPageItems);
			};
		}

		return {execute : execute};
	}
)();

script.execute();