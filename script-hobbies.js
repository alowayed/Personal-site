$(document).ready(function(){
  
	/* Side nav-bar (start) ============================== */
	var fixmeTop = $('.bs-docs-sidebar').offset().top;
	$(window).scroll(function() {
		var currentScroll = $(window).scrollTop() + 70;

		/* When scrolling through content (start) */
		if (currentScroll >= fixmeTop) {

			/* Fix nav-bar while scrolling (start) */
			$('.bs-docs-sidebar').css({
				position: 'fixed',
				'text-indent': '0',
				top: '70px',
				'width': '14vw'
			});
			/* Fix nav-bar while scrolling (end) */


			var CookingTop = $('#section-Cooking').offset().top;
			var ReligionTop = $('#section-Cooking').offset().top;

			/* Fade in Cooking-section, fade out Religion-section (start) */
			if (currentScroll <= (ReligionTop - screen.height/2)) {
				$('#sidenav-Cooking').fadeIn(500);
				$('#sidenav-Religion').fadeOut(500, function(){
		    		$('#sidenav-Religion').hide();
		    	});
			}
			/* Fade in Cooking-section, fade out Religion-section (end) */

			/* Fade in Cooking-section, fade out Religion-section (start) */
			else if (currentScroll >= (ReligionTop - screen.height/2)) {
				$('#sidenav-Religion').fadeIn(500);
				$('#sidenav-Cooking').fadeOut(500, function(){
		    		$('#sidenav-Cooking').hide();
		    	});
			}
			/* Fade in Cooking-section, fade out Religion-section (end) */
		    
	    }
	    /* When scrolling through content (end) */

	    /* When at the top of the page (start) */
	    else {
	    	$('.bs-docs-sidebar').css({
	    		position: 'static',
	    		'text-indent': '1em',
	    	});
	    	$('#sidenav-Cooking').fadeOut(500, function(){
		    	$('#sidenav-Undergrad').hide();
		    });
		    $('#sidenav-Religion').fadeOut(500, function(){
		    	$('#sidenav-Undergrad').hide();
		    });
	    }
	    /* When at the top of the page (end) */

	});
	/* Side nav-bar (start) ============================== */
	/* Left navbar stick to scroll (end) */

});