//   $(document).ready(function(){
    //       $('[data-toggle="tooltip"]').tooltip();
    //   });
        
//*****one way to achieve the effect of pause and play*******
// $(document).ready(function(){
//     // $("#mycarousel").carousel({interval: 100});
//     $("#mycarousel").carousel( { interval: 1000 } );
//     $('#carousel-pause').click(function(){
//         $('#mycarousel').carousel('pause');
//     });
//     $('#carousel-play').click(function(){
//         $('#mycarousel').carousel('cycle');
//     });
// })

//***A simpler way to achieve the same effect
$(function() {
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function() {
        $("#carouselButton span").toggleClass("fa-pause fa-play");
        $("#carouselButton span").hasClass("fa-pause") ? $("#mycarousel").carousel('cycle') : $("#mycarousel").carousel('pause');
    });
});

// toggle modal using jquery instead of data-* attribute
// $(function(){
//     $("#loginModalToggle").click(function(){
//         $("#loginModal").modal('toggle');
//     });

//     $("#reserveModalToggle").click(function(){
//         $("#reserveModal").modal('toggle');
//     });
// });

