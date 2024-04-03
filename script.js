$(document).ready(function() {    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);       
            }
        }); 
    });
});

window.onload = function() {
    const entryElements = $('.slider-item');
    let entryIndex = 0;

    $('.sp_right').click(function(){
    //change the number below if u added more sponsors
    if(entryIndex!=2){
        entryIndex++;
        entryElements.hide();
        $(entryElements[entryIndex]).fadeIn(1000);
    }});

    $('.sp_left').click(function(){
    if(entryIndex!=0){
        entryIndex--;
        entryElements.hide();
        $(entryElements[entryIndex]).fadeIn(1000);
    }});

    const entryElements1 = $('.slider-item1');
    let entryIndex1 = 0;

    $('.mp_right').click(function(){
    //change the number below if u added more media partners
    if(entryIndex1!=2){
        entryIndex1++;
        entryElements1.hide();
        $(entryElements1[entryIndex1]).fadeIn(1000);
    }});

    $('.mp_left').click(function(){
    if(entryIndex1!=0){
        entryIndex1--;
        entryElements1.hide();
        $(entryElements1[entryIndex1]).fadeIn(1000);
    }});
}