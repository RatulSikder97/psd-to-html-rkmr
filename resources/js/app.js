// dropdown toggler
$("#books, #book-menu").hover(function () {
  $("#book-menu").toggleClass("show");
});

$("#electronic, #electronic-menu").hover(function () {
  $("#electronic-menu").toggleClass("show");
});

$("#gift, #gift-menu").hover(function () {
  $("#gift-menu").toggleClass("show");
});

$("#corporate, #corporate-menu").hover(function () {
  $("#corporate-menu").toggleClass("show");
});

$("#other, #other-menu").hover(function () {
  $("#other-menu").toggleClass("show");
});

// rating setter
let starRating = $(".rating .fa");
let SetRatingStar = function () {
  return starRating.each(function () {
    if (
      parseInt(starRating.siblings("input.rating-value").val()) >=
      parseInt($(this).data("rating"))
    ) {
      return $(this).removeClass("fa-star-o").addClass("fa-star");
    } else {
      return $(this).removeClass("fa-star").addClass("fa-star-o");
    }
  });
};

starRating.on("click", function () {
  starRating.siblings("input.rating-value").val($(this).data("rating"));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function () {});
