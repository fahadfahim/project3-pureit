
$(document).ready(function(){
    $('.bars').click(function(){
        console.log('clicked')
        $('.sec-nav-wrapper .links').toggleClass('collapse');
    })
})