$(document).ready(function () {
  $(".our-partners").owlCarousel({
          margin:30,
          loop:true,
          autoWidth:true,
          items:3,
          nav:true
        });
  $(".sbest-offer").owlCarousel({
          margin:10,
          center: true,
          loop:true,
         autoWidth:true,
          items:3,
          nav:true
        });
 
  $('.question-modal').is(function() {
      $(this).fancybox({
        padding: 0

      });
    });
  $(".star").hover(function(){
    $(this).prevAll().andSelf().addClass('star-purple');
    $(this).nextAll().removeClass('star-purple'); 
  })


$(".best-offer").owlCarousel({
  margin:25,
  loop:true,
  autoWidth:true,
  items:4,
  nav:true
});

$('.quick-view').is(function() {
      $(this).fancybox({
        padding: 0

      });
    });


$(".step").click(function(){

  $(".step").removeClass("active");
  $(this).addClass("active");
 
  var name = $(this).index();

  $(".selection-container ul").slideUp();
  $(".selection-container ul").eq(name).slideDown();
  $(".selection-step").eq(name).prevAll(".selection-step").addClass("active-change");
  $(".selection-step").eq(name).nextAll(".selection-step").andSelf().removeClass("active-change");

  return false;

})
  



});



