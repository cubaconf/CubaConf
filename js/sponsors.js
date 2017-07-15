$(function() {
  $.getJSON('content/sponsors.json', function(sponsors) {
    var template = Handlebars.compile($('#sponsorsTemplate').html());
    $('#sponsorsContainer').replaceWith(template(sponsors));
  });
});
