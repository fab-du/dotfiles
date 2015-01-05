function popupResponse(value)
{
    try
    {
		popupResponse2(value, true);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function popupResponse2(value, getValue)
{
    try
    {
		var alertWithoutHideOnResponse = 4;
        var inputPopupCallback = 0;

        if (ChromerdpModule != null && getValue)
	    {
		    inputPopupCallback = parseInt($(popupIDs.callback).value);
	    }

        if (inputPopupCallback != alertWithoutHideOnResponse && inputPopupCallback != -1)
        {
            popupPosition(popupState.shrink);
        }

	    if (ChromerdpModule != null)
	    {
		    //var inputPopupCallback = parseInt($(popupIDs.callback).value);
		    if (inputPopupCallback > 0)//Negative numbers stay on client, positive numbers are sent to server
		    {
			    var response = [];
			    response.push(inputPopupCallback);

			    if (typeof value !== 'undefined' && parseInt(value) != 'NaN' && parseInt(value) > 0)
			    {
				    response.push("1");
			    }
			    else
			    {
				    response.push("0");
			    }

			    var optionalInputs = [];

			    var fields = getOptionalFieldArray();

			    for (var i = 0; i < fields.length; i++)
			    {
				    var field = fields[i];
				    if (field && field.visible())
				    {
					    optionalInputs.push(field.id);
					    optionalInputs.push(field.valueEl.value);
				    }
			    }

			    if (optionalInputs.length > 0)
			    {
				    response.push(join(optionalInputs));
			    }

			    sendMessage(command.popup, response);
		    }
		    else if (inputPopupCallback == 0)
		    {
			    sendMessage(command.popup);
		    }
		    else
		    {
			    switch (inputPopupCallback)
			    {
				    case -1: // settings window
					    var saved = saveSettings(value);
					    if(saved){popupPosition(popupState.shrink);};
					    break;
				    case -2:
					    $(ID.contents).classList.add(cssClass.busy);
					    $(ID.prompt).innerText = "Processing..."
					    sendMessage(command.clearSSLCache);
					    break;
			        case -3:
			            if (!blankNullorUndefined(value) && value == 1)
			            {
			                showKeyboardLayout_Save(value);
			            }
			            break;
                    case -1000:
                        break;
			    }
		    }
		
	    }
    }   
    catch (e)
    {
        console.log(e);
    }
}
function screenSizeDropdownValueChanged(e)
{
    try
    {
	    var selectedvalue = e.target.value;
	    toggleCustomScreenSizeRequirement(selectedvalue)
    }   
    catch (e)
    {
        console.log(e);
    }
}
function toggleCustomScreenSizeRequirement(selectedvalue)
{
    try
    {
	    var screenwidth = $(input.ScreenWidth);
	    var screenheight = $(input.ScreenHeight);
	    if(selectedvalue == "Custom")
	    {
		    showObject(ID.customScreenSize);
		    screenwidth.addEventListener("change", validateCustomScreenSize);
		    screenheight.addEventListener("change", validateCustomScreenSize);
		    screenwidth.required = true;
		    screenheight.required = true;
	    }
	    else
	    {
		    hideObject(ID.customScreenSize);
		    screenwidth.removeEventListener("change", validateCustomScreenSize);
		    screenheight.removeEventListener("change", validateCustomScreenSize);
		    screenwidth.required = false;
		    screenheight.required = false;
	    }
    }   
    catch (e)
    {
        console.log(e);
    }
}
function validateCustomScreenSize(e)
{
    try
    {
	    if(e.target.validity.valid)
	    {
		    e.target.style.borderColor = "";
	    }
	    else
	    {
		    e.target.style.borderColor = "red";
	    }
    }   
    catch (e)
    {
        console.log(e);
    }
}
function validateSettingsOnSave()
{
    try
    {
	    var formValid = true;
	    var currentfield = $(input.ScreenWidth);
	    if (currentfield.required && !currentfield.validity.valid)
	    {
		    formValid = false;
		    currentfield.style.borderColor = "red";
	    }
	    else
	    {
		    currentfield.style.borderColor = "";
	    }

	    var currentfield = $(input.ScreenHeight);
	    if (currentfield.required && !currentfield.validity.valid)
	    {
		    formValid = false;
		    currentfield.style.borderColor = "red";
	    }
	    else
	    {
		    currentfield.style.borderColor = "";
	    }

	    var currentfield = $(input.ComputerName);
	    if (currentfield.required && !currentfield.validity.valid)
	    {
		    formValid = false;
		    currentfield.style.borderColor = "red";
	    }
	    else
	    {
		    currentfield.style.borderColor = "";
	    }

	    return formValid;
    }   
    catch (e)
    {
        console.log(e);
    }
}

function saveSettings(value)
{
    try
    {
	    if (blankNullorUndefined(value))
	    {
		    return true;
	    }
	    var formValid = validateSettingsOnSave();
	    if(!formValid)
	    {
		    return false;
	    }

	    var control = null;
	    var controlVal = null;

	    control = $(input.ScreenSize);
	    controlValue = control.options[control.selectedIndex].value;
	    settingsObj.values.screensize = controlValue.toString()

	    if (controlValue == "Custom")
	    {
		    control = $(input.ScreenHeight);
		    controlValue = control.value;
		    settingsObj.values.customScreenHeight = controlValue.toString()

		    control =  $(input.ScreenWidth);
		    controlValue =control.value;
		    settingsObj.values.customScreenWidth = controlValue.toString()
	    }

	    control = $(input.ScreenDepth);
	    controlValue = control.options[control.selectedIndex].value;
	    settingsObj.values.screendepth = controlValue.toString()

        control = $(input.Language);
	    controlValue = control.options[control.selectedIndex].value;
	    settingsObj.values.language = controlValue.toString()

	    control = $(input.Keyboard);
	    controlValue = control.options[control.selectedIndex].value;
	    settingsObj.values.keyboard = controlValue.toString()

	    control = $(input.ComputerName);
	    controlValue = control.value;
	    if(blankNullorUndefined(controlValue))
	    {
		    controlValue = "ChromeRDP";
	    }
	    settingsObj.values.computername = controlValue.toString()

	    control = $(input.SSHTunnel);
	    controlValue = control.checked;
	    settingsObj.values.allowssh = controlValue.toString()	
    
	    control = $(input.AllowNonNLAConnections);
	    controlValue = control.checked;
	    settingsObj.values.allowNonNLA = controlValue.toString()

	    control = $(input.UseTcpNoDelay);
	    controlValue = control.checked;
	    settingsObj.values.useTcpNoDelay = controlValue.toString()	
    
	    control = $(input.StorePasswords);
	    controlValue = control.checked;
	    settingsObj.values.storepasswords = controlValue.toString()

	    control = $(input.AdminConsole);
	    controlValue = control.checked;
	    env.adminConsole

	    control = $(input.DebugLevel);
	    controlValue = control.options[control.selectedIndex].value;
	    settingsObj.values.debugLevel = parseInt(controlValue);
        env.debugLevel = settingsObj.values.debugLevel;

	    control = $(input.ShowWallpaper);
	    controlValue = control.checked;
	    settingsObj.values.showwallpaper = controlValue.toString()

	    control = $(input.TimeZone);
	    controlValue = control.options[control.selectedIndex].value;
	    settingsObj.values.timeZone = controlValue.toString()

	    control = $(input.DisableFullWindowDrag);
	    controlValue = control.checked;
	    settingsObj.values.disableFullWindowDrag = controlValue.toString()

	    control = $(input.DisableMenuAnimations);
	    controlValue = control.checked;
	    settingsObj.values.disableMenuAnimations = controlValue.toString()

	    control = $(input.DisableTheming);
	    controlValue = control.checked;
	    settingsObj.values.disableTheming = controlValue.toString()

	    control = $(input.DisableCursorShadow);
	    controlValue = control.checked;
	    settingsObj.values.disableCursorShadow = controlValue.toString()

	    control = $(input.DisableCursorBlinking);
	    controlValue = control.checked;
	    settingsObj.values.disableCursorBlinking = controlValue.toString()

	    control = $(input.EnableFontSmoothing);
	    controlValue = control.checked;
	    settingsObj.values.enableFontSmoothing = controlValue.toString()

	    control = $(input.EnableDesktopComposition);
	    controlValue = control.checked;
	    settingsObj.values.enableDesktopComposition = controlValue.toString()

	    //setStartScreen();
	    //setScreenSize();
	    settingsObj.save();

        if (settingsObj.values.storepasswords != "true")
        {
            bookmarkObj.ClearPasswords();
            mruObj.ClearPasswords();
        }

        sendEnvironment();
	
        return true;
    }   
    catch (e)
    {
        console.log(e);
    }
}
function showSettings()
{
    try
    {
	    requestCertificates();
	    var settings = $(ID.settings);
	    var screenSize = settingsObj.values.screensize;
	    var customScreenWidth = settingsObj.values.customScreenWidth;
	    var customScreenHeight = settingsObj.values.customScreenHeight;
	    var screenDepth = settingsObj.values.screendepth;
	    var language = settingsObj.values.language;
        var keyboard = settingsObj.values.keyboard;
        var timeZone = settingsObj.values.timeZone;
        var computername = settingsObj.values.computername;
        var allowssh = ((settingsObj.values.allowssh == "true") ? true : false);
        var allowNonNLA = ((settingsObj.values.allowNonNLA == "true") ? true : false);
        var useTcpNoDelay = ((settingsObj.values.useTcpNoDelay == "true") ? true : false);
        var storepasswords = ((settingsObj.values.storepasswords == "true") ? true : false);
        var showwallpaper = ((settingsObj.values.showwallpaper == "true") ? true : false);
        var disableFullWindowDrag = ((settingsObj.values.disableFullWindowDrag == "true") ? true : false);
        var disableMenuAnimations = ((settingsObj.values.disableMenuAnimations == "true") ? true : false);
        var disableTheming = ((settingsObj.values.disableTheming == "true") ? true : false);
        var disableCursorShadow = ((settingsObj.values.disableCursorShadow == "true") ? true : false);
        var disableCursorBlinking = ((settingsObj.values.disableCursorBlinking == "true") ? true : false);
        var enableFontSmoothing = ((settingsObj.values.enableFontSmoothing == "true") ? true : false);
        var enableDesktopComposition = ((settingsObj.values.enableDesktopComposition == "true") ? true : false);
        var debugLevel = settingsObj.values.debugLevel;

	    settings.classList.remove(cssClass.nodisplay);
	    if (!blankNullorUndefined(screenSize))
	    {
		    $(input.ScreenSize).value = screenSize;
		    toggleCustomScreenSizeRequirement(screenSize);
	    }
	    if (!blankNullorUndefined(customScreenWidth))
	    {
		    $(input.ScreenWidth).value = customScreenWidth;
	    }
	    if (!blankNullorUndefined(customScreenHeight))
	    {
		    $(input.ScreenHeight).value = customScreenHeight;
	    }
	    if (!blankNullorUndefined(screenDepth)) {
	 	    $(input.ScreenDepth).value = screenDepth;
	    }
        if (!blankNullorUndefined(language)) {
	 	    $(input.Language).value = language;
	    }
        if (!blankNullorUndefined(keyboard)) {
            $(input.Keyboard).value = keyboard;
        }
        if (!blankNullorUndefined(computername)) {
	 	    $(input.ComputerName).value = computername;
        }
        if (!blankNullorUndefined(timeZone))
        {
            $(input.TimeZone).value = timeZone;
        }
        
        if ($(input.TimeZone).selectedIndex == -1)
        {
            $(input.TimeZone).value = -1;
        }

	    $(input.SSHTunnel).checked = allowssh;
	    $(input.AllowNonNLAConnections).checked = allowNonNLA;
	    $(input.UseTcpNoDelay).checked = useTcpNoDelay;
	    $(input.StorePasswords).checked = storepasswords;
	    $(input.ShowWallpaper).checked = showwallpaper;
	    $(input.DisableFullWindowDrag).checked = disableFullWindowDrag;
	    $(input.DisableMenuAnimations).checked = disableMenuAnimations;
	    $(input.DisableTheming).checked = disableTheming;
	    $(input.DisableCursorShadow).checked = disableCursorShadow;
	    $(input.DisableCursorBlinking).checked = disableCursorBlinking;
	    $(input.EnableFontSmoothing).checked = enableFontSmoothing;
	    $(input.EnableDesktopComposition).checked = enableDesktopComposition;

        var debugLevelControl = $(input.DebugLevel);
        debugLevelControl.selectedIndex = 0;
	    for (var i = 0; i < debugLevelControl.options.length; i++)
        {
            if (debugLevelControl.options[i].value == debugLevel)
            {
                debugLevelControl.selectedIndex = i;
                break;
            }
        }

	    setTab(ID.settings, 0);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function showAbout()
{
    try
    {
        console.log(window.navigator.userAgent);

	    var popup_about = $(ID.popup_about);
        var popup_chromerdp_version_label = $(ID.popup_chromerdp_version_label)
        var popup_chromeos_version_label = $(ID.popup_chromeos_version_label)
        
        //if (popup_chromerdp_version_label.innerHTML == "#VERSION_NUMBER#")
        //{
        //    popup_chromerdp_version_label.innerHTML = "Unknown";
        //}

        var manifest = chrome.runtime.getManifest();
        var current_version = manifest.version;

        popup_chromerdp_version_label.innerHTML = current_version;

        var chromeOSVersion = "Unknown";
        
        try
        {
            chromeOSVersion = window.navigator.appVersion.match(/Chrome\/(.*?) /)[1];
        }   
        catch (e)
        {
            console.log(e);
        }

	    popup_chromeos_version_label.innerHTML = chromeOSVersion;

        popup_about.classList.remove(cssClass.nodisplay);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function showAlert(message)
{
    try
    {
	    showPopUp(null, message, null, 'OK', null, null);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function showPopUp(callback, message, title, agreeButton, disagreeButton, optionalInputs)
{
    showPopUp2(callback, message, title, agreeButton, disagreeButton, optionalInputs, 0)
}

function showPopUp2(callback, message, title, agreeButton, disagreeButton, optionalInputs, useResponse)
{
    try
    {
        var popup = $(popupIDs.popup);
	    var head = $(popupIDs.head);
	    var btnYes = $(popupIDs.btnYes);
	    var btnSpacer = $(popupIDs.btnSpacer);
	    var btnNo = $(popupIDs.btnNo);
	    var cBack = $(popupIDs.callback);
	    var settings = $(ID.settings);
	    var popup_about = $(ID.popup_about);
	    var popup_keyboard_layout = $(ID.popup_keyboard_layout);
	    var popupBody = $(popupIDs.body);
	    var optionalInputsTable = $(popupIDs.optional_inputs);
        var popup_auth_section = $(popupIDs.popup_auth_section);
   
        if (message == "" && title == "")
        {
            popupBody.style.display = "none";
            popup_auth_section.style.display = "block";
        }
        else
        {
            popupBody.style.display = "block";
            popup_auth_section.style.display = "none";
        }

	    // Reset everything's display, show things as they are needed
	    head.classList.add(cssClass.nodisplay);
	    btnYes.classList.add(cssClass.nodisplay);
	    btnSpacer.classList.add(cssClass.nodisplay);
	    btnNo.classList.add(cssClass.nodisplay);
	    settings.classList.add(cssClass.nodisplay);
	    popup_about.classList.add(cssClass.nodisplay);
	    popup_keyboard_layout.classList.add(cssClass.nodisplay);
	    popupBody.classList.add(cssClass.nodisplay);
	    optionalInputsTable.classList.add(cssClass.nodisplay);
	   
	    // Validate the popup content
	    //if (blankNullorUndefined(message))
	    //{
	    //	return;
	    //}
	
	    // Assign default values where non exist
	    callback = (!blankNullorUndefined(callback)) ? callback : "none"

	    if (!blankNullorUndefined(title))
	    {
		    $(popupIDs.head).classList.remove(cssClass.nodisplay);
	    }

	    title = (!blankNullorUndefined(title)) ? title : defaultPopupTitle;

	    // Set the popup content.
	    $(popupIDs.head).innerText = title;
	    $(popupIDs.body).innerHTML = message;
	    cBack.value = callback;

	    // set available buttons
	    if (!blankNullorUndefined(agreeButton))
	    {
		    btnYes.classList.remove(cssClass.nodisplay);
		    btnYes.innerText = agreeButton;
		    btnYes.focus();
	    }

	    if (!blankNullorUndefined(disagreeButton)) 
        {
		    btnNo.classList.remove(cssClass.nodisplay);
		    btnNo.innerText = disagreeButton;
		    btnNo.focus();
	    }

	    if (!blankNullorUndefined(agreeButton) && !blankNullorUndefined(disagreeButton))
	    {
		    btnSpacer.classList.remove(cssClass.nodisplay);
	    }

	    if (optionalInputs && optionalInputs.length > 0)
	    {
		    optionalInputsTable.classList.remove(cssClass.nodisplay);

		    var fields = getOptionalFieldArray();

		    // default all containers hidden
		    for (var i = 0; i < fields.length; i++)
		    {
			    var field = fields[i];
			    if (field && field.visible())
			    {
				    field.containerEl.classList.add(cssClass.nodisplay);
			    }
		    }

		    for (var i = 0; i < optionalInputs.length; i+=3)
		    {
			    var field = fields.filter(function (x)
			    {
				    return x.id == optionalInputs[i]
			    }).shift();

			    field.containerEl.classList.remove(cssClass.nodisplay);
			    field.captionEl.innerText = optionalInputs[i + 1];
			    field.valueEl.value = optionalInputs[i + 2];
		    }

		    var hasSetFocus = false;
		    var focusItem = null;

            if (callback == "2" && fields.length == 3) // credentials
            {
                var fieldText1 = fields[0];
                var fieldPassword = fields[1];
                var fieldDomain = fields[2];

                if (!fieldText1.hasValue())
                {
                    fieldText1.valueEl.focus();
                    focusItem = fieldText1;
                    hasSetFocus = true;
                }
                else if (!fieldPassword.hasValue())
                {
                    fieldPassword.valueEl.focus();
                    focusItem = fieldPassword;
                    hasSetFocus = true;
                }
                else
                {
                    fieldPassword.valueEl.focus();
                    fieldPassword.valueEl.setSelectionRange(fieldPassword.valueEl.value.length, fieldPassword.valueEl.value.length);
                    focusItem = fieldPassword;
                    hasSetFocus = true;
                }

                if (fieldText1.length > 0 && fieldPassword.length > 0)
                {
                    watchUseResponse = true;
                }
            }
            else
            {
		        // set focus to the first visible field w/o a value
		        for (var i = 0; i < fields.length; i++)
		        {
			        var field = fields[i];

                    if (field)
			        {
			            var fieldVisible = field.visible();
                        var fieldHasValue = field.hasValue();
                        var fieldValue = field.value;

                        if (fieldVisible && !fieldHasValue)
                        {
				            field.valueEl.focus();
				            focusItem = field;
				            hasSetFocus = true;
				            break;
                        }
			        }
		        }

		        // if focus has not been set, set focus to the last last visible field
		        if (!hasSetFocus)
		        {
			        for (var i = fields.length - 1; i >= 0; i--)
			        {
				        var field = fields[i];

				        if (field)
				        {
                            var fieldVisible = field.visible();
    
                            if (fieldVisible)
                            {            
					            field.valueEl.focus();
					            focusItem = field;
					            hasSetFocus = true;
					            break;
                            }
				        }
			        }
		        }
            }
	    }

        var password_store = $(popupIDs.password_store);
	
        if (callback == "2" && settingsObj.values.storepasswords == "true") // callback '2' == credentials dialog
        {
            password_store.style.display = "table-row";
        }
        else
        {
            password_store.style.display = "none";
        }

	    var refreshlink = $(popupIDs.refreshlink);

	    if (refreshlink)
	    {
		    refreshlink.addEventListener('click', function (e)
		    {
			    //document.location = "chrome-extension://cbkkbcmdlboombapidmoeolnmdacpkch";
                history.go(0);
		    });
	    }
	
        _popupID = callback;

	    if (callback < 0)
	    {
		    switch (callback)
		    {
			    case -1:
				    showSettings()
				    break;
		        case -3:
		            showKeyboardLayout_Init()
		            break;
		        case -1000:
				    showAbout()
				    break;
		    }
	    }
	    else 
	    {
	        if (useResponse != 0)
	        {
	            showPopUp2_Callback(useResponse);
	            //setTimeout(showPopUp2_Callback, 1000);
	            return;
	        }

	        popupBody.classList.remove(cssClass.nodisplay);
	    }

	    popupPosition(popupState.expand);

	    if (focusItem != null)
	    {
	        focusItem.valueEl.focus();
	        focusItem.focus();
	    }
    }
    catch (e)
    {
        console.log(e);
    }
}

function showPopUp2_Callback(response)
{
    popupResponse(response);
}

function OptionalField(id, name)
{
    try
    {
	    this.id = id;
	    this.containerEl = $(name);
	    this.captionEl = $(name + "_caption");
	    this.valueEl = $(name + "_value");

	    this.valueEl.addEventListener('keydown', popupKeyDown);
    }   
    catch (e)
    {
        console.log(e);
    }
}

OptionalField.prototype.visible = function ()
{
    try
    {
	    return !this.containerEl.classList.contains(cssClass.nodisplay);
    }   
    catch (e)
    {
        console.log(e);
    }
}

OptionalField.prototype.hasValue = function ()
{
    try
    {
	    return this.valueEl.value.length > 0;
    }   
    catch (e)
    {
        console.log(e);
    }
}

function getOptionalFieldArray()
{
    try
    {
	    // These ids have only been configured for CredentialModal,
        // if popup is expanded this needs to be refactored based on 
        // how the new fields are going to be handled

	    var text1 = new OptionalField("1", popupIDs.text1);
	    var password = new OptionalField("2", popupIDs.password);
        var domain = new OptionalField("3", popupIDs.domain);

	    // return array orderd by logical location top to bottom
	    return [text1, password, domain];
    }   
    catch (e)
    {
        console.log(e);
    }
}

var _popupState = 0;
var _popupID = 0;

function popupPosition(transitionState, updateBlackScreen)
{
    try
    {
        if (signingin)
            return;

	    var popup = $(popupIDs.popup);
	    var black = $(ID.black);

	    if (transitionState == popupState.expand)
	    {
		    popup.classList.remove(cssClass.scale0);
		    popup.classList.add(cssClass.scale100);

            if (updateBlackScreen == null || updateBlackScreen == true)
            {
                if (black.classList.contains(cssClass.opacity0))
                {
                    black.classList.remove(cssClass.opacity0);
                }

                if (!black.classList.contains(cssClass.opacity50))
                {
		            black.classList.add(cssClass.opacity50);
                }
		    }

		    var popuptop = -(popup.offsetHeight / 2);
		    var popupright = -(popup.offsetWidth / 2);

            popuptop -= 0;
            popupright -= 0;
		
		    popup.style.top = '45%';
		    popup.style.right = '50%';
		    popup.style.marginTop = popuptop + 'px';
		    popup.style.marginRight = popupright + 'px';
        }
	    else
	    {
		    popup.classList.remove(cssClass.scale100);
		    popup.classList.add(cssClass.scale0);

            if (updateBlackScreen == null || updateBlackScreen == true)
            {
                if (_popupID < 0)
                {
                    if (black.classList.contains(cssClass.opacity50))
                    {
                        black.classList.remove(cssClass.opacity50);
                    }

                    if (!black.classList.contains(cssClass.opacity0))
                    {
		                black.classList.add(cssClass.opacity0);
                    }
                }
            }

		    popup.style.removeProperty("top");
		    popup.style.removeProperty("right");
		    popup.style.removeProperty("margin-top");
		    popup.style.removeProperty("margin-right");

		    var popupContainer = $("popupContainer");

		    popupContainer.style.display = "none";
        }

	    _popupState = transitionState;
                
	    if (transitionState == popupState.expand)
	    {
	        popupReposition(true);
	    }
    }   
    catch (e)
    {
        console.log(e);
    }
}

function popupReposition(screenUpdate)
{
    try
    {
        if (_popupState != popupState.expand)
            return;

        var popupContainer = $("popupContainer");
        var popup = $(popupIDs.popup);

        popupContainer.style.display = "";

        var overflow = "";        
        var width = 487;
        var height = 435;
        var hasClientSize = false;

        if (popup.clientWidth != 0)
        {
            width = popup.clientWidth;
            hasClientSize = true;
        }

        if (appWindow.innerBounds.width < width)
        {
            //width = appWindow.innerBounds.width;
            //overflow = "auto";
        }

        popupContainer.style.width = width + "px";
                
        if (popup.clientHeight != 0)
        {
            height = popup.clientHeight;
            hasClientSize = true;
        }

        if (appWindow.innerBounds.height < height)
        {
            //height = appWindow.innerBounds.height;
            //overflow = "auto";
        }

        popupContainer.style.height = height + "px";
        popupContainer.style.overflow = overflow;

        var left = popupContainer.offsetLeft;
        var leftRemaining = left;
        var leftOutOfBounds = false;

        if (left < 0)
        {
            leftOutOfBounds = true;
        }

        var right = left + width + 1;
        var rightRemaining = appWindow.innerBounds.width - right;
        var rightOutOfBounds = false;

        if (right > appWindow.innerBounds.width)
        {
            rightOutOfBounds = true;
        }

        width = right - left;

        var suggestedLeft = Math.round((appWindow.innerBounds.width / 2) - (width / 2));

        if (suggestedLeft < 0)
        {
            suggestedLeft = 0;
        }

        if (leftOutOfBounds || rightOutOfBounds || screenUpdate)
        {
            popupContainer.style.left = suggestedLeft + "px";

            left = suggestedLeft;
        }

        var suggestedTop = Math.round((appWindow.innerBounds.height / 2) - (height / 2));

        if (suggestedTop < 0)
        {
            suggestedTop = 0;
        }

        var heightDiff = appWindow.innerBounds.height - height;

        if (heightDiff > 200)
        {
            heightDiff = Math.round((heightDiff - 200) / 2);

            if (heightDiff > 100)
            {
                heightDiff = 100;
            }

            if (heightDiff > 0)
            {
                suggestedTop -= heightDiff;
            }
        }

        var top = popupContainer.offsetTop;

        if (screenUpdate)
        {
            popupContainer.style.top = suggestedTop + "px";

            top = suggestedTop;
        }

        var topRemaining = top;
        var topOutOfBounds = false;
      
        if (top < 0)
        {
            topOutOfBounds = true;
        }

        var bottom = top + height;
        var bottomRemaining = appWindow.innerBounds.height - bottom;
        var bottomOutOfBounds = false;

        if (bottom > appWindow.innerBounds.height)
        {
            bottomOutOfBounds = true;
        }

        height = bottom - top;

        if (!hasClientSize)
        {
            setTimeout(function () { popupReposition(screenUpdate); }, 100);
            return;
        }
    }
    catch (e)
    {
        console.log(e);
    }
}

function setLicenseURL(URL)
{
    try
    {
	    $(ID.license_link).setAttribute('href', URL);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function doLicenseAuthentication()
{
    try
    {
	    $(ID.license_link).click();
    }   
    catch (e)
    {
        console.log(e);
    }
}

var UIprocessed = false;

function animateShowActivateButton(shouldShow)
{
    try
    {
	    var position = $(ID.activate).offsetTop;

	    if (position == 0 && !shouldShow)
	    {
		    clearAnimationClasses($(ID.activate));
		    $(ID.activate).classList.add(cssClass.homeOutToTop);
		    $(ID.activate).classList.remove(cssClass.marginbottom60);
	    }
	    else if (shouldShow)
	    {
		    clearAnimationClasses($(ID.activate));
		    $(ID.activate).classList.add(cssClass.homeInFromTop);
		    $(ID.activate).classList.add(cssClass.marginbottom60);
	    }
    }   
    catch (e)
    {
        console.log(e);
    }
}

function animateActivateOption(panel, next)
{
    try
    {
	    var position = panel.offsetLeft;

	    clearAnimationClasses(panel);
	    clearAnimationClasses(next);
        	
	    if (position == 0)
	    {
		    panel.classList.add(cssClass.homeOutToRight);
		    next.classList.add(cssClass.homeInFromLeft);
	    }
	    else
	    {
		    panel.classList.add(cssClass.homeInFromLeft);
		    next.classList.add(cssClass.homeOutToRight);
	    }
    }   
    catch (e)
    {
        console.log(e);
    }
}

function clearAnimationClasses(div)
{
    try
    {
	    div.classList.remove(cssClass.homeInFromLeft);
	    div.classList.remove(cssClass.homeInFromLeftFinal);
	    div.classList.remove(cssClass.homeInFromTop);
	    div.classList.remove(cssClass.homeInFromTopFinal);
	    div.classList.remove(cssClass.homeOutToRight);
	    div.classList.remove(cssClass.homeOutToRightFinal);
	    div.classList.remove(cssClass.homeOutToTop);
	    div.classList.remove(cssClass.homeOutToTopFinal);
    }   
    catch (e)
    {
        console.log(e);
    }
}
function requestCertificates()
{
    try
    {
	    var select = $(input.CertificateSelect);
        
        if (select.options.length <= 0)
        {
	        select.options[select.options.length] = new Option("Loading...", 0);
        }
	    
        select.disabled = true;
	    $(input.CertificateDelete).disabled = true;
	    $(input.ClearSSLCache).disabled = true;
	    sendMessage(command.certs_request);
    }   
    catch (e)
    {
        console.log(e);
    }
}
function returnedCertificateHandler(results)
{
    try
    {
	    var certificates = results.split(command.delimeterArgs);

        certificates.sort();
	
	    var select = $(input.CertificateSelect);
	    select.innerHTML = "";

	    for (index in certificates)
	    {
		    if (IsNumeric(index) && certificates[index] != "")
		    {
			    select.options[select.options.length] = new Option(certificates[index], index);
		    }
	    }

	    select.disabled = false;
	    $(input.CertificateDelete).disabled = false;
	    $(input.ClearSSLCache).disabled = false;
    }   
    catch (e)
    {
        console.log(e);
    }
}
function returnedCertificateDeleteHandler()
{
    try
    {
	    requestCertificates();
    }   
    catch (e)
    {
        console.log(e);
    }
}

function certificateDeleteAllButtonClickHandler(e)
{	
    try
    {
        if (simplePopupShowing)
            return;

        var select = $(input.CertificateSelect);
	    var deleteButton = $(input.CertificateDelete);
        var deleteAllButton = $(input.ClearSSLCache);
    
        if (select.options.length == 0)
        {
            simplePopup_showOK("No items are available for deletion.", null);
    
            return;
        }

        simplePopup_showOKCancel("Are you sure you want to delete all listed item(s)?", certificateDeleteAllButtonClickHandler_ok, null);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function certificateDeleteAllButtonClickHandler_ok()
{	
    try
    {
        sendMessage(command.clearSSLCache);

        var select = $(input.CertificateSelect);
	
        while (select.options.length > 0)
        {
            select.options.remove(0);
        }
    }   
    catch (e)
    {
        console.log(e);
    }
}

function certificateDeleteButtonClickHandler(e)
{	
    try
    {
        if (simplePopupShowing)
            return;

        var select = $(input.CertificateSelect);
	    var deleteButton = $(input.CertificateDelete);
	    var deleteAllButton = $(input.ClearSSLCache);

        if (select.options.length == 0)
        {
            simplePopup_showOK("No items are available for deletion.", null);
    
            return;
        }

	    var selected = select.options[select.selectedIndex]

	    if (typeof selected == 'undefined')
        {
    	    simplePopup_showOK("No items have been selected.", null);

            return;
        }

        simplePopup_showOKCancel("Are you sure you want to delete the selected item(s)?", certificateDeleteButtonClickHandler_ok, null);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function certificateDeleteButtonClickHandler_ok()
{
    try
    {
        var select = $(input.CertificateSelect);
	    var deleteButton = $(input.CertificateDelete);
        var deleteAllButton = $(input.ClearSSLCache);

	    var selected = select.options[select.selectedIndex]
	    var selectedvalue = selected.value;
	    var selectedtext = selected.text;
		
	    select.disabled = true;
	    deleteButton.disabled = true;
	    deleteAllButton.disabled = true;

	    sendMessage(command.cert_delete, selectedtext);	
    }   
    catch (e)
    {
        console.log(e);
    }
}

var _keyboardLayout_Language = null;
var _keyboardLayout_StorageKey = null;
var _keyboardLayout_LoadCallback = null;

function keyboardLayout_Load(language, callback)
{
    try
    {
        _keyboardLayout_Language = language;
        _keyboardLayout_StorageKey = "keyboardLayout_" + language;
        _keyboardLayout_LoadCallback = callback;

        chrome.storage.sync.get(_keyboardLayout_StorageKey, keyboardLayout_LoadCallback);
    }
    catch (e)
    {
        logException(e);
    }
}

function keyboardLayout_LoadCallback(result)
{
    try
    {
        var selectOverrideKeys = $("selectOverrideKeys");

        while (selectOverrideKeys.options.length > 0)
        {
            selectOverrideKeys.options.remove(0);
        }

        if (chrome.storage && typeof result !== 'undefined')
        {
            try
            {
                var jsonValue = result[_keyboardLayout_StorageKey];

                if (jsonValue !== 'undefined' && jsonValue != null && jsonValue.length > 0)
                {
                    var items = JSON.parse(jsonValue);
                                        
                    if (items !== 'undefined' && items != null && items.length > 0)
                    {
                        for (var i = 0; i < items.length; i++)
                        {
                            var item = items[i];
                            var currentValue = item.value;
                            var currentAttribute = item.vkey;
                            var newValue = item.code;

                            var option = document.createElement("option");

                            option.addEventListener('dblclick', showKeyboardLayout_Select);

                            option.text = "InvalidKey: value=" + currentValue + " vkey=" + currentAttribute + "; CorrectKey: code=" + newValue + ";";

                            selectOverrideKeys.add(option);
                        }
                    }
                }
            }
            catch (e)
            {
            }
        }

        keyboardLayout_Send();

        if (_keyboardLayout_LoadCallback != null)
        {
            _keyboardLayout_LoadCallback();
        }
    }
    catch (e)
    {
        console.log(e);
    }
}

function keyboardLayout_Send()
{
    try
    {
        var selectOverrideKeys = $("selectOverrideKeys");

        var keyboardLayout = "";

        for (var i = 0; i < selectOverrideKeys.options.length; i++)
        {
            var option = selectOverrideKeys.options[i];

            keyboardLayout += option.text;
        }

        sendMessage(command.keyboardLayout, keyboardLayout);
    }
    catch (e)
    {
        console.log(e);
    }
}

function showKeyboardLayout()
{
    try
    {
        showPopUp(-3, "", "Chrome RDP Keyboard Layout", "OK", "Cancel", null);
    }
    catch (e)
    {
        logException(e);
    }
}

function showKeyboardLayout_Init()
{
    try
    {
        var inputOverrideKeyCurrentValue = $("inputOverrideKeyCurrentValue");
        var inputOverrideKeyCurrentLookup = $("inputOverrideKeyCurrentLookup");
        var inputOverrideKeyNewValue = $("inputOverrideKeyNewValue");

        inputOverrideKeyCurrentValue.value = "";
        inputOverrideKeyCurrentValue.attributes["keyCode"] = null;
        inputOverrideKeyCurrentValue.onkeydown = inputOverrideKeyCurrentValue_KeyDown;
        inputOverrideKeyCurrentValue.onkeypress = inputOverrideKeyCurrentValue_KeyPress;

        inputOverrideKeyCurrentLookup.innerText = "";

        inputOverrideKeyNewValue.value = "";
        //inputOverrideKeyNewValue.attributes["keyCode"] = null;
        //inputOverrideKeyNewValue.onkeydown = inputOverrideKeyNewValue_KeyDown;
        //inputOverrideKeyNewValue.onkeypress = inputOverrideKeyNewValue_KeyPress;

        var popup_keyboard_layout = $(ID.popup_keyboard_layout);

        popup_keyboard_layout.classList.remove(cssClass.nodisplay);
    }
    catch (e)
    {
        console.log(e);
    }
}

function showKeyboardLayout_Save()
{
    try
    {
        var items = new Array();

        for (var i = 0; i < selectOverrideKeys.options.length; i++)
        {
            var item = showKeyboardLayout_GetData(i);

            items.push(item);
        }

        var jsonValue = JSON.stringify(items);

        var save = {};

        save[_keyboardLayout_StorageKey] = jsonValue;

        if (typeof chrome.storage !== 'undefined')
        {
            chrome.storage.sync.set(save, showKeyboardLayout_SaveCallback)
        }
        else
        {
            showKeyboardLayout_SaveCallback();
        }
    }
    catch (e)
    {
        console.log(e);
    }
}

function showKeyboardLayout_SaveCallback()
{
    try
    {
        keyboardLayout_Send();

        setTimeout(showKeyboardLayout_Focus, 100);
    }
    catch (e)
    {
        console.log(e);
    }
}

function showKeyboardLayout_Focus()
{
    try
    {        
        var chrome_rdp = $("chrome_rdp");
        chrome_rdp.focus();
    }
    catch (e)
    {
        console.log(e);
    }
}

function inputOverrideKeyCurrentValue_KeyDown()
{
    try
    {
        var inputOverrideKeyCurrentValue = $("inputOverrideKeyCurrentValue");

        inputOverrideKeyCurrentValue.attributes["keyCode"] = event.keyCode;
        
        sendMessage(command.keyboardLookup, event.keyCode);
    }
    catch (e)
    {
        console.log(e);
    }
}

function inputOverrideKeyCurrentValue_Lookup(keyCode)
{
    try
    {
        var inputOverrideKeyCurrentLookup = $("inputOverrideKeyCurrentLookup");

        inputOverrideKeyCurrentLookup.innerText = "(default key code = " + keyCode + ")";
    }
    catch (e)
    {
        console.log(e);
    }
}

function inputOverrideKeyCurrentValue_KeyPress()
{
    try
    {
        var inputOverrideKeyCurrentValue = $("inputOverrideKeyCurrentValue");

        inputOverrideKeyCurrentValue.value = "";
    }
    catch (e)
    {
        console.log(e);
    }
}

function inputOverrideKeyNewValue_KeyDown()
{
    try
    {
        var inputOverrideKeyNewValue = $("inputOverrideKeyNewValue");

        inputOverrideKeyNewValue.attributes["keyCode"] = event.keyCode;
    }
    catch (e)
    {
        console.log(e);
    }
}

function inputOverrideKeyNewValue_KeyPress()
{
    try
    {
        var inputOverrideKeyNewValue = $("inputOverrideKeyNewValue");

        inputOverrideKeyNewValue.value = "";
    }
    catch (e)
    {
        console.log(e);
    }
}

function buttonSaveOverrideKey_Click()
{
    try
    {
        if (simplePopupShowing)
            return;

        var inputOverrideKeyCurrentValue = $("inputOverrideKeyCurrentValue");
        var inputOverrideKeyNewValue = $("inputOverrideKeyNewValue");

        var currentValue = inputOverrideKeyCurrentValue.value;
        var currentAttribute = inputOverrideKeyCurrentValue.attributes["keyCode"];
        var newValue = inputOverrideKeyNewValue.value;
        //var newAttribute = inputOverrideKeyNewValue.attributes["keyCode"];

        if (currentAttribute == null || currentAttribute.length == 0)
        {
            simplePopup_showOK("The invalid key has not been selected", null);

            return;
        }
        
        if (newValue == null || newValue.length == 0)
        {
            simplePopup_showOK("The correct key code has not been selected", null);

            return;
        }
        
        if (isNaN(newValue) || Number(newValue) == 0)
        {
            simplePopup_showOK("The key code '" + newValue + "' is not valid", null);

            return;
        }
        
        var option = showKeyboardLayout_Find(currentAttribute);
        var found = false;

        if (option != 'undefined' && option != null)
        {
            found = true;
        }
        else
        {
            option = document.createElement("option");

            option.addEventListener('dblclick', showKeyboardLayout_Select);
        }

        option.text = "InvalidKey: value=" + currentValue + " vkey=" + currentAttribute + "; CorrectKey: code=" + newValue + ";";

        var selectOverrideKeys = $("selectOverrideKeys");

        if (!found)
        {
            selectOverrideKeys.add(option);
        }

        selectOverrideKeys.focus();

        option.selected = true;
    }
    catch (e)
    {    
        console.log(e);
    }
}

function showKeyboardLayout_Select(e)
{
    try
    {        
        var selectOverrideKeys = $("selectOverrideKeys");
        
        var keyboardData = showKeyboardLayout_GetData(selectOverrideKeys.selectedIndex);

        if (keyboardData == 'undefined' || keyboardData == null)
            return;

        var value = keyboardData.value;
        var vkey = keyboardData.vkey;
        var code = keyboardData.code;

        var inputOverrideKeyCurrentValue = $("inputOverrideKeyCurrentValue");
        var inputOverrideKeyNewValue = $("inputOverrideKeyNewValue");

        inputOverrideKeyCurrentValue.value = value;
        inputOverrideKeyCurrentValue.attributes["keyCode"] = vkey;
        inputOverrideKeyNewValue.value = code;

        inputOverrideKeyCurrentValue.focus();

        sendMessage(command.keyboardLookup, vkey);
    }
    catch (e)
    {
        console.log(e);
    }
}

function showKeyboardLayout_Find(vkey)
{
    try
    {                
        for (var i = 0; i < selectOverrideKeys.options.length; i++)
        {
            var keyboardData = showKeyboardLayout_GetData(i);

            if (keyboardData != 'undefined' && keyboardData != null)
            {
                if (keyboardData.vkey == vkey)
                    return selectOverrideKeys.options[i];
            }
        }

        return null;
    }
    catch (e)
    {
        console.log(e);
    }
}

function showKeyboardLayout_GetData(index)
{
    try
    {
        var selected = selectOverrideKeys.options[index];

        if (typeof selected == 'undefined')
            return;

        selected = selected.text;

        var index1 = selected.indexOf("value=");
        index1 += 6;
        var index3 = selected.indexOf("vkey=", index1);
        var index2 = index3 - 1;
        index3 += 5;
        var index4 = selected.indexOf(";", index3);
        var index5 = selected.indexOf("code=", index4);
        index5 += 5;
        var index6 = selected.indexOf(";", index5);

        var value = selected.substring(index1, index2);
        var vkey = selected.substring(index3, index4);
        var code = selected.substring(index5, index6);

        var keyboardData =
        {
            "value": value,
            "vkey": vkey,
            "code": code,
        };

        return keyboardData;
    }
    catch (e)
    {
        console.log(e);
    }
}

function buttonDeleteOverrideKey_Click()
{
    try
    {
        if (simplePopupShowing)
            return;

        var selectOverrideKeys = $("selectOverrideKeys");
        
        if (selectOverrideKeys.options.length == 0)
        {
            simplePopup_showOK("No items are available for deletion.", null);

            return;
        }
        
        var selected = selectOverrideKeys.options[selectOverrideKeys.selectedIndex];

	    if (typeof selected == 'undefined')
        {
    	    simplePopup_showOK("No items have been selected.", null);

            return;
        }

	    simplePopup_showOKCancel("Are you sure you want to delete the selected item(s)?", buttonDeleteOverrideKey_OK, null);
    }
    catch (e)
    {    
        console.log(e);
    }
}

function buttonDeleteOverrideKey_OK()
{
    try
    {
        var selectOverrideKeys = $("selectOverrideKeys");
        
        selectOverrideKeys.options.remove(selectOverrideKeys.selectedIndex);
    }
    catch (e)
    {    
        console.log(e);
    }
}

function buttonDeleteAllOverrideKeys_Click()
{
    try
    {
        if (simplePopupShowing)
            return;

        var selectOverrideKeys = $("selectOverrideKeys");
        
        if (selectOverrideKeys.options.length == 0)
        {
            simplePopup_showOK("No items are available for deletion.", null);

            return;
        }

        simplePopup_showOKCancel("Are you sure you want to delete all listed item(s)?", buttonDeleteAllOverrideKeys_OK, null);
    }
    catch (e)
    {    
        console.log(e);
    }
}

function buttonDeleteAllOverrideKeys_OK()
{
    try
    {
        var selectOverrideKeys = $("selectOverrideKeys");

        while (selectOverrideKeys.options.length > 0)
        {
            selectOverrideKeys.options.remove(0);
        }
    }
    catch (e)
    {    
        console.log(e);
    }
}

function storePasswordsClickHandler()
{
    try
    {
        var storePasswords = $(input.StorePasswords);

        if (storePasswords.checked == true)
        {
            var message = "WARNING: While stored passwords are encrypted, there is still a potential security risk. By enabling this functionality, you are agreeing to store passwords at your own risk.";
                                    
            simplePopup_showOKCancel(message, null, storePasswordsClickHandler_cancel);
        }
    }   
    catch (e)
    {
        console.log(e);
    }
}

function storePasswordsClickHandler_cancel()
{
    try
    {
        var storePasswords = $(input.StorePasswords);

        storePasswords.checked = false;
    }   
    catch (e)
    {
        console.log(e);
    }
}

var simplePopup_callback_ok = null;
var simplePopup_callback_cancel = null;

function simplePopup_init()
{
    try
    {
        var simplePopup_button_ok = $("simplePopup_button_ok");
        var simplePopup_button_cancel = $("simplePopup_button_cancel");
    
        simplePopup_button_ok.addEventListener('click', simplePopup_button_ok_click);
        simplePopup_button_cancel.addEventListener('click', simplePopup_button_cancel_click);

        simplePopup_callback_ok = null;
        simplePopup_callback_cancel = null;

        //simplePopup_callback_ok = simplePopup_callback_ok_test;
        //simplePopup_callback_cancel = simplePopup_callback_cancel_test;
        //simplePopup_showOKCancel("my test popup!", true);

        // this is stupid but the popup doesn't size correctly the first time around and this solves it
        simplePopup_show("Some really long starter text to help initialize the size of this popup", true, null, true, null);
        simplePopup_hide();
    }   
    catch (e)
    {
        console.log(e);
    }
}

function simplePopup_showOK(message, callbackOKButton)
{
    try
    {
        simplePopup_show(message, true, callbackOKButton, false, null);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function simplePopup_showCancel(message, callbackCancelButton)
{
    try
    {
        simplePopup_show(message, false, null, true, callbackCancelButton);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function simplePopup_showOKCancel(message, callbackOKButton, callbackCancelButton)
{
    try
    {
        simplePopup_show(message, true, callbackOKButton, true, callbackCancelButton);
    }   
    catch (e)
    {
        console.log(e);
    }
}

var simplePopupShowing = false;

function simplePopup_show(message, showOKButton, callbackOKButton, showCancelButton, callbackCancelButton)
{
    try
    {
        tabViewDisabled = true;
    
        simplePopup_callback_ok = callbackOKButton;
        simplePopup_callback_cancel = callbackCancelButton;

        var simplePopup_div = $("simplePopup_div");
        var simplePopup_message_section = $("simplePopup_message_section");
        var simplePopup_label_body = $("simplePopup_label_body");
        var simplePopup_cell_ok = $("simplePopup_cell_ok");
        var simplePopup_cell_cancel = $("simplePopup_cell_cancel");
    
        simplePopup_div.classList.add(cssClass.simplePopup_show);
        simplePopup_div.classList.remove(cssClass.simplePopup);

        simplePopup_message_section.style.display = "block";
        
        if (showOKButton == true)
        {
            simplePopup_cell_ok.style.display = "table-cell";
        }
        else
        {
            simplePopup_cell_ok.style.display = "none";
        }

        if (showCancelButton == true)
        {
            simplePopup_cell_cancel.style.display = "table-cell";
        }
        else
        {
            simplePopup_cell_cancel.style.display = "none";
        }

        simplePopup_label_body.innerHTML = message;

        simplePopup_div.style.display = "block";

	    var top = -(simplePopup_div.offsetHeight / 2);
        var left = (simplePopup_div.offsetWidth / 2);
	    var right = -(simplePopup_div.offsetWidth / 2);

        top -= 50;
        //right += 25;
		
	    simplePopup_div.style.top = '50%';
	    simplePopup_div.style.right = '50%';
	    simplePopup_div.style.marginTop = top + 'px';
	    simplePopup_div.style.marginLeft = left + 'px';
	    simplePopup_div.style.marginRight = right + 'px';
    
        simplePopupShowing = true;
    }   
    catch (e)
    {
        console.log(e);
    }    
}

function simplePopup_hide()
{
    try
    {
        simplePopupShowing = false;

        simplePopup_callback_ok = null;
        simplePopup_callback_cancel = null;

        var simplePopup_div = $("simplePopup_div");
        simplePopup_div.style.display = "none";
        
        simplePopup_div.classList.remove(cssClass.simplePopup_show);
        simplePopup_div.classList.add(cssClass.simplePopup);
        
        tabViewDisabled = false;
    }   
    catch (e)
    {
        console.log(e);
    }
}

function simplePopup_button_ok_click()
{
    try
    {
        if (simplePopup_callback_ok != null)
        {   
            simplePopup_callback_ok();
        }

        simplePopup_hide();
    }   
    catch (e)
    {
        console.log(e);
    }
}

function simplePopup_button_cancel_click()
{
    try
    {
        if (simplePopup_callback_cancel != null)
        {   
            simplePopup_callback_cancel();
        }

        simplePopup_hide();
    }   
    catch (e)
    {
        console.log(e);
    }
}
