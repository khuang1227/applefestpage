$(document).ready(function() {
  if ($(document).width() < 800) {
      $("#ham-button").removeClass("hidden");
      $("#nav-bar").addClass("hidden");
  } else {
      $("#ham-button").addClass("hidden");
      $("#nav-bar").removeClass("hidden");
  }
  $("#ham-button").click(function() {
    if ($("#nav-bar").hasClass("hidden")) {
      $("#nav-bar").removeClass("hidden");
    } else {
      $("#nav-bar").addClass("hidden");
    }
  });
});

$(window).resize(function() {
  if ($(document).width() < 800) {
      $("#ham-button").removeClass("hidden");
      // Referenced W3Schools to implement jQuery's "hasClass" method! https://www.w3schools.com/jquery/html_hasclass.asp
      if ($("#nav-bar").hasClass("hidden") === false) {
          $("#nav-bar").addClass("hidden");
      }
  } else {
      $("#ham-button").addClass("hidden");
      $("#nav-bar").removeClass("hidden");
  }
});
