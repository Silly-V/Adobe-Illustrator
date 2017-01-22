/**
* @@@BUILDINFO@@@ ScriptPanel_x.jsx !Version! Sun Mar 29 2015 08:34:25 GMT-0500
*/

/*
    To point this palette to a single configuration file for the purpose of organizational deployment, change this line:
    var configFile = File(File($.fileName).path+"/ScriptPanel_Config.xml");
    
    To use paths relative to the target scripts, use this variable instead of $.fileName : "ScriptPanel_MyLocation".  ex:
    var relativePath = $.fileName.path;
    if(!relativePath.exists){
        relativePath = ScriptPanel_MyLocation;
    }
*/

#target illustrator
#targetengine main
function ScriptPanel(){
    
//====================================================================================== Easy-to-Find settings =======================================//
    var admin = true;
    var estk_func_on = false;
    var configFile = File(Folder.myDocuments+"/Adobe Scripts/ScriptPanel_Config.xml");
    var personalConfigFile = File(Folder.myDocuments+"/Adobe Scripts/ScriptPanel_PersonalConfig.xml");
    

//===================================== Resources ================================================================================================//
    var IMAGE_RESOURCES = {
        square_none : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x14\x00\x00\x00\x14\b\x06\x00\x00\x00\u008D\u0089\x1D\r\x00\x00\x00\x19tEXtSoftware\x00Adob"+
        "e ImageReadyq\u00C9e<\x00\x00\x00\x18IDATx\u00DAb`\x18\x05\u00A3`\x14\u008C\u0082Q0\n\u00A8\x03\x00\x02\f\x00\x06T\x00\x01\u008B\u00CCR\u00FF"+
        "\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        square_red : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x03\x00\x00\x00\f\bex\x00\x00\x00\x19tEXtSoftware\x00Adobe "+
        "ImageReadyq\u00C9e<\x00\x00\x00\x06PLTE\u00FF\x00\x00\x00\x00\x00A\u00A3\x12\x03\x00\x00\x00\x0EIDATx\u00DAb`\x18Y\x00 "+
        "\u00C0\x00\x00\u00F0\x00\x01\u00A7\x02\u00EC\x02\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        square_blue : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x03\x00\x00\x00\f\bex\x00\x00\x00\x19tEXtSoftware\x00Adobe "+
        "ImageReadyq\u00C9e<\x00\x00\x00\x06PLTE\x00\x00\u00FF\x00\x00\x00{b\u00BF>\x00\x00\x00\x0EIDATx\u00DAb`\x18Y\x00 "+
        "\u00C0\x00\x00\u00F0\x00\x01\u00A7\x02\u00EC\x02\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        square_yellow : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x03\x00\x00\x00\f\bex\x00\x00\x00\x19tEXtSoftware\x00Adobe "+
        "ImageReadyq\u00C9e<\x00\x00\x00\x06PLTE\u00FF\u00FF\x00\x00\x00\x00\u008B\u00C7\u00D5\u008F\x00\x00\x00\x0EIDATx\u00DAb`\x18Y\x00 "+
        "\u00C0\x00\x00\u00F0\x00\x01\u00A7\x02\u00EC\x02\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        square_purple : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x03\x00\x00\x00\f\bex\x00\x00\x00\x19tEXtSoftware\x00Adobe "+
        "ImageReadyq\u00C9e<\x00\x00\x00\x06PLTE\u00FF\x00\u00FF\x00\x00\x00\u009F\u00A6\x14\u00F2\x00\x00\x00\x0EIDATx\u00DAb`\x18Y\x00 "+
        "\u00C0\x00\x00\u00F0\x00\x01\u00A7\x02\u00EC\x02\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        square_green : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x03\x00\x00\x00\f\bex\x00\x00\x00\x19tEXtSoftware\x00Adobe "+
        "ImageReadyq\u00C9e<\x00\x00\x00\x06PLTE\x00\u00FF\x00\x00\x00\x00o\x03~C\x00\x00\x00\x0EIDATx\u00DAb`\x18Y\x00 "+
        "\u00C0\x00\x00\u00F0\x00\x01\u00A7\x02\u00EC\x02\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        cog : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x03\x00\x00\x00\f\bex\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq"+
        "\u00C9e<\x00\x00\x00\u0081PLTE\u00B0\u00B0\u00B1\u00BB\u00BB\u00BC\u00D2\u00D2\u00D3\u008F\u008F\u0091CBDddfffhnoqeegimndhhhmm]]_]\\^\u00CE\u00CD\u00CE\u008F"+
        "\u0090\u0092LJLdce\u00D6\u00D6\u00D7xwy:8:JHJXWYTRTkjkB@AoorNNQ\u00D9\u00DA\u00DA\u00D1\u00D0"+
        "\u00D1MLM\u0082\u0082\u0084^]_oprjooKJKfkkZ[]SQSxxz\u00F4\u00F4\u00F4KKN\u00FF\u00FF\u00FFXd6\x1F\x00\x00\x00+tRNS\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF"+
        "\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF\u00FF"+
        "\u00FF\u00FF\u00FF\u00FF\u00FF\x00#\u00C9\u00A7\u00D0\x00\x00\x00oIDATx\u00DAb\u00D0B\x05\f\x10J\u0083I\x03\u0085\u00CF\u00A0\u00C9\u0088\u00E03\u00AB\x0B\u00C9K\x0B\u00CB\u00AA3C\u00F9\u00EA\u009A\x1C\u00BCb\u00E2,\u009A\u00EAP\u00BE\f\u00BB\u0080\x1C\u008F"+
        " \u00AB\b\x1F\u0098\u00AF\u00C1\u00C8\u00CF&\u00C9\u00A5\u00C2)%*\u00C1\u00A0\x01\u00E43i\u00AA*(skr+\u00AA\u00B1h2\u0081\u00E4\x19@\u00F2J yF\r,\u00FA1\u00CDG\u00B7\x1F\b\x185\x19\u00F0\u00BA\x1F\x0E\x00\x02\f\x00]\x05\x1C\x7F\u00C6r\u00F1\u008A\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        adobe_ae : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x06\x00\x00\x00;\u00D6\u0095J\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq"+
        "\u00C9e<\x00\x00\x01\x01IDATx\u00DAblfx\u00EA\u00C0\u00C0\u00C0\u00B0\u009F\u0081\f\u00C0\u00C4@\x01\u00A0\u00AE\u00E6\u00E7\fW\x19Z\x194\x19\u00CE3\u00AC\"]\u00F3\x03\u0086"+
        "\u00E3@\u00AD\x1E\f\u00D7\x19v\u0092\u00AE\x19d\u00A3%C\n\u00C3}\u0086c\f?\x18>\u00C1\u00C5A\u00EC\u00FD\f}\f\u00F3\x18B\u0080\x06\u00EF\u00C0\u00D4\u00FC\u0081\u00E11\u00C3w"+
        "\u00A0\"I\x06m\u00A8\u00ED;\u00E0r\u00CB\x18\u0092\x188\x18\u00F8\x18\u00A2\u0080\u00DA\u00CF3\u00AC\x06[\u0082\u00A2\x19\u00E4TM\x06w0[\x11h?\u00CC\u00E9 [\u00DF3<a"+
        "\u0090\x00\x1A\n\n\x13\u0098\x1C\x0B\u00BA\u0093A\u00A6\u0083\u009C\x06\x02\u00F7\u0081\u00FE\x07i\x04i\u0080\u0085\x07\f\u0080,aAwr\x16\u00C3.$\u00A7&\u0083\u009Dn\u00C8\x10\x06"+
        "\u00E6\u0083\u00C2\x02d8\f\u00B0`s2\u00B2\u00E9 q\u0090f'\u0086\"\u00B0\u008B@a\u00F1\u009D\u00E1#\u0098\u0086kV\x00\u009A\x0B\u00B3\x01\u00A1\u00D9\u0083A\u0080A\x16\u00CC\x06"+
        "\u00C9\u00810\u00C8+\u0082\f2`q\u00B8fP\b\u00A3\x03\u0090\x13A\u0081\u0083\f\u0090\u00F9\x03\u0097\u00B6\x01\x02\f\x00Z\u00B6M7].C\u00D3\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        adobe_ai : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F"+
        "\b\x02\x00\x00\x00\u00B4\u00B4\x02\x1D\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00BBIDATx\u00DAb\u00FC>"+
        "Y\u008E\u0081h\u00C0\u00C4@\n\u00A0L\u00F5\u00C3w\x7F.=\u00F9\u0085,\u00F2\u00F1\u00FB?\u009C\u00AA\u00D3\u0096"+
        "\u00BCK]\u00FA\x0E\u00CE]|\u00F2k\u00EA\u0092\u00B7\u00D8U\x03\u008Dy\u00F8\u00F6\u008F\u00BE4\u00EB\u00E6K\u00DF!"+
        "\"\u00B1\u00E6\u00DC\u00ABRE\u00B1\u00AB\u00DEt\u00E9\u00BB\u009D*\u00BB\u00AD*\u00C7\u00E6K\u00DF "+
        "\"\u0087n\u00FFt\u009F\u00F4\n\u00BBj\u00A0\"_=.?=\u00CEM0\u00B3q\u00FA\x12\u00E8\f\u00A0\x03\u00F89\u0099.>"+
        "\u00F9-\u00C0\u00C9\u00B4\x19\u009B\x06&Tgp\x1C\u00BE\u00F3\x03\u0088\u00F4dX\u00E1\u008EA\x06,\u00C8\u00CE\u00C8q\u00E0\u00F5\u00D5"+
        "\u00E3\u0084\u0084\u00A3y\u00C7\u008BY\u00B8\u00CC\x06:\x03\u00E8!\u0088R \u0090\x17b\u0091\x17f\u00C1t\f\u00E3\u00A0I'\x00\x01\x06\x00F"+
        "\u00ADU\u00C4I\x19{m\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        adobe_id : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x02\x00\x00\x00\u00B4"+
        "\u00B4\x02\x1D\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u008CIDATx"+
        "\u00DAb\u00DC\u00AAp\u0084\u0081h\u00C0\u00C4@\n\u00A0@\u00F5\u00BD_\u00B7\u00BF\u00FE\u00FB"+
        "\u0082&2\u00EB\u00DD$\u00EC\u00AA\u0081\x12@id\x11\u00A0fd\x11\u00D2\\\u00C2\u0082Ut\u00CF\u0097"+
        "\u00ED\x1B?\u00AD\u00E2f\u00E2\x11g\u0091$\u00A0\u00FA\u00E5\u009F\x17\u00CB>\u00CC\u009B,5\x1F\u00A8"+
        "\x1A\u00C8x\u00F9\u00E79>\u0097\u00EC\u00FD\u00B2\u00CD\u0085\u00C7\x13\u00A8\x14\u00C8\u00D6\u00E50$"+
        "\x10\u0082\x10u\u00C4\u00867\u00D0<\u00A0\u00BB!Ay\u00F9\u00C7y\x02\u00EEVbS\u008D\x12H\u00AAx\u0091+"+
        "\u00CE\"\u0081\u00E6\x12\u00C6A\u0093N\x00\x02\f\x00\x15\x057\u00EF\u00BAg\u00E5\u00E0\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        adobe_ps : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x02\x00\x00\x00\u00B4"+
        "\u00B4\x02\x1D\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x00\u00C9IDATx"+
        "\u00DAb\u0094L\u00FD\u00CF@4`b \x05\u0090\u00A6\u009A\x05\u00CE\u00FA\u00F7\u00EB\u00C3\u009F"+
        "\u00B7\x17\x18\u00D9\x04X\u0085\rp\u00A9f\u00E65n\u0080\u00B0\u00DEm\u00F7\u00FC\u00FB\u00E5\u00E1"+
        "\u00FF\u00EF/?\x1D/dd\u00E6\u00C0\u00AA\u0087\x05\u0099\u00C3\u00A5\x16\u00CF&\u00E9\u00C0\u00A9\x1A"+
        "\u00FFv\u00AB#\u00A7Z\x02\x01\u00D50\u00EB\x14\u00FE~~\x00d|\u00BF\u00B5\u00E0\u00DB\u00AD\u0085@\u0086"+
        "\u0080\u00FD|\u00A0 v\u00D5\x1F\x0E&B\f\x06:I4\u00F2>\x13\u009B\x00\u00F60\x01J\u00BF\u00DF\x1D\u00C8*\u00AC"+
        "\u00CFg\u00D9\x0F\u00E4\u00B2+\x04\u00BC\u00DF\x15\u00F8\u00EB\u00F9\x01\u00EC.\x01*\x02\u00BA\x1B\u00CE\x05:"+
        "\x00\u00E8\x18\u00A0\x06A\u00B7\u00F5\x10q|\u00E1\r\fS\u00A0\u0093\u0080\u00E8\u00F7\u00DB\x0B8}\tW\n4\x15d\x1E"+
        "\u00BB\x00\u008Fq=D\u0090q\u00D0\u00A4\x13\u0080\x00\x03\x00J*E\u00DC\u00E3\u00CD\x1A\x0F\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        adobe_br : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x03"+
        "\x00\x00\x00\f\bex\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x000PLTE.&\x00\u00B9\u0099\x00lY\x00>3\x00\x1F"+
        "\x1A\x00\u00E8\u00BF\x00M@\x00\u008Bs\x00\u00AA\u008C\x00\u009A\u0080\x00]M\x00\u00D8\u00B3\x00\u00C9\u00A6\x00|f\x00\x00\x00\x00\u00F7"+
        "\u00CC\x00\t\u00A94\u00A5\x00\x00\x00KIDATx\u00DA\u0094\u00CE;\x0E\u00C00\b\x03P\x03M\u00D2\x1F"+
        "\u00F5\u00FDo\u009B4C\x04[\u008B\u0084\u00D0\u0093=\x00\u00E6\u00C1\x07_\"\u00C9\u008F\u00EB&\u00D1\u00E4^\u00B3"+
        "\u009B\u00D2\u00DB[\u009A6\u008C\u00E3(+/z\u00D2=\u00F4\u00C7&\x1F\u00886\u00ABw\u00F0\u009F\u00FF\u00BB"+
        "\x00\x03\x00\u0094\r\x0B\u00ED|\u0091\u00A5\u00BE\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        script_gray : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x06\x00\x00\x00;\u00D6\u0095J"+
        "\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u009AIDATx\u00DA\u00B4R=k\u00C2P\x14"+
        "\u00BD6E\"\u00A8d\u00D0A\x17\x1F\u00B8TAq\x112(\u00CD\x14\x17\u0087v\u0091\u008E\u0099\u00A4\u00DD\u00DA\u00BF\u00E0\x1Fh\u00FFA\u00AA"+
        "\u0083\u008BC\u00E9\u0098Al\x17\x07\x15\x04\x17G\x03\n\u008A(\u00A4\u00A0\u0088\x1F\u00F0z\u009FUy\u00D5\u0094"+
        "\x0E\u00A5\x07.\u008Fw^\x0E\u00F7\u009C{\x03\u00F0\x078l8\r\u008B\u00D8\u00F0\x16\u00D6\u00F3\u00EE\u00DC\u00E2\u009C\x7Fu\u00B9"+
        "\\\u00B5t:\u00AD\x04\u0083A\u00A8\u00D7\u00EBP.\u0097\x0Fo\u00C3\u00E1\x104M\u00BB\u009CN\u00A7\u00D7{\u00EE"+
        "\u008C\x17G\u00A3Q\u0085\x10\x02N\u00A7\x13<\x1E\u00CFV\u00B0\u0087\u00DB\u00ED\x06|\u0093\u00F8\u00EF\u00BFu^\u00ADV_Y\x1C\x0E\x10"+
        "\x04\x01t]\u0087f\u00B3\t\u00FD~\u00FF\t\u00E9\u008F\u009D\u00ED\x03\x04\u00FE2\u009B\u00CDH$\x12I\u00F8|>"+
        "\u00C0\x13B\u00A1\x10\u00C4b1h\u00B7\u00DB\u00A3\u00E5ry\u00C7\u00E7=\x11"+
        "\u00AF\u00D7\u00EB\u00F7\u00F1x|\u009BJ\u00A5D\u00BF\u00DF\x0F\u0092$A \x10\u0080d2y\u0081\x0E\u00C8b\u00B1x\u00FDm\u00DA\t\u00CCV+\x14\n\x12s\u0080C"+
        "\x04Q\x14\u0099u\u00C8\u00E5r\u00CC\u00FE\u0083m\u00E7\x1DF\u0096e\x19\u009B\u00CD\u00E6&\u009B"+
        "\u00CD\u008A\u00AC;\u00ABp8\f\u00F3\u00F9\\n\u00B5Z\u00C5c\u00FBv\u00B8\u00AFT*t2\u0099P\x14Q\u008CD\u00AB"+
        "\u00D5*E^\u00F9Ip\u0085+\u00D2\u00E3\u00F1xOQ\x14\u009A\u00CF\u00E7):\u00A0\u0098\u0095\u00E2\u00DAh&\u0093\u00A1\u00FC\x0F\u00C4\u00AF"+
        "\u008A\u00A0\u00E0\x05\u00EB@4\x1A\r\u00E8v\u00BB`\x18\x06\u0094J%\u00AB\u00D3\u00E9\u00B0\u00BC\u00A6\u009DXb\u00D9\u00F60M\x13\x06\u0083"+
        "\x01\u00A8\u00AA\u00FA\u0086]\u008B\u00C7;>\u0081\u00D7\u00EB}"+
        "\u0094e\u0099\u00B2\u00C2\u00AB\u00CE&\x0F\u00FF\u0085O\x01\x06\x00\u00B2\u00AB\u009C\x1D/E\u00AC\u0096\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        script_ice : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x06\x00\x00\x00;\u00D6\u0095J\x00\x00"+
        "\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u00A5IDATx\u00DAb`\u00A0\x000b\x11S\x00\u00E2\x00 \x16"+
        "\u00C0\"\u00F7\x00\u0088\x17\u00C08,\u00E8\x1A\u00A5M\u00CD\u00CF\u00DBV\u00D5\x0B\u00FC\u00FA\u00F2\u0099\u00E1\u00D7\u0092"+
        "\u00F5\fy!\u0085p\u00C9]\u00C7\u00B62\u00F4\u00CCob\u0080\x19\u0080\u00AE9\x00\u00A4\u0091WR\n\u00CCy,\u00C4"+
        "\u0087\"\u00A9\u00AFn\x04s\x19V\u009B\x1F\u00BC\u00BD}\u0093\x01\u00A4\u00F97\u00D0\u00E6\u00E7\x1F^2L90\u009Fa\u00F7\u00E6e\x1F"+
        "\u00BE\x7F\u00FA4\x11(\u00FF\x01\u00D9\u00D9\u00E8~\x16\u0090\u00B3\u00B49\x1F<y\u0086\x02\x073\x13\x03'33\x03"+
        "\u0088\u00BE}`\x1F\u00C3\u00EC\u00EC\u00F4Dd\u008D \u00C0\u008C\u00A6\u00F9"+
        "\u00C7\u00C7'\u008F\x1E\u00F2\u00B00G\x18Y\u00DB0\b\u00B0\u00B32\b\u00B0\u00B12\u00A8kh0\u00BC\x7F\u00F64\u00E0"+
        "\u00DE\u00D5\u00AB\x0F\u0081j.\u00E0\u00D2\f\x027\u00EE\u009D>\u00F5P^A!\u00C0\u00C0\u00C0\x00\u00AC\x19\u0084\u00DD}\u00FD\x18"+
        "\u00DE<y\x12p\u00E3\u00F2\u00E5\u0083\u00D0P\u00C7\x0B\x12\u00AA'M\u00F9\x7F\u00FE\u00DD\u0087\u00FF7>~\u00FE"+
        "\u00FF\u00E0\u00CB\u00B7\u00FF/\u00BF\u00FF\u00F8\u00AF\u00A6\u00AE~\u009E"+
        "\u00A8D $\"\u00B2\u00FF\u00C6\u00F3\x17\u00FF\u00DF\u00FF\u00FC\u00F5\u00FF\u00FB\u009F\u00BF\u00FF\u00FF\u00FC\u00FB\u00F7\u00BF\u00AE\u00AE\u00EE?\u00AE\u00D0\x06\u0081"+
        "\x021qE\x7F9E=\x03VVv\u0081\u00AB\u00C7\u008F1\u00A8\u00F8\u00F91\u00FC\u00F8\u00F1\u009D\u00E1\u00DE"+
        "\u00C3\u0087\f+V\u00AC8\u0080+\u00B4\x13\u00922\u00A6\u00CCWT6\x04s\u00EE\u00DF=\u00CF\u00A0\u00AD\u00FA"+
        "\u0093\u00C1\u00D8\u00D8\u0098a\u00D3\u00A6M\f\u00ABV\u00AD:\u00F0\u00E4\u00C9\u0093BX\u00A0a\u00A40I)U8"+
        "\u00E7\u00FC\u0099m\f\u00E7N<chhhX\u00F0\u00F9\u00F3\u00E7\u0085@\u00A1\x03\u00F8\u00BC\u00A9 \"*w\u00DE"+
        "\u00C9-\u00F9\u00BF\u00B2\u00AA\u00E9{ \u00BF\x01G\x1A\u00A7\x1C\x00\x04\x18\x00b9\u009D"+
        "\u00DF\u00D5\u00AD\u00D1\u00DE\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        script_rouge : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00\x0F\b\x06\x00\x00\x00;"+
        "\u00D6\u0095J\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<"+
        "\x00\x00\x01jIDATx\u00DA\u00A4\u0092\u00BDK\x02q\x18\u00C7\x1F\u00E3@\u008E"+
        "\u00838\u00E5\u00A0\u00B2\u00E5H\bj:\\\x1A\u00AE\u00A5\u00B0\u00C1HP\"\x1C\u00BD\u00A5\u00BD?"+
        "\u00A1-\u009Blw\u00E8\u00C5A\u00A4\u00A1!\u009C\x1A\u00AE\x06]\u0084.p"+
        "\x10\x1A\u00C4\u00C1V\u00CFB\b<\u00F0\u00DBst\u00C1\x15\u009EI=\u00F0\u00E1\u00F9"+
        "\u00BD<o<\u00CFC\u00F4\x0F\tMx\u00D3\u0098L\u0080\u00FD\x05\u00D3\r\nfl\x11\u00E1\u0088"+
        "\u00D9fL\x06\x1E6s@d\u00FB\u008D\u00E7\u00FC\u0097\x15\u00A2\u00FC."+
        "\u00EB5\u00E6\u0090y\u00F0\u00FD\u00C9\u00CC\u00F2\u00A7R\u00BF\u00DE\x04\u00BF\u00B3C4Xe="+
        "\u00CF<{\u00E4\u0099+\u00A2{/VwZ\u00D9\u0099\x13.\u00EF\u0085y\x0B\u0085\u00E0\u0084"+
        "\u00C3\u0080\u00A2 )I\u00B6\u0097|\u00BA,\x12\u009D?J\x12\u00A0\u00AA@\"\x01$\u0093\u00B0\u00B3Y\u00E8\u00B1"+
        "\u0098\u00F53\u00C0\u00A4n\u00CB\u008A \u0098w\u00BA\u00AEi\u00F18Q$B\x14\u008D\u00D2@\x14i\u00AFTz"+
        "\u00AA\u00B7\u00DB\u00DCS\x1AL+@VD\u00D1\u00B2\x0B\x05\u00A0\\\x06j5\u00A0\u00D1\u0080\u00C9gw\"\u00B3\u00EC\u0080l\u00A4R@\u00AB\x05"+
        "\u00F4z\u00C0p\u0088\u00B1\u00E3\u00B8\u00CE\u00C7A\x0E\u00EE\u0082\x14\u00D7\u0089\u00ACMn\x1A\u008F"+
        "\x0E\u00E3\u00D1\b\x0E\u00F3\u00DA\u00EF\u00E3\u00BAR\t\u00CE\u00BCDt\u00C3aq\u00EA\u00E1\x06\u00E8u:\u00B8\u00ADV\u00B1\u009FN\u00BB\u008EE"+
        "\u00BF\u00FD\u00B79\u00F3|5\u00D1;\u00BF\u00BB\x03\u00E5&\u00E5r\u00B9n\u00BD"+
        "\u00D9\u00BC\u00E4\u00EB\u00D9o\u008D26x\x05w8\u00E3\x02\u00919ks\u00FE$\x1F"+
        "\x02\f\x00\u00E1X\u008F^\u00DD\"\u00AB\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082"),
        script_tropic : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x0F\x00\x00\x00"+
        "\x0F\b\x06\x00\x00\x00;\u00D6\u0095J\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x01\u0095IDATx\u00DA"+
        "\u00B4R=KBa\x14>\u00EA\r\u00AF\u0098q5Q!\u0084+HT4H\u00E8PIY\r\u00EAV\x7F\u00A0\u00FA\r\u00AD\u00814JK\x05\u00ADBCD55%M"+
        "\x06.\u0081C\u00B6H`\u00E1\u008D\u00CC%\u00E1*It\u00FDzz/\x1A\u0088\u00F91D\x07\x1E\u00DE\u00F7\u009C\u00F7<\u00E7\u00BC"+
        "\u00E7\u0083\u00E8\x0F\u00A2\u00E9a\x0B\u00B4\u00D1KN\x18\u00A4~\u00C1\x0E\u0096\u00C4=l\u00F9\u0093p\u00BA\u00FC\u00C8"+
        "\u00E5\b@\x0B\u00B2L\b\u0087)\u00D7\u00E9\u00CCu*\x13\x13\u00F3\x1E\u00E3\u00AA\u008D\u009E\x1C\u00D7\u00A4/\u008D\u0091\u00C4r"+
        "\u0088b\u00EBM\x10\u0088\u00ECv\x12\u00FB\u0092\u00CB\u00BCD\u00CF\u008B7\u00F4i~\u00A7\u00F2\u009DD;g:\u0092\u00F7"+
        "\u009B$\u00C5q\u00C5\u009E\x1F\x18n\x07\u00F5`\u00DBxl\u0087!m\x01\u00F7h\u0080"+
        "\u00F6\u0099\u0083>\u00C7C\u00EF\u00D5\u00DF\u00AB\u00C9\u0087\u00B7\u00D0"+
        "\u00A2Ip\u00C9\x11\b/\x02\\\u00AF.x\x0B^\x04R\x01\u00F0\x16\u00FEW\u0080^\u00DD\x16x\x1F\u009F\u00F0\u009D\u00FA<"+
        "\x0E\u00B3\u0083\u00C6\u00B5\u00E3d\u00D5Y\u00C9\u00F8a\u00A4\u00E8\\\u00F4\u00B6\\,"+
        "\u00AF\u00FC8\u00EAz\u0090\u00BF\u00EA\u0085\u00FAE-U\x0B\u00857\u00C2\u008E)\u00D3\x14\u00B997\u00A9\u00E7\u00CC\u00E4\u008C"+
        "\x18\u00BF\u008C\u00AB\u00B5?\x0E+ \u00B0\u00B9\u00BB\u0089\u00B4\u0092F\u00BE\u009EG"+
        "\u00A5QA\u00ADQ\x03\u00B3\u00EF\u00F5#x\u00D4Y\x13\u00CD\u00B2\u00FABp"+
        "\u008A+\u00A86\u00ABP\x14\x05\u00C5b\x11\u0091H\x04\x03\x16h\u009A-\u00C1!~`2\u00AD!"+
        "\u009B\u00CD\"\x16\u008B!\x18\f\u00CA\u00DDY\u00BB\x1A\u00B6\u00CCH\x1B\u00ED\u00FB\x1BY\u00AD\u00E7d\u00B3\u0099\u00A4L&s"+
        "\u00D4^\u00CD\u00D2\u00C09\x13-\u00C8\u00EA\u0097\u0089F\x13L_\u00A7\u00FF\u0092o\x01\x06\x00"+
        "\u009B\f\u009B\u00C5\nI\u00AB\u00A0\x00\x00\x00\x00IEND\u00AEB`\u0082"),
    };
    var BUTTON_RESOURCES = {
        btn_min: '({total:7, '+
            'shape_6:{fillColor:[0.5, 0.5, 0.5], name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[30, 30], [1, 30], [1, 0], [30, 0]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_5:{fillColor:[0.9, 0.9, 0.9], name:"", tag:"", strokeColor:null, pathPoints:[[28, 29], [3, 29], [3, 4], [28, 4]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:null, name:"", tag:"", strokeColor:[0.2, 0.2, 0.2], pathPoints:[[4, 29], [4, 4], [28, 4]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_3:{fillColor:[0.2, 0.2, 0.2], name:"", tag:"", strokeColor:null, pathPoints:[[27, 28], [21, 28], [21, 22], [27, 22]], ellipsePath:false, closed:true}, '+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.4, 0.4, 0.4], pathPoints:[[7, 8], [20, 21]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_1:{fillColor:[0.8, 0.8, 0.8], name:"", tag:"", strokeColor:[0.4, 0.4, 0.4], pathPoints:[[13, 21], [20, 14], [20, 21]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[1, 1], [29, 1]], ellipsePath:false, closed:false, strokeWidth:1}})',
        btn_expand: '({total:7, '+
            'shape_6:{fillColor:[0.5, 0.5, 0.5], name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[30, 30], [1, 30], [1, 0], [30, 0]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_5:{fillColor:[0.7, 0.7, 0.7], name:"", tag:"", strokeColor:null, pathPoints:[[28, 28], [3, 28], [3, 3], [28, 3]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:[0.8, 0.8, 0.8], name:"", tag:"", strokeColor:null, pathPoints:[[27, 27], [4, 27], [4, 4], [27, 4]], ellipsePath:false, closed:true}, '+
            'shape_3:{fillColor:[0.9, 0.9, 0.9], name:"", tag:"", strokeColor:null, pathPoints:[[26, 26], [5, 26], [5, 5], [26, 5]], ellipsePath:false, closed:true}, '+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[1, 1], [29, 1]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_1:{fillColor:[0.3, 0.3, 0.3], name:"", tag:"", strokeColor:null, pathPoints:[[15, 24], [7, 18], [24, 18]], ellipsePath:false, closed:true}, '+
            'shape_0:{fillColor:[0.3, 0.3, 0.3], name:"", tag:"", strokeColor:null, pathPoints:[[15, 8], [7, 14], [24, 14]], ellipsePath:false, closed:true}})',
        btn_collapse: '({total:7, '+
            'shape_6:{fillColor:[0.5, 0.5, 0.5], name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[30, 30], [1, 30], [1, 0], [30, 0]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_5:{fillColor:[0.7, 0.7, 0.7], name:"", tag:"", strokeColor:null, pathPoints:[[28, 28], [3, 28], [3, 3], [28, 3]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:[0.8, 0.8, 0.8], name:"", tag:"", strokeColor:null, pathPoints:[[27, 27], [4, 27], [4, 4], [27, 4]], ellipsePath:false, closed:true}, '+
            'shape_3:{fillColor:[0.9, 0.9, 0.9], name:"", tag:"", strokeColor:null, pathPoints:[[26, 26], [5, 26], [5, 5], [26, 5]], ellipsePath:false, closed:true}, '+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[1, 1], [29, 1]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_1:{fillColor:[0.3, 0.3, 0.3], name:"", tag:"", strokeColor:null, pathPoints:[[15, 18], [7, 24], [24, 24]], ellipsePath:false, closed:true}, '+
            'shape_0:{fillColor:[0.3, 0.3, 0.3], name:"", tag:"", strokeColor:null, pathPoints:[[15, 14], [7, 8], [24, 8]], ellipsePath:false, closed:true}})',
        btn_estk: '({total:8, '+
            'shape_7:{fillColor:[0.5, 0.5, 0.5], name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[30, 30], [1, 30], [1, 0], [30, 0]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_6:{fillColor:[0.7, 0.7, 0.7], name:"", tag:"", strokeColor:null, pathPoints:[[28, 28], [3, 28], [3, 3], [28, 3]], ellipsePath:false, closed:true}, '+
            'shape_5:{fillColor:[0.8, 0.8, 0.8], name:"", tag:"", strokeColor:null, pathPoints:[[27, 27], [4, 27], [4, 4], [27, 4]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:[0.9, 0.9, 0.9], name:"", tag:"", strokeColor:null, pathPoints:[[26, 26], [5, 26], [5, 5], [26, 5]], ellipsePath:false, closed:true}, '+
            'shape_3:{fillColor:null, name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[1, 1], [29, 1]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.2, 0.2, 0.2], pathPoints:[[10, 12], [5, 16], [10, 20]], ellipsePath:false, closed:false, strokeWidth:2}, '+
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.2, 0.2, 0.2], pathPoints:[[20, 12], [25, 16], [20, 20]], ellipsePath:false, closed:false, strokeWidth:2}, '+
            'shape_0:{fillColor:null, name:"", tag:"", strokeColor:[0.2, 0.2, 0.2], pathPoints:[[12, 24], [18, 8]], ellipsePath:false, closed:false, strokeWidth:2}})',
        btn_find: '({total:9, '+
            'shape_8:{fillColor:[0.5, 0.5, 0.5], name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[30, 30], [1, 30], [1, 0], [30, 0]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_7:{fillColor:[0.7, 0.7, 0.7], name:"", tag:"", strokeColor:null, pathPoints:[[28, 28], [3, 28], [3, 3], [28, 3]], ellipsePath:false, closed:true}, '+
            'shape_6:{fillColor:[0.8, 0.8, 0.8], name:"", tag:"", strokeColor:null, pathPoints:[[27, 27], [4, 27], [4, 4], [27, 4]], ellipsePath:false, closed:true}, '+
            'shape_5:{fillColor:[0.9, 0.9, 0.9], name:"", tag:"", strokeColor:null, pathPoints:[[26, 26], [5, 26], [5, 5], [26, 5]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:null, name:"", tag:"", strokeColor:[0, 0, 0], pathPoints:[[1, 1], [29, 1]], ellipsePath:false, closed:false, strokeWidth:1}, '+
            'shape_3:{fillColor:[0.57, 0.92, 1], name:"", tag:"", strokeColor:[0.2, 0.2, 0.2], pathPoints:[12, 5, 13, 13], ellipsePath:true, closed:true, strokeWidth:2}, '+
            'shape_2:{fillColor:null, name:"", tag:"", strokeColor:[0.5, 0.5, 0.5], pathPoints:[[14, 17], [6, 25]], ellipsePath:false, closed:false, strokeWidth:2}, '+
            'shape_1:{fillColor:null, name:"", tag:"", strokeColor:[0.3, 0.3, 0.3], pathPoints:[[13, 18], [6, 25]], ellipsePath:false, closed:false, strokeWidth:5}, '+
            'shape_0:{fillColor:[0.88, 0.98, 1], name:"", tag:"", strokeColor:[0.88, 0.98, 1], pathPoints:[15, 8, 4, 4], ellipsePath:true, closed:true, strokeWidth:2}})',
        btn_plus : '({total:8, '+
            'shape_7:{fillColor:[0.4, 0.4, 0.4], name:"", tag:"", strokeColor:null, pathPoints:[[31, 31], [0, 31], [0, 0], [31, 0]], ellipsePath:false, closed:true}, '+
            'shape_6:{fillColor:[0.6, 0.6, 0.6], name:"", tag:"", strokeColor:null, pathPoints:[[30, 30], [1, 30], [1, 1], [30, 1]], ellipsePath:false, closed:true}, '+
            'shape_5:{fillColor:[0.8, 0.8, 0.8], name:"", tag:"", strokeColor:null, pathPoints:[[29, 29], [2, 29], [2, 2], [29, 2]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:[0.95, 0.95, 0.95], name:"", tag:"", strokeColor:null, pathPoints:[[28, 28], [3, 28], [3, 3], [28, 3]], ellipsePath:false, closed:true}, '+
            'shape_3:{fillColor:[1, 1, 1], name:"", tag:"", strokeColor:null, pathPoints:[[27, 27], [4, 27], [4, 4], [27, 4]], ellipsePath:false, closed:true}, '+
            'shape_2:{fillColor:[0.4, 0.4, 0.4], name:"", tag:"", strokeColor:[0.2, 0.2, 0.2], pathPoints:[[26, 14], [17, 14], [17, 5], [14, 5], [14, 14], [5, 14], [5, 17], [14, 17], [14, 26], [17, 26], [17, 17], [26, 17]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_1:{fillColor:[0.2, 0.2, 0.2], name:"", tag:"", strokeColor:null, pathPoints:[[26, 14], [17, 14], [17, 5], [14, 5], [14, 14], [5, 14], [5, 17], [14, 17], [14, 26], [17, 26], [17, 17], [26, 17]], ellipsePath:false, closed:true}, '+
            'shape_0:{fillColor:[0, 1, 0], name:"", tag:"", strokeColor:null, pathPoints:[[15, 25], [15, 16], [6, 16], [6, 15], [15, 15], [15, 6], [16, 6], [16, 15], [25, 15], [25, 16], [16, 16], [16, 25]], ellipsePath:false, closed:true}})',
        btn_save :'({total:8, '+
            'shape_7:{fillColor:[0.4, 0.4, 0.4], name:"", tag:"", strokeColor:null, pathPoints:[[31, 31], [0, 31], [0, 0], [31, 0]], ellipsePath:false, closed:true}, '+
            'shape_6:{fillColor:[0.6, 0.6, 0.6], name:"", tag:"", strokeColor:null, pathPoints:[[30, 30], [1, 30], [1, 1], [30, 1]], ellipsePath:false, closed:true}, '+
            'shape_5:{fillColor:[0.8, 0.8, 0.8], name:"", tag:"", strokeColor:null, pathPoints:[[29, 29], [2, 29], [2, 2], [29, 2]], ellipsePath:false, closed:true}, '+
            'shape_4:{fillColor:[0.95, 0.95, 0.95], name:"", tag:"", strokeColor:null, pathPoints:[[28, 28], [3, 28], [3, 3], [28, 3]], ellipsePath:false, closed:true}, '+
            'shape_3:{fillColor:[1, 1, 1], name:"", tag:"", strokeColor:null, pathPoints:[[27, 27], [4, 27], [4, 4], [27, 4]], ellipsePath:false, closed:true}, '+
            'shape_2:{fillColor:[0.7, 0.9, 1], name:"", tag:"", strokeColor:[0.4, 0.4, 0.4], pathPoints:[[26, 25], [6, 25], [6, 5], [26, 5]], ellipsePath:false, closed:true, strokeWidth:1}, '+
            'shape_1:{fillColor:[0.95, 0.95, 0.95], name:"", tag:"", strokeColor:[0.4, 0.4, 0.4], pathPoints:[13, 14, 5, 5], ellipsePath:true, closed:true, strokeWidth:1}, '+
            'shape_0:{fillColor:[0.95, 0.95, 0.95], name:"", tag:"", strokeColor:[0.4, 0.4, 0.4], pathPoints:[[22, 11], [10, 11], [10, 5], [22, 5]], ellipsePath:false, closed:true, strokeWidth:1}})'
    };
    var IMAGE_RESOURCES_2 = {
        img_logo2 : ScriptUI.newImage("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00d\x00\x00\x00-\b\x02\x00\x00\x00\u00D7\u00D7Y\u00A7"+
        "\x00\x00\x00\x19tEXtSoftware\x00Adobe ImageReadyq\u00C9e<\x00\x00\x03\u00F3IDATx\u00DA\u00EC[\u00E9\u0091\u00EA0\fvv\u00A9\u00826"+
        "\u00A0\u00A6P\x07e@\x1D\u0094\x01uPF\u009E\x06\r\x1A\u00AD$\u00CB\u00B2\u009Dpd\u009E~\u00EC\u0090\u00C4\u0087\u00A2\u00DB\u009F"+
        "\u00B2\u00C34M\u00A9\u009En\u00B7\x1B\u00FC=\u009F\u00CFt\x07\x7F\u008F\u00E3\u00C8\u00EF\u00E3\u00A5\x1Es:\u009D\u00D2\x17\u00D2"+
        "\u00D0,,\u0092\b\x17\u00D9\u00F5z\u00DD\u00EDv(\u00CA\u00FD~/\x16\u00C7\u00FB@0f\u00B5\u00C2\x12v\u00C4\u00A5\u00A3\t\r\x07\u00A6|"+
        "\u00A9D\x1C\u00DAD\u00CC\u00C7\u0097\u008E .S4\u00B4\u0095\x0B\u00EBp8T\t\u00C8\u00B4\u00AF\u00B4>\u009A\x145\u00BF'L\u00BC>"+
        "\b~Lo%\u00E0a\u0089e\u0093\u00DE\u00A6MF\x7F\x16}D\u00FAwI\n\u0095\u00BD\x04\x03?\u00E2\u00CD!\u0085\u00D5\u008A\t\u00C29\x0FL"+
        "\u0094\u00F2\x1C\x027\x1F\u009Etx\u00D0\u00DB=\f\u00D8\x066\n\u00CC7\u0098\u00956%\u009A\u008E>\u00E8\u00BB!j~|R.\x1A\u00F4"+
        "\u00F8`\u0083Y\u00E1\u00BB\u00FB\x13\u0093p\u009F\u0088\u00A4\u00CC\u009Dx\u00A4s\u00B6D\u009E\u00F8\"8Q\u00AF\u0086\u0084"+
        "\u00BFqA\u00BAo^\u00EA\u0089zA\u00AEN\u00C1d\u009D\u00B0\u00E2f\u0095\u0093QQR\u00A6\u00B0DB\u00A0\x05\u00F9\u00CA8 \u00C7!M"+
        "\u00E7\x03\u0084\u00B0\u009C\u0089\u00B9\u00A7\u00FAERm\x12$m\u00C7\u00DDSn\u00F9\x1C\u00AC5,b3\u00BD\x06\x1FF[\u0093}\x15m"+
        "\u00843L\u00B3\u00C4%\x05\u0087+\u00A3^aUE\u00B1\u009Cq\u0089\u0080E\u00A6\u00E1\u0084Q!\u00AC\u00A2\u00A7\u008B\x01$\u008B"+
        "\u009C\u008DG\u00DCp3K*\u0081-\u0083\u0095:\u009E\n\u00E8 \r\x13\u00CF\x0F\u00A2\x15\u0084\u00CE\u00E0&p)\u0092T|;\u00A7TnY\u00A1"+
        "\u00A7\u00C2\u008A\u0087*\u00A7\b\u00E2*5\u009F\u008A\u0094R\u00CC\u00B6\u00A6\x1B\u009A\x01W[\u0096\u00BFr\u009A\u00A5v\u008F"+
        "\u00CB\u008B\u00BB\x1E\u00C6\u0085\\(1\x03\u008D\x18 $\u00C2g\u00D1\u00FAf\u00F8\u00D3\u00DE\u008DA\u0080\"\u00B2\u00E9\u00EC"+
        "\u00C9\u008C\u00BE3\x1E\u009E\"'\x04?s\u0091\u00B6M]\x165\u00CD\u00D5 \u00C6\u0098q\u008D\u00E7\x1F1`\u00D0\u0090SU\x11o2\u00E7"+
        "\u0084\x03\u008CY\u00C0\x07\u00EE\u0082<\u0089\u00F1\u0084v \u00F7\u00F4\u00D4,\u00AF\u00FD\u00A74\x06\u00DFKhB\u00F3\u0089"+
        "\u008Bd\u00F9\x0F*\x7F\u0089\u00F8\u00F5\u00E2\u00A3u?c\u00C9\u008F,\u00EB\u0090\u0097P\x7F3(b\u0097\x0E\u0098\u00DA{ -\u00B0"+
        "\u00F9\u008F\u00C2\u00DAE<\u009A3$\u00F7{b\u00A7\x0E?\u0093R\u00CE\u0099E\u0091\u00DDV\u00D3\x7Ff\u00FC\u00EA\u008AY~"+
        "\u0099\u00D7fe<a\u00AFF^\u00A9!@V\u009D\x13\u008B\x05\u00F7\u0097\u00B9a\u00FC\u00F4\u00DB\u0090\x04\u00D7d\\CU\u00CE2"+
        "\u00BB>t\u00BC\u00C8\u00D5r\u0088\x1A\u00BF=3r\u00F0\u00BA\u008D\u0099MC\x02Fy\u00A1\u00C9D\u00CE\u00EEX\u00AF#\x7F&\u00DC"+
        "\u00DE\u008C\"4\x102\u00DF\u00AE\u00B9Z\x1F\x11\u00E7\u00DB\u0090\u00B7?k\u0094\\\u00BD\u00F32?\u00D5(\u00F6Rn(\u008E\u0090"+
        "\u00F1\u00B9`P4\u0092\u008EihMb)\u00FE\x15\u00850:\u00F1H\u009B\u00A43WD\u0092F\u00C8\u00A0!U\u00F1`\x1F\u009C\u00AE\u0081$"+
        "\u008D\u008D\u00E40x\r(\u009BO9\b\u00E3\u00B0\u00D7cY\u00D5m(\x01\fE\x00e\x01\u00E0\t\fD\u0083p\u00E2\u00FD\u00F5\\\x1A\u00A0"+
        "\u00A5\u00EC \u00FA3\b+nYf\u00BF+\u00D2\u00AC7\u00BB\x12\u00B9\u00B8\u00E9\u00E0Yf\x1BM\u00E0\u00F7##\u00D3\u00B8z\u0084"+
        "\u00B5\u00E1\u00F8w1H\u00E9p\x00\x7F\u009D\x15\b\u00BD\u00D2O\u00F9\u00CB\u00F0\u00A8\u0084\u00BB\u00A0\\\x10\u009EoF\u00CD"+
        "\u00A9\u00A6\u0099\u00F9D\u00EE7rs\u00DA\u00E6}\u009A\u009C%\u009A}\u00AA\\\u00FA#\u00C7\x11\u00F0f\u00EE<\u00A0-k\u00D1l\x18"+
        "\x12VQ9BXN\x13?\u0087\u0091;!\u009C\u00B7\u00A0\u009D\u00DE\u009Fn\u00FC\u0089\u00F6\x17\u00BF\u0099\u00EB\fF:\u009E\u00E56\\U"+
        "\u0097\u00C8\u0089\u00FA\u00BE\u0094\x1D\u00AD\u0088D\u00A9/\u00CD\u00E9Z\u00D0=5\u00E6  zl\u00EA\u00F1\u008F\x1C\u0083\u00A8"+
        "<\n\x02\u00AB\x18\x07\u0086\u00D7H\u00B9\x06\u00E0\x1D\x1C\u00DD\u00B94\u00A7\x17?\u00EF\u00E9:9\u0090\x1Ej!fn\u00E1\u00D3J\u00A9"+
        "\\\u00A3V\u00E13+\u0096\x14\u00D0\u00AFv\u0093\u00E3\u00F1x\u00BF\u00DF/\u0097\u00CBv\u00BB\u0085\x1F\u00F1O\u00D4V\u00F6\u00B9"+
        "\u00AD\u00A6a\u00AE\u0085V/)\u00A0\u00DF\x19\u00D7Bc\x04J\u00FFi\u00A1/\u0090\u00BE\t)}e\u00C3\x0EO0\u00DF\u00FB\u00BF;\u00FF\x04"+
        "\x18\x00\u008E\x12\u00A4D\u00A8xh\u00C0\x00\x00\x00\x00IEND\u00AEB`\u0082")
    };

//=================================================================================== UI helpers ================================================================================//
    DropDownList.prototype.selectWell = function(){
        //CC will let you select null
        this.addEventListener('change', function(){
            if(this.selection == null){
                this.selection = this.items[0];
            }
        });
    }

    function quickView(msg, title){
        if(title == undefined){
            title = '';
        }
        var w = new Window('dialog', title);
        var e = w.add('edittext', undefined, msg, {multiline:true, readonly:true});
        e.size = [700,500];
        var okbtn = w.add('button', undefined, 'Ok');
        w.show();
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
            for(var all in obj){
                if(all.match(/\d{1,2}$/g) && all.match(/\d{1,2}$/g)==counter){
                    var thisShp=obj[all];
                    if(all.match('group')){
                        var ctr=obj[all].total;
                        while(ctr>=0){
                            for(var paths in obj[all]){
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
    //===============================================XML================================================================//
    function wrapCDATA(str, propNm){
        str = '<data>'+str+'</data>';
        str = str.replace(/(\<data\>)/g, '<'+propNm+'><![CDATA[');
        str = str.replace(/(\<\/data\>)/g,']]\>'+'</'+propNm+'>');
        return XML(str);
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
    function getXmlConfig(xmlFile){
        var myFile=xmlFile;
        myFile.open('r');
        myFile.seek(0,0);
        var fileStr=myFile.read();
        myFile.close();
        var xmlObj=XML(fileStr);
        var objArr=[];
        var objArr2=[];
        for(var x=0, ln=xmlObj.folderObjects.children().length(); x<ln; x++){
            var item={};
            var thisDataItem=xmlObj.folderObjects.children()[x];
            item.name=thisDataItem.descendants("name").toString();
            item.folderPath=thisDataItem.descendants("folderPath").toString();
            item.notes=thisDataItem.descendants("notes");
            item.square=thisDataItem.descendants("square").toString();
            objArr.push(item);
        }
        if(xmlObj.descendants("favoriteObjects") != ""){
            for(var x=0, ln=xmlObj.favoriteObjects.children().length(); x<ln; x++){
                var item={};
                var thisDataItem=xmlObj.favoriteObjects.children()[x];
                item.filePath=thisDataItem.descendants("filePath").toString();
                item.notes=thisDataItem.descendants("notes");
                item.image=thisDataItem.descendants("image").toString();
                objArr2.push(item);
            }
        }
        return {folderObjects: objArr, favoriteObjects: objArr2};
    }
    function getXmlScriptItems(scriptItemsObj){
        XML.prettyIndent=4;
        var xmlBase=new XML('<configItems></configItems>');
        var xmlBody1=new XML('<folderObjects></folderObjects>');
        for(var i=0; i<scriptItemsObj.folderObjects.length; i++){
            var thisFolderObj = scriptItemsObj.folderObjects[i];
            xmlBody1.appendChild(new XML("<folderObject></folderObject>")); xmlBody1.folderObject[i].@order=i+1;
            xmlBody1.folderObject[i].appendChild(new XML("<name>"+stringXmlSafe(thisFolderObj.name)+"</name>"));
            xmlBody1.folderObject[i].appendChild(new XML("<folderPath>"+stringXmlSafe(thisFolderObj.folderPath)+"</folderPath>"));
            xmlBody1.folderObject[i].appendChild(new XML("<square>"+stringXmlSafe(thisFolderObj.square)+"</square>"));
            xmlBody1.folderObject[i].notes=wrapCDATA(thisFolderObj.notes, 'notes');
        }
        var xmlBody2=new XML('<favoriteObjects></favoriteObjects>');
        for(var i=0; i<scriptItemsObj.favoriteObjects.length; i++){
            var thisFavoriteObj = scriptItemsObj.favoriteObjects[i];
            xmlBody2.appendChild(new XML("<favoriteObject></favoriteObject>")); xmlBody2.favoriteObject[i].@order=i+1;
            xmlBody2.favoriteObject[i].appendChild(new XML("<filePath>"+stringXmlSafe(thisFavoriteObj.filePath)+"</filePath>"));
            xmlBody2.favoriteObject[i].appendChild(new XML("<image>"+stringXmlSafe(thisFavoriteObj.image)+"</image>"));
            xmlBody2.favoriteObject[i].notes=wrapCDATA(thisFavoriteObj.notes, 'notes');
        }
        xmlBase.appendChild(xmlBody1);
        xmlBase.appendChild(xmlBody2);
        return xmlBase;
    }
    function getPersonalSettingsFromXML(xmlFile){
        if(xmlFile.exists){
            var resObj = {
                paletteView: 123456,
                openConfirm: true,
                openConfirmFavorite: true,
                openInESTKConfirm: true,
                syncLocations: true,
                tinyWindowLocation: [860, 350],
                bigWindowLocation: [860, 350]
            };
            var myFile=xmlFile;
            myFile.open('r');
            myFile.seek(0,0);
            var fileStr=myFile.read();
            myFile.close();
            var xmlObj=XML(fileStr);
            for(var all in resObj){
                var content = xmlObj[all];
                if(xmlObj.hasOwnProperty(all)){
                    var refinedContent;
                    if(all == "tinyWindowLocation" || all == "bigWindowLocation"){
                        refinedContent = content.split(",");
                        for(var z=0; z<refinedContent.length; z++){
                            refinedContent[z] *= 1;
                        }
                    } else {
                        if(content == 'true'){
                            refinedContent = true;
                        } else if(content == 'false'){
                            refinedContent = false;
                        } else {
                            refinedContent = content;
                        }
                    }
                    resObj[all] = refinedContent;
                }
            }
            return resObj;
        } else {
            return null;
        }
    }
    function saveXML(dest, scriptItemsObj){
        var saveFl = (dest instanceof File) ? dest : File(dest);
        try{
            saveFl.open('w');
            saveFl.write('<?xml version="1.0"?>\r'+getXmlScriptItems(scriptItemsObj));
            saveFl.close();
            alert("Successfully Saved in: "+decodeURI(saveFl),'SUCCESS!');
        } catch(e) {
            alert("Sorry, "+decodeURI(saveFl)+"'s save operation was NOT successful!",'Failure... Horrible abysmal failure. :\'(');
        }
    }
    function savePersonalXML(dest, obj){
        XML.prettyIndent=4;
        var xmlBase=new XML('<personalSettings></personalSettings>');
        for(var all in obj){
            xmlBase[all] = obj[all];
        }

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

//===================================================================================================================================== Init / OBJECTS ==================================//
    var AIversion = app.version.split(/\./)[0];
    var putImages = (AIversion > 15 || (AIversion == 15 && $.os.match('Macintosh'))) ? true : false ; // not working right in treeview Windows7 CS5
    var PaletteViews = {
        VIEW_FOLDERS: 123456,
        VIEW_FAVORITES: 123457
    };
    var SETTINGS = {
        paletteView: PaletteViews.VIEW_FOLDERS,
        windowGraphics: true,
        admin: admin,
        openConfirm: true,
        openConfirmFavorite: true,
        openInESTKConfirm: true,
        putImages: putImages,
        configFile: configFile,
        personalConfigFile: personalConfigFile,
        AIversion: AIversion,
        syncLocations: true,
        tinyWindowLocation: [860, 350],
        bigWindowLocation: [860, 350]
    };

    //get personal settings
    var personalSettings = getPersonalSettingsFromXML(SETTINGS.personalConfigFile);
    if(personalSettings != null){
        for(var all in personalSettings){
            if(SETTINGS.hasOwnProperty(all)){
                SETTINGS[all] = personalSettings[all];
            }
        }
    }

    var SCRIPTFOLDERS, FAVORITES;
    //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< "SCRIPTFOLDERS" and "FAVORITES" objects
    // start off with these 2 required folders.
    if($.os.match('Windows')){
        //PC
        SCRIPTFOLDERS = [
            {name: "Application Scripts", folderPath: (decodeURI(app.path)+"/Presets/"+app.locale+"/Scripts"), square: "square_none", notes: ""},
            {name: "Adobe Scripts", folderPath: (Folder.myDocuments).fsName+"\\Adobe Scripts", square: "square_none", notes: ""},
        ];
    } else {
        // MAC
        SCRIPTFOLDERS = [
            {name: "Application Scripts", folderPath: (decodeURI(app.path)+"/Presets.localized/"+app.locale+"/Scripts"), square: "square_none", notes: ""},
            {name: "Adobe Scripts", folderPath: (Folder.myDocuments).fsName+"/Adobe Scripts", square: "square_none", notes: ""},
        ];
    }
    FAVORITES = [];

    var configFile = SETTINGS.configFile;
    
    if(configFile.exists){
        var xmlData = getXmlConfig(configFile); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  read the Config File
        for(var i=0; i<SCRIPTFOLDERS.length; i++){
            // replace the default folders with config ones, if ones of same name are found.
            var item = SCRIPTFOLDERS[i];
            for(var j=xmlData.folderObjects.length-1; j>-1; j--){
                var dataItem = xmlData.folderObjects[j];
                if(item.name == dataItem.name){
                    for(var v in item){
                        item[v] = dataItem[v];
                    }
                    xmlData.folderObjects.splice(j, 1);
                }
            }
        }
        // join remaining config folders with the default ones.
        SCRIPTFOLDERS = SCRIPTFOLDERS.concat(xmlData.folderObjects);
        if(xmlData.favoriteObjects != undefined){
            FAVORITES = xmlData.favoriteObjects;
        } else {
            FAVORITES = [];
        }
    }

    refreshFiles();
    
    SCRIPTFOLDERS.getByName = function(name){
        for(var i=this.length-1; i>-1; i--){
            var item = this[i];
            if(item.name == name){
                return item;
            } else if(i==0){
                return null;
            }
        }
    }

//===================================== Functions ================================================================================================//
    function refreshFiles(){
        for(var i=0; i<SCRIPTFOLDERS.length; i++){
            var item = SCRIPTFOLDERS[i];
            var fld = Folder(item.folderPath);
            
            if(fld.exists){
                item.fileFolder = fld;
                item.folderFiles = fld.getFiles(function(f){return f instanceof Folder || f instanceof File && f.name.match(/\..{3}$/) && f.name.match(/\..{3}$/)[0] == ".jsx"});
            } else {
                item.fileFolder = null;
                item.folderFiles = null;
            }
        }
    }
    function debugWindow(info){
        var wy = new Window('dialog', "debug");
        var disp = wy.add('edittext', undefined, '', {multiline:true});
        disp.size = [300, 200];
        disp.text = info;
        var btnOk = wy.add('button', undefined, 'OK');
        wy.show();
    }
    var UIElements=[Window,Group,EditText,Panel,ListItem];
    for(var i=0; i<UIElements.length; i++){
        UIElements[i].prototype.setBg=function(rgb){
            this.graphics.backgroundColor=this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR,[rgb[0],rgb[1],rgb[2]]);
        }
    }
    function bridgeTalkEncode( txt ) { 
        txt = encodeURIComponent( txt ); 
        txt = txt.replace( /\r/, "%0d" ); 
        txt = txt.replace( /\n/, "%0a" ); 
        txt = txt.replace( /\\/, "%5c" ); 
        txt = txt.replace(/'/g, "%27"); 
        return txt.replace(/"/g, "%22"); 
    } 
    function runScriptFromFile(file){
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
        var pathToScript = "var ScriptPanel_MyLocation = '"+sf.fsName+"';";
        var script = "var scp ='" + bridgeTalkEncode(pathToScript+"\r"+scriptString) + "'";

        script += ";\nvar scpDecoded = decodeURI( scp );\n"; 
        script += "eval( scpDecoded );"; 

        var bt = new BridgeTalk();
        bt.target = 'illustrator';
        bt.body = script;
        bt.onError = function(errObj){
            alert(errObj.body);
        }
        bt.send();
    }
    function getEstkSpecifier () {
        //carloscanto
        var aiversion = BridgeTalk.appVersion;

        switch (parseInt (aiversion)) {
            case 18: estkversion = '-4'; // CC
                break;
            case 15: estkversion = '-3'; // CS5
                break;
            default: estkversion = ''; // latest version
        }
        var estkspecifier = 'estoolkit' + estkversion;
        
        return estkspecifier;
    }
    function openInESTK(file){
        // PC
        var appScriptsFolder = SCRIPTFOLDERS.getByName("Application Scripts").fileFolder;  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Required for this kind of functionality
        var adobeScriptsFolder = SCRIPTFOLDERS.getByName("Adobe Scripts").fileFolder;
        var estkspecifier = getEstkSpecifier ();
        var pathToToolkit = Folder(BridgeTalk.getAppPath (estkspecifier) ).fsName;
        
        if($.os.match("Windows")){
            openInESTKScriptFile = File(File(adobeScriptsFolder+"\\openInESTKScriptFile.vbs").fsName.replace(/\//g, "\\"));
            
            try{
                openInESTKScriptFile.open('w');
                openInESTKScriptFile.write(
                    "Sub OpenInESTK(File)"+"\r"+
                    "   Dim objShell"+"\r"+
                    "   Set objShell = WScript.CreateObject(\"WScript.Shell\")"+"\r"+
                    "   Dim objFile"+"\r"+
                    "   Set objFile = CreateObject(\"Scripting.FileSystemObject\")"+"\r"+
                    "   If (objFile.FileExists(File)) Then"+"\r"+
                    "       objShell.Run(\"\"\""+pathToToolkit+"\"\" \"\"\" & File & \"\"\"\")"+"\r"+
                    "   Else"+"\r"+
                    "       MsgBox(\"File \"\"\" & File & \"\"\" was not found :(\")"+"\r"+
                    "   End If"+"\r"+
                    "   Set objShell = Nothing"+"\r"+
                    "End Sub"+"\r"+
                    "call OpenInESTK(\""+file.fsName.replace(/\//g,"\\")+"\")"
                );
            } catch(e) {
                alert("Sorry, vbs execution file '"+openInESTKScriptFile+"' was not able to be written.  Cannot continue operation. :(");
            }
            openInESTKScriptFile.close();
            if(openInESTKScriptFile.exists){
                openInESTKScriptFile.execute();
                $.sleep(100);
                openInESTKScriptFile.remove();
            } else {
                alert("File '"+openInESTKScriptFile+"' was not found!");
            }
        } else {
            // Mac
            /*
               This is meant to work by always having an '.app' applescript bundled application file in the Illustrator Scripts folder
               which gets executed by this block.  The ApplescriptExecutor.app file is set up to always open the ApplescriptExecutee.scpt file
               in Applescript Editor, and to run the script, then quickly close it, and (TODO) delete the file.
               The file has this in it:
               ---------------------------------------------------------------------------------
                set p to POSIX path of ((path to me as text) & "::")
                set f to POSIX path of (p & "ApplescriptExecutee.scpt")
                set myFile to POSIX file f

                tell application "AppleScript Editor"
                    activate
                    
                    open (myFile)
                    delay 0.25
                    
                    execute (front document)
                    delay 0.25
                    close (front document)
                    
                end tell
                tell application "Finder"
                    delete myFile
                end tell
               ---------------------------------------------------------------------------------
            */
            openInESTKScriptFile = File(appScriptsFolder+"/ApplescriptExecutee.scpt");
            var scriptString = "do shell script \"open -a \\\"ExtendScript Toolkit\\\" \\\"" + file.fsName + "\\\"\"";

            // for some reason does not open from Adobe Scripts, just runs them in target app!

            openInESTKScriptFile.open('w');
            openInESTKScriptFile.write(scriptString);
            openInESTKScriptFile.close();

            var execFile = File(appScriptsFolder+"/ApplescriptExecutor.app");
            if(execFile.exists){
                execFile.execute();
            } else {
                alert(execFile+" Was not found.");
            }
        }
    }
    function getImageOptions(){
        var arr = [];
        for(var all in IMAGE_RESOURCES){
            arr.push(all);
        }
        return arr;
    }

    function quickInfoDialog(obj, prop, windowName){
        /*prop can be: "square", "folderPath", "name", "notes" */
        var resultObj = {};
        for(var v in obj){
            resultObj[v] = obj[v];
        }
        
        var w = new Window('dialog', windowName);
        var s = w.add('statictext', undefined, prop);
        
        var edittextProps = {};
        if(prop == 'notes'){
            edittextProps.size = [300, 500];
            edittextProps.multiline =  true;
            edittextProps.readonly = false;
        } else {
            edittextProps.size = null;
            edittextProps.multiline =  false;
            edittextProps.readonly = false;
            if(prop == 'folderPath'){
                edittextProps.readonly = true;
            }
        }
        var e = w.add('edittext', undefined, resultObj[prop], {multiline: edittextProps.multiline, readonly: edittextProps.readonly}); e.characters = 36;
        (edittextProps.size == null) ? '' : e.size = edittextProps.size;
        
        if(prop == "folderPath"){
            e.readonly = true;
            var btn_select = w.add('button', undefined, 'Choose Folder');
            btn_select.onClick = function(){
                var x = Folder.selectDialog('Please choose a new folder.');
                if(x != null){
                    x = Folder(x.fsName.replace('file://', "")); // is this still happening on Macs?
                    if(x.exists){
                        e.text = decodeURI(x);
                    }
                }
            }
        }
        
        var g_btn = w.add('group');
        var btn_ccl = g_btn.add('button', undefined, 'Cancel');
        var btn_ok = g_btn.add('button', undefined, 'OK');
        if(w.show() == 2){
            return null;
        } else {
            if(prop == 'name' && e.text.replace(/\s+/g,'') == ''){
                alert('Please fill in the text input');
                return null;
            }
            resultObj[prop] = e.text;
            return resultObj;
        }
    }

    function panelSettings(){
        var w = new Window('dialog', 'Panel Settings'); w.spacing = 4; w.margins = [4,4,4,4];
        var g1 = w.add('panel'); g1.size = [550, 70];
        g1.add('statictext', undefined, "Do you want to have a confirmation dialog for running scripts with double-click?");
        var c1 = g1.add('checkbox', undefined, 'Confirm every time.');
        c1.value = SETTINGS.openConfirm;
        if(SETTINGS.admin && estk_func_on){
            var g2 = w.add('panel'); g2.size = [550, 70];
            g2.add('statictext', undefined, "Do you want to have a confirmation dialog for opening scripts in the ESTK?");
            var c2 = g2.add('checkbox', undefined, 'Confirm every time.');
            c2.value = SETTINGS.openInESTKConfirm;
        }
        var g5 = w.add('panel'); g5.size = [550, 70];
        g5.add('statictext', undefined, "Do you want to have a confirmation dialog for opening scripts in Favorites View?");
        var c5 = g5.add('checkbox', undefined, 'Confirm every time.');
        c5.value = SETTINGS.openConfirmFavorite;
        
        var g3 = w.add('panel'); g3.size = [550, 70];
        g3.add('statictext', undefined, "Keep minimized tab in the same location as the big window?");
        var c3 = g3.add('checkbox', undefined, 'Minimize in same location.');
        c3.value = SETTINGS.syncLocations;
        
        var g4 = w.add('panel'); g4.size = [550, 70];
        g4.add('statictext', undefined, "Change View. (Also, ALT-Click Settings button to change in main window.)");
        var g4_1 = g4.add('group');
        var r1 = g4_1.add('radiobutton', undefined, "View Script Folders");
        var r2 = g4_1.add('radiobutton', undefined, "View Favorite Scrips");

        (SETTINGS.paletteView == PaletteViews.VIEW_FOLDERS) ? r1.value = true : '';
        (SETTINGS.paletteView == PaletteViews.VIEW_FAVORITES) ? r2.value = true : '';
        
        var g_btn = w.add('group');
        var btn_ccl = g_btn.add('button', undefined, 'Cancel');
        var btn_ok = g_btn.add('button', undefined, 'OK');
        var btn_saveConfig = g_btn.add('button', undefined, "Save Personal Settings");
        btn_saveConfig.onClick = function(){
            if(confirm("Save the personal settings now?")){
                var dest = SETTINGS.personalConfigFile;
                savePersonalXML(dest, {
                    paletteView : (r1.value) ? PaletteViews.VIEW_FOLDERS : PaletteViews.VIEW_FAVORITES,
                    openConfirm : c1.value,
                    openConfirmFavorite : c5.value,
                    openInESTKConfirm : (SETTINGS.admin && estk_func_on) ? c2.value : true,
                    syncLocations : c3.value,
                    tinyWindowLocation: SETTINGS.tinyWindowLocation,
                    bigWindowLocation: SETTINGS.bigWindowLocation
                });
            }
        }
        
        if(w.show() == 2){
//~             alert('Canceled');
            return false;
        } else {
            SETTINGS.openConfirm = c1.value;
            SETTINGS.openConfirmFavorite = c5.value;
            if(SETTINGS.admin){
                if(estk_func_on){
                    SETTINGS.openInESTKConfirm = c2.value;
                }
            }
            SETTINGS.syncLocations = c3.value;
            SETTINGS.paletteView = (r1.value) ? PaletteViews.VIEW_FOLDERS : PaletteViews.VIEW_FAVORITES;
            return true;
        }
    }

    function purifyResult(newObj, oldObj){
        var purifiedResult = []; // check to not include removed items.
        for(var i=0; i<newObj.length; i++){
            var cr = newObj[i];
            if(cr.name != '__delete__'){
                purifiedResult.push(cr);
            }
        }
        purifiedResult.getByName = oldObj.getByName;
        return purifiedResult;
    }

    function imageOptionsBox(dropdown){
        var d = dropdown;
        var imgOpts = getImageOptions();
        for(var x=0; x<imgOpts.length; x++){
            var thisOption = imgOpts[x];
            var item = d.add('item', thisOption);
            item.image = IMAGE_RESOURCES[thisOption];
        }
    }

    function configurationSettings(scriptFoldersArr, favoritesArr){
        var w = new Window('dialog', 'Configuration', undefined);
        w.size = [380, 445]; w.spacing = 4; w.margins = [4,4,4,4];
        var resultObj = {favoriteObjects: favoritesArr};
        resultObj.folderObjects = [];
        resultObj.folderObjects.getByName = SCRIPTFOLDERS.getByName;
        
        var container = w.add('group'); container.alignChildren = 'top';
        var dispSec = container.add('group'); dispSec.orientation = 'column'; dispSec.size = [310, 385];
        for(var i=0; i<scriptFoldersArr.length; i++){
            var p = dispSec.add('panel'); p.orientation = 'row'; p.spacing = 2; p.margins = [4,4,4,4];
            var g = p.add('group'); g.orientation = 'column'; g.spacing = 2;
            var thisFolderObj = scriptFoldersArr[i];
            var e = g.add('edittext', undefined, thisFolderObj.name, {readonly: true});
            e.characters = 20;
            var n = g.add('edittext', undefined, thisFolderObj.notes, {multiline: true, readonly: true});
            n.size = [205,60];
            if(SETTINGS.putImages){
                var d = g.add('dropdownlist', undefined, ''); d.size = [200, 26];
            }

            var temp_obj = {};
            for(var v in thisFolderObj){
                temp_obj[v] = thisFolderObj[v];
            }
            resultObj.folderObjects.push(temp_obj); // Build the data user-object
            var thisIndex = resultObj.folderObjects.length-1;
            
            if(SETTINGS.putImages){
                imageOptionsBox(d);
                for(var all in IMAGE_RESOURCES){
                    if(all == thisFolderObj.square){
                        d.selection = d.find(all);
                        resultObj.folderObjects[resultObj.folderObjects.length-1].square = all; // init from existing
                    }
                }
                d.onChange = function(){
                    resultObj.folderObjects.getByName(this.parent.children[0].text).square = this.selection.text;
                }
            }
           
            var g1 = p.add('group'); g1.orientation = 'column'; g1 .spacing = 2;
            var btn_name = g1.add('button', undefined, 'Name');
            btn_name.index = thisIndex;
            var btn_notes = g1.add('button', undefined, 'Notes');
            btn_notes.index = thisIndex;
            var btn_folder = g1.add('button', undefined, 'Folder');
            btn_folder.index = thisIndex;
            var btn_remove = g1.add('button', undefined, 'Remove');
            btn_remove.index = thisIndex;
            
            if(thisFolderObj.name == "Application Scripts" || thisFolderObj.name == "Adobe Scripts"){
                btn_name.enabled = false;
                btn_remove.enabled = false;
                // these will be needed later, probably, so no rename or remove.
            }
            
            btn_name.onClick = function(){
                var thisFolderObj = resultObj.folderObjects[this.index];
                var choiceResult = quickInfoDialog(thisFolderObj, 'name', "Choose the name of your folder in the Panel.");
                if(choiceResult != null){
                    if(resultObj.folderObjects.getByName(choiceResult.name) == null || choiceResult.name == thisFolderObj.name){
                        resultObj.folderObjects[this.index] = choiceResult;
                        var textDisp = this.parent.parent.children[0].children[0];
                        textDisp.text = choiceResult.name;
                    } else {
                        alert("Sorry, this name is already being used in the panel,\nplease choose a different one.");
                    }
                }
            }
            btn_notes.onClick = function(){
                var thisFolderObj = resultObj.folderObjects[this.index];
                var choiceResult = quickInfoDialog(thisFolderObj, 'notes', "Access Notes for your folder in the Panel.");
                if(choiceResult != null){
                    resultObj.folderObjects[this.index] = choiceResult;
                    var textDisp = this.parent.parent.children[0].children[1];
                    textDisp.text = choiceResult.notes;
                }
            }
            btn_folder.onClick = function(){
                var thisFolderObj = resultObj.folderObjects[this.index];
                var choiceResult = quickInfoDialog(thisFolderObj, 'folderPath', "Change the path your folder in the Panel.");
                if(choiceResult != null){
                    resultObj.folderObjects[this.index] = choiceResult;
                }
            }
            btn_remove.onClick = function(){
                if(confirm("Are you sure you want to remove folder '"+resultObj.folderObjects[this.index].name+"'")){
                    resultObj.folderObjects[this.index].name = '__delete__';
                    //setting to null made it not work.
                    //use purifyResult to sift.
                    this.parent.parent.visible = false;
                }
            }
        }

        var scrl = container.add('scrollbar'); scrl.size=[20,384];
        scrl.onChange = scrl.onChanging = function(){
            // Need both of the events for mousewheels and clicks.
            for(var i=0; i<dispSec.children.length; i++){
                var thisPanel = dispSec.children[i];
                var xLoc = thisPanel.originalLocation[0];
                var yLoc = thisPanel.originalLocation[1];
                thisPanel.location=[xLoc, yLoc-((this.value/100) * (dispSec.totalHeight - (dispSec.size[1] - 30)))];
                // Basically, move the top of each of the panels from its original value to the percentage of the
                // scrollbar value times the total height of all the panels, minus  the height of the container window (parent viewport), minus a compensation buffer.
            }
        }

        w.onShow = function(){
            var totalHeight = 0;
            for(var i=0; i<dispSec.children.length; i++){
                var thisPanel = dispSec.children[i];
                thisPanel.originalLocation = [thisPanel.location[0], thisPanel.location[1]];
                totalHeight += (thisPanel.size[1] + 4);
            }
            dispSec.totalHeight = totalHeight;
        }
        var sep = w.add('panel'); sep.size = [360, 2];
        var g2 = w.add('group');
        var g3 = w.add('group');
        var btn_add = g3.add('button', undefined, 'Add New');
        btn_add.onClick = function(){
            var a = addFolder(resultObj.folderObjects);
            if(a != false){
                resultObj.folderObjects.push(a);
                w.close();
            }
        }
        var p1 = g3.add('panel'); p1.orientation = 'row'; p1.spacing = 2; p1.margins = [3,3,3,3];
        var btn_ccl = p1.add('button', undefined, 'Cancel');
        var btn_ok = p1.add('button', undefined, 'OK');
        var btn_save = g3.add('button', undefined, 'Save Config');
        btn_save.onClick = function(){
            if(confirm("Save the configuration settings now?")){
                var dest = SETTINGS.configFile;
                saveXML(dest, {folderObjects: purifyResult(resultObj.folderObjects, SCRIPTFOLDERS), favoriteObjects: resultObj.favoriteObjects});
            }
        }
        if(w.show() == 2){
//~             alert('Canceled');
            return null;
        } else {
            return {folderObjects: purifyResult(resultObj.folderObjects, SCRIPTFOLDERS), favoriteObjects: resultObj.favoriteObjects};
        }
    }

    function addFolder(folderObjArr){
        function validation(){
            var t = e1.text; // name
            if(t.replace(/\s+/g,'') == ''){
                return false;
            } else if(folderObjArr.getByName(t) != null){
                alert("This folder name '"+t+"' is already being used in the panel.\rName it something different.");
                return false;
            } else {
                if(e3.text == ''){
                    return false;
                } else {
                    btn_ok.enabled = true;
                    return true;
                }
            }
        }
        var resultObj = {};
        var w = new Window('dialog', "Add new Script Folder");
        var g1 = w.add('group');
        g1.toolTip = "* stands for Required Field";
        var l1 = g1.add('statictext', undefined, "Name for Folder*");
        var e1 = g1.add('edittext', undefined, ""); e1.characters = 30;
        e1.onChanging = function(){
            validation();
        }
        var g2 = w.add('group'); g2.orientation = 'column';
        var l2 = g2.add('statictext', undefined, "Notes");
        var e2 = g2.add('edittext', undefined, "", {multiline: true}); e2.size = [310, 100];
        var g3 = w.add('group'); g3.orientation = 'column';
        var btn_folder = g3.add('button', undefined, "Go to Choose Folder*");
        btn_folder.onClick = function(){
            var choiceResult = quickInfoDialog({folderPath : ''}, 'folderPath', "Choose the path to your folder in the Panel.");
            if(choiceResult != null){
                e3.text = decodeURI(choiceResult.folderPath);
                if(e1.text == ''){
                    var temp = e3.text.split(/(\/|\\)/);
                    e1.text = temp[temp.length-1];
                }
                validation();
            }
        }
        var e3 = g3.add('edittext', undefined, "", {multiline: false, readonly: true}); e3.characters = 44;
        if(SETTINGS.putImages){
            var g4 = w.add('group');
            var l4 = g4.add('statictext', undefined, "Image Icon:");
            var d = g4.add('dropdownlist', undefined, ''); d.size = [210, 26];
            imageOptionsBox(d);
            d.selection = d.find('square_none');
        }
        var g4 = w.add('group');
        var btn_ccl = g4.add('button', undefined, "Cancel");
        var btn_ok = g4.add('button', undefined, "Ok");
        btn_ok.enabled = false;
        btn_ok.onClick = function(){
            if(validation()){
                w.close();
            } else {
                alert("Please make sure Name and Folder are chosen.");
            }
        }
        if(w.show() == 2){
//~             alert('Canceled');
            return false;
        } else {
            resultObj.name = e1.text;
            resultObj.notes = e2.text;
            resultObj.folderPath = e3.text;
            resultObj.square = (!SETTINGS.putImages) ? 'square_none' : d.selection.text;
            return resultObj;
        }
    }

    function addUnique(array, item){
        for(var k2=0; k2<array.length; k2++){
            if(array[k2] == item){
                break;
            } else if(k2 >= array.length-1){
                array.push(item);
            }
        }
    }
    function suggestiveSearchFunc(find, in_array){
        var a = in_array;
        var res = [];
        for(var k1=0; k1<a.length; k1++){
            var thisWord = a[k1];
            if(thisWord.match(find)){
                res.push(thisWord);
            }
        }
        return res;
    }
    function searchWindow(treeview){
        function getItems(){
            var arr = [];
            for(var f=0; f<t.items.length; f++){
                var thisItem = t.items[f];
                arr.push(thisItem.text);
                if(thisItem.type == 'node'){
                    for(var f1=0; f1<thisItem.items.length; f1++){
                        var thisSubItem = thisItem.items[f1];
                        arr.push(thisSubItem.text);
                    }
                }
            }
            return arr;
        }
        function blankList(){
            for(var k=0; k<disp.items.length; k++){
                var thisItem = disp.items[k];
                thisItem.text = '';
            }
            disp.hide();
            disp.show();
            // hide/show necessary in CC2014
        }
        function writeList(arr){
            for(var k=0; k<disp.items.length; k++){
                var thisItem = disp.items[k];
                if(k<arr.length){
                    thisItem.text = arr[k];
                }
            }
            disp.hide();
            disp.show();
        }
        function findInTree(item){
            for(var k3=0; k3<t.items.length; k3++){
                var thisItem = t.items[k3];
                if(thisItem.text == item){
                    return thisItem;
                }
                if(thisItem.type == 'node'){
                    for(var k4=0; k4<thisItem.items.length; k4++){
                        var inner = thisItem.items[k4];
                        if(inner.text == item){
                            return inner;
                        }
                    }
                }
            }
            return false;
        }
        var t = treeview;
        var w = new Window('dialog', "Search for Script or Folder"); w.spacing = 4;
        var g1 = w.add('group'); g1.orientation = 'column';
        var eSearch = g1.add('edittext', undefined, ''); eSearch.characters = 18; eSearch.active = true;
        var disp = g1.add('listbox', undefined, getItems()); disp.size = [200, 400];
        eSearch.onChanging = function(){
            var res = suggestiveSearchFunc(new RegExp(this.text, 'ig'), getItems());
            blankList();
            writeList(res);
        }
        disp.onChange = function(){
            if(this.selection != null){
                if(this.selection.text != ''){
                    eSearch.text = this.selection.text;
                }
            }
        }
        disp.onDoubleClick = function(){
            var str = disp.selection.text;
            if(str != ''){
                var node = findInTree(str);
                if(node.hasOwnProperty('customProperty_File')){
                    var run = false;
                    if(!SETTINGS.openConfirm){
                        run = true;
                    } else {
                        run = (confirm("Do you want to run script '"+str+"' ?")) ? true : false;
                    }
                    (run) ? runScriptFromFile(node.customProperty_File) : '' ;
                }
                w.close();
            }
        }
        var lbl = w.add('statictext', undefined, 'Double-Click to Run');
        var g_btn = w.add('group');
        var btn_ccl = g_btn.add('button', undefined, 'Cancel');
        var btn_ok = g_btn.add('button', undefined, 'OK');

        if(w.show() == 2){
            //do nothing
        } else {
            refreshTree(t);
            var b = getItems();
            var str = eSearch.text;

            for(var k=0; k<b.length; k++){
                if(str == b[k]){
                    t.selection = null;
                    var node = findInTree(str);
                    if(node.type == 'node'){
                        node.expanded = true;
                    } else {
                        node.parent.expanded = true;
                    }

                    node.selected = true;
                    break;
                }
            }
        } 
    }

//===================================== UI Palette ================================================================================================//
    function miniTab(){
        var title = (SETTINGS.windowGraphics) ? '' : 'Script Panel' ;
        var w = new Window('palette', title, undefined, {borderless: false, closebutton: false}); w.spacing = 0; w.margins = [0,0,0,0];
        var loc = (SETTINGS.syncLocations) ?  SETTINGS.bigWindowLocation : SETTINGS.tinyWindowLocation ;
        w.location = loc;

        var btn;

        if(title == '') {
            btn = w.add('iconbutton', undefined, IMAGE_RESOURCES_2.img_logo2); btn.size = [100, 42];
        } else {
            btn = w.add('button', undefined, 'Maximize'); btn.size = [100, 42];
        }

        this.show = function(){w.show();}

        btn.addEventListener('mousedown' , function(){
            var loc = (SETTINGS.syncLocations) ?  w.location : SETTINGS.bigWindowLocation ;
            SETTINGS.bigWindowLocation = loc;
            SETTINGS.tinyWindowLocation = w.location;
            var thisPaletteWindow = new paletteWindow();
            thisPaletteWindow.show();
            w.close();
        });
    }

    function setupTreeview(treeview){
        var t = treeview;
        for(var i=0; i<SCRIPTFOLDERS.length; i++){
            var item = SCRIPTFOLDERS[i];

            if(item.fileFolder != null){
                var nodeName = (item.name == null) ? decodeURI(item.fileFolder.name) : item.name ;
                var n = t.add('node', nodeName);
                if(putImages){
                    n.image = IMAGE_RESOURCES[item.square];
                }
                var ln = item.folderFiles.length;
                if(ln > 0){
                    for(var j=0; j<ln; j++){
                        var f = item.folderFiles[j];
                        if(f instanceof File == true){
                            var nf = n.add('item', decodeURI(f.name));
                            nf.customProperty_File = f;
                            if(putImages){
                                nf.image = IMAGE_RESOURCES[item.square];
                            }
                        }
                    }
                } else {
                    n.add('item', "No scripts found here.");
                }
            }
        }
    }

    function refreshTree(treeview){
        var t = treeview;
        t.removeAll();
        setupTreeview(t);
    }
    function refreshFavorites(group){
        var g = group;
        for(var i=g.children.length-1; i>-1; i--){
            var thisChild = g.children[i];
            g.remove(thisChild);
        }

        setupFavorites(g, FAVORITES);
        if(FAVORITES.length <= 7){
            g.window.layout.layout(true);
        } else {
            g.layout.layout(true);
            if(FAVORITES.length >= 7){
                var scrollBarHt = 500;
                var sc = g.parent.children[1];
                var ht = FAVORITES.length * 70;
                sc.onChange = sc.onChanging = function(){
                    for(var i=0; i<this.parent.children[0].children.length; i++){
                        var thisPanel = this.parent.children[0].children[i];
                        var xLoc = thisPanel.originalLocation[0];
                        var yLoc = thisPanel.originalLocation[1];
                        thisPanel.location=[xLoc, yLoc-((this.value/100) * (ht - (scrollBarHt-15)))];
                    }
                }
            }
        }
        // update scrollbar helping-properties
        for(var i=0; i<g.children.length; i++){
            var thisPanel = g.children[i];
            thisPanel.originalLocation = [thisPanel.location[0], thisPanel.location[1]];
        }
    }
    
    function setupFavorites(group, favoriteObjects){
        var g = group; g.spacing = 4;
        if(favoriteObjects != undefined && favoriteObjects.length > 0){
            var addScroll = (favoriteObjects.length >= 7)? true : false;
            for(var i=0; i<favoriteObjects.length; i++){
                var thisFavoriteObj = favoriteObjects[i];
                var p = g.add('panel', undefined, File(thisFavoriteObj.filePath).displayName); p.size = [210, 70]; p.orientation = 'row'; p.spacing = 4; p.margins = [6,12,6,6];
                var btn_run;
                if(thisFavoriteObj.image != "No Image"){
                    if(File(thisFavoriteObj.image).exists){
                        btn_run = p.add('iconbutton', undefined, ScriptUI.newImage(thisFavoriteObj.image)); btn_run.size = [100,40];
                    } else {
                        //image not found
                        btn_run = p.add('button', undefined, 'Run'); btn_run.size = [100,40];
                    }
                } else {
                    btn_run = p.add('button', undefined, 'Run'); btn_run.size = [100,40];
                }
                btn_run.data = thisFavoriteObj.filePath;
                btn_run.onClick = function(){
                    if(!SETTINGS.openConfirmFavorite){
                        run = true;
                    } else {
                        run = (confirm("Do you want to run script '"+decodeURI(File(this.data).displayName)+"' ?")) ? true : false;
                    }
                    (run) ? runScriptFromFile(this.data) : '' ;
                }
                var btn_notes = p.add('button', undefined, 'Note'); btn_notes.size = [40,40];
                btn_notes.data = thisFavoriteObj.notes;
                btn_notes.onClick = function(){
                    quickView(this.data);
                }
                if(thisFavoriteObj.notes == ""){
                    btn_notes.enabled = false;
                }
                var btn_settings = p.add('iconbutton', undefined, IMAGE_RESOURCES.cog); btn_settings.size = [40,40]; btn_settings.order = i;
                btn_settings.enabled = false;
                if(SETTINGS.admin){
                    btn_settings.enabled = true;
                    btn_settings.onClick = function(){
                        var resObj = addScriptDialog(FAVORITES[this.order]);
                        if(resObj != null){
                            if(resObj != "__delete__"){
                                for(var all in FAVORITES[this.order]){
                                    FAVORITES[this.order][all] = resObj[all];
                                }
                            } else {
                                FAVORITES.splice(this.order, 1);
                                this.window.treeview.size = [220, FAVORITES.length * 65];
                            }
                            refreshFavorites(group);
                        }
                    }
                }
            }

            if(addScroll && g.parent.children[1] == undefined){
                g.size = [220, 510];
                var scrollBarHt = 500;
                var sc = g.parent.add('scrollbar');
                sc.size = [14, scrollBarHt];
                var ht = favoriteObjects.length * 69;
                sc.onChange = sc.onChanging = function(){
                    for(var i=0; i<g.children.length; i++){
                        var thisPanel = g.children[i];
                        var xLoc = thisPanel.originalLocation[0];
                        var yLoc = thisPanel.originalLocation[1];
                        thisPanel.location=[xLoc, yLoc-((this.value/100) * (ht - (scrollBarHt-15)))];
                    }
                }
            } else if(!addScroll && g.parent.children[1] != undefined){
                g.parent.remove(g.parent.children[1]);
            }
        } else {
            g.add('statictext', undefined, "No Favorite scripts have been added yet.");
        }
    }

    function addScriptDialog(favoriteObj){
        function validate(){
            var valid = false;
            try{
                if(File(disp_fileName.text).exists){
                    valid = true;
                }
            } catch(e){
                valid = false;
            }
            return valid;
        }
        var filePath, image;
        var title = (favoriteObj == undefined)? 'Add new Favorite Script' : "Edit properties for "+File(favoriteObj.filePath).displayName+" script.";
        var w = new Window('dialog', title);
        var g1 = w.add('panel', undefined, 'File'); g1.size = [400, 90];
        var btn_chooseFile = g1.add('button', undefined, 'Choose Script');
        var disp_fileName = g1.add('edittext', undefined, '', {readonly: true}); disp_fileName.characters = 35;
        var g2 = w.add('panel', undefined, 'Image'); g2.size = [400, 150];
        var btn_chooseImage = g2.add('button', undefined, 'Choose Image (100px * 45px)');
        var disp_image= g2.add('panel'); disp_image.size = [100,40];
        var disp_imageFile = g2.add('edittext', undefined, '', {readonly: true}); disp_imageFile.characters = 35;
        var g3 = w.add('panel', undefined, 'Notes'); g3.size = [400, 160];
        var disp_notes = g3.add('edittext', undefined, '', {multiline: true}); disp_notes.size = [360, 130];
        var g_btn = w.add('group');
        var btn_ok = g_btn.add('button', undefined, 'Ok');
        var btn_ccl = g_btn.add('button', undefined, 'Cancel');
        if(favoriteObj != undefined){
            var btn_remove = g_btn.add('button', undefined, "Remove this Script");
            btn_remove.onClick = function(){
                this.data  = '__delete__';
                w.close();
            }
        }
        
        btn_chooseFile.onClick = function(){
            var fileType = ($.os.match("Windows"))? "*.js;*.jsx": function(f){return f instanceof Folder || (f instanceof File && f.displayName.match(/(.jsx|.js)$/));} ;
            var scriptFile = File.openDialog("Choose a script file.", fileType);
            if(scriptFile != null){
                disp_fileName.text = decodeURI(scriptFile.toString());
            }            
        }
        btn_chooseImage.onClick = function(){
            var fileType = ($.os.match("Windows"))? "*.jpg;*.png;*.gif": function(f){return f instanceof Folder || (f instanceof File && f.displayName.match(/(.jpg|.png|.gif)$/));} ;
            var imgFile = File.openDialog("Choose image file (100 * 40 pixels) for this script.", fileType);
            if(imgFile != null){
                scriptImage = imgFile;
                disp_image.onDraw = function(){
                    this.graphics.drawImage(ScriptUI.newImage(scriptImage), 0,0,100,40);
                }
                disp_image.hide(); disp_image.show();
                disp_imageFile.text = decodeURI(scriptImage.toString());
            }
        }
        w.onShow = function(){
            if(favoriteObj != undefined){
                var thisScriptFile = File(favoriteObj.filePath);
                var thisImageFile = File(favoriteObj.image);
                disp_fileName.text = decodeURI(favoriteObj.filePath);
                if(thisImageFile.exists){
                    disp_image.onDraw = function(){
                        this.graphics.drawImage(ScriptUI.newImage(thisImageFile), 0,0,100,40);
                    }
                    disp_imageFile.text = decodeURI(thisImageFile.toString());
                }
                disp_notes.text = favoriteObj.notes;
            }
        }
        
        if(w.show() != 2){
            if(favoriteObj != undefined){
                if(btn_remove.hasOwnProperty('data')){
                    if(confirm("Remove this favorite script?")){
                        return btn_remove.data;
                    } else {
                        return null;
                    }
                }
            }
            if(validate()){
                var image = (File(disp_imageFile.text).exists) ? disp_imageFile.text : "No Image";
                return {filePath: disp_fileName.text, image: image, notes: disp_notes.text};
            }
        } else {
            return null;
        }
    }

    function refreshViews(treeview, favListGroupHolder, hideFolderElems, hideFavoritesItems, enableFolderItems){
        var t = treeview;
        var viewingFolders = (SETTINGS.paletteView == PaletteViews.VIEW_FOLDERS);
        var numItems = favListGroupHolder.children[0].children.length;
        if(viewingFolders){
            t.visible = true;
            favListGroupHolder.visible = false;
            t.size = [220, 450];
        } else {
            t.visible = false;
            favListGroupHolder.visible = true;
        }
        if(numItems <= 7){
            if(!viewingFolders){
                if(favListGroupHolder.children[0].children.length < 7){
                    t.size = [220, favListGroupHolder.children[0].children.length * 65];
                }
            } else {
                t.size = [220, 500];
            }
        } else {
            t.size = [220, 500];
        }
        for(var i=0; i<hideFolderElems.length; i++){
            var thisElem = hideFolderElems[i];
            thisElem.visible = viewingFolders;
        }
        for(var i=0; i<hideFavoritesItems.length; i++){
            var thisElem = hideFavoritesItems[i];
            thisElem.visible = !viewingFolders;
        }
        for(var i=0; i<enableFolderItems.length; i++){
            var thisElem = enableFolderItems[i];
            thisElem.enabled = viewingFolders;
        }
        if(numItems < 7){
            t.window.layout.layout(true);
        }
    }
    function switchViews(){
        if(SETTINGS.paletteView == PaletteViews.VIEW_FOLDERS){
            SETTINGS.paletteView = PaletteViews.VIEW_FAVORITES;
        } else {
            SETTINGS.paletteView = PaletteViews.VIEW_FOLDERS;
        }
    }
    function paletteWindow(){
        var windowType = 'palette' ;
        var w = new Window(windowType, 'Script Panel', undefined, {closeButton: true});
        w.spacing = 2; w.margins= [5,5,5,5];
        w.location = SETTINGS.bigWindowLocation;
        
        var g0 = w.add('group');

        var btn_settings = g0.add('button', undefined, 'Settings'); btn_settings.size = [106, 25];
        btn_settings.helpTip = "ALT-Click to switch Views";
        
        btn_settings.onClick = function(){
            if(ScriptUI.environment.keyboardState.ctrlKey==true || ScriptUI.environment.keyboardState.altKey==true){
                switchViews();
                var enableFolderItems = (SETTINGS.admin)? [btn_configuration] : [];
                refreshViews(t, favListGroupHolder, [g2], [g2_2], enableFolderItems);
            } else {
                SETTINGS.bigWindowLocation = w.location;
                var change = panelSettings();
                if(change){
                    var enableFolderItems = (SETTINGS.admin)? [btn_configuration] : [];
                    refreshViews(t, favListGroupHolder, [g2], [g2_2], enableFolderItems);
                }
            }
        }
        if(SETTINGS.admin){
            var btn_configuration = g0.add('button', undefined, 'Configuration'); btn_configuration.size = [106, 25];
            btn_configuration.onClick = function(){
                var settingsChoice = configurationSettings(SCRIPTFOLDERS, FAVORITES);
                if(settingsChoice != null){
                    SCRIPTFOLDERS = settingsChoice.folderObjects;
                    refreshFiles();
                    refreshTree(t);
                }
            }
        }
    
        var g1 = w.add('group'); g1.orientation = 'stack';
        
        var t = g1.add('treeview', undefined, []);   t.size = [220, 450]; g1.alignChildren = "top";
        var favListGroupHolder = g1.add('group'); favListGroupHolder.orientation = 'row';
        var favListGroup = favListGroupHolder.add('group'); favListGroup.orientation = 'column';
        
        setupTreeview(t);
        w.treeview = t;
        setupFavorites(favListGroup, FAVORITES);
        
        t.onDoubleClick = function(){
            if(t.selection != null && t.selection.hasOwnProperty('customProperty_File')){
                var run = false;
                if(!SETTINGS.openConfirm){
                    run = true;
                } else {
                    run = (confirm("Do you want to run script '"+t.selection.text+"' ?")) ? true : false;
                }
                (run) ? runScriptFromFile(t.selection.customProperty_File) : '' ;
            }
        };
        function deselectEverything(treeview){
            try{
                var t = treeview;
                if(t.selection != null){
                    t.items[0].selected = true;
                    t.items[0].selected = false;
                }
            } catch(e){
                var t = treeview;
                for(var i=0; i<t.items.length; i++){
                    var thisItem = t.items[i];
                    thisItem.selected = true;
                    thisItem.selected = false;
                }  
            }
        }
        t.onExpand = function(){
            deselectEverything(this);
        }
        t.onCollapse = function(){
            deselectEverything(this);
        }
        var sep = w.add('group'); sep.size = [200,4];
        var g2_holder = w.add('group'); g2_holder.orientation = 'stacked';
        var g2 = g2_holder.add('group');
        var btn_min = g2.add('button', undefined, 'Min'); btn_min.size=[31,31];
        btn_min.helpTip='Minimize this palette';
        btn_min.onDraw=function(){
            drawFromObjString(BUTTON_RESOURCES["btn_min"], this);
        }
        btn_min.onClick = function(){
            var loc = (SETTINGS.syncLocations) ?  w.location : SETTINGS.tinyWindowLocation ;
            SETTINGS.tinyWindowLocation = loc;
            SETTINGS.bigWindowLocation = w.location;
            var thisMiniTab= new miniTab();
            thisMiniTab.show();
            w.close();
        }

        var btn_expand = g2.add('button', undefined, 'Expand All'); btn_expand.size = [31,31];
        btn_expand.helpTip='Expand All';
        btn_expand.onDraw=function(){
            drawFromObjString(BUTTON_RESOURCES["btn_expand"], this);
        }
        btn_expand.onClick = function(){
            refreshTree(t);
            for(var i=0; i<t.items.length; i++){
                var thisItem = t.items[i];
                thisItem.expanded = true;
            }
        }

        var btn_collapse = g2.add('button', undefined, 'Collapse All');  btn_collapse.size = [31,31];
        btn_collapse.helpTip='Collapse All';
        btn_collapse.onDraw=function(){
            drawFromObjString(BUTTON_RESOURCES["btn_collapse"], this);
        }
        btn_collapse.onClick = function(){
            refreshTree(t);
            // expanded = false doesn't seem to work in CC2014
        }
        
        var g2_2 = g2_holder.add('group');
        var btn_min_2 = g2_2.add('button', undefined, 'Min'); btn_min_2.size=[31,31];
        btn_min_2.helpTip='Minimize this palette';
        btn_min_2.onDraw = btn_min.onDraw;
        btn_min_2.onClick = btn_min.onClick;
        
        if(SETTINGS.admin){
            var btn_plus = g2_2.add('button', undefined, 'Add Script'); btn_plus.size = [31,31];
            btn_plus.helpTip='Add a new script to Favorites';
            btn_plus.onDraw=function(){
                drawFromObjString(BUTTON_RESOURCES["btn_plus"], this);
            }
            btn_plus.onClick = function(){
                var addScript = addScriptDialog();
                if(addScript != null && addScript != undefined){
                    FAVORITES.push(addScript);
                    refreshFavorites(favListGroup);
                    //go
                }
            }
            var btn_saveFaves = g2_2.add('button', undefined, 'Save'); btn_saveFaves.size = [31,31];
            btn_saveFaves.helpTip='Save Configuration';
            btn_saveFaves.onDraw = function(){
                drawFromObjString(BUTTON_RESOURCES["btn_save"], this);
            }
            btn_saveFaves.onClick = function(){
                if(confirm("Save the configuration settings now?")){
                    var dest = SETTINGS.configFile;
                    saveXML(dest, {folderObjects: SCRIPTFOLDERS, favoriteObjects: FAVORITES});
                }
            }
        }

        if(SETTINGS.admin && estk_func_on){
            var btn_estk = g2.add('button', undefined, 'ESTK'); btn_estk.size = [31,31];
            btn_estk.helpTip='Open in ExtendScript ToolKit';
            btn_estk.onDraw=function(){
                drawFromObjString(BUTTON_RESOURCES["btn_estk"], this);
            }
            if($.os.match('Macintosh')){
                var appScriptsFolderObj = SCRIPTFOLDERS.getByName("Application Scripts");
                if(appScriptsFolderObj != null){
                    var appScriptsFolder = appScriptsFolderObj.fileFolder;
                    var af = File(appScriptsFolder+"/ApplescriptExecutor.app");
                    if(af.exists){
                        estk_func_on = true;
                    }
                } else {
                    btn_estk.visible = false;
                    estk_func_on = false;
                }
            } else {
                estk_func_on = true;
            }
            btn_estk.onClick = function(){
                if(t.selection != null && t.selection.hasOwnProperty('customProperty_File') && estk_func_on){
                    var run = false;
                    if(!SETTINGS.openConfirm){
                        run = true;
                    } else {
                        run = (confirm("Do you want to open script '"+t.selection.text+"' in the ESTK?")) ? true : false;
                    }
                    (run) ? openInESTK(t.selection.customProperty_File) : '' ;
                } else {
                    alert("Please select a script in the treeview.");
                }
            }
        }

        var btn_find = g2.add('button', undefined, 'Find'); btn_find.size = [31,31];
        btn_find.helpTip='Find';
        btn_find.onDraw=function(){
            drawFromObjString(BUTTON_RESOURCES["btn_find"], this);
        }
        btn_find.onClick = function(){
            searchWindow(t);
        }

        w.onShow = function(){
            // update scrollbar helping-properties
            for(var i=0; i<favListGroup.children.length; i++){
                var thisPanel = favListGroup.children[i];
                thisPanel.originalLocation = [thisPanel.location[0], thisPanel.location[1]];
            }
            if(t.items.length > 0){
                if(t.items.length > 1){
                    t.items[1].expanded = true;
                } else {
                    t.items[0].expanded = true;
                }
            }
            var enableFolderItems = (SETTINGS.admin)? [btn_configuration] : [];
            refreshViews(t, favListGroupHolder, [g2], [g2_2], enableFolderItems);
        }
        this.show = function(){w.show();}
    }
    var thisPaletteWindow = new paletteWindow();
    thisPaletteWindow.show();
}

ScriptPanel();