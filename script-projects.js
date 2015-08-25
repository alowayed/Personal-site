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


			var physicalTop = $('#section-physical').offset().top;
			var digitalTop = $('#section-digital').offset().top;
			var bothTop = $('#section-both').offset().top;

			/* Fade in physical-section, fade out digital-section (start) */
			if (currentScroll <= (digitalTop - screen.height/2)) {
				$('#sidenav-physical').fadeIn(500);
				$('#sidenav-digital').fadeOut(500, function(){
		    		$('#sidenav-digital').hide();
		    	});
			}
			/* Fade in physical-section, fade out digital-section (end) */

			/* Fade in digital-section, fade out physical and both-section (start) */
			else if ((currentScroll >= (digitalTop - screen.height/2)) && (currentScroll <= (bothTop - screen.height/2))){
				$('#sidenav-physical').fadeOut(500, function(){
		    		$('#sidenav-physical').hide();
		    	});
				$('#sidenav-digital').fadeIn(500);
				$('#sidenav-both').fadeOut(500, function(){
		    		$('#sidenav-both').hide();
		    	});
			}
			/* Fade in digital-section, fade out physical and both-section (end) */

			/* Fade in both-section, fade out digital-section (start) */
			else {
				$('#sidenav-both').fadeIn(500);
				$('#sidenav-digital').fadeOut(500, function(){
		    		$('#sidenav-digital').hide();
		    	});
			}
			/* Fade in both-section, fade out digital-section (end) */
		    
	    }
	    /* When scrolling through content (end) */

	    /* When at the top of the page (start) */
	    else {
	    	$('.bs-docs-sidebar').css({
	    		position: 'static',
	    		'text-indent': '1em',
	    	});
	    	$('#sidenav-physical').fadeOut(500, function(){
		    	$('#sidenav-physical').hide();
		    });
		    $('#sidenav-digital').fadeOut(500, function(){
		    	$('#sidenav-digital').hide();
		    });
	    }
	    /* When at the top of the page (end) */

	});
	/* Side nav-bar (start) ============================== */
	/* Left navbar stick to scroll (end) */

	




   

});