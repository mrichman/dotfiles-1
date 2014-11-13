/*
 * jQuery Toggle Mask
 * Copyright 2012 Lockify Inc. All Rights Reserved.
*/
(function(jQuery){jQuery.fn.toggleMask=function(options){if(this.length===0){return null;}
if(this.length>1){this.each(function(){$(this).toggleMask(options);});return this;}
var defaults={inputs:undefined};this.options=$.extend(options,defaults);if(!this.is('input:checkbox')){this.data('masked',true);}
var currentFocus;$(document).on("focus",this.options.inputs,function(){currentFocus=this.id;});var self=this;this.click(function(){var newType;if(self.is('input:checkbox')){newType=$(self).is(":checked")?'text':'password';}else{newType=self.data('masked')?'text':'password';self.data('masked',!self.data('masked'));self.toggleClass('unmasked');}
self.options.inputs.each(function(i,input){input=$(input);var $newInput=$('<input>');$newInput.attr({'type':newType,'id':input.attr('id'),'name':input.attr('name'),'class':input.attr('class'),'placeholder':input.attr('placeholder')}).val(input.val());input.trigger('maskToggled',[$newInput]);self.options.inputs[i]=$newInput;input.replaceWith($newInput);});$('#'+currentFocus).focus();});return this;};})(jQuery);