$(document).ready(function () {
  // check if user is using dark-mode
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    changeModePref();
  }

  if ($(this).scrollTop() < 20) {
    $("#modePrefBtn").show();
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() < 20) {
      $("#modePrefBtn").fadeIn();
    } else {
      $("#modePrefBtn").fadeOut();
    }
  });

  $("#modePrefBtn").click(function () {
    changeModePref();
  });
});

changeModePref = () => {
  // toggle image for mode preference button
  $("#light-mode").toggleClass("d-none");
  $("#dark-mode").toggleClass("d-none");

  // toggle dark-mode on body
  $("body").toggleClass("dark-mode");

  // toggle dark-mode on navbar and mode preference button
  $("#navBtn").toggleClass("btn-dark");
  $("#modePrefBtn").toggleClass("btn-dark");

  // toggle dark-mode for section header
  $(".wrap .about-desc .bold-text").toggleClass("bg-text-dark");
  $(".bg-text").toggleClass("bg-text-dark");

  // toggle dark-mode for interest icon-box
  $(".interests .icon-box").toggleClass("icon-box-dark");

  // toggle dark-mode for navbar
  $(".navbar").toggleClass("navbar-dark");
  $(".navbar").toggleClass("navbar-light");
};
