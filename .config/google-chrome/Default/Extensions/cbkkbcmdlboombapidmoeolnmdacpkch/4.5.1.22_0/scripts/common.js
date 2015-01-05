
function customStringProtoTypeFormat() 
{
    try
    {
	    var args = arguments;
	    return this.replace(/{(\d+)}/g, function(match, number)
		    {
			    return typeof args[number] != 'undefined' ? args[number] : match;
		    }
	    );
    }   
    catch (e)
    {
        console.log(e);
    }
};

String.prototype.format = customStringProtoTypeFormat;

function customStringProtoTypeTrim()
{
    try
    {
		return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }   
    catch (e)
    {
        console.log(e);
    }
};

String.prototype.trim = String.prototype.trim || customStringProtoTypeTrim;

function customObjectProtoTypeWatch(prop, handler) 
{
    try
    {
	    var oldval = this[prop];
	    var newval = oldval;
	    var getter = function () 
	    {
		    return newval;
	    };
	    var setter = function (val) 
	    {
		    oldval = newval;
		    return newval = handler.call(this, prop, oldval, val);
	    };

	    if (delete this[prop]) 
	    {
		    Object.defineProperty(this, prop, {
											    get: getter,
											    set: setter,
											    enumerable: true,
											    configurable: true
										      }
							      );
	    }
    }   
    catch (e)
    {
        console.log(e);
    }
}

Object.prototype.watch = customObjectProtoTypeWatch;

function size(obj)
{
    try
    {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }   
    catch (e)
    {
        console.log(e);
    }
};

function $(el) {return document.getElementById(el)}

function toBool(val)
{
    try
    {
	    return (val == "true")
    }   
    catch (e)
    {
        console.log(e);
    }
}

function blankNullorUndefined(value)
{
    try
    {
	    if (typeof value === 'undefined')
	    {
		    return true;
	    }
	    if (value == null)
	    {
		    return true;
	    }

	    if (typeof value === 'string')
	    {
		    if (value.trim() == '')
		    {
			    return true;
		    }
	    }
	
	    if (typeof value === 'string')

	    return false;
    }   
    catch (e)
    {
        console.log(e);
    }
}

function coalesce(val1, val2)
{
    try
    {
	    return ((!blankNullorUndefined(val1)) ? val1 : val2);
    }   
    catch (e)
    {
        console.log(e);
    }
}

function IsNumeric(n) 
{
    try
    {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }   
    catch (e)
    {
        console.log(e);
    }
}
