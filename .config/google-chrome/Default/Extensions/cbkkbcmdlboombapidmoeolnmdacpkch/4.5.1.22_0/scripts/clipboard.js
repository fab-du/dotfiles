// Copyright (c) 2012 Google Inc.

(function () // self invoking function, keep vars out of the global namespace
{
	function createClipboardHelper()
	{
		var RDPFlagType_ = "rdp/flag"; // when this Format type exists updates should not be raised
		var Types_ = []
		var FormatListRetryCount_ = 0;
		var FormatListTimeout_ = null;
		
		var CheckForUpdate_ = function ()
		{
            try
            {
			    var doRaiseEvent = false;
			    var clips = null;
            
                if (GetBackgroundPage_())
                {
                    clips = GetBackgroundPage_().GetClipboardTypes();
                }

			    if (clips == null)
			    {
				    clips = [];
			    }

			    if (clips.indexOf(RDPFlagType_) > -1) // Flag exist, do not raise an event
			    {
				    Types_ = clips;
			    }

			    if (clips.length != Types_.length)
			    {
				    doRaiseEvent = true;
			    }
			    else
			    {
				    for (var i = 0; i < clips.length; i++)
				    {
					    if (clips[i] != Types_[i])
					    {
						    doRaiseEvent = true;
						    break;
					    }
				    }
			    }

			    if (doRaiseEvent)
			    {
				    var updateEvent = new CustomEvent(
					    "onClipboardUpdate",
					    {
						    detail:
							    {
								    oldValue: Types_,
								    newValue: clips
							    },
						    bubbles: true,
						    cancelable: true
					    }
				    );

				    Types_ = clips;

				    document.dispatchEvent(updateEvent);
			    }
            }   
            catch (e)
            {
                console.log(e);
            }
		};

		var PaddingZeros_ = function (value)
		{  
            try
            {
			    var strValue = "" + value;
			    var length = strValue.length;

			    var result = ""
			    for (var i = length; i < 10; i++)
			    {
				    result += "0";
			    }

			    result += strValue;

			    return result;
            }   
            catch (e)
            {
                console.log(e);
            }
		}
        
        var GetBackgroundPage_ = function()
        {
            return BackgroundPage_;
        };
        
        var BackgroundPage_ = null;

        var LoadBackgroundPage_ = function()
        {
            try
            {
                if (chrome.runtime != null)
		        {
			        chrome.runtime.getBackgroundPage(LoadBackgroundPage_Callback);
		        }
            }   
            catch (e)
            {
                console.log(e);
            }
        };

        var LoadBackgroundPage_Callback = function(backgroundPage) 
        {
            try
            {
                BackgroundPage_ = backgroundPage;
        
                BackgroundPage_.AttachClipboardHelper(CheckForUpdate_);
            }   
            catch (e)
            {
                console.log(e);
            }
        };

		LoadBackgroundPage_();

		return ({
			scheduleNextFormatListTimeout: function(callback)
			{
				FormatListRetryCount_ = FormatListRetryCount_ + 1;

				if (FormatListRetryCount_ > 4)
				{
					//reset
					//next call will begin the cycle again
					FormatListRetryCount_ = 0;
				}
				else
				{
					FormatListTimeout_ = setTimeout(callback, 30 * 2 ^ FormatListRetryCount_)
				}
			},
			cancelNextFormatListTimeout: function()
			{
				clearTimeout(FormatListTimeout_);
				FormatListRetryCount_ = 0;
			},
			getTypes: function (address)
			{
                try
                {
				    if (GetBackgroundPage_())
				    {
					    return Types_;
				    }
				    else
				    {
					    return ["text/plain", "text/html"]; // for PPAPI testing always return a test type
				    }
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			setItems: function (items)
			{
                try
                {
				    if (GetBackgroundPage_())
				    {
					    items.push({ type: RDPFlagType_, value: RDPFlagType_ }); // add a flag so we know when the clipboard changes later

					    GetBackgroundPage_().AddItems(items);
				    }
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			getData: function (type)
			{
                try
                {
				    if (GetBackgroundPage_())
				    {
					    var data = GetBackgroundPage_().GetData(type);

					    if (type == "text/html")
					    {
						    var offset = 20;
						    var startFragment = data.indexOf("<!--StartFragment-->");

						    if (startFragment == -1)
						    {
							    offset = 21;
							    startFragment = data.indexOf("<!--StartFragment -->");
						    }

						    if (startFragment != -1)
						    {
							    startFragment += offset;
						    }

						    var endFragment = data.lastIndexOf("<!--EndFragment-->");

						    if (endFragment == -1)
						    {
							    endFragment = data.lastIndexOf("<!--EndFragment -->");
						    }

						    if (endFragment == -1 || startFragment == -1)
						    {
							    data = "<html><body><!--StartFragment-->" + data + "<!--EndFragment--></body></html>";
							    startFragment = data.indexOf("<!--StartFragment-->") + 20;
							    endFragment = data.lastIndexOf("<!--EndFragment-->");
						    }

						    // should both occur, otherwise let javascript log an error

						    data = "Version:0.9\r\nStartHTML:0000000105\r\nEndHTML:" + PaddingZeros_(105 + data.length) + "\r\nStartFragment:" + PaddingZeros_(105 + startFragment) + "\r\nEndFragment:" + PaddingZeros_(105 + endFragment) + "\r\n" + data;

						    data = RDPHelper.codec.convertUTF162UTF8(data);

						    data = RDPHelper.codec.base64encodeUTF8(data);
					    }
					    else
					    {
						    data = RDPHelper.codec.base64encodeUTF16(data);
					    }

					    return data;
				    }
				    else
				    {
					    return "TESTTEXT ゴ"; // for PPAPI testing always return a teststring
					    //return "http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml";
				    }
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			decodeItems: function (items)
			{
                try
                {
				    for (var i = 0; i < items.length; i++)
				    {
					    var item = items[i];

					    if (item.type == "text/plain")
					    {
						    item.value = RDPHelper.codec.base64decode2UTF16(item.value);
					    }
					    else if (item.type == "text/html")
					    {
						    item.value = RDPHelper.codec.base64decode2UTF8(item.value);
						    //strip clipboard html header // http://msdn.microsoft.com/en-us/library/windows/desktop/ms649015(v=vs.85).aspx
						    var beginHeader = item.value.indexOf("StartHTML:");
						    var endHeader = item.value.indexOf("EndHTML:");
						    var startFragment = item.value.indexOf("StartFragment:");

						    if (beginHeader > -1 && endHeader > -1 && startFragment > -1)
						    {
							    var beginInt = parseInt(item.value.substring(beginHeader + 10, endHeader));
							    var endInt = parseInt(item.value.substring(endHeader + 8, startFragment));

							    if (beginInt && endInt && beginInt < endInt && item.value.length >= endInt)
							    {
								    item.value = item.value.substring(beginInt, endInt);
							    }
						    }

						    item.value = RDPHelper.codec.convertUTF82UTF16(item.value);
					    }
					    else
					    {
						    item.value = RDPHelper.codec.base64decode2AB(item.value);

						    //var view = new Uint8Array(data);
						    //var output = '';

						    //for (var j = 0; j < view.length; j++)
						    //{
						    //	output += view[j].toString(16) + ' ';
						    //}

						    //console.log(output);
					    }
				    }
                }   
                catch (e)
                {
                    console.log(e);
                }
			}
		});
	};

	//add to the RDPHelper namespace
	document.addEventListener('RDPInit', function (e)
	{
		try
        {
		    e.detail.prototype.clipboard = createClipboardHelper();
        }   
        catch (e)
        {
            console.log(e);
        }
	});

})();