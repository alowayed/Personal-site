$(document).ready(function(){

	/* Quote fade (start) */
	var quotes = [
		'I told my girlfriend she drew her eyebrows to high. <br>She seemed surprised.',
		'I bought some shoes from a drug dealer. \
			<br>I don\'t know what he laced them with, but I\'ve been tripping all day.'
	];

	var jokes = [
		'I told my girlfriend she drew her eyebrows to high. <br>She seemed surprised.',
		'I bought some shoes from a drug dealer. \
			<br>I don\'t know what he laced them with, but I\'ve been tripping all day.',
		'I told my girlfriend she drew her eyebrows to high. <br>She seemed surprised.',
		'I have the heart of a lion <br>and a lifetime ban from the San Diego Zoo.',
		'What did one orphan say to the other? <br>"Robin, get in the Batmobile."',
		'You heard the rumor going around about butter? <br>Never mind, I shouldn\'t spread it.',
		'What did the Buddhist ask the hot dog vendor? <br>"Make me one with everything."\
			The Buddhist gives him a fifty, and the vendor pockets it.\
			The Buddhist asks for change and the vendor replies, <br>"Change comes from within."',
		'What do you get when you cross a dyslexic an insomniac, and an agnostic? \
			<br>Someone who lays awaks at night wondering if there is a dog.',
		'And God said to John,\
			<br>"Come forth and you shall be granted eternal life."\
			<br>But John came fifth and won a toaster.',
		'What do you call a nun in a wheelchair?\
			<br>Virgin Mobile.',
		'WHAT DO WE WANT?!?! LOW FLYING AIRPLANE NOISES!!!\
			<br>WHEN DO WE WANT \'EM?!?! NEEEEEYYYYYOOOOOOWWWW!',
		'What happened to the cow that jumped over the barbed wire fence?\
			<br>Udder destruction.',
		'What is the resemblance between a green apple and a red apple?\
			<br>They\'re both red except for the green one.',
		'How do you make holy wanter?\
			<br>Put it in a pot and boil the hell out of it.',
		'Why did Star Wars episode 4, 5 and 6 come before 1, 2 and 3?\
			<br>Because in charge of scheduling, Yoda was',
		'What do you call a black man who flies a plane?\
			<br>A pilot, you racist.',
		'If you\'re ever attacked by a gang of clowns, go for the juggler.',
		'Sometimes I tuck my knees into my chest and lean forward.\
			<br>That\'s just how I roll.'
	];




	/* Quote fade (start) */
	$("#full-quote").click(function(){
		$(this).fadeTo("5000000", 0 ,function(){
			random_quote = quotes[Math.floor(Math.random() * quotes.length)];
			$(this).children('blockquote').children('h3').html(random_quote);
			$(this).fadeTo("5000000", 1);
		});
	});
	/* Quote fade (end) */

	/* Jokes fade (start) */
	$("#full-joke").click(function(){
		$(this).fadeTo("5000000", 0 ,function(){
			random_joke = jokes[Math.floor(Math.random() * jokes.length)];
			$(this).children('blockquote').children('h3').html(random_joke);
			$(this).fadeTo("5000000", 1);
		});
	});
	/* Jokes fade (end) */
  

	var fixmeTop = $('.bs-docs-sidebar').offset().top;
	$(window).scroll(function() {
		var currentScroll = $(window).scrollTop() + 70;
		if (currentScroll >= fixmeTop) {
			$('.bs-docs-sidebar').css({
				position: 'fixed',
				top: '70px',
			});
	    } else {
	    	$('.bs-docs-sidebar').css({
	    		position: 'static'
	    	});
	    }
	});

   

});