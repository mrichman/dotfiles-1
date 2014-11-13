/** @fileOverview Javascript cryptography implementation.
 *
 * Crush to remove comments, shorten variable names and
 * generally reduce transmission size.
 *
 * @author Emily Stark
 * @author Mike Hamburg
 * @author Dan Boneh
 */
"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(message){this.toString=function(){return"CORRUPT: "+this.message;};this.message=message;},invalid:function(message){this.toString=function(){return"INVALID: "+this.message;};this.message=message;},bug:function(message){this.toString=function(){return"BUG: "+this.message;};this.message=message;},notReady:function(message){this.toString=function(){return"NOT READY: "+this.message;};this.message=message;}}};if(typeof module!='undefined'&&module.exports){module.exports=sjcl;}