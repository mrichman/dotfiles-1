/*
 * jQuery Spinner Font plugin
 * Copyright 2010 Lockify Inc. All Rights Reserved.
*/
(function(jQuery){var methods={init:function(options){if(this.length===0){return null;}
if(this.length>1){this.each(function(){$(this).spinnerFont(options);});return this;}
var defaults={delayMs:100,framesCount:8,classPattern:'icon-spin'};this.options=$.extend(options,defaults);var curFrame=1;var self=this;this.interval=setInterval(function(){self.removeClass(self.options.classPattern+self.curFrame);self.curFrame=self.curFrame<self.options.framesCount?self.curFrame+1:1;self.addClass(self.options.classPattern+self.curFrame);},this.options.delayMs);return this;},destroy:function(self,args){return this.each(function(){clearInterval(self.interval);});}};jQuery.fn.spinnerFont=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}else{$.error('Method '+method+' does not exist on jQuery.tooltip');}};})(jQuery);