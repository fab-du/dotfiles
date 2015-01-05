// Copyright (c) 2012 Google Inc.
var ID = {
	body							: "body",
	titletext						: "titletext",
	titlefreetrialtext				: "titleFreeTrialText",
	titleOffline					: "titleOffline",
	summary							: "summary",
	summaryMessage					: "summaryMessage",
	rdpObject						: "chrome_rdp",
	prompt							: "prompt",
	black							: "black",
	home							: "home",
	contents						: "contents",
	mru								: "mru",
	menubutton						: "menubutton",
	sessionMenu						: "sessionmenu",
	session							: "session",
	ssl								: "ssl",
	userControls					: "controls",
	addressDiv						: "addressrow",
	module							: "module",
	payment							: "payment",
	activate						: "activate",
	activate_google					: "activate_google",
	activate_google_btn				: "activate_google_button",
	activate_google_next			: "activate_google_next",
	activate_username				: "activate_username",
	activate_username_next			: "activate_username_next",
	settings						: "settings",
	settings_label					: "settings_label",
	settings_link					: "settings_link",
	help_label						: "help_label",
	help_link						: "help_link",
	license_label					: "license_label",
	license_link					: "license_link",
	about_label						: "about_label",
	about_link						: "about_link",
	fullscreen_label                : "fullscreen_label",
	fullscreen_link                 : "fullscreen_link",
	email_table                     : "email_table",
	email_label                     : "email_label",
    freeTrial_label                 : "freeTrial_label",
	signout_label                   : "signout_label",
	signout_link                    : "signout_link",
	signin_label                    : "signin_label",
	signin_link                     : "signin_link",
	signingin_label                 : "signingin_label",
	txtCachedDataCompleted          : "txtCachedDataCompleted",
	bookmarks						: "bookmarks",
	addBookmark_link				: "addBookmark_link",
	divBookmark_link				: "divBookmark_link",
	settingsTabs					: "settingsTabs",
	settingsPages					: "settingsPages",
	customScreenSize				: "customScreenSize",
	menutab							: "menutab",
	simplePopup_message_section		: "simplePopup_message_section",
	popup_about						: "popup_about",
	popup_chromerdp_version_label	: "popup_chromerdp_version_label",
	popup_chromeos_version_label	: "popup_chromeos_version_label",
	popup_chrome_store_link			: "popup_chrome_store_link",
	popup_email_link				: "popup_email_link",
	popup_keyboard_layout           : "popup_keyboard_layout",
	testCompute_email_link			: "testCompute_email_link"
}

var popupIDs = {
	popup							: "popup",
	head							: "popup_header",
	body							: "popup_body",
	btnYes							: "popup_yes",
	btnSpacer						: "popup_btnSpacer",
	btnNo							: "popup_no",
	callback						: "popup_callback",
	optional_inputs					: "popup_optional_inputs",
	text1							: "popup_text1",
	password						: "popup_password",
	password_store					: "popup_password_store",
	domain							: "popup_domain",
	refreshlink						: "refreshlink", //Dynamicly added in the code behind as needed
	popup_auth_section				: "popup_auth_section",
	popup_auth_link					: "popup_auth_link"
}

var cssClass = {
	shown							: "shown",
	hidden							: "hidden",
	busy							: "busy",
	error							: "error",
	mruitem							: "mruitem",
	nodisplay						: "nodisplay",
	button							: "kd-button",
	homeOutToTop					: "homeouttotop",
	homeOutToTopFinal				: "homeouttotopfinal",
	homeInFromTop					: "homeinfromtop",
	homeInFromTopFinal				: "homeinfromtopfinal",
	homeOutToRight					: "homeouttoright",
	homeOutToRightFinal				: "homeouttorightfinal",
	homeInFromLeft					: "homeinfromleft",
	homeInFromLeftFinal				: "homeinfromleftfinal",
	opacity100						: "opacity100",
	opacity0_slow					: "opacity0_slow",
	opacity50						: "opacity50",
	opacity0						: "opacity0",
	marginbottom50					: "marginbottom50",
	marginbottom60					: "marginbottom60",
	scale0							: "scale0",
	scale100						: "scale100",
	darkgray						: "darkgray",
	notBookmarked					: "notBookmarked",
	paid							: "paid",
    simplePopup				        : "simplePopup",
    simplePopup_show: "simplePopup_show",
}

var input = {
	address							: "rdpaddress",
	menubutton						: "menubutton",
	cnctButton						: "button",
	sessionTab						: "tab",
	ScreenSize						: "ddlScreenSize",
	ScreenDepth						: "ddlColors",
	TimeZone						: "ddlTimeZone",
	payment_checkout				: "payment_checkout",
	Language						: "ddlLanguages",
	Keyboard                        : "ddlKeyboards",
	ComputerName                    : "txtRDPName",
	SSHTunnel						: "cbxSSHTunnel",
	StorePasswords					: "cbxStorePasswords",
	AllowNonNLAConnections			: "CheckboxAllowNonNLAConnections",
	UseTcpNoDelay                   : "CheckboxUseTcpNoDelay",
	AdminConsole                    : "cbxAdminConsole",
	DebugLevel						: "ddlDebugLevel",
	ShowWallpaper					: "cbxWallpaper",
	DisableFullWindowDrag           : "cbxDisableFullWindowDrag",
	DisableMenuAnimations           : "cbxDisableMenuAnimations",
	DisableTheming                  : "cbxDisableTheming",
	DisableCursorShadow             : "cbxDisableCursorShadow",
	DisableCursorBlinking           : "cbxDisableCursorBlinking",
	EnableFontSmoothing             : "cbxEnableFontSmoothing",
	EnableDesktopComposition        : "cbxEnableDesktopComposition",
	ScreenWidth                     : "txtScreenWidth",
	ScreenHeight					: "txtScreenHeight",
	MigrateButton					: "btnMigrateBookmarks",
	CertificateSelect				: "slctCertificate",
	CertificateDelete				: "btnRemoveCertificates",
	ClearSSLCache					: "btnClearSSLCache"
}

var uiStrings = {
	cnctEnded						: "Your connection to '{0}' has ended.",
	cnctError						: "Chrome RDP could not connect to '{0}'.  Please try again.",
	entryPrompt						: "Enter the computer name or address to connect to:",
	connect							: "Connect",
	disconnect						: "Connect",
	cancel							: "Cancel",
	connecting						: "Attempting to connect...",
	disconnecting					: "Disconnecting...",
	loading							: "Loading...",
	pluginError						: "Plugin not loaded",
	hotKeyPessed					: "A system key press has been detected. The user menu provides common system key commands.",
	licensePrompt					: "Verifying license...",
	redirecting						: "Redirecting to '{0}'...",
	redirectURL						: ""
}

var command = {
	load							: "LOAD",
	connect							: "CNCT",
	disconnect						: "DCNCT",
	alert							: "ALERT",
	status							: "STATUS",
	error							: "ERROR",
	environment						: "ENV",
	delimeter						: "|",
	delimeterArgs					: "\r\n",
	ssl								: "MSSL",
	sendInputEvents					: "sendInputEvents",
	systemKey						: "SYSKEY",
	comboKey						: "COMBOKEY",
	popup							: "POPUP",
	popupClose						: "POPUP_CLOSE",
	test							: "TEST",
	standby						    : "STANDBY",
	activate						: "ACTIVATE",
	activated						: "ACTIVATED",
	paid							: "ACTIVATEPAID",
	hasnotpaid						: "ACTIVATEHASNOTPAID",
	activate_failed					: "ACTIVATEFAILED",
	freetrial						: "ACTIVATEFREETRIAL",
	licenseSetURL					: "LICENSE_URL",
	licenseUpdate					: "LICENSE_UPDATE",
	licenseOffline					: "LICENSE_OFFLINE",
	clearSSLCache					: "CLEARSSLCACHE",
	redirect						: "REDIRECT",
	retry						    : "RETRY",
	clipboard_sync					: "CLIPBOARD_SYNC",
	clipboard_data					: "CLIPBOARD_DATA",
	clipboard_paste					: "CLIPBOARD_PASTE",
	clipboard_formatlist_ok			: "CLIPBOARD_FORMATLIST_OK",
	certs_request					: "REQ_CERTS",
	cert_delete						: "DEL_CERT",
    keyboardLayout					: "KEYBOARD_LAYOUT",
    keyboardLookup					: "KEYBOARD_LOOKUP",
    authorizing                     : "AUTHORIZING",
    authorized                      : "AUTHORIZED",
    signout                         : "SIGNOUT",
    signin                          : "SIGNIN",
    authOpened                      : "AUTH_OPENED",
    authClosed                      : "AUTH_CLOSED",
    screenEnable                    : "SCREEN_ENABLE",
	startedDrawing                  : "STARTED_DRAW",
	completedStandby				: "COMPLETED_STANDBY",
	viewScale						: "VIEW_SCALE"
};

var connectionStatus = {
	loading			:-3,
	error			:-2,
	disconnected	:-1,
	standby			:0,
	disconnecting	:1,
	connecting		:2,
	connected		:3,
	licenceCheck	:4,
    redirecting     :5
};

var intervals = {
	input		: null,
	altTab		: null,
	systemKey	: null
}

var popupState = {
	shrink	: 0,
	expand	: 1
};

var keyCodes = {
	tab		: 9,
	shift	: 16,
	ctrl	: 17,
	alt		: 18,
	pause	: 19,
	cpsLock	: 20,
	esc		: 27,
	pgup	: 33,
	pgdwn	: 34,
	end		: 35,
	home	: 36,
	left	: 37,
	up		: 38,
	right	: 39,
	down	: 40,
	prtScn	: 44,
	ins		: 45,
	del		: 46,
	rwin	: 91,
	lwin	: 92,
	num		: 144,
	F1		: 112,
	F2		: 113,
	F3		: 114,
	F4		: 115,
	F5		: 116,
	F6		: 117,
	F7		: 118,
	F8		: 119,
	F9		: 120,
	F10		: 121,
	F11		: 122,
	F12		: 123,
	scrollck: 145
}

var _debug = true;

function logMessage(e)
{
    if (_debug)
    {
        var caller = "chrome_rdp.js";

        if (arguments.callee.caller != null && arguments.callee.caller.name != null && arguments.callee.caller.name != "")
        {
            caller = arguments.callee.caller.name;
        }

        console.log("Function:" + caller + ";Message:" + e)
    }
}

function logException(e)
{
    //if (_debug)
    //{
    var caller = "chrome_rdp.js";

    if (arguments.callee.caller != null && arguments.callee.caller.name != null && arguments.callee.caller.name != "")
    {
        caller = arguments.callee.caller.name;
    }

    console.log("Function:" + caller + ";Exception:" + e)
    //}
}

var defaultPopupTitle = "RDP Alert";

var connection = connectionStatus.loading;
var connected = false;
var freeTrial = false;
var ChromerdpModule = null;
var googleOpener = null;
var host = "";
var signedin = false;
var signingin = false;
var signingout = false;
var verifyinglicense = false;
//var skipFirstClipboardSync = false;

var env = {};
env.width = screen.width;
env.height = screen.height;
env.bpp = screen.colorDepth;
env.debugLevel = -1;
//env.debugLevel = 1;
env.fastPathSupport = true;
env.quickConnect = false;
env.password = null;
env.userName = null;
env.computerName = "Chrome_RDP"
env.adminConsole = false
env.deviceScale = 1;
env.CSSScale = 1;

var RDPHelper = {};

var mruAvailable = false;
var defaultTitle = "Chrome RDP";

var fullscreenButtonNamingFunction = null;
var fullscreenAlert = null;
var userMenuControls = [
		/*ID,					Button name,			associated function,		Applied classes,		execute after creation*/
		["Minimize", "Minimize", minimizeScreen, [cssClass.button]],
		["Disconnect", "Disconnect", sendConnectRequest, [cssClass.button]],
		//["Full_Screen_OFF",		"Full Screen",			fullscreenToggle,			[cssClass.button]],
		//["Full_Screen_ON",		"Exit Full Screen",		fullscreenToggle,			[cssClass.button]],
		["Ctrl+Alt+Del",		"Ctrl+Alt+Del",			sendCtrlAltDel,				[cssClass.button]],
		["Switch_Task",			"Switch Task",			altTab,						[cssClass.button]],
		["Start_Menu",			"Start Menu",			sendStartMenu,				[cssClass.button]],
		["Print_Screen",		"Print Screen",			sendPrintScreen,			[cssClass.button]],
		["Alt+Print_Screen",	"Alt+Print Screen",		sendAltPrintScreen,			[cssClass.button]]
        ,["Keyboard_Layout",		"Keyboard Layout",		doKeyboardLayout,		    [cssClass.button]]
		//,["ClipboardTest",		"ClipboardTest",		syncClipboard,				[cssClass.button]]
]

var settingsObj = null;
var mruObj = null;
var bookmarkObj = null;
var storageObjectReady = 0;
var appWindow = chrome.app.window.current();
var appWindow_ID = appWindow.id;

if (appWindow_ID == null)
{
    logMessage("started window:id=null");
}
else
{
    logMessage("started window:id=" + appWindow_ID);
}

var appWindow_ScreenSettings = null;

function $(el) 
{
    try
    {
        return document.getElementById(el)
    }   
    catch (e)
    {
        logException(e);
    }
}

//RDP functionality

function updateLog(response) 
{
    try
    {
	    if (response.argument)
	    {
		    console.log(response.argument);
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function moduleDidLoad() 
{
    try
    {
        //logMessage("moduleDidLoad");

        ChromerdpModule = $(ID.rdpObject);
	    defaultTitle = document.title;
	    wireUI();
	    loadMRUs();
	    pageDidLoad();
	    setQueryStringParameters();
    }   
    catch (e)
    {
        logException(e);
    }
}

function handleMessage(message_event) 
{
    try
    {
	    if (message_event.data == null)
	    {
		    return;
	    }

	    var response = parseMessage(message_event.data);

	    if (response.command == command.load) 
	    {
		    moduleDidLoad();
	    } 
	    else if (response.command == command.alert) 
	    {
		    showAlert(response.argument);
	    } 
	    else if (response.command == command.status) 
	    {
		    updateLog(response);
	    } 
	    else if (response.command == command.disconnect) 
	    {
		    rdpDisconnect();
	    } 
	    else if (response.command == command.connect) 
	    {
            var arguments = response.argument.split(command.delimeterArgs);
            var userName = arguments[0];
            //alert("userName=" + userName);
            var password = arguments[1];
            //alert("password=" + password);

		    rdpConnected(userName, password);
	    }
		else if (response.command == command.viewScale)
		{
			var arguments = response.argument.split(command.delimeterArgs);
			env.deviceScale = parseFloat(arguments[0]);
			env.CSSScale = parseFloat(arguments[1]);
			resizehandler();
		}
	    else if (response.command == command.error) 
	    {
		    rdpError(response.argument);
	    } 
	    else if (response.command == command.ssl )
	    {
		    sslEnabled();
	    }
	    else if (response.command == command.clipboard_sync)
	    {
		    syncClipboard();
	    }
	    else if (response.command == command.clipboard_data)
	    {
		    fetchClipboardData(response.argument);
	    }
	    else if (response.command == command.clipboard_paste)
	    {
		    updateClipboard(response.argument.split(command.delimeterArgs));
	    }
	    else if (response.command == command.clipboard_formatlist_ok)
	    {
	    	endSyncClipboard();
	    }
	    else if (response.command == command.popup)
	    {
		    handlePopUpRequest(response.argument);
	    }
	    else if (response.command == command.popupClose)
	    {
		    popupPosition(popupState.shrink, true);
		    //popupResponse2(0, false);
	    }
	    else if (response.command == command.standby)
	    {
            toggleUI(connectionStatus.standby);

            screenEnable();

            $(input.address).blur();
	    }
	    else if (response.command == command.screenEnable)
	    {
	        if (!appWindow_StartedConnection)
	        {
	            screenEnable();
	        }
        }
	    else if (response.command == command.activate)
	    {
            doGoogleAuthentication(response.argument);
	    }
	    else if (response.command == command.licenseUpdate)
	    {
		    var xhr = new XMLHttpRequest();
		    xhr.open("GET", response.argument.replace('checkid_setup', 'checkid_immediate'), true);
		    xhr.onreadystatechange = function ()
		    {
			    if (xhr.readyState == 4)
			    {
				    var openidmode
				    if (xhr.status === 200)
				    {
					    //Parse response headers manually, to avoid a console error when fetching a header that doesn't exist
					    var i, len;
					    var headers = [];
					    var responseHeaders = xhr.getAllResponseHeaders().split(/\r?\n/);

					    for (i = 0, len = responseHeaders.length; i < len; i++)
					    {
						    if (responseHeaders[i])
						    {
							    var header = responseHeaders[i].split(": ");
							    headers[header[0]] = header[1];
						    }
					    }

					    openidmode = headers['openid.mode'];
				    }
				
				    if (xhr.status != 200 || !(openidmode && openidmode == 'id_res'))
				    {
					    sendMessage(command.activate_failed);
				    }
			    }
		    }
		    xhr.send();
	    }
	    else if (response.command == command.activated)
	    {
		    if (!freeTrial)
		    {
			    animateShowActivateButton(false);
		    }
            
            if ($(ID.black).classList.contains(cssClass.opacity50))
            {
		        $(ID.black).classList.remove(cssClass.opacity50);
		    }

            if (!$(ID.black).classList.contains(cssClass.opacity0))
            {
                $(ID.black).classList.add(cssClass.opacity0);
		    }

		    toggleUI(connectionStatus.standby);

		    if (env.quickConnect)
		    {
			    cnctButtonClick();
		    }
	    }
	    else if (response.command == command.freetrial)
	    {
		    $(ID.titlefreetrialtext).classList.remove(cssClass.nodisplay);
		    $(ID.contents).classList.remove(cssClass.paid);
		    $(ID.payment).classList.add(cssClass.darkgray);
		    freeTrial = true;
	    }
	    else if (response.command == command.hasnotpaid)
	    {
		    animateShowActivateButton(true);
		    $(ID.payment).classList.remove(cssClass.nodisplay);
		    $(ID.activate_google_btn).classList.add(cssClass.nodisplay);
		    $(ID.activate).classList.add(cssClass.marginbottom50);
	    }
	    else if (response.command == command.paid)
	    {
		    freeTrial = false;
		    $(ID.titlefreetrialtext).classList.add(cssClass.nodisplay);
		    $(ID.contents).classList.add(cssClass.paid);
		    $(ID.payment).classList.remove(cssClass.darkgray);
	    }
	    else if (response.command == command.licenseSetURL) 
	    {
		    setLicenseURL(response.argument);
	    } 
	    else if (response.command == command.clearSSLCache)
	    {
		    //The process has already completed, but it finishes almost instantly.  To give the user a since of progress delay the updates a bit
		    //setTimeout(setPromptTextFinishDelayed, 1000);
		    //setTimeout(standByUI, 5000);
	    }
	    else if (response.command == command.licenseOffline)
	    {
		    $(ID.titleOffline).classList.remove(cssClass.nodisplay);
	    }
	    else if (response.command == command.redirect)
	    {
		    uiStrings.redirectURL = response.argument;

		    toggleUI(connectionStatus.redirecting);
		    sendMessage(command.redirect);
	    }
	    else if (response.command == command.retry)
	    {
            sendMessage(command.retry);
	    }
	    else if (response.command == command.certs_request)
	    {
		    returnedCertificateHandler(response.argument);
	    }
	    else if (response.command == command.cert_delete)
	    {
		    returnedCertificateDeleteHandler();
		}
        else if (response.command == command.authorizing)
        {        
            
        }
        else if (response.command == command.authorized)
        {
            var arguments = response.argument.split(command.delimeterArgs);

            var authenticated = arguments[0];
            var daysLeftInFreeTrial = arguments[1];
            var email = arguments[2];
            var hasReceivedResponse = arguments[3];

            signingin = false;
            signingout = false;
            verifyinglicense = false;

            if (authenticated == "1")
            {
                signedin = true;
            }
            else
            {
                signedin = false;
            }

            if (hasReceivedResponse == "1")
            {
                $("auth_table").style.display = "table";
            }
            else
            {
                $("auth_table").style.display = "none";
            }
                                  
            $(ID.signin_label).style.display = "none";
            $(ID.signin_link).style.display = "none";
            $(ID.signingin_label).style.display = "none";
            $(ID.signout_label).style.display = "none";
            $(ID.signout_link).style.display = "none";                  
            $(ID.email_label).innerHTML = "";
            $(ID.email_label).style.display = "none";
            $(ID.freeTrial_label).innerHTML = "";
            $(ID.freeTrial_label).style.display = "none";
            
            if (email.length > 0)
            {
                $(ID.email_label).innerHTML = email + "<br />";
                $(ID.email_label).style.display = "inline";
            }
                
            if (daysLeftInFreeTrial != "0" || authenticated == "1")
            {
                if (daysLeftInFreeTrial > 0)
                {
                    $(ID.freeTrial_label).innerHTML = "<a id='popup_chrome_store_link2' href='https://gauth.fusionlabs.net/license_info.aspx' target='_blank' style='cursor: pointer;'>" + daysLeftInFreeTrial + " day(s) left in free trial</a><br />";
                    $(ID.freeTrial_label).style.display = "inline";
                }
            }
            else
            {
                if (email.length > 0)
                {
                    $(ID.freeTrial_label).innerHTML = "<a id='popup_chrome_store_link2' href='https://gauth.fusionlabs.net/license_info.aspx' target='_blank' style='cursor: pointer;'>Free trial has expired</a><br />";
                    $(ID.freeTrial_label).style.display = "inline";
                }
            }

            if (signedin)
            {
                if (connection == connectionStatus.redirecting ||
                    connection == connectionStatus.connecting)
                {
                    $(ID.signout_label).style.display = "inline";
                    $(ID.signout_link).style.display = "none";
                }
                else
                {
                    $(ID.signout_label).style.display = "none";
                    $(ID.signout_link).style.display = "inline";
                }
            }
            else
            {
                if (connection == connectionStatus.redirecting ||
                    connection == connectionStatus.connecting)
                {
                    $(ID.signin_label).style.display = "inline";
                    $(ID.signin_link).style.display = "none";
                }
                else
                {
                    $(ID.signin_label).style.display = "none";
                    $(ID.signin_link).style.display = "inline";
                }
            }
        }
        else if (response.command == command.signin)
        {        
            var interval = response.argument;

            if (!isNumber(interval))
            {
                isNumber = 600;
            }

            setTimeout(disableScreen, isNumber);
        }
        else if (response.command == command.keyboardLookup)
        {
            inputOverrideKeyCurrentValue_Lookup(response.argument);
        }
    }   
    catch (e)
    {
        updateLog(e);
    }
}

function isNumber(n) 
{
   if (n == null || n == "nothing" || n == "")
        return false;
     
   return !isNaN(parseFloat(n)) && isFinite(n);
}

function signoutLinkClick() 
{
    try
    {
	    var url = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://gauth.fusionlabs.net/Logout/license_logout2.aspx?si=" + _instanceUUID;
        
        doGoogleAuthentication(url);
       
        signingout = true;

        $(ID.signingin_label).innerHTML = "Signing out...";
        $(ID.signingin_label).style.display = "inline";
        
	    sendMessage(command.signout);
    }   
    catch (e)
    {
        logException(e);
    }
}

function startSignIn() 
{
    try
    {
        popupPosition(popupState.shrink);

        screenDisable();

        signedin = false;
        signingin = false;
        signingout = false;

        $("auth_table").style.display = "table";
        $(ID.signin_label).style.display = "none";
        $(ID.signin_link).style.display = "none";
        $(ID.signingin_label).style.display = "none";
              
        $(ID.email_label).innerHTML = "";
        $(ID.email_label).style.display = "none";
       
        $(ID.freeTrial_label).innerHTML = "";
        $(ID.freeTrial_label).style.display = "none";
        
        $(ID.signout_label).style.display = "none";
        $(ID.signout_link).style.display = "none";
    }   
    catch (e)
    {
        logException(e);
    }
}

function signinLinkClick() 
{
    try
    {
        var userAgent = window.navigator.userAgent;

        var index = userAgent.indexOf(" CrOS ", 0);

        var url = "";

        if (index > -1)
        {
            logMessage("Bypassing force login - " + userAgent);
        
            url = "https://gauth.fusionlabs.net/Logout/sign_in.aspx?si=" + _instanceUUID;
        }
        else
        {
            logMessage("Forcing login - " + userAgent);

            url = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=https://gauth.fusionlabs.net/Logout/sign_in.aspx?si=" + _instanceUUID;
        }
                
        doGoogleAuthentication(url);
        
        signingin = true;
        
        $(ID.signingin_label).innerHTML = "Signing in...";
        $(ID.signingin_label).style.display = "inline";
        
        sendMessage(command.signin);
    }   
    catch (e)
    {
        logException(e);
    }
}

function doGoogleAuthentication(urlToOpen)
{
    try
    {
        startSignIn();
        
        googleOpener = RDPHelper.popupManager.createPopupOpener(
		{
			'urlToOpen': urlToOpen,
            'onOpenHandler' : doGoogleAuthentication_Open,
		    'onCloseHandler' : doGoogleAuthentication_Close
		});

        googleOpener.popup(450, 500); 
	}   
    catch (e)
    {
        logException(e);
    }
}

function doGoogleAuthentication_Open()
{
    try
    {
        sendMessage(command.authOpened);
    }   
    catch (e)
    {
        logException(e);
    }
}

function doGoogleAuthentication_Close()
{
    try
    {
        googleOpener = null;
        signingin = false;
        signingout = false;
        verifyinglicense = true;

        $(ID.signingin_label).innerHTML = "Verifying license...";
               
        if (_continueConnect)
        {
            _continueConnect = false;

            cnctButtonClick();

            return;
        }

        sendMessage(command.authClosed);
    }   
    catch (e)
    {
        logException(e);
    }
}

function setPromptTextFinishDelayed()
{
    try
    {
	    //$(ID.prompt).innerText = "Cleared saved Remote Identities";
	    //$(ID.contents).classList.remove(cssClass.busy);
    }   
    catch (e)
    {
        logException(e);
    }
}

function popupAdvancedTab()
{
    try
    {
        logMessage("popupAdvancedTab");

        popupResponse(1);
    }
    catch (e)
    {
        logException(e);
    }
}

function handlePopUpRequest(argument)
{
    try
    {
        var popupArguments = argument.split(command.delimeter);

        var callback, message, title, agreebutton, disagreebutton, optionalInputs;
	
        callback = popupArguments[0];
        message = popupArguments[1];
        title = popupArguments[2];
        agreebutton = popupArguments[3];
        disagreebutton = popupArguments[4];

        var response = 0;

        if (popupArguments[5] && popupArguments[5].length > 0)
        {
            optionalInputs = popupArguments[5].split(command.delimeterArgs);

            if (callback == 2 && optionalInputs.length >= 9 && allow_appWindow_AutoLogin)
            {
                if (optionalInputs[5].length > 0 && // username
                    optionalInputs[8].length > 0) // password
                {
                    response = 1;
                }
            }
        }

        if (callback == 2)
        {
            allow_appWindow_AutoLogin = false;
        }

        //if (message.indexOf("link under the 'Advanced' tab") > 0)
        //{
         //   message += "<br><a href='javascript:popupAdvancedTab();'>Click here</a>";
        //}

        if (callback == 2 && response != 0)
        {
            showPopUp2(callback, message, title, agreebutton, disagreebutton, optionalInputs, response);
        }
        else
        {
            showPopUp(callback, message, title, agreebutton, disagreebutton, optionalInputs);
        }
    }   
    catch (e)
    {
        logException(e);
    }
}

function parseMessage(message)
{
    try
    {
	    if (message == null)
	    {
		    return;
	    }
	    
        var splitPoint;
	    
        try
	    {
		    splitPoint = message.indexOf(command.delimeter);
	    }
	    catch (err)
	    {
		    splitPoint = -1;
	    }
	    
        var string_cmd = "";
	    var string_arg = "";
	
	    if (splitPoint > -1)
	    {
		    string_cmd = message.substring(0, splitPoint);
		    string_arg = message.substring(splitPoint + 1);
	    } 
        else
	    {
		    string_cmd = message;
	    }
	
	    return {command: string_cmd, argument: string_arg};
    }   
    catch (e)
    {
        logException(e);
    }
}

function join(args)
{
    try
    {
	    if (typeof args === "object")
	    {
		    return args.join(command.delimeterArgs);	
	    }
	    else
	    {
		    return args;
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendMessage(commandType, message)
{
    try
    {
	    if (ChromerdpModule != null)
	    {
		    if (blankNullorUndefined(message))
		    {
			    message = [];
		    }

		    args = join(message);

		    ChromerdpModule.postMessage(commandType + command.delimeter + args)
		
            return true;
	    }
	    else
	    {
		    showAlert(uiStrings.pluginError);
	    }
	
	    return false;
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendConnectMessage()
{
    try
    {
	    sendMessage(command.connect);
    }   
    catch (e)
    {
        logException(e);
    }
}

var appWindow_StartedConnection = false;
var allow_appWindow_AutoLogin = false;

function sendConnectRequest()
{
    try
    {
        keyboardLayout_Load(settingsObj.values.language, sendConnectRequest_LoadCallback);
    }
    catch (e)
    {
        logException(e);
    }
}

function sendConnectRequest_LoadCallback()
{
    try
    {
        //logMessage("sendConnectRequest");

        if (blankNullorUndefined($(input.address).value))
        {
            if (_isComputeEngine)
            {
                rdpError("This version of Chrome RDP is configured to run only with Google Compute Engine.");
            }
            else
            {
                rdpError("Computer name or address is blank. Please try again.");
            }
            return;
        }

        appWindow_StartedConnection = true;

        screenDisableResizing();
        screenDisable();

        if (ChromerdpModule != null)
        {
            if (connection < 1)
            {
                if (invalidAddress())
                {
                    rdpError();
                    return;
                }

                var addressInput = $(input.address);
                addressInput.value = addressInput.value.trim();

                toggleUI(connectionStatus.connecting);

                if (_isComputeEngine)
                {
                    allow_appWindow_AutoLogin = true;
                }

                setStartScreen();
                //setScreenSize();
                setScreenDepth();
                setLanguage();
                sendEnvironment();

                var delay = 100;

                if (env.quickConnect)
                {
                    delay = 500;
                    env.quickConnect = false;
                    env.userName = null;
                    env.password = null;
                }

                setTimeout(sendConnectMessage, delay);
            }
            else
            {
                toggleUI(connectionStatus.disconnecting);
                sendMessage(command.disconnect)
            };
        }
        else
        {
            showAlert(uiStrings.pluginError);

            return false;
        }
    }
    catch (e)
    {
        logException(e);
    }
}

function invalidAddress()
{
    try
    {
	    var address = $(input.address).value;
	    address = address.toLowerCase();
	    
        var regex = new RegExp( "^127\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}|localhost|::[0-9]+$");
	    var match = regex.test(address);

	    if (match)
	    {
		    if (settingsObj.values.allowssh == "false" || address.indexOf(":") < 1)
		    {
			    return true;
		    }
	    }
	}   
    catch (e)
    {
        logException(e);
    }
}

function rdpDisconnect() 
{
    try
    {
	    if (connection) 
	    {
		    connection = connectionStatus.disconnected;
		    clearInterval(intervals.input);
	    };

	    toggleUI();
	    screenEnable();
	    screenEnableResizing();

	    appWindow_StartedConnection = false;
    }
    catch (e)
    {
        logException(e);
    }
}

function sendInputEventMessage()
{
    try
    {
	    sendMessage(command.sendInputEvents);
    }   
    catch (e)
    {
        logException(e);
    }
}

function getZoomPercent()
{
	try
	{
		return env.CSSScale;
	}
	catch (e)
	{
		logException(e);
	}
}

function adjustChromeRDPObjDeminsions()
{
	try
	{
		var screenCssPixelRatio = getZoomPercent();

		var chromeRdpObj = $(ID.rdpObject);
		var targetWidth = Math.floor(env.width / screenCssPixelRatio);
		var targetHeight = Math.floor(env.height / screenCssPixelRatio);
		var roundingError = Math.floor(screenCssPixelRatio * 1000) / 1000

		while (Math.floor(targetWidth * roundingError) < env.width)
		{
			targetWidth++;
		}

		while (Math.floor(targetHeight * roundingError) < env.height)
		{
			targetHeight++;
		}

		chromeRdpObj.width = targetWidth;
		chromeRdpObj.height = targetHeight;
		var chromeModule = $(ID.module);
		chromeModule.style.width = chromeRdpObj.width + "px";
	}
    catch (e)
    {
		logException(e);
	}
}

function rdpConnected(username, password) 
{
    try
    {
	    adjustChromeRDPObjDeminsions();

	    intervals.input = setInterval(sendInputEventMessage, 50);

	    connected = true;
	    saveMRU($(input.address).value, username, password);
	    toggleUI(connectionStatus.connected);
	    resizehandler();
    }   
    catch (e)
    {
        logException(e);
    }
}

function rdpError(message) 
{
    try
    {
	    var summary = $(ID.summary);
	    var summaryMessage = $(ID.summaryMessage);
	
	    if (message)
	    {
		    summaryMessage.innerText = message;
	    } 
        else 
	    {
		    summaryMessage.innerText = uiStrings.cnctError.format($(input.address).value)
	    }
	
	    summary.classList.add(cssClass.error);
	    summary.style.opacity = 1;
	
	    toggleUI(connectionStatus.error);
	    screenEnable();
	    screenEnableResizing();

	    appWindow_StartedConnection = false;
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendEnvironment()
{
    try
    {
        env.debugLevel = settingsObj.values.debugLevel;

        //logMessage("env.width=" + env.width + ";env.height=" + env.height + ";");

        var timeZone = settingsObj.values.timeZone;

        if (timeZone == -1)
        {
            var d = new Date();

            timeZone = d.getTimezoneOffset();
        }

        var envArray =
	    [
		    env.width,
		    env.height,
		    env.bpp,
		    env.debugLevel - 1, // 'Off' was specified as 0 when this on implimented in the JS settings dialog and was released into the wild, but off is actually -1
		    Number(env.fastPathSupport),
		    Number(env.quickConnect),
		    $(input.address).value,
		    getUserNameForAddress($(input.address).value),
		    env.language,
		    settingsObj.values.computername,
		    settingsObj.values.showwallpaper,
		    env.adminConsole.toString,
		    getPasswordForAddress($(input.address).value),
            settingsObj.values.storepasswords,
            settingsObj.values.allowNonNLA,
            settingsObj.values.useTcpNoDelay,
            _instanceUUID,
            window.navigator.userAgent,
            settingsObj.values.enableFontSmoothing,
            settingsObj.values.enableDesktopComposition,
            settingsObj.values.disableFullWindowDrag,
            settingsObj.values.disableMenuAnimations,
            settingsObj.values.disableTheming,
            settingsObj.values.disableCursorShadow,
            settingsObj.values.disableCursorBlinking,
            env.keyboard,
            timeZone
	    ];

	    sendMessage(command.environment, envArray);
    }   
    catch (e)
    {
        logException(e);
    }
}

function setQueryStringParameters()
{
    try
    {
	    //&debug=true&fastpath=false
	    var mod = document.location.search;
	    if (mod)
	    {
		    mod = mod.substring(1);
		    var modPairs=mod.split("&");
		    for (i=0; i < modPairs.length; i++)
		    {
			    var argPair = modPairs[i].split("=")
			
			    var arg = argPair[0];
			    var val = argPair[1];

			    switch (arg.toLowerCase())
			    {
				    case "debug":
					    if (!isNaN(val))
					    {
						    env.debugLevel = val;
					    }
					    break;
				    case "fastpath":
					    if (val.toLowerCase() == "false" || val == "0")
					    {
						    env.fastPathSupport = false;
					    }
					    break;
			    }
		    }
	    }

	    setAddressFromHashtag();
    }   
    catch (e)
    {
        logException(e);
    }
}

function changeButtonText()
{
    try
    {
	    if (connection == connectionStatus.connecting) 
	    {
		    $(input.cnctButton).innerHTML = uiStrings.cancel;
	    } 
        else if (connection == connectionStatus.disconnected) 
	    {
		    $(input.cnctButton).innerHTML = uiStrings.connect;
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function pageDidLoad() 
{
    try
    {
        //logMessage("pageDidLoad");

        initComputeEngine();

	    if (ChromerdpModule == null  || storageObjectReady < 1) 
	    {
		    connection = connectionStatus.loading;
		
            resizehandler();	
            toggleUI();
        } 
        else 
	    {
		    //connection = connectionStatus.licenceCheck;
            connection = connectionStatus.standby;
    	    resizehandler();
	        toggleUI();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function pageDidUnload() 
{
    try
    {
        //logMessage("pageDidUnload");

	    clearInterval(intervals.input);
    }   
    catch (e)
    {
        logException(e);
    }
}

//UI and interaction
function toggleUI(changeStatus) 
{
    try
    {
	    if (typeof changeStatus != 'undefined')
	    {
		    connection = changeStatus;
	    }
	
	    if (connection == connectionStatus.error)
	    {
		    standByUI();
		    connection = connectionStatus.standby;
		    if (connected)
		    {
			    animateReturnToStandByUI();
		    }
	    } else if (connection == connectionStatus.loading)
	    {
		    $(ID.prompt).innerHTML = uiStrings.loading;

	    } else if (connection == connectionStatus.licenceCheck)
	    {
		    //standByUI();
		    //$(ID.contents).classList.add(cssClass.busy);
		    //$(ID.prompt).innerHTML = uiStrings.licensePrompt;
		    $(ID.prompt).innerHTML = uiStrings.loading;
        }
	    else if (connection == connectionStatus.standby)
	    {
		    standByUI();
	    } else if (connection == connectionStatus.disconnected)
	    {
		    standByUI();
		    connection = connectionStatus.standby;
		    if (connected)
		    {
			    animateReturnToStandByUI();
		    }
		
	    } else if (connection == connectionStatus.disconnecting)
	    {
		    $(ID.prompt).innerHTML = uiStrings.disconnecting;
	    } 
        else if (connection == connectionStatus.connecting)
	    {
            $(ID.settings_label).style.display = "inline";
            $(ID.settings_link).style.display = "none";
            $(ID.help_label).style.display = "inline";
            $(ID.help_link).style.display = "none";
            $(ID.license_label).style.display = "inline";
            $(ID.license_link).style.display = "none";
            $(ID.about_label).style.display = "inline";
            $(ID.about_link).style.display = "none";
            $(ID.fullscreen_label).style.display = "inline";
            $(ID.fullscreen_link).style.display = "none";

            if (signingin)
            {
                $(ID.signingin_label).innerHTML = "Signing in...";
            }
            else if (signingout)
            {
                $(ID.signingin_label).innerHTML = "Signing out...";
            }
            else if (verifyinglicense)
            {
                $(ID.signingin_label).innerHTML = "Verifying license...";
            }
            else if (!signedin)
            {
                $(ID.signin_label).style.display = "inline";
                $(ID.signin_link).style.display = "none";
            }
            else
            {
                $(ID.signout_label).style.display = "inline";
                $(ID.signout_link).style.display = "none";
            }

            $(ID.summaryMessage).innerText = "";
            $(ID.summary).classList.remove(cssClass.error);
		    $(ID.summary).classList.remove(cssClass.notBookmarked);
	        $(ID.divBookmark_link).style.display = "none";
            $(input.address).blur();
		    $(input.address).disabled = true;
            $(ID.contents).classList.add(cssClass.busy);
		    $(ID.prompt).innerHTML = uiStrings.connecting;
            $(input.menubutton).disabled = true;
		    //$(input.menubutton).classList.remove(cssClass.button);
		    $(input.cnctButton).disabled = true;
            $(input.cnctButton).classList.remove(cssClass.button);
		    $(input.cnctButton).innerHTML = uiStrings.disconnect;
		    $(ID.mru).className = "";
	    } 
        else if (connection == connectionStatus.connected)
	    {
		    hideObject(ID.home);
		    $(ID.summary).classList.remove(cssClass.error);
		    showObject(ID.session);
		    animateEnterStandByUI();
            host = $(input.address).value;
		    document.title = host + " - " + defaultTitle;
		    giveFocus(ID.rdpObject);
		    handleUIKeys(true);
	    }
        else if (connection == connectionStatus.redirecting)
	    {
            $(ID.settings_label).style.display = "inline";
            $(ID.settings_link).style.display = "none";
            $(ID.help_label).style.display = "inline";
            $(ID.help_link).style.display = "none";
            $(ID.license_label).style.display = "inline";
            $(ID.license_link).style.display = "none";
            $(ID.about_label).style.display = "inline";
            $(ID.about_link).style.display = "none";
            $(ID.fullscreen_label).style.display = "inline";
            $(ID.fullscreen_link).style.display = "none";

            if (signingin)
            {
                $(ID.signingin_label).innerHTML = "Signing in...";
            }
            else if (signingout)
            {
                $(ID.signingin_label).innerHTML = "Signing out...";
            }
            else if (verifyinglicense)
            {
                $(ID.signingin_label).innerHTML = "Verifying license...";
            }
            else if (!signedin)
            {
                $(ID.signin_label).style.display = "inline";
                $(ID.signin_link).style.display = "none";
            }
            else
            {
                $(ID.signout_label).style.display = "inline";
                $(ID.signout_link).style.display = "none";
            }

            $(ID.summaryMessage).innerText = "";
            $(ID.summary).classList.remove(cssClass.error);
		    $(ID.summary).classList.remove(cssClass.notBookmarked);
            $(ID.divBookmark_link).style.display = "none";
	        $(input.address).blur();
		    $(input.address).disabled = true;
            $(ID.contents).classList.add(cssClass.busy);
		    $(ID.prompt).innerHTML = uiStrings.redirecting.format(uiStrings.redirectURL);
		    $(input.menubutton).disabled = true;
		    //$(input.menubutton).classList.remove(cssClass.button);
		    $(input.cnctButton).disabled = true;
            $(input.cnctButton).classList.remove(cssClass.button);
		    $(input.cnctButton).innerHTML = uiStrings.disconnect;
		    $(ID.mru).className = "";
	    } 
    }   
    catch (e)
    {
        logException(e);
    }
}

function screenDisable()
{
    try
    {
        if ($(ID.black).classList.contains(cssClass.opacity0_slow))
        {
		    $(ID.black).classList.remove(cssClass.opacity0_slow);
		}

        if ($(ID.black).classList.contains(cssClass.opacity0))
        {
		    $(ID.black).classList.remove(cssClass.opacity0);
		}

        if (!$(ID.black).classList.contains(cssClass.opacity50))
        {
            $(ID.black).classList.add(cssClass.opacity50);
		}
    }   
    catch (e)
    {
        logException(e);
    }
}

function screenEnable()
{
    try
    {   
        //if (signingin)
        //    return;

        if (connection != connectionStatus.connected &&
            connection != connectionStatus.standby &&
            connection != connectionStatus.disconnected &&
            connection != connectionStatus.disconnecting &&
            connection != connectionStatus.error)
        {
            return;
        }

	    if ($(ID.black).classList.contains(cssClass.opacity0_slow))
        {
		    $(ID.black).classList.remove(cssClass.opacity0_slow);
		}

        if ($(ID.black).classList.contains(cssClass.opacity50))
        {
		    $(ID.black).classList.remove(cssClass.opacity50);
		}

        if (!$(ID.black).classList.contains(cssClass.opacity0))
        {
            $(ID.black).classList.add(cssClass.opacity0);
		}

        setTimeout(animateReturnToStandByUIDelayedActions2, 100);

        $(ID.contents).style.display = "";
    }
    catch (e)
    {
        logException(e);
    }
}

function animateEnterStandByUI()
{
    try
    {   
        //if (signingin)
        //    return;

	    $(ID.black).classList.remove(cssClass.opacity0);
        $(ID.black).classList.remove(cssClass.opacity50);
        $(ID.black).classList.add(cssClass.opacity100);

        $(ID.session).classList.add(cssClass.shown);

        setTimeout(animateEnterStandByUIDelayedActions1, 500);
    }   
    catch (e)
    {
        logException(e);
    }
}

function animateEnterStandByUIDelayedActions1()
{
    try
    {   
	   //if (signingin)
       //    return;

       $(ID.contents).style.display = "none";

       $(ID.black).classList.add(cssClass.opacity0_slow);
	   $(ID.black).classList.remove(cssClass.opacity100);

	   setTimeout(animateReturnToStandByUIDelayedActions2, 100);

       sendMessage(command.completedStandby);
    }   
    catch (e)
    {
        logException(e);
    }
}

function animateReturnToStandByUIDelayedActions0()
{
    try
    {   
        $(ID.black).classList.add(cssClass.opacity100);
        $(ID.session).classList.remove(cssClass.shown);
        
        setTimeout(animateReturnToStandByUIDelayedActions1, 500);
	}   
    catch (e)
    {
        logException(e);
    }
}

function animateReturnToStandByUIDelayedActions1()
{
    try
    {   
        showObject(ID.home);
	    hideObject(ID.session);
	 	    
        $(ID.black).classList.add(cssClass.opacity0_slow);
	   
        setTimeout(screenEnable, 100);
    }   
    catch (e)
    {
        logException(e);
    }
}

function animateReturnToStandByUIDelayedActions2()
{
    try
    {
	    //if (signingin)
        //    return;

        if (_popupState == popupState.expand)
        {
            screenDisable();

            return;
        }

        //hideObject(ID.black);
        $(ID.black).classList.remove(cssClass.opacity100);
        $(ID.black).classList.remove(cssClass.opacity0_slow);
        $(ID.black).classList.remove(cssClass.opacity50);
        $(ID.black).classList.remove(cssClass.opacity0);
    }
    catch (e)
    {
        logException(e);
    }
}

function animateReturnToStandByUI()
{
    try
    {
	    document.webkitCancelFullScreen();
	    endAltTab();

        animateReturnToStandByUIDelayedActions0();

	    var address = $(input.address).value;

	    $(ID.summaryMessage).innerText = uiStrings.cnctEnded.format(address);

	    $(ID.summary).style.opacity = 1;
	    $(ID.sessionMenu).classList.remove(cssClass.shown);
	    host = "";
	    loadMRUs();
	    connected = false;

	    //if (RDPHelper.bookmark.exists(address))
	    if (bookmarkObj.ConnectionExists(address) || _isComputeEngine)
	    {
		    $(ID.summary).classList.remove(cssClass.notBookmarked);
	        $(ID.divBookmark_link).style.display = "none";
        }
	    else
	    {
		    $(ID.summary).classList.add(cssClass.notBookmarked);
	        $(ID.divBookmark_link).style.display = "block";
        }
    }   
    catch (e)
    {
        logException(e);
    }
}

var addBookmark_address;
var addBookmark_username;
var addBookmark_password;

function addBookmark()
{
    try
    {
        var address = $(input.address).value;
        var username = getUserNameForAddressFromMRUs(address);
        var password = getPasswordForAddressFromMRUs(address);

        addBookmark_address = address;
        addBookmark_username = username;
        addBookmark_password = password;

        chrome.storage.sync.get(bookmarkObj.key, addBookmarkCallback);

	    //bookmarkObj.AddConnection(address, "", "", username, password);
	    //RDPHelper.bookmark.addBookmark($(input.address).value);

        //$(ID.divBookmark_link).style.display = "none";

        //simplePopup_showOK("Added bookmark " + address, null);
    }   
    catch (e)
    {
        logException(e);
    }
}

function addBookmarkCallback(result)
{
    try
    {
        bookmarkObj.Populate(result);

        var address = addBookmark_address;
        var username = addBookmark_username;
        var password = addBookmark_password;

        addBookmark_address = null;
        addBookmark_username = null;
        addBookmark_password = null;

        bookmarkObj.AddConnection(address, "", "", username, password);
        //RDPHelper.bookmark.addBookmark($(input.address).value);

        $(ID.divBookmark_link).style.display = "none";

        //simplePopup_showOK("Added bookmark " + address, null);
    }
    catch (e)
    {
        logException(e);
    }
}


function bookmarkHelperCallback()
{
    try
    {
	    var address = $(input.address).value;
	    $(ID.summary).classList.remove(cssClass.notBookmarked)
        $(ID.divBookmark_link).style.display = "none";
    
	    if (address.length > 0 && !_isComputeEngine)
	    {
		    //if ($(ID.summaryMessage).innerText == uiStrings.cnctEnded.format(address) && !RDPHelper.bookmark.exists(address))
		    if ($(ID.summaryMessage).innerText == uiStrings.cnctEnded.format(address) && !bookmarkObj.ConnectionExists(address) || invalidAddress(address))
		    {
			    $(ID.summary).classList.add(cssClass.notBookmarked)
		        $(ID.divBookmark_link).style.display = "block";
            }
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

//function licenseAuthorize()
//{
//xmlhttp.open("POST","ajax_test.asp",true);
//xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//xmlhttp.send("fname=Henry&lname=Ford");
//}

function standByUIDelayedActions()
{
    try
    {
	    $(ID.session).style.overflow = 'auto';
	    setTimeout(focusOnAddressBar, 100);
    }   
    catch (e)
    {
        logException(e);
    }
}

function focusOnAddressBar()
{
    try
    {
	    if (!env.quickConnect)
	    {
		    giveFocus(input.address);	
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function standByUI()
{
    try
    {
        //logMessage("standByUI");

        $(ID.settings_label).style.display = "none";
        $(ID.settings_link).style.display = "inline";
        $(ID.help_label).style.display = "none";
        $(ID.help_link).style.display = "inline";
        $(ID.license_label).style.display = "none";
        $(ID.license_link).style.display = "inline";
        $(ID.about_label).style.display = "none";
        $(ID.about_link).style.display = "inline";
        $(ID.fullscreen_label).style.display = "none";
        $(ID.fullscreen_link).style.display = "inline";

        if (signingin)
        {
            $(ID.signingin_label).innerHTML = "Signing in...";
        }
        else if (signingout)
        {
            $(ID.signingin_label).innerHTML = "Signing out...";
        }
        else if (verifyinglicense)
        {
            $(ID.signingin_label).innerHTML = "Verifying license...";
        }
        else if (!signedin)
        {
            $(ID.signin_label).style.display = "none";
            $(ID.signin_link).style.display = "inline";
        }
        else
        {
            $(ID.signout_label).style.display = "none";
            $(ID.signout_link).style.display = "inline";
        }
             
        $(ID.contents).classList.remove(cssClass.busy);

        if (!_isComputeEngine)
        {
            $(input.address).disabled = false;
            $(input.menubutton).disabled = false;
            $(input.menubutton).classList.add(cssClass.button);
        }

        $(input.cnctButton).disabled = false;
	    $(input.cnctButton).classList.add(cssClass.button);
	    $(input.cnctButton).innerHTML = uiStrings.connect;
	    $(ID.prompt).innerHTML = uiStrings.entryPrompt;
	    handleUIKeys(false);
	    document.title = defaultTitle;
	    setTimeout(standByUIDelayedActions, 500);
    }   
    catch (e)
    {
        logException(e);
    }
}

function giveFocus(targetId)
{
    try
    {
	    var target = $(targetId)
	    target.tabIndex = 0;
	    target.focus();
    }   
    catch (e)
    {
        logException(e);
    }
}

function loadMRUs()
{
    try
    {
	    var addressList = mruObj.getMRUList();
	    var mruList = $(ID.mru);
	    mruList.innerHTML = "";
		
	    mruAvailable = (addressList.length > 0);
	
	    var maxDisplay = 5;

	    if (maxDisplay > addressList.length)
	    {
		    maxDisplay = addressList.length;
	    }

	    for (i = 0; i < maxDisplay; i++)
	    {
		    var menuNode = document.createElement("div")
		    menuNode.classList.add(cssClass.mruitem);
		    menuNode.innerText = addressList[i];
		    menuNode.addEventListener('click', mruListItemClick);
		    mruList.appendChild(menuNode);
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function saveMRU(address, userName, password)
{
    try
    {
	    if (address.length > 0)
	    {
		    mruObj.addMRU(address, userName, password);
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function popup_ComputeEngine_Enabled()
{
    try
    {
        var message = "You are currently connected using Google Compute Engine. To connect to a different RDP server, please close the current window and launch the appropriate Compute Engine instance or start Chrome RDP from the Chrome launcher.";

        simplePopup_showOK(message, popup_appWindow_DisabledResize_ok);
    }
    catch (e)
    {
        logException(e);
    }
}

function toggleMRU() 
{
    try
    {
        if ($(input.menubutton).disabled)
            return;

        if (_isComputeEngine)
        {
            popup_ComputeEngine_Enabled();
            return;
        }

	    if (mruAvailable)
	    {
		    var mru = $(ID.mru);

		    if (!mru.classList.contains(cssClass.shown))
		    {
			    var documentClicks = 0;
			    var mruClickHidesHandler = function (e)
			    {
				    documentClicks++;
				    if (documentClicks === 2)
				    {
					    this.removeEventListener('click', mruClickHidesHandler);
					    mru.classList.remove(cssClass.shown);
				    }
			    }
			    document.addEventListener("click", mruClickHidesHandler);
			    mru.classList.add(cssClass.shown);
		    }
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function mruListItemClick(e) 
{
    try
    {
	    var mru = e.target;

	    //$(ID.summary).style.opacity = 0;
	    $(input.address).value = mru.innerText;
	    toggleMRU();
	    focusOnAddressBar();
    }   
    catch (e)
    {
        logException(e);
    }
}

function getUserNameForAddress(address)
{
    try
    {
        var userName = "";

        if (_isComputeEngine)
        {
            userName = _computeEngineUserName;
        }
        else if (env.quickConnect)
        {
            userName = env.userName;
        }

        if (!blankNullorUndefined(userName))
            return userName;

        userName = getUserNameForAddressFromBookmarks(address);

        if (!blankNullorUndefined(userName))
            return userName;

        userName = getUserNameForAddressFromMRUs(address);

        if (!blankNullorUndefined(userName))
            return userName;

        return "";
    }
    catch (e)
    {
        logException(e);
    }
}

function getUserNameForAddressFromMRUs(address)
{
    try
    {
	    var username = mruObj.getUserNameFromAddress(address);
    
        if (!blankNullorUndefined(username))
            return username;

        return "";
    }   
    catch (e)
    {
        logException(e);
    }
}

function getUserNameForAddressFromBookmarks(address)
{
    try
    {
        var username = bookmarkObj.getUserNameFromAddress(address);
	
        if (!blankNullorUndefined(username))
            return username;

        return "";
    }   
    catch (e)
    {
        logException(e);
    }
}

function getPasswordForAddress(address)
{
    try
    {
        var password = "";

        if (_isComputeEngine)
        {
            password = _computeEnginePassword;
        }
        else if (env.quickConnect)
        {
            password = env.password;
        }

        if (!blankNullorUndefined(password))
        {
            //password = "fsdfsadf";
            password = RDPHelper.codec.convertUTF162UTF8(password);
            password = RDPHelper.codec.base64encodeUTF8(password);
            //password = RDPHelper.codec.base64encodeUTF16(password);
            return password;
        }

        password = getPasswordForAddressFromBookmarks(address);

        if (!blankNullorUndefined(password))
            return password;

        password = getPasswordForAddressFromMRUs(address);

        if (!blankNullorUndefined(password))
            return password;

        return "";
    }
    catch (e)
    {
        logException(e);
    }
}

function getPasswordForAddressFromMRUs(address)
{
    try
    {
	    var password = mruObj.getPasswordFromAddress(address);
		
        if (!blankNullorUndefined(password))
            return password;

	    return "";
    }   
    catch (e)
    {
        logException(e);
    }
}

function getPasswordForAddressFromBookmarks(address)
{
    try
    {
	    var password = bookmarkObj.getPasswordFromAddress(address);
		
        if (!blankNullorUndefined(password))
            return password;

	    return "";
    }   
    catch (e)
    {
        logException(e);
    }
}

function showObject(targetId)
{
    try
    {
	    $(targetId).style.visibility = "visible";
    }   
    catch (e)
    {
        logException(e);
    }
}

function hideObject(targetId)
{
    try
    {
	    $(targetId).style.visibility = "hidden";
    }   
    catch (e)
    {
        logException(e);
    }
}

function toggleShown(targetId)
{
    try
    {
	    $(targetId).classList.toggle(cssClass.shown);
    }   
    catch (e)
    {
        logException(e);
    }
}

function resizehandler()
{
    try
    {
	    adjustChromeRDPObjDeminsions();

	    var screenCssPixelRatio = getZoomPercent();
	    var windowInnerWidth = window.innerWidth * screenCssPixelRatio; // Adjust to screen Pixels
	    var windowInnerHeight = window.innerHeight * screenCssPixelRatio; // Adjust to screen Pixels

	    var fsOff = $("Full_Screen_OFF")
	    var fsOn = $("Full_Screen_On")

	    if (
		    (windowInnerWidth + screenCssPixelRatio >= screen.width && windowInnerWidth - screenCssPixelRatio <= screen.width) //bounds checking allowing for precision error
		    &&
		    (windowInnerHeight + screenCssPixelRatio >= screen.height && windowInnerHeight - screenCssPixelRatio <= screen.height) //bounds checking allowing for precision error
		    &&
		    !($(ID.body).classList.contains(":-webkit-full-screen"))
	       )
	    {
		    if (fsOff)
		    {
			    fsOff.classList.add(cssClass.nodisplay);
		    }

		    if (fsOn)
		    {
			    fsOn.classList.add(cssClass.nodisplay);
		    }

	    }
	    else
	    {
		    if (fsOff)
		    {
			    fsOff.classList.remove(cssClass.nodisplay);
		    }

		    if (fsOn)
		    {
			    fsOn.classList.remove(cssClass.nodisplay);
		    }
	    }

	    if (env.width <= windowInnerWidth + screenCssPixelRatio && env.height <= windowInnerHeight + screenCssPixelRatio) //bounds checking allowing for precision error
	    {
		    $(ID.session).style.overflow = 'hidden';
	    } 
        else
	    {
		    if (env.width > window.innerWidth)
		    {
			    $(ID.session).style.overflowX = 'auto';
		    }
		    if (env.height > window.innerHeight)
		    {
			    $(ID.session).style.overflowY = 'auto';
		    }
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function fullscreenToggleDelayedActions()
{
    try
    {
	    showAlert("You will need to hit ESC to exit fullscreen.");
	    clearFSalert();
	    resizehandler();
    }   
    catch (e)
    {
        logException(e);
    }
}

function fullscreenToggle(event)
{
    try
    {
        toggleFullscreen();

        return;

	    if (document.webkitIsFullScreen)
	    {
		    document.webkitCancelFullScreen();
	    }
	    else
	    {
		    $(ID.body).webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	    }

	    setTimeout(resizehandler, 300);
    }   
    catch (e)
    {
        logException(e);
    }
}

function minimizeScreen(event)
{
    try
    {
        if (!appWindow.isMinimized())
        {
            appWindow.minimize();
        }
    }   
    catch (e)
    {
        logException(e);
    }
}

function setScreenSize(width, height)
{
    try
    {
        env.width = width;
        env.height = height;

        env.width -= env.width % 4;

        return env.width;
    }
    catch (e)
    {
        logException(e);
    }
}

function setScreenDepth()
{
    try
    {
	    var screenDepth = settingsObj.values.screendepth;

	    if (blankNullorUndefined(screenDepth))
	    {
		    settingsObj.values.screendepth = "32";
		    settingsObj.save();
		    screenDepth = 32;
		
	    }

	    env.bpp = screenDepth;
    }   
    catch (e)
    {
        logException(e);
    }
}

function setLanguage()
{
    try
    {
	    var language = settingsObj.values.language;

	    if (blankNullorUndefined(language))
	    {
		    settingsObj.values.language = "0x00000409";
		    settingsObj.save();
		    language = 0x00000409;
		
	    }

	    env.language = language;
    }   
    catch (e)
    {
        logException(e);
    }
}

function screenSettings (type)
{
    this.width = 0;
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.isMaximized = false;
    this.isMinimized = false;
    this.isFullscreen = false;
    this.isAutomatic = false;
    this.isDefault = true;
    this.allowResize = true;
    this.hasSaved = false;
}

function getScreenSize(hasSaved, savedLeft, savedTop, savedWidth, savedHeight)
{
    try
    {
        var screenSize = null;

        if (settingsObj != null && settingsObj.values != null)
        {
            screenSize = settingsObj.values.screensize;
        }

	    var req_width = screen.width - 200;
	    var req_height = screen.height - 200;
	    var req_left = 0;
	    var req_top = 0;
	    var isFullscreen = false;
	    var isAutomatic = false;
	    var useDefault = true;
	    var allowResize = false;

	    if (!(typeof screenSize === 'string'))
	    {
	        screenSize = null;
	    }

	    //logMessage("width=" + width + ";height=" + height + ";");

	    if (!blankNullorUndefined(screenSize))
	    {
		    if (screenSize == "Fullscreen")
		    {
		        useDefault = false;
		        isFullscreen = true;
			    //req_width = screen.width;
		    	// On Chrome OS, full screen via...
		    	// the chrome settings menu, the keyboard button
				// vs
		    	// css, our drop down menu
		    	// are not all the same.
		    	// To account for differences, just shave 4 pixels from the bottom
				// so scrool bars will not appear
			    //req_height = screen.height - 4;
		    }
		    else if (screenSize == "Custom")
		    {
			    useDefault = false;
			    req_width = parseInt(settingsObj.values.customScreenWidth);
			    req_height = parseInt(settingsObj.values.customScreenHeight);	
		    }
		    else if (screenSize.indexOf(command.delimeter) > -1)
		    {
			    var dimensions = screenSize.split(command.delimeter);
			    if (dimensions.length == 2)
			    {
				    var w = parseInt(dimensions[0]);
				    var h = parseInt(dimensions[1]);
				    if (!blankNullorUndefined(w) || !blankNullorUndefined(h))
				    {
					    useDefault = false;
					    req_width = w;
					    req_height = h;
				    }
			    }
		    }
	    }

	    if (useDefault)
	    {
		    if (blankNullorUndefined(screenSize))
		    {
		        screenSize = "Automatic";
                
		        if (settingsObj != null && settingsObj.values != null)
		        {
		            settingsObj.values.screensize = screenSize
		            settingsObj.save();
		        }
		    }

		    var screenCssPixelRatio = getZoomPercent();

		    //req_width = window.innerWidth * screenCssPixelRatio;
		    //req_height = window.innerHeight * screenCssPixelRatio;
	        //req_width = env.width * screenCssPixelRatio;
	        //req_height = env.height * screenCssPixelRatio;

		    if (hasSaved)
		    {
		        req_width = savedWidth;
		        req_height = savedHeight;
		    }
		    else
		    {
		        req_width = (screen.width - 200);
		        req_height = (screen.height - 200);
		    }

		    req_width *= screenCssPixelRatio;
		    req_height *= screenCssPixelRatio;

		    allowResize = true;
	    }

	    if (screenSize == "Automatic")
	    {
	        isAutomatic = true;
	    }

	    //logMessage("width=" + width + ";height=" + height + ";");

	    // Adjust to a multiple of 4
	    req_width -= req_width % 4;

	    if (hasSaved && useDefault)
	    {
	        req_left = savedLeft;
	        req_top = savedTop;
	    }
	    else
	    {
	        req_left = (screen.width / 2) - (req_width / 2);
	        req_top = (screen.height / 2) - (req_height / 2);
	    }

	    var _screenSettings = new screenSettings();

	    _screenSettings.width = req_width;
	    _screenSettings.height = req_height;
	    _screenSettings.left = req_left;
	    _screenSettings.top = req_top;
	    _screenSettings.isFullscreen = isFullscreen;
	    _screenSettings.isAutomatic = isAutomatic;
	    _screenSettings.isDefault = useDefault;
	    _screenSettings.allowResize = allowResize;

	    return _screenSettings;
    }   
    catch (e)
    {
        logException(e);
    }
}

function screenEnableResizing()
{
    try
    {
        appWindow.innerBounds.setMinimumSize(null, null);
        appWindow.innerBounds.setMaximumSize(null, null);
        appWindow.outerBounds.setMinimumSize(null, null);
        appWindow.outerBounds.setMaximumSize(null, null);
        allow_appWindow_Resizing = true;
    }
    catch (e)
    {
        logException(e);
    }
}

function screenDisableResizing()
{
    try
    {
        allow_appWindow_Resizing = false;
        appWindow.innerBounds.setMinimumSize(appWindow.innerBounds.width, appWindow.innerBounds.height);
        appWindow.innerBounds.setMaximumSize(appWindow.innerBounds.width, appWindow.innerBounds.height);
    }
    catch (e)
    {
        logException(e);
    }
}

function sslEnabled()
{
    
}

// Key Handling

function handleUIKeys(blockKeys) 
{
    try
    {
	    if (blockKeys) 
        {
		    document.onkeydown = onKeyHandler;
		    document.onkeyup = onKeyHandler;
	    }
	    else 
        {
	        document.onkeydown = onKeyHandler2;
		    document.onkeyup = null;
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function cleanSystemKey()
{
    try
    {
	    intervals.systemKey = null;
    }   
    catch (e)
    {
        logException(e);
    }
}

function onKeyHandler() 
{
    try
    {
        switch (event.keyCode)
        {
		    case 82: //R
			    if (event.ctrlKey) {
				    blockKey(event);
			    }
			    break;
		    case keyCodes.rwin:
		    case keyCodes.lwin:
			    if (!intervals.systemKey)
			    {
				    intervals.systemKey = setInterval(cleanSystemKey, 60000);
				    //showAlert(uiStrings.hotKeyPessed);
			    }
			    break;
	        case keyCodes.esc:
	            blockKey(event);
	            endAltTab();
	            break;
            case keyCodes.F1:
		    case keyCodes.F2:
		    case keyCodes.F3:
		    case keyCodes.F4:
		    case keyCodes.F5:
		    case keyCodes.F6:
		    case keyCodes.F7:
		    case keyCodes.F8:
		    case keyCodes.F9:
		    case keyCodes.F10:
	        case keyCodes.F11:
	        case keyCodes.F12:
	            blockKey(event);
			    endAltTab();
			    break;
		    case keyCodes.tab:
		    case keyCodes.up:
		    case keyCodes.down:
		    case keyCodes.left:
		    case keyCodes.right:
			    resetAltTabTimer();
			    break;
		    default:
			    endAltTab();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function onKeyHandler2()
{
    try
    {
        switch (event.keyCode)
        {
            case keyCodes.F11:
                toggleFullscreen();
                event.preventDefault();
                break;
            case keyCodes.esc:
                if (appWindow.isFullscreen())
                {
                    toggleFullscreen();
                }
                event.preventDefault();
                break;
            default:
                break;
        }
    }
    catch (e)
    {
        logException(e);
    }
}

function toggleFullscreen()
{
    try
    {        
        if (!allow_appWindow_Resizing)
        {
            if (connection == connectionStatus.standby ||
                connection == connectionStatus.disconnected ||
                connection == connectionStatus.disconnecting ||
                connection == connectionStatus.error)
            {
                screenEnableResizing();
                appWindow_StartedConnection = false;
            }
            else
            {
                popup_appWindow_DisabledResize();
                return;
            }
        }        

        if (!appWindow.isFullscreen())
        {
            appWindow.fullscreen();
        }
        else
        {
            appWindow.restore();
        }
    }
    catch (e)
    {
        logException(e);
    }
}

function blockKey(event)
{
    try
    {
	    sendKeyFromUI(event);
	    event.returnValue = false;
	    event.keyCode = 0;
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendKeyFromUI(event)
{
    try
    {
	    var key = event.keyCode;
	    var keyDown = 0;

	    if (event.type == "keydown")
	    {
		    keyDown = 1;
	    }

	    var keyAction = [key, keyDown];

	    sendMessage(command.systemKey, keyAction);
	    $(ID.rdpObject).focus();
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendCtrlAltDel()
{
    try
    {
	    sendKeyCombo("!C!A!D");
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendStartMenu()
{
    try
    {
	    sendKeyCombo("!C!E");
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendPrintScreen()
{
    try
    {
	    sendKeyCombo("!P");
    }   
    catch (e)
    {
        logException(e);
    }
}

function sendAltPrintScreen()
{
    try
    {
	    sendKeyCombo("!A!P");
    }   
    catch (e)
    {
        logException(e);
    }
}

function doKeyboardLayout()
{
    try
    {
        showKeyboardLayout();
    }
    catch (e)
    {
        logException(e);
    }
}

function sendKeyCombo(keys)
{
    try
    {
        endAltTab();

	    var sendKeys = [];
	
        for (i = 0; i < keys.length; i++)
	    {
		    var key = keys.charAt(i).toUpperCase()
		    //Special Key Notifier
		    if (key == "!") {
			    key = keys.charAt(++i).toUpperCase();

			    switch (key) {
				    case "A": //A = Alt
					    sendKeys.push(keyCodes.alt);
					    break;
				    case "C": //C = Control
					    sendKeys.push(keyCodes.ctrl);
					    break;
				    case "D": //D = Delete
					    sendKeys.push(keyCodes.del);
					    break;
				    case "E": //E = Esc
					    sendKeys.push(keyCodes.esc);
					    break;
				    case "H": //H = Home
					    sendKeys.push(keyCodes.home);
					    break;
				    case "I": //I = Insert
					    sendKeys.push(keyCodes.ins);
					    break;
				    case "N": //N = End
					    sendKeys.push(keyCodes.end);
					    break;
				    case "P": //P = Print Screen
					    sendKeys.push(keyCodes.prtScn);
					    break;
				    case "S": //S = Shift
					    sendKeys.push(keyCodes.shift);
					    break;
				    case "T": //T = Tab
					    sendKeys.push(keyCodes.tab);
					    break;
				    case "U": //U = Page Up
					    sendKeys.push(keyCodes.pgup);
					    break;
				    case "V": //V = Page Down
					    sendKeys.push(keyCodes.pgdwn);
					    break;
				    case "W": //W = Windows
					    sendKeys.push(keyCodes.win);
					    break;
				    //default:
					    //sendKeys.push(key);
			    }
		    }
		    else
		    {
			    var keyval = key.charCodeAt(0);
			    sendKeys.push(keyval);
		    }
	    }
	    sendMessage(command.comboKey, sendKeys);
	    $(ID.rdpObject).focus();
    }   
    catch (e)
    {
        logException(e);
    }
}

// Alt tab handling
var altTabbing = false;
var altTabTimeout = null;
var should = false;

function altTab()
{
    try
    {		
	    if (altTabbing)
	    {
		    resetAltTabTimer();
		    sendMessage(command.systemKey, [keyCodes.tab, 1]);
		    sendMessage(command.systemKey, [keyCodes.tab, 0]);
	    }
	    else
	    {
		    document.onClick = endAltTab;
		    $(ID.rdpObject).onmousedown= endAltTab;
		    sendMessage(command.systemKey, [keyCodes.alt, 1]);
		    sendMessage(command.systemKey, [keyCodes.tab, 1]);
		    sendMessage(command.systemKey, [keyCodes.tab, 0]);
		    $(ID.rdpObject).focus();
		    altTabbing = true;
		    should = false;
	    }

	    resetAltTabTimer();
    }   
    catch (e)
    {
        logException(e);
    }
}

function resetAltTabTimer()
{
    try
    {
	    should = false;
	    clearInterval(intervals.altTab);
	    intervals.altTab = setInterval(endAltTab, 1000);
    }   
    catch (e)
    {
        logException(e);
    }
}

function endAltTab()
{
    try
    {
	    if (!should)
	    {
		    should = true;
		    return;
	    }
	    
        if (altTabbing)
	    {
		    altTabbing = false;
		    sendMessage(command.systemKey, [keyCodes.alt, 0]);
		    sendMessage(command.comboKey, [keyCodes.alt]);
		    document.onClick = null;
		    $(ID.rdpObject).onmousedown = null;
		    clearInterval(intervals.altTab);
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function beforeunloadhandler()
{
    try
    {
	    if (connected)
	    {
		    return "Your Remote session will be disconnected.  You can reconnect to this session later and your programs on the remote computer will continue to run.";
	    }

	    return;
    }   
    catch (e)
    {
        logException(e);
    }
}

function setAddressFromHashtag()
{
    try
    {
        var hash = document.location.hash;
	
        if (hash && hash.length > 1)
	    {
            $(input.address).value = hash.substr(1).replace("%3A", ":");
		    env.quickConnect = true;
		    document.location.hash = "";
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function hashchangehandler()
{
    try
    {
        if (document.location.hash.length > 1)
	    {
		    if (connected)
		    {
			    location.reload();
		    }
		    else
		    {
			    setAddressFromHashtag();
			    cnctButtonClick();
		    }
	    }
	    //removed this because the it was causing connections before both the module and the storage object had loaded
        //else
        //{
        //	if (env.quickConnect)
        //	{
	    //		cnctButtonClick();
        //	}
        //}
    }   
    catch (e)
    {
        logException(e);
    }
}

var _instanceUUID = "";

function generateUUID(){
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x7|0x8)).toString(16);
    });
    return uuid;
};

var _isComputeEngine = false;
var _computeEngineUserName = "";
var _computeEnginePassword = "";

// Internal Message
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse)
{
    try
    {
        logMessage('message=' + message);

        if (message == 'undefined' || message == null || message.messageType == 'undefined' || message.messageType == null)
        {
            throw "unrecognized message";
        }

        if (message.messageType == 'connect')
        {
            if (connection == connectionStatus.standby)
            {
                appWindow.env.urlAddress = message.urlAddress;
                appWindow.env.userName = message.userName;
                appWindow.env.password = message.password;
                appWindow.env.isComputeEngine = message.isComputeEngine;

                initComputeEngine();

                if (message.urlAddress.length > 0 && message.userName.length > 0)
                {
                    cnctButtonClick();
                }
            }
        }
    }
    catch (e)
    {
        logException(e);
    }
});

function initComputeEngine()
{
    try
    {
        // turn this on/off to disable general use
        //_isComputeEngine = false;

        if (appWindow.env)
        {
            if (appWindow.env.urlAddress.length > 0)
            {
                env.quickConnect = true;
                $(input.address).value = appWindow.env.urlAddress;
                env.userName = appWindow.env.userName;
                env.password = appWindow.env.password;
            }

            if (appWindow.env.isComputeEngine)
            {
                _isComputeEngine = true;
                _computeEngineUserName = appWindow.env.userName;
                _computeEnginePassword = appWindow.env.password;
                console.log("Waiting for Compute Engine")
            }
        }

        if (_isComputeEngine)
        {
            $(input.address).disabled = true;
            $(input.menubutton).style.display = "none";
            allow_appWindow_AutoLogin = true;

            $('tdButton').style.paddingLeft = "7px";
            $('bookmarksHeader').style.display = "none";
            $('bookmarks').style.display = "none";
        }
    }
    catch (e)
    {
        logException(e);
    }
}

function initForm()
{
    try
    {
        //logMessage("initForm");

        if (black.classList.contains(cssClass.opacity0))
            black.classList.remove(cssClass.opacity0);

        if (!black.classList.contains(cssClass.opacity50))
            black.classList.add(cssClass.opacity50);

        if (!UIprocessed) {
            var sessionControlPanel = $(ID.userControls);
            for (var i = 0; i < userMenuControls.length; i++) {
                var buttonNode = document.createElement("button");
                buttonNode.setAttribute("id", userMenuControls[i][0]);
                buttonNode.innerText = userMenuControls[i][1].replace("_", " ");
                buttonNode.addEventListener('click', userMenuControls[i][2]);
                for (var j = 0; j < userMenuControls[i][3].length; j++) {
                    buttonNode.classList.add(userMenuControls[i][3][j]);
                }
                sessionControlPanel.appendChild(buttonNode);

                if (typeof userMenuControls[i][4] !== 'undefined') {
                    userMenuControls[i][4]();
                }
            }

            var listener = $(ID.module);
            listener.addEventListener('message', handleMessage, true);

            UIprocessed = true;
        }
        //window.addEventListener('resize', resizehandler, false);
        //window.addEventListener('beforeunload', beforeunloadhandler);
        window.addEventListener('hashchange', hashchangehandler);

        appWindow.onBoundsChanged.addListener(appWindow_BoundsChanged);
        
        if (_instanceUUID == null || _instanceUUID == "") {
            _instanceUUID = generateUUID();
        }

        pageDidLoad();
    }
    catch (e)
    {
        logException(e);
    }
}

var is_appWindow_Fullscreen = false;
var is_appWindow_Maximized = false;
var allow_appWindow_Resizing = true;
var allow_appWindow_BoundsChanged = true;

function frameReposition()
{
    try
    {
        var frame = $("frame");
        var black = $("black");

        if (appWindow.innerBounds.minWidth != null && appWindow.innerBounds.minWidth > 0 &&
            appWindow.innerBounds.minHeight != null && appWindow.innerBounds.minHeight > 0)
        {
            if (appWindow.innerBounds.width != appWindow.innerBounds.minWidth)
            {
                appWindow.innerBounds.width = appWindow.innerBounds.minWidth;
            }

            if (appWindow.innerBounds.height != appWindow.innerBounds.minHeight)
            {
                appWindow.innerBounds.height = appWindow.innerBounds.minHeight;
            }
        }
        
        if (frame.scrollHeight > frame.clientHeight)
        {
            black.style.width = (frame.clientWidth + 1) + "px";
        }
        else
        {
            black.style.width = "100%";
        }

        if (frame.scrollWidth > frame.clientWidth)
        {
            black.style.height = (frame.clientHeight + 1) + "px";
        }
        else
        {
            black.style.height = "100%";
        }

        /*
        var tdConnect = $("tdConnect");

        tdConnect.style.position = "absolute";

        var width = tdConnect.clientWidth;
      
        var left = Math.round((window.innerWidth / 2) - (width / 2));

        if (left < 10)
        {
            left = 10;
        }

        tdConnect.style.left = left + "px";
        */

        if (_popupState == 1)
        {
            popupReposition(true);
        }
    }
    catch (e)
    {
        logException(e);
    }
}

function appWindow_BoundsChanged()
{
    try
    {
        frameReposition();

        if (allow_appWindow_BoundsChanged)
        {
            if (appWindow_StartedConnection)
            {
                if (is_appWindow_Fullscreen && !appWindow.isFullscreen())
                {
                    appWindow.fullscreen();
                    setTimeout(popup_appWindow_DisabledResize, 10);
                    return;
                }
                else if (is_appWindow_Maximized && (!appWindow.isMaximized() && !appWindow.isMinimized()))
                {
                    appWindow.maximize();
                    setTimeout(popup_appWindow_DisabledResize, 10);
                    return;
                }
                else if ((!is_appWindow_Fullscreen && !is_appWindow_Maximized) && (appWindow.isFullscreen() || appWindow.isMaximized()))
                {
                    appWindow.restore();
                    setTimeout(popup_appWindow_DisabledResize, 10);
                    return;
                }
            }

            var _screenSettings = null;

            if (appWindow_ScreenSettings != 'undefined' && appWindow_ScreenSettings != null)
            {
                _screenSettings = appWindow_ScreenSettings;
            }
            else
            {
                _screenSettings = new _screenSettings();
            }

            _screenSettings.isFullscreen = appWindow.isFullscreen();
            _screenSettings.isMaximized = appWindow.isMaximized();
            _screenSettings.isMinimized = appWindow.isMinimized();

            if (!_screenSettings.isFullscreen &&
                !_screenSettings.isMaximized &&
                !_screenSettings.isMinimized)
            {
                _screenSettings.width = appWindow.innerBounds.width;
                _screenSettings.height = appWindow.innerBounds.height;
                _screenSettings.left = appWindow.outerBounds.left;
                _screenSettings.top = appWindow.outerBounds.top;
            }

            appWindow_ScreenSettings = _screenSettings;

            var storageData = {};
            storageData["screenSettings"] = appWindow_ScreenSettings;

            chrome.storage.local.set(storageData, function () { });
        }

        setTimeout(frameReposition, 250);
    }
    catch (e)
    {
        logException(e);
    }
}

function addressKeyDown(e)
{
    try
    {
	    //$(ID.summary).style.opacity = 0;

	    // if user pressed Enter call connect()
	    if (e && e.keyCode == 13)
	    {
		    cnctButtonClick();
		    //sendConnectRequest();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function popupKeyDown(e)
{
    try
    {
	    if (e && e.keyCode == 13)
	    {
		    popupYesClick();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function addressChange()
{
    try
    {
	    //$(ID.summary).style.opacity = 0;
    }   
    catch (e)
    {
        logException(e);
    }
}

var _continueConnect = false;

function cnctButtonClick()
{
    try
    {
        //logMessage("cnctButtonClick");

        var doAuth = false;

        if (_isComputeEngine)
        {
            doAuth = false;
        }

        if (doAuth && !signedin && !signingin && !verifyinglicense)
        {
            _continueConnect = true;

            signinLinkClick();
        }
        else
        {
            _continueConnect = false;

            sendConnectRequest();
        }
    }   
    catch (e)
    {
        logException(e);
    }
}

function sessionTabClick()
{
    try
    {
	    toggleShown(ID.sessionMenu);
    }   
    catch (e)
    {
        logException(e);
    }
}

function popupYesClick()
{
    try
    {
        if (tabViewDisabled)
            return;

	    popupResponse(1);
    }   
    catch (e)
    {
        logException(e);
    }
}

function popupNoClick()
{
    try
    {
	    if (tabViewDisabled)
            return;

        popupResponse();
    }   
    catch (e)
    {
        logException(e);
    }
}

function blackWebkitAnimationEnd()
{
    try
    {
	    $(ID.black).classList.remove(cssClass.opacity0);
	    var black = $(ID.black);
	    if (black.classList.contains(cssClass.opacity0)) 
            black.classList.add(cssClass.opacity50);
	    if (black.classList.contains(cssClass.homeInFromLeft)) 
            black.classList.add(cssClass.homeInFromLeftFinal);
    }   
    catch (e)
    {
        logException(e);
    }
}

function activateWebkitAnimationEnd()
{
    try
    {
	    var activate = $(ID.activate);
	    if (activate.classList.contains(cssClass.homeInFromTop)) activate.classList.add(cssClass.homeInFromTopFinal);
	    if (activate.classList.contains(cssClass.homeOutToTop))
	    {
		    activate.classList.add(cssClass.homeOutToTopFinal);
		    $(input.address).focus();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

function activateGoogleWebkitAnimationEnd()
{
    try
    {
	    var activate_google = $(ID.activate_google);
	    if (activate_google.classList.contains(cssClass.homeOutToRight)) activate_google.classList.add(cssClass.homeOutToRightFinal);
	    if (activate_google.classList.contains(cssClass.homeInFromLeft)) activate_google.classList.add(cssClass.homeInFromLeftFinal);
    }   
    catch (e)
    {
        logException(e);
    }
}

function activateUsernameWebkitAnimationEnd()
{
    try
    {
	    var activate_username = $(ID.activate_username);
	    if (activate_username.classList.contains(cssClass.homeOutToRight)) activate_username.classList.add(cssClass.homeOutToRightFinal);
	    if (activate_username.classList.contains(cssClass.homeInFromLeft)) activate_username.classList.add(cssClass.homeInFromLeftFinal);
    }   
    catch (e)
    {
        logException(e);
    }
}

function activateGoogleNextClick()
{
    try
    {
	    animateActivateOption($(ID.activate_google), $(ID.activate_username));
    }   
    catch (e)
    {
        logException(e);
    }
}

function activateUserNameNextClick()
{
    try
    {
	    animateActivateOption($(ID.activate_username), $(ID.activate_google));
    }   
    catch (e)
    {
        logException(e);
    }
}

function settingsLinkClick()
{
    try
    {
        showPopUp(-1, "", "Chrome RDP " + $(ID.settings_link).innerHTML, "OK", "Cancel", null);
	    
        return false;
    }   
    catch (e)
    {
        logException(e);
    }
}

function aboutLinkClick()
{
    try
    {
	    showPopUp(-1000, "", "Chrome RDP " + $(ID.about_link).innerHTML, "OK", null, null);
	    
        return false;
    }   
    catch (e)
    {
        logException(e);
    }
}

function fullscreenLinkClick()
{
    try
    {
        toggleFullscreen();

        return false;
    }
    catch (e)
    {
        logException(e);
    }
}

function doClearDataCache()
{
    try
    {
	    showPopUp(-2, "", "Are you sure you want to clear saved Remote Identities?", "OK", "Cancel", null);
    }   
    catch (e)
    {
        logException(e);
    }
}

function syncClipboard(e)
{
	try
	{
		var callback = function ()
		{
			sendMessage(command.clipboard_sync, RDPHelper.clipboard.getTypes());
		}

		RDPHelper.clipboard.scheduleNextFormatListTimeout(callback);
	}
	catch (e)
	{
		logException(e);
	}
}

function endSyncClipboard()
{
	try
	{
		RDPHelper.clipboard.cancelNextFormatListTimeout();
	}
	catch (e)
	{
		logException(e);
	}
}

function fetchClipboardData(type)
{
	try
	{
		sendMessage(command.clipboard_data, [RDPHelper.clipboard.getData(type)]);

		setTimeout(syncClipboard, 100);
	}
	catch (e)
	{
		logException(e);
	}
}

function updateClipboard(e)
{
    try
    {
	    // e is an array of interleaved names and base64 encoded data, convert to an array of objects

	    var items = [];
	    
        if ((e.length % 2) == 0)
	    {
		    for (var i = 0; i < e.length; i += 2)
		    {
			    items.push(
					    {
						    type: e[i],
						    value: e[i + 1]
					    });
		    }	
	    }
	
	    RDPHelper.clipboard.decodeItems(items)

	    RDPHelper.clipboard.setItems(items);
    }   
    catch (e)
    {
        logException(e);
    }
}

function pasteTester(e)
{
    try
    {        
//  //used for testing paste data by pasteing to the address field
//	if (e.clipboardData && e.clipboardData.types)
//	{
//		for (var i = 0; i < e.clipboardData.items.length; i++)
//		{
//			//var data = RDPHelper.clipboard.getData(e.clipboardData.items[i].type);

//			var items = [];

//			if (e.clipboardData.items[i].kind == "string")
//			{
//				var string = e.clipboardData.getData(e.clipboardData.items[i].type);

//				items.push({ type: e.clipboardData.items[i].type, value: string });
//			}
//			else if (e.clipboardData.items[i].kind == "file")
//			{
//				var file = e.clipboardData.items[i].getAsFile();
//				var data = e.clipboardData.getData(e.clipboardData.items[i].type);

//				items.push({ type: e.clipboardData.items[i].type, value: file });
//			}

//			RDPHelper.clipboard.setItems(items);
//		}
//	}
    }   
    catch (e)
    {
        logException(e);
    }
}

function wireUI()
{
    try
    {
	    var RDP = function () {};

	    var initEvent = new CustomEvent(
		    "RDPInit",
		    {
			    detail: RDP,
			    bubbles: true,
			    cancelable: true
		    }
	    );

	    document.dispatchEvent(initEvent);

	    RDPHelper = new RDP();
	
	    loadStorageObjects();
	    var address = $(input.address);
	    address.addEventListener('keydown', addressKeyDown);
	    address.addEventListener('change', addressChange);
	    address.addEventListener('paste', pasteTester);
	    $(ID.menubutton).addEventListener('click', toggleMRU);
	    $(input.cnctButton).addEventListener('click', cnctButtonClick);

	    $(input.sessionTab).addEventListener('click', sessionTabClick);

	    $(popupIDs.popup_auth_link).addEventListener('click', doGoogleAuthentication);
	    $(popupIDs.btnYes).addEventListener('click', popupYesClick);
	    $(popupIDs.btnNo).addEventListener('click', popupNoClick);


	    $(input.payment_checkout).addEventListener('click', doLicenseAuthentication);
		
	    $(ID.black).addEventListener('webkitTransitionEnd', blackWebkitAnimationEnd);

	    $(ID.activate).addEventListener('webkitAnimationEnd', activateWebkitAnimationEnd);
	    $(ID.activate_google).addEventListener('webkitAnimationEnd', activateGoogleWebkitAnimationEnd);
	    $(ID.activate_username).addEventListener('webkitAnimationEnd', activateUsernameWebkitAnimationEnd);

	    $(ID.activate_google_btn).addEventListener('click', doGoogleAuthentication);
	    $(ID.activate_google_next).addEventListener('click', activateGoogleNextClick);
	    $(ID.activate_username_next).addEventListener('click', activateUserNameNextClick);

	    $(ID.settings_link).addEventListener('click', settingsLinkClick);
        $(ID.about_link).addEventListener('click', aboutLinkClick);
        $(ID.fullscreen_link).addEventListener('click', fullscreenLinkClick);
        $(ID.signout_link).addEventListener('click', signoutLinkClick);
        $(ID.signin_link).addEventListener('click', signinLinkClick);
        
	    //$(input.ClearSSLCache).addEventListener('click', doClearDataCache);

	    $(ID.addBookmark_link).addEventListener('click', addBookmark);
	
	    $(input.ScreenSize).addEventListener('change', screenSizeDropdownValueChanged);

	    $(input.CertificateDelete).addEventListener('click', certificateDeleteButtonClickHandler);
        $(input.ClearSSLCache).addEventListener('click', certificateDeleteAllButtonClickHandler);

        $("buttonSaveOverrideKey").addEventListener('click', buttonSaveOverrideKey_Click);
        $("buttonDeleteOverrideKey").addEventListener('click', buttonDeleteOverrideKey_Click);
        $("buttonDeleteAllOverrideKeys").addEventListener('click', buttonDeleteAllOverrideKeys_Click);

        $(input.StorePasswords).addEventListener('change', storePasswordsClickHandler);

	    document.addEventListener('onClipboardUpdate', syncClipboard);

	    var tab = $(ID.menutab);
	    tab.onmousedown = sessionTabMouseDown;
	    tab.onmouseup = sessionTabMouseUp;
	    $(input.sessionTab).ondragstart = function(e) { e.preventDefault(); };

        var userControls = $(ID.userControls);
		userControls.onmousemove = sessionUserControlsMouseMove;
	    userControls.onmouseout = sessionUserControlsMouseOut;

        var session = $(ID.session);
	    session.onmouseup = sessionMouseUp;
	    session.onmousemove = sessionMouseMove;
	  
	    initializeTabView(ID.settings);

        simplePopup_init();
    }   
    catch (e)
    {
        logException(e);
    }
}
function loadStorageObjects()
{
    try
    {
	    settingsObj = new RDPHelper.SettingsObject(loadStartScreen);
        mruObj = new RDPHelper.MRUObject(loadMRUs);
        bookmarkObj = new RDPHelper.BookmarkObject($(ID.bookmarks), connectBookmark, deleteBookmark, connectBookmarkNewWindow);
       
        if (chrome.storage)
        {
            try
            {
                storageObjectReady -= 1;
                chrome.storage.local.get(settingsObj.key, SettingsObjectLoadedCallback);
            }
            catch (e)
            {
                logException(e);
            }

            try
            {
                storageObjectReady -= 1;
                chrome.storage.local.get(mruObj.key, MRUObjectLoadedCallback);
            }
            catch (e)
            {
                logException(e);
            }

            try
            {
                storageObjectReady -= 1;
                chrome.storage.sync.get(bookmarkObj.key, BookmarkObjectLoadedCallback);
            }
            catch (e)
            {
                logException(e);
            }
        }
        else
        {
            storageObjectLoaded();
            bookmarkObj.Refresh
        }
    }   
    catch (e)
    {
        logException(e);
    }
}
function SettingsObjectLoadedCallback(result)
{
    try
    {
	    settingsObj.Populate(result);
	    storageObjectReady +=1;
	    if (storageObjectReady == 0)
	    {
		    storageObjectLoaded();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}
function MRUObjectLoadedCallback(result)
{	
    try
    {
        mruObj.Populate(result);
	    storageObjectReady +=1;
	    if (storageObjectReady == 0)
	    {
		    storageObjectLoaded();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}
function BookmarkObjectLoadedCallback(result)
{
    try
    {
	    bookmarkObj.Populate(result);
	    storageObjectReady +=1;
	    if (storageObjectReady == 0)
	    {
		    storageObjectLoaded();
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}
function storageObjectLoaded()
{
    try
    {
        //logMessage("storageObjectLoaded");

        //creenSize();
	    setScreenDepth();
	    setLanguage();
	    storageObjectReady += 1;
	    pageDidLoad();
    }
    catch (e)
    {
        logException(e);
    }
}

function loadStartScreen()
{
    try
    {
        chrome.storage.local.get("screenSettings", loadStartScreen_GetScreenSettings);

        setTimeout(loadStartScreen_Callback, 100);
    }
    catch (e)
    {
        logException(e);
    }
}

function loadStartScreen_Callback()
{
    try
    {
        //logMessage("loadStartScreen_Callback");

        if (appWindow_ScreenSettings == null)
        {
            setTimeout(loadStartScreen_Callback, 100);
            return;
        }

        setTimeout(loadStartScreen_Callback2, 100);
    }
    catch (e)
    {
        logException(e);
    }
}

function loadStartScreen_Callback2()
{
    try
    {
        //logMessage("loadStartScreen_Callback2");

        if (!env.quickConnect)
        {
            sendEnvironment();

            black.classList.remove(cssClass.opacity50);
            black.classList.add(cssClass.opacity0);
        }
        else if (env.quickConnect)
        {
            cnctButtonClick();
        }
    }
    catch (e)
    {
        logException(e);
    }
}

function loadStartScreen_GetScreenSettings(result)
{
    try
    {
        if (typeof result !== 'undefined' && typeof result.screenSettings !== 'undefined' && (result.screenSettings != null || result.screenSettings != 'undefined'))
        {
            appWindow_ScreenSettings = result.screenSettings;
        }
        else
        {
            appWindow_ScreenSettings = new screenSettings();
        }
    }
    catch (e)
    {
        logException(e);
    }
}

function setStartScreen()
{
    try
    {
        screenEnableResizing();

        var hasSaved = appWindow_ScreenSettings.hasSaved;
        var savedLeft = appWindow_ScreenSettings.left;
        var savedTop = appWindow_ScreenSettings.top;
        var savedWidth = appWindow_ScreenSettings.width;
        var savedHeight = appWindow_ScreenSettings.height;
        
        var _screenSettings = getScreenSize(hasSaved, savedLeft, savedTop, savedWidth, savedHeight);

        if (!_screenSettings.isAutomatic)
        {
            if (_screenSettings.isFullscreen)
            {
                appWindow_ScreenSettings.isFullscreen = true;
            }
            else
            {
                appWindow_ScreenSettings.isFullscreen = false;
            }

            appWindow_ScreenSettings.isMaximized = false;
        }
        else
        {
            if (_screenSettings.isFullscreen || appWindow.isFullscreen())
            {
                appWindow_ScreenSettings.isFullscreen = true;
            }
            else
            {
                appWindow_ScreenSettings.isFullscreen = false;
            }
            
            if (appWindow.isMaximized())
            {
                appWindow_ScreenSettings.isMaximized = true;
            }
            else
            {
                appWindow_ScreenSettings.isMaximized = false;
            }
        }

        appWindow_ScreenSettings.isMinimized = appWindow.isMinimized();
        appWindow_ScreenSettings.isDefault = _screenSettings.isDefault;
        appWindow_ScreenSettings.allowResize = _screenSettings.allowResize;

        var doMoveTo = false;

        if (!_screenSettings.isFullscreen &&
            !_screenSettings.isMaximized &&
            !_screenSettings.isMinimized)
        {
            if (!hasSaved)
            {
                //appWindow_ScreenSettings.left = _screenSettings.left;
                //appWindow_ScreenSettings.top = _screenSettings.top;
                //doMoveTo = true;
            }
            else if (!_screenSettings.isDefault)
            {
                if (appWindow_ScreenSettings.width != _screenSettings.width ||
                    appWindow_ScreenSettings.height != _screenSettings.height)
                {
                    //appWindow_ScreenSettings.left = _screenSettings.left;
                    //appWindow_ScreenSettings.top = _screenSettings.top;
                    //doMoveTo = true;
                }
            }

            if ((appWindow_ScreenSettings.left < 10 && appWindow_ScreenSettings.top < 10) ||
                (appWindow_ScreenSettings.left > screen.width - 10 && appWindow_ScreenSettings.top > screen.height - 10))
            {
                appWindow_ScreenSettings.left = _screenSettings.left;
                appWindow_ScreenSettings.top = _screenSettings.top;
                doMoveTo = true;
            }

            appWindow_ScreenSettings.width = _screenSettings.width;
            appWindow_ScreenSettings.height = _screenSettings.height;
        }

        appWindow_ScreenSettings.hasSaved = true;

        is_appWindow_Fullscreen = false;
        is_appWindow_Maximized = false;

        if (appWindow_ScreenSettings.isFullscreen)
        {
            screen.width -= 25;
            screen.height -= 25;

            window.innerWidth = setScreenSize(screen.width, screen.height);
            logMessage("setStartScreen:fullscreen;" + window.innerWidth.toString() + "x" + window.innerHeight.toString() + ";");
            is_appWindow_Fullscreen = true;
            appWindow.fullscreen();
        }
        else if (appWindow_ScreenSettings.isMaximized)
        {
            appWindow_ScreenSettings.width = setScreenSize(window.innerWidth, window.innerHeight);
            logMessage("setStartScreen:maximized;" + window.innerWidth.toString() + "x" + window.innerHeight.toString() + ";");
            is_appWindow_Maximized = true;
            appWindow.maximize();
        }
        else 
        {
            if (appWindow.isFullscreen() ||
                appWindow.isMaximized() ||
                appWindow.isMinimized())
            {
            }

            appWindow.restore();

            appWindow_ScreenSettings.width = setScreenSize(appWindow_ScreenSettings.width, appWindow_ScreenSettings.height);
            logMessage("setStartScreen:normal;" + appWindow_ScreenSettings.width.toString() + "x" + appWindow_ScreenSettings.height.toString() + ";");
            appWindow.innerBounds.setMinimumSize(appWindow_ScreenSettings.width + 1, appWindow_ScreenSettings.height + 1);
            appWindow.innerBounds.setMaximumSize(appWindow_ScreenSettings.width + 1, appWindow_ScreenSettings.height + 1);
            
            if (doMoveTo)
            {
                window.moveTo(appWindow_ScreenSettings.left, appWindow_ScreenSettings.top);
            }
        }

        setTimeout(frameReposition, 250);
    }
    catch (e)
    {
        logException(e);
    }
}

var popup_appWindow_DisabledResize_IsOpen = false;

function popup_appWindow_DisabledResize()
{
    try
    {
        if (popup_appWindow_DisabledResize_IsOpen)
            return;

        popup_appWindow_DisabledResize_IsOpen = true;

        screenDisable();

        var message = "To maximize or toggle the fullscreen, please disconnect your current session first.";

        simplePopup_showOK(message, popup_appWindow_DisabledResize_ok);
    }
    catch (e)
    {
        logException(e);
    }
}
function popup_appWindow_DisabledResize_ok()
{
    try
    {
        screenEnable();

        popup_appWindow_DisabledResize_IsOpen = false;
    }
    catch (e)
    {
        logException(e);
    }
}

var DeleteBookmarkID = null;
var DeleteBookmarkName = null;

function deleteBookmark(e)
{
    try
    {
        DeleteBookmarkID = e.target.parentNode.parentNode.parentNode.attributes.bookmarkid.value;
        DeleteBookmarkName = e.target.parentNode.parentNode.parentNode.attributes.bookmarkName.value;
	
        screenDisable();

        var message = "Are you sure you want to delete the connection to '" + DeleteBookmarkName + "'?";

        simplePopup_showOKCancel(message, deleteBookmark_ok, deleteBookmark_cancel);
    }   
    catch (e)
    {
        logException(e);
    }
}
function deleteBookmark_ok()
{
    try
    {
        bookmarkObj.DeleteConnection(DeleteBookmarkID);

        screenEnable();
    }
    catch (e)
    {
        logException(e);
    }
}
function deleteBookmark_cancel()
{
    try
    {
        screenEnable();
    }
    catch (e)
    {
        logException(e);
    }
}
function connectBookmark(e)
{
    try
    {
        var connectTo = e.target.attributes.href.value;
        
        if (_isComputeEngine && connectTo != $(input.address).value)
        {
            popup_ComputeEngine_Enabled();
            return;
        }

        $(input.address).value = connectTo;
        cnctButtonClick();
	    e.preventDefault();
    }   
    catch (e)
    {
        logException(e);
    }
}
function connectBookmarkNewWindow(e)
{
    try
    {
	    var connectTo = getHREFTargetValue(e);
	    if(connectTo)
	    {
		    var targetPage = 'nacl.html#' + connectTo.replace(":", "%3A");
		    if(typeof chrome.app.window !== 'undefined')
		    {
		        var left = appWindow.outerBounds.left + 50;
		        var top = appWindow.outerBounds.top + 50;
		        var width = appWindow.innerBounds.width;
		        var height = appWindow.innerBounds.height;
		        var state = "normal";

		        if (appWindow.isFullscreen())
		        {
		            state = "fullscreen";
		        }
		        else if (appWindow.isMaximized())
		        {
		            state = "maximized";
		        }

		        chrome.app.window.create(targetPage, {
		            'left': left,
		            'top': top,
		            'width': width,
		            'height': height,
		            'state': state
		        }, function (createdWindow)
		        {
		        });
		    }
		    else
		    {
			    window.open(targetPage, '_blank');
		    }
	    }
	
	    e.preventDefault();
    }   
    catch (e)
    {
        logException(e);
    }
}

function getHREFTargetValue(e)
{
    try
    {
	    var href = false;
	    if(typeof e.target.parentNode.attributes.href !== 'undefined')
	    {
		    href = e.target.parentNode.attributes.href.value;
	    }
	    else if(typeof e.target.attributes.href !== 'undefined')
	    {
		    href = e.target.attributes.href.value;
	    }
	    return href;
    }   
    catch (e)
    {
        logException(e);
    }
}
function initializeTabView(tabbedID)
{
    try
    {
	    var parent = $(tabbedID);
	    var tabs = parent.children[ID.settingsTabs].children;
	    for(var i = 0; i < tabs.length; i++)
	    {
		    var tab = tabs[i]; 	
		    tab.addEventListener("click", tabClicked, false);
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

var tabViewDisabled = false;

function tabClicked(e)
{
    try
    {
        if (tabViewDisabled)
            return;

	    var target = e.currentTarget;
	    var child = e.currentTarget;
	
	    var tabNumber = 0;
	    while((child = child.previousElementSibling) != null)
	    {
		    tabNumber++;
	    }
	    var popupid = e.currentTarget.parentNode.parentNode.id;
	    setTab(popupid, tabNumber);
	}   
    catch (e)
    {
        logException(e);
    }
}
function setTab(popupid, pageindex)
{
    try
    {
	    var target = $(popupid)
	    var tabs = target.children[ID.settingsTabs].children;
	    for(var i = 0; i < tabs.length; i++)
	    {
		    var tab = tabs[i];
		    tab.className = (i == pageindex) ? "active" : "";
	    }

	    var pages =  target.children[ID.settingsPages].children;
	    for(var i = 0; i < pages.length; i++)
	    {
		    var page = pages[i];
		    page.style.display  = (i == pageindex) ? '' : 'none';
	    }

	    popupReposition(false);
    }   
    catch (e)
    {
        logException(e);
    }
}

var titlePrefix = "Chrome RDP - ";

function backupBookmarks()
{
    try
    {
	    chrome.bookmarks.search(titlePrefix, saveRDPBookmarks)
    }   
    catch (e)
    {
        logException(e);
    }
}

function saveRDPBookmarks(bookmarkTreeNodes)
{
    try
    {
	    var addresses = new Array();
	    for (i = 0; i < bookmarkTreeNodes.length; i++)
	    {
		    var url = bookmarkTreeNodes[i].url;
		    var poundIndex = url.indexOf("#");
		    if(poundIndex > 0)
		    {
			    var address = url.slice(poundIndex + 1 ).trim();
			    if(!blankNullorUndefined(address))
			    {
				    var title = bookmarkTreeNodes[i].title.slice(titlePrefix.length).trim();
				    if(blankNullorUndefined(title))
				    {
					    title = address;
				    }

				    var obj = {title:null,address:null};
				    obj.title = title;
				    obj.address = address;
				    addresses.push(obj);
			    }	
		    }
	    }

	    if (addresses.length > 0)
	    {
		    bookmarkObj.MassAddConnections(addresses)
	    }
    }   
    catch (e)
    {
        logException(e);
    }
}

var _sessionTabIsMouseDown = 0;

function sessionTabMouseUp()
{
    try
    {
        sessionUserControlsStopWatch();

	    var tab = $(ID.menutab);
        tab.onmousemove = null;
	    tab.onmouseout = null;
    
        _sessionTabIsMouseDown = 0;
    
        sessionUserControlsStartWatch();
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionTabMouseDown(e)
{
    try
    {
        sessionUserControlsStopWatch();

	    var tab = $(ID.menutab);
	    tab.onmousemove = sessionTabMouseMove;
	    tab.onmouseout = sessionTabMouseOut;

        _sessionTabIsMouseDown = 1;
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionTabMouseMove(e)
{
    try
    {
        sessionUserControlsStopWatch();
        
        _sessionTabIsMouseDown = 1;
   
	    var tab = $(ID.menutab);
	    var postion = e.clientX;
	    var tabWidth = tab.offsetWidth;
	    if ((tabWidth % 2) != 0)
	    {
		    tabWidth-=1;
	    }
	    var halftab = tabWidth / 2;
	    var controlcontainer = $(ID.userControls);
	    var controlpostionLeft =  controlcontainer.offsetLeft
	    var controlpostionRight =  controlcontainer.offsetWidth - halftab;
	    var newPos = postion - controlpostionLeft - halftab;
	    if ((newPos + halftab) > (controlpostionRight - 3))
	    {
		    newPos = controlpostionRight - halftab - 4;
	    }
	    else if (newPos < 3)
	    {
		    newPos = 3;
	    }
	    tab.style.marginLeft =  newPos + 'px';
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionTabMouseOut()
{
    try
    {
//        return;
//        sessionUserControlsStopWatch();

//	    var tab = $(ID.menutab);
//        tab.onmousemove = null;
//	    tab.onmouseout = null;
//         
//        _sessionTabIsMouseDown = 0;
//   
//        sessionUserControlsStartWatch();
    }   
    catch (e)
    {
        logException(e);
    }
}

var _sessionUserControlsInterval = null;

function sessionUserControlsWaitForClose()
{
    try
    {
        sessionUserControlsStopWatch();
        
        if (!$(ID.sessionMenu).classList.contains(cssClass.shown))
            return;

        toggleShown(ID.sessionMenu);
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionUserControlsStopWatch()
{
    try
    {
        if ((null !== _sessionUserControlsInterval))
		{
			clearInterval(_sessionUserControlsInterval);
			_sessionUserControlsInterval = null;
		}   
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionUserControlsStartWatch()
{
    try
    {
        sessionUserControlsStopWatch();

        _sessionUserControlsInterval = setInterval(sessionUserControlsWaitForClose, 1000);     
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionUserControlsMouseMove(mouseEvent)
{
    try
    {
        sessionUserControlsStopWatch();
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionUserControlsMouseOut(mouseEvent)
{
    try
    {
        sessionUserControlsStartWatch();
    }   
    catch (e)
    {
        logException(e);
    }
}

function sessionMouseUp(mouseEvent)
{
    try
    {
        if (_sessionTabIsMouseDown == 1)
        {
            sessionTabMouseUp(mouseEvent);
        }
    }   
    catch (e)
    {
        logException(e);
    }
}
function sessionMouseMove(mouseEvent)
{
    try
    {
        if (_sessionTabIsMouseDown == 1)
        {
            sessionTabMouseMove(mouseEvent);
        }
    }   
    catch (e)
    {
        logException(e);
    }
}

function documentContextMenuPreventDefault(e) 
{
    try
    {
        e.preventDefault(); 
    }   
    catch (e)
    {
        logException(e);
    }
}

try
{
    document.addEventListener('DOMContentLoaded', initForm, false);
    document.addEventListener('DOMContentUnloaded', pageDidUnload, false);
    //document.addEventListener('contextmenu', documentContextMenuPreventDefault, false);
}   
catch (e)
{
    logException(e);
}










	//Dont hurt yourself looking down.
