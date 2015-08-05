$(document).ready(function(){
    

	/* Quote fade (start) */
	/*
  $("blockquote").hover(function(){
  	$("blockquote").fadeTo("50000", 0.5);
  	}, function(){
  	$("blockquote").fadeTo("50000",1);
  });
  /* Quote fade (end) */



  $("blockquote")
  	.mouseenter(function(){
  		$(this).fadeTo("5000000", 0);
  	})
		.mouseleave(function(){
  		$("blockquote").load("quotes.txt");
  		$("blockquote").fadeTo("5000000", 1);
  	});



  /*
	var xmlhttp = null; 

	function AjaxRequest(url){ 
		if(xmlhttp != null){ 
			if(xmlhttp.abort) 
			xmlhttp.abort(); 
			xmlhttp = null; 
		};

		if(window.XMLHttpRequest) // good browsers 
			xmlhttp=new XMLHttpRequest(); 
		else if(window.ActiveXObject) // IE 
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
	
		if(xmlhttp == null) 
			return null; 

		xmlhttp.open("GET",url,false); 
		xmlhttp.send(null); 

		if(xmlhttp.status >= 200 && xmlhttp.status < 300)// 2xx is good enough 
			return xmlhttp.responseText; 
		else 
			return null; 
	} 

	function clearEle(element){ 
		while(element.hasChildNodes()) 
			element.removeChild(element.firstChild); 
	} 

	window.onload = function(){ 
		var el, msg, date, txt = AjaxRequest('jokes.txt'); 
		if(txt == null) 
			msg = 'page not found or Ajax not supported by your browser.'; 
		else{ 
			msg = txt;
		} 
		date = new Date(); 
		txt = msg.split("_________"); 
		date = Math.floor(date.getTime() / (24*60*60*1000)); 

		el = document.getElementById('quote'); 

		clearEle(el); 
		el.appendChild( document.createTextNode(txt[Math.floor((Math.random()*txt.length)]))); 
	} 
	*/
    

});