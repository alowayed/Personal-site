$(document).ready(function(){
    

    $("blockquote").hover(function(){
        $("blockquote").fadeTo("50000", 0.3);
        }, function(){
        $("blockquote").fadeTo("50000",1);
    });
});