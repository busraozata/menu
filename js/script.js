const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 10,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 12,
      spaceBetween: 30,
    },
  },
});
$(document).ready(function () {

  $(function () {
    $('#startDate').datepicker({
      format: 'dd/mm/yyyy'
    });
    $('#datetimepicker3').datetimepicker({
      format: 'LT'
    });
    $('#datetimepicker3').datetimepicker({
      format: 'LT'
    });
  });
});
$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});