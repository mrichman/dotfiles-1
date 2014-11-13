/*
 * This model only uses fetch() to submit a LL datahash id and an
 * email address. The server will respond with isEmail and isNative
 * bools.
 */
var EntryEmailStatusModel=Backbone.Model.extend({url:function(){return'/get/auth_info/email/'+this.get('dh')+'/'+encodeURIComponent(this.get('email'));},defaults:{dh:null,email:null,isEmail:null,isNative:null}});