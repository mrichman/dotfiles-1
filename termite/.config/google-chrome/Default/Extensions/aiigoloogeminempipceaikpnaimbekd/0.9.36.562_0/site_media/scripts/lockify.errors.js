/*
 * Lockify Errors
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Javascript Error logging. Adapted from getexceptional.com, which is another cool service that Lockify
 * can't use due to our strict Content Security Policy, checksumming and other requirements.
 */
var Exception={KEY:null,action:'errors.lockify.com',handle:function(msg,url,line,suppressDialog,suppressAdminEmail){if(typeof suppressDialog=='undefined'){suppressDialog=false;}
if(typeof suppressAdminEmail=='undefined'){suppressAdminEmail=false;}
if(typeof url!='undefined'&&url.indexOf(document.location.host)==-1){return false;}
var tempA=document.createElement('a');tempA.href=url;if(tempA.pathname=="/d"&&tempA.hash){url=url.replace(tempA.hash,'#REMOVED');}
var path=document.location.pathname;if(!suppressDialog){var dialogElem;if(msg.indexOf('timed out')!=-1){dialogElem=$('#timeoutErrorDialog');}else{dialogElem=$('#javascriptErrorDialog');}
dialogElem.dialog(dialogOptions);lockifyUtils.hideLoadingCover();$('#pageLoading').remove();$('#page').removeClass('defaultHide');}
if(typeof AJAX_ERROR_PROTOCOL=='undefined'){AJAX_ERROR_PROTOCOL=null;}
if(typeof AJAX_ERROR_HOST=='undefined'){AJAX_ERROR_HOST=null;}
var apiUrl=(AJAX_ERROR_PROTOCOL||document.location.protocol)+'//'+(AJAX_ERROR_HOST||document.location.host)+'/client_errors/new?protocol_version=1'+'&msg='+encodeURIComponent(msg)+'&url='+encodeURIComponent(url)+'&line='+encodeURIComponent(line)+'&path='+encodeURIComponent(path);if(suppressAdminEmail){apiUrl+="&noEmail=1";}
$('.dialogContainer .loggingFailure textarea').css('width','100%').val('&msg='+msg+'&url='+url+'&line='+line+'&path='+path);if($.inArray(lockifyGlobals.client_type,['chrome_app','chrome_ext'])==-1){Raven.captureMessage(msg,{extra:{line:line,url:url,path:path}});}else{xmlhttp=new XMLHttpRequest();xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState!=4){return;}
clearTimeout(timeoutId);resp=xmlhttp.responseText.replace(/^while\(1\);/,'');if(!suppressDialog){try{$('.dialogContainer .loggingAttempt').hide();var json;if(xmlhttp.status==200){$('.dialogContainer .loggingSuccess').show();$('.dialogContainer .loggingFailure').hide();}else{$('.dialogContainer .loggingFailure').show();$('.dialogContainer .loggingSuccess').hide();}}catch(e){}}};xmlhttp.open("GET",apiUrl,true);xmlhttp.setRequestHeader('X-Requested-With','XMLHttpRequest');xmlhttp.setRequestHeader('Accept','application/json, text/javascript, */*; q=0.01');var onTimeoutHandler=function(){if(typeof xmlhttp.ontimeout=='undefined'){xmlhttp.onreadystatechange=null;}
$('.dialogContainer .loggingAttempt').hide();$('.dialogContainer .loggingSuccess').hide();$('.dialogContainer .loggingFailure').show();};var timeoutMs=lockifyGlobals.clientErrorLoggingTimeoutSecs*1000;if(typeof xmlhttp.ontimeout!='undefined'){xmlhttp.timeout=timeoutMs;xmlhttp.ontimeout=onTimeoutHandler;}else{var timeoutId=setTimeout(onTimeoutHandler,timeoutMs);}
xmlhttp.send();}}};Raven.config(lockifyGlobals.sentryUrl,{dataCallback:function(data){console.log(data);if(data.request.url.match(lockifyGlobals.linkUrl)){var tempA=document.createElement('a');tempA.href=data.request.url;data.request.url=data.request.url.replace(tempA.hash,'#REMOVED');}
console.log(data);return data;}}).install();$(document).bind('ravenSuccess',function(event){$('.dialogContainer .loggingAttempt').hide();$('.dialogContainer .loggingSuccess').show();$('.dialogContainer .loggingFailure').hide();});$(document).bind('ravenFailure',function(event){$('.dialogContainer .loggingAttempt').hide();$('.dialogContainer .loggingFailure').show();$('.dialogContainer .loggingSuccess').hide();});window.onerror=function(msg,url,line){Exception.handle(msg,url,line);};function addLoadEvent(func){var oldonload=window.onload;if(typeof window.onload!='function'){window.onload=func;}else{window.onload=function(){if(oldonload){oldonload();}
func();};}}