$(document).bind('userAuthComplete',function(e,is_authenticated){if(lockifyUtils.onNewLinkPage()){return;}
if(!is_authenticated){$(document).trigger('formBoundToUserPrefs');}});