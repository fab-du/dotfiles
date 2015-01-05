(function ()
{

	var SettingsObj = function(loadedCallback)
	{
		this.callback = loadedCallback;
		this.key = 'settings';
		this.ready = false;

		this.values = 
		{
			screensize			    : "Automatic",
			screendepth			    : "32",
			language			    : "0x00000409",
			computername		    : "ChromeRDP",
			allowssh			    : "false",
			allowNonNLA			    : "false",
			useTcpNoDelay		    : "false",
			storepasswords		    : "false",
			showwallpaper		    : "false",
			customScreenWidth	    : 800,
			customScreenHeight	    : 600,
			debugLevel              : 0,
			disableFullWindowDrag   : "false",
			disableMenuAnimations   : "false",
			disableTheming          : "false",
			disableCursorShadow     : "false",
			disableCursorBlinking   : "false",
			enableFontSmoothing     : "false",
			enableDesktopComposition: "false",
			keyboard                : "0x00000004",
            timeZone                : -1
		};

		this.save = function()
		{
            try
            {
                var jsonval = JSON.stringify(this.values);
			    var save = {};
			    save[this.key] = jsonval;
			    if(typeof chrome.storage !== 'undefined')
			    {
				    chrome.storage.local.set(save,function(){});	
			    }
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this.Populate = function(result)
		{
            try
            {
			    var jsonval = "";
			    if (chrome.storage && typeof result !== 'undefined')
			    {
				    jsonval = result.settings;
			    }

			    if(!blankNullorUndefined(jsonval))
			    {
				    var obj = JSON.parse(jsonval); 
				    for(var key in obj)
				    {
					    if (this.values.hasOwnProperty(key))
					    {
						    var objval = obj[key];
						    if(!blankNullorUndefined(objval))
						    {
							    this.values[key] = objval;
						    }
					    }
				    }
			    }
			    this.save();
			    this.ready = true;
			}   
            catch (e)
            {
                console.log(e);
            }
		};
		this._ready = function (id, oldval, newval)
		{
            try
            {
			    if(newval === true)
			    {
				    if(this.callback !== undefined && this.callback !== null)
				    {
					    this.callback();
				    }
			    }
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this.watch("ready", this._ready);
	}	
	
	document.addEventListener('RDPInit', function (e)
	{
		try
        {
	        e.detail.prototype.SettingsObject = SettingsObj;
        }   
        catch (e)
        {
            console.log(e);
        }
	});
})();