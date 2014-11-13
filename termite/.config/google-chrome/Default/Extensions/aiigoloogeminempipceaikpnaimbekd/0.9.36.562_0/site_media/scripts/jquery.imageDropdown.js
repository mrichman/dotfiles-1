/*
 * jQuery Image Dropdown Plugin
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Plugin enables to create a select dropdown
 */
(function(jQuery){jQuery.fn.imageDropdown=function(options){if(this.length===0){return null;}
if(this.length>1){this.each(function(){$(this).imageDropdown(options);});return this;}
$('.utilityDropdownOverlay').bind('touchstart',function(){self.close();});var defaults={'selectList':undefined,'initialIndex':0,'initialValue':undefined,'showSelectedItemInList':false,'enableClosedMode':true,'highlightClass':''};var opts=$.extend(defaults,options);var _selectedIndex;this.val=function(){return this.getSelectedOption().data('value');};this.getSelectedOption=function(){return opts.selectList.children('li').eq(this.getSelectedIndex());};this.getSelectedIndex=function(){return _selectedIndex;};this.setSelectedIndex=function(index){var selectedDisplayElem=this.children("span.selected");var selectedElem=opts.selectList.children().eq(index);if(selectedElem.data('disabled')){return;}
selectedDisplayElem.html(selectedElem.html());if(!opts.showSelectedItemInList){opts.selectList.children().show();selectedElem.hide();}
selectedDisplayElem.children().each(function(i){if($(this).css('display')==='none'){selectedDisplayElem.children().each(function(i){if($(this).css('display')!=='none'){$(this).remove();}});return false;}});selectedDisplayElem.children().show();_selectedIndex=index;this.trigger('change',index);return this;};this.setSelectedValue=function(value){if(typeof value!=='undefined'&&value!=null){var option=opts.selectList.children('[data-value="'+value+'"]').eq(0);opts.initialIndex=opts.selectList.children().index(option);this.setSelectedIndex(opts.initialIndex);}
return this;};this.setInitialIndex=function(index){opts.initialIndex=index;};this.setInitialValue=function(value){var option=opts.selectList.children('[data-value="'+value+'"]').eq(0);opts.initialValue=value;opts.initialIndex=opts.selectList.children().index(option);return self;};this.needsReset=function(){return this.getSelectedIndex()!=opts.initialIndex;};this.reset=function(){if(typeof opts.initialValue!='undefined'){this.setSelectedValue(opts.initialValue);}else{this.setSelectedIndex(opts.initialIndex);}};this.bind('keydown','up',function(event){return false;});this.bind('keydown','down',function(event){return false;});this.bind('keypress','up',function(event){return false;});this.bind('keypress','down',function(event){return false;});this.highlightIndex=function(index){self.removeHighlight();if(opts.highlightClass){opts.selectList.children().eq(index).addClass(opts.highlightClass);}
else{opts.selectList.children().eq(index).css('font-weight','bold');}};this.removeHighlight=function(clearIndex){if(typeof clearIndex=='undefined'){clearIndex=false;}
if(opts.highlightClass){opts.selectList.children().removeClass(opts.highlightClass);}
else{opts.selectList.children().css('font-weight','');}
if(clearIndex){var hlIndex=null;}};var hlIndex;var newIndex;var keyupHandler=function(event){var menuOpen=opts.selectList.is(":visible");if(event.keyCode==27){if(menuOpen){self.close();}}
if(event.keyCode==13){if(menuOpen){if(hlIndex>-1){self.setSelectedIndex(hlIndex);}
self.close();}else{self.click();hlIndex=-1;}}
if(event.keyCode==38||event.keyCode==37)
{if(menuOpen){if(typeof hlIndex=='undefined'){hlIndex=-1;}
hlIndex--;if(!opts.showSelectedItemInList&&hlIndex==self.getSelectedIndex()){hlIndex--;}
if(hlIndex<0){hlIndex=opts.selectList.children().length-1;}
self.highlightIndex(hlIndex);}else if(opts.enableClosedMode){newIndex=self.getSelectedIndex()-1;if(newIndex<0){newIndex=opts.selectList.children().length-1;}
self.setSelectedIndex(newIndex);}}else if(event.keyCode==40||event.keyCode==39)
{if(menuOpen){event.stopImmediatePropagation();event.stopPropagation();event.cancelBubble=true;if(typeof hlIndex=='undefined'){hlIndex=-1;}
hlIndex++;if(!opts.showSelectedItemInList&&hlIndex==self.getSelectedIndex()){hlIndex++;}
if(hlIndex>=opts.selectList.children().length){hlIndex=0;}
self.highlightIndex(hlIndex);}else if(opts.enableClosedMode){newIndex=self.getSelectedIndex()+1;if(newIndex>=opts.selectList.children().length){newIndex=0;}
self.setSelectedIndex(newIndex);}else{self.click();}}
return false;};this.disableKeys=function(){this.unbind('keyup',keyupHandler);};this.enableKeys=function(){this.bind('keyup','return',keyupHandler);this.bind('keyup','esc',keyupHandler);this.bind('keyup','up',keyupHandler);this.bind('keyup','down',keyupHandler);};this.enableKeys();this.bindHover=function(){$(document).on("mouseover",this,function(){self.children('.selected').addClass("selected-hover");}).on("mouseout",this,function(){self.children('.selected').removeClass("selected-hover");});};this.bindHover();var clickHandler=function(){if(opts.selectList.is(":visible")){self.close();}else{opts.selectList.show();$(this).addClass("squareDown");$('.utilityDropdownOverlay').show();}};$(this).click(clickHandler);opts.selectList.children('li').mouseenter(function(){self.removeHighlight(true);});opts.selectList.scroll(function(){if(closeTimeout){clearTimeout(closeTimeout);}});var childFocusTimeout;opts.selectList.children('li').bind('mousedown',function(){childFocusTimeout=setTimeout(function(){childFocusTimeout=null;},100);});var handleOptionClick=function(){if(closeTimeout){clearTimeout(closeTimeout);}
self.setSelectedIndex(opts.selectList.children().index(this));self.close();self.focus();$(".selected").removeClass("selected-hover");};this.bindOptionClick=function(){opts.selectList.children('li').unbind('click',handleOptionClick);opts.selectList.children('li').bind('click',handleOptionClick);};this.bindOptionClick();var closeTimeout;$(this).blur(function(){if(!childFocusTimeout){closeTimeout=setTimeout(function(){if(!$.browser['msie']){self.close();}
self.close();self.bindHover();},150);}});this.close=function(){self.removeHighlight(true);opts.selectList.hide();self.removeClass("squareDown");self.trigger('close');$('.utilityDropdownOverlay').hide();};this.enable=function(){this.enableKeys();this.click(clickHandler);this.bindHover();};this.disable=function(){this.disableKeys();$(this).unbind('click mouseenter mouseleave');};if(typeof opts.initialValue!='undefined'){this.setInitialValue(opts.initialValue);}else{this.setInitialIndex(opts.initialIndex);}
this.reset();var self=this;return this;};jQuery.fn.extend({});})(jQuery);