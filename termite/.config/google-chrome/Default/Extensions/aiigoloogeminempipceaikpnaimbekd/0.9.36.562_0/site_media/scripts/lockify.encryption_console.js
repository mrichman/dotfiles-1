/*
 * Lockify Encryption Console
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Encryption console shows the strength of the text entered and highlights
 * the text also provides option to reset the text entered
*/
var highlight;$(document).bind('encryptPageReady',function(){var consoleElem=$('#encryptionConsole');new ConsoleView({el:consoleElem});var maxHeight;if($('#fixedHead').length){maxHeight=$(window).height()-119;}else{maxHeight=null;}
consoleElem.resizable({handles:{'n':consoleElem.children('.ui-resizable-handle')},minHeight:30,minWidth:consoleElem.width(),maxWidth:consoleElem.width(),maxHeight:maxHeight,alsoResize:"#consoleSizer",resize:function(event,ui){if(consoleElem.height()==(Math.round($(window).height()*0.80))){$('.ui-resizable-handle').addClass('maxed');}else{$('.ui-resizable-handle').removeClass('maxed');}}});var showConsole=function(){consoleElem.show().addClass('open');$('#main').addClass('rightPush');$('#footer').addClass('rightPush');$("#showConsole").addClass('defaultHide');$('#consoleSizer').removeClass('defaultHide');window.location.hash="techview";setTimeout(function(){$('.clickHere').show();},1000);setTimeout(function(){$('.clickHere').hide();},5000);};var closeConsole=function(){$("#showConsole").removeClass('defaultHide');$('#main').removeClass('rightPush');$('#footer').removeClass('rightPush');$('.toggleTrigger.open').click();$('#consoleSizer').addClass('defaultHide');consoleElem.show().removeClass('open');window.location.hash='';};$("#showConsole").click(function(){showConsole();});$("#showConsole").bind('keyup','return',function(){showConsole();});if(window.location.hash=='#techview'){showConsole();}
$(".closeConsoleIcon").click(function(){closeConsole();});});