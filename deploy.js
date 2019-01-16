var exeCute = require('exe');


var options = [];





var spUrlDev = "https://akuminadev02.sharepoint.com/sites/jeff";
var spUserDev = "jmccommas@akuminadev02.onmicrosoft.com";
var spPassDev = "!!akudev2019!!";

//options.push("masterpage");


options.push("js");
options.push("css");
//options.push("layouts");
//options.push("pages");
//options.push("controls");
//options.push("widgets");



//options.push("lists");
//options.push("layouts");
//options.push("contentfiles");
//options.push("imagefiles");
//options.push("updatelists");
//options.push("homepage");
//options.push("fonts");
//options.push("controls");
//options.push("templates");

var args = {
    "options": options.toString(),
    "envdir": "E:\\Akumina\\ToDoAkumina\\",
    "assetdirectory": "MyClient",
    "spdirectory": "VueToDOListWidgetAssets",
    "spurl": spUrlDev,
    "spuser": spUserDev,
    "sppassword": spPassDev
};

//use extra parameters if deploying different language widgets
//extra parameter -  langid 1033
//extra paramater -  langcode en-US

exeCute('.\\tools\\Akumina.SiteDeployer.exe options ' + args.options + ' envdir ' + args.envdir + ' assetdirectory ' + args.assetdirectory + ' spdirectory ' + args.spdirectory + ' spurl ' + args.spurl + ' spuser ' + args.spuser + ' sppassword ' + args.sppassword);
