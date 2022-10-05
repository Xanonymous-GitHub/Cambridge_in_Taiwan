$(function () {
  $('#goTop').on("click", function (e) {
    $('html, body').animate({
      scrollTop: $('#wrapper').offset().top
    }, 750);
    e.preventDefault();
  });

  // Sidebar.
  $(".listtop").click(function () {
    $(".listss").slideToggle("fast");
    $(".xs2").toggle();
    $(".xs1").toggle();
  });
});
