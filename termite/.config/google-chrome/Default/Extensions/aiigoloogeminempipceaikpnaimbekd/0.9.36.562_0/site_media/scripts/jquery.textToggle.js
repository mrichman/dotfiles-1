/*
 * jQuery Text Toggle Plugin
 * Copyright 2010 Lockify Inc. All Rights Reserved.
*/
(function(jQuery){jQuery.fn.textToggle=function(options){if(this.length===0){return null;}
if(this.length>1){this.each(function(){$(this).textToggle(options);});return this;}
this.data('val',this.data('initialVal'));if(this.data('val')){this.text(this.data('trueOffText'));}else{this.text(this.data('falseOffText'));}
this.bind('mouseover',function(){if($(this).data('val')){$(this).text($(this).data('trueOverText'));$(this).addClass('trueOver');}else{$(this).text($(this).data('falseOverText'));$(this).addClass('falseOver');}});this.bind('mouseout',function(){if($(this).data('val')){$(this).text($(this).data('trueOffText'));$(this).removeClass('trueOver');}else{$(this).text($(this).data('falseOffText'));$(this).removeClass('falseOver');}});this.click(function(){$(this).data('val',!$(this).data('val'));$(this).trigger('mouseout');$(this).removeClass('trueOver').removeClass('falseOver');$(this).toggleClass('notifyTrue').toggleClass('notifyFalse');});return this;};jQuery.fn.extend({});})(jQuery);