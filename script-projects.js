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


			var internshipTop = $('#section-internship').offset().top;
			var seminarTop = $('#section-seminar').offset().top;
			var compTop = $('#section-comp').offset().top;

			/* Fade in internship-section, fade out seminar-section (start) */
			if (currentScroll <= (seminarTop - screen.height/2)) {
				$('#sidenav-internship').fadeIn(500);
				$('#sidenav-seminar').fadeOut(500, function(){
		    		$('#sidenav-seminar').hide();
		    	});
			}
			/* Fade in internship-section, fade out seminar-section (end) */

			/* Fade in seminar-section, fade out internship and comp-section (start) */
			else if ((currentScroll >= (seminarTop - screen.height/2)) && (currentScroll <= (compTop - screen.height/2))){
				$('#sidenav-internship').fadeOut(500, function(){
		    		$('#sidenav-internship').hide();
		    	});
				$('#sidenav-seminar').fadeIn(500);
				$('#sidenav-comp').fadeOut(500, function(){
		    		$('#sidenav-comp').hide();
		    	});
			}
			/* Fade in EE-section, fade out CS and MechE-section (end) */

			/* Fade in Business-section, fade out Lead and Comm-section (start) */
			else {
				$('#sidenav-comp').fadeIn(500);
				$('#sidenav-seminar').fadeOut(500, function(){
		    		$('#sidenav-seminar').hide();
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
	    	$('#sidenav-internship').fadeOut(500, function(){
		    	$('#sidenav-internship').hide();
		    });
		    $('#sidenav-seminar').fadeOut(500, function(){
		    	$('#sidenav-seminar').hide();
		    });
	    }
	    /* When at the top of the page (end) */

	});
	/* Side nav-bar (start) ============================== */
	/* Left navbar stick to scroll (end) */

	




   

});