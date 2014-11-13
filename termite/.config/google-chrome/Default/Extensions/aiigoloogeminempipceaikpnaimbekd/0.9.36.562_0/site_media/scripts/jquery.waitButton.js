/*
 * jQuery Wait Button Plugin
 * Copyright 2010 Lockify Inc. All Rights Reserved.
*/
(function($){$.fn.waitButton=function(options){var defaults={disableButton:true};var settings=$.extend(defaults,options);return this.each(function(){var animateButton=function(){$(this).addClass('waitButton');if(settings.disableButton){$(this).prop('disabled',true);}
$(this).append('<span class="spinMe"></span>');$(this).children('.spinMe').spinnerFont();$(this).bind('deanimate',function(){$(this).unbind('deanimate');$(this).prop('disabled',false);$(this).removeClass('waitButton');$(this).children('.spinMe').remove();});return true;};$(this).bind('click',animateButton);});};})(jQuery);