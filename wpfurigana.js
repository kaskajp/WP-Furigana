(function($) {

	$(document).ready(function(){
	
		/****************************
			Browser specific rules
		*****************************/
		// Firefox
		if ( $.browser.mozilla ) {
			$('body').addClass('firefox');
		}
		
		// IE6
		if($.browser.msie && parseInt($.browser.version, 10) < 7) {
		    $('body').addClass('ie6');
		}
		
		// IE7
		if($.browser.msie && parseInt($.browser.version, 10) == 7) {
		    $('body').addClass('ie7');
		}
		
		// IE8
		if($.browser.msie && parseInt($.browser.version, 10) == 8) {
		    $('body').addClass('ie8');
		}
	
	});
	
})(jQuery);