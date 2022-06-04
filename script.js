$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  $(".zoom-me img").css({
    width: 100 + scroll / 5 + "%",
    top: -(scroll / 10) + "%",
    //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
    "-webkit-filter": "blur(" + scroll / 200 + "px)",
    filter: "blur(" + scroll / 200 + "px)",
  });
});


$(".card-trigger").on("click", function (e) {
  e.preventDefault();
  $(this).closest(".card").addClass("card--flipped");
});

$(".card-close").on("click", function () {
  $(this).closest(".card").removeClass("card--flipped");
});

const collapseElementList = document.querySelectorAll(".collapse");
const collapseList = [...collapseElementList].map(
  (collapseEl) => new bootstrap.Collapse(collapseEl)
);
