/*
 * Lockify Index Prefs
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Sets up default settings for the user using the data from account settings
 */
$(document).bind('userAuthComplete',function(e,is_authenticated){if(is_authenticated){var updateFormWithUserPrefs=function(){var userPrefs=document.lockifyUserEntryDefaults.attributes;if(userPrefs.maxViews){$('#bandDefaultView').text(userPrefs.maxViews);var labelText=$('#bandDefaultView').next('span').text();$('#bandDefaultView').next('span').pluralize({'value':userPrefs.maxViews});if(typeof expirationLimitsView!='undefined'){expirationLimitsView.viewsAndTime.viewingsDropDown.setInitialValue(userPrefs.maxViews).reset();}}
if(userPrefs.lifeMinutes){$('#bandDefaultTime').html(lockifyUtils.splitValueIntoSpans(userPrefs.life_minutes_description));if(typeof expirationLimitsView!='undefined'){expirationLimitsView.viewsAndTime.timespanDropDown.setInitialValue(userPrefs.lifeMinutes).reset();}}
if(typeof userPrefs.enable_message_copying=='boolean'){$('#easyCopy').prop('checked',!userPrefs.enable_message_copying?"checked":null);}
if(typeof userPrefs.enable_message_printing=='boolean'){$('#easyPrint').prop('checked',!userPrefs.enable_message_printing?"checked":null);}
if(typeof userPrefs.allowManualExpiration=='boolean'){$('#allowExpire').prop('checked',userPrefs.allowManualExpiration?"checked":null);}
if(typeof userPrefs.receiveNotifications=='boolean'){$('#notify').prop('checked',!userPrefs.receiveNotifications?"checked":null);}
if(typeof userPrefs.show_more_options=='boolean'&&typeof moreOptionsView!='undefined'){moreOptionsView.model.set('showMoreOptions',userPrefs.show_more_options);if(userPrefs.show_more_options){$('#moreOptionsContainer').accordion('activate',0);}}
if(userPrefs.max_file_kb_per_link){lockifyIndexGlobals.maxFileKbPerLink=userPrefs.max_file_kb_per_link;$('#availFileKb').data('maxKb',userPrefs.max_file_kb_per_link);$('#fileTooLargeDialog .maxFileKb').text(userPrefs.max_file_kb_per_link);if(typeof uiFileReader=='object'){fileListView.updateAvailableFileUnits();}}
if(userPrefs.auth_method){if(typeof authMethodView!='undefined'){}}
if(!userPrefs.allow_files){$('#incFileToggle').parent().remove();$('#addedDocsDiv').remove();}
if(userPrefs.enable_camera){$('#incPhotoIcon').removeClass('defaultHide');}
lockifyIndexGlobals.enable2wayUserIdCrypto=userPrefs.enable_2way_userid_crypto;if(!userPrefs.enable_phone_auth){$('#authOption_select li[data-value="phone"]').hide();}
if(typeof userPrefs.decryptWithWebApp=='boolean'){$('#specifyClient').prop('checked',!userPrefs.decryptWithWebApp?"checked":null);}
if(typeof userPrefs.enableFlashCopy=='boolean'){$('#flashCopyCheckbox').prop('checked',!userPrefs.enableFlashCopy?"checked":null);}
if(typeof userPrefs.bit_strength=='number'&&userPrefs.bit_strength==128){$('#shortLinkCheckbox').prop('checked','checked');}else{$('#shortLinkCheckbox').prop('checked',null);}
if(typeof userPrefs.save_file_metadata=='boolean'){$('#saveFileMetadata').prop('checked',!userPrefs.save_file_metadata?"checked":null);}
$(document).trigger('formBoundToUserPrefs');};document.lockifyUserEntryDefaults=new EntryDefaultsModel();document.lockifyUserEntryDefaults.id=document.lockifyUserEntryDefaults.cid;document.lockifyUserEntryDefaults.fetch({success:function(model,json,options){updateFormWithUserPrefs();}});}});