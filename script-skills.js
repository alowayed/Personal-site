$(document).ready(function(){

  
	/* Left navbar stick to scroll (start) */
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

			var CSTop = $('#section-CS').offset().top;
			var EETop = $('#section-EE').offset().top;
			var MechETop = $('#section-MechE').offset().top;

			/* Fade in CS-section, fade out EE-section (start) */
			if ((currentScroll >= CSTop) && (currentScroll <= (EETop - screen.height/2))) {
				$('#sidenav-CS').fadeIn(500);
				$('#sidenav-EE').fadeOut(500, function(){
		    		$('#sidenav-EE').hide();
		    	});
			}
			/* Fade in CS-section, fade out EE-section (end) */

			/* Fade in EE-section, fade out CS and MechE-section (start) */
			else if ((currentScroll >= (EETop - screen.height/2)) && (currentScroll <= (MechETop - screen.height/2))){
				$('#sidenav-CS').fadeOut(500, function(){
		    		$('#sidenav-CS').hide();
		    	});
				$('#sidenav-EE').fadeIn(500);
				$('#sidenav-MechE').fadeOut(500, function(){
		    		$('#sidenav-MechE').hide();
		    	});
			}
			/* Fade in EE-section, fade out CS and MechE-section (end) */

			/* Fade in MechE-section, fade out EE and Lead-section (start) */
			else if ((currentScroll >= (MechETop - screen.height/2)) && (currentScroll <= (LeadTop - screen.height/2))){
				$('#sidenav-EE').fadeOut(500, function(){
		    		$('#sidenav-EE').hide();
		    	});
				$('#sidenav-MechE').fadeIn(500);
				$('#sidenav-Lead').fadeOut(500, function(){
		    		$('#sidenav-Lead').hide();
		    	});
			}
			/* Fade in MechE-section, fade out EE and Lead-section (end) */

			/* Fade in Lead-section, fade out MechE and Business-section (start) */
			else if ((currentScroll >= (LeadTop - screen.height/2)) && (currentScroll <= (BusinessTop - screen.height/2))){
				$('#sidenav-MechE').fadeOut(500, function(){
		    		$('#sidenav-MechE').hide();
		    	});
				$('#sidenav-Lead').fadeIn(500);
				$('#sidenav-Business').fadeOut(500, function(){
		    		$('#sidenav-Business').hide();
		    	});
			}
			/* Fade in Lead-section, fade out MechE and Business-section (end) */
	    }
	    /* When scrolling through content (end) */

	    /* When at the top of the page (start) */
	    else {
	    	$('.bs-docs-sidebar').css({
	    		position: 'static',
	    		'text-indent': '1em',
	    	});
	    	$('#sidenav-CS').fadeOut(500, function(){
		    	$('#sidenav-CS').hide();
		    });
	    }
	    /* When at the top of the page (end) */

	});
	/* Side nav-bar (start) ============================== */
	/* Left navbar stick to scroll (end) */

	





   

});