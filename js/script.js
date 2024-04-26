$('.menu_toggle').on('click', function(){
  $('.nav_menu').css('left', '0');
});

$('.nv_cross').on('click', function(){
  $('.nav_menu').css('left', '-100%');
});

// mobile_menu
$('#mbtn1').on('click', function(){
  $('.mobile_nav_item').css('display', 'block');
  $('.mobile_nav_item2').css('display', 'none');
  $('#mbtn1').css('borderBottom', '3px solid #f14242');
  $('#mbtn2').css('borderBottom', '3px solid #ddd');
});
$('#mbtn2').on('click', function(){
  $('.mobile_nav_item2').css('display', 'block');
  $('.mobile_nav_item').css('display', 'none');
  $('#mbtn2').css('borderBottom', '3px solid #f14242');
  $('#mbtn1').css('borderBottom', '3px solid #ddd');
});



// banner slider
  $('.owl-carousel').owlCarousel({
    smartSpeed: 600,
    autoplay: true,
    margin: 20,
    items: 1,
    loop: true,
    autoplayHoverPause: true,
    autoplaySpeed: 500,
    nav: true,
  });


  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });


    // ========Brand Slider==========//
    $('.brand_slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      dots:false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
      ]
    });
    
  
// ========Hot Deal =====//

  $('.hot_deal_slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:false,
    // rows: 2,
    // slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint:1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
   
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  // f_select-js
$('.on_btn1').on('click', function(){
  $('.f_a_btn1').fadeToggle(300);
});

$('.on_btn2').on('click', function(){
  $('.f_a_btn2').fadeToggle(300);
});

$('.on_btn3').on('click', function(){
  $('.f_a_btn3').fadeToggle(300);
});

$('.on_btn4').on('click', function(){
  $('.f_a_btn4').fadeToggle(300);
});

$('.on_btn5').on('click', function(){
  $('.f_a_btn5').fadeToggle(300);
});



// increment decremnet option

// $(document).ready(function() {
//   const minus = $('.quantity__minus');
//   const plus = $('.quantity__plus');
//   const input = $('.quantity__input');
//   minus.click(function(e) {
//     e.preventDefault();
//     var value = input.val();
//     if (value > 1) {
//       value--;
//     }
//     input.val(value);
//   });
  
//   plus.click(function(e) {
//     e.preventDefault();
//     var value = input.val();
//     value++;
//     input.val(value);
//   })
// });

$(document).ready(function() {
  $('.quantity').each(function() {
    const container = $(this);
    const minus = container.find('.quantity__minus');
    const plus = container.find('.quantity__plus');
    const input = container.find('.quantity__input');

    minus.click(function(e) {
      e.preventDefault();
      var value = parseInt(input.val());
      if (value > 1) {
        value--;
      }
      input.val(value);
    });

    plus.click(function(e) {
      e.preventDefault();
      var value = parseInt(input.val());
      value++;
      input.val(value);
    });
  });
});
