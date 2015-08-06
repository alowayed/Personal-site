$(document).ready(function(){
    

	/* Quote fade (start) */
	/*
  $("blockquote").hover(function(){
  	$("blockquote").fadeTo("50000", 0.5);
  	}, function(){
  	$("blockquote").fadeTo("50000",1);
  });
  /* Quote fade (end) */

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
			<br>WHEN DO WE WANT \'EM?!?! NEEEEEYYYYYOOOOOOWWWW!'
	];




	/* Quote fade (start) */
	$("#full-quote").click(function(){
		$(this).fadeTo("5000000", 0 ,function(){
			random_quote = quotes[Math.floor(Math.random() * quotes.length)];
			$(this).children('blockquote').children('h3').html(random_quote);
			$(this).fadeTo("5000000", 1);
		});
	});
	/* Quote fade (start) */


	$("#full-joke").click(function(){
		$(this).fadeTo("5000000", 0 ,function(){
			random_joke = jokes[Math.floor(Math.random() * jokes.length)];
			$(this).children('blockquote').children('h3').html(random_joke);
			$(this).fadeTo("5000000", 1);
		});
	});
  



    

});