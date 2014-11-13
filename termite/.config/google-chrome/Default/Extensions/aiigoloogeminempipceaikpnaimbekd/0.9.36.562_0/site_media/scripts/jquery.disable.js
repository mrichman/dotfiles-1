/*
 * jQuery Disable Plugin
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Plugin to disable or enable the element

*/
(function($){$.fn.disable=function(){this.each(function(){$(this).attr('disabled',true).addClass('disabled');});return this;};$.fn.enable=function(){this.each(function(){$(this).attr('disabled',false).removeClass('disabled');});return this;};})(jQuery);