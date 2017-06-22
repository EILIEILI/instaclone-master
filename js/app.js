$(document).ready(function(){

    // The document is loaded so we can work with it.

    var heartButton = $('.Heart'),
        cogIcon = $('.Cog'),
        overlay = $('.SettingsOverlay'),
        closeIcon = $('.SettingsOverlay i'),
        body = $('body'),
        cancelButton = $('#cancel'),
        ghost = $(".ghost");

    heartButton.click(function(){
        $(this).toggleClass('fa-heart-o')
        $(this).toggleClass('Heart-Red fa-heart')
    })

    cogIcon.click(function(){
        overlay.fadeIn(500);
        body.css('overflow', 'hidden');
    })

    closeIcon.click(function(){
        hideOverlay();
    })
    

    cancelButton.click(function(event){
        event.preventDefault();
        hideOverlay();
    })

    ghost.click(function(){
        hideOverlay()
    })

    function hideOverlay(){
        overlay.fadeOut(500);
        body.css('overflow', 'scroll');
        console.log(overlay.fadeOut)
    }
})