/*
 * jQuery Pluralize Plugin
 * Copyright 2010 Lockify Inc. All Rights Reserved.
 * Simple plugin to add or remove a trailing 's' to a selector based on a value passed in.
*/
(function(jQuery){jQuery.fn.pluralize=function(options){if(this.length===0){return null;}
if(this.length>1){this.each(function(){$(this).pluralize(options);});return this;}
var defaults={};var opts=$.extend(defaults,options);if(opts.value==1){this.text(this.text().replace(/s$/,''));}else{this.text(this.text().replace(/([^s])$/,'$1s'));}
return this;};jQuery.fn.extend({});})(jQuery);