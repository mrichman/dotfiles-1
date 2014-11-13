/*
 * Lockify Entropy
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * License:
 * Handles activity related to enropy collection in browser without a CSPRNG
 *
*/
var lockifyEntropy={bindEntropyEvents:function(){$(document).unbind('mousemove',Random._mouse_collector);$(document).bind('mousemove',Random._mouse_collector);var lastKeyTime=null;var lastKeyTimeDiff=0;collectKeyEntropy=function(){var newKeyTime=new Date().getTime();if(lastKeyTime){var diff=newKeyTime-lastKeyTime;var e=(diff!==0&&diff!=lastKeyTimeDiff)?1:0;lastKeyTimeDiff=diff;Random.add_entropy(newKeyTime,e,"keyboard");}
lastKeyTime=newKeyTime;return true;};$(document).unbind('keyup',collectKeyEntropy);$(document).bind('keyup',collectKeyEntropy);Random.add_entropy(new Date().getTime(),0,'load_end_time');}};