//@target illustrator
//@script "ScriptPanel_2"
//@targetengine "main"
function ScriptPanel_2 (title) {
/***
	{
		"scriptPanel_ignore" : false,
		"name" : "ScriptPanel_2",
		"note" : "'ScriptPanel_2', the Relative-script panel."
	}
***/
//==================================== NOTES =======================================//
/*
<NOTES>
	<item title="About">
	<![CDATA[
------------------------------------------- ABOUT -------------------------------------------
Date: 4/26/2022
Author: Vasily Hall
Email: vasily.hall@gmail.com
LinkedIn: https://www.linkedin.com/in/vasily-hall-91216618
	]]>
	</item>
	<item title="Overview">
	<![CDATA[
--------------------------------- SCRIPT PANEL OVERVIEW -------------------------------------
The ScriptPanel_2 script panel is a floating palette for Adobe Illustrator which provides an interface to execute other .jsx scripts.
It works by showing .jsx scripts in the same folder as this script panel .jsx file, and also scripts inside level-1 nested folders.
The scripts relative to the script panel .jsx and level-1 nested folder scripts are grouped in the panel inside individual groups, or panels, or treeview nodes, depending on the view options.
The method by which other .jsx scripts are recognized is the directory of the actual script panel .jsx file.
This directory is obtained in one of 3 ways:
1) $.fileName, which is used when the script panel .jsx file is executed from the ESTK, or File > Scripts, and File > Scripts > Other Scripts
2) variable "startupLocation", which is meant to be set as a global variable from a startup script, which is a script that must be located in the application folder in a special "Startup Scripts" folder, which must be custom-added.
("/Applications/Adobe Illustrator CC 2015/Startup Scripts" on Mac)
The variable "startupLocation" should have the file path to the script panel .jsx file, and after execution should be set to null or all the script panels will default to this location.
3) variable "btScript_MyLocation", which is sent with every script that is executed from this script panel. This meant to provide a directory to the executing script to take place of $.fileName, because $.fileName is not available when a script is executed via BridgeTalk object, which is how a floating panel can execute anything in a target application.
With variable "btScript_MyLocation", it is possible to have a whole toolset of nested script panels, each for a separate set of .jsx scripts and level-1 folders of .jsx scripts.
Note: Due to the nature of $.fileName's quirks, the script panel script cannot be executed from double-click on its icon in the file system. :(
	]]>
	</item>
	<item title="Mini-Tab Icon">
	<![CDATA[
--------------------------------- SCRIPT PANEL TAB ICON -------------------------------------
The script panel has a minimized state as a "floating tab". This will either show a default icon which says "Script Panel 2", or a custom image.
The custom image will override the default icon.
Sometimes script files used by the script panel are added or deleted or modified for properties while the panel is active.
To refresh, make the panel into the mini-tab and hold Ctrl key while clicking the mini-tab's button. The script panel will update with latest file listing.
The maximized script panel has no close button to save space. Closing is accomplished from within the min-tab's close button which does exist.
However, holding down Alt key while clicking the minimize button will close the large panel, saving the extra step of minimizing it first.
A custom image must be a .png 24 file in the same folder as the script panel .jsx file, and it has to have the same name as the script panel .jsx file, except have .png as the file extension instead of .jsx.
The default dimensions for the image are 100 x 45 pixels.
	]]>
	</item>
	<item title="Script Embedded Descriptive Properties">
	<![CDATA[
---------------------------------- SCRIPT PROPERTIES ----------------------------------------
Embedded meta-information can be stored inside .jsx scripts as a JSON string, and is obtained by the script panel parsing the .jsx scripts as text to search for this data.
This is not required for the panel to work, though.
The syntax for embedded info is JSON-valid syntax like this:
/THREE_STARS_HERE
	{
		"name" : "SP2-Functions",
		"note" : "This is the 'functions' portion of ScriptPanel 2."
	}
THREE_STARS_HERE/
multi-line javascript comment with 3 beginning and 3 ending stars.
Each script can have these properties written into it:
name : will show the value here as the text of the script button
note : will show this value as a help tip when button is hovered over
image : if present, will be used as image in a script button. Must be a .png 24 file.
	Can be name of file inside same folder as this script, or be an absolute file path. The default dimensions for the image are 100 x 45 pixels.
	The following keywords can be used other than 'image': small, large, listItem, treeviewItem. By default, their values will reference a file path.
	When '_embedded' is used in the property name (ex: "image_embedded"), the value is read as image-text data.
	When '_drawn' is used in the property name (ex: "image_drawn"), the value is read as canvas instructions for the ScriptUI drawing functions.
	The drawing instructions must get URL-Encoded to be properly stored within the script metadata string.
scriptPanel_ignore : when set to true, will not show this script in a script panel.
sectionColor : an array of 3 numbers with range 0-1 which stand for RGB values. ([1,0,0] for red).
	The color specified here will color the folder group in which the script is located, so only really	one script needs to have this defined in order to colorize an entire section.
showSectionLabel : default panel behavior is to show the name of the parent folder of script buttons in a folder section.
	If this property is present and set to false, it will not show that name. Only one script needs to have this property set to false for this to happen.
	]]>
	</item>
	<item title="Saved Settings">
	<![CDATA[
----------------------------------- STORING SETTINGS ----------------------------------------
The ScriptPanel_2 script panel is versatile and highly-customizable with editable settings which can be saved and are read-in every time the panel is initialized.
The settings dialog is accessed by the button at the bottom which has the 3 lines on it, "hamburger" style.
The "Save Settings" button in this dialog will save the settings as a JSON file in a user's My Documents directory.
The file will be called "SCRIPTPANEL_SETTINGS.json".
To have multiple users have the same view, this file can be shared and pasted into everyone's My Documents folder.
Nested script panels can also have settings particular to them saved in this same file, so as to allow different settings for each individual script panel, root and nested.
Important: These settings are stored using the specified panel's .jsx file's names, excluding the .jsx extension.
Therefore it's important to name the panel .jsx files using unique names, so unique settings can be retrieved.
	]]>
	</item>
	<item title="Startup Script">
	<![CDATA[
------------------------------------ STARTUP SCRIPT -----------------------------------------
One of the most useful helpful things to do with the Script Panel .jsx file is to have it open up automatically when Illustrator is started.
To do so, use a "startup script" to launch it. A startup script is a .jsx file which lives in a specially-added folder called "Startup Scripts" in the Illustrator application folder.
An example of this folder is "/Applications/Adobe Illustrator CC 2015/Startup Scripts" on Mac.
Any .jsx file in this folder will play every time Illustrator is started up. However, it will also play every time any script is ran by Illustrator, which isn't good.
To make it ONLY play when Illustrator is *actually* started up, you've got to check if the $.engineName is "transient" or not.
Apparently, when Illustrator is running a .jsx script during regular operation, the engine name is "transient", but not when started up the first time.
Also, the variable "startupLocation" must be present in order to declare the file path to the script panel this first time.
It is global and is fetched by the script panel script outside its scope. Therefore it's important to reset it to null inside the startup script.
Additionally, on Windows, the panel was performing quirky: the Welcome screen would make it instantly disappear, and even if the Welcome screeen was set to "Never show again",
the panel would be hidden behind the application frame when Illustrator's UI was clicked on.
While simply minimizing Illustrator, and using the minimize/maximize buttons on the panel would fix the hiding behavior, it wasn't ideal.
To solve this, the startup script had to be modified to send the panel through bridgetalk, which fixed both the Welcome Screen and the app frame intrusion behavior.
Here is an example of a basic startup script which uses a file path typically seen on Macinthosh:
if($.engineName != 'transient' && $.engineName != ''){
	var startupLocation = "/Users/YourUserName/FolderWhereItIs/ScriptPanel.jsx";
	var scriptPanelFile = File(startupLocation);
	if(scriptPanelFile.exists){
		scriptPanelFile.open('r');
		var fileStr = scriptPanelFile.read();
		scriptPanelFile.close();
		eval(fileStr);
	} else {
		alert("Sorry, the ScriptPanel script file wasn't found at '" + startupLocation + "'");
	}
	startupLocation = null;
}
And here is the edited startup script which uses BridgeTalk:
*Note: it doesn't need the "startupLocation" variable necessarily named this name anymore, because it will turn into "btScript_MyLocation" during BridgeTalk send.
if($.engineName != 'transient' && $.engineName != ''){
	function runScriptFromFile(file){
		function bridgeTalkEncode( txt ) { 
			txt = encodeURIComponent( txt ); 
			txt = txt.replace( /\r/, "%0d" ); 
			txt = txt.replace( /\n/, "%0a" ); 
			txt = txt.replace( /\\/, "%5c" ); 
			txt = txt.replace(/'/g, "%27"); 
			return txt.replace(/"/g, "%22"); 
		};
		var sf = file;
		if(!(file instanceof File)){
			sf = File(file);
		}
		if(!sf.exists){
			alert("Sorry, it appears that this script file cannot be located at '"+decodeURI(sf.toString())+"'");
			return;
		}
		sf.open('r');
		var scriptString = sf.read();
		sf.close();
		// Thanks to: https://forums.adobe.com/thread/287506?tstart=0
		var pathToScript = "var btScript_MyLocation = \"" + (sf) + "\";";
		var script = "var scp ='" + bridgeTalkEncode("LOCATION\r"+scriptString) + "'";
		script += ";\nvar scpDecoded = \rdecodeURI( scp ).replace('LOCATION', '" + pathToScript + "');\n"; 
		script += "eval(scpDecoded);"; 
		var bt = new BridgeTalk();
		bt.target = 'illustrator-' + app.version.substr(0, 2);
		bt.body = script;
		bt.onError = function(errObj){
			alert(errObj.body);
		}
		bt.send();
	};
	var myMacPath = "/Users/You/FolderWhereItIs/ScriptPanel.jsx";
	var myPCPath = "C:\\\\Users\\You\\FolderWhereItIs\\ScriptPanel.jsx";
	var startupLocation = (Folder.fs == "Windows") ? myPCPath : myMacPath ;
	var scriptPanelFile = File(startupLocation);
	if(scriptPanelFile.exists){
		runScriptFromFile(scriptPanelFile);
	} else {
		alert("Sorry, the ScriptPanel script file wasn't found at '" + startupLocation + "'");
	}
	startupLocation = null;
}
	]]>
	</item>
</NOTES>
*/
	
"use strict";
var LOCALTEST = ($.getenv("USER") == "VasilyHall" || $.getenv("USERNAME") == "vasil");
var USERNAME = ($.getenv("USER") == null) ? $.getenv("USERNAME") : $.getenv("USER");
function getDataFileMask(fileExtArray, includeFolders, getFunction) {
    var macStr = "\\" + fileExtArray.join("|\\");
    var macRx = new RegExp("(" + macStr + ")$", "i");
    var useCustomFunction = false;
    if (typeof getFunction == "function") {
        useCustomFunction = true;
    }
    if ($.os.indexOf("Windows") > -1 && !useCustomFunction) {
        var winStr = "*" + fileExtArray.join(";*") + ";";
        if (fileExtArray.length == 1) {
            winStr = winStr.replace(/;$/, "");
        }
        return winStr;
    }
    return function (f) {
        if (includeFolders !== false) {
            return (f instanceof Folder || ((useCustomFunction) ? getFunction(f) : false) ||
                (f instanceof File &&
                    (useCustomFunction) ?
                    getFunction(f) :
                    decodeURI(f.name).match(macRx) != null));
        }
        else {
            return f instanceof File && ((useCustomFunction) ? getFunction(f) : decodeURI(f.name).match(macRx) != null);
        }
    };
}
function createDirectoryPath(folderObj, trimMacPaths) {
    if (trimMacPaths == undefined) {
        trimMacPaths = true;
    }
    if ((folderObj instanceof Folder) && folderObj.exists) {
        return true;
    }
    folderObj = decodeURI(folderObj.toString());
    var tildeFlag = false;
    if (folderObj.charAt(0) == "~") {
        folderObj = Folder(folderObj).fsName;
        tildeFlag = true;
    }
    var isWin = $.os.match("Windows");
    folderObj = folderObj.replace(/\\/g, '/');
    var windowsNetworkDriveFlag = false;
    if (isWin && !tildeFlag) {
        if (folderObj.charAt(0) == "/" && folderObj.charAt(1) == "/") {
            windowsNetworkDriveFlag = true;
        }
    }
    var isWindowsRootPathStart = folderObj.match(/^[a-z]\:(\\|\/)/i) != null;
    if (folderObj.charAt(0) != "/") {
        folderObj = "/" + folderObj;
    }
    var folderLevelArr = folderObj.split("/");
    folderLevelArr.shift();
    if (windowsNetworkDriveFlag) {
        folderLevelArr.shift();
    }
    var buildPath = "";
    var thisFolderName, thisFolder, nextSeparator = "";
    for (var i = 0; i < folderLevelArr.length; i++) {
        thisFolderName = folderLevelArr[i];
        if (i > 0) {
            nextSeparator = "/";
        }
        if (isWin && i == 0) {
            if (!tildeFlag && !windowsNetworkDriveFlag && !isWindowsRootPathStart) {
                thisFolderName = "/" + thisFolderName;
            }
            else if (windowsNetworkDriveFlag) {
                thisFolderName = "//" + thisFolderName;
            }
        }
        buildPath += (nextSeparator + thisFolderName);
        if (windowsNetworkDriveFlag && i == 0) {
            continue;
        }
        thisFolder = Folder(buildPath);
        if (trimMacPaths === true) {
            thisFolder = Folder(thisFolder.fsName.replace(/^\/Volumes/, ""));
        }
        if (!thisFolder.exists) {
            thisFolder.create();
            if (!thisFolder.exists) {
                var errMsg = "createDirectoryPath() Error:\nFolder '" + decodeURI(thisFolder.toString()) + "' could not be created.";
                if (typeof (scriptAlert) == "function" && SETTINGS && SETTINGS.scriptName && SETTINGS.scriptVersion) {
                    scriptAlert(errMsg);
                }
                else {
                    alert(errMsg);
                }
                return false;
            }
        }
    }
    return true;
}
function getSeparatorFromPath(inFilePath) {
    var sep = "/";
    if (inFilePath.indexOf("\\") > -1) {
        sep = "\\";
    }
    return sep;
}
function getFileNameFromPath(inFilePath, includeExtension) {
    inFilePath = inFilePath.replace(/\\/g, "/");
    if (inFilePath.charAt(0) == "/") {
        inFilePath = inFilePath.substr(1, inFilePath.length);
    }
    var completeFileName = inFilePath.split("/")[inFilePath.split("/").length - 1];
    if (includeExtension) {
        return completeFileName;
    }
    else {
        return completeFileName.replace(/\..+$/, "");
    }
}
function getExtensionFromPath(inFilePath) {
    return inFilePath.substr(inFilePath.lastIndexOf("."));
}
function getFSTree(rootFolder, folderMethod, fileMethod) {
    var nodeTree = { name: decodeURI(rootFolder.name), isFile: false, children: [] };
    var lastFolderNode = nodeTree;
    if (!(typeof (fileMethod) == "function")) {
        fileMethod = function (file) { return true; };
    }
    if (!(typeof (folderMethod) == "function")) {
        folderMethod = function (folder) { return true; };
    }
    function nodeFunc(node, lastFolderNode) {
        if (node instanceof File && fileMethod(node) != false) {
            lastFolderNode.children.push({
                name: decodeURI(node.name),
                isFile: true
            });
        }
        else if (node instanceof Folder) {
            if (folderMethod(node) != false) {
                var allFiles = Array.from(node.getFiles());
                var newLastFolderNode = {
                    name: decodeURI(node.name),
                    isFile: false,
                    children: []
                };
                if (decodeURI(node.fsName) != decodeURI(rootFolder.fsName)) {
                    lastFolderNode.children.push(newLastFolderNode);
                    lastFolderNode = newLastFolderNode;
                }
                allFiles.forEach(function (n) { return nodeFunc(n, lastFolderNode); });
            }
        }
    }
    nodeFunc(rootFolder, lastFolderNode);
    return nodeTree;
}
function removeDirectoryWithFiles(rootFolder, keepRootFolder) {
    var folder = Folder(rootFolder);
    var rootName = folder.fsName;
    if (!folder.exists) {
        return;
    }
    function removeFiles(folder) {
        var allItems = Array.from(folder.getFiles());
        var allFiles = allItems.filter(function (m) { return m instanceof File; });
        var allFolders = allItems.filter(function (m) { return m instanceof Folder; });
        allFiles.forEach(function (m) { return m.remove(); });
        allFolders.forEach(function (m) { return removeFiles(m); });
        if (folder.getFiles().length == 0) {
            if (folder.fsName == rootName && keepRootFolder === true) {
                return;
            }
            folder.remove();
        }
    }
    removeFiles(folder);
    if (!keepRootFolder) {
        folder.remove();
    }
}
function sanitizeFileName(inStr) {
    var newName = inStr.trim();
    var rx1 = /[\\\/:*?"<>|]+/g;
    var rx2 = /^\./;
    var rx3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;
    newName = newName.replace(rx1, "_");
    if (rx2.test(newName)) {
        newName = newName.substr(1);
    }
    if ($.os.includes("Windows")) {
        if (rx3.test(newName)) {
            newName = "";
            scriptAlert("The name '" + newName + "' contains prohibited characters.");
        }
    }
    return newName;
}
var grid = {
    parse: function (csv, reviver, delimiter) {
        delimiter = delimiter || ',';
        reviver = reviver || function (r, c, v) { return v; };
        var chars = csv.split(''), c = 0, cc = chars.length, start, end, table = [], row;
        while (c < cc) {
            table.push(row = []);
            while (c < cc && '\r' !== chars[c] && '\n' !== chars[c]) {
                start = end = c;
                if ('"' === chars[c]) {
                    start = end = ++c;
                    while (c < cc) {
                        if ('"' === chars[c]) {
                            if ('"' !== chars[c + 1]) {
                                break;
                            }
                            else {
                                chars[++c] = '';
                            }
                        }
                        end = ++c;
                    }
                    if ('"' === chars[c]) {
                        ++c;
                    }
                    while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && delimiter !== chars[c]) {
                        ++c;
                    }
                }
                else {
                    while (c < cc && '\r' !== chars[c] && '\n' !== chars[c] && delimiter !== chars[c]) {
                        end = ++c;
                    }
                }
                row.push(reviver(table.length - 1, row.length, chars.slice(start, end).join('')));
                if (delimiter === chars[c]) {
                    ++c;
                }
            }
            if ('\r' === chars[c]) {
                ++c;
            }
            if ('\n' === chars[c]) {
                ++c;
            }
        }
        return table;
    },
    stringify: function (table, replacer, delimiter) {
        delimiter = delimiter || ',';
        replacer = replacer || function (r, c, v) { return v; };
        var csv = '', c, cc, r, rr = table.length, cell;
        for (r = 0; r < rr; ++r) {
            if (r) {
                csv += '\r\n';
            }
            for (c = 0, cc = table[r].length; c < cc; ++c) {
                if (c) {
                    csv += delimiter;
                }
                cell = replacer(r, c, table[r][c]);
                var rx = new RegExp("[" + delimiter + "\\r" + "\\n\"]");
                if (rx.test(cell)) {
                    cell = '"' + cell.replace(/"/g, '""') + '"';
                }
                csv += (cell || 0 === cell) ? cell : '';
            }
        }
        return csv;
    }
};
function getColumnByHeader(grid, headerName) {
    var thisHeaderCell, thisColumnCell;
    var arr = [];
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
}
function getHeaderIndexByName(grid, headerName) {
    var thisCell;
    for (var i = 0; i < grid[0].length; i++) {
        thisCell = grid[0][i];
        if (thisCell.trim() == headerName) {
            return i;
        }
    }
    return null;
}
function getCellByHeaderNameInRow(grid, row, headerName) {
    var index = getHeaderIndexByName(grid, headerName);
    if (index == null) {
        return null;
    }
    if (typeof (row) == "number") {
        return grid[row][index];
    }
    else {
        return row[index];
    }
}
function getRowBy_1Cell(grid, headerName1, value1) {
    var thisRow, thisHeaderCell, header1Index;
    for (var i = 0; i < grid[0].length; i++) {
        thisHeaderCell = grid[0][i];
        if ((typeof (header1Index) == "undefined") && (thisHeaderCell == headerName1)) {
            header1Index = i;
            break;
        }
        return null;
    }
    for (var i = 1; i < grid.length; i++) {
        thisRow = grid[i];
        for (var j = 0; j < thisRow.length; j++) {
            if (thisRow[j] == value1) {
                return thisRow;
            }
        }
    }
    return null;
}
function getColumnAtIndex(grid, index) {
    var arr = [];
    for (var i = 0; i < grid.length; i++) {
        arr.push(grid[i][index]);
    }
    return arr;
}
function getCellBy_Header_RowAtValueInColumn(grid, headerName, colIndex1, value1) {
    var mainColIndex = null, cell;
    for (var i = 0; i < grid[0].length; i++) {
        cell = grid[0][i];
        if (cell == headerName) {
            mainColIndex = i;
            break;
        }
    }
    if (mainColIndex == null) {
        return null;
    }
    for (var i = 0; i < grid.length; i++) {
        cell = grid[i][colIndex1];
        if (cell == value1) {
            return grid[i][mainColIndex];
        }
    }
    return null;
}
function getCellBy_2Headers_1Cell(grid, headerName1, headerName2, value1) {
    var thisRow, thisHeaderCell, header1Index, header2Index;
    for (var i = 0; i < grid[0].length; i++) {
        thisHeaderCell = grid[0][i];
        if ((typeof (header1Index) == "undefined") && (thisHeaderCell == headerName1)) {
            header1Index = i;
        }
        else if ((typeof (header2Index) == "undefined") && (thisHeaderCell == headerName2)) {
            header2Index = i;
        }
    }
    if (typeof (header1Index) == "undefined" && typeof (header2Index) == "undefined") {
        return null;
    }
    for (var i = 1; i < grid.length; i++) {
        thisRow = grid[i];
        if (thisRow[header1Index] == value1) {
            return thisRow[header2Index];
        }
    }
    return null;
}
function checkRowForNotAllBlanks(row) {
    for (var i = 0; i < row.length; i++) {
        if (row[i] != '') {
            return true;
        }
    }
    return false;
}
function checkRowForAllBlanks(row) {
    var testStr = "";
    for (var i = 0; i < row.length; i++) {
        testStr += row[i].trim();
    }
    return (testStr.length == 0) ? true : false;
}
function removeAllBlankCells(inArr) {
    var newArr = [];
    var thisRow, newRowArr, thisCell;
    for (var i = 0; i < inArr.length; i++) {
        thisRow = inArr[i];
        newRowArr = [];
        for (var j = 0; j < thisRow.length; j++) {
            thisCell = thisRow[j];
            if (thisCell != "") {
                newRowArr.push(thisCell);
            }
        }
        newArr.push(newRowArr);
    }
    return newArr;
}
function transposeGrid(data) {
    var newArr = [];
    var columns = data[0].length, rows = data.length;
    var newRow = [];
    for (var i = 0; i < columns; i++) {
        newRow = [];
        for (var j = 0; j < rows; j++) {
            newRow.push(data[j][i]);
        }
        ;
        newArr.push(newRow);
    }
    ;
    return newArr;
}
function getTextData(txtFile, encoding) {
    if (!(txtFile instanceof File)) {
        txtFile = File(txtFile);
    }
    txtFile = File(txtFile.fsName.toString().replace("file://", ''));
    var type = txtFile.name.match(/(\.txt$|\.csv$)/i)[0];
    var splitter = (type == '.txt') ? '\t' : ',';
    var arr = [];
    try {
        if (typeof (encoding) != "undefined") {
            txtFile.encoding = encoding;
        }
        txtFile.open('r');
        txtFile.seek(0, 0);
        arr = grid.parse(txtFile.read(), undefined, splitter);
        txtFile.close();
        return arr;
    }
    catch (e) {
        return new Error("Problem reading the text file. Make sure it's not locked down &/or open in Excel.\n" + e);
    }
}
function getData(filePath, encoding) {
    try {
        var dataFile = File(filePath);
        if (!dataFile.exists) {
            throw new Error("File at '" + decodeURI(filePath) + "' was not found.");
        }
        if (typeof (encoding) != "undefined") {
            dataFile.encoding = encoding;
        }
        var testArr = getTextData(dataFile, encoding);
        if (testArr instanceof Error) {
            return testArr;
        }
        var header = testArr[0];
        var goodArr = [];
        var thisRow = void 0;
        for (var i = 0; i < testArr.length; i++) {
            thisRow = testArr[i];
            if (checkRowForAllBlanks(thisRow)) {
                continue;
            }
            if (thisRow.length < header.length) {
                var ln = thisRow.length;
                for (var j = ln; j < header.length; j++) {
                    thisRow.push("");
                }
            }
            goodArr.push(thisRow);
        }
        ;
        return goodArr;
    }
    catch (e) {
        return e;
    }
}
function getJsonData(filePath, encoding) {
    try {
        var contents = readFile(filePath, encoding);
        if (contents === false) {
            return false;
        }
        return JSON.parse(contents);
    }
    catch (e) {
        return false;
    }
}
function readFile(path, encoding) {
    var f = path;
    var contents;
    if (!(path instanceof File)) {
        f = File(f);
    }
    var subjectFile = f;
    if (typeof (encoding) != "undefined") {
        subjectFile.encoding = encoding;
    }
    if (!subjectFile.exists) {
        alert("File was not found at '" + decodeURI(f.toString()) + "'");
        return false;
    }
    else {
        subjectFile.open('r');
        contents = subjectFile.read();
        subjectFile.close();
        return contents;
    }
}
function writeFile(dest, contents, encoding) {
    var f = File(dest);
    if (typeof (encoding) != "undefined") {
        f.encoding = encoding;
    }
    f.open('w');
    f.write(contents);
    f.close();
    return f.exists;
}
String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};
String.prototype.hexDecode = function () {
    var r = '';
    for (var i = 0; i < this.length; i += 2) {
        r += unescape('%' + this.substr(i, 2));
    }
    return r;
};
String.prototype.hexEncode = function () {
    var r = '';
    var i = 0;
    var h;
    while (i < this.length) {
        h = this.charCodeAt(i++).toString(16);
        while (h.length < 2) {
            h = h;
        }
        r += h;
    }
    return r;
};
String.prototype.zeroPad = function (num) {
    var str = this;
    for (var i = 0; i < num; i++) {
        if (i > str.length) {
            str = "0" + str;
        }
    }
    return str;
};
String.prototype.toNumbers = function () {
    var number = "0x";
    var length = this.length;
    for (var i = 0; i < length; i++)
        number += this.charCodeAt(i).toString(16);
    return number;
};
String.prototype.fromNumbers = function () {
    var number = this;
    var string = "";
    number = number.slice(2);
    var length = number.length;
    for (var i = 0; i < length;) {
        var code = number.slice(i, i += 2);
        string += String.fromCharCode(parseInt(code, 16));
    }
    return string;
};
String.prototype.escapeForRegexp = function () {
    return this.replace(/([\/.*+?|()[\]{}\\^$])/g, "\\$1");
};
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
    };
}
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';
        if (search instanceof RegExp) {
            throw Error('first argument must not be a RegExp');
        }
        if (start === undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (search, this_len) {
        if (this_len === undefined || this_len > this.length) {
            this_len = this.length;
        }
        return this.substring(this_len - search.length, this_len) === search;
    };
}
function unCamelCaseSplit(str) {
    if (!str.match(/([a-z][A-Z])/)) {
        return str;
    }
    var newStr = str[0].toUpperCase() + (str.split(/([A-Z][a-z]+)/g).join(" ").replace(/\s{2}/g, " ")).substr(1).replace(/\s+$/, "");
    return newStr;
}
;
function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1);
}
;
function replacePercentMessage(str) {
    var filledMessage = str;
    for (var i = 1; i < arguments.length; i++) {
        filledMessage = filledMessage.replace(new RegExp("(%" + i.toString() + ")", "g"), arguments[i].toString());
    }
    return filledMessage;
}
;
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
}
if (!Array.prototype.every) {
    Array.prototype.every = function (callbackfn, thisArg) {
        'use strict';
        var T, k;
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callbackfn !== 'function' && Object.prototype.toString.call(callbackfn) !== '[object Function]') {
            throw new TypeError();
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue = void 0;
            if (k in O) {
                var testResult = void 0;
                kValue = O[k];
                if (T)
                    testResult = callbackfn.call(T, kValue, k, O);
                else
                    testResult = callbackfn(kValue, k, O);
                if (!testResult) {
                    return false;
                }
            }
            k++;
        }
        return true;
    };
}
if (!Array.prototype.map) {
    Array.prototype.map = function (callback) {
        var T, A, k;
        if (this == null) {
            throw new TypeError('this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = arguments[1];
        }
        A = new Array(len);
        k = 0;
        while (k < len) {
            var kValue, mappedValue;
            if (k in O) {
                kValue = O[k];
                mappedValue = callback.call(T, kValue, k, O);
                A[k] = mappedValue;
            }
            k++;
        }
        return A;
    };
}
if (!Array.prototype.filter) {
    Array.prototype.filter = function (func, thisArg) {
        'use strict';
        if (!((typeof func === 'Function' || typeof func === 'function') && this))
            throw new TypeError();
        var len = this.length >>> 0;
        var res = new Array(len), t = this, c = 0, i = -1;
        var kValue;
        if (thisArg === undefined) {
            while (++i !== len) {
                if (i in this) {
                    kValue = t[i];
                    if (func(t[i], i, t)) {
                        res[c++] = kValue;
                    }
                }
            }
        }
        else {
            while (++i !== len) {
                if (i in this) {
                    kValue = t[i];
                    if (func.call(thisArg, t[i], i, t)) {
                        res[c++] = kValue;
                    }
                }
            }
        }
        res.length = c;
        return res;
    };
}
if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = Array.prototype.findIndex || function (callback) {
        if (this === null) {
            throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        else if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        for (var i = 0; i < length; i++) {
            if (callback.call(thisArg, list[i], i, list)) {
                return i;
            }
        }
        return -1;
    };
}
if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (typeof predicate !== 'function') {
            throw TypeError('predicate must be a function');
        }
        var thisArg = arguments[1];
        var k = 0;
        while (k < len) {
            var kValue = o[k];
            if (predicate.call(thisArg, kValue, k, o)) {
                return kValue;
            }
            k++;
        }
        return undefined;
    };
}
if (!Array.prototype.includes) {
    Array.prototype.includes = function (search) {
        return !!~this.indexOf(search);
    };
}
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        if (this.length < 1) {
            return null;
        }
        return this[this.length - 1];
    };
}
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
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
            var kValue = void 0;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}
;
if (!Array.from) {
    Array.from = function (arrayLikeObject) {
        var arr = [];
        var thisItem;
        for (var i = 0; i < arrayLikeObject.length; i++) {
            thisItem = arrayLikeObject[i];
            arr.push(thisItem);
        }
        return arr;
    };
}
;
if (!Array.prototype.some) {
    Array.prototype.some = function (fun, thisArg) {
        'use strict';
        if (this == null) {
            throw new TypeError('Array.prototype.some called on null or undefined');
        }
        if (typeof fun !== 'function') {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(thisArg, t[i], i, t)) {
                return true;
            }
        }
        return false;
    };
}
if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        if (this === null) {
            throw new TypeError('Array.prototype.reduce ' +
                'called on null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback +
                ' is not a function');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        var k = 0;
        var value;
        if (arguments.length >= 2) {
            value = arguments[1];
        }
        else {
            while (k < len && !(k in o)) {
                k++;
            }
            if (k >= len) {
                throw new TypeError('Reduce of empty array ' +
                    'with no initial value');
            }
            value = o[k++];
        }
        while (k < len) {
            if (k in o) {
                value = callback(value, o[k], k, o);
            }
            k++;
        }
        return value;
    };
}
if (!Array.prototype.addUnique) {
    Array.prototype.addUnique = function (searchElement) {
        if (this.indexOf(searchElement) < 0) {
            this.push(searchElement);
            return true;
        }
        return false;
    };
}
if (!Array.prototype.removeUnique) {
    Array.prototype.removeUnique = function (searchElement) {
        var idx = this.indexOf(searchElement);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
}
if (!Array.prototype.removeAtIndex) {
    Array.prototype.removeAtIndex = function (idx) {
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
}
Array.prototype.makeUnique = function () {
    return this.sort().filter(function (current, index, array) {
        return index === 0 || current !== array[index - 1];
    });
};
Function.prototype.getArguments = function () {
    return (this + '')
        .replace(/[\/][\/].*$/mg, '')
        .replace(/\s+/g, '')
        .replace(/[\/][*][^\/*]*[*][\/]/g, '')
        .split('){', 1)[0].replace(/^[^(]*[(]/, '')
        .replace(/\=[^\,]+/g, '')
        .split(',').filter(Boolean);
};
"object" != typeof JSON && (JSON = {}), function () {
    "use strict";
    function f(t) { return 10 > t ? "0" + t : t; }
    function quote(t) {
        return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + t + '"';
    }
    function str(t, e) {
        var n, r, o, f, u, i = gap, p = e[t];
        switch ((p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)),
            "function" == typeof rep && (p = rep.call(e, t, p)), typeof p)) {
            case "string": return quote(p);
            case "number": return isFinite(p) ? String(p) : "null";
            case "boolean":
            case "null": return String(p);
            case "object":
                if (!p)
                    return "null";
                if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(p)) {
                    for (f = p.length, n = 0; f > n; n += 1)
                        u[n] = str(n, p) || "null";
                    return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]", gap = i, o;
                }
                if (rep && "object" == typeof rep)
                    for (f = rep.length, n = 0; f > n; n += 1)
                        "string" == typeof rep[n] && (r = rep[n], o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o));
                else
                    for (r in p)
                        Object.prototype.hasOwnProperty.call(p, r) && (o = str(r, p), o && u.push(quote(r) + (gap ? ": " : ":") + o));
                return o = 0 === u.length ? "{}" : gap ? "{\n" + gap +
                    u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}", gap = i, o;
        }
    }
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" +
            f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf();
    });
    var cx, escapable, gap, indent, meta, rep;
    "function" != typeof JSON.stringify &&
        (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            meta = { "\b": "\\b", "  ": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, n) {
            var r;
            if (gap = "", indent = "", "number" == typeof n)
                for (r = 0; n > r; r += 1)
                    indent += " ";
            else
                "string" == typeof n && (indent = n);
            if (rep = e,
                e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
                throw new Error("JSON.stringify");
            return str("", { "": t });
        }),
        "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            JSON.parse = function (text, reviver) {
                function walk(t, e) {
                    var n, r, o = t[e];
                    if (o && "object" == typeof o)
                        for (n in o)
                            Object.prototype.hasOwnProperty.call(o, n) &&
                                (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                    return reviver.call(t, e, o);
                }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) &&
                    (text = text.replace(cx, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4); })),
                    /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
                        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]")
                        .replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                    return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
                throw new SyntaxError("JSON.parse");
            });
}();
Number.prototype.toRadians = function () {
    return Number(this) * (Math.PI / 180);
};
Number.prototype.toDegrees = function () {
    return Number(this) * (180 / Math.PI);
};
Number.prototype.padZero = function (decimals) {
    if (typeof decimals == "undefined") {
        decimals = 2;
    }
    var numStr = this.toString();
    var decimalsFound = numStr.length;
    if (decimalsFound >= decimals) {
        return this;
    }
    while (decimalsFound < decimals) {
        numStr = '0' + numStr;
        decimalsFound += 1;
    }
    return numStr;
};
function round2(num) {
    return Math.round(num * 100) / 100;
}
if (!Object.keys) {
    Object.keys = (function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'), dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ], dontEnumsLength = dontEnums.length;
        return function (obj) {
            var wasNull = obj === null;
            var errorMessageTypeReadout = (wasNull) ? "input was null" : "input was " + typeof obj;
            if (typeof obj !== 'object' && typeof obj !== 'function' || wasNull)
                throw new TypeError("Object.keys called on non-object (" + errorMessageTypeReadout + ").");
            var result = [];
            for (var prop in obj) {
                if (hasOwnProperty.call(obj, prop))
                    result.push(prop);
            }
            if (hasDontEnumBug) {
                for (var i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i]))
                        result.push(dontEnums[i]);
                }
            }
            return result;
        };
    })();
}
if (typeof Object.create != 'function') {
    Object.create = (function () {
        var Temp = function () { };
        return function (prototype) {
            if (arguments.length > 1) {
                throw Error('Second argument not supported');
            }
            if (prototype !== Object(prototype) && prototype !== null) {
                throw TypeError('Argument must be an object or null');
            }
            if (prototype === null) {
                throw Error('null [[Prototype]] not supported');
            }
            Temp.prototype = prototype;
            var result = new Temp();
            Temp.prototype = null;
            return result;
        };
    })();
}
if (!Object.entries)
    Object.entries = function (obj) {
        var ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
        while (i--)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        return resArray;
    };
if (typeof Object.toArray != 'function') {
    Object.toArray = (function () {
        return function (obj) {
            return Object.keys(obj).map(function (m) {
                return obj[m];
            });
        };
    })();
}
if (typeof Object.hasKeys != 'function') {
    Object.hasKeys = (function () {
        return function (obj) {
            if (obj == null) {
                return false;
            }
            return Object.keys(obj).length > 0;
        };
    })();
}
if (!('assign' in Object)) {
    Object.assign = function (has) {
        'use strict';
        return assign;
        function assign(target, source) {
            for (var i = 1; i < arguments.length; i++) {
                copy(target, arguments[i]);
            }
            return target;
        }
        function copy(target, source) {
            for (var key in source) {
                if (has.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }({}.hasOwnProperty);
}
function clone(obj) {
    var copy;
    if (null == obj || "object" != typeof obj)
        return obj;
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr))
                copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
    throw new Error("Unable to copy obj! Its type isn't supported.");
}
function copyObjectPropertyValues(srcObj, destObj) {
    var primitivesAndEqual = true;
    var srcProp, destProp;
    for (var all in srcObj) {
        if (all in destObj) {
            srcProp = srcObj[all];
            destProp = destObj[all];
            if (srcProp !== destProp) {
                primitivesAndEqual = false;
            }
            destObj[all] = srcObj[all];
        }
    }
    return !primitivesAndEqual;
}
function checkAllPropertyInclusion(srcObj, destObj) {
    if (typeof (srcObj) != "object" || typeof (destObj) != "object") {
        return false;
    }
    for (var all in srcObj) {
        if (!(all in destObj)) {
            return false;
        }
    }
    return true;
}
DropDownList.prototype.selectWell = function () {
    this.addEventListener('change', function () {
        if (this.selection == null && !this.forceEmpty) {
            this.selection = this.items[0];
        }
    });
};
DropDownList.prototype.emptySelection = function () {
    this.forceEmpty = true;
    this.selection = null;
    this.forceEmpty = false;
};
DropDownList.prototype.populate = function (newItemsArray, defaultItem) {
    if (newItemsArray.length == 0) {
        if (this.items.length == 1) {
            if (typeof defaultItem == "undefined") {
                this.items[0].text = "";
            }
            else {
                this.items[0].text = defaultItem;
            }
        }
    }
    else {
        if (this.items.length == 0) {
            this.add("item");
        }
    }
    for (var i = this.items.length - 1; i > -1; i--) {
        if (i > 0) {
            this.remove(i);
        }
        else {
            if (typeof defaultItem == "undefined") {
                this.items[i].text = "";
            }
            else {
                this.items[i].text = defaultItem;
            }
        }
    }
    for (var i = 0; i < newItemsArray.length; i++) {
        if (typeof defaultItem == "undefined") {
            if (i == 0) {
                this.items[i].text = newItemsArray[i];
            }
            else {
                this.add("item", newItemsArray[i]);
            }
        }
        else {
            this.add("item", newItemsArray[i]);
        }
    }
};
DropDownList.prototype.getValue = function () {
    if (this.selection != null) {
        if (this.hasOwnProperty("data") && typeof this.data == "object") {
            return this.data[this.selection.text];
        }
        return this.selection.text;
    }
    else {
        alert("NULL DROPDOWN");
        return null;
    }
};
DropDownList.prototype.setValue = ListBox.prototype.setValue = function (value) {
    for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].text == value) {
            this.selection = this.items[i];
            return;
        }
        else if (this.hasOwnProperty("data") && typeof this.data == "object") {
            if (value == this.data[this.items[i].text]) {
                this.selection = this.items[i];
                return;
            }
        }
    }
    ;
    alert("The value '" + value + "' is not present in this " + this.type + ". Present values:\n" + Array.from(this.items).map(function (m) { return m.text; }));
};
ListBox.prototype.getValue = function () {
    if (this.selection != null) {
        if (this.hasOwnProperty("data") && typeof this.data == "object") {
            return this.data[this.selection.text];
        }
        return this.selection.text;
    }
    else {
        return null;
    }
};
ListBox.prototype.reset = function () {
    this.populate(this.originalData);
};
ListBox.prototype.populate = function (newItemsArray, store, multiColumnFunc) {
    if (typeof (store) != "undefined" && store == true) {
        this.originalData = newItemsArray;
    }
    for (var i = this.items.length - 1; i > -1; i--) {
        this.remove(i);
    }
    var newItem;
    for (var i = 0; i < newItemsArray.length; i++) {
        if (typeof (multiColumnFunc) == "function") {
            newItem = this.add("item");
            multiColumnFunc(newItem, newItemsArray[i]);
        }
        else {
            newItem = this.add("item", newItemsArray[i]);
        }
    }
};
ListBox.prototype.addItem = function (newItem, multiColumnFunc) {
    var newListItem;
    newListItem = this.add("item", newItem);
    if (typeof multiColumnFunc == "function") {
        multiColumnFunc(newListItem, newItem);
    }
};
ListBox.prototype.up = function () {
    if (this.selection == null) {
        return;
    }
    var n = this.selection.index;
    if (n > 0) {
        this.swap(this.items[n - 1], this.items[n]);
        this.selection = n - 1;
    }
};
ListBox.prototype.down = function () {
    if (this.selection == null) {
        return;
    }
    var n = this.selection.index;
    if (n < this.items.length - 1) {
        this.swap(this.items[n], this.items[n + 1]);
        this.selection = n + 1;
    }
};
ListBox.prototype.swap = function (x, y) {
    var temp = x.text;
    x.text = y.text;
    y.text = temp;
};
ListBox.prototype.removeSelectedItem = function () {
    if (this.selection == null) {
        return;
    }
    this.removeItem(this.selection.index);
};
ListBox.prototype.removeItem = function (indexOrText) {
    if (typeof (indexOrText) == "number") {
        this.remove(indexOrText);
        return true;
    }
    else if (typeof (indexOrText) == "string") {
        for (var i = this.items.length - 1; i > -1; i--) {
            if (this.items[i].text == indexOrText) {
                this.remove(i);
                return true;
            }
        }
    }
    return false;
};
ListBox.prototype.getAllCurrentTextValues = function () {
    var arr = [];
    for (var i = 0; i < this.items.length; i++) {
        arr.push(this.items[i].text);
    }
    return arr;
};
ListBox.prototype.getListItemValues = function (getSelected) {
    var arr = [];
    var thisListItem;
    for (var i = 0; i < this.items.length; i++) {
        thisListItem = this.items[i];
        if (!getSelected || (getSelected && thisListItem.selected)) {
            arr.push(thisListItem.getValue());
        }
    }
    return arr;
};
ListItem.prototype.remove = function () {
    this.parent.remove(this);
};
ListItem.prototype.getValue = function () {
    if (this.subItems.length == 0) {
        return this.text;
    }
    else {
        var arr = [this.text];
        var thisSubItem = void 0;
        for (var i = 0; i < this.subItems.length; i++) {
            thisSubItem = this.subItems[i];
            arr.push(thisSubItem.text);
        }
        return arr;
    }
};
ListItem.prototype.setValue = function (valueStr, multiColumnFunc) {
    this.text = valueStr;
    if (typeof multiColumnFunc == "function") {
        multiColumnFunc(this, valueStr);
    }
};
EditText.prototype.numbersOnly = function () {
    this.addEventListener('changing', function () {
        var rx = /^-?\d*\.*\d*$/;
        if (!rx.test(this.text)) {
            this.text = 0;
            this.setBg([1, 0.8, 0.8]);
        }
        else {
            this.setBg([1, 1, 1]);
        }
    });
};
EditText.prototype.getValue = function () {
    return this.text;
};
EditText.prototype.setValue = function (value) {
    this.text = value;
};
StaticText.prototype.getValue = function () {
    return this.text;
};
StaticText.prototype.setValue = function (value) {
    this.text = value;
};
Checkbox.prototype.getValue = function () {
    return this.value;
};
Checkbox.prototype.setValue = function (value) {
    value = value == true ? true : false;
    this.value = value;
};
RadioButton.prototype.getValue = function () {
    return this.value;
};
RadioButton.prototype.setValue = function (value) {
    this.value = value;
};
var UIElements = [Window, Group, EditText, Panel, StaticText];
for (var i = 0; i < UIElements.length; i++) {
    UIElements[i].prototype.setBg = function (rgb) {
        this.graphics.backgroundColor = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, [rgb[0], rgb[1], rgb[2]]);
    };
}
;
function makeDynamicScript(scriptFunction, scriptFunctionName, useGivenMethod, methodName, argumentsObj) {
    function hexDecode(str) { var j; var hexes = str.match(/.{1,4}/g) || []; var back = ""; for (j = 0; j < hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    } return back; }
    function hexEncode(str) {
        var hex, i;
        var result = "";
        for (i = 0; i < str.length; i++) {
            hex = str.charCodeAt(i).toString(16);
            result += ("000" + hex).slice(-4);
        }
        return result;
    }
    function encodeBT(str) {
        return (encodeURI(str)).replace(/"/g, "|||&ldq" + "uo;|||").replace(/'/g, "|||&ap" + "os;|||");
    }
    function decodeBT(str) {
        var undisguisedString = str.replace(/\|\|\|&ldquo;\|\|\|/g, '\u0022').replace(/\|\|\|&apos;\|\|\|/g, '\u0027');
        var strURIDecoded = decodeURI(undisguisedString);
        return strURIDecoded;
    }
    var getEncodedHelperMethod = function (method) {
        return "eval(decodeURI('''" + encodeURI(method.toString()) + "'''));";
    };
    var argString = "";
    if (argumentsObj) {
        if (typeof argumentsObj == "object" && argumentsObj !== null) {
            argString = JSON.stringify(argumentsObj);
        }
        else if (true == (argumentsObj instanceof Array)) {
            argString = JSON.stringify(argumentsObj);
        }
        else if (typeof argumentsObj == "boolean") {
            argString = JSON.stringify({ booleanValue: argumentsObj });
        }
        else if (typeof argumentsObj == "string") {
            argString = JSON.stringify({ stringValue: argumentsObj });
        }
        else if (typeof argumentsObj == "number") {
            argString = JSON.stringify({ numberValue: argumentsObj });
        }
    }
    if (argString) {
        argString = "(function () { var x = hexDecode(\"\"\"" + hexEncode(argString) + "\"\"\"); return JSON.parse(x); })()";
    }
    var callLine = scriptFunctionName + "(" + (methodName ? "'" + methodName + "'" : "") + (argString ? ", " + argString : "") + ");";
    var JSONString = "\"object\"!=typeof JSON&&(JSON={}),function(){\"use strict\";function f(t){return 10>t?\"0\"+t:t}function quote(t){\n\t\treturn escapable.lastIndex=0,escapable.test(t)?'\"'+t.replace(escapable,function(t){var e=meta[t];\n\t\t\treturn\"string\"==typeof e?e:\"\\\\u\"+(\"0000\"+t.charCodeAt(0).toString(16)).slice(-4)})+'\"':'\"'+t+'\"'}\n\t\tfunction str(t,e){var n,r,o,f,u,i=gap,p=e[t];switch(p&&\"object\"==typeof p&&\"function\"==typeof p.toJSON&&(p=p.toJSON(t)),\n\t\t\t\"function\"==typeof rep&&(p=rep.call(e,t,p)),typeof p){case\"string\":return quote(p);case\"number\":return isFinite(p)?String(p):\"null\";\n\t\tcase\"boolean\":case\"null\":return String(p);case\"object\":if(!p)return\"null\";if(gap+=indent,u=[],\"[object Array]\"===Object.prototype.toString.apply(p)){\n\t\t\tfor(f=p.length,n=0;f>n;n+=1)u[n]=str(n,p)||\"null\";return o=0===u.length?\"[]\":gap?\"[\\n\"+gap+u.join(\",\\n\"+gap)+\"\\n\"+i+\"]\":\"[\"+u.join(\",\")+\"]\",gap=i,o}\n\t\t\t\tif(rep&&\"object\"==typeof rep)for(f=rep.length,n=0;f>n;n+=1)\"string\"==typeof rep[n]&&(r=rep[n],o=str(r,p),o&&u.push(quote(r)+(gap?\": \":\":\")+o));\n\t\t\telse for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(o=str(r,p),o&&u.push(quote(r)+(gap?\": \":\":\")+o));return o=0===u.length?\"{}\":gap?\"{\\n\"+gap+\n\t\t\tu.join(\",\\n\"+gap)+\"\\n\"+i+\"}\":\"{\"+u.join(\",\")+\"}\",gap=i,o}}\"function\"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){\n\t\t\t\treturn isFinite(this.valueOf())?this.getUTCFullYear()+\"-\"+f(this.getUTCMonth()+1)+\"-\"+f(this.getUTCDate())+\"T\"+f(this.getUTCHours())+\":\"+\n\t\t\t\tf(this.getUTCMinutes())+\":\"+f(this.getUTCSeconds())+\"Z\":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){\n\t\t\t\t\treturn this.valueOf()});var cx,escapable,gap,indent,meta,rep;\"function\"!=typeof JSON.stringify&&\n\t\t\t(escapable=/[\\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,\n\t\t\t\tmeta={\"\\b\":\"\\\\b\",\"  \":\"\\\\t\",\"\\n\":\"\\\\n\",\"\\f\":\"\\\\f\",\"\\r\":\"\\\\r\",'\"':'\\\\\"',\"\\\\\":\"\\\\\\\\\"},JSON.stringify=function(t,e,n){var r;\n\t\t\t\t\tif(gap=\"\",indent=\"\",\"number\"==typeof n)for(r=0;n>r;r+=1)indent+=\" \";else\"string\"==typeof n&&(indent=n);if(rep=e,\n\t\t\t\t\t\te&&\"function\"!=typeof e&&(\"object\"!=typeof e||\"number\"!=typeof e.length))throw new Error(\"JSON.stringify\");return str(\"\",{\"\":t})}),\n\t\t\t\"function\"!=typeof JSON.parse&&(cx=/[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]/g,\n\t\t\t\tJSON.parse=function(text,reviver){function walk(t,e){var n,r,o=t[e];if(o&&\"object\"==typeof o)for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&\n\t\t\t\t(r=walk(o,n),void 0!==r?o[n]=r:delete o[n]);return reviver.call(t,e,o)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&\n\t\t\t\t\t(text=text.replace(cx,function(t){return\"\\\\u\"+(\"0000\"+t.charCodeAt(0).toString(16)).slice(-4)})),\n\t\t\t\t\t/^[\\],:{}\\s]*$/.test(text.replace(/\\\\(?:[\"\\\\\\/bfnrt]|u[0-9a-fA-F]{4})/g,\"@\")\n\t\t\t\t\t\t.replace(/\"[^\"\\\\\\n\\r]*\"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?/g,\"]\")\n\t\t\t\t\t\t.replace(/(?:^|:|,)(?:\\s*\\[)+/g,\"\")))return j=eval(\"(\"+text+\")\"),\"function\"==typeof reviver?walk({\"\":j},\"\"):j;\n\t\t\t\tthrow new SyntaxError(\"JSON.parse\")})}();";
    var scriptString = "eval(decodeURI(\"\"\"" + encodeURI(JSONString) + "\"\"\"))\n" +
        (argString ? getEncodedHelperMethod(hexDecode) + "\n" : "") +
        getEncodedHelperMethod(decodeBT) +
        "\neval(decodeBT('''" +
        encodeBT(scriptFunction)
        + "'''));\n" +
        ((useGivenMethod !== true) ? ("\n" + callLine) : "");
    return scriptString;
}
function makeBTCall2022(appName, scriptFunction, scriptFunctionName, useGivenMethod, methodName, argumentsObj, onResult) {
    var scriptString = makeDynamicScript(scriptFunction, scriptFunctionName, useGivenMethod, methodName, argumentsObj);
    var bt = new BridgeTalk();
    bt.target = appName;
    bt.onError = function (error) {
        var errorMessage = (error.body.toString().substr(0, 10000));
        var messageProps = {
            appName: appName,
            scriptFunction: scriptFunction,
            scriptFunctionName: scriptFunctionName,
            useGivenMethod: useGivenMethod,
            methodName: methodName
        };
        var message = Object.keys(messageProps).reduce(function (a, b) { return a + "\n" + (b + ": " + messageProps[b]); });
        var combinedErrorMessage = "BT Error Info:\n" + message + "\n" + errorMessage;
        alert(combinedErrorMessage);
        throw new Error(combinedErrorMessage);
    };
    bt.onResult = onResult || function (result) {
    };
    bt.body = scriptString;
    bt.send();
}
function debugWriteBTMessage(str) {
    var filePath = "~/Desktop/BT-debug.jsx";
    var fileObj = File(filePath);
    fileObj.open("w");
    fileObj.write(str);
    fileObj.close();
    fileObj.execute();
}
function evalScriptFile(file, scriptFunction, scriptFunctionName, useGivenMethod, methodName, argumentsObj) {
    var scriptString = makeDynamicScript(scriptFunction, scriptFunctionName, useGivenMethod, methodName, argumentsObj);
    if (BridgeTalk.appName == "illustrator") {
        scriptString = "#target illustrator\n#targetengine 'main'" + scriptString;
    }
    writeFile(file.toString(), scriptString);
    $.evalFile(file);
}
function folderPathInput(parent, title, dialogTitle, buttonTitle) {
    var p = parent.add("panel", undefined, title);
    p.margins = [5, 6, 5, 4];
    p.spacing = 4;
    p.orientation = "row";
    if (typeof (buttonTitle) == "undefined") {
        buttonTitle = "Choose Folder";
    }
    var b = p.add("button", undefined, buttonTitle);
    b.size = [100, 24];
    var disp = p.add("edittext", undefined, "", { readonly: true });
    disp.characters = 50;
    disp.setValue = function (value) {
        this.text = value;
        this.helpTip = value;
    };
    b.onClick = function () {
        var isFolderFound = false;
        var existingText = disp.getValue();
        if (existingText != "") {
            var existingFolder = Folder(existingText);
            if (existingFolder.exists) {
                isFolderFound = true;
            }
        }
        var f = (isFolderFound) ? existingFolder.selectDlg(dialogTitle) : Folder.selectDialog(dialogTitle);
        if (f != null) {
            disp.setValue(decodeURI(f.fsName));
            disp.notify("onChange");
        }
    };
    disp.button = b;
    return disp;
}
;
function folderPathDefaultInput(parent, folderLoc, title, dialogTitle) {
    var p = parent.add("panel", undefined, title);
    p.margins = [5, 6, 5, 4];
    p.spacing = 4;
    p.orientation = "row";
    var b = p.add("button", undefined, "Choose Folder");
    b.size = [100, 24];
    var disp = p.add("edittext", undefined, "", { readonly: true });
    disp.folderLoc = folderLoc;
    disp.characters = 50;
    disp.setValue = function (value) {
        this.text = value;
        this.helpTip = value;
    };
    b.onClick = function () {
        var f = Folder(disp.folderLoc).selectDlg(dialogTitle);
        if (f != null) {
            disp.setValue(decodeURI(f.fsName));
            disp.notify("onChange");
        }
    };
    disp.button = b;
    return disp;
}
;
function filePathInput(parent, title, dialogTitle, fileSpec, multiSelect, defaultValue) {
    var isChangedOnce = false;
    var p = parent.add("panel", undefined, title);
    p.margins = [5, 6, 5, 4];
    p.spacing = 4;
    p.orientation = "row";
    var buttonTitleSuffix = "";
    if (typeof (multiSelect) != 'boolean') {
        multiSelect = false;
    }
    else if (multiSelect) {
        buttonTitleSuffix = "(s)";
    }
    var b = p.add("button", undefined, "Choose File" + buttonTitleSuffix);
    var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
    disp.characters = 50;
    disp.button = b;
    b.isMultiSelect = disp.isMultiSelect = multiSelect;
    disp.setValue = function (value) {
        if (this.isMultiSelect) {
            this.fileCollection = value;
            this.text = value[0];
            this.helpTip = value[0];
        }
        else {
            this.fileCollection = null;
            this.text = value;
            this.helpTip = value;
        }
    };
    disp.getValue = function () {
        if (this.isMultiSelect) {
            return this.fileCollection;
        }
        else {
            return this.text;
        }
    };
    b.onClick = function () {
        var isFileFound = false;
        var isFileParentFound = false;
        var existingText = disp.getValue();
        var defaultFileArgFound = false;
        if (typeof (defaultValue) != "undefined" && defaultValue != null) {
            existingText = defaultValue;
        }
        else {
            defaultFileArgFound = true;
        }
        var existingFile;
        if (existingText != "") {
            existingFile = File(existingText);
            var existingFileParent = existingFile.parent;
            if (existingFile.exists) {
                isFileFound = true;
            }
            isFileParentFound = existingFileParent.exists;
        }
        var f = (isFileFound || isFileParentFound) ? existingFile.openDlg(dialogTitle, fileSpec, this.isMultiSelect) : File.openDialog(dialogTitle, fileSpec, this.isMultiSelect);
        if (f != null) {
            if (this.isMultiSelect) {
                disp.setValue(f.fsName);
            }
            else {
                disp.setValue(decodeURI(f.fsName));
            }
            disp.notify("onChange");
            isChangedOnce = true;
        }
    };
    return disp;
}
;
function filePathDefaultInput(parent, fileLoc, title, dialogTitle, fileSpec, multiSelect) {
    var buttonTitleSuffix = "";
    if (typeof (multiSelect) != 'boolean') {
        multiSelect = false;
    }
    else if (multiSelect) {
        buttonTitleSuffix = "(s)";
    }
    var p = parent.add("panel", undefined, title);
    p.margins = [5, 6, 5, 4];
    p.spacing = 4;
    p.orientation = "row";
    var b = p.add("button", undefined, "Choose File" + buttonTitleSuffix);
    var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
    disp.fileLoc = fileLoc;
    disp.button = b;
    disp.characters = 50;
    b.isMultiSelect = disp.isMultiSelect = multiSelect;
    disp.getValue = function () {
        if (this.isMultiSelect) {
            return this.fileCollection;
        }
        else {
            return this.text;
        }
    };
    disp.setValue = function (value) {
        if (this.isMultiSelect) {
            this.fileCollection = value;
            this.text = value[0];
            this.helpTip = value[0];
        }
        else {
            this.fileCollection = null;
            this.text = value;
            this.helpTip = value;
        }
    };
    b.onClick = function () {
        var f = File(disp.fileLoc).openDlg(dialogTitle, fileSpec, this.isMultiSelect);
        if (f != null) {
            if (this.isMultiSelect) {
                disp.setValue(f.toString());
            }
            else {
                disp.setValue(decodeURI(f.toString()));
            }
            disp.notify("onChange");
        }
    };
    return disp;
}
;
function fileSaveInput(parent, title, dialogTitle, fileSpec, defaultFilePath) {
    var p = parent.add("panel", undefined, title);
    p.margins = [5, 6, 5, 4];
    p.spacing = 4;
    p.orientation = "row";
    var b = p.add("button", undefined, "Save File");
    var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
    disp.characters = 50;
    disp.setValue = function (value) {
        this.text = value;
        this.helpTip = value;
    };
    b.onClick = function () {
        var f;
        if (typeof defaultFilePath != 'undefined' && disp.getValue() == "") {
            f = File(defaultFilePath);
        }
        else if (disp.getValue() == "") {
            if (typeof defaultFilePath != 'undefined') {
                f = File(defaultFilePath).saveDlg(dialogTitle, fileSpec);
            }
            else {
                f = File.saveDialog(dialogTitle, fileSpec);
            }
        }
        else {
            f = File(disp.getValue()).saveDlg(dialogTitle, fileSpec);
        }
        if (f != null) {
            disp.setValue(decodeURI(f));
            disp.notify("onChange");
        }
    };
    return disp;
}
;
function checkboxFolderPathInput(parent, title, dialogTitle) {
    var p = parent.add("panel", undefined, title);
    p.margins = [5, 6, 5, 4];
    p.spacing = 4;
    p.orientation = "row";
    var b = p.add("checkbox", undefined, "Choose Folder");
    var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
    disp.characters = 50;
    disp.setValue = function (value) {
        this.text = value;
        this.helpTip = value;
    };
    b.onClick = function () {
        if (!this.value) {
            disp.setValue("");
            disp.notify("onChange");
            return;
        }
        var f = Folder.selectDialog(dialogTitle);
        if (f != null) {
            disp.setValue(decodeURI(f.toString()));
            disp.notify("onChange");
        }
        else {
            this.value = false;
            disp.setValue("");
            disp.notify("onChange");
        }
    };
    disp.checkbox = b;
    return disp;
}
;
function checkboxFilePathInput(parent, title, dialogTitle, fileMask, defaultValue) {
    var isChangedOnce = false;
    var p = parent.add("panel", undefined, title);
    p.margins = [5, 6, 5, 4];
    p.spacing = 4;
    p.orientation = "row";
    var b = p.add("checkbox", undefined, "Choose File");
    var disp = p.add('edittext { properties : {readonly : true}, justify : "right" }');
    disp.characters = 50;
    disp.setValue = function (value) {
        this.text = value;
        this.helpTip = value;
    };
    b.onClick = function () {
        if (!this.value) {
            disp.setValue("");
            disp.notify("onChange");
            return;
        }
        var f;
        if (!isChangedOnce && typeof (defaultValue) != "undefined" && defaultValue != null) {
            var defaultValueObj = File(defaultValue);
            f = defaultValueObj.openDlg(dialogTitle, fileMask);
        }
        else {
            f = File.openDialog(dialogTitle, fileMask);
        }
        if (f != null) {
            disp.setValue(decodeURI(f));
            disp.notify("onChange");
        }
        else {
            this.value = false;
            disp.setValue("");
            disp.notify("onChange");
        }
        isChangedOnce = true;
    };
    disp.checkbox = b;
    return disp;
}
;
function constrainedSlider(parent, min, max, init) {
    var g_slider = parent.add("group");
    var slider = g_slider.add("slider");
    slider.minvalue = min;
    slider.maxvalue = max;
    var disp_slider = g_slider.add("edittext", undefined, "0");
    disp_slider.characters = 5;
    if (init != undefined) {
        slider.value = init;
        disp_slider.text = slider.value.toString();
    }
    else {
        slider.value = min;
        disp_slider.text = slider.value.toString();
    }
    disp_slider.onChange = function () {
        if (isNaN(this.text)) {
            this.text = min;
        }
        this.text = Math.round(this.text);
        if ((this.text * 1) > max) {
            this.text = max;
            alert("Maximum value for this slider is: " + max);
        }
        else if ((this.text * 1) < min) {
            this.text = min;
            alert("Minimum value for this slider is: " + min);
        }
        slider.value = this.text;
    };
    disp_slider.onChanging = function () {
        if (isNaN(this.text)) {
            this.text = min;
        }
        slider.value = this.text;
    };
    slider.onChange = slider.onChanging = function () {
        this.value = Math.round(this.value);
        disp_slider.text = this.value;
    };
    slider.textElem = disp_slider;
    return slider;
}
;
function makeDropdownlist(parent, items, dataObj) {
    var textItems;
    var isListItemArray = false;
    if (items.length > 0 && typeof (items[0]) == "string") {
        textItems = items;
    }
    else {
        isListItemArray = true;
        textItems = items.map(function (m) {
            return m.text;
        });
    }
    var dd = parent.add("dropdownlist", undefined, textItems);
    if (typeof dataObj != "undefined") {
        dd.data = dataObj;
    }
    if (isListItemArray) {
        [].forEach.call(dd.items, function (m, i) {
            for (var all in items[i]) {
                m[all] = items[i][all];
            }
        });
    }
    dd.selectWell();
    dd.selection = dd.items[0];
    return dd;
}
;
function makeListboxSelector(parent, items, labelProps, listProps, buttonPropsList, buttonColumns, buttonGroupProps) {
    var wrapGroup = parent.add("group");
    var label = null;
    wrapGroup.orientation = "column";
    var defaultProps = { text: "Sample Text", characters: 20, justify: "left", multiline: false, readonly: false };
    if (typeof (labelProps) == "object" && !(labelProps instanceof Array)) {
        for (var all in defaultProps) {
            if (!(all in labelProps)) {
                labelProps[all] = defaultProps[all];
            }
        }
        label = wrapGroup.add('statictext {text: "' + labelProps.text + '", characters: ' +
            labelProps.characters + ', justify: "' + labelProps.justify + '", multiline: ' +
            labelProps.multiline + ', readonly: ' + labelProps.readonly + '}');
    }
    var list = wrapGroup.add("listbox", undefined, items);
    if (typeof (listProps) != "undefined") {
        for (var all in listProps) {
            if (list.hasOwnProperty(all)) {
                list[all] = listProps[all];
            }
        }
    }
    if (typeof buttonColumns != "number") {
        buttonColumns = 2;
    }
    if (typeof buttonPropsList != "undefined" && buttonPropsList.length > 0) {
        list.controlButtons = [];
        var thisButton = void 0, newButtonElem = void 0;
        var buttonGroupMain = wrapGroup.add("group");
        buttonGroupMain.orientation = "column";
        if (typeof buttonGroupProps == "object") {
            for (var all in buttonGroupProps) {
                buttonGroupMain[all] = buttonGroupProps[all];
            }
        }
        var buttonGroup = void 0;
        for (var i = 0; i < buttonPropsList.length; i++) {
            if (i % buttonColumns == 0) {
                buttonGroup = buttonGroupMain.add("group");
            }
            thisButton = buttonPropsList[i];
            newButtonElem = buttonGroup.add("button", undefined, thisButton.text);
            if (thisButton.hasOwnProperty("size")) {
                newButtonElem.size = thisButton.size;
            }
            if (thisButton.hasOwnProperty("onClick")) {
                newButtonElem.onClick = thisButton.onClick;
            }
            newButtonElem.list = list;
            list.controlButtons.push(newButtonElem);
        }
    }
    list.errorCondition = function (value) {
        if (!value || value == "") {
            return new Error("A selection must be chosen.");
        }
        return true;
    };
    list.originalData = items;
    if (typeof (labelProps) == "object" && !(labelProps instanceof Array)) {
        list.label = label;
    }
    return list;
}
;
function makeEditableReadonlyEdittext(parent, chars, defaultText) {
    defaultText = defaultText || "";
    chars = chars || 20;
    var stackGroup = parent.add("group");
    stackGroup.orientation = "stack";
    var readonlyEdittext = stackGroup.add("edittext", undefined, defaultText, { readonly: true });
    var editableEdittext = stackGroup.add("edittext", undefined, defaultText);
    readonlyEdittext.characters = editableEdittext.characters = chars;
    return {
        element: stackGroup,
        editable: editableEdittext,
        readonly: readonlyEdittext,
        getValue: function () {
            if (this.editable.visible) {
                return this.editable.text;
            }
            else {
                return this.readonly.text;
            }
        },
        setValue: function (value) {
            this.editable.text = this.readonly.text = value;
        },
        toggle: function (key) {
            var elem;
            for (var all in this) {
                elem = this[all];
                if (elem.hasOwnProperty("type") && elem.type == "edittext") {
                    if (all == key) {
                        elem.visible = true;
                    }
                    else {
                        elem.visible = false;
                    }
                }
            }
        }
    };
}
;
function makeColorDropdownlist(parent, items) {
    if (app.name != "Adobe Illustrator") {
        throw new Error("This currently works in Adobe Illustrator");
    }
    function getColorByName(items, name) {
        for (var i = 0; i < items.length; i++) {
            if (items[i].name == name) {
                return items[i];
            }
        }
    }
    ;
    var defaultOption = "Pick Color";
    var justNames = [defaultOption];
    for (var i = 0; i < items.length; i++) {
        justNames.push(items[i].name);
    }
    var g = parent.add("group");
    var dd = g.add("dropdownlist", undefined, justNames);
    dd.selectWell();
    dd.selection = dd.items[0];
    var disp_color = g.add("panel");
    disp_color.size = [45, 24];
    dd.onChange = function () {
        if (this.selection.text == defaultOption) {
            disp_color.setBg([0, 0, 0]);
            return;
        }
        var clr = getColorByName(items, this.selection.text);
        disp_color.setBg(getUIRGB(clr.colorModel, clr.colorArray));
    };
    dd.getValue = function () {
        if (this.selection.text == defaultOption) {
            return null;
        }
        return getColorByName(items, this.selection.text);
    };
    return dd;
}
;
function makeCenteredNonEdittext(parent, characters, content) {
    var e = parent.add('edittext {text: "' + content + '", characters: ' + characters + ', justify: "center"}');
    e.storedText = content;
    e.getValue = function () {
        return this.storedText;
    };
    e.setValue = function (value) {
        this.storedText = value;
        this.text = value;
    };
    e.addEventListener('changing', function () {
        this.enabled = false;
        this.text = this.storedText;
        this.enabled = true;
    });
    return e;
}
;
function makeLabelInput(parent, isHorizontal, labelProps, inputProps) {
    var g = parent.add("group");
    g.orientation = (isHorizontal) ? "row" : "column";
    var defaultProps = { text: "Sample Text", characters: 20, justify: "left", multiline: false, readonly: false };
    if (typeof labelProps != "object" && !(labelProps instanceof Array)) {
        labelProps = defaultProps;
    }
    if (typeof inputProps != "object" && !(inputProps instanceof Array)) {
        inputProps = defaultProps;
    }
    for (var all in defaultProps) {
        if (!(all in labelProps)) {
            labelProps[all] = defaultProps[all];
        }
        if (!(all in inputProps)) {
            inputProps[all] = defaultProps[all];
        }
    }
    var input;
    var label = g.add('statictext {text: "' + labelProps.text + '", characters: ' +
        labelProps.characters + ', justify: "' + labelProps.justify + '", multiline: ' +
        labelProps.multiline + ', readonly: ' + labelProps.readonly + '}');
    if (!("items" in inputProps)) {
        input = g.add('edittext {text: "' + inputProps.text + '", characters: ' +
            inputProps.characters + ', justify: "' + inputProps.justify + '", multiline: ' +
            inputProps.multiline + ', readonly: ' + inputProps.readonly + '}');
    }
    else {
        input = makeDropdownlist(g, inputProps.items);
    }
    if (inputProps.hasOwnProperty("size")) {
        input.size = inputProps.size;
    }
    input.label = label;
    label.addEventListener("mousedown", function () {
        input.active = false;
        input.active = true;
    });
    return input;
}
;
function makeLabelDropdownlist(parent, isHorizontal, labelProps, items, dataItems) {
    var g = parent.add("group");
    g.orientation = (isHorizontal) ? "row" : "column";
    var defaultProps = { text: "Sample Text", characters: 20, justify: "left", multiline: false, readonly: false };
    if (typeof labelProps != "object" && !(labelProps instanceof Array)) {
        labelProps = defaultProps;
    }
    for (var all in defaultProps) {
        if (!(all in labelProps)) {
            labelProps[all] = defaultProps[all];
        }
    }
    var label = g.add('statictext {text: "' + labelProps.text + '", characters: ' +
        labelProps.characters + ', justify: "' + labelProps.justify + '", multiline: ' +
        labelProps.multiline + ', readonly: ' + labelProps.readonly + '}');
    var dd = makeDropdownlist(g, items, dataItems);
    label.addEventListener("mousedown", function () {
        dd.active = true;
    });
    dd.label = label;
    return dd;
}
;
function switchStackView(parent, viewKey) {
    var stackChild;
    for (var i = 0; i < parent.children.length; i++) {
        stackChild = parent.children[i];
        if (stackChild.key == viewKey) {
            stackChild.visible = true;
        }
        else {
            stackChild.visible = false;
        }
    }
    ;
}
;
function makeValidationTextInput(parent, validationFunc) {
    var wrapGroup = parent.add("group");
    wrapGroup.margins = [4, 4, 4, 4];
    var e = wrapGroup.add("edittext", undefined, "");
    e.onChanging = function () {
        var val = this.getValue().toString();
        if (validationFunc(val)) {
            this.parent.setBg([0.25, 0.65, 0.1]);
        }
        else {
            this.parent.setBg([0.75, 0, 0]);
        }
    };
    return e;
}
;
function getScriptLabelText(forceShowConfiguration) {
    var deploymentPrefix = "";
    if (SETTINGS.deployment) {
        if (SETTINGS.deployment == "DEV") {
            deploymentPrefix = "* ";
        }
        else if (SETTINGS.deployment == "STAGE") {
            deploymentPrefix = "** ";
        }
        else if (SETTINGS.deployment == "PROD") {
            deploymentPrefix = "";
        }
    }
    else {
        deploymentPrefix = "\uE116 ";
    }
    var scriptNameFirstPart = deploymentPrefix + SETTINGS.scriptName;
    if (forceShowConfiguration || (SETTINGS.showConfigurationInLabels && SETTINGS.configuration)) {
        if (SETTINGS.configuration != null) {
            scriptNameFirstPart += " " + SETTINGS.configuration;
        }
    }
    return scriptNameFirstPart + " " + SETTINGS.scriptVersion;
}
function scriptAlert(msg) {
    if (typeof (SETTINGS) == "undefined") {
        alert(msg);
        return;
    }
    var labelText = getScriptLabelText();
    if ($.os.match('Windows')) {
        alert(msg, labelText);
    }
    else {
        alert(labelText + ":\n" + msg);
    }
}
function scriptConfirm(msg) {
    if (typeof (SETTINGS) == "undefined") {
        return confirm(msg);
    }
    var labelText = getScriptLabelText();
    if ($.os.match('Windows')) {
        return confirm(msg, false, labelText);
    }
    else {
        return confirm(labelText + ":\n" + msg);
    }
}
function quickView(msg, title) {
    if (title == undefined) {
        title = '';
    }
    if (typeof SETTINGS != "undefined" && SETTINGS.hasOwnProperty("scriptName") && SETTINGS.hasOwnProperty("scriptVersion")) {
        var labelText = getScriptLabelText();
        title = labelText + " " + title;
        title = title.replace(/\s$/, "");
    }
    var w = new Window('dialog', title);
    var e = w.add('edittext', undefined, msg, { multiline: true });
    e.size = [700, 500];
    var okbtn = w.add('button', undefined, 'Ok');
    okbtn.onClick = function () {
        w.close();
    };
    w.show();
}
function quickViewExtended(msg, title) {
    if (title == undefined) {
        title = '';
    }
    if (typeof SETTINGS != "undefined" && SETTINGS.hasOwnProperty("scriptName") && SETTINGS.hasOwnProperty("scriptVersion")) {
        var labelText = getScriptLabelText();
        title = labelText + " " + title;
        title = title.replace(/\s$/, "");
    }
    var w = new Window('dialog', title);
    var g_btn = w.add("group");
    var okbtn = g_btn.add('button', undefined, 'Ok');
    var savebtn = g_btn.add("button", undefined, "Save Text");
    savebtn.onClick = function () {
        var saveInput;
        if (typeof SETTINGS != "undefined" && SETTINGS.hasOwnProperty("scriptName")) {
            saveInput = File("~/Desktop/" + SETTINGS.scriptName + "_Script-Log.txt").saveDlg("Save the data");
        }
        else {
            saveInput = File("~/Desktop/Script-Log.txt").saveDlg("Save the data");
        }
        if (saveInput != null) {
            saveInput.open('w');
            saveInput.write(e.text);
            saveInput.close();
            saveInput.execute();
        }
    };
    okbtn.onClick = function () {
        w.close();
    };
    var e = w.add('edittext', undefined, msg, { multiline: true });
    e.size = [700, 500];
    w.show();
}
function quickViewWithSelect(msg, title) {
    if (title == undefined) {
        title = '';
    }
    if (typeof SETTINGS != "undefined" && SETTINGS.hasOwnProperty("scriptName") && SETTINGS.hasOwnProperty("scriptVersion")) {
        title = SETTINGS.scriptName + " " + SETTINGS.scriptVersion + " " + title;
        title = title.replace(/\s$/, "");
    }
    var w = new Window('dialog', title);
    var g_btn = w.add("group");
    var okbtn = g_btn.add('button', undefined, 'Ok');
    var selectBtn = g_btn.add('button', undefined, 'Select All');
    okbtn.onClick = function () {
        w.close();
    };
    selectBtn.onClick = function () {
        e.active = false;
        e.active = true;
    };
    var e = w.add('edittext', undefined, msg, { multiline: true, readonly: true });
    e.size = [700, 500];
    w.onShow = function () {
        if (app.name == "Adobe Photoshop") {
            selectBtn.parent.remove(selectBtn);
        }
    };
    w.show();
}
function quickViewConfirm(msg, title) {
    if (title == undefined) {
        title = '';
    }
    var w = new Window('dialog', title);
    var e = w.add('edittext', undefined, msg, { multiline: true, readonly: true });
    e.size = [700, 500];
    var okbtn = w.add('button', undefined, 'Ok');
    var cclbtn = w.add('button', undefined, 'Cancel');
    var result = false;
    okbtn.onClick = function () {
        result = true;
        w.close();
    };
    cclbtn.onClick = function () {
        result = false;
        w.close();
    };
    if (w.show() == 2) {
        return null;
    }
    else {
        return result;
    }
    ;
}
function pasteDialog(title, allowedExtensions, customLabelStrings, hideControls) {
    if (title == undefined) {
        title = '';
    }
    if (typeof SETTINGS != "undefined" && SETTINGS.hasOwnProperty("scriptName") && SETTINGS.hasOwnProperty("scriptVersion")) {
        var labelText = getScriptLabelText();
        title = labelText + " " + title;
        title = title.replace(/\s$/, "");
    }
    var textFileExtensions = allowedExtensions || [".csv", ".txt", ".json"];
    var w = new Window('dialog', title);
    var msg = "";
    var e = w.add('edittext', undefined, msg, { multiline: true, readonly: false });
    e.size = [700, 500];
    var lbl = w.add("statictext", undefined, customLabelStrings && customLabelStrings.PASTE_DIRECTLY || "Paste text directly into this window, or use Import button below to import text.");
    var p = w.add("panel", undefined, customLabelStrings && customLabelStrings.GET_FROM_FILE || "Get data from file");
    if (hideControls === true) {
        p.visible = false;
        p.size = [1, 1];
    }
    else {
        p.size = [700, 70];
    }
    p.orientation = "row";
    p.spacing = 4;
    p.margins = [10, 2, 2, 2];
    var r_addToDialogData = p.add('radiobutton', undefined, customLabelStrings && customLabelStrings.ADD_TO_TEXT || 'Add to dialog text.');
    r_addToDialogData.value = true;
    var r_replaceDialogData = p.add('radiobutton', undefined, customLabelStrings && customLabelStrings.REPLACE_TEXT || 'Replace dialog text');
    var ch_insertLineBreak = p.add('checkbox', undefined, customLabelStrings && customLabelStrings.LINEBREAK || 'Insert Linebreak when adding to existing text.');
    ch_insertLineBreak.value = true;
    var btn_import = p.add('button', undefined, 'Import');
    btn_import.helpTip = customLabelStrings && customLabelStrings.IMPORT_BUTTON_HELP || "This button imports text directly into the window above. You may edit the text in here as final pre-processing if needed.";
    var g_btn = w.add("group");
    var okbtn = g_btn.add('button', undefined, 'Ok');
    var cclbtn = g_btn.add('button', undefined, 'Cancel');
    var result = false;
    w.onShow = function () {
        e.active = true;
        btn_import.onClick = function () {
            if (typeof (getDataFileMask) != "function") {
                alert("getDataFileMask function missing");
                return;
            }
            var inFile = File.openDialog(customLabelStrings && customLabelStrings.SELECT_TEXT_FILE || "Select text file", getDataFileMask(textFileExtensions, true));
            if (inFile) {
                var fileContents = void 0;
                inFile.open('r');
                fileContents = inFile.read();
                inFile.close();
                if (r_addToDialogData.value) {
                    var existingValue = e.getValue();
                    if (existingValue != "" && ch_insertLineBreak.value) {
                        existingValue += "\r\n";
                    }
                    e.setValue(existingValue + fileContents);
                }
                else if (r_replaceDialogData.value) {
                    e.setValue(fileContents);
                }
            }
        };
        okbtn.onClick = function () {
            result = true;
            w.close();
        };
        cclbtn.onClick = function () {
            result = false;
            w.close();
        };
    };
    if (w.show() == 2) {
        return null;
    }
    else {
        if (result) {
            return e.getValue();
        }
        else {
            return null;
        }
    }
    ;
}
function validate(UIElements) {
    var arr = [];
    var thisCondition, thisElem;
    for (var all in UIElements) {
        if (all == "mode_selector") {
            continue;
        }
        thisElem = UIElements[all];
        if (thisElem) {
            if (!thisElem.hasOwnProperty("errorCondition")) {
                thisElem.errorCondition = function (value) {
                    if (value == "" || value == null) {
                        return new Error("Field is required.");
                    }
                    else {
                        return true;
                    }
                };
            }
            if (thisElem.hasOwnProperty("preProcess")) {
                thisElem.preProcess();
            }
            thisCondition = thisElem.errorCondition(UIElements[all].getValue()).toString();
            if (thisCondition.substr(0, 6) == "Error:") {
                arr.push(unCamelCaseSplit(all) + " : " + thisCondition.substr(7));
            }
        }
    }
    if (arr.length > 0) {
        quickView("Please fill out the necessary fields:\n\r" + arr.join("\n"), SETTINGS.scriptName + " v" + SETTINGS.scriptVersion);
        return false;
    }
    else {
        return true;
    }
}
function getMode(elem) {
    for (var i = 0; i < elem.children.length; i++) {
        if (elem.children[i].type == "radiobutton") {
            if (elem.children[i].value) {
                return elem.children[i].key;
            }
        }
    }
}
function validateWithMode(UIElements, returnErrorSummary) {
    var mode = getMode(UIElements.mode_selector);
    var arr = [];
    var thisCondition, thisElem;
    for (var all in UIElements[mode]) {
        thisElem = UIElements[mode][all];
        if (thisElem) {
            if (!thisElem.hasOwnProperty("errorCondition")) {
                thisElem.errorCondition = function (value) {
                    if (value == "" || value == null) {
                        return new Error("Field is required.");
                    }
                    else {
                        return true;
                    }
                };
            }
            if (thisElem.hasOwnProperty("preProcess")) {
                thisElem.preProcess();
            }
            thisCondition = thisElem.errorCondition(UIElements[mode][all].getValue());
            thisCondition = (typeof (thisCondition) == "undefined") ? typeof (thisCondition) : thisCondition.toString();
            if (thisCondition.substr(0, 6) == "Error:") {
                arr.push(unCamelCaseSplit(all) + " : " + thisCondition.substr(7));
            }
        }
    }
    if (arr.length > 0) {
        if (!returnErrorSummary) {
            quickView("Please fill out the necessary fields:\n\r" + arr.join("\n"), SETTINGS.scriptName + " v" + SETTINGS.scriptVersion);
        }
        else {
            return arr.join("\n");
        }
        return false;
    }
    else {
        return true;
    }
}
function UIWindow() {
    var w = new Window("dialog", SETTINGS.scriptName.replace(".jsx", "") + " " + SETTINGS.scriptVersion);
    w.UIElements = {};
    var g_btn = w.add("group");
    var btn_ok = g_btn.add("button", undefined, "Ok");
    var btn_ccl = g_btn.add("button", undefined, "Cancel");
    btn_ok.onClick = function () {
        if (validate(this.window.UIElements)) {
            this.window.close();
        }
        ;
    };
    w.onShow = function () {
    };
    if (w.show() == 2) {
        return null;
    }
    else {
    }
}
function UIWindow_withStack() {
    var labelText = getScriptLabelText();
    var w = new Window("dialog", labelText);
    w.UIElements = {
        option_1: {},
        option_2: {}
    };
    var g_stackControl = w.add("group");
    var r_option_1 = g_stackControl.add("radiobutton", undefined, "Stars");
    r_option_1.key = "option_1";
    var r_option_2 = g_stackControl.add("radiobutton", undefined, "Circles");
    r_option_2.key = "option_2";
    w.UIElements.mode_selector = g_stackControl;
    var stackOptionElems = [r_option_1, r_option_2];
    var g_0 = w.add("group");
    g_0.orientation = "stack";
    var g1 = g_0.add("group");
    g1.key = "option_1";
    var lbl_1 = g1.add("statictext", undefined, "Stars");
    var g2 = g_0.add("group");
    g2.key = "option_2";
    var lbl_2 = g2.add("statictext", undefined, "Circles");
    var g_btn = w.add("group");
    var btn_ok = g_btn.add("button", undefined, "Ok");
    var btn_ccl = g_btn.add("button", undefined, "Cancel");
    btn_ok.onClick = function () {
        if (validateWithMode(this.window.UIElements)) {
            this.window.close();
        }
        ;
    };
    w.onShow = function () {
        r_option_1.value = true;
        g2.visible = false;
        for (var i = 0; i < stackOptionElems.length; i++) {
            stackOptionElems[i].onClick = function () {
                switchStackView(g_0, this.key);
            };
        }
    };
    if (w.show() == 2) {
        return null;
    }
    else {
    }
}
function findDialog_singleSelection(items) {
    var allItems = items;
    var item;
    var w = new Window("dialog", "Find");
    var e = w.add("edittext", undefined, "");
    e.characters = 24;
    var btn_find = w.add("button", undefined, "Search");
    var disp_all = w.add("listbox", undefined, allItems);
    disp_all.size = [200, 400];
    var disp_find = w.add("edittext", undefined, "", { readonly: true });
    disp_find.characters = 24;
    disp_all.onDoubleClick = function () {
        if (this.selection != null && this.selection.text != "") {
            disp_find.text = this.selection.text;
        }
    };
    var g_btn = w.add("group");
    var btn_ccl = g_btn.add("button", undefined, "Cancel");
    var btn_ok = g_btn.add("button", undefined, "Ok");
    btn_find.onClick = function () {
        if (e.text == "") {
            return;
        }
        var lookFor = e.text;
        var foundArr = [];
        var t;
        var rx = new RegExp(lookFor, 'i');
        for (var q = 0, ln = allItems.length; q < ln; q++) {
            var thisListItem = allItems[q];
            if (thisListItem.match(rx)) {
                foundArr.push(thisListItem);
            }
        }
        for (var i = 0; i < disp_all.items.length; i++) {
            if (i < foundArr.length) {
                t = foundArr[i];
            }
            else {
                t = "";
            }
            disp_all.items[i].text = t;
        }
        ;
        disp_find.text = disp_all.items[0].text;
        disp_all.hide();
        disp_all.show();
        if (disp_find.text == "") {
            alert("Sorry, nothing was found for this search.");
        }
    };
    w.onShow = function () {
        e.active = true;
    };
    if (w.show() == 2) {
        return null;
    }
    else {
        return disp_find.text;
    }
}
function deFocusPanel() {
    var dummyWin = new DummyWin();
    dummyWin.show();
    dummyWin.close();
}
function DummyWin() {
    var title = "DummyWin";
    var w = new Window('window', title, undefined, { borderless: true, closeButton: false });
    w.spacing = 0;
    w.margins = [0, 0, 0, 0];
    var loc = [-10, -10];
    w.location = loc;
    this.show = function () { w.show(); };
    this.close = function () { w.close(); };
}
var MiniTab = (function () {
    function MiniTab(customWindowClass) {
        this.isReset = false;
        var title = (SETTINGS.windowGraphics) ? '' : (SETTINGS.scriptName);
        var w = new Window('palette', title, undefined, { borderless: false, closeButton: true });
        this.w = w;
        var labelText = getScriptLabelText();
        w.helpTip = labelText;
        w.spacing = 0;
        w.margins = [0, 0, 0, 0];
        var loc = (SETTINGS.syncLocations) ? SETTINGS.bigWindowLocation : SETTINGS.tinyWindowLocation;
        w.location = loc;
        var btn;
        if (SETTINGS.windowGraphics) {
            if (IMAGE_RESOURCES.hasOwnProperty("found_icon") && IMAGE_RESOURCES["found_icon"] != null) {
                btn = w.add('iconbutton', undefined, IMAGE_RESOURCES.found_icon);
            }
            else {
                btn = w.add('iconbutton', undefined, IMAGE_RESOURCES.default_icon);
            }
            btn.size = [100, 45];
        }
        else {
            btn = w.add('button', undefined, '+');
            btn.size = [100, 42];
        }
        var self = this;
        var eventHandler = function () {
            var loc = (SETTINGS.syncLocations) ? w.location : SETTINGS.bigWindowLocation;
            SETTINGS.bigWindowLocation = loc;
            SETTINGS.tinyWindowLocation = w.location;
            var thisPaletteWindow = (customWindowClass) ? new customWindowClass() : new paletteWindow();
            if (!self.isReset) {
                thisPaletteWindow.show();
            }
            w.close();
        };
        btn.eventHandler = eventHandler;
        btn.runEventHandler = function () { return eventHandler(); };
        btn.addEventListener('mousedown', eventHandler);
        this.mainButton = btn;
    }
    MiniTab.prototype.show = function () { this.w.show(); };
    MiniTab.prototype.close = function () { this.w.close(); };
    return MiniTab;
}());
function paletteWindow() {
    var windowType = 'palette';
    var w = new Window(windowType, (SETTINGS.scriptName), undefined, { closeButton: true, borderless: false });
    w.spacing = 2;
    w.margins = [2, 2, 2, 2];
    w.location = SETTINGS.bigWindowLocation;
    var panelButtonSize = [200, 26];
    var g_btn = w.add("group");
    g_btn.margins = [2, 2, 2, 4];
    var btn_min = g_btn.add("button", undefined, "Minimize");
    btn_min.size = panelButtonSize;
    btn_min.helpTip = "minimize";
    btn_min.onClick = function () {
        var loc = (SETTINGS.syncLocations) ? [this.window.location[0], this.window.location[1]] : SETTINGS.tinyWindowLocation;
        SETTINGS.tinyWindowLocation = loc;
        SETTINGS.bigWindowLocation = [this.window.location[0], this.window.location[1]];
        if (ScriptUI.environment.keyboardState.altKey) {
            w.close();
        }
        else {
            var thisMiniTab = new MiniTab();
            thisMiniTab.show();
            w.close();
        }
    };
    w.onShow = function () {
    };
    this.show = function () { w.show(); };
}
function ChoiceWindow() {
    var labelText = getScriptLabelText();
    var w = new Window("palette", labelText);
    w.spacing = 6;
    w.margins = [4, 4, 4, 4];
    var buttonSize = [120, 28];
    var g1 = w.add("group");
    var btn_1 = g1.add("button", undefined, "Action 1");
    btn_1.size = buttonSize;
    var btn_2 = g1.add("button", undefined, "Action 2");
    btn_2.size = buttonSize;
    btn_1.onClick = function () {
        sendAllInBTmsg(ScriptFuncToRun, { launchScript: "action_1" }, undefined, "illustrator");
    };
    btn_2.onClick = function () {
        sendAllInBTmsg(ScriptFuncToRun, { launchScript: "action_2" }, undefined, "illustrator");
    };
    w.onShow = function () {
    };
    this.show = function () { w.show(); };
}
function ProgressPalette(max, title, location, labelChars) {
    if (typeof title == "undefined") {
        title = "Your Progress:";
    }
    var obj = {};
    var w = new Window("palette", title, undefined, { closeButton: true });
    var p = w.add('progressbar');
    p.size = [300, 20];
    p.maxvalue = max;
    var lbl = w.add('statictext', undefined, "");
    lbl.characters = labelChars || 10;
    var e = w.add('edittext', undefined, '0 of ' + max);
    e.characters = 20;
    e.justify = 'center';
    if (typeof (location) != "undefined") {
        w.location = location;
    }
    obj.show = function () { w.show(); };
    obj.window = w;
    obj.close = function () { w.close(); };
    obj.update = function () { w.update(); };
    w.setValue = obj.setValue = function (val) {
        p.value = val;
        e.text = val + " of " + p.maxvalue;
        this.update();
    };
    w.setLabel = obj.setLabel = function (val) {
        lbl.setValue(val);
    };
}
function convertAppColor(src, dest, clrArr) {
    return app.convertSampleColor(ImageColorSpace[src], clrArr, ImageColorSpace[dest], ColorConvertPurpose.defaultpurpose);
}
;
function getUIRGB(type, clr) {
    var round2 = function (num) { return Math.round(num * 100) / 100; };
    if (clr.length == 0) {
        return [0.5, 0.5, 0.5];
    }
    for (var x = 0; x < clr.length; x++) {
        clr[x] = clr[x] * 1;
    }
    if (type == "RGB") {
        return [round2(clr[0] / 255), round2(clr[1] / 255), round2(clr[2] / 255)];
    }
    else if (type == "CMYK") {
        var newArr = convertAppColor("CMYK", "RGB", [clr[0], clr[1], clr[2], clr[3]]);
        return [round2(newArr[0] / 255), round2(newArr[1] / 255), round2(newArr[2] / 255)];
    }
    else if (type == "GRAY") {
        var newArr = convertAppColor("GrayScale", "RGB", [clr[0]]);
        return [round2(newArr[0] / 255), round2(newArr[1] / 255), round2(newArr[2] / 255)];
    }
    else if (type == "LAB") {
        var newArr = convertAppColor("LAB", "RGB", [clr[0], clr[1], clr[2]]);
        return [round2(newArr[0] / 255), round2(newArr[1] / 255), round2(newArr[2] / 255)];
    }
    else {
        return [0.5, 0.5, 0.5];
    }
}
;
function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return [result[1], result[2], result[3]] ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}
;
function getColorNumbers(sourceTextContent) {
    var s = sourceTextContent.toString();
    var rx_hex = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var rx_rgb = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
    var rx_cmyk = /^cmyk\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
    if (s.match(rx_hex)) {
        return hexToRgb(s);
    }
    else if (s.match(rx_rgb)) {
        var m = s.match(rx_rgb);
        return [Number(m[1]), Number(m[2]), Number(m[3])];
    }
    else if (s.match(rx_cmyk)) {
        var m = s.match(rx_cmyk);
        return [Number(m[1]), Number(m[2]), Number(m[3]), Number(m[4])];
    }
    throw new Error("Unable to process the color.");
}
;
function buildProcessColor(numbers, forceMode) {
    var n = numbers, result;
    if (app.activeDocument.documentColorSpace == DocumentColorSpace.RGB || (app.activeDocument.documentColorSpace == DocumentColorSpace.CMYK && forceMode == "RGB")) {
        result = new RGBColor();
        if (n.length == 4) {
            var c = app.convertSampleColor(ImageColorSpace.CMYK, n, ImageColorSpace.RGB, ColorConvertPurpose.defaultpurpose);
            result.red = c[0];
            result.green = c[1];
            result.blue = c[2];
        }
        else {
            result.red = n[0];
            result.green = n[1];
            result.blue = n[2];
        }
    }
    else if (app.activeDocument.documentColorSpace == DocumentColorSpace.CMYK || (app.activeDocument.documentColorSpace == DocumentColorSpace.RGB && forceMode == "CMYK")) {
        result = new CMYKColor();
        if (n.length == 3) {
            var c = app.convertSampleColor(ImageColorSpace.RGB, n, ImageColorSpace.CMYK, ColorConvertPurpose.defaultpurpose);
            result.cyan = c[0];
            result.magenta = c[1];
            result.yellow = c[2];
            result.black = c[3];
        }
        else {
            result.cyan = n[0];
            result.magenta = n[1];
            result.yellow = n[2];
            result.black = n[3];
        }
    }
    return result;
}
;
function drawFromObjString(objString, canvasArea) {
    function round2(num) {
        return Math.round(num * 100) / 100;
    }
    function drawPath(shp) {
        var thisShp = shp;
        if (thisShp.ellipsePath != true) {
            var vectorPts = thisShp.pathPoints;
            canvas.newPath();
            canvas.moveTo(thisShp.pathPoints[0][0], thisShp.pathPoints[0][1]);
            for (var j = 0; j < vectorPts.length; j++) {
                var thisAnchor = vectorPts[j];
                var x = thisAnchor[0], y = thisAnchor[1];
                canvas.lineTo(x, y);
            }
            if (thisShp.closed == true) {
                canvas.closePath();
            }
        }
        else {
            var cirPts = thisShp.pathPoints;
            canvas.newPath();
            canvas.ellipsePath(round2(cirPts[0]), round2(cirPts[1]), round2(cirPts[2]), round2(cirPts[3]));
            canvas.closePath();
        }
        if (thisShp.fillColor != null) {
            var clr = thisShp.fillColor;
            var myBrush = canvas.newBrush(canvas.BrushType.SOLID_COLOR, clr);
            canvas.fillPath(myBrush);
        }
        if (thisShp.strokeColor != null) {
            var clr = thisShp.strokeColor;
            var myPen = canvas.newPen(canvas.PenType.SOLID_COLOR, [clr[0], clr[1], clr[2], 1], thisShp.strokeWidth);
            canvas.strokePath(myPen);
        }
    }
    var obj = eval(objString.replace(/'\+\n*\r*'/g, '').replace(/(^'|';$)/g, ''));
    var canvas = canvasArea.graphics;
    var counter = obj.total;
    var ctr;
    while (counter >= 0) {
        for (var all in obj) {
            if (all.match(/\d{1,2}$/g) && Number(all.match(/\d{1,2}$/g)) == counter) {
                var thisShp = obj[all];
                if (all.match('group')) {
                    ctr = Number(obj[all].total);
                    while (ctr >= 0) {
                        for (var paths in obj[all]) {
                            if (paths.match(/\d{1,2}$/g) && paths.match(/\d{1,2}$/g) == ctr) {
                                drawPath(obj[all][paths]);
                            }
                        }
                        ctr--;
                    }
                }
                else {
                    drawPath(thisShp);
                }
            }
        }
        counter -= 1;
    }
}
function drawnIconButton(parent, resource) {
    var btn = parent.add("button", undefined, "");
    btn.onDraw = function () {
        drawFromObjString(resource, this);
    };
    return btn;
}
var UIHelper = {
    labelChars: 20,
    errorConditions: {
        fsResourceErrorCondition: function (val) {
            try {
                if (val.replace(/[\s\t]+/g, "") == "") {
                    throw Error("No value supplied for file-system resource.");
                }
                var f = File(val);
                if (!f.exists) {
                    throw Error("File-system resource not found at '" + val + "'.");
                }
                return false;
            }
            catch (e) {
                return new Error(e);
            }
        },
        bypassedErrorCondition: function (val) { return false; },
        genericErrorCondition: function (value) {
            if (value == "" || value == null) {
                return new Error("Field is required.");
            }
            else {
                return false;
            }
        },
        numericErrorCondition: function (val) {
            var numberVal = Number(val);
            if (isNaN(numberVal)) {
                return Error("Must be numeric.");
            }
            return UIHelper.errorConditions.genericErrorCondition(val);
        }
    },
    createViewOnlyDataDialog: function (dataDialogMap) {
        return UIHelper.createDataDialog(dataDialogMap, true);
    },
    createDataDialog: function (dataDialogMap, viewOnly) {
        var scope = this;
        if (!("labelChars" in this)) {
            scope = UIHelper;
        }
        var dialogTitle = dataDialogMap.dialogTitle;
        if (typeof (dialogTitle) == "undefined") {
            dialogTitle = "";
        }
        else {
            dialogTitle = " - " + dialogTitle;
        }
        var fullDialogTitle = dataDialogMap.scriptName + " " + dataDialogMap.scriptVersion + dialogTitle;
        var prototypeDict = {
            "DropDownList": ["selectWell", "populate", "getValue", "setValue"],
            "ListBox": ["setValue", "getValue", "reset", "populate", "addItem", "up", "down", "swap", "removeSelectedItem", "removeItem", "getAllCurrentTextValues", "getListItemValues"],
            "ListItem": ["remove", "getValue", "setValue"],
            "EditText": ["numbersOnly", "getValue", "setValue"],
            "StaticText": ["getValue", "setValue"],
            "Checkbox": ["getValue", "setValue"],
            "RadioButton": ["getValue", "setValue"]
        };
        var ScriptUIConstructs = [
            DropDownList,
            ListBox,
            ListItem,
            EditText,
            StaticText,
            Checkbox,
            RadioButton,
        ];
        var thisItem, neededPrototypes;
        for (var i = 0; i < ScriptUIConstructs.length; i++) {
            thisItem = ScriptUIConstructs[i];
            neededPrototypes = prototypeDict[thisItem.name];
            var thisProto = void 0;
            for (var j = 0; j < neededPrototypes.length; j++) {
                thisProto = neededPrototypes[j];
                if (!(thisProto in thisItem.prototype)) {
                    throw Error("Necessary ScriptUI custom prototypes not found.");
                }
            }
        }
        var ControlTypeDefaults = {
            "FOLDER": {
                "title": "Folder",
                "dialogTitle": "Choose",
                "buttonTitle": "Choose Folder"
            },
            "FILE": {
                "title": "File",
                "dialogTitle": "Choose",
                "fileSpec": undefined,
                "multiSelect": false
            },
            "DROPDOWN": {
                "items": [],
                "dataItems": []
            },
            "LISTBOX": {
                "items": [],
                "labelProps": {},
                "listProps": {},
                "buttonPropList": [],
                "buttonColumns": 1,
                "buttonGroupProps": {}
            }
        };
        var ControlTypeDict = {
            "FOLDER": {
                method: folderPathInput,
                labelVertical: true,
                typeArguments: ["title", "dialogTitle", "buttonTitle"],
                errorCondition: scope.errorConditions.fsResourceErrorCondition,
                dataType: "string"
            },
            "FILE": {
                method: filePathInput,
                labelVertical: true,
                typeArguments: ["title", "dialogTitle", "fileSpec", "multiSelect"],
                errorCondition: scope.errorConditions.fsResourceErrorCondition,
                dataType: "string"
            },
            "DROPDOWN": {
                method: makeDropdownlist,
                labelVertical: false,
                typeArguments: ["items", "dataItems"],
                errorCondition: scope.errorConditions.genericErrorCondition,
                dataType: "string"
            },
            "LISTBOX": {
                method: makeListboxSelector,
                labelVertical: true,
                typeArguments: ["items", "labelProps", "listProps", "buttonPropList", "buttonColumns", "buttonGroupProps"],
                errorCondition: scope.errorConditions.genericErrorCondition,
                dataType: "string"
            },
            "INPUT": {
                method: function (parent, properties) { var e = parent.add("edittext", undefined, "", properties); e.characters = 30; return e; },
                labelVertical: false,
                typeArguments: ["properties"],
                errorCondition: scope.errorConditions.genericErrorCondition,
                dataType: "string"
            },
            "INPUT_NUMBER": {
                method: function (parent, properties) { var e = parent.add("edittext", undefined, "", properties); e.characters = 30; return e; },
                labelVertical: false,
                typeArguments: ["properties"],
                errorCondition: scope.errorConditions.numericErrorCondition,
                dataType: "number"
            },
            "CHECKBOX": {
                method: function (parent, properties) { var e = parent.add("checkbox", undefined, "", properties); return e; },
                labelVertical: false,
                typeArguments: ["properties"],
                errorCondition: scope.errorConditions.bypassedErrorCondition,
                dataType: "boolean"
            },
            "custom": {
                method: null,
                labelVertical: false,
                typeArguments: [],
                errorCondition: scope.errorConditions.genericErrorCondition,
                dataType: null
            },
            "customVLabel": {
                method: null,
                labelVertical: true,
                typeArguments: [],
                errorCondition: scope.errorConditions.genericErrorCondition,
                dataType: null
            }
        };
        for (var all in ControlTypeDict) {
            if (all != "customVLabel" && all != "custom" && typeof (ControlTypeDict[all].method) != "function") {
                throw Error("Necessary ScriptUI custom functions not found.");
            }
        }
        var w = new Window("dialog", fullDialogTitle, undefined, { closeButton: true });
        w.spacing = 4;
        var uiElements = {};
        var thisTypeDesc;
        var newGroup;
        var newArgs;
        var thisLabel;
        var thisSuiLabel;
        var thisArgs;
        var thisControlTypeMethod;
        var isRequired;
        var isReadOnly;
        var isLabelVertical;
        var thisControlTypeEntry;
        var controlTypeArgs;
        var arg;
        var finalArgs;
        var newUiControl;
        var helpTip;
        var hasDefaultValue;
        var thisType;
        var thisDataPropVal;
        var collectedDataInfo = [];
        for (var i = 0; i < dataDialogMap.dataTyped.length; i++) {
            thisTypeDesc = dataDialogMap.dataTyped[i];
            if (!("required" in thisTypeDesc)) {
                thisTypeDesc.required = true;
            }
            if (!("uiDisplayType" in thisTypeDesc)) {
                thisTypeDesc.uiDisplayType = "INPUT";
                if (thisTypeDesc.dataType == "boolean") {
                    thisTypeDesc.uiDisplayType = "CHECKBOX";
                }
            }
            thisControlTypeEntry = ControlTypeDict[thisTypeDesc.uiDisplayType];
            thisLabel = (typeof (thisTypeDesc.uiLabel) == "string") ? thisTypeDesc.uiLabel : unCamelCaseSplit(thisTypeDesc.propertyName);
            isRequired = thisTypeDesc.required;
            isReadOnly = thisTypeDesc.readonly === true;
            isLabelVertical = ("labelVertical" in thisTypeDesc) ? thisTypeDesc.labelVertical : thisControlTypeEntry.labelVertical;
            helpTip = thisTypeDesc.helpTip;
            thisType = (typeof (thisTypeDesc.dataType) == "string") ? thisTypeDesc.dataType : thisControlTypeEntry.dataType;
            thisTypeDesc.dataType = thisType;
            thisDataPropVal = dataDialogMap.dataObj[thisTypeDesc.propertyName];
            collectedDataInfo.push({
                required: isRequired,
                readonly: isReadOnly,
                uiLabel: thisLabel,
                type: thisType,
                helpTip: (typeof (helpTip) == "undefined") ? "" : helpTip,
                value: thisDataPropVal
            });
            if (!viewOnly) {
                newGroup = w.add("group");
                newGroup.alignment = "center";
                newGroup.spacing = (isLabelVertical) ? 2 : 8;
                newGroup.orientation = (isLabelVertical) ? "column" : "row";
                thisArgs = thisTypeDesc.typeArguments || {};
                controlTypeArgs = thisControlTypeEntry.typeArguments;
                newArgs = {};
                for (var j = 0; j < controlTypeArgs.length; j++) {
                    arg = controlTypeArgs[j];
                    if (!(arg in thisArgs)) {
                        continue;
                    }
                    hasDefaultValue = (thisTypeDesc.uiDisplayType in ControlTypeDefaults) && (arg in ControlTypeDefaults[thisTypeDesc.uiDisplayType]);
                    newArgs[arg] = thisArgs[arg];
                    if (typeof (newArgs[arg]) == "undefined" && hasDefaultValue) {
                        newArgs[arg] = ControlTypeDefaults[thisTypeDesc.uiDisplayType][arg];
                    }
                }
                for (var all in thisArgs) {
                    if (!(all in newArgs)) {
                        newArgs[all] = thisArgs[all];
                    }
                }
                finalArgs = [];
                for (var all in newArgs) {
                    finalArgs.push(newArgs[all]);
                }
                if (thisLabel) {
                    thisSuiLabel = newGroup.add("statictext", undefined, thisLabel);
                    thisSuiLabel.justify = "right";
                    if (isLabelVertical) {
                        thisSuiLabel.justify = "center";
                    }
                }
                if (typeof (thisTypeDesc.customControlMethod) == "function") {
                    uiElements[thisTypeDesc.propertyName] = thisTypeDesc.customControlMethod(newGroup, newArgs);
                }
                else {
                    thisControlTypeMethod = thisControlTypeEntry.method;
                    uiElements[thisTypeDesc.propertyName] = thisControlTypeMethod(newGroup, finalArgs[0], finalArgs[1], finalArgs[2], finalArgs[3], finalArgs[4], finalArgs[5], finalArgs[6], finalArgs[7], finalArgs[8], finalArgs[9]);
                }
                newUiControl = uiElements[thisTypeDesc.propertyName];
                if (typeof (newUiControl) == "undefined") {
                    throw Error("UI Control for '" + thisTypeDesc.propertyName + "' could not be created.");
                }
                if (helpTip) {
                    newUiControl.helpTip = helpTip;
                }
                if (typeof (thisDataPropVal) != "undefined" && thisDataPropVal != null && thisDataPropVal != "") {
                    newUiControl.setValue(thisDataPropVal);
                }
                if (isReadOnly) {
                    newUiControl.enabled = false;
                }
                if ((!isRequired || isReadOnly) && typeof (thisTypeDesc.errorCondition) != "function") {
                    newUiControl.errorCondition = scope.errorConditions.bypassedErrorCondition;
                }
                else {
                    if ("errorCondition" in thisTypeDesc) {
                        newUiControl.errorCondition = thisTypeDesc.errorCondition;
                    }
                    else {
                        newUiControl.errorCondition = thisControlTypeEntry.errorCondition;
                    }
                }
                var sep = w.add("panel");
                sep.size = [600, 1];
            }
        }
        if (viewOnly) {
            var columnAmt = 1;
            var columnTitles = [""];
            var collectedDataKeys_1 = [];
            if (collectedDataInfo.length > 0) {
                collectedDataKeys_1 = Object.keys(collectedDataInfo[0]);
                columnAmt = collectedDataKeys_1.length;
                columnTitles = collectedDataKeys_1.map(function (item) { return unCamelCaseSplit(item); });
            }
            var dataList_1 = w.add("listbox", undefined, [], {
                numberOfColumns: columnAmt,
                showHeaders: true,
                columnTitles: columnTitles
            });
            collectedDataInfo.forEach(function (item) {
                var newItem = dataList_1.add("item");
                newItem.text = item[collectedDataKeys_1[0]];
                collectedDataKeys_1.forEach(function (dataKey, i) {
                    if (i > 0) {
                        newItem.subItems[i - 1].text = item[dataKey];
                    }
                });
            });
        }
        var g_btn = w.add("group");
        if (!viewOnly) {
            var btn_ccl = g_btn.add("button", undefined, "Cancel");
        }
        var btn_ok = g_btn.add("button", undefined, "Ok");
        btn_ok.onClick = function () {
            if (viewOnly) {
                this.window.close();
            }
            else {
                if (scope.validate(uiElements)) {
                    this.window.close();
                }
            }
        };
        if (w.show() == 2) {
            return false;
        }
        else {
            if (viewOnly) {
                return false;
            }
            var uiResult = scope.getObjectFromUI(uiElements, dataDialogMap.dataTyped);
            var dataResult = {};
            for (var all in dataDialogMap.dataObj) {
                if (all in uiResult) {
                    dataResult[all] = uiResult[all];
                }
                else {
                    dataResult[all] = dataDialogMap.dataObj[all];
                }
            }
            return dataResult;
        }
    },
    quickView: function (msg, title) {
        if (title == undefined) {
            title = '';
        }
        var scriptTitle = UIHelper.getScriptMessageTitle();
        title = scriptTitle + " " + title;
        title = title.replace(/\s$/, "");
        var w = new Window('dialog', title);
        var e = w.add('edittext', undefined, msg, { multiline: true });
        e.size = [700, 500];
        var okbtn = w.add('button', undefined, 'Ok');
        okbtn.onClick = function () {
            w.close();
        };
        w.show();
    },
    getScriptMessageTitle: function (forceShowConfiguration) {
        var scriptLabelText = "Anonymous Script";
        if (typeof SETTINGS != "undefined" && SETTINGS.hasOwnProperty("scriptName") && SETTINGS.hasOwnProperty("scriptVersion")) {
            scriptLabelText = SETTINGS.scriptName + " " + SETTINGS.scriptVersion;
            if (typeof (getScriptLabelText) == "function") {
                scriptLabelText = getScriptLabelText(forceShowConfiguration);
            }
        }
        return scriptLabelText;
    },
    validate: function (UIElements) {
        var arr = [];
        var thisCondition, thisElem;
        for (var all in UIElements) {
            thisElem = UIElements[all];
            if (!thisElem.hasOwnProperty("errorCondition")) {
                if (thisElem.type == "checkbox") {
                    thisElem.errorCondition = this.errorConditions.bypassedErrorCondition;
                }
                else {
                    thisElem.errorCondition = this.errorConditions.genericErrorCondition;
                }
            }
            if (thisElem.hasOwnProperty("preProcess")) {
                thisElem.preProcess();
            }
            thisCondition = thisElem.errorCondition(UIElements[all].getValue()).toString();
            if (thisCondition.substr(0, 6) == "Error:") {
                arr.push(unCamelCaseSplit(all) + " : " + thisCondition.substr(7));
            }
        }
        if (arr.length > 0) {
            this.quickView("Please fill out the necessary fields:\n\r" + arr.join("\n"));
            return false;
        }
        else {
            return true;
        }
    },
    getObjectFromUI: function (uiElements, dataTyped) {
        var res = {};
        var thisVal, thisDataTyped;
        var thisType;
        var _loop_1 = function (all) {
            thisVal = uiElements[all].getValue();
            thisDataTyped = (dataTyped.find(function (item) { return item.propertyName == all; }));
            if (typeof (thisDataTyped) != "undefined") {
                thisType = thisDataTyped.dataType;
            }
            else {
                thisType = typeof (thisVal);
            }
            if (typeof (thisVal) != thisType && thisType != null) {
                if (thisType == "string") {
                    thisVal = thisVal.toString();
                }
                else if (thisType == "boolean") {
                    thisVal = Boolean(thisVal);
                }
                else if (thisType == "number") {
                    thisVal = Number(thisVal);
                }
            }
            res[all] = thisVal;
        };
        for (var all in uiElements) {
            _loop_1(all);
        }
        return res;
    },
    scriptAlert: function (msg) {
        var titleLine = this.getScriptMessageTitle();
        if ($.os.match('Windows')) {
            alert(msg, titleLine);
        }
        else {
            alert(titleLine + ":\n" + msg);
        }
    },
    scriptConfirm: function (msg) {
        var titleLine = this.getScriptMessageTitle();
        if ($.os.match('Windows')) {
            return confirm(msg, titleLine);
        }
        else {
            return confirm(titleLine + ":\n" + msg);
        }
    },
    writeImageFile: function (binary, dest) {
        if (!(dest instanceof File)) {
            dest = File(dest);
        }
        try {
            dest.encoding = "BINARY";
            dest.open("w");
            dest.write(binary);
            dest.close();
        }
        catch (e) {
            scriptAlert("writeImageFile(binary, dest)\r" + e);
        }
    },
    getScriptImage: function (imageObj) {
        if (typeof (SETTINGS) == "undefined") {
            return false;
        }
        var scriptDataFolder = SETTINGS.thisScriptSettingsFolder;
        if (!scriptDataFolder) {
            return false;
        }
        var scriptImagesFolder = Folder(scriptDataFolder + "/script_images");
        if (!scriptImagesFolder.exists) {
            scriptImagesFolder.create();
        }
        var thisFile = File(scriptImagesFolder + "/" + imageObj.name + '.png');
        if (!thisFile.exists) {
            this.writeImageFile(imageObj.data, thisFile);
            if (!thisFile.exists) {
                return false;
            }
        }
        return thisFile;
    },
    objectImageStringsToFiles: function (inObj) {
        for (var all in inObj) {
            var fileResult = this.getScriptImage({ data: inObj[all], name: all });
            if (fileResult) {
                inObj[all] = fileResult;
            }
        }
    },
    sizeChoices: {
        SML: ("Sml"),
        MED: ("Med"),
        BIG: ("Big")
    },
    createGridDialog: function (inArr, names, jArr, customTitle, settings) {
        var errorPrefix = "UIHelper.createGridDialog(): ";
        errorPrefix = "UIHelper.createGridDialog(" + this.createDataDialog.getArguments().join(", ") + "): ";
        if (!(inArr instanceof Array) || !(names instanceof Array)) {
            throw Error(errorPrefix + "a parameter is not an Array.");
        }
        if (inArr.length == 0) {
            throw Error(errorPrefix + "an array is empty.");
        }
        if (inArr.length != names.length) {
            throw Error(errorPrefix + "incoming parameter arrays aren't equal.");
        }
        var sizeChoices = UIHelper.sizeChoices;
        var uiSize = (settings && settings.gridDataDialogSizeChoice) ? settings.gridDataDialogSizeChoice : undefined;
        var defaultSaveLocations = (settings && settings.gridDataDialogDefaultSaveLocations) ? settings.gridDataDialogDefaultSaveLocations : undefined;
        var uiLocation = (settings && settings.gridDataDialogUiLocation) ? settings.gridDataDialogUiLocation : undefined;
        var useSettingsManager = (settings.settingsManagerWriteFolder != "" &&
            Folder(settings.settingsManagerWriteFolder).exists &&
            typeof (SettingsManager) != "undefined" &&
            typeof (SETTINGS) != "undefined" &&
            "scriptName" in SETTINGS &&
            "scriptVersion" in SETTINGS);
        var sizeOptions = {};
        sizeOptions[sizeChoices.SML] = [600, 400];
        sizeOptions[sizeChoices.MED] = [800, 500];
        sizeOptions[sizeChoices.BIG] = [1200, 600];
        var title = customTitle || (this.getScriptMessageTitle() + " Data View");
        var sizeChoice = (uiSize != undefined) ? uiSize : sizeChoices.MED;
        var newDefaultSaveLocations = [];
        if (defaultSaveLocations != undefined && (defaultSaveLocations instanceof Array)) {
            defaultSaveLocations.forEach(function (m) {
                newDefaultSaveLocations.push(m);
            });
        }
        else {
            newDefaultSaveLocations.push(decodeURI(Folder.desktop.fsName));
        }
        if (newDefaultSaveLocations.length < inArr.length) {
            while (newDefaultSaveLocations.length < inArr.length) {
                newDefaultSaveLocations.push(newDefaultSaveLocations[newDefaultSaveLocations.length - 1]);
            }
        }
        function singleRecordView(record, title) {
            var w = new Window("dialog", title, undefined, { closeButton: true });
            var keys = Object.keys(record);
            var listOpts_singleRec = {
                numberOfColumns: 2,
                showHeaders: true,
                columnTitles: ["Key", "Value"],
                columnWidths: [120, 1200]
            };
            var arr = keys.map(function (m) {
                return [m, record[m]];
            });
            var maxNexLines = getMaxNextlines(arr);
            var list = w.add("listbox", undefined, [], listOpts_singleRec);
            if (maxNexLines > 0) {
                list.itemSize = [undefined, 21 * (maxNexLines + 1)];
            }
            list.size = [600, 500];
            w.onShow = function () {
                list.populate(arr, false, function (newListItem, subItemsArr) {
                    [].forEach.call(subItemsArr, function (m, i) {
                        if (i == 0) {
                            newListItem.text = subItemsArr[i];
                        }
                        else {
                            newListItem.subItems[i - 1].text = subItemsArr[i];
                        }
                    });
                });
                list.onDoubleClick = function () {
                    if (this.selection == null) {
                        return;
                    }
                    disp_currentValue.setValue(this.selection.subItems[0].text);
                };
            };
            var disp_currentValue = w.add("edittext", undefined, "", { multiline: true });
            disp_currentValue.size = [600, 50];
            disp_currentValue.helpTip = "Double-click the list above to display the value here; select-all and copy to copy value from this text-box.";
            var g_btn = w.add("group");
            var btn_ok = g_btn.add("button", undefined, "Ok");
            w.show();
        }
        ;
        function getMaxNextlines(dataArr) {
            var maxNextLines = 0;
            dataArr.forEach(function (m) {
                m.forEach(function (n) {
                    var hasNl = (n.indexOf("\n") != -1) || (n.indexOf("\r") != -1);
                    if (hasNl) {
                        var nlMatches = n.match(/\n/g);
                        var nlAmt = (nlMatches) ? nlMatches.length : 0;
                        if (maxNextLines < nlAmt) {
                            maxNextLines = nlAmt;
                        }
                    }
                });
            });
            return maxNextLines;
        }
        ;
        function makeDialog(isModal) {
            var keys = { CSV: "CSV", JSON: "JSON" };
            var w = new Window((isModal === true) ? "dialog" : "palette", title);
            var wasAccepted = false;
            if (uiLocation != null) {
                w.location = uiLocation;
            }
            else {
                if (uiLocation && (uiLocation instanceof Array)) {
                    w.location = uiLocation;
                }
            }
            var g_h = w.add("group");
            var g_leftControls = g_h.add("group");
            var btn_size_1 = g_leftControls.add("button", undefined, sizeChoices.SML);
            btn_size_1.key = sizeChoices.SML;
            btn_size_1.enabled = sizeChoice != sizeChoices.SML;
            var btn_size_2 = g_leftControls.add("button", undefined, sizeChoices.MED);
            btn_size_2.key = sizeChoices.MED;
            btn_size_2.enabled = sizeChoice != sizeChoices.MED;
            var btn_size_3 = g_leftControls.add("button", undefined, sizeChoices.BIG);
            btn_size_3.key = sizeChoices.BIG;
            btn_size_3.enabled = sizeChoice != sizeChoices.BIG;
            var sep = g_h.add("panel");
            sep.size = [2, 30];
            var g_middleControls = g_h.add("group");
            var lbl_middleControls = (sizeChoice == sizeChoices.SML) ? null : g_middleControls.add("statictext", undefined, "All Reports:");
            var middleWidth = (sizeChoice == sizeChoices.SML) ? 180 : 320;
            g_middleControls.size = [middleWidth, 30];
            g_middleControls.alignChildren = ["center", "center"];
            var btn_prev = g_middleControls.add("button", undefined, "<");
            btn_prev.size = [30, 30];
            var dd_dataReports = makeDropdownlist(g_middleControls, names);
            var btn_next = g_middleControls.add("button", undefined, ">");
            btn_next.size = [30, 30];
            sep = g_h.add("panel");
            sep.size = [2, 30];
            var g_viewOptions = g_h.add("group");
            var r_1 = g_viewOptions.add("radiobutton", undefined, keys.CSV);
            var r_2 = g_viewOptions.add("radiobutton", undefined, keys.JSON);
            r_1.key = keys.CSV;
            r_2.key = keys.JSON;
            function getSaveButtonText(dataSetKey, formatKey) {
                if (dataSetKey.length > 15) {
                    dataSetKey = dataSetKey.substr(0, 15) + "...";
                }
                return "Save " + dataSetKey + " " + formatKey;
            }
            ;
            function makeDataDisplay(parent, dataArr, jString) {
                var headerRow = dataArr[0];
                var dispStack = parent.add("group");
                dispStack.key = keys.CSV;
                dispStack.orientation = "stack";
                var g_csv = dispStack.add("group");
                g_csv.key = keys.CSV;
                var maxNexLines = getMaxNextlines(dataArr);
                var listOpts = {
                    numberOfColumns: headerRow.length,
                    showHeaders: true,
                    columnTitles: headerRow
                };
                var list_csv = g_csv.add("listbox", undefined, [], listOpts);
                if (maxNexLines > 0) {
                    list_csv.itemSize = [100, 21 * (maxNexLines + 1)];
                }
                list_csv.populate(dataArr.slice(1), false, function (newListItem, subItemsArr) {
                    [].forEach.call(subItemsArr, function (m, i) {
                        if (i == 0) {
                            newListItem.text = subItemsArr[i];
                        }
                        else {
                            newListItem.subItems[i - 1].text = subItemsArr[i];
                        }
                    });
                });
                list_csv.size = sizeOptions[sizeChoice];
                list_csv.onDoubleClick = function () {
                    if (this.selection == null) {
                        return;
                    }
                    var idx = this.selection.index + 1;
                    var recordRow = dataArr[idx];
                    var recordObj = ({});
                    dataArr[0].forEach(function (m, i) {
                        recordObj[m] = recordRow[i];
                    });
                    singleRecordView(recordObj, title + " | " + parent.key + " Rec: " + idx);
                };
                var g_json = dispStack.add("group");
                g_json.key = keys.JSON;
                var e_json = g_json.add("edittext", undefined, jString || "", { multiline: true });
                e_json.size = list_csv.size;
                g_json.visible = false;
                return dispStack;
            }
            ;
            var g_0 = w.add("group");
            g_0.orientation = "stack";
            var stackGroups = [];
            names.forEach(function (m, i) {
                var newGroup = g_0.add("group");
                newGroup.orientation = "column";
                newGroup.key = m;
                if (inArr[i] && inArr[i].length > 0) {
                    var disp = makeDataDisplay(newGroup, inArr[i], (jArr && jArr.length > i) ? jArr[i] : null);
                }
                stackGroups.push(newGroup);
            });
            var g_btn = w.add("group");
            var btn_save = g_btn.add("button", undefined, "Save");
            var sep_1 = g_btn.add("panel");
            sep_1.size = [2, 26];
            var btn_saveAll = g_btn.add("button", undefined, "Save All");
            var ch_saveAllCsv = g_btn.add("checkbox", undefined, keys.CSV);
            var ch_saveAllJson = g_btn.add("checkbox", undefined, keys.JSON);
            btn_save.size = [200, 26];
            var sep_2 = g_btn.add("panel");
            sep_2.size = [2, 26];
            var btn_ok = g_btn.add("button", undefined, "Ok");
            btn_ok.onClick = function () {
                wasAccepted = false;
                w.close();
            };
            w.onShow = function () {
                if (inArr.length == 1) {
                    btn_next.enabled = false;
                    btn_prev.enabled = false;
                }
                btn_size_1.onClick = btn_size_2.onClick = btn_size_3.onClick = function () {
                    sizeChoice = (this.key);
                    makeDialog(isModal);
                    wasAccepted = false;
                    w.close();
                };
                dd_dataReports.onChange = function () {
                    var key = this.getValue();
                    if (!key) {
                        return;
                    }
                    stackGroups.forEach(function (m, i) {
                        m.visible = m.key == key;
                        if (m.visible) {
                            if (inArr[i].length > 0) {
                                [].forEach.call(g_viewOptions.children, function (n) {
                                    n.value = n.key == m.children[0].key;
                                    if (n.value) {
                                        btn_save.text = getSaveButtonText(key, n.key);
                                    }
                                });
                            }
                        }
                    });
                };
                r_1.onClick = r_2.onClick = function () {
                    var activeGroup = stackGroups[dd_dataReports.selection.index];
                    var childGroups = activeGroup.children[0].children;
                    var thisKey = this.key;
                    activeGroup.children[0].key = thisKey;
                    [].forEach.call(childGroups, function (m) {
                        m.visible = m.key == thisKey;
                        if (m.visible) {
                            btn_save.text = getSaveButtonText(activeGroup.key, thisKey);
                        }
                    });
                };
                btn_save.onClick = function () {
                    var activeIndex = dd_dataReports.selection.index;
                    if (inArr[activeIndex].length == 0) {
                        return;
                    }
                    var activeName = dd_dataReports.selection.getValue();
                    var activeMode = ([r_1, r_2].filter(function (m) {
                        return m.value;
                    })[0]).key;
                    var displayActiveMode = activeMode.toLowerCase();
                    var fileLoc = newDefaultSaveLocations[activeIndex] + "/" + activeName + "-" + new Date().getTime().toString() + "." + displayActiveMode;
                    var dest = File(fileLoc).saveDlg("Choose location for the '" + activeName + "' ." + displayActiveMode + " file:");
                    if (dest) {
                        newDefaultSaveLocations[activeIndex] = decodeURI(dest.parent.fsName);
                        wasAccepted = true;
                        if (activeMode == keys.JSON && (jArr == undefined || jArr.length <= activeIndex)) {
                            throw Error(errorPrefix + "No JSON string available for data at index " + activeIndex.toString());
                        }
                        var fileContents = (activeMode == keys.CSV) ? grid.stringify(inArr[activeIndex]) : jArr[activeIndex];
                        var writeResult = writeFile(dest.toString(), fileContents);
                        if (ScriptUI.environment.keyboardState.ctrlKey) {
                            if (writeResult) {
                                dest.execute();
                            }
                        }
                    }
                };
                btn_saveAll.onClick = function () {
                    var dest = newDefaultSaveLocations[0];
                    var destFolder = Folder(dest);
                    if (!ch_saveAllJson.value && !ch_saveAllCsv.value) {
                        ch_saveAllCsv.value = true;
                        ch_saveAllJson.value = true;
                    }
                    var usedDest = destFolder.selectDlg("Choose where to save all the report files.");
                    if (!usedDest) {
                        return;
                    }
                    wasAccepted = true;
                    var saveFileCount = 0;
                    var ts = new Date().getTime();
                    names.forEach(function (m, i) {
                        var csvItem = inArr[i];
                        var jsonItem = (jArr && jArr[i]) ? jArr[i] : null;
                        if (ch_saveAllCsv.value) {
                            var csvDest = Folder(usedDest + "/" + m + "-" + ts + "." + keys.CSV.toLowerCase());
                            writeFile(csvDest.toString(), grid.stringify(csvItem));
                            saveFileCount++;
                        }
                        if (ch_saveAllJson.value && jsonItem != null) {
                            var jsonDest = Folder(usedDest + "/" + m + "-" + ts + "." + keys.JSON.toLowerCase());
                            writeFile(jsonDest.toString(), jsonItem);
                            saveFileCount++;
                        }
                    });
                    var msg = "Saved " + saveFileCount + " files to '" + decodeURI(usedDest.fsName) + "'";
                    if (saveFileCount == 0) {
                        msg = "Something went wrong. No files were saved!";
                    }
                    UIHelper.scriptAlert(msg);
                };
                btn_next.onClick = btn_prev.onClick = function () {
                    var isNext = this.text == ">";
                    var currentIndex = dd_dataReports.selection.index;
                    var amt = dd_dataReports.items.length;
                    var usedIndex;
                    if (isNext) {
                        if ((currentIndex + 1) >= amt) {
                            usedIndex = 0;
                        }
                        else {
                            usedIndex = currentIndex + 1;
                        }
                    }
                    else {
                        if ((currentIndex - 1) < 0) {
                            usedIndex = amt - 1;
                        }
                        else {
                            usedIndex = currentIndex - 1;
                        }
                    }
                    dd_dataReports.selection = dd_dataReports.find(dd_dataReports.items[usedIndex].text);
                };
                dd_dataReports.notify("onChange");
                if (inArr.length == 1) {
                    dd_dataReports.selection = null;
                    dd_dataReports.setValue(dd_dataReports.items[0].text);
                    dd_dataReports.notify("onChange");
                }
            };
            w.onClose = function () {
                uiLocation = [this.location[0], this.location[1]];
                if (useSettingsManager) {
                    var res = {
                        gridDataDialogSizeChoice: sizeChoice,
                        gridDataDialogUiLocation: uiLocation,
                        gridDataDialogDefaultSaveLocations: newDefaultSaveLocations
                    };
                    if (!wasAccepted) {
                        delete res.gridDataDialogDefaultSaveLocations;
                    }
                    var settingsScriptName = SETTINGS.scriptName + (SETTINGS.configuration ? SETTINGS.configuration : "");
                    if (typeof (getScriptLabelText) == "function") {
                        settingsScriptName = getScriptLabelText(true);
                    }
                    for (var all in res) {
                        SettingsManager.setScriptTextSetting(settings.settingsManagerWriteFolder, settingsScriptName, all, res[all]);
                    }
                }
                return true;
            };
            if (w.show() == 2) {
                return null;
            }
            else {
                return true;
            }
        }
        ;
        makeDialog(settings && settings.isModal);
    }
};
var CHECKBOX_ICON = {
    "unchecked": "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00<IDATx\u00DAb`\u00A0" +
        "\x11X\x0F\u00C4\u00FF)\u00C4\u00EB\u0091\r\x04\t\x04P\u00E0\u00A0\x00\u00A8\x19(\x06R\n\u00C0f0Q;\u00ECF\r\x1C5p\u00D4\u00C0\u00E1g \u00A5\u00C5\x17m\x0BX\u00AA\x01\u0080\x00\x03\x00\x0B7'\u00F5\u00D3\u00C4k\u00F5" +
        "\x00\x00\x00\x00IEND\u00AEB`\u0082",
    "checked": "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00F2IDATx\u00DA\u00B4" +
        "\u0094\u00DF\r\u00820\x10\u00C6i'p\x04\u009Exv\x04G`\x04\x18\u0081\x11\u00D8@'\u0080\r\u0088\x13\u00E8\x1C}\u00D1\x11\u00DC\x00\u00BF3mr\u009C\x1C\u0096\u00B4^r\u00E9\u00FF_\u00BF\u00F6\u00AE-\u008A?\u00D9\x04" +
        "\u009F\x13}\u00E2@\u00EA\u00A8\x13\x04\u00D5\u009E\u00B1\x00\u00A6\u00DA\u0087ayOUU'\u00F8a\x0F\x05\u00F3\u008F\u00BCm\u00C5\u00F8\x13~\u008B\u0085b\u00DE\u0080\u00E2\u00A5\x02\u009Ds\x04\u00BC\u00C2\x1Frg\x05" +
        "\x16\u00D6\u00A8\n\u00C9\u00CE\u00BE$\u00A5\u00F5\x06\u00AC\u0081\u00F7r\u00EC\x0B\u0088\x1D\u00E9\b\x1D\u009C\u008E=aq\u00A3\u00C0F\u00A9NSH\u00D0\x11\u00C5\u00DD7\u0087p<\x06+\u00D6\u00D4\u0091\x19\x16r##N\u00C7" +
        "\x16\x01+}\u009D\u00D4\u00B5+ic\u00ACv\u00E9X@\nG\u00D6U\u00B2z\u00AF\u00AD\u00B3?2\u00A3\u0093i\u00A1\u00DD]\x14\u00D0\x07\u00E8\"\u00BA\u00FB\u00E8g\u00B3\u0091s\u0094\u0097s\bN\u00F4\u00D3\u00DB\u00B0v\u008F" +
        "\u00BA\u00A8\u00CFAKr\u008D\u0091\u00FD\u00FB\u00CA\u00FE\u00C1f\u00B3\u00B7\x00\x03\x00\u00E0ip\u0096\u009B\u0090\u00B5\u00DF\x00\x00\x00\x00IEND\u00AEB`\u0082"
};
var INITOPTIONS = {
    FoldersAs: "groups",
    ScriptsAs: "buttons",
    FolderOrientation: "vertical",
    FolderRevealMechanism: "radiobuttons",
    ScriptOrientation: "vertical",
    showFolderLabels: true,
    panelButtonSize: "large"
};
var PANELBUTTONSIZES = {
    large: {
        width: 30,
        height: 20
    },
    small: {
        width: 25,
        height: 4
    }
};
var folderViewModes = {
    treeview: {
        type: "treeview",
        width: 200,
        height: 250
    },
    panels: {
        type: "panels",
        value: "panel",
        spacing: 2,
        margins: [2, 4, 2, 2]
    },
    groups: {
        type: "groups",
        value: "group",
        spacing: 2,
        margins: [2, 2, 2, 2]
    }
};
var scriptViewModes = {
    buttons: {
        type: "buttons",
        setup: BUTTONSIZES
    },
    listbox: {
        type: "listbox",
        setup: LISTBOXSIZES
    },
    iconpanels: {
        type: "iconpanels",
        setup: ICONPANELSIZES
    }
};
var imageDisplayModes = {
    buttons: {
        showImage: true,
        kind: "image",
        isSizeable: true
    },
    iconPanels: {
        showImage: true,
        kind: "small",
        isSizeable: true
    },
    listItem: {
        showImage: true,
        kind: "listItem",
        isSizeable: false
    },
    treeviewItem: {
        showImage: true,
        kind: "listItem",
        isSizeable: false
    }
};
var revealMechanisms = {
    radiobuttons: {
        type: "radiobuttons"
    },
    dropdownlist: {
        type: "dropdownlist"
    }
};
var scriptOrientationOptions = {
    vertical: {
        type: "vertical",
        value: "column"
    },
    horizontal: {
        type: "horizontal",
        value: "row"
    }
};
var folderOrientationOptions = {
    vertical: {
        type: "vertical",
        value: "column"
    },
    horizontal: {
        type: "horizontal",
        value: "row"
    },
    stacked: {
        type: "stack",
        value: "stack"
    }
};
var VIEWMODES = {
    panelButtons: {
        size: [
            PANELBUTTONSIZES[INITOPTIONS.panelButtonSize].width,
            PANELBUTTONSIZES[INITOPTIONS.panelButtonSize].height
        ]
    },
    folderViewModes: folderViewModes,
    scriptViewModes: scriptViewModes,
    imageDisplayModes: imageDisplayModes,
    revealMechanisms: revealMechanisms,
    folderOrientationOptions: folderOrientationOptions,
    scriptOrientationOptions: scriptOrientationOptions,
    showMode: {
        FoldersAs: "",
        ScriptsAs: "",
        FolderOrientation: "",
        FolderRevealMechanism: "",
        ScriptOrientation: "",
        showFolderLabels: true
    },
    init: function () {
        this.showMode.FoldersAs = this.folderViewModes[INITOPTIONS.FoldersAs];
        this.panelButtons.size = [
            PANELBUTTONSIZES[INITOPTIONS.panelButtonSize].width,
            PANELBUTTONSIZES[INITOPTIONS.panelButtonSize].height
        ];
        if (INITOPTIONS.FoldersAs == "treeview") {
            this.showMode.ScriptsAs = "N/A";
            this.showMode.FolderOrientation = "N/A";
            this.showMode.FolderRevealMechanism = "N/A";
            this.showMode.ScriptOrientation = "N/A";
            this.showMode.showFolderLabels = INITOPTIONS.showFolderLabels;
        }
        else {
            this.showMode.ScriptsAs = this.scriptViewModes[INITOPTIONS.ScriptsAs];
            this.showMode.FolderOrientation = this.folderOrientationOptions[INITOPTIONS.FolderOrientation];
            this.showMode.FolderRevealMechanism = this.revealMechanisms[INITOPTIONS.FolderRevealMechanism];
            this.showMode.ScriptOrientation = this.scriptOrientationOptions[INITOPTIONS.ScriptOrientation];
            this.showMode.showFolderLabels = INITOPTIONS.showFolderLabels;
        }
    }
};
var BUTTONSIZES = {
    maxWidth: 250,
    maxHeight: 100,
    minWidth: 50,
    minHeight: 15,
    width: 120,
    height: 24,
    characters: 17,
    minCharacters: 8,
    maxCharacters: 80,
    spacing: 2,
    columns: 2,
    rows: 2
};
var BUTTONIMAGESIZES = {
    image: {
        width: 120,
        height: 45,
        maxWidth: 250,
        minWidth: 15,
        maxHeight: 150,
        minHeight: 15
    },
    large: {
        width: 200,
        height: 60,
        maxWidth: 250,
        minWidth: 15,
        maxHeight: 150,
        minHeight: 15
    },
    small: {
        width: 40,
        height: 20,
        maxWidth: 250,
        minWidth: 15,
        maxHeight: 150,
        minHeight: 15
    },
    listItem: {
        width: "N/A",
        height: "N/A"
    },
    treeviewItem: {
        width: "N/A",
        height: "N/A"
    }
};
var LABELSIZES = {
    characters: 20
};
var ICONPANELSIZES = {
    width: 40,
    height: 25,
    characters: 10,
    spacing: 2,
    color: [0.3, 0.3, 0.3],
    columns: 3
};
var LISTBOXSIZES = {
    maxWidth: 300,
    maxHeight: 600,
    minWidth: 100,
    minHeight: 80,
    width: 140,
    height: 80,
    characters: 25,
    minCharacters: 8,
    maxCharacters: 100,
    showTextWithImage: true
};
function loadFromSettingsFile() {
    var settingsFile = File(SETTINGS.settingsFileLocation);
    if (settingsFile.exists) {
        var loadData;
        settingsFile.open('r');
        loadData = JSON.parse(settingsFile.read());
        settingsFile.close();
        for (var thing in loadData) {
            if (thing == SETTINGS.scriptName) {
                if (loadData[SETTINGS.scriptName].hasOwnProperty("initOptions")) {
                    for (var all in loadData[SETTINGS.scriptName].initOptions) {
                        var key = all;
                        INITOPTIONS[key] = loadData[SETTINGS.scriptName].initOptions[key];
                    }
                }
                if (loadData[SETTINGS.scriptName].hasOwnProperty("buttonSizes")) {
                    for (var all in loadData[SETTINGS.scriptName].buttonSizes) {
                        var key = all;
                        BUTTONSIZES[key] = loadData[SETTINGS.scriptName].buttonSizes[all];
                    }
                }
                if (loadData[SETTINGS.scriptName].hasOwnProperty("listboxSizes")) {
                    for (var all in loadData[SETTINGS.scriptName].listboxSizes) {
                        var key = all;
                        LISTBOXSIZES[key] = loadData[SETTINGS.scriptName].listboxSizes[all];
                    }
                }
                if (loadData[SETTINGS.scriptName].hasOwnProperty("windowLocations")) {
                    for (var all in loadData[SETTINGS.scriptName].windowLocations) {
                        var key = all;
                        SETTINGS[key] = loadData[SETTINGS.scriptName].windowLocations[all];
                    }
                }
                if (loadData[SETTINGS.scriptName].hasOwnProperty("panelOptions")) {
                    for (var all in loadData[SETTINGS.scriptName].panelOptions) {
                        var key = all;
                        SETTINGS[key] = loadData[SETTINGS.scriptName].panelOptions[all];
                    }
                }
                if (loadData[SETTINGS.scriptName].hasOwnProperty("treeviewOptions")) {
                    for (var all in loadData[SETTINGS.scriptName].treeviewOptions) {
                        var key = all;
                        VIEWMODES.folderViewModes.treeview[key] = loadData[SETTINGS.scriptName].treeviewOptions[all];
                    }
                }
                if (loadData[SETTINGS.scriptName].hasOwnProperty("imageDisplayModes")) {
                    for (var all in loadData[SETTINGS.scriptName].imageDisplayModes) {
                        var key = all;
                        VIEWMODES.imageDisplayModes[key].showImage = loadData[SETTINGS.scriptName].imageDisplayModes[all].showImage;
                        VIEWMODES.imageDisplayModes[key].kind = loadData[SETTINGS.scriptName].imageDisplayModes[all].kind;
                    }
                }
                if (loadData[SETTINGS.scriptName].hasOwnProperty("buttonImageSizes")) {
                    for (var all in loadData[SETTINGS.scriptName].buttonImageSizes) {
                        var key = all;
                        BUTTONIMAGESIZES[key].width = loadData[SETTINGS.scriptName].buttonImageSizes[all].width;
                        BUTTONIMAGESIZES[key].height = loadData[SETTINGS.scriptName].buttonImageSizes[all].height;
                    }
                }
                VIEWMODES.init();
                break;
            }
        }
    }
}
var SCP_SESSION = (function () {
    function SCP_SESSION() {
        this.os = $.os.match('Windows') ? 'Windows' : 'Mac';
        this.AIVersion = parseInt(app.version.split(/\./)[0]);
        this.scriptVersion = "1.2.7";
        this.scriptFolders = null;
        this.relativeScripts = null;
        this.subFolderScripts = null;
    }
    SCP_SESSION.prototype.dataFileMask = function () {
        return (this.os == 'Windows') ? "*.txt;*.TXT;*.csv;*.CSV;" : function (f) {
            return f instanceof Folder || (f instanceof File && decodeURI(f.name).match(/(\.txt|\.csv)$/i));
        };
    };
    SCP_SESSION.prototype.imageTest = function (parent) {
        var thisIcon;
        try {
            for (var all in ICONS) {
                thisIcon = ICONS[all];
                parent.add("iconbutton", undefined, thisIcon);
                return true;
            }
            ;
            return false;
        }
        catch (e) {
            return false;
        }
        return true;
    };
    SCP_SESSION.prototype.init = function () {
        var scriptFolderItems = getRelativeFolders();
        this.scriptFolders = {
            items: scriptFolderItems,
            getByProp: function (prop, value) { return getByProp(scriptFolderItems, prop, value); }
        };
        var relativeScriptItems = getRelativeScripts();
        this.relativeScripts = {
            items: relativeScriptItems,
            getByProp: function (prop, value) { return getByProp(relativeScriptItems, prop, value); }
        };
        var subFolderScriptItems = getSubFolderScriptObj();
        this.subFolderScripts = {
            items: subFolderScriptItems,
            getByProp: function (prop, value) { return getByProp(subFolderScriptItems, prop, value); }
        };
    };
    return SCP_SESSION;
}());
var SESSION = new SCP_SESSION();
function init() {
    SESSION.init();
    VIEWMODES.init();
    IMAGE_RESOURCES.init();
    loadFromSettingsFile();
}
function setUpAllFolderScriptButtons(parent) {
    var relativeScriptFolderName = decodeURI(Folder(getRelativePath()).name);
    var g_main, lbl_main, panelLabel;
    var scriptAsViewOption = VIEWMODES.showMode.ScriptsAs;
    var relativeScripts = SESSION.relativeScripts;
    var putFolderLabels = (VIEWMODES.showMode.showFolderLabels && (scriptAsViewOption.type) != "listbox");
    var viewModesScriptOrientation = VIEWMODES.showMode.ScriptOrientation;
    var folderAsViewModeValue = VIEWMODES.showMode.FoldersAs;
    var putThisFolderLabel = !getSingleScriptProperty(relativeScripts.items, "showSectionLabel", false);
    if (relativeScripts.items.length > 0) {
        if (folderAsViewModeValue.type == "panels") {
            panelLabel = (putFolderLabels && putThisFolderLabel) ? trimToChars(relativeScriptFolderName, LABELSIZES.characters) : "";
            g_main = parent.add(folderAsViewModeValue.value, undefined, panelLabel);
        }
        else {
            g_main = parent.add("value" in folderAsViewModeValue ? folderAsViewModeValue.value : "group");
            if (putFolderLabels) {
                lbl_main = g_main.add("statictext", undefined, trimToChars(relativeScriptFolderName, LABELSIZES.characters));
            }
            else {
                g_main.helpTip = relativeScriptFolderName;
            }
        }
        g_main.orientation = viewModesScriptOrientation.value;
        g_main.spacing = folderAsViewModeValue.spacing;
        g_main.margins = folderAsViewModeValue.margins;
        g_main.folderName = relativeScriptFolderName;
        if (scriptAsViewOption.type == "listbox") {
            setUpFolderScriptListbox(g_main, relativeScripts);
        }
        else {
            setUpFolderScriptButtons(g_main, relativeScripts);
        }
    }
    var folderCollectionObj = SESSION.subFolderScripts;
    var currentGroupFolder = undefined;
    var currentFolder, lbl_group;
    for (var i = 0; i < folderCollectionObj.items.length; i++) {
        currentFolder = folderCollectionObj.items[i];
        putThisFolderLabel = !getSingleScriptProperty(currentFolder.items, "showSectionLabel", false);
        var ln = currentFolder.items.length;
        if (ln > 0) {
            if (folderAsViewModeValue.type == "panels") {
                panelLabel = (putFolderLabels && putThisFolderLabel) ? trimToChars(currentFolder.name, LABELSIZES.characters) : "";
                currentGroupFolder = parent.add(folderAsViewModeValue.value, undefined, panelLabel);
            }
            else if (folderAsViewModeValue.type == "groups") {
                currentGroupFolder = parent.add(folderAsViewModeValue.value);
                if (putFolderLabels && putThisFolderLabel) {
                    lbl_group = currentGroupFolder.add("statictext", undefined, trimToChars(currentFolder.name, LABELSIZES.characters));
                }
                else {
                    currentGroupFolder.helpTip = currentFolder.name;
                }
            }
            currentGroupFolder.orientation = viewModesScriptOrientation.value;
            currentGroupFolder.spacing = folderAsViewModeValue.spacing;
            currentGroupFolder.margins = folderAsViewModeValue.margins;
            currentGroupFolder.folderName = currentFolder.name;
            if (scriptAsViewOption.type == "listbox") {
                setUpFolderScriptListbox(currentGroupFolder, currentFolder);
            }
            else {
                setUpFolderScriptButtons(currentGroupFolder, currentFolder);
            }
        }
    }
}
var PANELSCRIPT_LOCATION;
var SETTINGS;
function main(title) {
    var supportedAppNames = ["illustrator", "indesign"];
    if (BridgeTalk.appName != "illustrator") {
        alert("Sorry, the application \"" + BridgeTalk.appName + "\" is not supported. This script panel only works in these apps: '" + supportedAppNames.join("', '") + "'.");
        return;
    }
    try {
        PANELSCRIPT_LOCATION = function () {
            if (typeof btScript_MyLocation !== "undefined") {
                return File(btScript_MyLocation);
            }
            var thisFile;
            if (typeof startupLocation != "undefined" && startupLocation != null) {
                thisFile = File(startupLocation);
            }
            else {
                thisFile = File($.fileName);
                if (!thisFile.exists) {
                    thisFile = File(btScript_MyLocation);
                }
            }
            if (!thisFile.exists) {
                throw new Error("Sorry, a script file path for a ScriptPanel2 panel wasn't found!");
            }
            return thisFile;
        }();
    }
    catch (error) {
        alert(error.message);
        return;
    }
    SETTINGS = GET_SETTINGS();
    init();
    var thisPaletteWindow = new SCPPaletteWindow();
    thisPaletteWindow.show();
}
function GET_SETTINGS() {
    var SETTINGS = {
        "scriptVersion": "1.1.0",
        windowGraphics: true,
        syncLocations: true,
        tinyWindowLocation: [860, 350],
        bigWindowLocation: [860, 350],
        title: (title) ? title : decodeURI(PANELSCRIPT_LOCATION.name).replace(".jsx", ""),
        getAllScripts: true,
        confirmRun: true,
        settingsFileLocation: Folder.myDocuments + "/" + "SCRIPTPANEL_SETTINGS.json",
        scriptName: decodeURI(PANELSCRIPT_LOCATION.name).replace(".jsx", "")
    };
    return SETTINGS;
}
function runScriptFromFileInObj(input) {
    var parsedInput = JSON.parse(input);
    var scriptFile = parsedInput.scriptFile, args = parsedInput.args, methodName = parsedInput.methodName, onResult = parsedInput.onResult;
    return runScriptFromFile(scriptFile, args, methodName, onResult);
}
function runScriptFromFile(file, args, methodName, onResult) {
    var sf = file;
    if (!(file instanceof File)) {
        sf = File(file);
    }
    if (!sf.exists) {
        throw new Error("Sorry, it appears that this script file cannot be located at '" + decodeURI(sf.fsName) + "'");
    }
    var tempLocation = Folder(Folder.temp + "/" + ScriptPanel_2.name);
    createDirectoryPath(tempLocation.fsName);
    var copiedLocalFilePath = tempLocation + "/" + getFileNameFromPath(sf.fsName) + ".jsx";
    var copiedLocalFile = File(copiedLocalFilePath);
    var targetScriptTimeFilePath = tempLocation + "/" + getFileNameFromPath(sf.fsName) + "_mod";
    var targetScriptTimeFile = File(targetScriptTimeFilePath);
    var isUnusableMacFile = (SESSION.os == "Mac" && sf.modified === null);
    var targetModTime = !isUnusableMacFile ? sf.modified || new Date() : new Date();
    var useCache = false;
    if (copiedLocalFile.exists && targetScriptTimeFile.exists) {
        var lastTargetModStoredValue = readFile(targetScriptTimeFilePath);
        try {
            var d = new Date(+lastTargetModStoredValue);
            if (d.getTime() == targetModTime.getTime()) {
                useCache = true;
            }
        }
        catch (e) { }
    }
    if (!useCache) {
        sf.copy(copiedLocalFile.fsName);
        writeFile(targetScriptTimeFile.fsName, targetModTime.getTime() + "");
    }
    copiedLocalFile.open('r');
    var scriptString = copiedLocalFile.read().replace(/^(#|\/\/@)target (illustrator|photoshop|indesign|aftereffects)(-\d{1,2})?/, '');
    copiedLocalFile.close();
    var firstFoundTargetDirective = null;
    var scriptStringLines = scriptString.split(/[\r\n]+/g);
    var scriptFuncNameMatch = scriptString.match(/^function\s([^\s]+)\s?\(./m);
    if (!scriptFuncNameMatch) {
        throw new Error("The script was not successfully parsed for its container method name.\n" + scriptString.substr(0, 50));
    }
    var scriptFuncName = scriptFuncNameMatch[1];
    var newScriptLines = [
        "var btScript_MyLocation = \"" + decodeURI(sf.toString()) + "\";",
    ];
    var hasUseGivenMethod = false;
    for (var i = 0; i < scriptStringLines.length; i++) {
        var addThisLine = true;
        var thisScriptLine = scriptStringLines[i];
        if (thisScriptLine.match(/^(#|\/\/@)target/)) {
            if (firstFoundTargetDirective == null) {
                if (!thisScriptLine.includes("targetengine")) {
                    firstFoundTargetDirective = thisScriptLine.replace(/^(#|\/\/@)target /, "").replace(/\s/g, "");
                }
            }
            addThisLine = false;
        }
        var wrapperMethodRX = new RegExp("^(\\s+)?" + scriptFuncName + "(\\s+)?\\(");
        if (thisScriptLine.match(wrapperMethodRX)) {
            var useGivenMethodMatch = scriptString.substring(0, 500).match(/"useGivenMethod"\s?\:\s?true/m);
            if (!useGivenMethodMatch) {
                addThisLine = false;
            }
            else {
                hasUseGivenMethod = true;
            }
        }
        if (addThisLine) {
            newScriptLines.push(thisScriptLine);
        }
    }
    var newScriptString = newScriptLines.join("\n");
    makeBTCall2022(firstFoundTargetDirective || "illustrator", newScriptString, scriptFuncName, hasUseGivenMethod, methodName, args, onResult);
}
function writeSettingsFile(dest, newData) {
    var writeData;
    var settingsFile = File(dest);
    var tinyWindowLocation = SETTINGS.tinyWindowLocation;
    var bigWindowLocation = SETTINGS.bigWindowLocation;
    newData[SETTINGS.scriptName].windowLocations = {
        tinyWindowLocation: [tinyWindowLocation[0], tinyWindowLocation[1]],
        bigWindowLocation: [bigWindowLocation[0], bigWindowLocation[1]]
    };
    try {
        if (settingsFile.exists) {
            settingsFile.open("r");
            writeData = JSON.parse(settingsFile.read());
            settingsFile.close();
            writeData[SETTINGS.scriptName] = newData[SETTINGS.scriptName];
            settingsFile.open("w");
            settingsFile.write(JSON.stringify(writeData));
            settingsFile.close();
        }
        else {
            settingsFile.open("w");
            writeData = {};
            writeData = newData;
            settingsFile.write(JSON.stringify(writeData));
            settingsFile.close();
        }
        alert("Settings file successfully saved in '" + decodeURI(dest) + "'.");
    }
    catch (e) {
        alert(e.message);
    }
}
function getByProp(items, prop, value) {
    var foundItem = null;
    items.forEach(function (m) {
        if (foundItem) {
            return;
        }
        if (m.hasOwnProperty(prop) && (m[prop]) == value) {
            return m;
        }
    });
    return foundItem;
}
function getFolderFolders(folderPath) {
    return Array.from(Folder(folderPath).getFiles(function (f) {
        return f instanceof Folder && f.name.charAt(0) != "_" && f.name != "old";
    }));
}
function getFolderScriptObjs(folderPath) {
    var arr = [];
    var jsxFiles = Folder(folderPath).getFiles(function (f) {
        return f instanceof File && (f.name.substr(f.name.lastIndexOf(".")) == ".jsx" || f.name.substr(f.name.lastIndexOf(".")) == ".js");
    });
    jsxFiles.forEach(function (m, i) {
        var thisJsx = m;
        var thisJsxName = decodeURI(thisJsx.name);
        if (thisJsxName != decodeURI(File(PANELSCRIPT_LOCATION.fsName).name)) {
            var obj = {
                name: "",
                note: "",
                targetApp: "illustrator",
                fileName: thisJsxName,
                image: "",
                path: decodeURI(thisJsx.fsName)
            };
            thisJsx.open('r');
            var str = thisJsx.read();
            var targetRx = /(#|\/\/@)target\s[a-z]+/;
            if (str.match(targetRx)) {
                obj.targetApp = str.match(targetRx)[0].replace(/^(#|\/\/@)target /, "");
            }
            var propObj = getMetaNotes(str);
            if (propObj) {
                if (propObj.hasOwnProperty("scriptPanel_ignore") && propObj.scriptPanel_ignore == true) {
                    return;
                }
                Object.assign(obj, propObj);
                if (!SETTINGS.getAllScripts) {
                    arr.push(obj);
                }
            }
            var auxMetaJSONFile = File(thisJsx.parent + "/" + thisJsxName.replace(/jsx$/ig, "txt"));
            if (auxMetaJSONFile.exists) {
                try {
                    var auxObj = getJsonData(auxMetaJSONFile.fsName);
                    if (auxObj) {
                        Object.assign(obj, auxObj);
                    }
                }
                catch (e) { }
            }
            if (SETTINGS.getAllScripts) {
                arr.push(obj);
            }
            thisJsx.close();
        }
    });
    return arr;
}
function getMetaNotes(str) {
    var rx = /(\/\*{3})([\s\S](?!\*{3}))+/g;
    var propTextMatch = str.match(rx);
    var propText;
    if (propTextMatch != null) {
        propText = propTextMatch[0];
        try {
            var propObj = JSON.parse(propText.replace(/\/?\*{3}\/?/g, "").trim());
            return propObj;
        }
        catch (e) { }
        ;
    }
    return null;
}
function getRelativeFolders() {
    var thisParentFolder = getRelativePath();
    return getFolderFolders(thisParentFolder);
}
function getRelativePath() {
    var thisFile = File(PANELSCRIPT_LOCATION.toString());
    if (!thisFile.exists) {
        alert("Sorry, a script file path for a ScriptPanel2 panel wasn't found!");
    }
    var thisParentFolder = Folder(thisFile.path);
    return thisParentFolder.fsName;
}
function getRelativeScripts() {
    var thisParentFolder = getRelativePath();
    return getFolderScriptObjs(thisParentFolder);
}
function getSubFolderScriptObj() {
    var arr = [];
    var thisFolder;
    var subFolders = getRelativeFolders();
    var folderName;
    for (var i = 0; i < subFolders.length; i++) {
        thisFolder = subFolders[i];
        folderName = decodeURI(thisFolder.name);
        if (folderName.charAt(0) == "_" || folderName == "old") {
            continue;
        }
        arr.push({
            name: decodeURI(thisFolder.name),
            items: getFolderScriptObjs(thisFolder.fsName)
        });
    }
    return arr;
}
function trimToChars(str, amt) {
    if (str.length > amt) {
        return str.substr(0, amt) + "...";
    }
    else {
        return str;
    }
}
var IMAGE_RESOURCES = {
    default_icon: "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00-\b\x02\x00\x00\x00\u00D7\u00D7Y\u00A7\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x04{IDATx\u00DA\u00EC[\u00BBN+A\f\u00DD\u00BDP\u00D3 \x1A\u0094\u00BF \u009F\x11\u0089\x0F\u00A0O\u00C4g\u00D0\u0091\u0096\u008E\u00D4\u00A1NCKM\u0093tIG\x07\x12\x05\u00A2\u00A7\u00CB\u00B5b\u00C5\u00F2\u00B5=\u009E\u00C7nH\u00B2\u00BA.Pvw\x1E\u00DE3\u00F6\x19\u008F\u00BD\u00D4\u00EB\u00F5\u00BA\u00CA\u0097\u00C5b\x01\x7F'\u0093\t\u00DD\u00C1\u00DF\u00C3\u00E1\u0090\u00DF\u00C7K\u00DD\u00E6\u00F1\u00F1\u00B1:B\u00A9\u008B\u00C1\"D8d\u00F3\u00F9\u00FC\u00EA\u00EA\n\u00A1\u00EC\u00F7\u00FBbp\u00BC\x0F\x02m:\x0B\u0096\u00B0#\u008E\u008E\x164\x1C\u00E8r\u00A4\u00888r\u009Ab>>:B8\u00A6hh\x1D\x07k4\x1Ae\x01d\u00DAW\u00D5=Y+)~O\u00E88\u00DF\b\u00FCX\u00EFU@\u0087]\f[\u00E9i\u00CA0\u00FAg\u00D0\r\u00D3\u00EF\x0B)\\\u00EC](\u00F0G\u00BC9la\u00B90\x01\u009Dsb\u00A2-\u00CF\x11p\u00F3z+\u00A3\u008D\u00EC\u00DD\u00C3@mP#\u00A2|\u0081YiS\u00A2\u00EE\u00E8\u0083\u00BE\x1B\u00E2\u00CA\x0F\u00B7\x12b\u0083&>X`V\u00F8\u00EE~\u00C7J\u00B8O\nR\u00E6L\u009C\u00E9\u009C)Q'>\bv\u00D4\u00A3\u00A1\u00E0o\x1C\u0090\u00EE\u009B\u0097\u00BA\u00A3\x1E\u0090/\u00A7P2\x0F\u00ACt\u00B3\na\x14E\u00CA\x04Kl\b4 \x1F\x19\x1B\u00844\u00A4\u00EE\u00BC\u0081\x00\u00CB\u00E9\x18z\u00AA_\u00A4\u00CA\u00DD\x04i\u00B5\u00D3\u00DDSN\u00B9m\u00ACWXp3\u00BD\x06oFS\u0093}Em\u0084+L\u00BD\u00C4%\u0091\u00C3\u009CIS\u00B0\u00B2X,d\\\u0082\u00B0\u00C84\x1C\x1A\x15`E=]4 ,B6\u009E\u00E2\u0086\u00A7\u00ADl%0eb\u00A4\u008E\u00A7\x02:HC\u00C7\u00C9Fh\x04\u00B1fp\x13\u00B4\x14\u009BT\u00FAtN\u00A8\\2B\u0093\b+\u009D\u00AA\u009C \u0088/\u00A9\u00F9Tl)\u00D1\u00DD\u00D6tC\u0093p\u00B5e\u00F9#W\u00AD\u00C4\u00EE\u00E9xq\u00D7C^\bQ\u0089I4\u00A2\u0081@\u0084\u00F7\u00A2\u00F1M\u00FA\u00D3\u00DE\u008D$@\u008Cl:{e\u00B2o\u008B\u0087\u00A7\u0094\x13\u0082\u00BFs\u00D1j\u009Bk\x19]i\u00BE\f\u00A2\u008D\u00C9k|\u00FF\x11\rj\u009Dr\u00CA\n\u00E2M\u00E5\x1C:@\u00CE\x02=p\x16\u00D4I\u00B4\u00A7l\x07jOO\u00CD\u00F0\u00DA\x7FJm\u00F0\u00BD\u00C4Jh=q\u0090\u00A0\u00FE\u0089\u008B\u00BF\x0B\u00FE\u00FA\u00E5\u00A3us\u00C5*\u009FY\u00BA\u0081\u0097X\u00FE\u00E2\u00A4\u0088\x1D:\u00E0\u00D6\u00DE$\u00A5\x056\x7FP\u00B9v\u00C1GmRrsOl\u00B8\u0086\u0087)5\u00E0\u0082\u00CC'X\u008D\u00D2&e\u00F6\u0085\u00CCm\u008E|\u0098\u00B2Z\u00AD^__\u00BF\u00BF\u00BF\u00CF\u00CF\u00CF\u00AF\u00AF\u00AF/..l\u00CB\u00F2\u00C3\u00BC2+\u00E3\x1B\u00F6\x01\u00F2\u00BD\u0096\u00B7\u00B7\u00B7\u00F7\u00F7\u00F7\u009F\u009F\u009F\u0097\u0097\u0097\u0087\u0087\u0087\f\u0082o\u0082\u0097>\x1B\x1F\u00973.\u0097\u00CB\u00FB\u00FB{\x1B\u00AC\u00C4e\x0Fe\x1A\u00A2\u009B\u00E0\x11\x19\x17\nX\u00D6t:\u00B59+k\u00CF2\u00AB>t\u00BC\bq\x13\u00D2\u00DF\u00DEwF\u009E\u00BC\x0E)\u00F3\u00F1\u00F1\u00F1\u00F4\u00F4tss\u00D3\u00EB\u00F5\u00F2\u00EA\u0086\u00A1\r\x18\u00F1B\u0093I!odz\u00D4\u00CFL\u00B7\x17g\x11\n\x04\u00957\u00C1\u00FA\u00FA\u00FA\u009A\u00CDf\u0083\u00C1\u00C0D\u00AA0\u0080\x14\u00E7\u00DB\u00A4\u00D8w\x1B\u00A3\u0084\u00E2\u009D_\u00F3S\u009D\u00C5F\x01v\x07^\u0087\u00E3\u008E\x17:\u0094\u0085\u008Ex\u00D4J\u00EF\x0B\x06E-\u00E9\u0098\u0086\u00D6$\u0086\u00E2_Q\b\u00A3\x13\u008F\u00B4I:}\x05\u0093\u00E8\u0094\u00C1x<\u00E6\u0097\u00B7\u00B7\u00B7ggg-\u00C4\u008D\u009C\u00EC\x13\u00BB\u00EBD\u0092\u00CE\u008D\u0084r\u00F0:\u00A1l>\u00E5I\x18G\u00BD\u0090e%\u00FAG\u0095\u008B\u0094H\u00C6G=H$\u00F0D\x0ED'\u00E1\u00C4\u00FB\u00EB\u00BE\u00D4@\u00A3\u00ECd\u00F4[\x00+\u00DD\u00B2\u00CCzWJ\u00B1\u00DE\u00ACJ\u0084x\u00D3\u00C9g\u0099e4\u0091\u00BF\x1F21\u008D\u00AB\tX\u00A7<\u00FF\x1D%)M\x07\u00F0\u00D7\x19\u0081\u00B2W\u00FA)\x7F\x19\u00CEJ8\x0B\u00E2\u0082\u00E9\u00F9\u00E2\u00AC9\u00C54-\u009F\u00C8\u00FDBnh\u00B5y\u009D&d\u0089f\u009D*\u00B4\u00FD\u0091\u00E3\u0088\u00F4f\u00E8<\u00A0-\u00ABx7L\u00E5\u00AC(X\u00D1\u00C5\x11`9E\u00FCP\u008E\u00DC\u00A1p^\u0082vj\x7F\u00BA\u00F0'\u00CA_\u00FCf\u00A82\u0098R\u00F1\u008C\u0097\u00E1\u00B2\u00AAD\x0E\u00EB\u00FB(;\u00AB\"6J}iv\u00D7@7\u00891k\u0091T\u00C1\u00A2\x1E\u00FF\u00C811+\u008F@`\x14\u00E3\u00A4et\u00A6\\'\u00E0\u009D<\u00BAsiv\u008F~\u00DE\u00D3\u00E8\u00E4@\u00EB\u0090\u009Bb\u00E6\x16\u00BE\u00EE\u00A8\u00C4c\u00D4\u00AC\u00FCL\u0087\u0091\x029\u00D1nrww\u00F7\u00F9\u00F9\u00F9\u00FC\u00FC|yy\t?\u00D2?Q\u00EB\u00D8\u00E7\u00B6Z\u00EA\u00B6\x06\u00EA<R '-\u008E\u0085\u00C6\bR\u00FD\u0097\x1D}\u0081tL\u00D5\u009D\u00DF,\u00D8\u00E1\t\u00E6x\u00FFw\u00E7\u00AF\x00\x03\x00\u00D1\u00A4\u00DC\u00EC\u00A5/E\u0094\x00\x00\x00\x00IEND\u00AEB`\u0082",
    viewOptions: {
        large: '({total:5, ' +
            'shape_4:{fillColor:[0.7, 0.63, 0.63], name:"", tag:"", strokeColor:null, pathPoints:[[30, 20], [0, 20], [0, 0], [30, 0]], ellipsePath:false, closed:true}, ' +
            'shape_3:{fillColor:[1, 1, 1], name:"", tag:"", strokeColor:null, pathPoints:[[30, 0], [0, 0], [0, 10], [30, 10]], ellipsePath:false, closed:true}, ' +
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.33, 0.33, 0.33], pathPoints:[[6, 10], [24, 10]], ellipsePath:false, closed:false, strokeWidth:4}, ' +
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.33, 0.33, 0.33], pathPoints:[[6, 4], [24, 4]], ellipsePath:false, closed:false, strokeWidth:4}, ' +
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.33, 0.33, 0.33], pathPoints:[[6, 16], [24, 16]], ellipsePath:false, closed:false, strokeWidth:4}})',
        small: '({total:1, ' +
            'shape_0:{fillColor:[0.7, 0.63, 0.63], name:"", tag:"", strokeColor:null, pathPoints:[[25, 0], [0, 0], [0, 4], [25, 4]], ellipsePath:false, closed:true}})'
    },
    minimize: {
        large: '({total:3, ' +
            'shape_2:{fillColor:[1, 1, 0.63], name:"", tag:"", strokeColor:null, pathPoints:[[30, 20], [0, 20], [0, 0], [30, 0]], ellipsePath:false, closed:true}, ' +
            'shape_1:{fillColor:[1, 0.82, 0.44], name:"", tag:"", strokeColor:null, pathPoints:[[30, 20], [0, 20], [0, 10], [30, 10]], ellipsePath:false, closed:true}, ' +
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.02, 0, 0.36], pathPoints:[[6, 10], [24, 10]], ellipsePath:false, closed:false, strokeWidth:4}})',
        small: '({total:1, ' +
            'shape_0:{fillColor:[1, 0.82, 0.44], name:"", tag:"", strokeColor:null, pathPoints:[[25, 0], [0, 0], [0, 4], [25, 4]], ellipsePath:false, closed:true}})'
    },
    instructions: {
        large: '({total:4, ' +
            'shape_3:{fillColor:[0.53, 0.82, 0.58], name:"", tag:"", strokeColor:null, pathPoints:[[30, 20], [0, 20], [0, 0], [30, 0]], ellipsePath:false, closed:true}, ' +
            'shape_2:{fillColor:[0.59, 1, 0.71], name:"", tag:"", strokeColor:null, pathPoints:[[30, 0], [0, 0], [0, 10], [30, 10]], ellipsePath:false, closed:true}, ' +
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.13, 0.39, 0], pathPoints:[[10, 7], [12, 3], [18, 3], [20, 6], [20, 8], [15, 12], [15, 14]], ellipsePath:false, closed:false, strokeWidth:2}, ' +
            'shape_0:{fillColor:[0.13, 0.39, 0], name:"", tag:"", strokeColor:null, pathPoints:[14, 16, 3, 3], ellipsePath:true, closed:true}})',
        small: '({total:1, ' +
            'shape_0:{fillColor:[0.59, 1, 0.71], name:"", tag:"", strokeColor:null, pathPoints:[[25, 0], [0, 0], [0, 4], [25, 4]], ellipsePath:false, closed:true}})'
    },
    init: function () { },
    found_icon: null
};
IMAGE_RESOURCES.init = function () {
    var parentFolder = Folder(getRelativePath());
    var thisFoundPNG;
    if (parentFolder.exists) {
        var foundPNGs = parentFolder.getFiles("*.png");
        if (foundPNGs.length > 0) {
            for (var i = 0; i < foundPNGs.length; i++) {
                thisFoundPNG = foundPNGs[i];
                if (decodeURI(thisFoundPNG.name).replace(".png", "") == decodeURI(PANELSCRIPT_LOCATION.name).replace(".jsx", "")) {
                    this.found_icon = thisFoundPNG;
                    break;
                }
            }
        }
    }
};
function getNotes() {
    var fileString;
    PANELSCRIPT_LOCATION.open('r');
    fileString = PANELSCRIPT_LOCATION.read();
    PANELSCRIPT_LOCATION.close();
    try {
        var noteString = fileString.substring(fileString.indexOf("<NOTES"), fileString.lastIndexOf("notes>".toUpperCase()) + 6);
        if (noteString.length == 5) {
            throw new Error("Note string wasn't found, this script is possibly not compiled to embed the #include code blocks.");
        }
        var notesRoot = XML(noteString);
        var msg = "";
        for (var i = 0; i < notesRoot.children().length(); i++) {
            msg += (notesRoot.children()[i].toString().replace(/THREE_STARS_HERE/g, "***") + "\r");
        }
        ;
        quickView(msg, "ScriptPanel_2 " + SETTINGS.scriptVersion + " Usage Instructions");
    }
    catch (e) {
        alert("Notes for '" + decodeURI(PANELSCRIPT_LOCATION.toString()) + "' could not be read.\r" + e);
    }
}
var SCPPaletteWindow = (function () {
    function SCPPaletteWindow() {
        var windowType = "palette";
        var devStr = (PANELSCRIPT_LOCATION.fsName.includes("_DEV") ? " _DEV" : "");
        devStr = (PANELSCRIPT_LOCATION.fsName.includes("_STAGE") ? " _STAGE" : devStr);
        var windowTitle = SETTINGS.title + devStr;
        var w = new Window(windowType, windowTitle, undefined, { closeButton: false, borderless: false });
        this.w = w;
        w.spacing = 2;
        w.margins = [2, 2, 2, 2];
        w.location = SETTINGS.bigWindowLocation;
        var panelButtonSize = VIEWMODES.panelButtons.size;
        var g_btn = w.add("group");
        g_btn.margins = [2, 2, 2, 4];
        var btn_min = drawnIconButton(g_btn, IMAGE_RESOURCES.minimize[INITOPTIONS.panelButtonSize]);
        btn_min.size = panelButtonSize;
        btn_min.helpTip = "minimize";
        btn_min.onClick = function () {
            var loc = (SETTINGS.syncLocations) ? [this.window.location[0], this.window.location[1]] : SETTINGS.tinyWindowLocation;
            SETTINGS.tinyWindowLocation = loc;
            SETTINGS.bigWindowLocation = [this.window.location[0], this.window.location[1]];
            if (ScriptUI.environment.keyboardState.altKey) {
                w.close();
            }
            else {
                try {
                    var thisMiniTab_1 = new MiniTab(SCPPaletteWindow);
                    thisMiniTab_1.mainButton.removeEventListener("mousedown", thisMiniTab_1.mainButton.eventHandler);
                    thisMiniTab_1.mainButton.addEventListener("mousedown", function (ev) {
                        if (ScriptUI.environment.keyboardState.ctrlKey) {
                            thisMiniTab_1.isReset = true;
                            thisMiniTab_1.mainButton.window.onClose = resetScriptPanelData;
                        }
                        thisMiniTab_1.mainButton.runEventHandler();
                    });
                    thisMiniTab_1.show();
                    w.close();
                }
                catch (error) {
                    alert(error.message);
                }
            }
        };
        var btn_viewOptions = drawnIconButton(g_btn, IMAGE_RESOURCES.viewOptions[INITOPTIONS.panelButtonSize]);
        btn_viewOptions.size = panelButtonSize;
        btn_viewOptions.helpTip = "Set view options for this script panel";
        btn_viewOptions.onClick = function () {
            SETTINGS.bigWindowLocation = w.location;
            var newUserViewOptions = viewOptionsDialog();
            if (newUserViewOptions != null) {
                for (var all_1 in newUserViewOptions[SETTINGS.scriptName].initOptions) {
                    var key = all_1;
                    INITOPTIONS[key] = newUserViewOptions[SETTINGS.scriptName].initOptions[all_1];
                }
                for (var all in newUserViewOptions[SETTINGS.scriptName].buttonSizes) {
                    var key = all;
                    BUTTONSIZES[key] = newUserViewOptions[SETTINGS.scriptName].buttonSizes[all];
                }
                for (var all in newUserViewOptions[SETTINGS.scriptName].listboxSizes) {
                    var key = all;
                    LISTBOXSIZES[key] = newUserViewOptions[SETTINGS.scriptName].listboxSizes[all];
                }
                for (var all in newUserViewOptions[SETTINGS.scriptName].panelOptions) {
                    var key = all;
                    SETTINGS[key] = newUserViewOptions[SETTINGS.scriptName].panelOptions[all];
                }
                for (var all in newUserViewOptions[SETTINGS.scriptName].treeviewOptions) {
                    var key = all;
                    VIEWMODES.folderViewModes.treeview[key] = newUserViewOptions[SETTINGS.scriptName].treeviewOptions[all];
                }
                for (var all in newUserViewOptions[SETTINGS.scriptName].imageDisplayModes) {
                    var key = all;
                    VIEWMODES.imageDisplayModes[key].showImage = newUserViewOptions[SETTINGS.scriptName].imageDisplayModes[all].showImage;
                    VIEWMODES.imageDisplayModes[key].kind = newUserViewOptions[SETTINGS.scriptName].imageDisplayModes[all].kind;
                }
                ;
                for (var all in newUserViewOptions[SETTINGS.scriptName].buttonImageSizes) {
                    var key = all;
                    BUTTONIMAGESIZES[key].width = newUserViewOptions[SETTINGS.scriptName].buttonImageSizes[all].width;
                    BUTTONIMAGESIZES[key].height = newUserViewOptions[SETTINGS.scriptName].buttonImageSizes[all].height;
                }
                ;
                VIEWMODES.init();
                var thisPaletteWindow = new SCPPaletteWindow();
                thisPaletteWindow.show();
                w.close();
            }
        };
        var btn_instructions = drawnIconButton(g_btn, IMAGE_RESOURCES.instructions[INITOPTIONS.panelButtonSize]);
        btn_instructions.size = panelButtonSize;
        btn_instructions.helpTip = "Instructions";
        btn_instructions.onClick = function () {
            getNotes();
        };
        var g0 = w.add('group');
        if (VIEWMODES.showMode.FoldersAs == VIEWMODES.folderViewModes.treeview) {
            setUpTreeView(g0, SESSION.relativeScripts, SESSION.subFolderScripts);
        }
        else {
            var g0_1 = g0.add('group');
            g0_1.orientation = VIEWMODES.showMode.FolderOrientation.value;
            g0_1.spacing = VIEWMODES.showMode.FoldersAs.spacing;
            setUpAllFolderScriptButtons(g0_1);
        }
        w.onShow = function () {
        };
    }
    SCPPaletteWindow.prototype.show = function () { this.w.show(); };
    return SCPPaletteWindow;
}());
function scriptPropertiesDialog(scriptObj) {
    var usedName = scriptObj.name || scriptObj.fileName;
    var w = new Window("dialog", usedName + " properties");
    w.spacing = 4;
    var groupMargins = [4, 4, 4, 4];
    w.margins = groupMargins;
    var g0 = w.add("group");
    g0.margins = groupMargins;
    g0.size = [400, 30];
    g0.orientation = "column";
    g0.alignChildren = "middle";
    var g0_1 = g0.add("group");
    g0_1.margins = groupMargins;
    var lbl_name = g0_1.add("statictext", undefined, scriptObj.name, { justify: "center" });
    var metaObj = getMetaNotes(readFile(scriptObj.path));
    var hasPropList = false;
    if (metaObj) {
        hasPropList = true;
        var list_props = w.add("listbox", undefined, [], {
            numberOfColumns: 2,
            showHeaders: false,
            columnWidths: [170, 180]
        });
        list_props.size = [363, 120];
        list_props.populate(Object.entries(metaObj), false, function (listItem, dataItem) {
            var tupleItem = dataItem;
            listItem.text = tupleItem[0];
            listItem.subItems[0].text = tupleItem[1];
        });
    }
    if (scriptObj.hasOwnProperty('note') && scriptObj.note != "") {
        var g1 = w.add("panel", undefined, "Notes");
        g1.size = [400, (hasPropList) ? 100 : 150];
        g1.alignChildren = "fill";
        var disp_notes = g1.add("edittext", undefined, scriptObj.note, { multiline: true });
        disp_notes.size = [382, 172];
    }
    var g_btn = w.add("group");
    var btn_ok = g_btn.add("button", undefined, "Ok");
    w.show();
}
function viewOptionsDialog() {
    var w = new Window("dialog", "Options for: " + SETTINGS.title);
    w.spacing = 4;
    var groupMargins = [4, 4, 4, 4];
    var g_optsOpts = w.add("group");
    var r_pg1 = g_optsOpts.add("radiobutton", undefined, "Item Display");
    r_pg1.value = true;
    var r_pg2 = g_optsOpts.add("radiobutton", undefined, "Image Display");
    w.stackedGroups = {};
    r_pg1.onClick = r_pg2.onClick = function () {
        var win = this.window;
        win.stackedGroups[this.text].visible = true;
        for (var all in win.stackedGroups) {
            if (all != this.text) {
                win.stackedGroups[all].visible = false;
            }
        }
        ;
    };
    var g0s = w.add("group");
    g0s.orientation = "stack";
    var g0s_1 = g0s.add("group");
    g0s_1.orientation = "column";
    w.stackedGroups["Item Display"] = g0s_1;
    var g0 = g0s_1.add("panel", undefined, "Folder Display");
    g0.size = [305, 100];
    g0.alignChildren = "right";
    g0.margins = groupMargins;
    g0.spacing = 2;
    var ch_showFolderLabels = g0.add("checkbox", undefined, "Show Folder Labels");
    ch_showFolderLabels.key = "showFolderLabels";
    ch_showFolderLabels.value = VIEWMODES.showMode.showFolderLabels;
    var g0_1 = g0.add("group");
    g0_1.margins = groupMargins;
    var lbl_folderDisplay = g0_1.add("statictext", undefined, "View Folders As:");
    var disp_folderDisplay = makeDropdownlist(g0_1, Object.keys(VIEWMODES.folderViewModes));
    if (VIEWMODES.showMode.FoldersAs != "N/A") {
        disp_folderDisplay.selection = disp_folderDisplay.find(VIEWMODES.showMode.FoldersAs.type);
    }
    else {
        disp_folderDisplay.selection = disp_folderDisplay.find("treeview");
    }
    disp_folderDisplay.key = "FoldersAs";
    disp_folderDisplay.onChange = function () {
        if (this.selection.text == "treeview") {
            g1_1.visible = false;
            g1_2.visible = true;
            g1_3.visible = false;
        }
        else {
            g1_1.visible = true;
            g1_2.visible = false;
            g1_3.visible = false;
            disp_scriptButtonDisplay.notify("onChange");
        }
    };
    var g0_2 = g0.add("group");
    g0_2.margins = groupMargins;
    var lbl_folderOrientation = g0_2.add("statictext", undefined, "Folder Orientation:");
    var disp_folderOrientation = makeDropdownlist(g0_2, Object.keys(VIEWMODES.folderOrientationOptions).filter(function (m) { return m != "stack"; }));
    if (VIEWMODES.showMode.FolderOrientation != "N/A") {
        disp_folderOrientation.selection = disp_folderOrientation.find(VIEWMODES.showMode.FolderOrientation.type);
    }
    disp_folderOrientation.key = "FolderOrientation";
    disp_folderOrientation.enabled = true;
    var g1 = g0s_1.add("panel", undefined, "Script Display");
    g1.alignChildren = "left";
    g1.margins = groupMargins;
    g1.orientation = "stack";
    g1.spacing = 2;
    var g1_1 = g1.add("group");
    g1_1.orientation = "column";
    g1_1.margins = groupMargins;
    g1_1.spacing = 2;
    g1_1.alignChildren = "right";
    var g0_3 = g1_1.add("group");
    g0_3.margins = groupMargins;
    g0_3.spacing = 2;
    var lbl_scriptButtonDisplay = g0_3.add("statictext", undefined, "Button Display:");
    var disp_scriptButtonDisplay = makeDropdownlist(g0_3, Object.keys(VIEWMODES.scriptViewModes).filter(function (m) { return m != "iconpanels"; }));
    if (VIEWMODES.showMode.ScriptsAs != "N/A") {
        disp_scriptButtonDisplay.selection = disp_scriptButtonDisplay.find(VIEWMODES.showMode.ScriptsAs.type);
    }
    disp_scriptButtonDisplay.key = "ScriptsAs";
    disp_scriptButtonDisplay.enabled = true;
    disp_scriptButtonDisplay.onChange = function () {
        if (this.selection.text == "listbox") {
            g0_5.visible = false;
            g1_3.visible = true;
            disp_scriptButtonOrientation.enabled = false;
        }
        else {
            g0_5.visible = true;
            g1_3.visible = false;
            disp_scriptButtonOrientation.enabled = true;
            disp_scriptButtonOrientation.notify("onChange");
        }
    };
    var g0_4 = g1_1.add("group");
    g0_4.margins = groupMargins;
    var lbl_scriptButtonOrientation = g0_4.add("statictext", undefined, "Button Orientation:");
    var disp_scriptButtonOrientation = makeDropdownlist(g0_4, Object.keys(VIEWMODES.scriptOrientationOptions));
    if (VIEWMODES.showMode.ScriptOrientation != "N/A") {
        disp_scriptButtonOrientation.selection = disp_scriptButtonOrientation.find(VIEWMODES.showMode.ScriptOrientation.type);
    }
    disp_scriptButtonOrientation.key = "ScriptOrientation";
    disp_scriptButtonOrientation.enabled = true;
    disp_scriptButtonOrientation.onChange = function () {
        if (this.selection.text == "horizontal") {
            g0_5_4.visible = false;
            g0_5_5.visible = true;
        }
        else {
            g0_5_4.visible = true;
            g0_5_5.visible = false;
        }
    };
    var g1_3_g0_5_wrap = g1_1.add("group");
    g1_3_g0_5_wrap.orientation = "stack";
    var g1_3 = g1_3_g0_5_wrap.add("group");
    g1_3.visible = false;
    var g0_7 = g1_3.add("panel", undefined, "Listbox Setup");
    g0_7.size = [280, 170];
    g0_7.spacing = 12;
    g0_7.alignChildren = "right";
    g0_7.margins = [4, 20, 6, 6];
    var g0_7_1 = g0_7.add("group");
    var lbl_listboxWidth = g0_7_1.add("statictext", undefined, "Width:");
    var disp_listboxWidth = constrainedSlider(g0_7_1, LISTBOXSIZES.minWidth, LISTBOXSIZES.maxWidth, LISTBOXSIZES.width);
    disp_listboxWidth.key = "width";
    var g0_7_2 = g0_7.add("group");
    var lbl_listboxHeight = g0_7_2.add("statictext", undefined, "Height:");
    var disp_listboxHeight = constrainedSlider(g0_7_2, LISTBOXSIZES.minHeight, LISTBOXSIZES.maxHeight, LISTBOXSIZES.height);
    disp_listboxHeight.key = "height";
    var g0_7_3 = g0_7.add("group");
    var lbl_listboxCharacters = g0_7_3.add("statictext", undefined, "Characters:");
    var disp_listboxCharacters = constrainedSlider(g0_7_3, LISTBOXSIZES.minCharacters, LISTBOXSIZES.maxCharacters, LISTBOXSIZES.characters);
    disp_listboxCharacters.key = "characters";
    var g0_7_4 = g0_7.add("group");
    var ch_showTextWithImage = g0_7_4.add("checkbox", undefined, "Show Label with Image?");
    ch_showTextWithImage.key = "showTextWithImage";
    ch_showTextWithImage.value = LISTBOXSIZES.showTextWithImage;
    ch_showTextWithImage.onClick = function () {
        ch_showTextWithImage_treeview.value = this.value;
    };
    var g0_5 = g1_3_g0_5_wrap.add("panel", undefined, "Button Setup");
    g0_5.margins = groupMargins;
    g0_5.alignChildren = "right";
    var g0_5_1 = g0_5.add("group");
    var lbl_buttonWidth = g0_5_1.add("statictext", undefined, "Button Width:");
    var disp_buttonWidth = constrainedSlider(g0_5_1, BUTTONSIZES.minWidth, BUTTONSIZES.maxWidth, BUTTONSIZES.width);
    disp_buttonWidth.key = "width";
    var g0_5_2 = g0_5.add("group");
    var lbl_buttonHeight = g0_5_2.add("statictext", undefined, "Button Height:");
    var disp_buttonHeight = constrainedSlider(g0_5_2, BUTTONSIZES.minHeight, BUTTONSIZES.maxHeight, BUTTONSIZES.height);
    disp_buttonHeight.key = "height";
    var g0_5_3 = g0_5.add("group");
    var lbl_buttonCharacters = g0_5_3.add("statictext", undefined, "Characters Shown:");
    var disp_buttonCharacters = constrainedSlider(g0_5_3, BUTTONSIZES.minCharacters, BUTTONSIZES.maxCharacters, BUTTONSIZES.characters);
    disp_buttonCharacters.key = "characters";
    var g0_5_45_wrap = g0_5.add("group");
    g0_5_45_wrap.orientation = "stack";
    g0_5_45_wrap.alignChildren = "right";
    var g0_5_4 = g0_5_45_wrap.add("group");
    var lbl_buttonColumns = g0_5_4.add("statictext", undefined, "Button Columns:");
    var disp_buttonColumns = constrainedSlider(g0_5_4, 1, 5, BUTTONSIZES.columns);
    disp_buttonColumns.key = "columns";
    var g0_5_5 = g0_5_45_wrap.add("group");
    var lbl_buttonRows = g0_5_5.add("statictext", undefined, "Button Rows:");
    var disp_buttonRows = constrainedSlider(g0_5_5, 1, 5, BUTTONSIZES.rows);
    disp_buttonRows.key = "rows";
    var g1_2 = g1.add("group");
    g1_2.visible = false;
    var g0_6 = g1_2.add("panel", undefined, "Treeview Setup");
    g0_6.size = [295, 170];
    g0_6.spacing = 12;
    g0_6.alignChildren = "right";
    var g0_6_1 = g0_6.add("group");
    var lbl_treeviewWidth = g0_6_1.add("statictext", undefined, "Width:");
    var disp_treeviewWidth = constrainedSlider(g0_6_1, 100, 300, VIEWMODES.folderViewModes.treeview.width);
    disp_treeviewWidth.key = "width";
    var g0_6_2 = g0_6.add("group");
    var lbl_treeviewHeight = g0_6_2.add("statictext", undefined, " Height:");
    var disp_treeviewHeight = constrainedSlider(g0_6_2, 200, 800, VIEWMODES.folderViewModes.treeview.height);
    disp_treeviewHeight.key = "height";
    var g0_6_3 = g0_6.add("group");
    var ch_showTextWithImage_treeview = g0_6_3.add("checkbox", undefined, "Show Label with Image?");
    ch_showTextWithImage_treeview.value = LISTBOXSIZES.showTextWithImage;
    ch_showTextWithImage_treeview.onClick = function () {
        ch_showTextWithImage.value = this.value;
    };
    var g0s_2 = g0s.add("group");
    g0s_2.orientation = "column";
    g0s_2.spacing = 4;
    w.stackedGroups["Image Display"] = g0s_2;
    w["imageDisplayModes"] = {};
    var g_imgDisp, g_imgDisp_1, ch_show, dd_kind, sep, lbl_kind, isSizeable, imgDispStack, imgDisp_dims, imgDisp_w, imgDisp_h, sl_w, sl_h, lbl_dims_w, lbl_dims_h, buttonImageSize, dd_imgSize;
    var imgDispStackElements = {};
    for (var all in VIEWMODES.imageDisplayModes) {
        var g_imgDisp_0 = g0s_2.add("panel", undefined, unCamelCaseSplit(all));
        g_imgDisp_0.orientation = "column";
        g_imgDisp_0.size = [300, 50];
        g_imgDisp = g_imgDisp_0.add('group');
        ch_show = g_imgDisp.add("checkbox", undefined, "Show Image");
        ch_show.value = VIEWMODES.imageDisplayModes[all].showImage;
        ch_show.key = all;
        ch_show.helpTip = "Choose to only show text for script-button display, or show an image if found (Otherwise still default to text).";
        sep = g_imgDisp.add("group");
        lbl_kind = g_imgDisp.add("statictext", undefined, "Kind:");
        dd_kind = makeDropdownlist(g_imgDisp, Object.keys(BUTTONIMAGESIZES));
        dd_kind.selection = dd_kind.find(VIEWMODES.imageDisplayModes[all].kind);
        dd_kind.key = all;
        lbl_kind.helpTip = dd_kind.helpTip =
            "Choose which image from embedded metadata to display for the '" + all + "' script-button display.\r" +
                ("Such available properties are: " + Object.keys(BUTTONIMAGESIZES) + ".");
        dd_kind.onChange = function () {
            var key = this.key;
            VIEWMODES.imageDisplayModes[key].kind = this.selection.text;
        };
        ch_show.onClick = function () {
            var key = this.key;
            VIEWMODES.imageDisplayModes[key].showImage = this.value;
        };
        w["imageDisplayModes"][all] = {};
        w["imageDisplayModes"][all].ch_showImage = ch_show;
        w["imageDisplayModes"][all].disp_kind = dd_kind;
    }
    var g_imgDispSize = g0s_2.add("panel", undefined, "Image Display Sizing");
    g_imgDispSize.size = [300, 140];
    g_imgDispSize.margins = [2, 25, 2, 2];
    dd_imgSize = makeDropdownlist(g_imgDispSize, Object.keys(BUTTONIMAGESIZES));
    w["buttonImageSizes"] = {};
    imgDispStack = g_imgDispSize.add("group");
    imgDispStack.orientation = "stack";
    for (var that in BUTTONIMAGESIZES) {
        var buttonImagesKey = that;
        buttonImageSize = BUTTONIMAGESIZES[buttonImagesKey];
        imgDisp_dims = imgDispStack.add("group");
        imgDisp_dims.orientation = "column";
        imgDisp_dims.alignChildren = "right";
        imgDisp_dims.key = that;
        w["buttonImageSizes"][buttonImagesKey] = {};
        imgDisp_w = imgDisp_dims.add("group");
        imgDisp_h = imgDisp_dims.add("group");
        if (!isNaN(+buttonImageSize.width) && !isNaN(+buttonImageSize.height)) {
            lbl_dims_w = imgDisp_w.add("statictext", undefined, "Width:");
            var btnSize = buttonImageSize;
            sl_w = constrainedSlider(imgDisp_w, btnSize.minWidth, btnSize.maxWidth, btnSize.width);
            w["buttonImageSizes"][buttonImagesKey].widthElem = sl_w;
            lbl_dims_h = imgDisp_h.add("statictext", undefined, "Height:");
            sl_h = constrainedSlider(imgDisp_h, btnSize.minHeight, btnSize.maxHeight, btnSize.height);
            w["buttonImageSizes"][buttonImagesKey].heightElem = sl_h;
        }
        else {
            lbl_dims_w = imgDisp_w.add("statictext", undefined, "Width: N/A");
            lbl_dims_h = imgDisp_h.add("statictext", undefined, "Height: N/A");
        }
        if (dd_imgSize.selection.text == that) {
            imgDisp_dims.visible = true;
        }
        else {
            imgDisp_dims.visible = false;
        }
    }
    dd_imgSize.onChange = function () {
        for (var i = 0; i < imgDispStack.children.length; i++) {
            var thisChild = imgDispStack.children[i];
            if (thisChild.key == this.selection.text) {
                thisChild.visible = true;
            }
            else {
                thisChild.visible = false;
            }
        }
        ;
    };
    var g2 = w.add("panel", undefined, "Panel Options");
    g2.margins = [4, 12, 6, 4];
    g2.spacing = 4;
    g2.orientation = "column";
    var g2_1 = g2.add("group");
    var ch_confirmRun = g2_1.add("checkbox", undefined, "Confirm To Run");
    ch_confirmRun.key = "confirmRun";
    ch_confirmRun.value = SETTINGS.confirmRun;
    sep = g2_1.add("panel");
    sep.size = [4, 24];
    var ch_syncLocations = g2_1.add("checkbox", undefined, "Minimize in same place");
    ch_syncLocations.key = "syncLocations";
    ch_syncLocations.value = SETTINGS.syncLocations;
    var g2_2 = g2.add("group");
    var lbl_panelButtonSizes = g2_2.add("statictext", undefined, "Panel Button Size");
    var r_panelButtonSmall = g2_2.add("radiobutton", undefined, "Small");
    r_panelButtonSmall.key = "panelButtonSize";
    var r_panelButtonLarge = g2_2.add("radiobutton", undefined, "Large");
    r_panelButtonLarge.key = "panelButtonSize";
    (INITOPTIONS.panelButtonSize == "large") ? r_panelButtonLarge.value = true : r_panelButtonSmall.value = true;
    var UIElements = {
        initOptions: [
            disp_folderDisplay,
            disp_folderOrientation,
            disp_scriptButtonDisplay,
            disp_scriptButtonOrientation,
            ch_showFolderLabels,
            r_panelButtonSmall,
            r_panelButtonLarge
        ],
        buttonSizes: [
            disp_buttonWidth,
            disp_buttonHeight,
            disp_buttonCharacters,
            disp_buttonColumns,
            disp_buttonRows,
        ],
        listboxSizes: [
            disp_listboxHeight,
            disp_listboxWidth,
            disp_listboxCharacters,
            ch_showTextWithImage
        ],
        panelOptions: [
            ch_confirmRun,
            ch_syncLocations
        ],
        treeviewOptions: [
            disp_treeviewWidth,
            disp_treeviewHeight
        ],
        imageDisplayModes: function () {
            var res = {};
            for (var all in w["imageDisplayModes"]) {
                var displayModeKey = all;
                res[displayModeKey] = {
                    showImage: w["imageDisplayModes"][displayModeKey].ch_showImage,
                    kind: w["imageDisplayModes"][displayModeKey].disp_kind
                };
            }
            return res;
        }(),
        buttonImageSizes: function () {
            var res = {};
            for (var all in w["buttonImageSizes"]) {
                var buttonImageSizeKey = all;
                if (w["buttonImageSizes"][buttonImageSizeKey].hasOwnProperty("widthElem") &&
                    w["buttonImageSizes"][buttonImageSizeKey].hasOwnProperty("heightElem")) {
                    res[buttonImageSizeKey] = {
                        width: w["buttonImageSizes"][buttonImageSizeKey].widthElem,
                        height: w["buttonImageSizes"][buttonImageSizeKey].heightElem
                    };
                }
            }
            return res;
        }()
    };
    w.UIElements = UIElements;
    var g_btn = w.add("group");
    var btn_save = g_btn.add("button", undefined, "Save Settings");
    var btn_ok = g_btn.add("button", undefined, "Ok");
    var btn_ccl = g_btn.add("button", undefined, "Cancel");
    btn_save.onClick = function () {
        writeSettingsFile(SETTINGS.settingsFileLocation, getUIData(this.window.UIElements));
    };
    w.onShow = function () {
        r_pg1.notify("onClick");
        disp_folderDisplay.notify("onChange");
        disp_scriptButtonOrientation.notify("onChange");
        disp_scriptButtonDisplay.notify("onChange");
    };
    if (w.show() == 2) {
        return null;
    }
    else {
        return getUIData(w.UIElements);
    }
}
function getScriptButtonImageProps(scriptObj, imgDispModeProp) {
    var scriptImage = "";
    var imgType = "";
    var imageProp = VIEWMODES.imageDisplayModes[imgDispModeProp].kind;
    var showImage = VIEWMODES.imageDisplayModes[imgDispModeProp].showImage;
    if (showImage) {
        if (scriptObj.hasOwnProperty(imageProp) && scriptObj[imageProp] != "") {
            try {
                if (File(scriptObj[imageProp]).exists) {
                    scriptImage = File(scriptObj[imageProp]);
                }
                else if (File(File(scriptObj.path).parent + "/" + scriptObj[imageProp]).exists) {
                    scriptImage = File(File(scriptObj.path).parent + "/" + scriptObj[imageProp]);
                }
                imgType = "fileImage";
            }
            catch (e) {
                scriptImage = "";
            }
        }
        if (scriptObj.hasOwnProperty(imageProp + "_embedded") && scriptObj[imageProp + "_embedded"] != "") {
            try {
                ScriptUI.newImage(decodeURI(scriptObj[imageProp + "_embedded"]));
                scriptImage = decodeURI(scriptObj[imageProp + "_embedded"]);
                imgType = "embeddedImage";
            }
            catch (e) {
                scriptImage = "";
            }
        }
        if (scriptObj.hasOwnProperty(imageProp + "_drawn") && scriptObj[imageProp + "_drawn"] != "") {
            try {
                scriptImage = decodeURI(scriptObj[imageProp + "_drawn"]);
                imgType = "drawnImage";
            }
            catch (e) {
                scriptImage = "";
            }
        }
    }
    return {
        scriptImage: scriptImage,
        imgButtonSize: [BUTTONIMAGESIZES[imageProp].width, BUTTONIMAGESIZES[imageProp].height],
        imgType: imgType
    };
}
function getSingleScriptProperty(scriptGroup, desiredProp, desiredValue) {
    return scriptGroup.find(function (m) { return m.hasOwnProperty(desiredProp) && m[desiredProp] == desiredValue; }) != undefined;
}
function getUIData(UIElements) {
    var data = {
        initOptions: {},
        buttonSizes: {},
        listboxSizes: {},
        panelOptions: {},
        treeviewOptions: {},
        imageDisplayModes: function () {
            var res = {};
            for (var all in UIElements.imageDisplayModes) {
                res[all] = {};
            }
            return res;
        }(),
        buttonImageSizes: function () {
            var res = {};
            for (var all in UIElements.buttonImageSizes) {
                res[all] = {};
            }
            return res;
        }()
    };
    var res = {};
    for (var i = 0; i < UIElements.initOptions.length; i++) {
        if (UIElements.initOptions[i].type == "dropdownlist") {
            data.initOptions[UIElements.initOptions[i].key] = UIElements.initOptions[i].selection.text;
        }
        else if (UIElements.initOptions[i].type == "checkbox") {
            data.initOptions[UIElements.initOptions[i].key] = UIElements.initOptions[i].value;
        }
        else if (UIElements.initOptions[i].type == "radiobutton") {
            if (UIElements.initOptions[i].value === true) {
                data.initOptions[UIElements.initOptions[i].key] = UIElements.initOptions[i].text.toLowerCase();
            }
        }
    }
    ;
    for (var i = 0; i < UIElements.buttonSizes.length; i++) {
        data.buttonSizes[UIElements.buttonSizes[i].key] = UIElements.buttonSizes[i].value * 1;
    }
    ;
    for (var i = 0; i < UIElements.listboxSizes.length; i++) {
        var val = UIElements.listboxSizes[i].value;
        data.listboxSizes[UIElements.listboxSizes[i].key] = (typeof val == "string" || typeof val == "number") ? (val * 1) : val;
    }
    ;
    for (var i = 0; i < UIElements.panelOptions.length; i++) {
        data.panelOptions[UIElements.panelOptions[i].key] = UIElements.panelOptions[i].value;
    }
    ;
    for (var i = 0; i < UIElements.treeviewOptions.length; i++) {
        data.treeviewOptions[UIElements.treeviewOptions[i].key] = UIElements.treeviewOptions[i].value * 1;
    }
    ;
    for (var all in UIElements.imageDisplayModes) {
        var key = all;
        data.imageDisplayModes[all].showImage = UIElements.imageDisplayModes[key].showImage.value;
        data.imageDisplayModes[all].kind = UIElements.imageDisplayModes[key].kind.selection.text;
    }
    ;
    for (var all in UIElements.buttonImageSizes) {
        var key = all;
        data.buttonImageSizes[all].width = UIElements.buttonImageSizes[key].width.value;
        data.buttonImageSizes[all].height = UIElements.buttonImageSizes[key].height.value;
    }
    ;
    res[SETTINGS.scriptName] = data;
    return res;
}
function putSpacer(parent) {
    var spacer = parent.add("group");
    spacer.size = [2, 2];
    spacer.margins = [0, 0, 0, 0];
    return spacer;
}
function resetScriptPanelData() {
    eval("#include \"" + PANELSCRIPT_LOCATION.fsName.replace(/\\/g, "/") + "\"");
    return true;
}
function setUpFolderScriptButtons(parent, scriptCollectionObj) {
    var i = 0, buttonText, g;
    var sco = scriptCollectionObj;
    parent.spacing = BUTTONSIZES.spacing;
    var _loop_2 = function () {
        var thisScript = sco.items[i];
        if (thisScript.hasOwnProperty("sectionColor")) {
            try {
                if (typeof thisScript.sectionColor == "string" && thisScript.sectionColor.startsWith("#")) {
                    thisScript.sectionColor = getUIRGB("RGB", hexToRgb(thisScript.sectionColor));
                }
                parent.setBg(thisScript.sectionColor);
            }
            catch (e) {
            }
        }
        if (VIEWMODES.showMode.ScriptOrientation.type == "vertical") {
            if (BUTTONSIZES.columns == 1) {
                g = parent;
            }
            else {
                if (i % BUTTONSIZES.columns == 0) {
                    g = parent.add("group");
                    g.margins = VIEWMODES.showMode.FoldersAs.margins;
                    g.spacing = BUTTONSIZES.spacing;
                }
            }
        }
        else {
            if (BUTTONSIZES.rows == 1) {
                g = parent;
            }
            else {
                if (i % BUTTONSIZES.rows == 0) {
                    g = parent.add("group");
                    g.orientation = "column";
                    g.margins = VIEWMODES.showMode.FoldersAs.margins;
                    g.spacing = BUTTONSIZES.spacing;
                }
            }
        }
        buttonText = thisScript.name || thisScript.fileName;
        buttonText = trimToChars(buttonText, BUTTONSIZES.characters);
        var btn = void 0;
        var scriptImage = "";
        var imgButtonSize = void 0;
        var scriptButtonImageProps = getScriptButtonImageProps(thisScript, "buttons");
        scriptImage = scriptButtonImageProps.scriptImage;
        imgButtonSize = scriptButtonImageProps.imgButtonSize;
        if (isNaN(imgButtonSize[0]) || isNaN(imgButtonSize[1])) {
            imgButtonSize = [BUTTONIMAGESIZES["image"].width, BUTTONIMAGESIZES["image"].height];
        }
        if (scriptImage != "") {
            if (scriptButtonImageProps.imgType == "drawnImage") {
                btn = g.add("button", undefined, buttonText);
                btn.onDraw = function () {
                    try {
                        drawFromObjString(scriptImage, this);
                    }
                    catch (e) {
                    }
                };
            }
            else {
                btn = g.add("iconbutton", undefined, ScriptUI.newImage(scriptImage));
            }
            btn.size = imgButtonSize;
        }
        else {
            btn = g.add("button", undefined, buttonText);
            btn.size = [BUTTONSIZES.width, BUTTONSIZES.height];
        }
        btn.scriptObj = thisScript;
        if (thisScript.hasOwnProperty("note") && thisScript.note != "") {
            btn.helpTip = thisScript.note;
        }
        btn.onClick = function () {
            var thisScript = this.scriptObj;
            var thisScriptPath = thisScript.path;
            if (ScriptUI.environment.keyboardState.altKey) {
                scriptPropertiesDialog(thisScript);
            }
            else {
                try {
                    runScriptFromFile(File(thisScriptPath));
                }
                catch (e) {
                    quickView(ScriptPanel_2.name + " Script Execution Error: " + e.message);
                }
                deFocusPanel();
            }
        };
        i++;
    };
    while (i < sco.items.length) {
        _loop_2();
    }
}
function setUpFolderScriptListbox(parent, scriptCollectionObj) {
    var i = 0, sco = scriptCollectionObj, buttonText, g;
    var props = {};
    if (VIEWMODES.showMode.showFolderLabels && !getSingleScriptProperty(sco.items, "showSectionLabel", false)) {
        props = {
            multiselect: false,
            numberOfColumns: 1,
            showHeaders: true,
            columnTitles: [parent.folderName]
        };
    }
    else {
        props = {
            multiselect: false
        };
    }
    var listBox = parent.add("listbox", undefined, [], props);
    listBox.size = [LISTBOXSIZES.width, LISTBOXSIZES.height];
    while (i < sco.items.length) {
        var thisScript = sco.items[i];
        if (thisScript.hasOwnProperty("sectionColor")) {
            try {
                parent.setBg(thisScript.sectionColor);
            }
            catch (e) {
            }
        }
        buttonText = thisScript.name || thisScript.fileName;
        buttonText = trimToChars(buttonText, LISTBOXSIZES.characters);
        var btn;
        var scriptImage = "";
        var scriptButtonImageProps = getScriptButtonImageProps(thisScript, "listItem");
        scriptImage = scriptButtonImageProps.scriptImage;
        btn = listBox.add("item");
        if (scriptImage != "") {
            btn.image = ScriptUI.newImage(scriptImage);
            if (LISTBOXSIZES.showTextWithImage) {
                btn.text = buttonText;
            }
        }
        else {
            btn.text = buttonText;
        }
        btn.scriptObj = thisScript;
        btn.path = thisScript.path;
        i++;
    }
    listBox.onDoubleClick = function () {
        if (this.selection != null && this.selection.hasOwnProperty("path")) {
            try {
                runScriptFromFile(File(this.selection.path));
            }
            catch (error) {
                quickView(ScriptPanel_2.name + " Script Execution Error: " + error.message);
            }
            deFocusPanel();
        }
    };
}
function setUpTreeView(parent, scriptCollectionObj, folderCollectionObj) {
    var t = parent.add('treeview', undefined, []);
    t.size = [VIEWMODES.folderViewModes.treeview.width, VIEWMODES.folderViewModes.treeview.height];
    var currentFolder, currentScript, currentTreeFolder, currentTreeScript, treeScriptName;
    if (scriptCollectionObj.items.length > 0) {
        currentTreeFolder = t.add('node', decodeURI(getRelativePath()));
        for (var i = 0; i < scriptCollectionObj.items.length; i++) {
            currentScript = scriptCollectionObj.items[i];
            treeScriptName = currentScript.name || currentScript.fileName;
            currentTreeScript = currentTreeFolder.add('item', treeScriptName);
            currentTreeScript.path = currentScript.path;
        }
    }
    for (var i = 0; i < folderCollectionObj.items.length; i++) {
        currentFolder = folderCollectionObj.items[i];
        var ln = currentFolder.items.length;
        if (ln > 0) {
            currentTreeFolder = t.add('node', currentFolder.name);
            for (var j = 0; j < ln; j++) {
                currentScript = currentFolder.items[j];
                treeScriptName = currentScript.name || currentScript.fileName;
                currentTreeScript = currentTreeFolder.add('item');
                var scriptImage = getScriptButtonImageProps(currentScript, "treeviewItem").scriptImage;
                if (scriptImage != "") {
                    currentTreeScript.image = ScriptUI.newImage(scriptImage);
                    if (LISTBOXSIZES.showTextWithImage) {
                        currentTreeScript.text = treeScriptName;
                    }
                }
                else {
                    currentTreeScript.text = treeScriptName;
                }
                currentTreeScript.scriptObj = currentScript;
                if (currentScript.hasOwnProperty("note") && currentScript.note != "") {
                    currentTreeScript.helpTip = currentScript.note;
                }
                currentTreeScript.path = currentScript.path;
            }
        }
    }
    t.onDoubleClick = function () {
        if (this.selection != null && this.selection.hasOwnProperty("path")) {
            try {
                runScriptFromFile(File(this.selection.path));
            }
            catch (e) {
                quickView(ScriptPanel_2.name + " Script Execution Error: " + e.message);
            }
            deFocusPanel();
        }
    };
}

	main(title);
};
ScriptPanel_2();