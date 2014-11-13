/*
 * Lockify Registration
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Initializes views for registration and registration activate
 */
var gOpenIDState;$(function(){$('#login_openid_form').submit(function(){lockifyAjax.ajaxJSONSafeForm("/accounts/login_openid_json/",$(this),function(json){gOpenIDState=json.state;lockifyUtils.newWindow(json.location,500,500);},function(json){$('#loginOpenIdButton').trigger('deanimate');});return false;});});$(document).ready(function(){if(typeof UtilityLinksView=='function'){utilityLinks=new UtilityLinksView({el:$('#loginBody'),model:null});}
if(lockifyGlobals.client_type=="webapp"){if(typeof InviteRequestView==="function"){new InviteRequestView({el:$('.betaListContainer'),model:null});}}
$(".submitBtn").click(function(){$('form').submit();});if($('#registration_form').length){new RegistrationView({el:$('#registration_form').parent(),model:null});}
if($('#validLinkUi').length){new RegistrationActivateView({el:$('#validLinkUi'),model:null});}
if($('#newReset_form2').length){new PasswordResetView({el:$('#passwordResetContaner').parent(),model:null});}
if(window.location.pathname=='/'){$(document).bind('userAuthComplete',function(e,is_authenticated){$(document).trigger('formBoundToUserPrefs');});}
var next=lockifyUtils.getUrlParam('next');if(next){$('#loginExtraInfo .loginRequiredNotice').removeClass('defaultHide');$('#loginExtraInfo .versionNotice').remove();$('#expressSignIn').click();}});