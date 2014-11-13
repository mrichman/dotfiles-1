var LinkDisplayView=BaseEncryptOutputView.extend({events:{"focus #output":"handleFocus","click #outputMessage":"handleFocusDeflect"},initialize:function(){LinkDisplayView.__super__.initialize();$(document).bind('linkExpired',this.handleLinkExpiration);$(this.el).find("#output").text(this.model.get('outUrl'));if(navigator.userAgent.indexOf('Mac OS X')!=-1){$(".copyKey").html($(".copyKey").data('mackey'));}else{$(".copyKey").text($(".copyKey").data('winkey'));}
var self=this;$(document).keydown(function(e){if(!(e.ctrlKey||e.metaKey)){return;}
if($(e.target).is("input:visible,textarea:visible")){return;}
if(typeof window.getSelection==="function"?(_ref=window.getSelection())!=null?_ref.toString():void 0:void 0){return;}
if((_ref1=document.selection)!=null?_ref1.createRange().text:void 0){return;}
_.defer(function(){self.$('#output').focus();});});},handleFocusDeflect:function(){$('#output').focus();},handleFocus:function(e){if($(e.target).hasClass("expired")){if(document.createRange){window.getSelection().removeAllRanges();}
else if(document.selection){document.selection.empty();}
return false;}
if(!Modernizr.touch){$(e.target).animate({opacity:1.0},100,"linear",function(){try{if(document.createRange){var rangeToSelect=document.createRange();rangeToSelect.selectNode(this.parentNode);var curSelect=window.getSelection();curSelect.removeAllRanges();curSelect.addRange(rangeToSelect);}
else if(document.body&&document.body.createTextRange){range=document.body.createTextRange();range.moveToElementText(this);range.select();}}catch(x){}
return false;});}},handleLinkExpiration:function(json){$("#linkDisplay").addClass("expired");$('.tooltip-inline-content').hide();$('.tooltip-inline').removeClass('open');$('#outputExtras').hide();$('#expiredLinkBand').removeClass('defaultHide');}});