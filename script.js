$(document).ready(function(){
    $('.secondary-button2').click(function(){
        $(this).find('.faq_text').fadeToggle(200);
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

$(document).ready(function() {
    function checkLazyLoading() {
        // check elements that are still hidden
        $('.lazyload').each( function(i){
            // middle of object and current viewport
            var
                middle = $(this).offset().top + ($(this).outerHeight() / 4),
                top = $(window).scrollTop(),
                bottom = top + $(window).height()
            ;

            // if the object is half visibile, show it
            if (top < middle && middle < bottom) {
                $(this)
                    // remove class, since we're already loading this element
                    .removeClass('lazyload')
                    // animate to visibile
                    .animate({'opacity':'1'}, 500)
                ;
            }
        }); 
    }

    // @see http://ejohn.org/blog/learning-from-twitter/
    var scrollHappened = false;
    $(window).scroll(function() {
        scrollHappened = true;
    });
    setInterval(function() {
        if (scrollHappened) {
            scrollHappened = false;
            checkLazyLoading();
        }
    });
});