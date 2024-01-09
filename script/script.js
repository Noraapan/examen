document.querySelector(".menu-icon").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.style.display = navbar.style.display === "block" ? "none" : "block";
});

// Visa knappen när användaren scrollar ner 100px från toppen
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    tillToppenBtn.style.display = "block";
  } else {
    tillToppenBtn.style.display = "none";
  }
};
// Scrolla till toppen när knappen klickas
window.scrollToTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
