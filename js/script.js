$(document).ready(function() {
  $("#toc").tableOfContents(
    $("#content"),
    {
      startLevel: 2,
      depth: 3
    });
    
  $('.big_table').tableFilter();
  
  $('.data_table').dataTable( {
    "bPaginate": false,
    "bSort": false
  });
  $('.basic_table').dataTable( {
    "bPaginate": false,
    "bLengthChange": false,
    "bFilter": false,
    "bSort": false,
    "bInfo": false
  });
  $('#content h2').append("  <span class='header_accent'><a href='#' class='toggle'>hide</a></span>");
  $('.section_toggle').append("  <span class='header_accent'><a href='#' class='toggle'>show</a></span>");
  $('a.toggle').click(function() 
    {
      var section = $(this).parent().parent().next(".section");
      section.slideToggle(300);
      var text = $(this).text() == "show" ? "hide" : "show";
      $(this).text(text);
      return false;
    });
});

