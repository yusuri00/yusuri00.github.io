
$('.slider').slick({
  infinite:true,
  slidesToShow: 3,
  dots:true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  pauseOnFocus: false,
  variableWidth: true,
  responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
