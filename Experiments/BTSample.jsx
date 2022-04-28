//@target illustrator
//@targetengine main
function BTSample () {

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

	// * One line to easily feed into BT call.
	function hexDecode (str) {	var r=''; for (var i = 0; i < str.length; i += 2){ r += unescape('%' + str.substr(i, 2));} return r;	}
	
	function hexEncode (str) {
		var r = ''; var i = 0; var h; while (i < str.length) { h = str.charCodeAt(i++).toString(16); while (h.length < 2) { h = h; } r += h; } return r;
	}

	function getTrimmedError (errorMessage) {
		var displayMessage = errorMessage;
		if (displayMessage.length > 200) {
			displayMessage = displayMessage.substring(0, 200);
		}
		return displayMessage;
	}

	function styleThePath (pathItem) {
		pathItem.stroked = true;
		pathItem.strokeWidth = 4;
		pathItem.strokeColor = app.activeDocument.swatches.getByName("Black").color;
	}

	function checkDocument () {
		if (app.documents.length == 0) {
			throw new Error(BTSample.name + ": No documents are open.");
		}
	}

	function makeACircle (xy) {
		checkDocument();
		var doc = app.activeDocument;
		var x = xy[0]; // * Array argument example.
		var y = xy[1];
		var circle = doc.pathItems.ellipse(y, x, 60, 60);
		styleThePath(circle);
		return { circleResult : "A circle was made at [" + x + ", " + y + "]." };
	}

	function makeASquare (xyObj) {
		checkDocument();
		var x = xyObj.x;
		var y = xyObj.y;
		var doc = app.activeDocument;
		var square = doc.pathItems.rectangle(y, x, 60, 60);
		styleThePath(square);
		return { squareResult : "A square was made at [" + x + ", " + y + "]." };
	}

	function checkMethod (methodName) {
		if (!methodName || typeof methodName !== "string") {
			throw new Error("Method is invalid");
		}
		var availableMethods = "|" + [
			makeACircle.name,
			makeASquare.name
		].join("||") + "|";
		if (availableMethods.indexOf("|" + methodName + "|") == -1) {
			throw new Error("Method '" + methodName + "' is not among the available methods: [" + availableMethods.split("||").replace(/\|/g, "") + "].");
		}
		return true;
	}

	// * An object which is a dictionary of methods and their names. A method can be called by using its name and accessing this object.
	const METHODS = {
		"makeASquare" : makeASquare,
		"makeACircle" : makeACircle,
	};

	/**
	 * The method which sends this entire script and running instructions via BridgeTalk.
	 * @param {string} methodName - Method that will execute out of this script.
	 * @param { Record<string, unknown> | any[] | boolean | string | number } arguments - An argument which will be serialized into JSON.
	 * @param {(res: { body: string }) => void} [onResult]  - Optional method to perform a follow-up action in the ScriptUI window.
	 */
	function makeBTCall (appName, methodName, arguments, onResult) {
		checkMethod(methodName);
		var argString = "";
		if (typeof arguments == "object" && arguments !== null) {
			argString = JSON.stringify(arguments);
		} else if (arguments instanceof Array) {
			argString = JSON.stringify(arguments);
		} else if (typeof arguments == "boolean") {
			argString = JSON.stringify({ booleanValue : arguments });
		} else if (typeof arguments == "string") {
			argString = JSON.stringify({ stringValue : arguments });
		} else if (typeof arguments == "number") {
			argString = JSON.stringify({ numberValue : arguments });
		}
		if (argString) {
			argString = "JSON.parse(hexDecode('" + hexEncode(argString) + "'))";
		}

		var callLine = BTSample.name + "('" + methodName + "'" + ((argString ? ", " + argString : "")) + ");";

		var scriptString = hexDecode + "; eval(decodeURI(hexDecode('" + hexEncode(
			encodeURI(
				BTSample.toString() + "\n" +
				callLine
			)
		) + "')));";
		var bt = new BridgeTalk();
		bt.target = appName;
		bt.onError = function (error) {
			alert(getTrimmedError(error.body));
		}
		bt.onResult = onResult || function (result) {
			alert(result.body);
		}

		bt.body = scriptString;
		bt.send();
	}

	function start () {
		var w = new Window("palette", BTSample.name);	
		var g1 = w.add("group");
		var btn_1 = g1.add("button", undefined, "Action 1");
		var btn_2 = g1.add("button", undefined, "Action 2");
	
		function callMakeACircle (xyArray) {
			makeBTCall(BridgeTalk.appName, makeACircle.name, xyArray, function (res) {
				var parsedBody = JSON.parse(res.body);
				e_res.text = parsedBody.result.circleResult || parsedBody.result;
			});
		};

		function callMakeASquare (xyObj) {
			makeBTCall(BridgeTalk.appName, makeASquare.name, xyObj, function (res) {
				var parsedBody = JSON.parse(res.body);
				e_res.text = parsedBody.result.squareResult || parsedBody.result;
			});
		};

		btn_1.onClick = function () { callMakeACircle([0, 50]); }
		btn_2.onClick = function () { callMakeASquare({ x : 50, y : 0 }); }

		var g2 = w.add("panel", undefined, "Result:");
		var e_res = g2.add("edittext", undefined, "");
		e_res.characters = 20;

		// * Amazingly, adding this to the window allows the methods to be accessed directly, from a separate JSX file.
		// * This is not necessary when calling from CEP where the window-creating code is stored.
		// * However, it is necessary to create this object and not assign a function in a loop of `METHODS` keys - then it acts weird and only does `makeACircle`.
		w.addedCustomMethods = {
			callMakeASquare : callMakeASquare,
			callMakeACircle : callMakeACircle,
		};

		w.show();
	}

	// * When this script is called for any reason, this entry point decides on how it will be executed.
	if (arguments.length == 1) {
		if (arguments[0] == start.name) {
			start();
		}
		// * Add any other methods that have no arguments to run them.
	} else if (arguments.length == 2) {
		var inputMethodString = arguments[0];
		checkMethod(inputMethodString);
		var inputArgObj = arguments[1];

		var result;
		try {
			result = METHODS[inputMethodString](inputArgObj);			
		} catch (error) {
			result = "ERR_:" + getTrimmedError(error.message);
		}
		return JSON.stringify({ result : result });
	}

}
BTSample("start"); /* // * Cut this part out when using from CEP and just use the "start" as the evalScript method name (Ex: `evalScript("start")`). */