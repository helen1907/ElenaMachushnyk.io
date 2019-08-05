jQuery(function($) {
  $(document).ready(function(){
  $('.bxslider').bxSlider({
    mode:'fade',
    speed:800,
    easing:'linear',
    touchEnabled:true
  });
  });

});


//
// function cycleBackgrounds() {
//     var index = 0;
//
//     $imageEls = $('.container .slide');
//
//     setInterval(function () {
//         index = index + 1 < $imageEls.length ? index + 1 : 0;
//
//         $imageEls.eq(index).addClass('show');
//
//         $imageEls.eq(index - 1).removeClass('show');
//     }, 2000);
// };
//
// $(function () {
//     cycleBackgrounds();
// });
