package org.omg.DynamicAny;


/**
* org/omg/DynamicAny/NameValuePair.java .
* Generated by the IDL-to-Java compiler (portable), version "3.2"
* from ../../../../src/share/classes/org/omg/DynamicAny/DynamicAny.idl
* Tuesday, August 28, 2012 5:55:00 PM PDT
*/

public final class NameValuePair implements org.omg.CORBA.portable.IDLEntity
{

  /**
          * The name associated with the Any.
          */
  public String id = null;

  /**
          * The Any value associated with the name.
          */
  public org.omg.CORBA.Any value = null;

  public NameValuePair ()
  {
  } // ctor

  public NameValuePair (String _id, org.omg.CORBA.Any _value)
  {
    id = _id;
    value = _value;
  } // ctor

} // class NameValuePair
