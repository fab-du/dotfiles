// Copyright (c) 2012 Google Inc.

(function () // self invoking function, keep vars out of the global namespace
{
    var BookmarkObj = function(BookmarkDiv, ConnectCallback, DeleteCallBack, NewWindowConnectCallback, LoadedCallback)
	{
		this._connectCallback = ConnectCallback;
		this._deleteCallBack = DeleteCallBack;
		this._newWindowConnectCallback = NewWindowConnectCallback;
		this._callback = LoadedCallback;
		this.key = 'bookmarks';
		this.ready = false;
		this._div = BookmarkDiv;
	// Object value parts
		this._directory = {};
		this._dirObjTypeEnum =
		{
			connection: 1,
			directory : 2
		};

        

	// Private
		this._createNewDirObject = function(ObjType, ObjName, ObjVal, ObjUsername, ObjPassword)
		{
            try
            {
                var dirObject =
			    {                      	//      directory        |     connection
				    Type: ObjType, 		//	directory enum       |  connection enum
				    Name: ObjName,		//	directory name       |  Connection Name
                    Value: ObjVal, 		//	assocArray of vals   |  IP
				    Username: ObjUsername, // connection user name
                    Password: ObjPassword // connection password
			    };

			    return dirObject;
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this._addToDirectory = function(obj, directoryLocation)
		{
            try
            {
			    // This doesnt support subfolders in its current state
			    var timekey = new Date().getTime();

			    while(this._directory.hasOwnProperty(timekey))
			    {
				    timekey = new Date().getTime();
			    }
			    //var index = size(this._directory);
			    this._directory[timekey]=obj;
            }   
            catch (e)
            {
                console.log(e);
            }
		}
		// Callback
		this._ready = function (id, oldval, newval)
		{
            try
            {
			    if(newval === true)
			    {
				    if(this._callback !== undefined && this._callback !== null)
				    {
					    this._callback();
				    }
			    }
            }   
            catch (e)
            {
                console.log(e);
            }
		};

		this.watch("ready", this._ready);
		
        this._refreshPanel = function()
		{
            try
            {
			    var bms = this.GetBookmarks();
			    this.RefreshBookmarkPanel(bms);
            }   
            catch (e)
            {
                console.log(e);
            }
		}
		this._save = function(callback)
		{
            try
            {
			    var jsonval = JSON.stringify(this._directory);
			    var save = {};
			    save[this.key] = jsonval;
			    if (typeof chrome.storage !== 'undefined')
			    {
				    chrome.storage.sync.set(save, callback)	
			    }
			
			    if(!blankNullorUndefined(this._div))
			    {
				    this._refreshPanel();	
			    }
            }   
            catch (e)
            {
                console.log(e);
            }
		};
	// Public
		//Loading and saving
		
		this.MassAddConnections = function(addresses, callback)
		{
            try
            {			
			    if(addresses.length > 0)
			    {
				    for(var i = 0; i < addresses.length; i++)
				    {
					    var address = addresses[i].address;
					    var title = addresses[i].title;
					    if (!this.ConnectionExists(address))
					    {
						    if(blankNullorUndefined(title))
						    {
							    title = address;
						    }

						    var dirObj = this._createNewDirObject(this._dirObjTypeEnum.connection, title, address, "", "");
						    this._addToDirectory(dirObj)
					    }
				    }
				    this._save(callback);
			    }
            }   
            catch (e)
            {
                console.log(e);
            }
		}
		this.Populate = function(result)
		{
            try
            {
			    var jsonval = "";
			    if (chrome.storage && typeof result !== 'undefined')
			    {
				    jsonval = result.bookmarks;
			    }

			    if(!blankNullorUndefined(jsonval))
			    {
				    this._directory =  JSON.parse(jsonval);
			    }
			    for(key in this._directory)
			    {
				    if(this._directory[key].Type == this._dirObjTypeEnum.connection)
				    {
					    if (blankNullorUndefined(this._directory[key].Value) && !blankNullorUndefined(this._directory[key].Name))
					    {
						    this._directory[key].Value = this._directory[key].Name;
					    }
				    }
			    }
			    this._save();
			    this.ready = true;
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this.AddConnection = function(address, connectionTitle, directoryLocation, username, password)
		{
            try
            {
			    // This doesnt support subfolders in its current state
			    if(!blankNullorUndefined(address))
			    {
				    if(!this.ConnectionExists(address))
				    {
					    var title = connectionTitle;
					    if (blankNullorUndefined(title))
					    {
						    title = address;
					    }

					    var dirObj = this._createNewDirObject(this._dirObjTypeEnum.connection, title, address, username, password);

					    this._addToDirectory(dirObj, directoryLocation)
					    this._save();
				    }
			    }
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this.DeleteConnection = function(key)
		{
            try
            {
			    // This doesnt support subfolders in its current state

			    delete this._directory[key];
			    this._save();
            }   
            catch (e)
            {
                console.log(e);
            }
		};
		this.ConnectionExists = function(address)
		{
            try
            {
                var exists = false;
			    if(!blankNullorUndefined(address))
			    {
                    var key = this.getConnectionKey(address);

                    if (!blankNullorUndefined(key))
                    {
                        exists = true;
                    }
			    }
			    else
			    {
				    exists = true;
			    }
			
			    //this._save();
			    return exists;
		    }   
            catch (e)
            {
                console.log(e);
            }
        }
		this.AddDirectory = function(name, directoryLocation)
		{
            try
            {
			    // This doesnt support subfolders in its current state
			    if(!blankNullorUndefined(address))
			    {
				    var holder = {};
				    var dirObj = this._createNewDirObject(this._dirObjTypeEnum.directory, name, holder, "", "");

				    this._addToDirectory(dirObj, directoryLocation)
				    this._save();
			    }
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
			    if(typeof this._directory !== 'undefined')
			    {
				    for (key in this._directory)
				    {
					    this._directory[key].Password = "";
				    }
			    }
		
        	    this._save();
		    }   
            catch (e)
            {
                console.log(e);
            }
        };

		this.DeleteDirectory = function(key)
		{
            try
            {
			    // This doesnt support subfolders in its current state
			    delete this._directory[key];
		    }   
            catch (e)
            {
                console.log(e);
            }
        };

		this.GetBookmarks = function()
		{
            try
            {
			    var bookmarks = new Array();
            
                for(var key in this._directory)
			    {
				    if(!blankNullorUndefined(this._directory[key].Name))
				    {
					    var bookmark = {};
					    bookmark.id = key;
					    bookmark.url = this._directory[key].Value
					    bookmark.title = this._directory[key].Name
					    bookmarks.push(bookmark);
				    }
			    }

                //for (var i = 0; i < 100; i++)
                //{
                //    var bookmark = {};
                //    bookmark.id = "test" + i;
                //    bookmark.url = "temp url " + i;
                //    bookmark.title = "test" + i;
                //    bookmarks.push(bookmark);
                //}

                bookmarks.sort(this.SortBookmarks);

			    return bookmarks;
		    }   
            catch (e)
            {
                console.log(e);
            }
        };

        this.SortBookmarks = function(bookmark1, bookmark2)
		{
            try
            {
                if (bookmark1.title < bookmark2.title)
                    return -1;

                if (bookmark1.title > bookmark2.title)
                    return 1;

                return 0;
            }   
            catch (e)
            {
                console.log(e);
            }
        }

		this.RefreshBookmarkPanel = function (bookmarkTreeNodes)
		{
            try
            {
                //$("bookmarksHeader").style.display = "none";

			    while (this._div.lastChild)
                {
                    this._div.removeChild(this._div.lastChild);
                }

			    if (bookmarkTreeNodes.length > 0)
			    {
                    var i;
				    var treeNode;

				    for (i = 0; i < bookmarkTreeNodes.length; i++)
				    {
					    treeNode = bookmarkTreeNodes[i];

                        var div = document.createElement('div');
                        div.setAttribute('bookmarkID', treeNode.id);
                        div.setAttribute('bookmarkName', treeNode.title);
                        div.style.whiteSpace="nowrap";
                        div.style.verticalAlign="top";
                        div.style.paddingTop="3px";
                     
                        this._div.appendChild(div);
                           
                        var div1 = document.createElement('div');
                        div1.style.display="inline";
                        div1.style.verticalAlign="top";
                        div1.style.paddingLeft="3px";
                        div1.style.paddingTop="5px";
                    
                        div.appendChild(div1);
                
					    var bulletImage = document.createElement('img');
					    bulletImage.src = 'images/bullet4.png';
				
                        div1.appendChild(bulletImage);
                
					    var div2 = document.createElement('div');
                        div2.style.display="inline";
                        div2.style.verticalAlign="top";
                    
                        div.appendChild(div2);
                
                        var link = document.createElement('a');
					    link.setAttribute('href', treeNode.url);
					    link.setAttribute('default', treeNode.url);
					    link.innerText = treeNode.title;
					    link.setAttribute('title', 'Connect to computer')
					    link.addEventListener('click', this._connectCallback);
                    
                        div2.appendChild(link);
                
                        var div3 = document.createElement('div');
                        div3.style.display="inline";
                        div3.style.verticalAlign="bottom";
                        div3.style.cursor="pointer";
                    
                        div.appendChild(div3);
                
					    var newTabLink = document.createElement('a');
					    newTabLink.setAttribute('href', treeNode.url);
					    newTabLink.setAttribute('target', '_blank');
					    newTabLink.setAttribute('title', 'Open in new window')
					    newTabLink.addEventListener('click', this._newWindowConnectCallback);

                        div3.appendChild(newTabLink);
                    
                        var newTabImage = document.createElement('img');
					    newTabImage.src = 'images/page_new4.gif';
					
                        newTabLink.appendChild(newTabImage);

                        var div4 = document.createElement('div');
                        div4.style.display="inline";
                        div4.style.verticalAlign="bottom";
                        div4.style.cursor="pointer";
                    
                        div.appendChild(div4);
                
					    var deleteLink = document.createElement('a');
					    deleteLink.setAttribute('title', 'Delete');
					    deleteLink.addEventListener('click', this._deleteCallBack);

                        div4.appendChild(deleteLink);
				
                        var deleteImage = document.createElement('img');
					    deleteImage.src = 'images/action_stop4.gif';

                	    deleteLink.appendChild(deleteImage);
                    }
 
                    //$("bookmarksHeader").style.display = "block";


    //				var ul = document.createElement('ul');

    //				var i;
    //				var treeNode;

    //				for (i = 0; i < bookmarkTreeNodes.length; i++)
    //				{
    //					treeNode = bookmarkTreeNodes[i];

    //					var li = document.createElement('li');
    //					li.setAttribute('bookmarkID', treeNode.id);
    //					var link = document.createElement('a');
    //					link.setAttribute('href', treeNode.url);
    //					link.classList.add('bookmarklink');
    //					link.innerText = treeNode.title;
    //					link.addEventListener('click', this._connectCallback);

    //					var imageCell = document.createElement('div');
    //					imageCell.classList.add('bookmarkImageCell');

    //					var newTabImage = document.createElement('img');
    //					newTabImage.src = 'images/page_new.gif';
    //					var newTabLink = document.createElement('a');
    //					newTabLink.setAttribute('href', treeNode.url);
    //					newTabLink.setAttribute('target', '_blank');
    //					newTabLink.classList.add('bookmarkNewTabLink');
    //					newTabLink.setAttribute('title', 'Open in new window')
    //					newTabLink.addEventListener('click', this._newWindowConnectCallback);
    //					newTabLink.appendChild(newTabImage);

    //					var deleteImage = document.createElement('img');
    //					deleteImage.src = 'images/action_stop.gif';
    //					var deleteLink = document.createElement('a');
    //					deleteLink.classList.add('bookmarkDeleteLink');
    //					deleteLink.setAttribute('title', 'Delete');
    //					deleteLink.addEventListener('click', this._deleteCallBack);
    //					deleteLink.appendChild(deleteImage);

    //					var clear = document.createElement('div');
    //					clear.style.clear = 'both';

    //					imageCell.appendChild(newTabLink);
    //					imageCell.appendChild(deleteLink);

    //					li.appendChild(link);
    //					li.appendChild(imageCell);
    //					li.appendChild(clear);

    //					ul.appendChild(li);
    //				}

    //				this._div.appendChild(ul);

    //                var tdBookmarks = $("tdBookmarks");

    //                tdBookmarks.style.display = "table-cell";
    //			
    //                var tdConnect = $("tdConnect");

    //                tdConnect.align = "right";
                }
			    else
			    {
    //                var tdBookmarks = $("tdBookmarks");

    //                tdBookmarks.style.display = "none";

    //                var tdConnect = $("tdConnect");

    //                tdConnect.align = "center";

	
    //				var fieldset = document.createElement('fieldset');

    //				var legend = document.createElement('legend');
    //				legend.innerText = "Migrate Bookmarks";

    //				var div = document.createElement('div');
    //				div.style.width = "150px";
    //				var span = document.createElement('span');
    //				span.innerText = "Missing your bookmarks? Click below to migrate your bookmarks to the new format.";
    //				span.style.fontSize = "14px";
    //				
    //				var br = document.createElement('br');
    //				var button = document.createElement('button');
    //				button.classList.add("kd-button");
    //				button.innerText = "Migrate Bookmarks";
    //				button.addEventListener("click", backupBookmarks);

    //				var clear = document.createElement('div');
    //				clear.style.clear = 'both';

    //				fieldset.appendChild(legend);
    //				div.appendChild(span);
    //				fieldset.appendChild(div);
    //				fieldset.appendChild(br);
    //				fieldset.appendChild(button);
    //				fieldset.appendChild(clear);

    //				this._div.appendChild(fieldset);
			    }

			}   
            catch (e)
            {
                console.log(e);
            }
		};
        
        this.getConnectionKey = function(address)
	    {
            try
            {
		        var exists = false;
		        if(!blankNullorUndefined(address))
		        {
			        if(typeof this._directory !== 'undefined')
			        {
				        for(key in this._directory)
				        {
					        var value = this._directory[key].Value;
					        if (!blankNullorUndefined(value))
					        {
						        if(value.toLowerCase() == address.toLowerCase())
						        {
							        return key;
						        }	
					        }
				        }
			        }
		        }
			
		        return "";
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
                    var key = this.getConnectionKey(address);

                    if (!blankNullorUndefined(key))
                    {
			            result = this._directory[key].Username;
                    }
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

		        if (!blankNullorUndefined(address))
		        {
                    var key = this.getConnectionKey(address);

                    if (!blankNullorUndefined(key))
                    {
			            result = this._directory[key].Password;
                    }
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

	}
        
	//add to the RDPHelper namespace
	document.addEventListener('RDPInit', function (e)
	{
        try
        {
            e.detail.prototype.BookmarkObject = BookmarkObj;
        }   
        catch (e)
        {
            console.log(e);
        }
	});

})();