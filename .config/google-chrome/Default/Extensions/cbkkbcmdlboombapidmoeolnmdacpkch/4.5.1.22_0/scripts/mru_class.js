(function()
{
	var MRUObj = function(loadedCallback)
	{
		this.callback = loadedCallback;
		this.key = 'mru';
		this.ready = false;
		this._maxSavedMRUs = 50;
		this._values = 
		{
			MRUs: new Array(),
			MRU_Version: 2,
			UserNames: {},
            Passwords: {}
		};

        
		this.save = function()
		{
            try
            {
			    var jsonval = JSON.stringify(this._values);
			    var save = {};
			    save[this.key] = jsonval;
			    if (typeof chrome.storage !== 'undefined')
			    {
				    chrome.storage.local.set(save,function()
						    {
							    //console.log("value set:" + jsonval);
						    }
					    )	
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
				    jsonval = result.mru;
			    }

			    if(!blankNullorUndefined(jsonval))
			    {
				    var obj = JSON.parse(jsonval); 
				    for(var key in obj)
				    {
					    if (this._values.hasOwnProperty(key))
					    {
						    var objval = obj[key];
						    if(!blankNullorUndefined(objval))
						    {
							    this._values[key] = objval;
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
		this.addMRU = function(address, username, password)
		{
            try
            {
			    if(!blankNullorUndefined(address))
			    {
				    var user = username;
				    if (blankNullorUndefined(user))
				    {
					    user = '';
				    }
				
				    if (this._values.MRUs.indexOf(address) > -1)
				    {
					    var n = this._values.MRUs.indexOf(address);
					    this._values.MRUs.splice(n, 1);
				    }
				
				    this._values.MRUs.push(address);
				    this._values.UserNames[address] = user;
				    this._values.Passwords[address] = password;
				
				    while (this._values.MRUs > this._maxSavedMRUs)
				    {
					    this._values.MRUs.splice(0, 1);
				    }
				
				    var savedUsernames =  {};
				    var savedPasswords =  {};
				    for (var i = 0; i < this._values.MRUs.length; i++)
				    {
					    var key = this._values.MRUs[i];
					    var uname = this._values.UserNames[key];
					    if (blankNullorUndefined(uname))
					    {
						    uname = '';
					    }
					    savedUsernames[key] = uname;

                        var pword = this._values.Passwords[key];
					    if (blankNullorUndefined(pword))
					    {
						    pword = '';
					    }
					    savedPasswords[key] = pword;
				    }
				
				    this._values.UserNames = savedUsernames;
                    this._values.Passwords = savedPasswords;                
			    }
			
			    this.save();
            }   
            catch (e)
            {
                console.log(e);
            }
		};
        this.ClearPasswords = function()
		{
            try
            {
                this._values.Passwords = {};
		
        	    this.save();
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this.getUserNameFromAddress = function(address)
		{
            try
            {
                var result = "";

			    if(!blankNullorUndefined(address))
			    {
				    result = this._values.UserNames[address];
			    }
			
                if (blankNullorUndefined(result))
                {
                    result = "";
                }

                return result;	
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this.getPasswordFromAddress = function(address)
		{
            try
            {
			    var result = "";

			    if(!blankNullorUndefined(address))
			    {
                    result = this._values.Passwords[address];
			    }
			
                if (blankNullorUndefined(result))
                {
                    result = "";
                }

                return result;	
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this._MRUList= function (){return this._values.MRUs;}
		this.getMRUList = function ()
		{
            try
            {
			    var list = this._MRUList();
			    list.reverse();
			    return list;
            }   
            catch (e)
            {
                console.log(e);
            }
		}
	}
	
	
	document.addEventListener('RDPInit', function (e)
	{
        try
        { 
            e.detail.prototype.MRUObject = MRUObj;
        }   
        catch (e)
        {
            console.log(e);
        }
	});
})();