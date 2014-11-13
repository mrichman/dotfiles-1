/*
 * Lockify Account
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Authenticating user and allowing to change passwords, enable login
*/
lockify.account={gCSRFToken:null,readCreatorAuthErrorCallback:null,readCreatorAuth:function(){if(document.location.pathname=='/twitter-complete/'||lockifyUtils.getUrlParam('janrain_nonce')){return false;}
this.userInfo=new UserInfoModel();this.userInfo.fetch({success:lockify.account.handleCreatorAuth,error:lockify.account.readCreatorAuthErrorCallback});},handleCreatorAuth:function(model,json,options){if(!model.attributes){return;}
var cacheLastModified=$('meta[http-equiv=Last-Modified]');if(cacheLastModified.length){cacheLastModified=Date.parse(cacheLastModified.attr('content'));if($.cookie('cacheExpire',{path:'/'})==cacheLastModified){document.location.reload();}else if('htmlLastModified'in model.attributes){serverLastUpdate=Date.parse(model.get('htmlLastModified'));if(serverLastUpdate>cacheLastModified){document.location.reload();$.cookie('cacheExpire',cacheLastModified,{path:'/',secure:document.location.protocol=="https:"?true:false});}}}
var prefsAreBound=false;$(document).bind('formBoundToUserPrefs',function(e){prefsAreBound=true;});if(model.get('is_authenticated')&&model.get('isActive')!==false){if(model.get('require_pp_tos')&&typeof PpTosUpdateView=='function'&&lockifyUtils.getUrlParam('firstlogin')!=1){new PpTosUpdateView({el:$('#ppTosUpdateDialog'),model:new PpTosHistoryModel()});}
var next=lockifyUtils.getUrlParam('next');if(next){window.location.replace(decodeURIComponent(next)+document.location.hash);return;}
else if(!json.prevent_redirect&&(window.location.pathname=='/'||json.force_redirect)){if(model.get('redirect')){window.location.replace(model.get('redirect')+window.location.hash);return;}
else{window.location.replace('/e');return;}}
else if(lockifyUtils.onNewLinkPage()){document.lockifyUserEntryDefaults=new EntryDefaultsModel();document.lockifyUserEntryDefaults.id=document.lockifyUserEntryDefaults.cid;document.lockifyUserEntryDefaults.fetch({success:function(model,json,options){lockify.index.hideAnonElemsAfterSignin();}});}
if(typeof json.pagePrefs!='undefined'){lockify.pagePrefs=model.get('pagePrefs');}else{lockify.pagePrefs=null;}
if(typeof howdyDoBarView!='undefined'&&typeof model.get('pagePrefs')!='undefined'){var showHelloBar;if(typeof lockify.pagePrefs.showHelloBar=='undefined'){showHelloBar=true;}
else{showHelloBar=!!parseInt(model.get('pagePrefs').showHelloBar,10);}
howdyDoBarView.model.set('value',showHelloBar);}
if(typeof userDropdownView!='undefined'){new userDropdownView({el:$('#userDropdown'),model:null,username:model.get('username'),uniqueurl:model.get('uniqueurl'),memberships:model.get('memberships')});}
$('#storingUi').show();if($('#divInput').is(':visible')){if(typeof encryptPageOnReady!='undefined'){encryptPageOnReady();}}
else if(typeof(gRedirectOnLogin)!='undefined'){if((!window.location.hash||window.location.hash.length<=1||window.location.hash=="#!input!"||$.inArray(window.location.hash,hashReloadExceptions)>-1)){if(model.get('redirect')){window.location.replace(model.get('redirect')+window.location.hash);}else{window.location.replace(gRedirectOnLogin+window.location.hash);}
return;}else if(window.location.hash.length>1){window.location.replace('/d'+window.location.hash);return;}}else{prefsAreBound=true;}
if(window.location.hash=='#your-links'){$('#ownTab').click();}else if(window.location.hash=='#stowed-links'){$('#stowTab').click();}else if(window.location.hash=='#recieved-links'){$('#receiveTab').click();}
if($('body').hasClass('guestUser')){$("#expressUtilityPanels").dialog('close');$('body').removeClass('guestUser');$('#footer-mobile').css('margin-top','0');}
$('.authenticatedUserOnly').show();$('.nonauthenticatedUserOnly').hide();}
else{if(typeof howdyDoBarView!='undefined'){howdyDoBarView.model.set('value',true);}
if(window.location.hash=='#reset_password'){$('#expressUtilityPanels').dialog(dialogOptions);$('.showPwordPanel').click();}else if(window.location.hash=='#resend_activation_link'){$('#expressUtilityPanels').dialog(dialogOptions);$('.showResendPanel').click();}else if(window.location.hash=='#sign_in'){$('.expressSignIn').click();}else if(window.location.hash=='#reserve_spot'){$('.expressInvite').click();}else if(window.location.hash=='#register'){$('#expressUtilityPanels').dialog(dialogOptions);$('.showRegisterPanel').click();}else if(window.location.hash!="#!input!"&&$.inArray(window.location.hash,hashReloadExceptions)==-1){}
$('.utilityLinks.authenticatedUserOnly').hide();$('.authenticatedUserOnly:not(.utilityLinks)').hide();$('.nonauthenticatedUserOnly').show();$('body').addClass('guestUser');}
$(document).trigger('userAuthComplete',[model.get('is_authenticated'),model.get('use_chrome_ext'),json]);if($.browser.chrome){var e=document.createEvent("Events");var eventName='userAuthCompleteExt';eventName+=model.get('is_authenticated')?'_true':'_false';e.initEvent(eventName,false,true);e.isAuthenticated=model.get('is_authenticated');document.dispatchEvent(e);}
if(typeof document.ajax_domain=="undefined"){if(!model.get('is_browser_supported')&&!window.location.pathname.match("/browsers\/?")&&$.cookie('suppressbrowserwarning')!=1){window.document.location='/unsupported-browser/?next='+window.location.pathname+window.location.hash+encodeURIComponent(window.location.search);return;}}
if(!lockifyUtils.cookiesEnabled()){window.document.location='/cookies/?next='+window.location.pathname+encodeURIComponent(window.location.search);return;}
$('#appVersion').text(json.app_version);$('#buildNumber, .buildNumber').text(json.front_end_build_number);try{$('.buildNumberTrunc').text(json.front_end_build_number.replace(/^0+/g,""));}catch(x){}
$('#buildModDate, #extBuilModDate').text(json.front_end_mod_datetime);}};function resendEmailChangeEmail(username){lockifyAjax.ajaxJSONSafe('/account/email/change/resend/','username='+encodeURIComponent(username),function(json){$('#login_form .form_errors').hide();$('#loginRequiredMessage').text(json.message);$('#loginRequiredMessage').show();},function(req,textStatus,exc){},30000);}
function openidComplete(querystring){lockifyAjax.ajaxJSONSafe('/accounts/login_openid_json/',querystring,lockify.account.handleCreatorAuth,function(req,textStatus,exc){$('#pageStatus').text(textStatus);},30000);}
$(function(){lockify.account.readCreatorAuth();});