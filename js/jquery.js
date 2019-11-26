$(function() {
    $(".animate").click(function(){
        $(".mainTitle").animate({
            fontSize: '5em'
        });
        $(".mainTitle").animate({
            fontSize: '2em'
        });
        $(".mainTitle").css("color", "blue");
        $(".profile").css({
            borderStyle: 'solid',
            borderColor: 'blue' 
        });
    });    
});