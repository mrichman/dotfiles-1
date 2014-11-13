/*
 * lockify.rateLimitMessages.js
 * Function that shows/hides rate limit messages, as determined by a JSON
 * reply from a rate-limited view.
 *
 * Unless the container defines its own rate-limit messages,
 * the HTML page must include rateLimitAlert.inc.html somwhere,
 * which defines #rateLimitMessageTemplate. It looks something like this:

   <div id="rateLimitMessageTemplate">
     <div class="temporaryLockoutMessage error">
       You have been locked out because of too many failed attempts.
       Please wait <span class="duration">-</span> and try again.
     </div>
     <div class="attemptsRemainingMessage">
       You have
       <span class="counterSingular">one attempt</span>
       <span class="counterPlural"><span class="counter">-</span> attempts</span>
       remaining.
     </div>
   </div>
*/
function rateLimitMessages(jsonReply,showCountdown){if(typeof showCountdown=='undefined'){showCountdown=true;}
$lockoutMessage=$('#lockoutDialog');if(jsonReply.ratelimit_blocked){$("#lockoutDialog").dialog($.extend({},dialogOptions,{dialogClass:"coexist",closeOnEscape:false,open:function(){$(this).parent().prev().addClass('denyClick');}}));$lockoutMessage.show().find('.duration').each(function(){if(jsonReply.ratelimit_duration<60){$(this).html(jsonReply.ratelimit_duration+'<div class="durationLabel">seconds</div>');}else{var minutes=Math.ceil(jsonReply.ratelimit_duration/60);$(this).html(minutes+'<div class="durationLabel">minute'+(minutes!==1?'s':'')+'</div>');}
$(".form_errors").hide();var self=$(this);$(this).data('duration',jsonReply.ratelimit_duration);if(showCountdown){clearInterval($(this).prop('cdInterval'));$(this).prop('cdInterval',setInterval(function(){self.data('duration',self.data('duration')-1);self.html(self.data('duration')+'<div class="durationLabel">seconds</div>');},1000));}});setTimeout(function(){$lockoutMessage.find('.duration').each(function(){clearInterval($(this).prop('cdInterval'));});$('.ui-widget-overlay').removeClass('denyClick');$('#lockoutDialog.ui-dialog-content').dialog('close');$(document).trigger('ratelimitLockoutEnded');},jsonReply.ratelimit_duration*1000);}
else{$lockoutMessage.hide();}}