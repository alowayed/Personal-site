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


			var UdergradTop = $('#section-Undergrad').offset().top;
			var HighTop = $('#section-High').offset().top;

			/* Fade in Udergrad-section, fade out High-section (start) */
			if (currentScroll <= (HighTop - screen.height/2)) {
				$('#sidenav-Undergrad').fadeIn(500);
				$('#sidenav-High').fadeOut(500, function(){
		    		$('#sidenav-High').hide();
		    	});
			}
			/* Fade in Undergrad-section, fade out High-section (end) */

			/* Fade in Business-section, fade out Lead and Comm-section (start) */
			else {
				$('#sidenav-High').fadeIn(500);
				$('#sidenav-Undergrad').fadeOut(500, function(){
		    		$('#sidenav-Undergrad').hide();
		    	});
			}
			/* Fade in Business-section, fade out Lead and Comm-section (end) */
		    
	    }
	    /* When scrolling through content (end) */

	    /* When at the top of the page (start) */
	    else {
	    	$('.bs-docs-sidebar').css({
	    		position: 'static',
	    		'text-indent': '1em',
	    	});
	    	$('#sidenav-Undergrad').fadeOut(500, function(){
		    	$('#sidenav-Undergrad').hide();
		    });
		    $('#sidenav-High').fadeOut(500, function(){
		    	$('#sidenav-Undergrad').hide();
		    });
	    }
	    /* When at the top of the page (end) */

	});
	/* Side nav-bar (start) ============================== */
	/* Left navbar stick to scroll (end) */

	





   

});