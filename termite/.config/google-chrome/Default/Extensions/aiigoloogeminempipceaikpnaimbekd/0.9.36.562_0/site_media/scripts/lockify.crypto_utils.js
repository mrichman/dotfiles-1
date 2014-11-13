/*
 * Lockify Crypto Utils
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Functions to encode and decode strings, generating random words
*/
var lockifyCryptoUtils={encodeUTF8:function(input){return unescape(encodeURIComponent(input));},decodeUTF8:function(input){return decodeURIComponent(escape(input));},base64ToURLBase64:function(src){return src.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+/,'');},URLBase64ToBase64:function(src){return src.replace(/\-/g,'+').replace(/\_/g,'/');},rawStringToSJCLBits:function(str){var out=[],i,tmp=0;for(i=0;i<str.length;i++){tmp=tmp<<8|str.charCodeAt(i);if((i&3)===3){out.push(tmp);tmp=0;}}
if(i&3){out.push(sjcl.bitArray.partial(8*(i&3),tmp));}
return out;},hash_sha256_b64u:function(str){return this.base64ToURLBase64(sjcl.codec.base64.fromBits(sjcl.hash.sha256.hash(this.rawStringToSJCLBits(str))));},intsToURLBase64:function(ints){return this.base64ToURLBase64(sjcl.codec.base64.fromBits(ints));},generateRandomString:function(strLength){var words=this.getRandomWords(Math.ceil(strLength/4.0));return this.intsToURLBase64(words).substr(0,strLength);},nativeCryptoAvailable:function(){try{var cryptoLib=(typeof msCrypto!='undefined')?msCrypto:crypto;return typeof(cryptoLib)!="undefined"&&typeof(cryptoLib.getRandomValues)!="undefined"&&typeof(Int32Array)!="undefined";}catch(x){return false;}},getRandomWords:function(length,typed,forceNonNative){if(typeof typed=='undefined'){typed=false;}
if(typeof forceNonNative=='undefined'){forceNonNative=false;}
var arr;if(this.nativeCryptoAvailable()&&!forceNonNative){var arrT=new Int32Array(length);if(typeof msCrypto!='undefined'){msCrypto.getRandomValues(arrT);}else{crypto.getRandomValues(arrT);}
if(typed){return arrT;}
arr=$.makeArray(arrT);}else{arr=sjcl.random.randomWords(length);}
return arr;},dataURLToBlob:function(dataURL){var BASE64_MARKER=';base64,';if(dataURL.indexOf(BASE64_MARKER)==-1){var parts=dataURL.split(',');var contentType=parts[0].split(':')[1];var raw=parts[1];var bb=new Blob([raw]);return bb;}
var parts=dataURL.split(BASE64_MARKER);var contentType=parts[0].split(':')[1];var raw=window.atob(parts[1]);var rawLength=raw.length;var uInt8Array=new Uint8Array(rawLength);for(var i=0;i<rawLength;++i){uInt8Array[i]=raw.charCodeAt(i);}
var bb=new Blob([uInt8Array.buffer]);return bb;}};