$(document).ready(function() {
  $("#toc").tableOfContents();
  $('h2').append("  <span class='header_accent'><a href='#' class='toggle'>hide</a></span>");
  $('a.toggle').click(function() 
    {
      var section = $(this).parent().parent().next(".section");
      section.slideToggle(300);
      var text = $(this).text() == "show" ? "hide" : "show";
      $(this).text(text);
    });
  $("table").tablesorter(); 
});

