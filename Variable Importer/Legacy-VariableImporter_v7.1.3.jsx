/**
* @@@BUILDINFO@@@ VariableImporter.jsx !Version! Tue Dec 15 2015 03:06:17 GMT-0600
*/

/*
    ============================= VARIABLE IMPORTER Version 7.1.3 ==============================
    By Vasily Hall
    e:
    vasily.hall@gmail.com
    LinkedIn:
    https://www.linkedin.com/pub/vasily-hall/18/166/912?trk=biz_employee_pub
    
    Thanks To:
    *Hans Boon / testing on multiple versions, workstations & platforms
    *Stephen Marsh / http://prepression.blogspot.com/
    *Andy VanWagoner's CSV Parser / http://stackoverflow.com/users/1701761/andy-vanwagoner
    *Alber Bassa / '\\' line-break character suggestion
    *John Garrett / http://hypertransitory.com/
    *Dmitriy Gritsenko / help with multiple graph-data import
    *Norbert Gindl / user testing multiple graph-data import
    * The great people of Adobe Scripting Forums
    
    ----------------------------------------------- Version Notes: ----------------------------------------------------------------------
    +BUILDINFO@@@ VariableImporter.jsx !Version! Fri Aug 28 2015 12:40:33 GMT-0500 (v7.1.0)
    ^^^ Fixed file-path bug for using linked files & graph data without prepend-path option.
    
    +BUILDINFO@@@ VariableImporter_Current.jsx !Version! Mon Jul 06 2015 12:37:44 GMT-0500
    ^^^ Feature Edit: use "\\\\" 4 backslashes to force a blank line-break.
    
    +BUILDINFO@@@ VariableImporter.jsx !Version! Mon Jul 06 2015 12:25:21 GMT-0500 (v7.0.4)
    ^^^ New Feature: use "\\" double-backslashes to create line-breaks in a text-variable's content.

    +BUILDINFO@@@ VariableImporter.jsx !Version! Wed Jul 01 2015 07:38:38 GMT-0500
    ^^^ New Feature: graph variable support through individual graph-data .txt files.
          Horizontal layout for screens shorter than 800 px.
    
    +BUILDINFO@@@ VariableImporter.jsx !Version! Sun May 31 2015 07:04:06 GMT-0500
    ^^^ fixed scrolling for up to 200 variables and auto-display first dataset.
    
    +BUILDINFO@@@ VariableImporter.jsx !Version! Thu Apr 23 2015 22:57:53 GMT-0500 (v6.1)
    ^^^ New feature: controls panel with more options. Prepend path to all linked files, Custom pre-set dataset XML destination,
        Ability to save a personal settings file with presets for window selection pre-filling. Reference links and Social Media links.
    
    +BUILDINFO@@@ VariableImporter.jsx !Version! Fri Apr 17 2015 09:10:38 GMT-0500 (v5.1)
    ^^^ New feature: prepend a chosen folder path to any linked-file variable.
    
    +BUILDINFO@@@ VariableImporter.jsx !Version! Mon Mar 23 2015 13:16:18 GMT-0500
    ^^^ Added statement for XML UTF-8 encoding, thanks to Hans Boon.
    
    +BUILDINFO@@@ VariableImporter.jsx !Version! Wed Mar 18 2015 21:46:18 GMT-0500
    ^^^ Add blank character cells to complete rows with less cells than the header row.
    
    +BUILDINFO@@@ VariableImporter.jsx !Version! Tue Mar 03 2015 02:12:03 GMT-0600
    ^^^ Auto-binding suggested by Stephen Marsh- bind by name, note, or tag- binds all found instances.
    
    +BUILDINFO@@@ VariableImporter_X.jsx !Version! Mon Mar 02 2015 09:56:04 GMT-0600
    ^^^ Now uses Andy VanWagoner's parser to split text contents of a cell into <p> paragraphs. Unfortunately, AI can't read as blank line for <p></p> with only whitespaces.
    
    ---------------------------------------------------- End Notes: ----------------------------------------------------------------------
    
    Now, just import Adobe Illustrator variables using a tab-delimited (*.txt) or comma-delimited (.csv) file just like in Indesign.
    1) Make a .txt (tab-delimited), or .csv data file with a heading row as the first row. (Optional)
    2) Assign appropriate column names -- they will become Illustrator Variable names. (Optional)
            To use a column for its text as a variable, just use a regular column name of your choice, without symbols @ and #.
            To use a column for its file-path content as a variable, use a "@" at-symbol in front of the name of your choice.
            To use a column for its visibility (In Illustrator layers panel) as a variable, use a "#" pound-symbol in front of the name of your choice.
            To use a column for its file-path to a text file with graph data as a graph variable, use a "%" percent symbol in front of the intended name.
    3) Import your data file using this script. (Browse file dialog will appear)
    4) A dialog appears with options:
            An option to keep the .xml file which is created as part of this operation.
            An option to select a name for each of the records by using a column's data, or custom naming.
            Press OK, when done.
    5) Your variables are in, you are free to do what you want next. - OR - the import failed, so please make sure each of the variable names and each of the dataset names are not identical,etc.
*/

/*
    The MIT License (MIT)

    Copyright (c) 2015 Vasily Hall

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE. 
*/
function VariableImporter(){
    DropDownList.prototype.selectWell = function(){
        //CC will let you select null
        this.addEventListener('change', function(){
            if(this.selection == null){
                this.selection = this.items[0];
            }
        });
    }
    var UIElements=[Window,Group,EditText,Panel];
    for(var i=0; i<UIElements.length; i++){
        UIElements[i].prototype.setBg=function(rgb){
            this.graphics.backgroundColor=this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR,[rgb[0],rgb[1],rgb[2]]);
        }
    }
    function trimString(str){
        return str.replace(/^\s*/g,'').replace(/\s*$/g,'');
    }
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
                    var rx = new RegExp("["+splitter+"\\r"+"\\n\"");
                    if (rx.test(cell)) { cell = '"' + cell.replace(/"/g, '""') + '"'; }
                    csv += (cell || 0 === cell) ? cell : '';
                }
            }
            return csv;
        }
    };
    function stringXmlSafe(str){
        str=str.toString();
        str=str.replace(/&(?!(amp;|gt;|lt;|quot;|apos;))/g,"&amp;");
        str=str.replace(/</g,"&lt;");
        str=str.replace(/>/g,"&gt;");
        str=str.replace(/'/g,"&apos;");
        str=str.replace(/"/g,"&quot;");
        return str;
    }
    function wrapCDATA(str, propNm){
        str = '<data>'+str+'</data>';
        str = str.replace(/(\<data\>)/g, '<'+propNm+'><![CDATA[');
        str = str.replace(/(\<\/data\>)/g,']]\>'+'</'+propNm+'>');
        return XML(str);
    }
    function drawFromObjString(objString, canvasArea){
        function round2(num){
            return Math.round(num*100)/100;
        }
        function drawPath(shp){
            var thisShp=shp;
            if(thisShp.ellipsePath!=true){
                var vectorPts=thisShp.pathPoints;
                canvas.newPath();
                canvas.moveTo(thisShp.pathPoints[0][0],thisShp.pathPoints[0][1]);
                for(var j=0; j<vectorPts.length; j++){
                    var thisAnchor=vectorPts[j];
                    var x=thisAnchor[0], y=thisAnchor[1];
                    canvas.lineTo(x,y);
                }
                if(thisShp.closed==true){
                    canvas.closePath();
                }
            } else {
                var cirPts=thisShp.pathPoints;
                canvas.newPath();
                canvas.ellipsePath(round2(cirPts[0]), round2(cirPts[1]), round2(cirPts[2]), round2(cirPts[3]));
                canvas.closePath();
            }
            if(thisShp.fillColor!=null){
                var clr=thisShp.fillColor;
                var myBrush=canvas.newBrush(canvas.BrushType.SOLID_COLOR,clr);
                canvas.fillPath(myBrush);
            }
            if(thisShp.strokeColor!=null){
                var clr=thisShp.strokeColor;
                var myPen=canvas.newPen(canvas.PenType.SOLID_COLOR,[clr[0],clr[1],clr[2],1], thisShp.strokeWidth);
                canvas.strokePath(myPen);
            }
        }
        //$.writeln(objString.replace(/'\+\n*\r*'/g,'').replace(/(^'|';$)/g,''));
        var obj=eval(objString.replace(/'\+\n*\r*'/g,'').replace(/(^'|';$)/g,''));
        var canvas=canvasArea.graphics;
        var counter=obj.total;
        while(counter>=0){
            for(all in obj){
                if(all.match(/\d{1,2}$/g) && all.match(/\d{1,2}$/g)==counter){
                    var thisShp=obj[all];
                    if(all.match('group')){
                        var ctr=obj[all].total;
                        while(ctr>=0){
                            for(paths in obj[all]){
                                if(paths.match(/\d{1,2}$/g) && paths.match(/\d{1,2}$/g)==ctr){
                                    drawPath(obj[all][paths]);
                                }
                            }
                            ctr--;
                        }
                    } else {
                        drawPath(thisShp);
                    }
                }
            }
            counter-=1;
        }
    }
    var ICONS = {
        grf : '({total:16, '+
            'shape_15:{fillColor:null, name:"", tag:"", strokeColor:[0.6, 0.6, 0.6], pathPoints:[[3, 4], [42, 4]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_14:{fillColor:null, name:"", tag:"", strokeColor:[0.6, 0.6, 0.6], pathPoints:[[3, 12], [42, 12]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_13:{fillColor:null, name:"", tag:"", strokeColor:[0.6, 0.6, 0.6], pathPoints:[[3, 19], [42, 19]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_12:{fillColor:null, name:"", tag:"", strokeColor:[0.6, 0.6, 0.6], pathPoints:[[3, 27], [42, 27]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_11:{fillColor:null, name:"", tag:"", strokeColor:[0.6, 0.6, 0.6], pathPoints:[[3, 34], [42, 34]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_10:{fillColor:null, name:"", tag:"", strokeColor:[0.6, 0.6, 0.6], pathPoints:[[3, 42], [42, 42]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_9:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[42, 2], [42, 41], [3, 41], [3, 2], [2, 2], [2, 43], [43, 43], [43, 2]], ellipsePath:false, closed:true}, '+
            'shape_8:{fillColor:[0.93, 0.12, 0.47], name:"", tag:"", strokeColor:null, pathPoints:[[12, 41], [5, 41], [5, 19], [12, 19]], ellipsePath:false, closed:true}, '+
            'shape_7:{fillColor:[0.97, 0.58, 0.12], name:"", tag:"", strokeColor:null, pathPoints:[[40, 41], [33, 41], [33, 19], [40, 19]], ellipsePath:false, closed:true}, '+
            'shape_6:{fillColor:[0.16, 0.67, 0.89], name:"", tag:"", strokeColor:null, pathPoints:[[31, 41], [24, 41], [24, 29], [31, 29]], ellipsePath:false, closed:true}, '+
            'shape_5:{fillColor:[0.76, 0.15, 0.18], name:"", tag:"", strokeColor:null, pathPoints:[[22, 41], [14, 41], [14, 12], [22, 12]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:null, name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[3, 26], [9, 30], [18, 15], [27, 37], [36, 21], [42, 18]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_3:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[7, 29, 3, 3], ellipsePath:true, closed:true}, '+
            'shape_2:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[16, 13, 3, 3], ellipsePath:true, closed:true}, '+
            'shape_1:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[26, 35, 3, 3], ellipsePath:true, closed:true}, '+
            'shape_0:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[35, 20, 3, 3], ellipsePath:true, closed:true}})',
        vis : '({total:1, '+
            'group_0:{'+
            'shape_2:{fillColor:[0.92, 1, 1], name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[44, 22], [42, 24], [38, 27], [32, 30], [23, 32], [12, 30], [5, 27], [2, 24], [3, 21], [8, 18], [14, 15], [23, 13], [31, 15], [37, 18], [42, 21]], ellipsePath:false, closed:true, strokeWidth:2}, '+
            'shape_1:{fillColor:[0.56, 1, 1], name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[13, 13, 18, 18], ellipsePath:true, closed:true, strokeWidth:1}, '+
            'shape_0:{fillColor:[0.84, 1, 1], name:"", tag:"", strokeColor:null, pathPoints:[15, 15, 10, 10], ellipsePath:true, closed:true}, total:3}})',
        txt : '({total:1, '+
            'shape_0:{fillColor:[0, 0, 0], name:"", tag:"", strokeColor:null, pathPoints:[[42, 1], [42, 12], [42, 12], [39, 8], [37, 5], [34, 3], [29, 3], [27, 3], [27, 4],'+
            ' [27, 39], [27, 42], [28, 42], [31, 43], [37, 43], [37, 44], [8, 44], [8, 43], [14, 43], [17, 42], [18, 42], [19, 39], [19, 5], [18, 3], [17, 3], [13, 3], [9, 5], [6, 8], [4, 12], [3, 12], [3, 1]], ellipsePath:false, closed:true}})',
        lnk : '({total:16, '+
            'shape_15:{fillColor:[0.62, 0.44, 0], name:"", tag:"", strokeColor:null, pathPoints:[[43, 43], [2, 43], [2, 2], [43, 2]], ellipsePath:false, closed:true}, '+
            'shape_14:{fillColor:[0, 0.19, 1], name:"", tag:"", strokeColor:null, pathPoints:[[39, 39], [6, 39], [6, 6], [39, 6]], ellipsePath:false, closed:true}, '+
            'shape_13:{fillColor:[0.75, 1, 0.96], name:"", tag:"", strokeColor:null, pathPoints:[[39, 22], [6, 22], [6, 6], [39, 6]], ellipsePath:false, closed:true}, '+
            'shape_12:{fillColor:[0.93, 1, 0.12], name:"", tag:"", strokeColor:null, pathPoints:[8, 8, 7, 7], ellipsePath:true, closed:true}, '+
            'shape_11:{fillColor:[0.93, 1, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[[17, 21], [21, 32], [26, 34], [26, 20]], ellipsePath:false, closed:true}, '+
            'shape_10:{fillColor:[0.53, 0.79, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[[36, 21], [31, 32], [26, 34], [26, 20]], ellipsePath:false, closed:true}, '+
            'shape_9:{fillColor:[0.53, 0.79, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[[26, 20], [17, 21], [21, 16], [26, 16], [31, 16], [36, 21]], ellipsePath:false, closed:true}, '+
            'shape_8:{fillColor:[0.53, 0.79, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[[26, 19], [22, 18], [24, 11], [26, 10], [29, 11], [31, 18]], ellipsePath:false, closed:true}, '+
            'shape_7:{fillColor:[0.93, 1, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[[26, 19], [22, 18], [24, 11], [26, 10]], ellipsePath:false, closed:false}, '+
            'shape_6:{fillColor:[0.53, 0.79, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[22, 21, 3, 3], ellipsePath:true, closed:true}, '+
            'shape_5:{fillColor:[0.93, 1, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[28, 21, 3, 3], ellipsePath:true, closed:true}, '+
            'shape_4:{fillColor:[0.53, 0.79, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[27, 21, 3, 3], ellipsePath:true, closed:true}, '+
            'shape_3:{fillColor:null, name:"", tag:"", strokeColor:[0.53, 0.79, 0.86], pathPoints:[[23, 24], [23, 26]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.53, 0.79, 0.86], pathPoints:[[21, 25], [21, 26], [25, 26], [26, 25]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_1:{fillColor:[0.53, 0.79, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[[26, 15], [24, 15], [25, 12], [26, 12], [27, 12], [28, 15]], ellipsePath:false, closed:true}, '+
            'shape_0:{fillColor:[0.93, 1, 0.86], name:"", tag:"", strokeColor:null, pathPoints:[[26, 14], [25, 14], [26, 12], [26, 12], [27, 12], [27, 14]], ellipsePath:false, closed:true}})',
        menu : '({total:3, '+
            'group_2:{'+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.5, 0.5, 0.5], pathPoints:[[3, 6], [27, 6]], ellipsePath:false, closed:false, strokeWidth:2}, '+
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.5, 0.5, 0.5], pathPoints:[[3, 15], [27, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.5, 0.5, 0.5], pathPoints:[[3, 24], [27, 24]], ellipsePath:false, closed:false, strokeWidth:2}, total:3}, '+
            'group_1:{'+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.95, 0.95, 0.95], pathPoints:[[3, 5], [27, 5]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.95, 0.95, 0.95], pathPoints:[[3, 14], [27, 14]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.95, 0.95, 0.95], pathPoints:[[3, 23], [27, 23]], ellipsePath:false, closed:false, strokeWidth:1}, total:3}, '+
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.95, 0.95, 0.95], pathPoints:[[30, 30], [0, 30], [0, 0], [30, 0]], ellipsePath:false, closed:true, strokeWidth:2}})',
        menu_2 : '({total:3, '+
            'shape_2:{fillColor:[0.05, 0.05, 0.05], name:"", tag:"", strokeColor:[0.84, 0.85, 0.88], pathPoints:[[30, 30], [0, 30], [0, 0], [30, 0]], ellipsePath:false, closed:true, strokeWidth:2}, '+
            'group_1:{'+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.5, 0.5, 0.5], pathPoints:[[3, 6], [27, 6]], ellipsePath:false, closed:false, strokeWidth:2}, '+
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.5, 0.5, 0.5], pathPoints:[[3, 15], [27, 15]], ellipsePath:false, closed:false, strokeWidth:2}, '+
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.5, 0.5, 0.5], pathPoints:[[3, 24], [27, 24]], ellipsePath:false, closed:false, strokeWidth:2}, total:3}, '+
            'group_0:{'+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[1, 0.49, 0.06], pathPoints:[[3, 5], [27, 5]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[1, 0.49, 0.06], pathPoints:[[3, 14], [27, 14]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[1, 0.49, 0.06], pathPoints:[[3, 23], [27, 23]], ellipsePath:false, closed:false, strokeWidth:1}, total:3}})',
        twitter : "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x002\x00\x00\x002\b\x06\x00\x00\x00\x1E?\u0088\u00B1\x00\x00\x00\x19tEXtSoftware"+
            "\x00Adobe ImageReadyq\u00C9e<\x00\x00\x05.IDATx\u00DA\u00ECZ=L\x14A\x14\u009E;\r\r\x14G\x03v\x1E4X@$\u00A1\u0080N\x02\r\x16\x10-\u00A9"+
            "\u0084\u0084\u008A\u00E6\u00B0\u00A0\u0090\x06\u00AE\u0080hB\u00E2Q\x11\x13\u0088P\u00A1\x05\u0089B!\x16 \u0084\x06\x1Ar\x06\n\u00A1\u0080+h"+
            "\u00A0\u00A2!1\u00A1\u00F1}\u00E3<\u00F3\\v\u00F7fg\u0097\u0083\x18_\u00F2\u00DC[\u00DC\u009Dy\u00DF\u00BC\u00DFy\u00B3J\u00FD\u00A7\u00BBE\u00A9"+
            "\u00A4\x06\u00EA\u00ED\u00ED\u00CD\u00D0\u00E5\x19\u00F1c\u00E2V\u00C3\x19\u009FGK\u0086\u00B7\u0088\u008B\u00AB\u00AB\u00AB\u009F\u00EE\x04\x10"+
            "\x020@\u0097\x17\u00C4\u009D\u008EC\\\x10\x03\u00CC\"\u0081\u00DA\u00AC8\x10\x020A\u0097\u009C\\\u00F5\u0086\u0086\x06\u00D5\u00D1\u00D1\u00A1"+
            "\u00AF\u00F5\u00F5\u00F5\u00FA\u00EA\u00A5\u0083\u0083\x03uvv\u00A6NNN\u00D4\u00CE\u00CE\u008E:??\u0097\u00FF]$\u00CE\u00BBh)\u00E5\x00\x00+\u00FF"+
            "\u009E8\u008B\u00FB\u00BA\u00BA:\u00D5\u00DD\u00DD\u00AD\x19\u00BF\u00A3\x12\x00\u00AD\u00AC\u00AChP\u0097\u0097\u0097\u00FCghf\u0090\x00\u0095"+
            "\x12\x07b|`\u009Cx\x04\u00F7\u00D5\u00D5\u00D5jhhH\x03H\u0082\x00\x02\u0080\u0096\u0096\u0096\u00A4\u00C9\u00BD$0\x0B\u0089\x011 \u00BE\x19\x07V}}}"+
            "\u00AA\u00BF\u00BF_\u0083I\u009A`j333j\x7F\x7F\u009F\u00FF\u00B4@`\x06\u00CB\u00BDw\u00CF\x02\x04L\u00E8\x0B@@\u00F0\u00D1\u00D1Q\r\u00A4\u00AA"+
            "\u00AA\u00EAF\u00C2(\u00E6`-\u00C3\u009F0oSSS\u00F6\u00E8\u00E8\u00E8\u00B33\x10\u00A3\u0089? \u00A6\u00A6\u00A6TKKKE\u00F2\x02\u00E6\u0081\u00CF"+
            "\u00ED\u00EE\u00EEZ\u0081\u00B9gcN\x18pvv\u00D6\u00C9\u0099\u00E3Pcc\u00A3\x17L\u0086\u00C0|\u008D\x04\u0084^\u009A\u00A5K\x0F4\u0091\u00CF"+
            "\u00E7+\x0E\"\x00L\x07\u00C9\u00F5\u009D\u00C0\u00FC\u00B0\x02B\u00DA@\u0086~\u008D\u00DF\x00A/\u00DFj\u00F9\x010\u0088j\u0087\u0087\u0087"+
            "\u00B8\u00ED!y\u00DE\x11\u0098\u009F\u00F2\u0099t\u0080I\u00BD\u00E5\u00E8\u00D4\u00DC\u00DC|'j)\u0084z\u0093`3&\u008F\u00A9P &Od\u00A1N\u0084"+
            "\u00D8\u00BBD###\u00FC\u00F3\u0099I\u00CC\u00FE@\u008C6Pv\u00DCX\u009E\u0088C\u00D0\u0088H\u00C0\u00E3a\x1A\u0081od\u00B8\u00EC\u00B8\tB)\u0082"+
            "\u00EC\r^__\u0097e\u0089\u00B7\u00EE\u00F2%a%\u009D&\u00C7i\u00BA\u00EFy.\u00C7\u00BEa[V \x03\u00A3P\u00B4\u00A9\u00A9&''\u00AF\t;77\u00A7\x17"+
            "\rc\x1D\x1F\x1F\u00EB\u00AC\x1EFXd\u00CC\u0087\x051\u00F2\u00BE\u00FCK#\x06\u009D.Al\u00B5\x01\u00E1\u0090$1\u00B9\\Y\u00BF\u00B2cll\u00CCw\u00C5"+
            "\u00B9\u00C6\u0082`\u0098\u00D7d\u00F3P\u00EA\u00EA\u00EA\u0092\x16t\u00CD\u00B4:9\u00A3F\u00F5\r\u0098H.\u0097\x0B\x14\x02f\x14\x06\u0094\x01\u00E19"+
            "\u009B\u00B9\u0085\x05d\u00D9\u00BC$\u0090'\u00F8'J\u00B8\u0095\u0093\u00F2\u00AAC;\u00DE\u0095\x17\x05`\u00E8X\u00D0\u00AE\u00DF\x1E&\u00A8\u0084"+
            "\u0091\n\u0090>\u00D2\u00EAy\u00C0*\u008A\u00C0f\u00A5\u00E0\u00D0\x0E\x18\u00AB\u00D6\u00DE\u00DE\u00AE\u0093\u0099\u008D\x13\u00E39[\x10\u00BC"+
            "\u00E0f\u0081\u00B2\u00BE@\u00A2\f\x06\x01\x11\x18\u00E0\u00B0~\u00D1\u00C98\u00A4\x15E-\u0081\u0084\u009CO|\x13b\x14\u00FF\u0080\u00A0~ "+
            "\\(*\u0090\u009A\u009A\u009A\u00EB\u0099\u00DD$\u00C2\u00C8d\x13v\u00A3\u0094\u00EDq(\u00EDjV\u00BC\u008A\u00B69\u00A7\u009C\u00A3\u00C7\u00AD\u00E9"+
            "\u00D2\u00A2{\u00A1\u00F3\u0082K1\x17\x17L\x12\u009A\u00D5@hO|\x11\u00B7\x06\u008AS\u0097%Q\u009C\u00A6\u00FD\"\u0091\u008Bi\u0094KxA\x04m\u00BAl"+
            "\u00DA\u00D0\x1B\x0B\x02\u00B2\u00E9\n\x04\u00A6\x01\x13\u008B\u00AA\x15h\u00D2U\x1BB\u00CE-/\u0090\u0092m\x16\x0EZY\u0084b[\x7F\x01\bdrW\u0093\x14"+
            "\u00E5P\u00D1\x0Bd\u008Bs\u0083\u00EB\u00C0\\\u009A\u00DB\u0084\u00DA8 \u00B8\u00EA\u0096@dfG\u00BF\u00F5=\"\x17\u00D4fc\u00B7\u00D0\x00\x06\u00B4"+
            "\u008Dv\x10\x1C\u00A6\x147\u00CA\u0089\u00C5.r[\u00F5O\u00F3\x01\u009By\u00DA\u00D4\u00A3\x00\u00CBbB\u009B\x04\u0085\u00A6\x04\u009EM\u00A5R\u00EA"+
            "\u00F4\u00F44T\x03\x000<<\u009CH_l~~\u009E}\u00E4\r\u00C9\u00BD\u00E3\u00B7\u00B1ZD5\t\u00F3\u00B0qB\u00EE\n\u00F2\u00FE\x05\u009A\u00F1F\u00AF"+
            "\u00A4\u009B\x17\u0098C\u0098\u00D5'\u00DFv\x10\u00A1+\u00D2*\x0F\u00900\x19\b\x19\u00B5\rT[[\u00ABMRr\u00D24==\u00CD\u00DA@Ox1\u00AC\u008B\u0092"+
            "\u00B7\u00DD\fU\u009A\x10P\u00846\u00F2\u00A1\t\u00D1\u00B4\u00F1K\x00Qn\u00FF\\I\u0082<\u0085B\u0081o\x0B\u00DE\u00B3\u0093t\u00C0{\u0083\x1C\x1Dl"+
            "\u00C2i%\b\x11\u00D2\u0098\u00D4\u0085W\x1B\u00D7|D\u00F8J\u0089\u00FC\x03g'\u009DPg[[\u009B\u00B6\u00FF\u00DB\"4'\u0096\u0097\u0097\u00F9"+
            "\u00F6)i\u00C3\u00AE\u00F7k\u00C0l\"\x1C_]]e\u00B7\u00B7\u00B7o\r\f,\x02'\x01\u0086p\u0082\u00F5\u00C1\u00AAh\u00F4\u00D0s$\x1D\u00D8'\x1A\x0B.e~"+
            "\\M\b?E\u0094*\x04=\x1Bz\u00D0c\u0092\u00E4G\u00FA\u00D9C\u009Ay\u00B0\u00B6\u00B6\u00A6\\\u00C2\u00B2\u008BcC\x0B\u00C2\u009C\u00CA\x1E\u00BF"+
            "\u0095=z\x13`\x1E\u0081\u00F7\u00F6\u00F6\u00B4f8\u00AB\u00DFD\u0088\u009D\u0098\u0098\u0090E!\u00CC\u00E9U\u00B9\u00F7\"\x1DO\u009B\u00B3\u00F5q"+
            "\u00CE\u00EA\u00A8\u0099\u00C0I\x00BD\u00F2\x14\u009D\u0088N\u00CFm?\"p9g\u00C7\u00FE\u00FE-7\u00C6\x00\x02\u00FB\x11\x00\u008A\u00BA\u00E7\u00E7"+
            "\x10\u00BF\u00B1\u00B1\u00E1\u00AD\u00BA\x17\u008C&\u00ACw\u00AEq\u00BE|\x18P\u00BF\u009B\u00C8\u00AD\u00B2\u00F6\u00E2/\x1F\u00D0p\u0093\u00B5"+
            "\x16\u00EC\u009E\u0083\x05W\u00CC>[\x06\u00D4N\u00F8\u00F2\u00A1\x18U\u009E$\u00BEE\u0081f\u00F0-\u008A>\u0092p\x18\u00A2d\x00\u00CCD\u00F9\u00D2!q >"+
            "\u00A0\u00C0\x0F\u00D5\u00EFV&\u00B3\u00DC\x04]\u0098\u00EBwl\u00AF\u00E3\b\u00FFO\u00D2/\x01\x06\x00\u00E3Cz?\u00ECa\u009F!\x00\x00\x00\x00IEND"+
            "\u00AEB`\u0082",
        linkedin : "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x002\x00\x00\x002\b\x06\x00\x00\x00\x1E?\u0088\u00B1\x00\x00\x00\x19tEXtSoftware"+
            "\x00Adobe ImageReadyq\u00C9e<\x00\x00\x04\u00C9IDATx\u00DA\u00ECZ\u00BFO\"A\x14\x1E\u0094\u00C2\u00C2D:-L\u00DCKL\u00B0\u0083N;\u00E8\u00CC\x15F"+
            "\u008C\u0085%gm\u0081\u00FE\x05\u00EA_\u00A0\u00F7\x17\x00\u00D5])1\u00E6Bu\u0090h\u00A2\x1D\x16&H\u0085\u009Dv\u00D8ibq\u00F3\u008D3\u00E69\u00CC"+
            "\u00EE\u00CE.\u00BB\x0Bw\u00B9\u0097\u008C\u00BB\x0B\u00EB0\u00DF\u00BC_\u00DF{\u00BB\u008C\u00FD\u0097\u00C9\u0092TT\x13mlld\u00F8\u00A1\u00C4G"+
            "\u008E\u008F\u00BC\x1C\x19\u00C3\u00AD}9\u00DA|t\u00CE\u00CF\u00CF\u00CF&\x02\b\x07\u00F0\u008D\x1F\u00CA|\x14CN1\u00E0\x03`\u00EA\x1CT+q \x1C\u00C0"+
            "\x11?T\u00E8\u00AE/,,\u00B0\u0095\u0095\x156??\u00CF2\u0099\u008C\u00B8\x1ERG\u00BF\u00CF\x06\u0083\x01{zzb\u00DDnW\u009C\x13\u00E9\u00F0q\x1CFK\u00A9"+
            "\x10\x00\u00B0\u00F3U>\x1C\\c\u00C1\u00F9|\u009E\u00E5r9q\x1ET\x1E\x1F\x1F\u00D9\u00CD\u00CD\u008D\x00\u00F5\u00F2\u00F2\u00A2>\u0086fv9\u00A0~"+
            "\u00E4@\u00A4\x0F\x1C\u00F2\u00B1\u008F\u00EB\u0099\u0099\x19\u00B6\u00BE\u00BE.@D!\x00\x01@\u00ADV\u008B\u009A\u00DC\x01\x07S\u008B\f\u0088\x04"+
            "\u00F1[:0[[[c\u0085BA\u0080\u0089Z`j\u008DFC\u0098\u00A0\u0094\x1A\x07\u00B3\u00EB\u00F7\x7F\u00D3\x16 `B\u00BF\x00\x02\x0B\u00DF\u00DE\u00DE\x16@"+
            "\u00D2\u00E9t,a\x14\u00BF\x01-\u00A7R)\x05&\u009F\u00CDf\u009D^\u00AF\u00D7\b\rDj\u00E2\x03D\u00B9\\f\u008E\u00E3$\u0092\x17\u00F0;\u00F0\u00B9\u00FB"+
            "\u00FB{+0\u00D36\u00E6\u0084\t\u00F7\u00F6\u00F6B9\u00F3(\u0082\u00A8\u00A7\u0081\u00C9p0M\u00D3\u00BDS\x1E\u00F3\u009C(M\u00EC\u00EC\u00EC\u00C4\u00E2"+
            "\x0F6\x023\u00DB\u00DC\u00DCT\u0097\u00FB|\u0083K\u00D6@\u00E4\u00CDHt\x02\u0084)\x1F$\r\x06~)\u00A5*\u00AD\u00C5\x1B\u0088\u00BC\u00E9DE\u00A7\u00A4|"+
            "\u00C2O\x10\u00EA\u00E5\u0086fd\x1E\u00F3\u00D5\b\u00F2\u0084\x03\u00DBD\u0088\u00F5\u0092v\u00BB\u00CD\u00EA\u00F5\u00BA\x188\u008F[\u0088\u0089"+
            "\u0095db6;\u00BB\u00D4\u00C6\x0FDA\u00EC\u00C0\u00E2\u00E2\u00A2\u00EB\u00A4\u00CDf\u0093]^^\u008A\u00B8\u008F\u0081P\u00F9\u00FA\u00FA\u00CA\u0096\u0097"+
            "\u0097c\x032;;\u00CB\u009E\u009F\u009F\x05\x1B\u00C0fs\u00C7\u00AF\u00BBi\u00A4\u00F4\u00CE:2\u00BE\x19\u00BB\u00D3\u00E9\f}v}}\x1D\u00BBV\u0088\u0095"+
            "\x14e\u008E3\x02\x01\td\u00AB\u00AB\u00ABV\u0089\u00CB\u00E6\u00B3\u00A8\x05\u009B\fbJ\u00D7\u00FB\t\u0088D\u0097WQ\u00C2\u00C6\u00F9l>\u008BC@P\u0089"+
            "\x05\t\u00A1<\u00A3\u00A82\u00AA\u00CD\u00CEbW*\u0095\u008A`\u00AD\u00EA:\u00A9\u0084I4\u00E2@\x01`\u00C9\x14HA\x01\t\u00A2f\x12\u00DF\x03\u0093CU"+
            "\u008B`\u00E3\u0082\u00E6*\u00ACSr1(\u00A0F\u0081\b{ZZZ\u00B2\u009E\faWW\u00B92K|G\x18\u00EC\u00BB\u00CA\u008BE1?\u00D8\u00ADVP\u0089M\t\u0092|\t\x10G7"+
            "\u00AD\u00BC\u00E27\u00B6\u00A2/\u00D4O\u009B0CRo\fi\b\u00E0ALm\u00D6\u0080*\u0094Z\u00D2T\u0092\u0091G\u00C6\x7F\u00CF\u00E2\n\u00F9\u00C9\u0096\u00EE"+
            "\x0Fev\x13w\u0089\u009B\u00A2\u00BBiO\u00D5\u00F4A%\x1D\u00D6\u00AC\u00C2\x16M\u00D4t\u0090@M\x1A\u0080\t\x06\r\"S\u00A4{\u00E1\u00AB\u00FA(\u00C2&"+
            "\u00DD,,\u00D6\x14\u00B2\u00D1a\t*\x02\b\u008F\u00C3\u0083$L\u00CA\u00B4h\u0092\x13>9~( \u00A3N2\u008A\u0090\u00E8\x138\x0F\u00B9\x01i\u008D\x03"+
            "\u0088IKzX7\tX\u00B0\u00AA&t \u00E2\u00BF\x1F\x1E\x1E\u00D8\u00DF \x04lG\x07\u00D2V\x11c\u00D2\x05\u00F9\u00C6\x0B\u00C8\u0099\u008A\\I\u009BWP!"+
            "\u009B\u00DDQm\u00D5\x0F 2r\t?\u00B9\u00BD\u00BD\x1D\u00EBB\u00FDX4Y\u009Fk\u0085Xw\u00AB\u00FE\u0092\u00A4-^@p?1\u00AB3S=\x02\u00AD\u00D48]9\u00E4"+
            "\u00A6\u00E5 \u00EB\u00FAeW\u009Df\u00CC\u00CD\u00CD}b\u00C2\u00FA\u00F7&f\u008Dl\u00AF\u00DF\u00E7\u00C50\b\x13\u00A8\u00D1n}\u00CA\u00D0\x0EB?"+
            "\u00AB\u008A\x1F@\u00E14\u00AE\u00C6\u009C[\u00A4\"\u00A5\u00C3\x17\nd(!\u00CA6~\x1F\u0091\x01u\u00C3$E*\u00B2\u009ES\u00FD\u00D9\u0089[\u00CBtWE"+
            "\u0087$\u00FD\u00C5K`R2\u009A\u00E2\u00CF\u00B1\u00FE\u00BD\u00B1\u0089\u00DD\u00EB\u00F5\u00FA\u00D9l\x16fWD\u0082D\u00AF\n=\u00A5q\t\u00FC\u00F5"+
            "\u00EA\u00EAJ]~\u00E5\u00DA\u00E8Z\x01\u0091`Z\x1CL\u00F1\u00ED\u00ED\u00CD\u00B9\u00BB\u00BB\x1B\x1B\x18X\u00C4\u00C5\u00C5\u0085\u00BA\u00C4"+
            "\x13\u00AC\u009FV\u00A4Q\u0093-\u00CC\x05\u00FB\u0084\u0093\u00C5M\u00F3M\u009A ~\u0081(u\u00EAv\u00AF\u00EF\u00A37\u00FD\u00B1\x1BzWa;'A\x1C\x1B>A"+
            "\u00FC\u00D3\u00F7\u00F1[\u0090g\u0088U\u00D5\x10C\r\x01@q\u00F4\u00B1\x10b\u00B5.\u00CB\u0081\u0097&\x02\x01!\u0080\u008E\u00D8\u00FB\u0093]"+
            "\u0091_\u00A0\x19\u00B4W\u00A3\u00C85X8:\u00FAD\x0B@\u00B2e\u00FB\x12A\u0098\u00E7\u00EC0\u00B1\x13\u00D9\x18\x13 \u00A0!\x00\nS\u00F3#\u00C4"+
            "\u0083;i\u00AC\u00BB&5a\u00CD^Gy\u00F3\x01\f\u00A0\u00A2|\u0087\u0082B\u00D5\u00A7@)\u00FA\x01\u00BBW\u00C1\x02!\x1D\u00E7\u0086\u0092\x01\u00DC"+
            "\to>\x04N^Q\u00BC\u008B\x02\u00CD\u0094\u00A5\u00FF\u0084q\u009A\u00BE\x04\u00F0=\u00C8\u009B\x0E\u0091\x031\u0080\u00C2\x00;t\u00C8\u00A0E\u00D0@"+
            "\x1E\u00C1\u00C5[\u00A3,\u00FE\u009F\u0094?\x02\f\x00\u00B2\u00F4$\u00DC\u0083\u00A8\x02\u00A8\x00\x00\x00\x00IEND\u00AEB`\u0082",
        prepression : "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00A6\x00\x00\x002\b\x02\x00\x00\x00Y\x1D7u\x00\x00\x00"+
            "\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\nzIDATx\u00DA\u00EC\\\tT\x14\u00C6\x19f\x17v\x17v\u00B9O9\u00E5\u0090KAtA"+
            "\u00F1\u00C0#\u00A0F\u0083W\u0089\x1A\u00E3\x11MUj\u00DAjm|\u00E6i\u00AC\u00C6\u00B4\u00B61\u00A9\u00D6\u00A7V\u00ABFk<\u009EwC\u00AC"+
            "\u0082\"\u00B1*E\u00C0\x03\x11\"\u00A8\u00A0 \u0097\u00DC\u00B0\u0080\u00CB\u00B1\u00CB\u00EE\u00F6\u00DB\u009De\\\u0097\u00B3\u00BED"+
            "\u008A\u009D\u00FF\u00AD\u00BCq\u00F6\u009F\u00F3\u009B\u00F9\u00FE\u00EF\x1F|r\u00C4\u00D1\u00FB\f\u0098\u00FD?\x19\u0097m\x01\u0083"+
            "\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C"+
            "\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\u0099\u0081\u0081\x11\u00DB\u0082\u009F\u00D4<\u00FAY"+
            "\u00DAZ\bI9\u00AF\u00B4\u00B6\u00BA\u00BE\u00A9\u00EFA\u00EE\u00DE\u00CFrR\u0088W\u00FBz\u0099\\QZ\u00D3\u0090\u0092U\\\u00DF\u00D8\u00C2"+
            "\u0090\u00A6\u00B64R<y\u00F8\x00R>s-{\u00CB\u0089\u00A4\u00BE\x07\u00B9\u00A7\u00A3\u00D5/\u00A6\x05w\u00F6m\u00ABBy4!\u00F3\u00AF1\u00B7"+
            "\x18\u00D8\u00C4To<\u00B1\x1B\x19r\x17O\x1ER)\u0091\u009E\u00BA\u009A\u00C5\u00F0\u0086\u00E5\x16W[\u009A\x1A\u0093r~Ym\u009F\u0087<"+
            "\u00BFL\x12\u009B\u0092#4\u00E6\rp\u00B2\x0E\x1B\u00EC\u00C6\u00E5pP\u0089?\u00ABg\u008F<\u009F\u0092\u00D3\u00D8,\u00EFyWB\x01\u00CF"+
            "\u00D9\u00D6\u008C\u00CB\u00E566\u00CB\u008A*\u00EB{\u00E2\u00EF`m\u00DA\u00D0\u00D8RU\u00D7\u00F8j\u0093\u00E7\x19q\u00DD\u00EC-\u00F1"+
            "\x13\u00F3,\u00A9\u00AAW(;\u00BE\u0090\u0086\\\u008E\u00A3\u008D\x19\u00CF\u00C8\u00B0E\u00D6Z^\u00FB\u00BC37\x07+\u0091\u00D0\u0098/\u0097+"+
            "\u00CA%Ry\u00AB\u0082\u00D6\x1F\u008E\u00CF\u00C0\u00A7\u008BiX\u0099\x1A\u00DBZ\u008A\u00B8\x1C\x03\u0084\u00F9\x1E\u00AE\u00C5I=\x1Fn\u0085D"+
            "\u00DA\u00D4\u00D2\u00FA\u00BA!\x7FV\u00D5p\u00E8\u00D2=R\u009E5n\u00E0'sGc\u0083\u00D4\u00DBd\u00C8E\u00C8\u00CF~Z\u00B9|Z\u00C8\u008C0_\u00E2"+
            "\u00B0n\u00FF\x15\x0BS\u00E3Y\u00E3\u00FC}]l\u00EA\x1Be\u00B36\u009DF\u00A5\u0080g\x18!\u00F6\x041\u00C0\u009F\u00B4\u008554\u00CA\u00AE\u00DC"+
            "\u00CD\u00DB}\u00EEvM\u009B\u00D8\u00D9\u00F3\u009Bw<\u009C\u00AC\u00D4\u0081\u00A3U\u0089p\u00B8\u00F4\x1Dq\u00A0\u00A7=Gs\u00C2\x1E\x15U\x1D"+
            "\u0088M\u00FFWz>\u00F1|w\u00AC?\u00C2')\u00EF8\u009BZ!iD\u00E7\u00DE\u00CE\u00D6\\.g\u00FA\u00FA\x13-r\x05\u00DA\u00BC5\u00D4\u00E3\u00C3\u00C9C|"+
            "\u00DDl\u00E9\u0088\u00CD\u00B2\u00D6\u0084;y\x07/\u00A6\x17U\u00D4\u0091\x1A\u00BE\u0091\u00E1\u0084\x10\u00CF\u00F9\x11\u0081\u009ENV(\u00D3"+
            "\u00B0\u0095_*\u0089\u00BD\u0099{\u00F4\u00B2\x16\u00C5\t\u00C1\u009E\u00D3F\u00FA\f\u00F7s\u00E6\u00F3\u00B4>*\u0095\u00AA\u00B0\u00A2>=\u00B7"+
            "\u00F4\u008B\u00E3I\u00F0\u009F\u00FBV\u00C0\u00A2\u00C9A\u00E4\u00AB\u00BD\u00E7\u00EE\u009CK~\u00A4\u00ED\u009Fg\u00B8d\u00CAP4\u00C7\u00C2"+
            "\u00E9~\x02\u00F5\x0B)9G.gH\u009E7\u0093\u009AQ\u0083\\7|0\u0096\u0094\u00CF\u00DDx\u00A4P(g\u008F\x1FdcnB&\u00839\u00EF\u008C\u00B9YQ+\u00ED"+
            "\x1Db\u00CFzZ\u00D9\"o\u00C5\u00E5\u00D3&\x7F\x1A<\u00CC\u0084|{K\x11\u00A9\u00F9x\u00CE\u0088A\u00EE\u00F6\u00DAo\u00B9\u00DA\u00E4p\u00ED\u00BC"+
            "\u00B0\u00E9\u00A3|\u00F5\u00BAB\u00AB\u0099a~\u00AE\u00F6\x16\u00D1\u00DB\u00CE\u0093\x1Ak\x0B!\u00EDg\u00E7\u008A)\u00BA\u00CE\u00BE\u00AE\u00B6"+
            "\x7F\\\x12>c\u00C3I\u00B2r\x13\x01\u008Fz.\u0089\x14cC\u00C9L\u00B0A\u00E4\u0088DO\x0B\u0089\u009E*\u00D6\x1B\u00D1\u0098o4m\u0094\u00CF \x0F\u00BB"+
            "\u00F9\u009B\u00BF\u0095i\u00EE\u00E8\u008A\u00A8\u00E1\u00F3\"\x02\u00DB\u0087-o\x17\u00EBp\u0099;\u0081||\u0090\u00FB\u0097\u00D1\x13\u00F4|0J"+
            "\x7F\x07\x0BW{\u00F3?\u009FJ\u00C6\u00A0\u00A0@:\x1F\u008B6\u0086\x17\u00F0\u008CV\u00CF\x19\u00F1\u00EE\u00D8\u0081zm\u0081\u00E5\u00A2\u00B7\u0083"+
            "\u00C2\x02\u00DD\x16m\u0089!7\x18\x13\u00A3\u00CD\u0097E\u008A\u00F5&3%t\u0080B\u00A9\u00FC\u00EC\u009Bk\u00BD\u0093\u0097\x07y9\u0098\u00F0y\u00F4"+
            "\u00AFu\u00D2f=\x07\u008A7\u00B5\u00B7\u0087y\x11\u00BC\u00C1\u0095I?\x14\u00FEjG\u00DC\u008A\u009D\x17\u0093\u00B3\u008A\u00C8\u00B7\u00C1>"+
            "\u008E \u0089\x0ES\u0083\u00DB\x0FKR\u00B3\u008B\u00B1\u00A1\u00F4\u00C6\u00ACyoT\u0087J\u0093\u00E0M-\u00D4\u00CFyY\u00E4PR\u00BE\u009B[\u00BAj"+
            "\u00F7\u00A5\u008F\u00B6\u00C7&f\x16P\x7F \u008D\x02N\u00DB\u00FB\u00E1\x01\u00A4\u00B2\u00B6\u00A1\u00F9@\u00EC\u00DD\u00AD\u00A7\u0092w\x7Fw"+
            "\x1B\u0083*UZb\u0087\u00CF\u009A\u00B9\u00DAA\u00E5\u00ADJh\x17\u00F8\u00EC\u008A\u00B9\u0095\u0090\u0096\u00D7$\u00EB\u0086o\u0097M\x15S\u00BC"+
            "\u00EB\u00A4-\u00C7\x122\u00F7_H+\u00ADn 5^NV\u00D1S\u0083;S\u00C7e5\u00CF1\x1C\u00AD\u0099\x18\u00E2\u0085\x03\u00F4\u00FAn\u00B9\u0085H\x10"+
            "\u00EC\u00E3d.\u00E4;\u00DB\u0099/\u009A\x14D\u00B7\x17\u00B3\x07\u00E7\u00B7\u0087\n$\\\u00FB\u00BC\u00D9\u0090\u00CB52\u00E4 \x1A-\u008B"+
            "\f\u00A6\x1Ag\u00F3\u00B1\u00C4J\u0089:\u0092=(\u00AC\u00BC\u00F4\u00E5\x02\x1Ca\u0094G\x07\u00BA\u00EE=\x7F\u00E7%\x01\u00ACR\u00FDvw\u00FC"+
            "\u00EDG%J\u00A5j\u00F9\u00F4\x10\u00CA\u00E1c\x02\u00FB[\u0099\x19\x03\x1E\u00BD\x11\u0091\n\u00A3[L\u00CC\\$@\u0093\x15Q\u00A1\u00E4\u00AE"+
            "\u0083B?\u00D9\u00F7}m\u0083:pd\x17T\u00C6\u00FC\u00E1=k35[\"\u00A1\u00FA\u00CB\u00E9\x14OGKN\u00DBb\u00F2Kk\x0F\u00C6\u00A5\u0093\u00AB\x0Fl"+
            "\u00C6\x0Fq\x1F\u00D8\u00DFNs>,\u00ED\u00ADD\u00F4|\x7F\x1D\u009BFG\x1F\x1D\u00E0:s\u00B4\u009FR\u00D9\u00A9Z\u008F\x10{\u00D0\u00F2\u0096\u00E3I"+
            "\u0097\u00EF<A\u00E1\u0087\u00BC\u008A]+\u00B5\x046A\u00ECy\u00F6\u00FA\x03(\f\u00DDV\u0099O\u00CA\x0F\u00C4\u00A5\x17\u0094K\u00FA;Xn\u00FBh"+
            "\x126\u0090DF;Kaq\x0F\u00D4\u00CF\u008F\x03y\u0080\u0087\u00FD\u00FE\u00D5S\u00F5*\u00EB\u00A5-\u00ABv\u00C7\u00B7\u00979\x1F\u00EF\u0089O\u00C9."+
            "\u00D6\u00B9\u00F4v\x1E\u008E\u00DA0fk.\u00DC\u00FC\u00F3p\x1D\\\u00B5\x057{\u008B\u00F69\u00CF\u00BD'e\u00A4\u00F3o\u00E2\u00EF-\u00988\x18\u00D4G"+
            "\u00B4\x186\u00A2\u00B6\u00A1L\u00D7y\u00FB\u00D9\u00D4\u00D3\u00D7^$\x0E\u00B6\x16B?7\u00DB\u00B6P\u00CD\u00DD\u00B2,\u0082~E\u00A3\u00B5\u0095"+
            "\u00A9\t\x0EG\u008D\u00CE\u0083\u0089\u00D8\u00C71q\u00C7\u0087O\u00CBj\u008B*\u00EA\x1F\x14V%f\x14\x10\u0084\u00E0\u0083#EFG\u00CF\u00F1_-\u00C4"+
            "\u00BE\u00E3|<.\u00A9\x01Q\u00AD\u00D9\u0097\u00D0\u00D9\u00A6\u00C1\u00D9\u00B5m]\u00E8\u0084\u00F4\x06C\u00AB\u00F2Z\u00A9\u0083\u00E6\x189"+
            "\u00D9\u009A\u0081\u00E4\u00F4 O\u00CB-\u00BDq\u00BF\x10\x05\f\u0094[RMN\x1E!\u00B9\u00DEL\u00D2p\u00A5\u00B6\u009DI\u00C6\u00B2\u00BB\u00F545"+
            "\u00E1\u00D3\u00B2\u00B5\u00B9\u0089\u00B5F\u0092\u00B4\x17\u00D5]\u00F4\u0080h\x07\u00A1G6]\x1D\u00C5\u00F9\u00DD\u00AC\x05\x12\u0081\u00F2"+
            "\u0090\u0099P\x10\u00E2\u00EB\u00D4\u00DE\x07\x0E|\u009EQnI\r\u00F8\u00B3\u009F\u00B5)\u009D\u0086\u00B7\u008B\r>\u00E1b\u008F\u00F7#\x026\x1FM"+
            "\u00BC\u009EQ\x00\u009F\x1B\u00F7\u008B\u00E8}\u0085\x12D\b\u00C7\x074\x00\u0085u8\u00FE^gB]d\u00CC\u00E7\u00BC\u00D0k/It\f\u00EA\u00D0\u00C6"+
            "\x1C&\x02^\x17ki~%\u00AD\u00FE#@\x0E*#\u00B9\u00A6B\u00A1\u00CA\u00CC+\u00CF)\u00AE\u00C6^\u00E8\u00A6(]\x18\u008D\u00C4\u00B0'\u00CFj\x10\x029"+
            "\x06\x1C=\u009F\u00AE\u00BB\x02\u00F7\x1A\u00EB\u00C0\u00DCm\x04\u00D5%\x1El.\x04pG/'*i\u0093\f\x02~\u00E9\u00D6\u00F3\u00D0\x07\u00E3\u0082"+
            "\u00FA\u00EB9\u0080\u00FF\u00D5j\u00F1w\u00A7\u0080\u00D6\u00C6CW\u00A1\u009E&\x06{\u00BD,\x18\u00D4\u00F1neT\u00E8\u00FD\u00FC\u00CA\u00B4"+
            "\u009Cg\x1D\x0E\u00F1\u0082]^\x0E\u00C3<C\u00AEn\b\u00EBb-J\u0095\u00AAw G\x14\\\u00B9\u00EB\u00E2\u00AB\u00B5\u00A5y\u0088z\x01J\u0083\u00EF"+
            "\u0092\x1E\u0092XN\u00CDD\u0093\u00A9w\u00D1\x03\u0092=J\x15\u00D8 $\u00CD\u00DD\x1D\u00D0&\u009C3\u00A2\x12\x10\x02\u00CF\\\u00CF&\u00B1"+
            "\\\u0097T\u00BC\u009Dm\x1A[\u00E4\x16\"c\u00A0\u008EH\u0084\u00C8\x051\u0085\u0090\u00E1\u00EBj3\u00DC\u00DF\u0099\u0088ALl\u00D4 \u0097\u00C4"+
            "\u00CCBs\x11\x7F\u00DD\u00D7W\u00F6\u009C\u00BB3t@?G\x1BS\x1F\x17\u009BP\x7Fgz;\u00D1\u00A4C\u00C8A\u00E68(\u0086\u009A\u009C\u00C5\u00CE\x02)"+
            "\u008E\x112\x1D\u00A2\u00C0]\u00EC\u00CD\u00DB6DUY'5\u00F8i\u00AC\u00D7~\u0093\u0096\u00F7\u00AC\u00F6~~\x05)#\u00F3\u00D9\u00BA|\x12}\u00A5"+
            "\u00C2\u00D6\u008F\x0Ep;\u00BBi\u00F6\u00FA\x05c:|\u00E0\u00C3O8\x7F\u00B6h\x1C\u00BD^\x00\u00A0\u00B4\u00BA\x1B\u00C8\x11\x05\u00A0\u00D2\u00B51"+
            "\u00DB\u00CC\u00E4\u00C8\u00DA\u00994\u00FFA\u00D6\u008E\u00DC\u00FA\u00D8\u00A7Q$\x03\f\x17\u00BBc\u00F4\u00D9\u00E3\x06\u00E6\x14U\u0083\fv~{"+
            "\x13\u00D9\x04\u00D4\u0093.E"+
            "\u00C1\u00E7\x1F\u009F\u00CFY8qpCc\u00CB?\u0093\x1F\u00ED;\u009F\u00B6\u00FAo\u0097u\u00DF\x1C\u0095Je\u0087\u00D3x\u00DE$\u00CB.\u00A8\u00D2>("+
            "\x19\u00F3\x16L\u00D4\u00A6\u0082Qc\u00FC\u00CD\u0085\x02R\x06_\u00DE\u00CD)\u00ED\x1B\x0F\u00AE\u00FF\u00D5\u00E3\u00F3\u00EF\u008F$\x1E\u00FD"+
            "\u00F4g\x02\u008D\u00FA\u00C0}\u00FA~\u00DB\x07\u0090~\u00B8^\u00D0\u00DEDOUH\u00F4O:\u00EE\u00D9\u00B5\u00ED\u008B\u00B1\u00E3\u00BAa\x1E\u00FC"+
            "\u00DF\u00C3W\u00FD\r\x07\u00AF\u009E\u00DC8\x0B\u00FD\x13\u0089\x14\u00B7e\u00BE\u00B4Y&m\u00C6\u00B5\x16\u0090\x18AU7\u008E\u00D4\u00DAya"+
            "\u00ABf\u008D(,\u00AFC\u0096\u0081\x10K\u00DFL\u008A*\u00EA\u00AE\u00DC\u00CD\u008F\x1C\u00E9\u008D\u009B\n\x07d\x018\u00BE \f3\u0091\x00\u00C4C"+
            "\u00A7\u0094\u009CU\u00DC\u00D94\u0090\u00D6oZ<\u009E\u00BCa\u00FCr\u00C60\u009C-\u00E8\x12W\x1D\u00ADz4!\x13\u00C9\u00DB\u009Bv\u00CBI\b_\u00B37"+
            "\u00A1\u00B2\u00ED\u0095\u0091\u00A3\u0089\u0082\u00D8\\\u00AA\u009F9\x1D\u0087\u00F0\u0097d]\u008B\\\u00F1\u00D5\u00C9d$c=\x19\u00B1\u00AA\u00BE"+
            "\u00F1\u00D7;\u00E3^\u008C\u00C8Q\u00ABH\u008C\u00A8\u00A3\tTzO4>\u00AEj\u00BA\u00A6x\u00E3D\u00AE;pE\u00A6#2 \u00DC\u00C0R\u00A0}\x7F7[\u00AE"+
            "\u00E69\x0FS\u00FA\u00FC\u00F0\u00F5\u00C2\u00B6\u0087\u00BC\u00F6\u0086\x13\x03\x1D@\u00E3\u00B1\u009D\u00A5\u00C8\u00CD\u00C1\u00820\x16\"\u00D4"+
            "\u0091\u00CB\x19\u0097n=\u00FE\x1Fzc\u0087^\u00DB\x7F!\u008D\u0094\x0B\u00CA\u00EB\u00BAvF\u00E2A\x7F\u0097\u00DA\u00E1\u00CB9\u00B2\u008E\u00A8"+
            "\r\u00A7\u00A6\u0084\x0E\u00F0w\u00B3C\u00E46T\u0093\u00B6J&W\"\x0F\u00B9\u00F7\u00B8\u00EC\u00E6\u0083\u00E2\u00F6\u00B2e\u00E3\u00DF\u00AF\x0E"+
            "\u00F3sFN\u00ACP(\u00F3J%1\u00FF~\u00A0\u00BB\u00B9\u00A0_:\u00BD\u00AC\u00A7\x15\u00EDG|XX5}\u00FD\u0089I!^\u0083=\x1D\u009C\u00ED\u00CC4\u008A"+
            "\u0089#W(\u009EU5 3N\u00D1<\x04\u00C5\u00A6\u00E6\"\n\u00A8\x03\u00B9\u00A3\u0095\u00C8\u0084'\x14\u00F0\x1B\u009AZ\x10\u0083o=,\u0089K\u00CD%:"+
            "\x11> \u0080\u00B0@7\u00A8t\u00C4~P\u00B4\u00B4I\x0E\u0081\u0082A/\u00A4\u00E6P]\u0092\u009E[J\u00E7\u0083\x15\u00D1i\\M\x7F\u00BA\u00F0O1\u00E1C=0"+
            "\n\u00CE\x1C\u00CEM\u0085\u00A41\u00B7\u00B8\x1A\u00DDB!u\u00B8\u00DB\u00E9\u00B9/\u009A#\u0094\u00D0 \u00A5\u00A7H\u00BA5N\u009F\u00F8/\x05\u00C0"+
            "\u00C6\u00DE\u00CE\u00D6\x04\u00F21+\x0F5\u00CBZ\r\u0098\u00F5Ebg\u00C6 g\u00F6:\u00ACo\u00FC\u00DB\u00B7\u008C\u00C7eU\u009A\u00E8\u00A82P\u00E9"+
            "\u00BE\u00E10{c!\u00FF\u00E2x\x12\u0083\u008A\x11;3\x0693\x0693\x0693\x069\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083\u009C\x19\u0083"+
            "\u009C\x19\u0083\u009C\x19\u0083\u009CY\u00EF\u00DA\x7F\x04\x18\x00\u0094\u0093\u00AF\f\x15s~\u00C2\x00\x00\x00\x00IEND\u00AEB`\u0082",
        hypertransitory : "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\u00A6\x00\x00\x002\b\x02\x00\x00\x00Y\x1D7u\x00\x00\x00\x19tEXtSoftware"+
            "\x00Adobe ImageReadyq\u00C9e<\x00\x00\x1D\u00EEIDATx\u00DA\u00EC{\x07t]\u00D5\u0099\u00EE\u00DE\u00FB\u0094\u00DB\u008Bz\u0097\u00ABdY.\u00D8"+
            "\x18w\u0083\x1B\u00B8\u0084^B\u00E8\x18V\u0098\x17\x12\u00C8\u0084\u00E4\u00F12+\t!\u00A4\u0090\t!\t\u0090\u00A1\u00D8)$3//af\x02\x01\f\u008E-"+
            "\f6\x02l\\e\u00CB\u00B2$\x17\u00C9\u00EA\u0092U\u00EE\u00D5\u00ED\u00A7\u00ED\u00FD\u00FE\u00BD\u00CF\u00BD\u0092\r6\u00CF\u00B0&/\u00EB\u00BDu"+
            "\u00B7\u00B4T\u00CE\u00D9\u00F5\u00AF\u00DF\u00FF\u00FF\u00FB\"\u0094m\u00D9\u0096m\u00D9\u0096m\u00D9\u0096m\u00D9\u0096m\u00D9\u0096m\u00D9"+
            "\u0096m\u00D9\u0096m\u00D9\u0096m\u00D9\u0096m\x7F\u009B\u0086\u00B3$\u00F8\u00FB6\u0097\u0082\u00F2<\u00A8\u00C0\u0087\u00BD.f\u0099x$\u00C9N"+
            "\r\u00A1\u0094\u0091e\u00F9\u00FFoj\u00C6\u00E0\u00A7\u00DF\u00C1f\x14\u00A1\u00EA2T\u009AO<^\u00D5\u00B4\fBP2AM\x13\x1D\u00E9Fo71\u00CD\u0082"+
            "\u00AE\u0098\u00F1\u00CEY\u0096\u00FF?\u00DE\bB\u0093s\u00D0\u0082\u00A9\u00A8z\u008ARV\u00E8&\x18\u008D\u0084\u00B4\u00F0\u00A8\u0096\u00D2"+
            "\u0091I\u0099\u00A2`f\u00B1H\u0092\u00FC\u00C7\x1E\x16N\u00B0\u00FF\u00ABZ\u00AE\"L0\u00C8\x19\"|]f\u008A\u00DD\x12\x10:,\u00A4\u0094\u00D9_|"+
            "\n\n\u00FFJR\u00CA4d\u0084e>\x06\u00BA\u00C3 *:\u008EK\u00A9\u00C9\u0090\u0085\x18\u00FC+!\u00ACb88\x05\x11\u00C6\u0099=\u00B0\u00F4\u0086\u00F0"+
            "\u00D8\b\u00C6\u00BF1E@\x01\x06K\u00A8\x18K\u00E2_|\u0086\u00B2dz\x02\u00DD\u00D8\u00D8~\u00E0\u00A5\u00C9\u0098\u0095V\x11fw\u00930R8\u00B5"+
            "\u00ED\u00A1|\u00CB\u00BC\u00AFD,\u00CBT\u00C4\u00DF\u00FCP\u0098\u00F1-1\t\u00B6\x0F\u00D4\u0097\u00F9\\\u00F0\u008C\u00F77\u00F9/lRJ\u00F8\u00E6"+
            "\u00D3\u00CAg1d\u008A\u00F9\u00E1\u00A1\u0083\u00C0`\u00D15\u00BD\x05d\x0F\u00C4\u00E3G\u00E3\u00DFI\u0086\u00AA\u00F3\u00D1\u00E2j<k\u009AZ\x10"+
            "\u00F4\f\u008C\u00C4\x0F\u00B5h1\u008D\u00C1\x01\u00888\u00BCDHa\x1Eu\u00A9d4\u0081~_\u008Ft\x1DH\n,\u00A0c\x04\u0081Ya\x1B\x12&\u0092\u00A0"+
            "\u0081X\x1DhK%INY\u00A6\u00CA\u0099\u00C6\x04\x03\u0088\u00D8\u0089\u00A5:\x1C\u00D1\u00946\u00C6V\u00F9\x13\u00A4a\u00A9?g\u0099\u00DF\u00A7"+
            "\n\u00EA\u00E8\b\u00D7\u0085c>\u0089-\u00F5\u00B9d&\u00F1\u00D3\x12*1\u0099\u009F\x1A\u00E3v\u00C3\u00DC\x1C\tSj\u00AD\u00CC\u00C9Y\u00EA\u00F4"+
            "\u0080XP\u00BE0A\u00E0\u009D2\u00DB\u0082\u00964\u00B5\x13\u00D4<\x18K\u00B8\u00B1\u00B2\u00AE \u00D7kR\u00CE&<&v@1\x14\u0093\u00B1\u00CA\u0098"+
            "\u00C3\u00C2\u00B6`\u00C1C\u00CA\u00D8\u00B0\u00AE5YF\u00B1\u00EA\u009E\u00AAJ*\x05A!\u00D0\x13s\u00FE0\u00A05%,\u0081\u00B0\x0BS\u0089b\u00CA"+
            "\u009F\u00F3Q\u009Aeu\x1AV\u00B3\u00A1\u00EF\u008F\u008ERA\u00AC\x1A\u00A7\u00F7\u0086\u00BC\\\x07\x1F\x04\u00FC\x02\u008A\u00B1n\u00D3\u00F8K$"+
            "\"[\u00D2\u00ADy\u0085\x01\u0098\x13[pR\x10\u00D5Qb\u00FD\u00EE\u00F4\u0090\u00CA\u00F0\u00DDy\x05.Yb\u00CC\u00D0\tn\u0088\x19\x1F\u00C6\u00C2K"+
            "\u00BD\u00FEjE\u00F6J\u0092\u00A03\x1C\u00DE\u00EA\u00D0\u00F4\x06=\u00DE\u009D\u00B2\u00EE.)\x0ER \u00B6e\x11\u0096b\u00C8\x03$\u00E0\u009B"+
            "\u00E7\u00FBDB\x16`_m\u0086\u00B191XSN\u00E7LSr\u0082jKG\u00B8\u00A5\u008D\u00C6Sp\n\u00E04r:\u00F9>\u00A3q>\u00B2\u00B4\u0080\x05\u00DD\u00EC"+
            "\u00D2jr\u00EA\u0084\u00F3\u00F3\u00F9y.Kh\x1A\u00B3\x7F\u00A2\u00B0\u00A1\u00C5$\u00A5@Q<\u0094\x0B\u00BA\u0085\u00C9\u00EEX|\u00BF\u0099\u00D2b"+
            "\u00B1;\n\u008A\u00A6*\x0E\u008A\fF\u00D4\x182\u00FE2\x14\u0092\u00BD\u00AE&0 \x19\x05\u0091\u00CF\u00AF\u00FE\u00CC\u00C0\u00E8\u00EAk?7\u00EF"+
            "\u00F1\u00C7\u00E1\u00EF\u00F7\x1E\u00FCZ\u00DD\x7F\u00BE\u00AC\x13\u00E5\x0Bw\u00DCY\u00FD\u00AD\u0087A\u00DA\u00EB\u00AE\u00B9n\u00F1c\u00DFq_"+
            "\u00BC\x00'\x12\u00CF\u00AC^\u00BF-\x14\u00F2\u00CAj\tB_\u00FD\u00E9\u00E3\u00BE+\u00D7\x03M\u00DF\u00B9t\u00F1\u00CA\u00FF\u00F83\u00F1\x078\x07"+
            "\u0084\u00F0S]\x1F\u00AA\u00AB\u00FB\u00FD\u008F\u00FEyGlt\u00D9\u00F4iW\u00BE\u00F8k\u0094\u0096\u00ECq\u0096o\u00F9\u00FA7\u00F2|\u00DE\x05"+
            "\u00DF\x7FL\u00B81\u00D8&\u00E7\u0090\u00DE\u00DB\u00BF\u00E7g?\u00FB\u00CF\u00B7w\u00DC\u00F3\u00B5\x07\u00CBo\u00BD\u008D [N0M\u009B)\u00F6"+
            "\u00CA\u00DD\u00F7\u00AE\u00FE\u00F2\u00FD\u00BE\x05\u00F3@\u00CE\u00B0=\u00CA\u00A0\u0091\u0083\u00FB\u00DE\u00FC\u00F1\x13\u00BFi9\u00B17>"+
            "\x1A3\u00CD\x02I\u00BA\u00EE\u00BA+\u00E7\u00FE\u00E8\u00C7B\x04\x19\x1D\r?\u00BDj\x1D\x0E\u0085`\u008E\"\u008F\u00F3\u00A1m\x7F\u00C59\u00B9"+
            "\\[\u00B0\u00BCm\u00C3\u00BDom}k@\u00D3&\u00FB\u00BDw\x7F\u00F0.\u0096\u00A5\u00BE\u00DF\u00BE\u00F8\u00F0\x0F\x1F\u00BF+'\u00F7\u00BE\u00FB"+
            "\u00EF\u009Br\u00CB-$\u00E0\u00E3\u00A6\n\u00CC\u008Fi\u008E\x1Elx\u00E5{?\u00F8s{\u00FBD\u0087\u00FA\u00A5\u00ED[P \u00B7\u00F7/\u00AF\u00EC"+
            "\u00FE\u00F5onx\u00E9%\u00D8\u00A4\u00B0*\u0084/\u00C7\x7F\u0091\x1B\u00EF\u00D90\u00A9\u00B9nz%\u00F1y\u00D5\u00EE\u00BE\u00F8\u00C9\x0E\u009A"+
            "\x12\u00FC\u0096e.\u00A9p^\u0087\u0082d\tE\u00A2H&\u00AC \x17\u00D7\u0094\u00B2\u00A3\u00ED\u00FA\u00FC\u00EA)\u00D7\u00FC\u00DB\u00EF\u00B9"+
            "\n\t\u00EB\x04\u00DD\u00AC\u0091p\u00D3o75n\u00AD\u00BB\u00BDn\x1Bv\u00BB\u00A3\u00FB\x0E\u009C\u00BE\u00FD\u00EE=\u00A9x\u009E\u00AC\u00D6H"+
            "\u00F8\u00A1\x0Fv\u00E0\u00A0\u008F\u009Eh{d\u00FDUC\u0088z4\u00ED\f\u0083x~\u00963\u00C1u\n\u00C6\u00C3'x\x06\x1A\u00CB\u00A5\x16\u0081\u00B1"+
            "\u00C3\u00DE \u00D3\u008D0F\u00ED[\u00DF\u00AE]\u00B1\x06:\u00CC^0\u00AF\u00B4\u00AB\u00A3\u00CB\u00D0g\u00B9\x1C\u00DE5\u00EB\u00987h6\x1D"+
            "\u00DE\u00D7\u00DD\u00BF\"\u00BF\x00\u00E5\u00E5\u008F\u00F9\x0F\u00D0\u00CD\u00FC{7\u00DC\u00A3*\u009D\u00DF|\x14\u00E6aEe\u00FC\x18g\u00FA"+
            "\x16\u00CA]\u0099\u00A5*\u00A8\u00B8\x04\t\u00E6\t\u008DE\u00CE\u00E2\u00D2e\u009B6\u00F5\u00AEYk\u00FA\u00FC\u00A4\u00A8D\x10\u0092d\u00D4"+
            "\x07D\x03\u00AC\u00AD\u00C4\u0082^\\\\*&\u00C4\u00F6\u00C0@E\u00C5\u008D\u00D55\u00A7\u00D6\u00AEo\u00D1\x12\u00F0< K\u00F9\u00B3f#\u00BF"+
            "\u00DF\u00B6\x1D\u00C4\u00E9.,\u00C8stu\u00C7AI\u00E0\\\x1E\x0F\u00F6\u00F9\u00F8\x01\u00915\u00FDs\u00EB\u00CB\u00DF\u00AE\x07\u0096\x1B\u00D8$"+
            "\x1E\x1FRdK\u0091\u00DC\u00B2\u00EB\u00AE\u00DBn\u00ACz\u00E4QL\u00C8\u00B8W\u00A64\u00A7\u00A4\u00EC\u00B6\u00B2\u0092\u008Eko\x04\u009F\u0085]"+
            "\x1E\u00E4\u00F3#\u00D5\x01\u00FB\u00C1E\u00C5\u00A2'\x16\u00CC\u00E4~\u00CE0\u008D\u00D6Sms\u00CB\u00C8\u00C2\u0099y9\x01g\u00EFp_\u00C0g9\x1C"+
            "\u00FC\u00BD\u00A2pf+\x12r;\u00B8(\u00C5SX\u00B7Xi>8\x1C\u00E2\u00F2\u00E8ap\u00AA\x05\u00C5\u00BC\u0093\u00B0-\u00DCd\x14\x17\u00CF\u00FE"+
            "\u00E7'\u00AD\u009E;\"\u00CDG\u00FD\u00CBW{/\u0099W\x13\u00F4\u00B9GGs\u009C\u00F2\u00B4\u00F9\u00F3HY\x19E\u00A4\u00A3\u00FE\u0083\u00C3"+
            "\u00A6\u0099\u00EBvw\u0086Bg:A\u00F2\x7F\u00F0\u00F4iu\u00FA\u00F8\x1B \u00B5\u00DC\u00B4k\x17\x01\t\u00C2\u00B8\u00EA\u00F2\u0095\x15\u00AAR"+
            "\u00E9P/\u00B9h.\x0B\x04`S];w$\u0088\u008A\u00CEF\u009B\u00FC\x1FLr\u00AF\u00B9z\u0082\u0083\x10\u009Av\u00B4\u00E7B\x17\u00F8\u00AC%\u00C5\u009F"+
            "\u00D4\u00ED\u009E\x7F\u00FD\u00B5\u00D42\u00D3\u009E\x1C\u00E1\u00B3\u00B0\u0088\u00ED\x1D\u00F0G\x07\u00CAUUs\u00E7\u00CE)\u0094\u00C0\u00E4\u00A3"+
            "\x02I\x0ETU\u00D9\u009B\x10\u00EF\u0094\u00D2)S\x022\u00B6\u00B8\x06\u00A6!\u0085p\x0B\u00A4\u00EC\u00D2e5\u00B2\f\u00A0D\u00A6ck\u00E1\u0080\u009E"+
            "\u00AC\u00BE\u00FD\x0E\u0084\u00F1\u00C77\u00EC\u00989g\u00D6\u008CZ*V\u00B7\u00BD\x7F\u00E6\x14\u0088\u008D\u00EF\x10%\x12\u0089xd\u00B80\x07\u0097"+
            "\x17\u00B8\u00DC\u00AA\u00A2\x12\u00E4u!\u00BF\x1By\u009D<Ts\u00AA\u00C8\u00E5DA\u009F2\u00BD*\u00AFf\u008A{B\u0099\x03$\u00C0\u00EB\u0092\u00F3"+
            "\u00BC,n\u00B13\u00CF\u0085\u00B9K\x03\u00F7.M\u00BC\u00F5\u0096\u00A1m\u00DB\x19\b\u0096\u00D77\u00FB\u0092y\x15\u00AA\u00A3Tu\u00CC^\u00B2\u0094"+
            "\u00F2\x1E\u00E8\u00E8\u00B6\u00BA^-\x05\u0094\u00D6\u00B8+<\x0B<~6\u00D4\x07_V\u00D3\u00C9v\u00E3x+\u0098\u0099\u00C2K\u0097O\u00F7xk\x15W"+
            "\u00D5\x17n\u00E0\u00CA\u0089q\u00E3\u00CB\u009B\u00B1dq5\x00\x15\u00B4,\u00A6i\u008C\u009B\x17\u00CA\x07\x06\u0083\u0093*+\f\u0082\u00D2T6t"+
            "\u00A6k\u0088\x7F\u00EB\u00C80@\u00D1\u00B9\u008Bd\u00DC\u0085\u00C3s>\u00D00\x05Ba\u0085\u00B3g\u00F9\x12)\u00E8\x066\u00C6~\x0F\u0086"+
            "\u00D5\x1E\u0085)\u00D71\u00FE\x00\u009Ek)>\u008A\n\u00A0@\u00A4\u008AY\u00B3\u00F3$\u0085\u009AV\u00B1\u00AA\u00BA**\u0085\u00D5\u00A7L"+
            "\u0088[q\u00F5\u00D4<Ya\u00EC\u00A3BM\u00A6T\u00CD\u00AE\u009ET\u00AApD1v\u00E2\"\u00E0\u00D2\u00B4\x1A{pzcp\"F\u00F9\u00E6$\\Q]E\x05\u0080"+
            "\u00B4\u00D5\u0081\u00E3H~.\u009DY\u0086\u008D\x1D\u00A0\u00F3P_\x1F5\x12>\u0097\u00E4p8\u00E3\u00A9\u00A4n\u0082u\u00E1\u00BE\t\x18\x02\u00DF"+
            "\u00A9\x14\u00C8\x04p]q)\u00B8(\x18\u0098X\u00E43M8\u00A8\u009E\u00E3C\u00FD\u00A6e;rj\u00EA\u0082 \u0086\u00BDe\u00DF\u00F4\x19'\u00DF\u00AB'\u00C9"+
            "\x04\u009Cs\u00E6\x17n\u00AER\u00C8L\u0084\u008B\u00AF\\\x0B\u00CAD\x06z\x1B\x0E6\u00F4\u009Af\u00DC2>r\u00BCO\u00C1r\u00F6Q\u00AE\u0093!\u0093\u00F5"+
            "\u00BCU\x07'VJKfL\u00AF\u009E\u00E4s\u00E7/[\u00C1{\u00F6u\u00EF;zT\x02\u00DC\x0B\u00AE\u00C7b\u00C9\u00F7\u00EB\u009F[\u00B4p\u00E3\u00A2E\u00C3"+
            "\u00AF\u00BD.\x1C\x16\t\x16\x152!\u0089\u00D4\u00A2\u00ED\u00CF<\u00F5\u00DC\u00A2\u00C5/\u0088\u00EF\u008D\u008B\u0096\u00EE\u00DF\u00BD\u0097c}"+
            "\u00CE=k\u00CF\x17\u00EF{a\u00C9\u00C2m7\u00DD\u00C0\u00A2Qp\u00FAry\u00F9\u00F6\u008D\x1B_X\u00BC\u00F4\u0095\u00E5\u0097\u00B2X\x1C\u0084)\u00F6"+
            "\u00CA\u00CB0\u00F6\u00F9%\u00CB\x1A\u008F6\u00A5\u00B5j\u00A0\u00FF\u008F\x0B\x16<\u00B7h\u00D1\u0089\u00A7~J\x05\x03\u00FC\u00A5\u0085^B|\u00B2T"+
            "\u009A\x1B\u0090\n\u008B`b\u00A3\u00AB\u008B\u00A5\u0092\u00F0*OHCF\u00BF\u0099m\u00BD\u0084\u008E\u00E2\x19\u0097\u00AF\u009A\u00E8VY\u00C6\u00A4"+
            "\x00`\u00F6\u00F8\x03X\u0091\u0081\u00E1\u00A9\u00C3\x07~\u00B3h\u00C9\u00F3K\x16?\u00BFxI\u00EB\u008F~ \u00E0\x14\u00F1\u00B8]\\\u00CB\u0085\u00E5"+
            "\u00821G\u00DB:6-Y\u00BAq\u00C1\u00D2\u00D0\u00AB\u00AFSP\u00B2\u00E1\u00E1W\u00D7\u00AC\u00FE\u00E3\r7#Cs\u00B9$>\u0084\u0092\u00A0K\u00F1zQ\u00C0-b"+
            "\x1C\x02N\x00G5\u00F2\u00C4+\u00C9\u00B7\x0Fi\x063%I\u00D2@\u00F2M\x1Cp\u00E1!\x00\u00E8 \u00C2\u0094\u009E\u00FC\u00E1\x0F\u009E[\u00B8\u00E0\u00A5"+
            "\u00D5\u00AB\u008C\u009En\u00D0\x0197\u00B7\u00E7\u00F4i\u00AD\u00B5\x15\u00B8\x18\u00B8\u00EC\u00B2i\x1EO\u00ED\u00E4\tj\u00F5t\u00D8H\u00FF\u00DB;"+
            "\x0F\u00EBI\u00AF\u00CB5\x10\u008B\x7F\u0084w\u00F2\u0085s\x1B\x7F,\u00B8\x04\u00C4\u00DBT\u00B7}\u00E2\x03\u00FF\u00C8d\u00A5\u00F6\u008AU\n\u00D0"+
            "\u00B8\u00BC\f@s\u00EF\u00D6\u00BA\x13\u00869\x03\f\x13P\b\u0094\u00DE0\x0Ft\x0F\u00B4X\u00DA\u00F4\u00D76_v\u00F5\u00D50Vq9q*!\u00F0\x02N\u00C5"+
            "\u00E2[Nu\u00ED\u008BE\u00EDufx\u00BDk\x04p\u0083w\u00C3\u00E1\u0091?\u009C\u00ECY\u00D0\u00DDwYG\u0087sf\u00AD\u00A2:;c\u0089?v\u00F7~\u00B1\u00A8"+
            "\u0084\"Sb\u00D8\u00D4S\u00F5\u00DD\u00BD;GG\u00D6\u00F8rd$\u00C2\x18f\u009D\u00E8\x1Fx-\u0099\u00CA\u00F9\u00F7\u0097'}\u00EDa\x1E\u00F38U\u00E0j@"+
            "\u0092Kao.\x17\u00AC\u0098|\u00F7\x1D\u00CF\u00AA\u00CBq\u00B1\u00CB?yr\u00B1L\x1Cx\u00FC|\x18l\x03\u00E1l\u00AFZ\u00B7\u00AE\u00E8\u00B9\x17\x18>"+
            "\u00DBq\u0088\x05\u00C2\u00FB\x0E\u00BE\u00D6\u00D1\u00F9a,R\u00A9:\u00F3\u00B6\u00D6\x15\u00CC\u009E\x05\u00CA\u009A\u00E8\u00EC\u0095-\u009C\u00A1,n"+
            "\u008C\u00C5\u009F?\u00DD\u00BF\u00C2\u00EB\u00BBQ\u008F\u00DB\u00A3\u00BAO\x0F\u00FF\u00AF\u00AEN\u008Da\u0089`\u00C3\u00B4\x06G\u00CDC=dpD\u00C1"+
            "\u00B2\u0095\u00EB\u00A6\u0085.@pXJ1\u00B0V\x7F\u00D8\x19{}_\u00EA\u00F6\u00E52\u00D3\u00A9&3\u00A7\u0093%Et\x0E\"\x15\u008B\u00C6_>\u00D5]D\u00A4"+
            "\x15\x07\x0E\x14\u0096\u0097\u0082\bF\u00B0\u00D4\u00BDu\u00EB\u00A4\u008B.\"\u00DE\u00C0\u00EC%\u008B\u008BK\n\x19L\x04\x1Bx\u00FD\u00D5\x0E\u00CDr"+
            "\u00BB\u00E4\u0084\u00FE\u00D1L\u009E|\u00A1*nYS\u009D\x0E.\u00C6\u0094Co\u00DBku\u00A6\u0092\x07\u009BZ\u00D7v\u009E\u0092'M\u0099\u00B4|U\x1E\u00F8YI"+
            "\x06\u00CDh|\u00E3\u00CD6]\u009F#9E\u00C8c\u00D9\u0086:aP\x13\u00EC\u0092\u00F0\u00DF\x1C\t\u00A4%\x0F&\u00A3\u00B9\u00B2\u00B4\u00D0\u00EB\u00B5]"+
            "\u00B6Wu\u00D9\u00F1\u00AC\b\u00FCY\u00CC\u00D4u\u00C5\x01\u00D6L\u00B8#\n\u00FA0bY\".\u00B3;\x11`\u00D2\u0080a\u00801\x111\u00A8\u0088\u00D9\u0090"+
            "\x14N\u0081E4\u00EC%\x18\x18\x1B\u00C6\n!\u009A\u00A8\u009A\u0082 \u00B8bh\u00E0`CqM\u00AD\u00A7\u00B8T---\u00F1\u00FA\\\u00A3\u00A3\u0099\u00CC\x00"+
            "\u00D3ZZ\u0095)\u0093\u00B0\u00EAt\u00CD\u00BDx\x12`Of\u009C\u0081fY:fw\u00BBs\x10\u00AEu\u00BA@?\u00EB\u00DB:\u00DF\u00FD\u0087\x07\"\u00A6%KxN0\x07"+
            "\u00A5\u0093\x16\u00CC`\u00D6\u0090\u00AE\u00C3\u00B6x\u00C2 \x1D\u00EB\u00E3\u00A8a\u0099\u0084\u00FB\u00B9\u00E1H*\x1CK\u00CE\u00A9tt\u00B8"+
            "\u00F5W>0\u00DB\x07\u00F1\u00F4r\u00F4\u00A5\u00F5\u00EAPH\u00BFj.+\fJ:\u0091\x1AO\u00C1\u00D1\u00D0\u00C4|\u00CB\u00E7\u00C2}qK\u00C4\u00E3"+
            "\x1C\u00D9i\u00CCJ\u00C1dz\u0092O\u00C9]\u008A\u00D4P\u00B7m\u00F2C\x0F\x01\u00A7\u00E7\\\u00B1\u00C2S6\u0091\u0083\u00EEX\u00E4\u00F0\u00AE"+
            "\u00BD]z\"\u00E0\u00F0~\u009C\u0095\x17\u00CA\u00F2\u00D9\u00D7_\u00FB\u00C3y\u0097\u00C0\x1F\u00F9\u00B3f\u00A2\u00B4\u00F0\u00E3\x18\u00A5"+
            "\u00CD\u00B1\u00C8\u00E0\u008E\u009D\u00C5S\u00A6:f\u00CE(()\u00E2O\u00C3\u00A1\u00C6=\u00FB;Rq\u00E4q\u008A\u00E3s\u009C\u00EFal\u008EC"+
            "\u00CD-)M\u0087^x,\x03C\u00CAW\u00AC\u00FA^n>\x11\u00D1?\u008DE\x7F\u00BB\u00F17X\u0098H\u00EE\u00BB,<\u00CF\u00E5.Se\u00B9 \x0F\u00DC\x15\u00A8\u0080a"+
            "\u0081\u00EF\x14\u00C6S\u00A4\x1B\u0084\u00DB\u00C4i\u009C\u00C9\u00A9\r\x02@%K[\x1A\u00F0\x17TLH/a\u0081'DA\u0082\x0B\u00A7\u00D5\u00F2U-\u00EBX\u00F31"+
            "\x7FG\u0087\u00F7\u00E2y\x00\u00D1\u00CB\n\u00F3\u00DC\x03},\u00A3\u00CAV\u00FBI\u00C0\x07p\x16\u00AC*\u00F3.[~h\u00E7[i\u008E\u0083M3D\u00E2\b\u0093"+
            "\u00BC\u00F5W~\u00FF\u0089x\u00AC\u00AF/24\x18\u00EA"+
            "\u00EDk;z\u00B4\u00BEw\u00B8>\x1A\u00BD8'\u0097\u00B0q\u00FC9\u0096W\u00C26hG<0\x00\u00C7\x7F\u00E8\u00949\x12\u008F\u00C1\u00CE%li\u009A5o\x12SeT\x14"+
            "\u0094\x1AZ\u00E9\u00A8\u00C9\u0088\u0089\x0B\n\u00BD\x0E\u00AC\u00CE\u009Bj4u\u00EA\u00C7\u00FA\u00B9\u00D0\u009D\x1A\u00E8\u00EE\u00EC\u00E9\u00AE"+
            "\u00AC\u009C\b\u00FAV-;\u00FC\x12v\u0097V\u00D8\u008AH1m9v\u00DC\u00EAh'U\u00D5\x05k\u00AF\u00C4>/\u008F\u00ECw\u00D4\x1F\u008C\u00C7U\u00A72\x10K~F"+
            "\u0096\u0083o\u00F5_{\u0083\x0Ft6\u009D\u00B4\u00CA(\x05b`\u00C0"+
            "\u008Fn\u00DDR\u00BA\u00E1\x1E\u00E4t\u00A3\u00B2J\u00E8:\u00F2\u00CE[\r\u00F1X\u00C2\u00A2\u0082\u00B5\u00FC\u00ACJM\u00EDw_x\u00869\x1C\u00B9\u00CB."+
            "\u00B5\u00BDe|(\x04\x06\u00CE\u00E6\u00BD{\u00F9e\x13\u0097_fG\x06Fw\u00B7\u00FC\u00FC\u00AF@\u0085\u00EDT\u00D8\u00E2o<\u00B8 <\u00AAVTJ\x15\u0095"+
            "\u00C0\u00DCx?\u00A8\x01\u00C0<v\x06\">\x03\u00BAc\x11\u00FD\x07\u0083_z\u00FEY\u0088j\u00FD\u0097,\u00E6Y;,\u00C7\u00FB\u00FAb\u008CV\x10)\u00A7v:"+
            "\u009F5\u0095:\u00D5\u00D59\u00B5\u00A9\u00A9\u00E0\u00FA\u00EB \u00EC)"+
            "\u00AB\u00AA\n4\u00B5\u00B2LF\u00CFr:\u00C3\u009B7\x17\u00CF\x04\u00B1F5\u00EB\u00AF8\u00FC\u00F6\u00D6L\u0080\u0082\u00C2\u00918\u00D3t\u00AC\u00A8"+
            "\u00D8\u00EF)\u00BF\u00E7^b\u00E7.\u00804\u00C3C\x17\x7F\u00FB;\x1B\u00FF\u00F2\u009A\u00853\u00B8\u00FF\u00AC\u008D\u00A5M\u008D\u00C93\x05V\u00C1"+
            "\u0084\u00A9k\u00EF\u00FB.\u0091%B-\f\u00A0\x12\u00FC\b&\x0B\x07\u00FB\u009F\x7F\u00F6\u00B9\u00FA\x0F\u00BB|\u009E\u00C25kW/\u00B8\u00F5.\u0089\u00A7"+
            "\u00FD\u00F0\x02\u0080\u0080\u0086q\u00F8P\u00C3O~"+
            "\u00F2\u00C4\u00EE]\u00BB+'L\u009Cz\u00EB\u00CD?^\u00BAP\u00CD\u00CF\u00F7\u00CD\u009F\u00CF\u0081\u00E4p(\x14O\u00B6\u00A7\u00CC\u0081\u00ED\u00EF"+
            "\u0094UMC%\u00E0\u00EFxD\u00D8\u00B4\u00F9\u00F5S\u0086\u00E6s\u00B8\u00BA#\u00C3\u009F\u0091\u00E5X\u00A49\tO/\u0092t\u00A2\u0093\u00A5S\f]Z\u00AA"+
            "\u00E1\u00C0\u00E1\u0095\x03\u00FD\u0098k0\u00B7\u00F8\u008Doln7\u00A9m\u00BD!\u0092\x00XB\u00CA*\nn\u00BA\x19\u00D9\u00D0\u0094\u009A`\u00E9\x06\u00FBz"+
            "\x03\x15%6\u00D1l\u00BD\u00B7s\u00B8\u00C4\u00CE\x13\n\u009EBd"+
            "\x1B\\\u00B5\u00C6\x0E(\u0099\u0080\u00FD\u009Dom=I\u00ECP\u00FC\u00BC\u00D9c\u00C9\u00E3\u00CB\u00BF\u00E9\x0Bc\u00D9X\u009AH\u00B4\u00D4\u00D7\u0087L"+
            "\u00BA(\u00C7\u00EB\u00AA\u0098\u00C0\u00D3\u00C6\u0083\u0083\x03\u00A3\u0091\u00FE\u00E3\u00C7\u00AAx\x10\u0080K\u00AB\u00AB\u00F3\u00B8\u00F3#6\u00D7"+
            "\x01Y\u00ED\u00D9Zw\u00CD\u00FF\u00F8&l<x\u00D9\u00F2R\u0088\u009AQ\u00DA\x15\u00F5\x19\u0086~`\u00AF\u00BA|%N\u00CB\u0080P\x05\u0088\u0096r\u00F3\u00E7?"+
            "\u00F6\u00D8\x07;\u00EB\u00B9\x1A\u009FK_\u00C4"+
            "\u00E90 g\u008A\u00A5\x7F\u00FA\u00A7o\u00DEy\u00E7mc\u00CAo\u00E7\u009A`\u00AE\u009C`\u00F0\u0091\u0087\u00EFw(\u00A9g\u009Ey&7''\x13\u00EC\u00F1\u00A3~n"+
            "\u00FD\u00FA\u00E6\u00A3-\u0087\x1B\u009B\u00D6\u00AC\x1D\u00CE\u00B9d\u00BE{\u00FEB{V\u00E0\u00C8\u00E0{\u00EFu\u00C4\x13Gu\u00BD\u00E9\u00CD7K\u00BFx"+
            "\x1FO\u00E0\u00F1\u008Cn\u00EA\u00D0\u008E\u00F7\u00DBS\u00C9\u0080\u00AA\u00B0\u00F3d\u00F8/@\u00CB\u0099MBY\u00C4\u00AF4m\u00B0\x10\u00E7&\u0095I\u00F3h$"+
            "\u00B4\u00EB}\u009B\b$\x1Ek\u00AA\u00DF\u00DD"+
            "\u00A3k\x0EU\x15\u00BEX\x00s\u00DB\u00F3\u00DB\x10\u009D \u00B3\u00A5\u00B9\u00F5\u00F4\u00A0DI\u00DA\u00C0\u00A7\u00D5!\u009D\u00B5\u00C0T\u00C2\u00CC"+
            "\u00CE\u009A\u008A\x01\u00E9\u00F1\u0088Fc\u00CD\u00DB\u00B7\u008F\u00E8\u00DC\u008B#\u00C4>)x\u00CC\u008C\u00E3f\u00E3\u00E8\u0091c\u00C7O\u0099"+
            "\u0088U\x04s\u00A5\u00E2B\u00987\u00D1\u00DD\x13Ih\u00DD\u00ED\x1D\x18\"=Lsf\u00D4\x16\u00CB\u00B2\u0085\u00AC\u008C\u00A3"+
            "\u00C1G\u009A\u009BXG'_='\b1\u00BD-\u00BB`.\fE\u00DD\u00F6\u00F8\u008FXww\x1A&\u008A\x176\u00A4\u00C0\u0085E\u00D3/\u00AA\x15\u00D6\x1F\u009F+\u008D"+
            "\u0089Zzz\u00DE$\u00A1k\u00D6\x04UE\x12\"\u0090\u00D9\u00A7\u00C8(A\u00A7\u00AE\u00CE\u00EE\u00FF\u00B6\x12\u00DD\u00B2\f[\x1C\u00AE\u0088\u00FD\u00931"+
            "\u009F@W.\u00AA m\u00BF\u00DE\u00B4i\u0093]\x1A\u00C0\u00B6\u00953\u008C\u00B6\u00D7^\x1B\u00B0X{*\u00D5p\u00A4\u00D9\u00EA\u00EF\u00E3\x12HQ\u00E2"+
            "\u00C3=\x07B\u00C3\x00G\x06\x13\t|.B]\u0098/\u00C7\u00B8"+
            "\u00EB\u00A9\u009Fw6\x1E\u0081\x15\u00A7\u00ADZ\u0099w\u00FB\u009Dc\u00C2\u00E0Q\u00D5cz\u00EA\u00F8\u00EB[\x16^\x7F\x13\u00A8Jd\u00E7;\u00FBBa\u00E4P"+
            "\u00B0f\u00A5\u00E1\u0099\bJqZ3\x199=\u00B4\u00E3\u00DB\u00DF\x1A`\u00B2H\u008Ar\u00BB0\u00F4\u00A7\u0097\u008E\u00BFUg\u009F\u009F\u00A5t"+
            "\x1D\x00\"\u00B6\u00F3\u00E0\u00DCWq\x19#<\u00A1&\u00F9\x03K\u00BE\u00FC\u00E57\u00FF\u00F1\x1B\u008D\u0098}R5\u0088G\u00E3\u00A6(\u0085p\u0091R\u00E7"+
            "\u00CD_\u00BC\u00FA\u00B2\u0083ol+\u00AC\x04\u00B8\u00EE\u0084\u00D7"+
            "\u008AC\u00FD\u00D2\u00FD\u00FF\u00E0rA\u00B8e\x11$\x07&O\x06\u00D7(\u008FOH\u00FB\u00902\u00B0\u00F9\u00D5\u0092\x07\u00BF\nF\u00D7w\u00F9\x1Ap\u0097H"+
            "\u00E6\u00CC\u00EC\u00D7\u00B4M\u00FB\x1BO\u00ACZ]3czNY\u0099??\u00D7\x15\u00CC/\u00BB\u00FE*u\u00C2TX-\u00AF\u00AC\u00BC\u00E5\u00D0\u0091\u00F3"+
            "\u00A9L[O\u00AF\u00A4\u00A4\u00EE\u00B84\u00D8pr\x7F*\u00F9y\u0089\u00E7WY:)\u00C4\u00D1\x0E\u0095\u008CTy\u00A9\u00DA7"+
            "\u00CC\u00DAN\x1E\u00CB\u00F1\u00CF\u0081\u0090\fg\f\t\u0092\u0098\x1Bi\u00EF7\u008E\u00CE-\x0Fq\x1B\u00C8\u00ABEBSde\u00EE\u00D7\u00BF^S\u00BFkg\u00C4h"+
            "\u008A\u00C4B;\u00DF\u00CE\u00BF\u00EDNxs\u00F4\u00CD\u00CDm\u00BA\x11p:Z\u0087c\u00E7\u00DC\u00CD\x05\x1Av\u00D4q\u00A8\u00F1\u00C9\u00CD[\x14F~PQ^"+
            "\b\x04\u00B0\u00C6*]\u00A8\u00C70\u00BA\u008E5/6M\u00A6*\u00A3\u00FB\u00F7\rZL\u0091q8f2\u00DB\u00E9S\u00AA\u00ED"+
            "\u00FD\u00B0\u00EE\u00FB\u008F\x11\"\u009B\x16\u00EDj\u00EF\u00D894\u00D4\u0096\u00D2\u00AE"+
            "\u0093\u00D2 p\u00F8x\u00EB\u00D3\u00AF\u00FF\u00B5S\u00D3\x11\u00AF\u0089\u00A0\x12\u00A7\u00F3\u009A\u00B4\u00E5b\u00CD\u00FF\u00FD\x1Bm'\u00DA'"+
            "\u00CF\u009BU\u00F3\u00AD\u00EFbY\x0EN\u00AF-\u0093%\u00E5\u00FC\u00FC\u00E6\u0080o\u00B0\x7F\u00E7\u0086\r\tU]r\u00FFW\u0083W\u00AC$X*\u009D9\u00C3"+
            "\u00F3\u00C6\u00D6\u00F2\u00AA\u00A9Bt\u0088{\u00FE\u0082\u00E9\x0B\x16\u008EAp\u00B5\u00B4,\u00DF\u00E3\x19\u00CB\u0091\u00F1\u00DC\u008D$\u00ED\u00DF"+
            "\u00BA\u00E5\u00AA\x07\u00BE\n\u00E4\u00F3\\~\x05\x04OLX\u00DF"+
            "\\E\r\u00EBZs$zl\u00CF\u00C1\u00B8\u00B5\u00BF7\u0099\u00C8W\u00A4\x07\x0F\x1DZ\u00FA\u00E2oy\u00A6\u00D5\u00E1\x1C+\x04}\u009Cz\u00D1H\u00B4c@\u00BB"+
            "\u00E3\u0087\u009D\x17W\u00FD\u00AB\u00AE\u0094\\u\u00DD\u00D5y\u00FE<\u00E04\u00AF\x0FQ\u00DA?8t\u00EA\u00D0\u00ABE\u0095\u0092\u00DB\u0091\u00FA\u00DD3"+
            "\u008F&\u00EF\u00FB\u00F6\u0094I\u0095\u0084G\u00EF\u00D8\u00D0\u00CD\u00AE\u008E\u00F6\u00FF\u00F9\u00A7\u0097\x1B\u00DA\u00B5@{[\u00EF/\u009F\u00DEW"+
            "\u00B7\u00BDxB\u00F9\u00FC\u009F<\u0081=>\u00E7\u00E4)"+
            "\u00C5~\u008FsD>m\u009A\u0083\u00FB\u00F6\x17\u00DCv\x17H\u00C3HKs\b\u009C\bX\u00B0\u00F38\u00C0\x0B\u0084o\u00DC\u00D7\r\u00A447I\x17-\u00C6+\u009Ex"+
            "\u00ACR\u0088l[\u00CCM?\u00CF>\u00D8\t\x0E\u00BE,M\u00C4^\u00DB\u00D7\u00B8+\x16\u00D7\t@n\u00A6K(\u008FI\u00E3\u0089ODGL\u00A3\u008Dj\x1EI\u00D1,*"+
            "\u00892\u009F\u0088u\u00ACS'\u00DB\u009F}\u00FF\u00C3K\u00F6\u00ED\u00FF\u00EE\x1Dw\u00C9\u0093\u00A7\u00AA~\u009FW\u0096E\u00D5\u00F5\u00BC\u00A2"+
            "\t\u0080\u00FC\u00FD\u00FD\u0087\u00DE\x05\u00A4\u0094\u00F8\u00E9UkV"+
            "\u00F3BE G\u00B1h~u5;\u00AB\u0084\u00936\u00E3\u00D8\u00EF+*,\x1C\x1A\x1A\u00B2\u009D\x05\u00A1\u00BC\u00FAu\u00A0\u00E1\u00C8\u0095\u00FD\u00BD\u00B8"+
            "\u00A4L*)\x15\u00E5\x10\u0090NkV\u00D0s\u00D3#\u008F#\"\u0085v\u00EDz\u00F8\x0F\x7F\u00FC0\u0095(\u00B7\u0094\u00C1\u00D3\u00FD6\x1A!\u00EC\u0093"+
            "\u00EA\u00D0\u00C3\u0083\u0083.\x15\u008F\u00C4Y\u00A5?\u00D6\u00F4\u00C6w\x1B\u00B7?\u009F_6\u00A5 \u00CF\u00EB\x059\u00D1\u00FA\"}'\u00AC\u00D1"+
            "\u00E8PHr(R\u0089V\u00F7\u00D6\u00B3\x1F\u00BE)\u0097\u00FB\u00BD.\u008F\u0093\r\u0087\x06q\u00B2?_2\x03n\u00AC\u00A5\x12\x03\u00BD=\u00BF\u00DE"+
            "\u00B5\u00B7h\u00F7\u0081\u00EA\u009Bn\n\u00AEX\u00C5<N\u009F\u00E2\u0090\u00B0]\u00F9\x1D\u00AB\u00D0r\u00EBo2z\u00BE\u00CD\\\u0098\u0096\x0B"+
            "\x1F\u00CC\u00D2\u00E9\u00E3\u00B3\u00ED\u00EA\x19\u00F0}\u00FC7\u00CB\u00A4.H\x1AGAl5,Y\x1E\u0087\x13\u00CC\u00A9\u009EL1b\u0093\u0088\u00FBz"+
            "\u00D0\u00E6\"I\u00B9\u00C8\u00B2\x13\u00F08W\u00A8\u008B\b\u00B9ym\u00BE_O\u0086d\u00A7\x11\x0E\u00CBbmI\u00E0\x01\u00CC\u00F0\u00F9\u00B7"+
            "\nG\u0095\u00DA\u0093\u0091\u00E8\u00F00\u00C1\"\u008FG\x11\u00AC\u009A3\u00BDF\u00E4i\f\u00B3\u00B9\u0085\u0097\\a\u0086\u009C\u0080T^\u0089d"+
            "\u00B5t\u00EA\u00E4\u00D3\u0083\u0083\x19\t\u00B6\x12\u0096\u00D5\u00AB\u0099C[\u00FE\u009A\x7F\u00CF\x06\u0098J\x12\x17\x04 \u00A4r\u00C8\u00A4"+
            "\u00FC\u00E6[\u0090,\u00B9T\u00B5\u00F8O\u00FF\u00BE\u00C4\u00E5\u00F3\u00C9\u00C4\u00E7\r\u00A4\u00CD\x0B,\u008C\u00CF\u0088f\u00CE\u0086o5"+
            "\u00D3k\x14\u00C2\x0B\u00EA\u00C31\u00EAs\u00D3\u00DA\u00CA\u00BE\u00FC\u009CxE\u0081\u00D7\u00A9\u00A0\u0094\u0086\x0F\u0085u\u009F\u00C7"+
            "\u00B9\u00EC\u00A2\u009C\u0080\u00DF\u00BBmw/\u00C6\u00A9\u0089%\x03\u0085\u00B9n\u00F0,]j\u00E4x\u00971\x14\x06iU\u00D6\u00AD\u00F9\u009C"+
            "\u00D2\u00D5\x1E6u\u00C0\u00FB\u00C9\u0091\u0091\u00A0\u00A8\u00C7gb\r6N\x13\u009B\u00F4\u00E7\u00BFZq\u00A1q\u00F9\x19\u00F5\u008As\u00D3"+
            "\x1Bg\u0094}\f\u008F\u00E1\u008C\u00DE\x13\x01\u00C5\u00C1Pu\u0085F\f\u0091R)v{m\u00B3\x00\u00C6\u00A7t\u00F9\u008AG\x039c\u00C5\u00D0\u00BD"+
            "\u00AF\u00BEn\u00E2\u00B1K\x10i\x01b@\x18qW\u00E3<\u0099\u00C03\u00D0\x1B\u00E3B\x0F\x10@7M\x0E\u008Ex \u008D\u0082\x0E\u00D5\u00CD\u00C3td"+
            "\u00F5\u00F4>\u00B5\u00FE\u00AA~\u00F0A\x18_\u00B7z\u00F5\u00A5\u00FF\u00FA\"l\u00AD\u00A2z\u00FA\u0081\x0F>\u00C8\u00C4\u00D3\u00FC\x04"+
            "\u00ED\u00A6qh\u00CB\u0096\u00CB7\u00DC\u00CB\u00C7\u008B\u00DA\x15\u00DF\u008AIm\u00F8\x11\\\u00BB\u00EE\u00D1\u00EF}\u00C7\u00D2!\u00DCg"+
            "\u00E5+\u0097\x0B%\u00C0IS\u00C7\u00EC\u00DC\x05(x\u00B4pF\u008D\u00DF\fj\u009E\u0091\u00E1(\u00BF\u0095\x01\u00C01\u00E0\u0096\\\x0E0uL\u00B7"+
            "\f\u00D8\u00B0fH\n\u0084\x7F\u008C\u00EEn\u00D1\u0097\u00CD\u00C0\u00B2$Y\x16Kj\u00A6Lp\\gq\u0083\x15M\u009E\u00B3\u00E1\u00DE\r\x1D\u008F=*"+
            "\x122\x18'S\u00E8L\u00F3\u008A\u00CF^\u00F8c\x0F.\u009C\u00E5\u00CC\u00B6\u00CCi\u00D9=K\u00BD\u00D3\u00E93|F\u00A9\u00FB\u00A3\u00AA\u00CFP&"+
            "\u00C9\u00C6\x04\u00E5\u00C9\u0099\u00A2\u00C72wY|+V\x06V\u00AC\u00B2\x11*H\u00C0\u0089\x03\r\u0099\u00B0m\u00ACh7\u00A6<\u00EC\u008C\u00A1"+
            "\u00E3\u0093gr\x04\x19Ks\u00E6\u00D6\x04?\u00F2s\u00FCRQ1\u00FC\u0097\u00E8\u00EC<\u00AE\u00E9\x7F\x1E\r\x15\u00C8\u00EA\u00FC\u00B6\x13H7"+
            "\u0090\u00AA\u00E6\u00D4NsPjo\u0097\u008A2xw*yh\u00EF\u00FE\u0095#\u0083R~AfJ+<\x1Ae\u00C9$\u00C0H\u00E4\u00F5N\u00F8\u00CA\x03<\u00CD\u00C7"+
            "\u00F0\x18}\x12\u00C3#\u00E3\u00FBac\u00A2\u009A\u00DE\u00B7GQ\u00AF\u00F1\u00E5\u00FC\u00BCgt\u00D6D\u0092J\x1A\x11^\u00CB%&/\u00FC`\u00CD\x00D"+
            "\u0089\u00E2\u00C9\u00E4C\u00CFt\x19\x18-\u009A\u00CA\u0080\u00E1\u00AAL,h&\u00D3L\u00CB4XB\u0093\u00D6\u00DF\u00BC\x1E\u00DC\x1A8h\u008A\u00C7"+
            "\u008A\u00C3\u00EC\\\x05\u00EF1J\u00B1O\u00B8\u0086\u00F5\u00C9&\x1D\x00+\x137/l\u009C\u00C8,\x00\x1DL\u00B8jfk\u0091\r\u0093\u00D3\u00C1:M\x17"+
            "\x16\u00F8\x03\u00CA\u00B5\u00CD\x06\u00ED\x19\u00ED\x1C7\x146y,\u0088H$q\x7F&m\u009D\u00F8\x1B\u009A\u009EIpA\u00A8\x18\x15\u00E6?}\rh<-`\u00FF"+
            "\x14f\u0083\u00E7u\u00B1%\x18\x00D\u00B1/KYB\x10\u00A1\u0099%%\u00A5\u00BC0\u0089p\u00E8\u00F8\u00F1\x01\u00C3\fz]\u00A3\u00D4\u00E8\x1B\x1Cd"+
            "\u00D1\b\u00CF2M\u0098\u00E0\u00C2\u00DC_\u008B+M|\u00BAa\u00D3h\u008A\u00C7\u00A2\u00DB\u00DF\x19\u00F3V\u00E0\u00AC{-S;\u00B0\u008F\u009B,"+
            "\x0E\u00BAD\u00FA\x13\u00F3\x02\x02_QKv\u00B4\u00B6\u00F2{6\u00C8\x0E5DAG\u00C4\u009A6\u00E5\u00E0\u00A7\x0B\x18i\u00917\x0E\u009A\u00A7c,"+
            "\x14\u00A2\t\u008D\x0E\u008F\u00A6\u0086\u00C2\u00A9xJ\u00DB\u00D7j\x1D\u00EEE.\x1F\u00F3\u00BA\u00E4\x03\x1D\u008E\x17\u00B7[\u008F\u00FCnh$b"+
            "\u0098\x14\u00C5\x12\u00C6H\x02\u0095{\u00A6=\u00F0\u00E0W\u00B8\u00DE\u00D8.\u0089\u00E3yj\x0B\x1C\u00CD\u00F0\u009E\u00D9\u00F7>\u00EC\u00BFxJ"+
            "\u00DC\u00FA\u008C,\u0087\u00D3\x11\u008B\u00CF!npq\u00F8C,I\u00E4\u00D5\u00A8PD+\u0093\u0093\u00B1k\u0099\u00BC\x0F\u00E1A\u0087\u00CCo*Q\u00EE"+
            "\u00B1\x05\r\u00CD\u00B1Jr\u00A60\u0085y/\u00FAQ+\u00CD\u00D9m\x03D\u00EE\u0082\u0099-@\x18\u00C9\u00D4V@\u00CA\u00ECu\u00ED\u00BBkvQ2}-\x06FQI"+
            "\u009C\x16\boI\u00A2\x1E\u00CEA$O\u00F1\u00CB\u00A5S\u00AA\u00B8\x1C0k\u00A8\u00E9\u00C8\u00A8e\u00A9D\x1A5\u00CC\u00BEH\"\u00D5\u00D7\u008B)Q"+
            "\u00CB\u00CA@"+
            "\b\x182a\u00B7\x00\u00DF\u00A0\u00A7,K\u00AD\x169\u00BAu\u008B\x10\x01\u00BE$\u00ACf\u00C8\u00EA\u0087\u00BF|\u0096\u0082a\u00C0g\u0096[9"+
            "\x19\"\u009B77\u00B6\u00F7\u00F2\u00F4\u00A78\x02/\x05\u008C\u00BF\u00B6\u00F8\x14\u00A2(\x00\u00B4,\u00F4x\u00DAG\u00F0\u00C0(\x1E\n\u00C7"+
            "\x12)3\u00A1\u00A7^z7\u0091\u00D4\x1Dw\u00CD\u009D}m\u00D5\u00C2\u00EBk.YWU{q\u00C1\u0084\u0093\x03f\u00DF\u0090\u009E\u00D4\u00B4\u00E1"+
            "\u0088~\u00AC\x17\u00AF\f\u00E6\u00E6\u00FA\u00FCb#<QE\u0089lgJ\u00E8x\u00F4\u008B\u00F8\u00B9\u00F9iET\x07\u00C7\x10\u0097\u00D5>\u00BDagh"+
            "\u00A4\u00A5\u00F5\u00F8\u00D3\u00BF\x00\u00E2\u0085O\u00B5\u0081.\u00C2\\\u00A7\u008F4\u00AA?\x7F\x12\u00D6\u008E\u008D\u008E\u00F0B\u00BD"+
            "\u00D0\u00EAx,~\u00EA_\u009E\u0081U\u00C3\u0087\u00C1,\u0083\u00AF1MPaYn\u00DF\u00B8\u00919\x14\u00DA\u00D9\u00CD2\x17\u00D9\u00C6\u00E8"+
            "\x14\x1D\u00EC=\u00F5\u00D4/\u00D2Y\u009E1\u00F2`4\u00DA\u00DE\u00C9\\J\u00FB\u00D3O\u00C1\u0088\u00D8\u00E0\x00G(\x12\u00EDy\u00F9Uy\u00F7n"+
            "\x16\u008E\x021a*\x00\x04'_x\x0E\u00A0U\u00F4XK\u00E6\u00FE\"\u00EE\u00DE\u00FC\u008Azp/I$)\u0091\u00C0\u00C0\u00A4\u00B4\u0084="+
            "\x7F\u00A8\u00F1\b\u008BG\u00DB\x7F\u00F13\u0090\u00B4\u00E3\u00BB\u00F7\rR\x033\u00A7F\u00D9\x003O\u00FCj\u0093\u00BBr\x12\u0090\u00D2IH"+
            "\u00DB\u00C6_a\u0087\u0093vw\u00C1\u00FC\u00F9.go2\u00B6\u00EF\u0083=\u00C5O=i\u00A7\u0085F\x0E6\f\u009A\u00FA\u00EF\u00EBw\x0F\u00AF^9k"+
            "\u00DD\x1A\u00C9\u00E5N\x07\x1B\u0094\u00F5\x1Dj\u00AC{\u00F7\u00BD\u00FAX\u00F8\u00F3\u00EE\u00FC\u008E\u008D\u009B\u00A8\u00CB\x11nn"+
            "\x11\u0097\u0096x=\u00B4o\u00FB\u00DB\u00D1\u009E\x1E0\u00DF\u009A\u0099\x12\u00C4B\u00A7\u00A3\u00B8{\u0084\x1D\u00EB\u00D0gM\u00C1:e"+
            "\u00BD#\u00C6\u00BA\u00C9\u00D34\u00D3\u00A9#Z\u009A\u00E7\x05U\u008F\u00E3\x13_Y/\x05<t8\u00AC\r\u0085\u00AC\u009E\x1E5\u00E8\u008D"+
            "\u00B7\u00FD\u00F2iXn\u00A4\u00A5\x05DGB\u00B4o\u00C7\u008E\u00F8\u00C0\x006-\u00C3\u00D0\u00EC\u00F3\u008F\x1C?~\u00EA\u00A9')R\u00A2"+
            "\u00A7\u00FB\t\u00C3\u00F8\u00B3\u00DDp\u00BD\u00C8\u00ED-r\u00A8\u0092\x05\u00C6\u009CCe\b\u00A6]\u0084\u0094*\x0E\u00CA8\u00C0\x02"+
            "\u0097s8\x16\x077e\u00C6\u00B4\u00B9>\x1F\u00B3,;\u00E1\x1A2\u00AD~\x19\r\u008DFW\u00E5\x16Y\u0086&\u008C5X\x19\u00A9\u00D9\u00D2O"+
            "\u00C7\u00A3\x06\u00F7\u009A\u00A8\u00D2\u00E1\u009A\u00E9r\u00F3\u00A4V\u00E6\x06\u00C98\"\u0090$.ET\u00DC\u00E1\u0096Hs<>\u00D5"+
            "\u00E5R2\x19@\b\u00EE\u00F7FB\x0B\u00FDA1\x0FW\u009C\x185\u00EB\u00A3\u00A3\u00CB\u0083A\u00A7\u00F0\u00DB\x12L*\u00AB\r\u0091\u00D0|_"+
            "\u008EE5\x04\u00F2B\u0098}\u0089\u0091'G1iH\u00C4\u00DD.\u00D7\u00C9px\u0081\u00D7\u009F'\u00C9\u00DC|\u00F0\u00B4\r\u00F7\x1C6K@X"+
            "\u008F!c \x1A_\u00E1\u00CB\x15\u00A9F&\u00F2\u00CDh\u00D4\u00A2\u0087\u0093\u00F1INg\u00B1\u00C4\u00AF\x1D\u008F\u00E5\u00A1C\u008CW"+
            "\x145F\u0097x\u00FD\x16\u00B5lw8bY\u00FB\u00A2\u00A3\u008B|\u0081 !v\u00B6\x12\u00E2\u00EC=\u00D1\u00A8\u00C3\u00E5\u00E8\u0089D"+
            "\x15\u0089\u00AC\u00ADE\x17O\u00C3\u00F9A5\x167\u00FBG\u00FC\u00B5\x05sr\u00BCJ(\x11\u00ED\u008B\u00B4\u00E6\u00E5\u00C5\u009C."+
            "\tB\u00DA\u00A1\u0090\u00F9\u00CA^\x14\x19T\u0081\x11\u00D4\u00F6w\x12\u00EE\u00D6u?!\x01I\u00B2\u00D5[\u0091\u00A4\u009D\u00D1"+
            "\u00D1)\u00AA\u00ABP\u00E5\u00F7{D\u00B2\u009A\u00B4&R\x00\x0EO\u0084C\u009F\u009A\u00E5\u00A5\u00BE\u0080*\u00E1\u00CC58\u009E"+
            "\x0B\u00A5\u00E2\u0082!\u00E7\u00B7\u00A0 WgF\u00E3\u00A6\u00E9\u0097\x1Dv\u00E2\u0085\u00DFz\u00C5\u00A6KU:\u00C3\u00B1B\u008F3}"+
            "\u00A1\u0097s\u008B\u00B8U\u00D2:4b\u008A\u009D\u00E6\u00F2\u0080R\u00E1F\n\u00A1\u00B1\x1B\u00AE,\u009D\u008E\x1E\u00C7\"R\x06\u00B3"+
            "\u00F3\u00FB\u00B2v\x1E\u008F\u0083\x7FQ=c\u00EC\u008CkS\u00DC\u00B9\x11q#\u0099fnA\n\u008F\u00F0q\u00B7\u0085\u0081F\u00A1Db8\u0099,"+
            "\u00E1\u00A7ci\u0099\u00CB\u0098G[\u00FE<\u00AA|lh\u00A4(\u00E0\u00973\u00B8\u0094\u0088\x04\u00BAGU\u0087\x13)\u0095\x10\u0089\u00BB"+
            "\u00AFt\u00E6AUx\x12u \u0096\u00F2\u00BBT$\u00E4G8r\u00EE\u00EC\u00AC\u008C\u00B6a\x1B\u0085\x10\u00A4\u0099fo\u0094'\u00C5 \u00CE"+
            "\u00BEy>\u00AA\u00AA\u0094U\u00A7\u00A2X\u00D6\u00C1\x0E\u00F3d\u00B7E$T\u009E\u008Fk'\x12\u0085\u00C8#"+
            "\u00A3\u00FA{\u00CDxG\x0B-\u00F4\u00B8\u00DD\u00FC\u00D6\x1B\x16EIQ\u0089MW\u0097\u00ED\x14Q:l\u00CEP\u008F_\u00E4\x02\u00F9"+
            "\x00\u00A1<\x11\x1E\u00FD\u00D4,\u00C7\u00E8\u0093?(\u0081\u00C70\x19;\u00F7\u009C\u00EC\x02>\u00B4\u00F1_\u00F6\u00E9\u008F"+
            "\u00B3\u00E3\"\u0086>\u00FB\u00ECx,>\u00C4\u00E7\u00BE\u009B\u00C7\u00CE\u00F7\u00E4\u0093\u008F\u0084\u00D3W\u00E1\u00D2]\n"+
            "\u00BC\u00F8\u00AE\x15\u00B8<O\u008E\u0080}\u00D7\u00A5\u0095\u008B\u008A\n\x02\u00CE\x0EP\u00F3\u00B6PB3\u00DE\u00D8\u008Fv"+
            "\u009D\x00\u00D3\u00C3\u00F3\x10\u00EC\u00D3\x12\x00\u008D\u00EB\u00C4\u00C7\u009B\u0094\u00FD\u00EC\u00C8\u00DF\u00EBcJ\t\x1D5"+
            "\u00B4!\u0087\u0083\u00CA&\u00BAh\u009A\x7F\u00D1\u00CC\"YV{N\u0087\x0F\u009EH\u00FC\u00E9\x03t\u00A8\u0093\u00B1\u00BF\u00D1\u00C2Y"+
            "\u00DA\u00FF}?\u009C\x06\u00A6\u00D8\u00A9\u00A0\u00CA|4\u00B9T\u008E\u00C6\u00AD\u00F6>\u00D4\x17Ig\u00C7mC\u00FD_\u00FE\u0099\u00B4l"+
            "\u00CB\u00B6l\u00CB\u00B6l\u00CB\u00B6l\u00CB\u00B6l\u00CB\u00B6l\u00CB\u00B6l\u00CB\u00B6l\u00CB\u00B6l\u00CB\u00B6l\u00FB[\u00B5\u00FF-"+
            "\u00C0\x00 g\t>\\\x18\u00A1\u00C7\x00\x00\x00\x00IEND\u00AEB`\u0082"
    };
    function quickView(msg, title){
        var title = title || "";
        var w = new Window('dialog', title);
        var e = w.add('edittext', undefined, msg, {multiline:true, readonly:true});
        e.size = [700,500];
        var okbtn = w.add('button', undefined, 'Ok');
        w.show();
    }
    function getSettings(file){
        file.open('r');
        var settingsXML = XML(file.read());
        file.close();
        return settingsXML;
    }
    function getMySetting(allSettingsObj, name){
        for(var i=0; i<allSettingsObj.children().length(); i++){
            var thisObj = allSettingsObj.children()[i];
            if(thisObj.attributes("name") == name){
                return thisObj;
            }
        }
        return null;
    }
    function getSettingsNames(obj){
        var arr = [];
        for(var i=0; i<obj.children().length(); i++){
            var thisChild = obj.children()[i];
            if(thisChild.attributes("name") != ''){
                arr.push(thisChild.attributes("name"));
            }
        }
        return arr;
    }
    function saveXML(dest, obj){
        var saveFl = (dest instanceof File) ? dest : File(dest);
        try{
            saveFl.open('w');
            saveFl.write('<?xml version="1.0"?>\r'+obj);
            saveFl.close();
            alert("Successfully Saved in: "+decodeURI(saveFl),'SUCCESS!');
        } catch(e) {
            alert("Sorry, "+decodeURI(saveFl)+"'s save operation was NOT successful!",'Failure... Horrible abysmal failure. :\'(');
        }
    }
    function removePreset(name, settingsFile){
        var allSettingsObj = getSettings(settingsFile);
        var currentName = allSettingsObj.currentName;
        var newObj = new XML("<personalSettings></personalSettings>");
        for(var i=0; i<allSettingsObj.children().length(); i++) {
            var thisChild = allSettingsObj.children()[i];
            if(thisChild.attributes("name") != name){
                newObj.appendChild(thisChild);
            }
        }
        if(currentName == name && newObj.children().length() > 1){
            newObj.currentName = newObj.personalSetting[0].attributes("name").toString();
        }
        var sv = settingsFile;
        saveXML(sv, newObj);
        if(newObj.children().length() > 1){
            return "none left";
        }
    }
    function settingsDialog(saveLoadRemove, settingsFile, workElements, currentDataSetNameObj){
        function validate(){
            var valid = false;
            if(trimString(nameDisp.text) == ''){
                return false;
            } else {
                if(xmlRx.test(nameDisp.text)){
                    return true;
                }
                return false;
            }
        }
        var resObj;
        var saveLoadRemove = saveLoadRemove || 'save';
        if(!settingsFile.exists && saveLoadRemove != 'remove'){
            saveLoadRemove = 'save';
        }
        var w = new Window('dialog', "Preset Options");
        var g1 = w.add('group'); g1.orientation = "column";
        var lbl1 = g1.add('statictext', undefined, "\tPresets List:\r(Double-click to select)", {multiline:true});
        var list = g1.add('listbox', undefined, getSettingsNames(getSettings(settingsFile)).sort()); list.size = [200, 250];
        var nameDisp = g1.add('edittext', undefined, ''); nameDisp.characters = 18;
        var g2 = w.add('group'); g2.orientation = "row";
        var btn_go = g2.add('button', undefined, 'Save');

        var btn_ccl = g2.add('button', undefined, "Cancel");
        if(saveLoadRemove == 'save'){
            btn_go.text = "Save";
        } else if(saveLoadRemove == 'load'){
            btn_go.text = "Load";
        } else if(saveLoadRemove == 'remove'){
            btn_go.text = "Remove";
        }

        list.onDoubleClick = function(){
            if(list.selection == null){
                nameDisp.text = '';
            } else {
                nameDisp.text = list.selection.text;
            }
        }

        nameDisp.onChanging = nameDisp.onChange = function(){
            list.selection = null;
            if(!xmlRx.test(this.text)){
                alert(xmlWarning);
                this.text = "";
            }
        }

        btn_go.onClick = function(){
            w.loadedPreset = null;
            if(!validate()){
                alert("Please choose a (XML-valid) name for the preset.");
                return;
            }
            function existsInList(name){
                for(var i=0; i<list.items.length; i++){
                    var thisItem = list.items[i];
                    if(thisItem.text == name){
                        return true;
                    }
                }
                return false;
            }
            if(saveLoadRemove == 'save'){
                var conf = false;
                conf = (!existsInList(nameDisp.text)) ? confirm("Save current state as Preset?") : confirm("Save over preset '"+nameDisp.text+"' ?") ;

                if(conf){
                    var overrideName = (list.selection != null) ? list.selection.text : null;
                    var newName = nameDisp.text;
                    var allSettingsObj = getSettings(settingsFile);
                    savePersonalXML(
                        decodeURI(settingsFile),
                        {
                            headerRow : workElements[0].value, //ch1.value,
                            autoBind : workElements[1].text, //dd_ab.selection.text,
                            keepXML : workElements[2].value, //ch_xml.value,
                            prependToAllImages : workElements[3].value, //ch_prependImagePath.value,
                            prependImagePath : decodeURI(workElements[4].text), //disp_prependImagePath.text
                            presetXML : workElements[5].value, //ch_presetXML.value
                            xmlPath : decodeURI(workElements[6].text), // disp_presetXML.text
                            showDataSetNamingWarning : decodeURI(workElements[7].value), // ch_showDataSetNamingWarning.value
                            prependToAllGraphs : workElements[8].value, //ch_prependGraphPath.value,
                            prependGraphPath : decodeURI(workElements[9].text), //disp_prependGraphPath.text
                            dbspReturns : workElements[10].value, // ch_dbspReturns.value
                            currentDataSetNameObj : {
                                field1: {
                                    type: currentDataSetNameObj.field1.type,
                                    text: currentDataSetNameObj.field1.text
                                },
                                field2: {
                                    type: currentDataSetNameObj.field2.type,
                                    text: currentDataSetNameObj.field2.text
                                },
                                field3: {
                                    type: currentDataSetNameObj.field3.type,
                                    text: currentDataSetNameObj.field3.text
                                },
                                field4: {
                                    type: currentDataSetNameObj.field4.type,
                                    text: currentDataSetNameObj.field4.text
                                },
                                field5: {
                                    type: currentDataSetNameObj.field5.type,
                                    text: currentDataSetNameObj.field5.text
                                },
                                field6: {
                                    type: currentDataSetNameObj.field6.type,
                                    text: currentDataSetNameObj.field6.text
                                }
                            }
                        },
                        allSettingsObj,
                        overrideName,
                        newName
                    );

                }
                w.savedPreset = {};
                w.savedPreset.currentName = newName;
                w.close();
            } else if(saveLoadRemove == 'load'){
                w.loadedPreset = loadPreset(nameDisp.text, settingsFile);
                w.close();
            } else if(saveLoadRemove == 'remove'){
                var conf = false;
                conf = confirm("Remove preset '"+nameDisp.text+"' ?") ;

                if(conf){
                    var removeResult = removePreset(nameDisp.text, settingsFile);
                    if(removeResult == 'none left'){
                        w.removedAllPresets = true;
                    } else {
                        w.removedAllPresets = false;
                    }
                }
                w.close();
            }
        }
        if(w.show() != 2){
            if(saveLoadRemove == 'load' && w.loadedPreset != null){
                return w.loadedPreset;
            } else if(saveLoadRemove == 'save'){
                return w.savedPreset;
            } else if(saveLoadRemove == 'remove'){
                return w.removedAllPresets;
            }
        } else {
            return null;
        }
    }
    function loadPreset(name, settingsFile){
        var allSettingsObj = getSettings(settingsFile);
        var loadedPreset = getMySetting(allSettingsObj, name);
        loadedPreset.currentName = name;
        return loadedPreset;
    }
    function savePersonalXML(dest, obj, allSettingsObj, overrideName, newName){
        var currentName = newName;
        if(overrideName != null){
            currentName = overrideName;
        } else {
            currentName = newName;
        }
        XML.prettyIndent=4;

        var xmlBase=new XML('<personalSettings></personalSettings>');
        var settingObj = new XML('<personalSetting></personalSetting>');
        settingObj.@name = currentName;
        xmlBase.appendChild(XML('<currentName>'+currentName+'</currentName>'));
        xmlBase.appendChild(settingObj);

        for(var all in obj){
            if(all != "currentDataSetNameObj"){
                settingObj[all] = obj[all];
            } else {
                settingObj[all] = XML('<currentDataSetNameObj></currentDataSetNameObj>');
                var field1 = settingObj[all].appendChild(XML("<field1></field1>"));
                var thisType = XML("<type>" + stringXmlSafe(obj.currentDataSetNameObj.field1.type) + "</type>");
                settingObj[all].field1.appendChild(thisType);
                var thisText = wrapCDATA(obj.currentDataSetNameObj.field1.text.toString(), "text");
                settingObj[all].field1.appendChild(thisText);
                var field2 = settingObj[all].appendChild(XML("<field2></field2>"));
                var thisType = XML("<type>" + stringXmlSafe(obj.currentDataSetNameObj.field2.type) + "</type>");
                settingObj[all].field2.appendChild(thisType);
                var thisText = wrapCDATA(obj.currentDataSetNameObj.field2.text.toString(), "text");
                settingObj[all].field2.appendChild(thisText);
                var field3 = settingObj[all].appendChild(XML("<field3></field3>"));
                var thisType = XML("<type>" + stringXmlSafe(obj.currentDataSetNameObj.field3.type) + "</type>");
                settingObj[all].field3.appendChild(thisType);
                var thisText = wrapCDATA(obj.currentDataSetNameObj.field3.text.toString(), "text");
                settingObj[all].field3.appendChild(thisText);
                var field4 = settingObj[all].appendChild(XML("<field4></field4>"));
                var thisType = XML("<type>" + stringXmlSafe(obj.currentDataSetNameObj.field4.type) + "</type>");
                settingObj[all].field4.appendChild(thisType);
                var thisText = wrapCDATA(obj.currentDataSetNameObj.field4.text.toString(), "text");
                settingObj[all].field4.appendChild(thisText);
                var field5 = settingObj[all].appendChild(XML("<field5></field5>"));
                var thisType = XML("<type>" + stringXmlSafe(obj.currentDataSetNameObj.field5.type) + "</type>");
                settingObj[all].field5.appendChild(thisType);
                var thisText = wrapCDATA(obj.currentDataSetNameObj.field5.text.toString(), "text");
                settingObj[all].field5.appendChild(thisText);
                var field6 = settingObj[all].appendChild(XML("<field6></field6>"));
                var thisType = XML("<type>" + stringXmlSafe(obj.currentDataSetNameObj.field6.type) + "</type>");
                settingObj[all].field6.appendChild(thisType);
                var thisText = wrapCDATA(obj.currentDataSetNameObj.field6.text.toString(), "text");
                settingObj[all].field6.appendChild(thisText);
            }
        }

        for(var i=1; i < allSettingsObj.children().length(); i++) {
            var thisChild = allSettingsObj.children()[i];
            if(thisChild.attributes("name") != currentName && !thisChild.toXMLString().match("currentName")){
                xmlBase.appendChild(thisChild);
            }
        };

        var saveFl = (dest instanceof File) ? dest : File(dest);
        try {
            saveFl.open('w');
            saveFl.write('<?xml version="1.0"?>\r'+xmlBase);
            saveFl.close();
            alert("Successfully Saved in: "+decodeURI(saveFl),'SUCCESS!');
        } catch(e) {
            alert("Sorry, "+decodeURI(saveFl)+"'s save operation was NOT successful!",'Failed to save personal settings.');
        }
    }


    function getGraphData(dataFilePath){
      var noFileString = "<data  numDataColumns=\"2\">" + "\r" +
                "<values>" + "\r" +
                  "<row>" + "\r" +
                    "<value  key=\"name\"></value>" + "\r" +
                    "<value>1</value>" + "\r" +
                  "</row>" + "\r" +
                "</values>" + "\r" +
              "</data>";

      if(typeof dataFilePath == "undefined" || !File(dataFilePath).exists){
        return noFileString;
      }
      function stringXmlSafe(str){
          str=str.toString();
          str=str.replace(/&(?!(amp;|gt;|lt;|quot;|apos;))/g,"&amp;");
          str=str.replace(/</g,"&lt;");
          str=str.replace(/>/g,"&gt;");
          str=str.replace(/'/g,"&apos;");
          str=str.replace(/"/g,"&quot;");
          return str;
      }

      function SCSCstart(dataFilePath) {
        if (BridgeTalk.appName != "illustrator") {
          return;
        }

        var flist = File(dataFilePath);
        var res = csv2xmlstr(flist);
        var refinedRes = String(XML(res)).replace(/</g, "__-##__").replace(/>/g, "__##-__");

        var valueRx = /__-##__value\s*((key="name"|type="string")\s*)+\s*__##-__([\s\S]*?)__-##__\/value__##-__/g;
        var matches = refinedRes.match(valueRx);

        for (var i = 0; i < matches.length; i++) {
          var thisMatch = matches[i];
          var test = valueRx.exec(refinedRes);
          var nodeValue = (test[test.length-1]);
          if(nodeValue != ''){
            if(nodeValue.match(/"/)){
              refinedRes = refinedRes.replace(thisMatch, thisMatch.replace(nodeValue, stringXmlSafe(nodeValue)));
            }
          }
        };
        refinedRes = (refinedRes.replace(/__-##__/g, "<").replace(/__##-__/g, ">"));
        return refinedRes;
      }
      /**
       * @param {Object} File - CSV, TXT file
       * @return {String} - (insert into tag <Variable...> </Variable...> in main XML file)
       */
      function csv2xmlstr (flist) {
        var res = '';
        var maxcol = 1;
        var type = (flist.displayName.match(/(\.txt$|\.csv$)/i)[0]).toLowerCase();

        var splitter = (type === '.txt')? '\t' : ',';
        var i;
        var rows = [], vals = [];
        var fop = flist.open('r:');
        var name;
        for (; !flist.eof; ) {
          name = flist.readln(); //.trim2();
          if (name !== '') {
            vals = name.split(splitter);
            if (vals.length > maxcol) maxcol = vals.length;
            rows.push(vals);
          }
        }
        flist.close();
        var haspropertyrow = false;
        var hasnamecol = false;
        var col, row;
        var numstr;
        numstr = 0;
        for (col = 0; col < rows[0].length; col++) {
          if (rows[0][col] === '') continue;
          if (isNaN(rows[0][col])) numstr--;
          else numstr++;
        }
        haspropertyrow = (numstr <= 0);
        numstr = 0;
        for (row = 0; row < rows.length; row++) {
          if (rows[row][0] === '') continue;
          if (isNaN(rows[row][0])) numstr--;
          else numstr++;
        }
        hasnamecol = (numstr <= 0);

        res += '<data  numDataColumns="' + (hasnamecol ? maxcol - 0 : (maxcol)) + '">';
        row = 0;
        if (haspropertyrow) {
          res += '<propertyRow  key="name">';
          col = 0;
          res += '<value' + ((rows[row][col] != "" && isNaN(rows[row][col])) ? '  type="string"' : '') + '>'
            + (hasnamecol ? stringXmlSafe(rows[row][col++].replace(/("""|^"|"$)/g,'')) : '') + '</value>';
          for (; col < rows[0].length; col++) {
            res += '<value' + ((rows[row][col] != "" && isNaN(rows[row][col])) ? '  type="string"' : '') + '>'
            + stringXmlSafe(rows[row][col].replace(/("""|^"|"$)/g,'')) + '</value>';
          }
          for (; col < maxcol; col++) {
            res += '<value></value>';
          }
          res += '</propertyRow>';
          row++;
        }

        res += '<values>';
        for (; row < rows.length; row++) {
          res += '<row>';
          col = 0;
          res += '<value  key="name"' + ((rows[row][col] != "" && isNaN(rows[row][col])) ? '  type="string"' : '') + '>' + (hasnamecol ? stringXmlSafe(rows[row][col++].replace(/("""|^"|"$)/g,'')) : '')
              + '</value>';
          for (; col < rows[row].length; col++) {
            cell =
            res += '<value' + (rows[row][col] != "" && (isNaN(rows[row][col])) ? '  type="string"' : '') + '>'
                + stringXmlSafe(rows[row][col].replace(/("""|^"|"$)/g,'')) + '</value>';
          }
          for (; col < maxcol; col++) {
            res += '<value></value>';
          }
          res += '</row>';
        }
        res += '</values>';
        res += '</data>';

        function getAllChildsByName(xml, name){
          var arr = [];
          function a(container, name){
            for (var i = 0; i < container.children().length(); i++) {
              var b = container.children()[i];
              if(b.name() == name){
                arr.push(b);
                // alert(b);
              } else if(b.children().length() > 0) {
                a(b, name);
              }
            };
          }
          a(xml, name);

          return arr;
        }
        var resXML = res;
        return resXML;
      }

      var os = $.os.match('Windows') ? 'Windows' : 'Mac';
      return SCSCstart(dataFilePath);
    }

    //============================================================================================================ variables ==================//
    var MenuStates = {
        WorkMenu: 0,
        ControlsMenu: 1
    }
    var SETTINGS = {
        menuState : MenuStates.WorkMenu,
    }
    var os = $.os.match('Windows') ? 'Windows' : 'Mac';
    var AIversion = parseInt(app.version.split(/\./)[0]);
    var settingsFile = File(Folder.myDocuments+"/VariableImporter_Settings.xml");

    var settingsObj = null;
    if(settingsFile.exists){
        var allSettingsObj = getSettings(settingsFile);
        if(allSettingsObj.children().length() > 1){
            var currentName = allSettingsObj.currentName;
            settingsObj = getMySetting(allSettingsObj, currentName);

            if(settingsObj != null){
                //alert("got it");
            }
        }
    }


    var xmlRx = /^(?!XML)[a-z][\w0-9-]*$/i;
    var xmlWarning = "This text value must follow these naming rules:"+"\r\r"+
        "1) Can't start with a number or punctuation character"+"\r"+
        "2) Can't start with the letters xml (or XML, Xml, etc)"+"\r"+
        "3) Can't contain spaces or other special characters.";
    var instructions = "Import Adobe Illustrator variables using a tab-delimited (*.txt) or comma-delimited (.csv) file just like in Indesign."+"\r\r"+
        "1) Make a .txt (tab-delimited), or .csv data file with a heading row as the first row. (Optional)"+"\r"+
        "2) Assign appropriate column names -- they will become Illustrator Variable names. (Optional)"+"\r"+
        "        To use a column for its text as a variable, just use a regular column name of your choice, without symbols @ and #."+"\r"+
        "        To use a column for its file-path content as a variable, use a \"@\" at-symbol in front of the name of your choice."+"\r"+
        "        To use a column for its visibility (In Illustrator layers panel) as a variable, use a \"#\" pound-symbol in front of the name of your choice."+"\r"+
        "        To use a column for its file-path to a text file with graph data as a graph variable, use a \"%\" percent symbol in front of the intended name."+"\r"+
        "3) Import your data file using this script. (Browse file dialog will appear)"+"\r"+
        "4) A dialog appears with options:"+"\r"+
        "        An option to keep the .xml file which is created as part of this operation."+"\r"+
        "        An option to select a name for each of the records by using a column's data, or custom naming."+"\r"+
        "        An option to automatically bind the new variables to art objects by using their layer-panel name, the attributes note, or Illustrator Scripting tag"+"\r"+
        "               * An Illustrator Scripting tag is a method of attaching data to art objects, but is only accessible through scripting."+"\r"+
        "                  Note: The tag is referenced by the tag.name property, not the tag.value"+"\r"+
        "        Press OK, when done."+"\r"+
        "5) Your variables are in, you are free to do what you want next. - OR - the import failed, so please make sure each of the variable names and each of the dataset names are not identical,etc."+"\r\r"+
        "* If a cell has text content with carriage returns, please use double-quotes (\") to wrap the cell text, this will mark your text as having separate paragraphs." + "\r" +
        "** To be able to use just the names of the files in a linked-file column (graph & image variables), you can use the 'Prepend Filepath' checkbox to choose a folder. The folder path will be prepended to the file name for complete file path.";
        
    var dataSetNameInstructions = "You may assign a custom naming convention for the imported records, or data sets. Each 'row record' becomes an Illustrator data set."+"\r"+
        "This dialog gives you 6 field options, with a choice of using any variable's content as part of the dataset name."+"\r"+
        "Each dataset name must be unique, so it is advised to use an Increment field, which will add the current index to the name.";
    var noIncrementWarning = "Warning: removing all Increment fields from a dataset name may create duplicate names, making the import invalid!";

    var xmlDest = Folder.desktop;


    var variableLabels = ["Text Variable", "Visibility Variable", "Linked File Variable", "Graph Data Variable"];
    
    function wrapInHTML(head, body){
        var str = 
        "<!DOCTYPE html>" + "\r" +
        "<html>" + "\r" +
            "<head>" + "\r" +
            "<meta charset=\"utf-8\">"+
                head + "\r" +
            "</head>" + "\r" +
            "<body>" + "\r" +
                body + "\r" +
            "</body>" + "\r" +
        "</html>";
        return str;
    }
    function writeHTHMLFile(contents, cleanup){
        cleanup = cleanup || false;
        function writeTheFile(contents){
            var HTMLFile = new File(File(Folder.desktop+"/VariableImporter_HTMLDocument.html").fsName.replace("file://",""));
            HTMLFile.encoding = "UTF-8";
            HTMLFile.open('w');
            HTMLFile.write(contents);
            HTMLFile.close();
            return HTMLFile;
        }

        var HTMLFile = writeTheFile(contents);

        if(HTMLFile.exists){
            HTMLFile.execute();
            $.sleep(500);
            if(cleanup){
                HTMLFile.remove();
            }
        } else {
            alert("Sorry, web link did not work because the HTML file could not be written to desktop.");
        }
    }
    function wrapInScriptTags(contents){
        return "<script>\r"+contents+"\r</script>";
    }
    function wrapInScriptAction(contents){
        return "var url = \""+contents+"\";\rwindow.location = url;";
    }
    var BrowserActionURLStrings = {
        "linkedin" : (
            "https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fgithub.com%2FSilly-V%2FAdobe-"+
            "Illustrator%2Fblob%2Fmaster%2FVariable%2520Importer%2FVariableImporter.jsx&title=VariableImporter.jsx"+
            "%20Script%20for%20Adobe%20Illustrator&summary=VariableImporter.jsx%20imports%20.txt%20and%20.csv%20files"+
            "%20into%20Adobe%20Illustrator%20as%20datasets,%20making%20variable%20data%20friendly!&source=GitHub"
        ),
        "twitter" : (
            "https://twitter.com/intent/tweet?hashtags=VariableImporter.jsx,VariableData,AdobeIllustrator&text="+
            "VariableImporter.jsx%20imports%20.txt/.csv%20files%20into%20Illustrator!&url=https://bit.ly/1yO1mCS"
        ),
        "hypertransitory" : (
            "http://hypertransitory.com/blog/2015/04/23/illustrator-variable-data/"
        ),
        "prepression" : (
            "http://prepression.blogspot.com/2015/03/illustrator-introducing.html"
        )
    }
    function openURL( address ) {
        // Muppet Mark
        // https://forums.adobe.com/thread/1110169
        var f = File( Folder.temp + '/aiOpenURL.url' );  
        f.open( 'w' );  
        f.write( '[InternetShortcut]' + '\r' + 'URL=' + address + '\r' );
        f.close();  
        f.execute();
    }
    function performBrowserAction(item){
        if(os == "Mac"){
            openURL(BrowserActionURLStrings[item]);
        } else {
            var cleanup = true;
            writeHTHMLFile(wrapInHTML('', wrapInScriptTags(wrapInScriptAction(BrowserActionURLStrings[item]))), cleanup);
        }
    }
    function analyzeHeaderCell(cell, idx){
        var result = {name: '', type: variableLabels[0]};
        var defaultName = result.name = "Variable"+(idx+1);;
        if(cell != ''){
            if(cell.charAt(0) == '@'){
                //IMAGE
                cell = cell.substr(1);
                result.type = variableLabels[2];
            } else if(cell.charAt(0) == '#'){
                cell = cell.substr(1);
                //VISIBILITY
                result.type = variableLabels[1];
            } else if(cell.charAt(0) == '%'){
                cell = cell.substr(1);
                //GRAPH
                result.type = variableLabels[3];
            } else {
                //TEXTUAL
                result.type = variableLabels[0];
            }
            if(xmlRx.test(cell)){
                result.name = cell;
            } else {
                result.name = defaultName;
            }
        } else {
            result.name = defaultName;
        }
        return result;
    }
    function getDataSetNameDisplayString(currentDataSetNameObj){
        var str = "";
        for(var all in currentDataSetNameObj){
            var field = currentDataSetNameObj[all];
            if(field.type == 'space'){
                field.text = " ";
            }
            str += field.text;
        }
        return str;
    }
    function getDataSetNameStringVarNames(dataElements, currentDataSetNameObj, showWarning){
        var str = "";
        var noIncrementFlag = true;
        for(var all in currentDataSetNameObj){
            var field = currentDataSetNameObj[all];
            if(field.type.match(/Variable\s[0-9]+\sValue/)){
                var idx = field.type.match(/([0-9]+)/)[0]-1;
                if(dataElements.length > idx ){
                    str += dataElements[idx][0].text;
                } else {
                    str += ("Variable "+idx+" Unavailable");
                }
            } else if(field.type == 'Increment'){
                noIncrementFlag = false;
                str += field.text;
            } else {
                if(field.type == 'space'){
                    field.text = " ";
                }
                str += field.text;
            }
        }
        if(noIncrementFlag){
            if(showWarning){
                alert(noIncrementWarning);
            }
        }
        return str;
    }

    function getUserDataSetName(currentDataSetNameObj, dataElements){
        function fillOutFieldTexts(currentDataSetNameObj){
            for(var all in currentDataSetNameObj){
                choices[all].dropdown.selection = choices[all].dropdown.find(currentDataSetNameObj[all].type);
                choices[all].text.text = currentDataSetNameObj[all].text;
            }
        }
        function updateDataSetNameDisp(){
            var str = '';
            for(var all in choices){
                str += choices[all].text.text;
            }
            disp.text = str;
        }
        function toggleEditText(elem, tf){
            if(tf == true){
                elem.removeEventListener('changing', function(){return;});
            } else {
                elem.addEventListener('changing', function(){return;});
            }
        }
        function getFieldTextContent(dd, etxt){
            var res = '';
            switch(dd.selection.text){
                case "Custom Text": res = 'CustomText_'+(etxt.order+1);
                break;
                case "Increment" : res = 'INC';
                break;
                case "dash" : res = '-';
                break;
                case "underscore" : res = '_';
                break;
                case "space" : res = ' ';
                break;
                case "nothing" : res = '';
                break;
                default : res = dd.selection.text;
            }
            return res;
        }
        function updateField(dd, etxt){
            var textContent = getFieldTextContent(dd, etxt);

            if(textContent == 'CustomText_'+(etxt.order+1)){
                toggleEditText(etxt, true);
            }
            etxt.text = textContent;
            updateDataSetNameDisp();
        }
        var resObj = {};
        var options = ["Increment", "Custom Text", "dash", "underscore", "space", 'nothing'];
        var variableNames = [];
        for(var x=0; x<dataElements.length; x++){
            variableNames.push("Variable "+(x+1)+" Value");
        }
        options = options.concat(variableNames);
        var choices = {};
        var w = new Window('dialog', "Decide data set names.");
        var inst = w.add('statictext', undefined, dataSetNameInstructions, {multiline: true}); inst.size = [600, 90];
        var p = w.add('group');
        
        var g1 = p.add('panel', undefined, "Field 1");
        var dd_1 = g1.add('dropdownlist', undefined, options); dd_1.selectWell();
        var e1 = g1.add('edittext', undefined, '', {readonly: false}); e1.characters = 20; e1.order = 0;
        // e1.addEventListener('changing', function(){return;});
        choices.field1 = {dropdown: dd_1, text: e1};
        e1.parentObj = dd_1.parentObj = choices.field1;
            var plus = p.add('statictext', undefined, '+');
        var g2 = p.add('panel', undefined, "Field 2");
        var dd_2 = g2.add('dropdownlist', undefined, options); dd_2.selectWell();
        var e2 = g2.add('edittext', undefined, '', {readonly: false}); e2.characters = 20; e2.order = 1;
        // e2.addEventListener('changing', function(){return;});
        choices.field2 = {dropdown: dd_2, text: e2};
        e2.parentObj = dd_2.parentObj = choices.field2;
            var plus = p.add('statictext', undefined, '+');
        var g3 = p.add('panel', undefined, "Field 3");
        var dd_3 = g3.add('dropdownlist', undefined, options); dd_3.selectWell();
        var e3 = g3.add('edittext', undefined, '', {readonly: false}); e3.characters = 20; e3.order = 2;
        // e3.addEventListener('changing', function(){return;});
        choices.field3 = {dropdown: dd_3, text: e3};
        e3.parentObj = dd_3.parentObj = choices.field3;
        var p1 = w.add('group');
        var g4 = p1.add('panel', undefined, "Field 4");
        var dd_4 = g4.add('dropdownlist', undefined, options); dd_4.selectWell();
        var e4 = g4.add('edittext', undefined, '', {readonly: false}); e4.characters = 20; e4.order = 3;
        // e4.addEventListener('changing', function(){return;});
        choices.field4 = {dropdown: dd_4, text: e4};
        e4.parentObj = dd_4.parentObj = choices.field4;
            var plus = p1.add('statictext', undefined, '+');
        var g5 = p1.add('panel', undefined, "Field 5");
        var dd_5 = g5.add('dropdownlist', undefined, options); dd_5.selectWell();
        var e5 = g5.add('edittext', undefined, '', {readonly: false}); e5.characters = 20; e5.order = 4;
        // e5.addEventListener('changing', function(){return;});
            var plus = p1.add('statictext', undefined, '+');
        choices.field5 = {dropdown: dd_5, text: e5};
        e5.parentObj = dd_5.parentObj = choices.field5;
        var g6 = p1.add('panel', undefined, "Field 6");
        var dd_6 = g6.add('dropdownlist', undefined, options); dd_6.selectWell();
        var e6 = g6.add('edittext', undefined, '', {readonly: false}); e6.characters = 20; e6.order = 5;
        // e6.addEventListener('changing', function(){return;});
        choices.field6 = {dropdown: dd_6, text: e6};
        e6.parentObj = dd_6.parentObj = choices.field6;
        
        var disp = w.add('edittext', undefined, '', {readonly: true}); disp.characters = 50; disp.justify = "center";
        disp.text = getDataSetNameDisplayString(currentDataSetNameObj);
        
        for(var all in choices){
            choices[all].text.addEventListener('changing', function(){
                if(this.parentObj.dropdown.selection.text != 'Custom Text'){
                    this.text = getFieldTextContent(this.parentObj.dropdown, this);
                } else {
                    updateDataSetNameDisp();
                }
            });
            choices[all].dropdown.onChange = function(){
                updateField(this, this.parentObj.text);
            }
        }
        fillOutFieldTexts(currentDataSetNameObj);
    
        var btn_g = w.add('group');
        var btn_ccl = btn_g.add('button', undefined, 'Cancel');
        var btn_ok = btn_g.add('button', undefined, 'OK');
        w.layout.layout();
        
        if(w.show() != 2){
            for(var all in choices){
                resObj[all] = {};
                resObj[all].type = choices[all].dropdown.selection.text;
                resObj[all].text = choices[all].text.text;
            }
            return resObj;
        } else {
            return null;
        }
    }
    function drawIcon(iconArea, variableType){
        var img;
        switch(variableType){
            case "Text Variable": img = ICONS["txt"];
            break;
            case "Visibility Variable": img = ICONS["vis"];
            break;
            case "Linked File Variable": img = ICONS["lnk"];
            break;
            case "Graph Data Variable": img = ICONS["grf"];
            break;
            default: img = ICONS["txt"];
        }
        drawFromObjString(img, iconArea);
    }
    function getRecordDataSetName(currentDataSetNameObj, index, row){
        var str = "";
        for(var all in currentDataSetNameObj){
            var field = currentDataSetNameObj[all];
            if(field.type.match(/Variable\s[0-9]+\sValue/)){
                var idx = field.type.match(/([0-9]+)/)[0]-1;
                if(row.length > idx){
                    str += row[idx];
                } else {
                    str += ("Variable "+idx+" Unavailable");
                }
            } else if(field.type == 'Increment'){
                str+= (index+'');
            } else {
                str += field.text;
            }
        }
    
        return str;
    }
    function checkRowForAllBlanks(row){
        for(var i=0; i<row.length; i++){
            if(row[i] != ''){
                return false;
            }
        }
        return true;
    }
    function getData(dataFile, settingsObj){
        var currentDataSetNameObj = {
            field1: {type: "Custom Text", text: "Record"},
            field2: {type: "space", text: " "},
            field3: {type: "Increment", text: "INC"},
            field4: {type: "nothing", text: ""},
            field5: {type: "nothing", text: ""},
            field6: {type: "nothing", text: ""}
        };
        if(settingsObj != null){
            currentDataSetNameObj = {
                field1: {
                    type: settingsObj.currentDataSetNameObj.field1.type,
                    text: settingsObj.currentDataSetNameObj.field1.text
                },
                field2: {
                    type: settingsObj.currentDataSetNameObj.field2.type,
                    text: settingsObj.currentDataSetNameObj.field2.text
                },
                field3: {
                    type: settingsObj.currentDataSetNameObj.field3.type,
                    text: settingsObj.currentDataSetNameObj.field3.text
                },
                field4: {
                    type: settingsObj.currentDataSetNameObj.field4.type,
                    text: settingsObj.currentDataSetNameObj.field4.text
                },
                field5: {
                    type: settingsObj.currentDataSetNameObj.field5.type,
                    text: settingsObj.currentDataSetNameObj.field5.text
                },
                field6: {
                    type: settingsObj.currentDataSetNameObj.field6.type,
                    text: settingsObj.currentDataSetNameObj.field6.text
                }
            }
        }

        var bindingFunctionBody = function(prop){
            return function(){
                var doc = app.activeDocument;
                var iniVars = [];
                for(var i=0; i<doc.variables.length; i++){
                    iniVars.push(doc.variables[i]);
                }
                for(var i=0; i<iniVars.length; i++){
                    var thisVar = iniVars[i];
                    var name = thisVar.name;
                    try{
                        if(prop != 'tag'){
                            if(thisVar.kind == VariableKind.TEXTUAL){
                                for(var j=0; j<doc.textFrames.length; j++){
                                    var item = doc.textFrames[j];
                                    if(item[prop] == name){
                                        item.contentVariable = thisVar;
                                    }
                                }
                            } else if(thisVar.kind == VariableKind.IMAGE){
                                for(var j=0; j<doc.placedItems.length; j++){
                                    var item = doc.placedItems[j];
                                    if(item[prop] == name){
                                        item.contentVariable = thisVar;
                                    }
                                }
                            } else if(thisVar.kind == VariableKind.VISIBILITY){
                                for(var j=0; j<doc.pageItems.length; j++){
                                    var item = doc.pageItems[j];
                                    if(item[prop] == name){
                                        item.visibilityVariable = thisVar;
                                    }
                                }
                            }
                            else if(thisVar.kind == VariableKind.GRAPH){
                                for(var j=0; j<doc.graphItems.length; j++){
                                    var item = doc.graphItems[j];
                                    if(item[prop] == name){
                                        item.contentVariable = thisVar;
                                    }
                                }
                            }
                        } else if(prop == 'tag'){
                            for(var j=0; j<doc.tags.length; j++){
                                var thisTag = doc.tags[j];
                                if(thisTag.name == name){
                                    var item = thisTag.parent;
                                    if(thisVar.kind == VariableKind.TEXTUAL){
                                        if(item.typename == "TextFrame"){
                                            item.contentVariable = thisVar;
                                        }
                                    } else if(thisVar.kind == VariableKind.IMAGE){
                                        if(item.typename == "PlacedItem"){
                                            item.contentVariable = thisVar;
                                        }
                                    } else if(thisVar.kind == VariableKind.VISIBILITY){
                                        item.visibilityVariable = thisVar;
                                    } else if(thisVar.kind == VariableKind.GRAPH){
                                        if(item.typename == "GraphItem"){
                                            item.contentVariable = thisVar;
                                        }
                                    }
                                }
                            }
                        }
                    } catch(e){
                        continue;
                    }
                }
            }
        }
        var bindingFunctions = {
            "Bind by Name":  bindingFunctionBody('name'),
            "Bind by Note": bindingFunctionBody('note'),
            "Bind by Tag": bindingFunctionBody('tag'),
            "No Auto-Binding": "No Auto-Binding"
        };
        function switchViews(view){
            if(typeof view == 'undefined'){
                if(SETTINGS.menuState == MenuStates.WorkMenu){
                    SETTINGS.menuState = MenuStates.ControlsMenu;
                } else {
                    SETTINGS.menuState = MenuStates.WorkMenu;
                }
            } else {
                SETTINGS.menuState = view;
            }

            if(SETTINGS.menuState == MenuStates.WorkMenu){
                ch1.visible = true;
                workViewGroup.visible = true;
                controlsViewGroup.visible = false;
            } else {
                ch1.visible = false;
                workViewGroup.visible = false;
                controlsViewGroup.visible = true;
            }

            w.layout.layout();
        }
        function toggleVariableSetup(tf){
            for(var i=0; i<g2.children.length; i++){
                var fieldText = analyzeHeaderCell(toplineArr[i], i);
                var thisPanel = g2.children[i];
                var dd = thisPanel.children[0].children[1].children[1];
                dd.selection = dd.find(fieldText.type);
                dd.enabled = tf;
                var e = thisPanel.children[0].children[0].children[1];
                if(tf == false){
                    e.text = fieldText.name;
                    e.addEventListener('click', function(){return});
                    e.addEventListener('changing', function(){
                        this.text = analyzeHeaderCell(toplineArr[this.order], this.order).name;
                        return;
                    });
                } else {
                    e.removeEventListener('click', function(){return});
                    e.removeEventListener('changing', function(){
                        this.text = analyzeHeaderCell(toplineArr[this.order], this.order).name;
                        return;
                    });
                }
            }
        }
        var df = dataFile;
        var type = df.displayName.match(/(\.txt$|\.csv$)/i)[0];
        var dataFileName = df.displayName;
        var splitter = (type == '.txt')? '\t' : ',';
        df.open('r');
        var everyRowRaw = CSV.parse(df.read(), undefined, splitter);
        df.close();
        
        var everyRow = [];
        for(var i=0; i<everyRowRaw.length; i++){
            // get rid of empty rows
            var thisRawRow = everyRowRaw[i];
            if(!checkRowForAllBlanks(thisRawRow)){
                if(i > 0){
                    if(thisRawRow.length < everyRow[0].length){
                        var diff = everyRow[0].length - thisRawRow.length;
                        for(var d=0; d<diff; d++){
                            thisRawRow.push("");
                        }
                    }
                }
                everyRow.push(thisRawRow);
            }
        }
        var toplineArr = everyRow[0];
        var columnCount = toplineArr.length;
        
        var variableRecordsArr = [];
        var dataSetRecordsArr = [];
        var xmlDest = File(Folder.desktop+"/VariableImporterData_"+new Date().getTime()+".xml");
        
//======================================================================================================================= MAIN WINDOW

        function addSafeIconButton(parent, key){
            var b;
            try{
                b = parent.add('iconbutton', undefined, ICONS[key]);
            } catch(e) {
                b = parent.add("button", undefined, key);
            }
            return b;
        }

        var screenLayout;
        function getScreenHeight(){
            var screenHeight;
            var userScreens = ($.screens);
            for(var i=0; i<userScreens.length; i++){
                var screen = userScreens[i];
                if(screen.primary){
                    screenHeight = screen.bottom - screen.top;
                    return screenHeight;
                }
            }
        }
        if(getScreenHeight() >= 800){
            screenLayout = ("Vertical");
        } else {
            screenLayout =("Horizontal");
        }
      
        var w = new Window('dialog', "Import "+type+" Options. File: '"+dataFileName+"'", undefined, {closeButton: true});
        w.spacing = 4;
        var g1 = w.add('group'); g1.orientation = 'row';
        if(screenLayout == "Horizontal"){
            g1.size = [750, 40];
        } else {
            g1.size = [376, 40];
        }
        var ch1 = g1.add('checkbox', undefined, "First row has column titles."); ch1.value = true;
        var sep = g1.add('group'); sep.size = [(screenLayout == "Horizontal")? 490 : 117, 5];
        var btn_controls = g1.add('button', undefined, "Controls"); btn_controls.size = [30, 30];
        btn_controls.onDraw = function(){
            if(SETTINGS.menuState === MenuStates.WorkMenu){
                drawFromObjString(ICONS['menu'], this);
            } else {
                drawFromObjString(ICONS['menu_2'], this);
            }
        }
        btn_controls.onClick = function(){
            switchViews();
        }
        
        var btn_help = g1.add('button', undefined, "?"); btn_help.size = [30, 30];
        btn_help.onClick = function(){
            quickView(instructions);
        }

        var viewsGroup = w.add('group'); viewsGroup.orientation = "stack";
//============================== WORK VIEW
        var workViewGroup = viewsGroup.add('group'); workViewGroup.orientation = (screenLayout == "Vertical") ? "column" : "row" ;
        var g2_wrap = workViewGroup.add('group'); g2_wrap.alignChildren = "top";
        var g2 = g2_wrap.add('panel', undefined, "Column Names");
        var addScroll = false;
        var ht = 0;
        var heightLocked = false;
        var dataElements = [];
        var scrollBarHt;
        
        var urlElements = [];
        for(var i=0; i<toplineArr.length; i++){
            ht += 106;
            var thisCell = toplineArr[i];
            var thisVarObj = analyzeHeaderCell(thisCell, i);
            var ag = g2.add('panel'); ag.orientation = 'row'; ag.alignChildren = 'left'; ag.spacing = 2; ag.margins = [2,2,2,2]; ag.size = [320, 100];
            var wrap = ag.add('group'); wrap.orientation = 'column'; wrap.alignChildren = "left";
            var ag1 = wrap.add('group'); ag1.margins = [0, 0, 4, 0];
            var lbl1 = ag1.add('statictext', undefined, "Variable Name");
            var ae = ag1.add('edittext', undefined, thisVarObj.name);
            if(AIversion === 15){
                ae.characters = 21;
            } else {
                ae.characters = 15;
            }
            ae.order = i;
            var ag2 = wrap.add('group');  ag2.margins = [0, 0, 4, 0];
            var lbl2 = ag2.add('statictext', undefined, "Variable Type");
            var ad = ag2.add('dropdownlist', undefined, variableLabels); ad.size = [165, 20]; ad.selectWell();
            ad.selection = ad.find(thisVarObj.type);
            
            var ag3_wrap = wrap.add('group');  ag3_wrap.margins = [0, 0, 4, 0]; ag3_wrap.orientation = 'stack';
            var ag3 = ag3_wrap.add('group');
            var ag4 = ag3_wrap.add('group');
            var orderText = ag4.add('statictext', undefined, "Variable Name "+(i+1));
            if(ad.selection.text == "Linked File Variable" || ad.selection.text == "Graph Data Variable"){
                ag3.visible = true;
                ag4.visible = false;
            } else {
                ag3.visible = false;
                ag4.visible = true;
            }

            ag3.pathCh = ag3.add('checkbox', undefined, 'Prepend Path'); ag3.pathCh.value = false;
            ag3.pathCh.helpTip = "Add a folder path to the beginning of each cell, if Linked File column contains only file names. (case-sensitive, Linked Files only)";
            ag3.pathDisp_image = ag3.add('edittext', undefined, '', {readonly: true}); ag3.pathDisp_image.characters = 14;
            ag3.fillerGroup = ag4;
            if(AIversion === 15){
                ag3.pathDisp_image.characters = 19;
            } else {
                ag3.pathDisp_image.characters = 14;
            }
            ad.pathGr = ag3;
            urlElements.push({"types_dropdown" : ad, "checkbox" : ag3.pathCh, "display" : ag3.pathDisp_image});

            ag3.pathCh.onClick = function(){
                if(this.value == false){
                    this.parent.pathDisp_image.text = "";
                } else {
                    var fld = Folder(Folder.desktop).selectDlg("Choose a folder to add the folder path to Linked File names.");
                    if(fld != null){
                        this.parent.pathDisp_image.text = decodeURI(fld.fsName);
                    } else {
                        this.parent.pathDisp_image.text = "";
                        this.value = false;
                    }
                }
            }

            var icn = ag.add('panel'); icn.size=[45,45];
            icn.iconTypeElem = ad;
            ad.iconElem = icn;

            icn.onDraw = function(){
                drawIcon(this, this.iconTypeElem.selection.text);
            }
            ae.addEventListener('changing', function(){
                if(!ch1.value){
                    if(!xmlRx.test(this.text)){
                        alert(xmlWarning);
                        this.text = "Variable"+(this.order+1);
                    }
                    dsn_disp.text = getDataSetNameStringVarNames(dataElements, currentDataSetNameObj, ch_showDataSetNamingWarning.value);
                }
            });
            ad.onChange = function(){
                this.iconElem.hide();
                this.iconElem.show();
                (this.selection.text == "Linked File Variable") ? this.pathGr.enabled = true : this.pathGr.enabled = false;
                if(this.selection.text == "Linked File Variable" || this.selection.text == "Graph Data Variable"){
                    this.pathGr.visible = true;
                    this.pathGr.fillerGroup.visible = false
                } else {
                    this.pathGr.visible = false;
                    this.pathGr.fillerGroup.visible = true;
                }
            }
            
            dataElements.push([ae, ad, ag3]);
            if(i > 2){
                addScroll = true;
            }
            if(ht > 300 && heightLocked == false){
                g2.size = [345, ht+30];
                scrollBarHt = ht;
                heightLocked = true;
            }
        }
        if(addScroll){
            var sc = g2_wrap.add('scrollbar');
            sc.size = [22, scrollBarHt+25];
            sc.onChange = sc.onChanging = function(){
                var l = g2.children.length;
                for(var i=0; i<l; i++){
                    var thisPanel = g2.children[i];
                    var xLoc = thisPanel.originalLocation[0];
                    var yLoc = thisPanel.originalLocation[1];
                    thisPanel.location=[xLoc, yLoc - ((this.value/100) * (ht - (scrollBarHt - (15 + (i * 4.0)))))];
                    // Basically, move the top of each of the panels from its original value to the percentage of the
                    // scrollbar value times the total height of all the panels, minus  the height of the container window (parent viewport), minus a compensation buffer.
                }
            }
        }
        
        var g_btmsec = workViewGroup.add('group'); g_btmsec.orientation = "column";
        var g3 = g_btmsec.add('group');
        var g_dsn = g3.add('panel', undefined, "Data Set Names"); g_dsn.size = [376, (screenLayout == "Horizontal")? 110 : 80]; g_dsn.spacing = 2;
        if(screenLayout == "Horizontal"){
            var g_fill = g_dsn.add("group"); g_fill.size = [20,15];
        }
        var g_dsn1 = g_dsn.add('group'); g_dsn1.orientation = "row";
        var btn_dsn = g_dsn1.add('button', undefined, 'Assign');
        var lbl_dsn = g_dsn1.add('statictext', undefined, '(first record\'s name displayed)');
        var dsn_disp = g_dsn.add('edittext', undefined, "Record INC", {readonly: true}); dsn_disp.characters = 33; dsn_disp.justify = "center";
        
        var g_xmlOpts = g_btmsec.add('panel', undefined, "XML Options");  g_xmlOpts.size = [376, (screenLayout == "Horizontal")? 108 : 80]; g_xmlOpts.spacing = 2;
        if(screenLayout == "Horizontal"){
            var g_fill = g_xmlOpts.add("group"); g_fill.size = [20,15];
        }
        var g_xmlOpts_1 = g_xmlOpts.add('group'); g_xmlOpts_1.orientation = "row";
        var ch_xml = g_xmlOpts_1.add('checkbox', undefined, 'Keep XML');
        var btn_xml = g_xmlOpts_1.add('button', undefined, "XML File");
        var g_xmlOpts_2 = g_xmlOpts.add('group'); g_xmlOpts_2.orientation = "column";
        if(settingsObj != null){
            if(settingsObj.presetXML == 'true'){
                xmlDest = settingsObj.xmlPath;
            }
        }
        var xml_disp = g_xmlOpts_2.add('edittext', undefined, decodeURI(xmlDest), {readonly: true}); xml_disp.characters = 33;
        
        var g4 = g_btmsec.add('group');
        var g_ab = g4.add('panel', undefined, "Auto-Binding"); g_ab.size = [376, (screenLayout == "Horizontal")? 108 : 55]; g_ab.spacing = 2;
        if(screenLayout == "Horizontal"){
            var g_fill = g_ab.add("group"); g_fill.size = [20,25];
        }
        var dd_ab = g_ab.add('dropdownlist', undefined, ["No Auto-Binding","Bind by Name","Bind by Note","Bind by Tag"]);
        dd_ab.selection = dd_ab.items[0]; dd_ab.selectWell();


//============================== CONTROLS VIEW
        var controlsViewGroup = viewsGroup.add('group'); controlsViewGroup.orientation = (screenLayout == "Vertical") ? "column" : "row" ;
        var cvg_1 = controlsViewGroup.add("group"); cvg_1.orientation = "column";

        var btn_height_1 = 50, btn_height_2 = 18;
        var g_settingsButtons = cvg_1.add('panel', undefined, "Settings"); g_settingsButtons.orientation = "column"; g_settingsButtons.spacing = 2;
        g_settingsButtons.size = [376, (screenLayout == "Horizontal")? 110 : 65];
        if(screenLayout == "Horizontal"){
            var g_fill = g_settingsButtons.add("group");
            g_fill.size = [20, 20];
        }
        var ch_showDataSetNamingWarning = g_settingsButtons.add('checkbox', undefined, "Show dataset 'no-increment' naming warning.");
        ch_showDataSetNamingWarning.value = true; //start out checked for default
        var ch_dbspReturns = g_settingsButtons.add('checkbox', undefined, "'\\\\' creates line-breaks in text.");
        ch_dbspReturns.value = false; //start out not-checked for default
        ch_dbspReturns.helpTip = "When checked, any double-backspace (\\\\) in text variable content is transformed into a carriage return.";

        var g_presets = cvg_1.add('panel', undefined, "Preset Options");
        g_presets.orientation = "column"; g_presets.size = [376, (screenLayout == "Vertical") ? 75 : 120]; g_presets.spacing = 2;
        var g_presets_disp = g_presets.add('group');
        var g_presets_disp_lbl = g_presets_disp.add('statictext', undefined, 'Current Loaded Preset: ');
        var disp_preset = g_presets_disp.add('edittext', undefined, '', {readonly: true}); disp_preset.characters = 12;
        var g_presets_btnWrap = g_presets.add('group'); 
        g_presets_btnWrap.alignChildren = "fill";
        g_presets_btnWrap.alignment = "fill";
        g_presets_btnWrap.size = [360, (screenLayout == "Vertical") ? 30 : 60];
        var btn_loadPreset = g_presets_btnWrap.add('button', undefined, "Load");
        btn_loadPreset.size = [120, (screenLayout == "Horizontal") ? btn_height_1 : btn_height_2];
        var btn_savePreset = g_presets_btnWrap.add('button', undefined, "Save");
        btn_savePreset.size = [120, (screenLayout == "Horizontal") ? btn_height_1 : btn_height_2];
        var btn_removePreset = g_presets_btnWrap.add('button', undefined, "Remove");
        btn_savePreset.size = [120, (screenLayout == "Horizontal") ? btn_height_1 : btn_height_2];

        var g_prepend = cvg_1.add('panel', undefined, "Prepend path Options");
        g_prepend.orientation = "column"; g_prepend.size = [376, 90];
        var g_prepend_wrap = g_prepend.add('group'); g_prepend_wrap.orientation = "column";
        var g_prepend_images = g_prepend_wrap.add('group');
        var ch_prependImagePath = g_prepend_images.add('checkbox', undefined, "Images");
        var disp_prependImagePath = g_prepend_images.add('edittext', undefined, "", {readonly: true}); disp_prependImagePath.characters = 25;
        g_prepend_wrap.pathDisp_image = disp_prependImagePath;

        var g_prepend_graphs = g_prepend_wrap.add('group');
        var ch_prependGraphPath = g_prepend_graphs.add('checkbox', undefined, "Graphs");
        var disp_prependGraphPath = g_prepend_graphs.add('edittext', undefined, "", {readonly: true}); disp_prependGraphPath.characters = 25;
        g_prepend_wrap.pathDisp_graph = disp_prependGraphPath;

        var cvg_2 = controlsViewGroup.add("group"); cvg_2.orientation = "column";

        var g_presetXML = cvg_2.add('panel', undefined, "Preset XML Options");
        g_presetXML.orientation = "column"; g_presetXML.size = [376, 90];
        var ch_presetXML = g_presetXML.add('checkbox', undefined, "Use custom XML file destination. (Can save into a Preset)");
        var disp_presetXML = g_presetXML.add('edittext', undefined, "", {readonly: true}); disp_presetXML.characters = 25;
        g_presetXML.pathDisp_xml = disp_presetXML;

        var sep = cvg_2.add('panel'); sep.size = [376, 40]; sep.setBg([0.3,0.8,0.3]);
        var title = sep.add('statictext', undefined, 'VariableImporter.jsx');

        var g_social = cvg_2.add('panel', undefined, "Share the VariableImporter.jsx with the community!");
        g_social.orientation = "column"; g_social.size = [376, 90]; g_social.spacing = 4; g_social.margins = [2,10,2,2];
        var g_social_btnWrap = g_social.add('group'); g_social_btnWrap.alignChildren = "fill"; g_social_btnWrap.alignment = "right";
        g_social_btnWrap.size = [360, btn_height_1+10]; g_social_btnWrap.spacing = 4; g_social_btnWrap.margins = [2,2,2,2];
        var btn_share_LinkedIn = addSafeIconButton(g_social_btnWrap, "linkedin"); btn_share_LinkedIn.size = [172, btn_height_1];
        btn_share_LinkedIn.data = "linkedin";
        var btn_share_Twitter = addSafeIconButton(g_social_btnWrap, "twitter"); btn_share_Twitter.size = [172, btn_height_1];
        btn_share_Twitter.data = "twitter";

        var g_resources = cvg_2.add('panel', undefined, "Helpful Resources");
        g_resources.orientation = "column"; g_resources.size = [376, 90]; g_resources.spacing = 4; g_resources.margins = [2,10,2,2];
        var g_resources_btnWrap = g_resources.add('group'); g_resources_btnWrap.alignChildren = "fill"; g_resources_btnWrap.alignment = "right";
        g_resources_btnWrap.size = [360, btn_height_1+10]; g_resources_btnWrap.spacing = 4; g_resources_btnWrap.margins = [2,2,2,2];
        var btn_resources_Prepression = addSafeIconButton(g_resources_btnWrap, "prepression"); btn_resources_Prepression.size = [172, btn_height_1];
        btn_resources_Prepression.data = "prepression";
        var btn_resources_Hypertransitory = addSafeIconButton(g_resources_btnWrap, "hypertransitory"); btn_resources_Hypertransitory.size = [172, btn_height_1];
        btn_resources_Hypertransitory.data = "hypertransitory";
        
        var btn_g = w.add('group');
        var btn_ccl = btn_g.add('button', undefined, 'Cancel');
        var btn_ok = btn_g.add('button', undefined, 'OK');
        
        var webBtnsArr = [btn_share_LinkedIn, btn_share_Twitter, btn_resources_Hypertransitory, btn_resources_Prepression];
        for(var i=0; i<webBtnsArr.length; i++){
            var btn = webBtnsArr[i];
            btn.onClick = function(){
                performBrowserAction(this.data);
            }
        }

        ch_prependImagePath.onClick = function(){
            if(this.value == false){
                this.parent.parent.pathDisp_image.text = "";
                for(var i=0; i<urlElements.length; i++){
                    var thisElem = urlElements[i];
                    if(thisElem.types_dropdown.selection.text == 'Linked File Variable'){
                        thisElem.checkbox.value = false;
                        thisElem.display.text = "";
                    }
                }
            } else {
                var fld = Folder(Folder.desktop).selectDlg("Image Folder");
                if(fld != null){
                    this.parent.parent.pathDisp_image.text = decodeURI(fld.fsName);
                    for(var i=0; i<urlElements.length; i++){
                        var thisElem = urlElements[i];
                        if(thisElem.types_dropdown.selection.text == 'Linked File Variable'){
                            thisElem.checkbox.value = true;
                            thisElem.display.text = decodeURI(disp_prependImagePath.text);
                        }
                    }
                } else {
                    this.parent.parent.pathDisp_image.text = "";
                    this.value = false;
                }
            }
        }
        ch_prependGraphPath.onClick = function(){
            if(this.value == false){
                this.parent.parent.pathDisp_graph.text = "";
                for(var i=0; i<urlElements.length; i++){
                    var thisElem = urlElements[i];
                    if(thisElem.types_dropdown.selection.text == 'Graph Data Variable'){
                        thisElem.checkbox.value = false;
                        thisElem.display.text = "";
                    }
                }
            } else {
                var fld = Folder(Folder.desktop).selectDlg("Graph-data Folder");
                if(fld != null){
                    this.parent.parent.pathDisp_graph.text = decodeURI(fld.fsName);
                    for(var i=0; i<urlElements.length; i++){
                        var thisElem = urlElements[i];
                        if(thisElem.types_dropdown.selection.text == 'Graph Data Variable'){
                            thisElem.checkbox.value = true;
                            thisElem.display.text = decodeURI(disp_prependGraphPath.text);
                        }
                    }
                } else {
                    this.parent.parent.pathDisp_graph.text = "";
                    this.value = false;
                }
            }
        }

        ch_presetXML.onClick = function(){
            if(this.value == false){
                this.parent.pathDisp_xml.text = "";
                xml_disp.text = decodeURI(File(Folder.desktop+"/VariableImporterData_"+new Date().getTime()+".xml"));
            } else {
                var filePath = File(Folder.desktop+"/myVariableLibrary.xml").saveDlg("Choose custom XML destination.");
                if(filePath != null){
                    var pathString = decodeURI(filePath.fsName);
                    this.parent.pathDisp_xml.text = xml_disp.text = pathString;
                } else {
                    this.parent.pathDisp_xml.text = "";
                    this.value = false;
                }
            }
        }

        btn_savePreset.onClick = function(){
            var savedPreset = settingsDialog(
                'save',
                settingsFile,
                [ch1, dd_ab.selection, ch_xml, ch_prependImagePath, disp_prependImagePath, ch_presetXML, disp_presetXML, ch_showDataSetNamingWarning, ch_prependGraphPath, disp_prependGraphPath, ch_dbspReturns],
                currentDataSetNameObj
            );
            if(savedPreset != null){
                disp_preset.text = savedPreset.currentName;
            }
        }
        btn_removePreset.onClick = function(){
            var removePresetResult = settingsDialog('remove', settingsFile, [], {});
            disp_preset.text = '';
        }
        btn_loadPreset.onClick = function(){
            var loadedPreset = settingsDialog(
                'load',
                settingsFile,
                [ch1, dd_ab.selection, ch_xml, ch_prependImagePath, disp_prependImagePath, ch_presetXML, disp_presetXML, ch_showDataSetNamingWarning, ch_prependGraphPath, disp_prependGraphPath, ch_dbspReturns],
                currentDataSetNameObj
            );
            if(loadedPreset != null){
                disp_preset.text = loadedPreset.currentName;

                ch1.value = (loadedPreset.headerRow == 'true') ? true : false;
                dd_ab.selection = dd_ab.find(loadedPreset.autoBind);
                ch_xml.value = (loadedPreset.keepXML == 'true') ? true : false;
                ch_prependImagePath.value = (loadedPreset.prependToAllImages == 'true') ? true : false;
                disp_prependImagePath.text = loadedPreset.prependImagePath;
                ch_prependGraphPath.value = (loadedPreset.prependToAllGraphs == 'true') ? true : false ;
                disp_prependGraphPath.text = loadedPreset.prependGraphPath;
                ch_presetXML.value = (loadedPreset.presetXML == 'true') ? true : false;
                disp_presetXML.text = loadedPreset.xmlPath;
                btn_xml.enabled = (loadedPreset.presetXML == 'true') ? true : false;
                ch_showDataSetNamingWarning.value = (loadedPreset.showDataSetNamingWarning == 'true') ? true : false;
                ch_dbspReturns.value = (loadPreset.dbspReturns == 'true') ? true : false;
                if(loadedPreset.presetXML == 'true'){
                    xml_disp.text = decodeURI(loadedPreset.xmlPath);
                } else {
                    xml_disp.text = decodeURI(File(Folder.desktop+"/VariableImporterData_"+new Date().getTime()+".xml"));
                }
                
                for(var i=0; i<urlElements.length; i++){
                    var thisElem = urlElements[i];
                    if(thisElem.types_dropdown.selection.text == 'Linked File Variable'){
                        if(loadedPreset.prependToAllImages == 'true'){
                            thisElem.checkbox.value = true;
                            thisElem.display.text = decodeURI(loadedPreset.prependImagePath);
                        } else {
                            thisElem.checkbox.value = false;
                            thisElem.display.text = '';
                        }
                    } else if(thisElem.types_dropdown.selection.text == "Graph Data Variable"){
                        if(loadedPreset.prependToAllGraphs == 'true'){
                            thisElem.checkbox.value = true;
                            thisElem.display.text = decodeURI(loadedPreset.prependGraphPath);
                        } else {
                            thisElem.checkbox.value = false;
                            thisElem.display.text = '';
                        }
                    }
                }

                currentDataSetNameObj = {
                    field1: {
                        type: loadedPreset.currentDataSetNameObj.field1.type,
                        text: loadedPreset.currentDataSetNameObj.field1.text
                    },
                    field2: {
                        type: loadedPreset.currentDataSetNameObj.field2.type,
                        text: loadedPreset.currentDataSetNameObj.field2.text
                    },
                    field3: {
                        type: loadedPreset.currentDataSetNameObj.field3.type,
                        text: loadedPreset.currentDataSetNameObj.field3.text
                    },
                    field4: {
                        type: loadedPreset.currentDataSetNameObj.field4.type,
                        text: loadedPreset.currentDataSetNameObj.field4.text
                    },
                    field5: {
                        type: loadedPreset.currentDataSetNameObj.field5.type,
                        text: loadedPreset.currentDataSetNameObj.field5.text
                    },
                    field6: {
                        type: loadedPreset.currentDataSetNameObj.field6.type,
                        text: loadedPreset.currentDataSetNameObj.field6.text
                    }
                };
                dsn_disp.text = getDataSetNameStringVarNames(dataElements, currentDataSetNameObj, ch_showDataSetNamingWarning.value);

                //alert("Successfully loaded preset.");
            }
        }
        btn_xml.onClick = function(){
            var xmlDest = File(Folder.desktop+"/VariableImporterData_"+new Date().getTime()+".xml");
            var dest = xmlDest.saveDlg("Where to save the XML file?");
            if(dest != null){
                xml_disp.text = decodeURI(dest);
                xmlDest = dest;
            }
        }
        btn_dsn.onClick = function(){
            var res = getUserDataSetName(currentDataSetNameObj, dataElements);
            if(res != null){
                currentDataSetNameObj = res;
                dsn_disp.text = getDataSetNameStringVarNames(dataElements, currentDataSetNameObj, ch_showDataSetNamingWarning.value);
            }
        }
        ch1.onClick = function(){
            toggleVariableSetup(!this.value);
            dsn_disp.text = getDataSetNameStringVarNames(dataElements, currentDataSetNameObj, ch_showDataSetNamingWarning.value);
        }
        w.onShow = function(){
            switchViews(MenuStates.WorkMenu);
            toggleVariableSetup(false);

            for(var i=0; i<g2.children.length; i++){
                var thisPanel = g2.children[i];
                thisPanel.originalLocation = [thisPanel.location[0], thisPanel.location[1]];
            }

            dsn_disp.text = getDataSetNameStringVarNames(dataElements, currentDataSetNameObj, ch_showDataSetNamingWarning.value);

            if(settingsObj != null){
                ch1.value = (settingsObj.headerRow == false) ? false : true ;
                dd_ab.selection = dd_ab.find(settingsObj.autoBind);
                ch_xml.value = (settingsObj.keepXML == false) ? false : true ;
                disp_preset.text = allSettingsObj.currentName;

                disp_prependImagePath.text = decodeURI(settingsObj.prependImagePath);
                ch_prependImagePath.value = (settingsObj.prependToAllImages == true) ? true : false;
                
                disp_prependGraphPath.text = decodeURI(settingsObj.prependGraphPath);
                ch_prependGraphPath.value = (settingsObj.prependToAllGraphs == true) ? true : false;

                ch_dbspReturns.value = (settingsObj.dbspReturns == true) ? true : false;
                                
                disp_presetXML.text = decodeURI(settingsObj.xmlPath);
                ch_presetXML.value = (settingsObj.presetXML == true) ? true : false;
                ch_showDataSetNamingWarning.value = (settingsObj.showDataSetNamingWarning == true) ? true : false;

                for(var i=0; i<urlElements.length; i++){
                    var thisElem = urlElements[i];
                    if(thisElem.types_dropdown.selection.text == 'Linked File Variable'){
                        if(settingsObj.prependToAllImages == 'true'){
                            thisElem.checkbox.value = true;
                            thisElem.display.text = decodeURI(settingsObj.prependImagePath);
                        } else {
                            thisElem.checkbox.value = false;
                            thisElem.display.text = '';
                        }
                    } else if(thisElem.types_dropdown.selection.text == 'Graph Data Variable'){
                        if(settingsObj.prependToAllGraphs == 'true'){
                            thisElem.checkbox.value = true;
                            thisElem.display.text = decodeURI(settingsObj.prependGraphPath);
                        } else {
                            thisElem.checkbox.value = false;
                            thisElem.display.text = '';
                        }
                    }
                }
            }

            // make sure we start at the work menu.
        }
        if(w.show() ==2){
//~             alert("Cancelled");
            return null;
        } else {
            for(var i=0; i<dataElements.length; i++){
                variableRecordsArr.push({
                    data: dataElements[i][0].text,
                    variableType: dataElements[i][1].selection.text,
                    prependImagePath: dataElements[i][2].pathCh.value,
                    url: dataElements[i][2].pathDisp_image.text,
                });
            }
                
            var start = (ch1.value == true) ? 1 : 0;
            var counter = 1;
            for(var i=start; i<everyRow.length; i++){
                var thisRawRow = everyRow[i];
                
                var thisRow = [];
                for(var j=0; j<thisRawRow.length; j++){
                    thisRow.push(trimString(thisRawRow[j]));
                }
                var dataSetName = getRecordDataSetName(currentDataSetNameObj, counter++, thisRow);
                dataSetRecordsArr.push({name: dataSetName, dataRow: thisRow});
            }

            return {
                variableRecords: variableRecordsArr,
                dataSetRecords: dataSetRecordsArr,
                dataFile: df, dataFileType: type,
                keepXml: ch_xml.value,
                xmlDest: xml_disp.text,
                bindingFunction: bindingFunctions[dd_ab.selection.text],
                dbspReturns: ch_dbspReturns.value,
            };
        }
    }
    if(app.documents.length > 0){
        var doc = app.activeDocument;
        if(doc.dataSets.length == 0 || (doc.dataSets.length > 0 &&
            confirm("Warning, there are datasets already present in document '"+doc.name+"', they shall be removed.\nContinue?"))){
            var fileMatch = (os == 'Mac') ? function(f){return f instanceof Folder || (f instanceof File && f.displayName.match(/(\.txt$|\.csv$)/i));} : '*.txt;*.csv';
            var dataFile = File.openDialog("Choose a tab-delimited, or commma-separated (.csv) data file.", fileMatch);
            if(dataFile != null){
                dataFile  = File(dataFile.fsName.replace("file://", ""));
                var allRecords = getData(dataFile, settingsObj);
                //example: allRecords.variableRecords[i] == {data: dataElements[i][0].text, variableType: dataElements[i][1].selection.text}
                if(allRecords != null){
                    if(doc.dataSets.length > 0){
                        doc.dataSets.removeAll();
                    }
                    if(doc.variables.length > 0){
                        for(var i=doc.variables.length-1; i>-1; i--){
                            var thisVariable = doc.variables[i];
                            thisVariable.remove();
                        }
                    }
                    
                    var problem = '';
                    try{
                        var xmlDest = allRecords.xmlDest;
                        var keepXML = allRecords.keepXml;
                        var myXMLString = "<?xml version=\"1.0\" encoding=\"utf-8\"?>"+"\r"+
                            "<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 20001102//EN\"    \"http://www.w3.org/TR/2000/CR-SVG-20001102/DTD/svg-20001102.dtd\" ["+"\r"+
                            "	<!ENTITY ns_graphs \"http://ns.adobe.com/Graphs/1.0/\">"+"\r"+
                            "	<!ENTITY ns_vars \"http://ns.adobe.com/Variables/1.0/\">"+"\r"+
                            "	<!ENTITY ns_imrep \"http://ns.adobe.com/ImageReplacement/1.0/\">"+"\r"+
                            "	<!ENTITY ns_custom \"http://ns.adobe.com/GenericCustomNamespace/1.0/\">"+"\r"+
                            "	<!ENTITY ns_flows \"http://ns.adobe.com/Flows/1.0/\">"+"\r"+
                            "<!ENTITY ns_extend \"http://ns.adobe.com/Extensibility/1.0/\">"+"\r"+
                            "]>"+"\r"+
                            "<svg>"+"\r"+
                            "<variableSets  xmlns=\"&ns_vars;\">"+"\r"+
                            "	<variableSet  locked=\"none\" varSetName=\"binding1\">"+"\r"+
                            "		<variables>"+"\r"+
                            "PUT_VARIABLES_HERE"+
                            "		</variables>"+"\r"+
                            "		<v:sampleDataSets xmlns=\"http://ns.adobe.com/GenericCustomNamespace/1.0/\" xmlns:v=\"http://ns.adobe.com/Variables/1.0/\">"+"\r"+
                            "PUT_DATASETS_HERE"+
                            "		</v:sampleDataSets>"+"\r"+
                            "	</variableSet>"+"\r"+
                            "</variableSets>"+"\r"+
                            "</svg>";
                        var dictVars= {
                            "Text Variable" : {trait: "textcontent", category: "&ns_flows;"},
                            "Visibility Variable" : {trait: "visibility", category: "&ns_vars;"},
                            "Linked File Variable": {trait: "fileref", category: "&ns_vars;"},
                            "Graph Data Variable": {trait: "graphdata", category: "&ns_graphs;"}
                        };
                        // set up the variables from a single record
                        problem = "Making variables group XML string";
                        var variablesGroup = XML("<root></root>");
                        for(var i=0; i<allRecords.variableRecords.length; i++){
                            var cell = allRecords.variableRecords[i];
                            var newVariable = XML('<variable></variable>');
                            var thisVarType = dictVars[cell.variableType];
                            for(var all in thisVarType){
                                newVariable['@'+all] = thisVarType[all];
                            }
                            newVariable['@varName'] = cell.data;
                            variablesGroup.appendChild(newVariable);
                        }

                        var variablesGroupString = variablesGroup.toString().replace(/&amp;/g,"&").replace(/(<root>|<\/root>)/g,'');
                        var missingImageArray = [];
                        var missingGraphArray = [];
                        problem = "Making data set group XML string";
                        var dataSetsGroup = XML("<root></root>");
                        for(var i=0; i<allRecords.dataSetRecords.length; i++){
                            var thisDataSet = allRecords.dataSetRecords[i];

                            var dataSet = XML("<sampleDataSet></sampleDataSet>");
                            dataSet.setNamespace("v");
                            dataSet['@dataSetName'] = thisDataSet.name;
                            for(var j=0; j<allRecords.variableRecords.length; j++){
                                var thisVar = allRecords.variableRecords[j];
                                var thisVarName = thisVar.data;
                                var thisVarContent = stringXmlSafe(thisDataSet.dataRow[j]);
                                var thisVarXML;
                                if(thisVar.variableType == variableLabels[0]){
                                    // deal with Text
                                    var paraCount = 1;
                                    var paragraphTextArr, paragraphText;
                                    if(allRecords.dbspReturns){
                                        thisVarContent = thisVarContent.replace(/\\\\/g,"__RETURN_CHAR");
                                    }
                                    var returnChars = thisVarContent.match(/\n/g);
                                    if(returnChars != null){
                                        paraCount = returnChars.length+1;
                                        paragraphTextArr = thisVarContent.split(/\n/g);
                                    } else {
                                        paragraphTextArr = [thisVarContent];
                                    }
                                    thisVarXML = XML("<"+thisVarName+"></"+thisVarName+">");
                                    for(var q=0; q<paragraphTextArr.length; q++){
                                        var thisText = paragraphTextArr[q];
                                        if(paragraphTextArr.length > 1 && q == 0 || q == paragraphTextArr.length-1){
                                            
                                            if(q == 0 && thisText.match(/^&quot;/)){
                                                thisText = thisText.replace(/^&quot;/,'');
                                            }

                                            if(q == paragraphTextArr.length-1 && thisText.match(/&quot;$/)){
                                                thisText = thisText.replace(/&quot;$/,'');
                                            }
                                        }

                                        if(thisText.replace(/\s+/g,'') == ''){
                                            paragraphText = wrapCDATA("\n", "p");
                                            paragraphText['@xml:space'] = "preserve";
                                            // this does not work in creating a blank line.
                                        } else {
                                            paragraphText = XML("<p>"+thisText+"</p>");
                                        }
                                        thisVarXML.appendChild(paragraphText);
                                    }
                                } else {
                                    var folderDiv = (os == "Windows")? "\\" : "/";
                                    if(thisVar.variableType == variableLabels[1]){
                                        // deal with visibility
                                        thisVarContent = thisVarContent.replace(/(^\s+|\s+$)/g,'').toLowerCase();
                                        if(thisVarContent !== 'true' && thisVarContent !== 'false'){
                                            thisVarContent = (thisVarContent == '') ? 'false' : 'true';
                                        }
                                    } else if(thisVar.variableType == variableLabels[2]){
                                        // deal with linked files when checked to prepend a path
                                        if(thisVar.prependImagePath){
                                            var thisFolderDiv = (thisVar.hasOwnProperty('url') && thisVar.url != "") ? folderDiv : "" ;
                                            thisVarContent = thisVar.url+thisFolderDiv+thisVarContent;
                                            thisVarContent = "file:///"+(thisVarContent).replace(/\\\\/g,"/").replace(/\\/g,"/");
                                        }
                                        if(!File(thisVarContent).exists){
                                            missingImageArray.push(thisVarContent);
                                        }
                                    } else if(thisVar.variableType == variableLabels[3]){
                                        // deal with graph data files
                                        var thisFolderDiv = (thisVar.hasOwnProperty('url') && thisVar.url != "") ? folderDiv : "" ;
                                        if(thisVar.hasOwnProperty('url')){
                                            thisVarContent = thisVar.url+thisFolderDiv+thisVarContent;
                                            if(!File(thisVarContent).exists){
                                                missingGraphArray.push(thisVarContent);
                                            }
                                        }
                                        var thisGraphDataXML = getGraphData(File(thisVarContent));
                                        thisVarContent = thisGraphDataXML;
                                    }
                                    thisVarXML = XML("<"+thisVarName+">"+thisVarContent+"</"+thisVarName+">");
                                }
                                dataSet.appendChild(thisVarXML);
                            }
                            dataSetsGroup.appendChild(dataSet);
                        }
                        var dataSetsGroupString = dataSetsGroup.toString().replace(/xmlns:v="v" /g,'').replace(/(<root>|<\/root>)/g,'');

                        myXMLString = (myXMLString.replace("PUT_DATASETS_HERE", dataSetsGroupString).replace("PUT_VARIABLES_HERE", variablesGroupString));
                        
                        if(allRecords.dbspReturns){
                            myXMLString = myXMLString.replace(/__RETURN_CHAR/g, "&#13;");
                        }
                        
                    } catch(e){
                        quickView("Error making XML string:\r"+e+"\rPossible problem: "+problem);
                        return;
                    }

                    try{
                        var myXMLFile = File(xmlDest);
                        myXMLFile.encoding = "UTF-8";
                        myXMLFile.open('w');
                        myXMLFile.write(myXMLString);
                        myXMLFile.close();
                        doc.importVariables(myXMLFile);

                        if(!keepXML){
                            myXMLFile.remove();
                        }
                        alert("Data Sets imported from "+allRecords.dataFileType+" file '"
                            +decodeURI(allRecords.dataFile.name)+"' have "+allRecords.variableRecords.length+" variable names and "+
                            allRecords.dataSetRecords.length+" records.");

                        if(missingGraphArray.length > 0 || missingImageArray.length >0){
                            var msg = "";
                            if(missingGraphArray.length > 0){
                                msg += "The following Graph Data files were not found:\r";
                                msg += "------------------------------------------------\r";
                                msg += missingGraphArray.join("\n") + "\r\r";
                            }
                            if(missingImageArray.length > 0){
                                msg += "The following Image files were not found:\r";
                                msg += "------------------------------------------------\r";
                                msg += missingImageArray.join("\n") + "\r\r";
                            }
                            quickView(msg, "Non-found files log:");
                        }
                        if(allRecords.bindingFunction != "No Auto-Binding"){
                            var temp = app.documents.add();
                            temp.close(SaveOptions.DONOTSAVECHANGES);
                            // ^^^this is needed to make sure these bindings will stick.
                            allRecords.bindingFunction();
                            app.activeDocument.dataSets[0].display(); // display the first dataset.
                        }
                    } catch(e){
                        alert("Error in processing of  '"+decodeURI(myXMLFile.name)+"' :\r"+e);
                    }
                }
            }
        }
    } else {
        alert("Please create or open an Illustrator document into which to import variables.");
    }
}

VariableImporter();
