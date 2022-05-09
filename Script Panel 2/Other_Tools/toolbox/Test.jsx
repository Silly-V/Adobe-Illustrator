/***
{
	"scriptName" : "PS User-Data",
	"note" : "Shows a printout of user data, from Photoshop."
}
***/
//@target photoshop
function testPSUserData () {

	function getSystemCommandStdout (command) {
    var stdout = null;
    var tempFile = new File(Folder.temp + "/jsx_compname_temp.txt");
    app.system(command + " > " + tempFile.fsName);
    if (tempFile.open("r")) {
      stdout = tempFile.read();
      tempFile.close();
      tempFile.remove();
    }
    return stdout;
  }

	function getUserData (
		scriptName,
		methodName,
	) {
		var data = {
			appName : BridgeTalk.appName,
			scriptName : testPSUserData.name,
			methodName : testPSUserData.name,
			computerName : ($.os.toLowerCase().indexOf("win") > -1) ? $.getenv("COMPUTERNAME") : getSystemCommandStdout ("hostname -s"),
			userName : $.getenv($.os.indexOf("Windows") > -1? "USERNAME" : "USER"),
			adobeUser  : app.userAdobeID,
			appVersion  : app.version,
			locale  : $.locale,
			timestamp : new Date().getTime(),
		};
		return data;
	}

	function getDataDisplay (data) {
		var msg = "";
		for (var all in data) {
			msg += (all + " : " + data[all] + "\n");
		}
		return msg;
	}

	alert(
		getDataDisplay(
			getUserData()
		)
	);
}

testPSUserData();