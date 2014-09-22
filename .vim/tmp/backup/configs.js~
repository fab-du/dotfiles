var config={
    port: 3000 
   , db : {
            url : "mongodb://localhost/test" 
            ,schemas : {
                        user_account : 
                        { 
                            sch_name : "users"
                            ,model  : {
                                       name           : String
                                       ,vorname       : String
                                        ,benutzerName : String 
                                         ,email       : String 
                                          ,passPhrase : String 
                                           , _id      : Object 
                                            , name    : String 
                                        
                                        }
                        }

                        ,user_data           : 
                         { sch_name : "user_data" 
                            ,model  : {
                                        data      : Buffer 
                                        ,data_name : String 
                                         ,lastModified : Date
                                          , createAt : { type : Date
                                                       , default: new Date()}
                                            , documentType : Number 
                                            , usersWithShareAccess : [String] // store userNames of Users with full access to doc 
                                        } 

                         }
                         ,user_friend        : 
                         {
                           sch_name: "user_friend"
                            ,model : {
                                _id: { type : String }
                                 ,friend : [String] //Store the list of the Friend
                        
                                }
                         }

                          ,user_public_keys  : 
                          {
                             sch_name:  "user_public_keys"
                              ,model : {
                                  public_key : [Buffer]  
                                }
                          }
                           ,user_private_keys: 
                           { 
                               sch_user_private_keys : "user_private_keys"
                               ,model: {
                                   private_key : [Buffer]
                                }
                           }
                        }

        }

    ,routes : {
                 index                  : '/index'
                 ,registration          : '/registrieren'
                  ,einloggen            : '/einloggen'
                   ,keys                : '/keys'
                    ,mein_public_keys   : '/keys/public'
                     ,mein_private_keys : '/keys/private'
                
                }


};

module.exports.config = config; 
