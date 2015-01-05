// Copyright (c) 2012 Google Inc.

(function () // self invoking function, keep vars out of the global namespace
{

	function createCodecHelper()
	{
		var Keys_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

		return ({
			base64encodeAB: function (arrayBuffer)
			{
                try
                {
				    var bytes = new Uint8Array(arrayBuffer);
				    var binary = '';

				    for (var i = 0; i < bytes.byteLength; i++)
				    {
					    binary += String.fromCharCode(bytes[i]);
				    }

				    return window.btoa(binary);
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			base64encodeUTF8: function (str)
			{
                try
                {
				    var buf = new ArrayBuffer(str.length);

				    var bufView = new Uint8Array(buf)
				    for (var i = 0, strLen = str.length; i < strLen; i++)
				    {
					    bufView[i] = str.charCodeAt(i);
				    }

				    return this.base64encodeAB(buf);
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			base64encodeUTF16: function (str)
			{
                try
                {
				    var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char

				    var bufView = new Uint16Array(buf);
				    for (var i = 0, strLen = str.length; i < strLen; i++)
				    {
					    bufView[i] = str.charCodeAt(i);
				    }

				    return this.base64encodeAB(buf);
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			base64decode2AB: function (input, isForUnicode)
			{
                try
                {
				    //get last chars to see if are valid
				    var lkey1 = Keys_.indexOf(input.charAt(input.length - 1));
				    var lkey2 = Keys_.indexOf(input.charAt(input.length - 2));

				    var bytes = Math.floor((input.length / 4) * 3);

				    if (lkey1 == 64) bytes--; //padding chars, so skip
				    if (lkey2 == 64) bytes--; //padding chars, so skip

				    if (isForUnicode) // need to pad to multiple of 2
				    {
					    if (bytes % 2 != 0)
					    {
						    bytes += 1;
					    }
				    }

				    var buf = new ArrayBuffer(bytes)

				    var uarray;
				    var chr1, chr2, chr3;
				    var enc1, enc2, enc3, enc4;
				    var i = 0;
				    var j = 0;

				    uarray = new Uint8Array(buf);

				    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

				    for (i = 0; i < bytes; i += 3)
				    {
					    //get the 3 octects in 4 ascii chars
					    enc1 = Keys_.indexOf(input.charAt(j++));
					    enc2 = Keys_.indexOf(input.charAt(j++));
					    enc3 = Keys_.indexOf(input.charAt(j++));
					    enc4 = Keys_.indexOf(input.charAt(j++));

					    chr1 = (enc1 << 2) | (enc2 >> 4);
					    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
					    chr3 = ((enc3 & 3) << 6) | enc4;

					    uarray[i] = chr1;
					    if (enc3 != 64) uarray[i + 1] = chr2;
					    if (enc4 != 64) uarray[i + 2] = chr3;
				    }

				    return buf;
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			base64decode2UTF16: function (input)
			{
                try
                {
				    var array = new Uint16Array(this.base64decode2AB(input, true));
				    var r = '';

				    for (var i = 0; i < array.length; i++)
				    {
					    r += String.fromCharCode(array[i]);
				    }

				    return r;
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			base64decode2UTF8: function (input)
			{
                try
                {
				    var array = new Uint8Array(this.base64decode2AB(input, true))
				    var r = '';

				    for (var i = 0; i < array.length; i++)
				    {
					    r += String.fromCharCode(array[i]);
				    }

				    return r;
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			convertUTF162UTF8: function (str)
			{
                try
                {
				    return unescape(encodeURIComponent(str));
                }   
                catch (e)
                {
                    console.log(e);
                }
			},
			convertUTF82UTF16: function (input)
			{
                try
                {
				    return decodeURIComponent(escape(input));
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
		    e.detail.prototype.codec = createCodecHelper();
        }   
        catch (e)
        {
            console.log(e);
        }
	});

})();