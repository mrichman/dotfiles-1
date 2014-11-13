/*
 * jQuery Notice Box Plugin
 * Copyright 2010 Lockify Inc. All Rights Reserved.
*/
(function(jQuery){jQuery.fn.noticeBox=function(options){if(this.length===0){return null;}
if(this.length>1){this.each(function(){$(this).noticeBox(options);});return this;}
var defaults={};var opts=$.extend(defaults,options);this.find('.noticeMoreContent').hide();var self=this;$(this).find('.noticeMore').click(function(){self.find('.noticeMoreContent').show();$(this).hide();$(document).trigger('noticeOpen');});$(this).find('.noticeLess').click(function(){self.find('.noticeMoreContent').hide();self.find('.noticeMore').show();$(document).trigger('noticeClosed');});return this;};jQuery.fn.extend({});})(jQuery);