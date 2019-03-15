$(function() {
  $.getJSON('content/keynotes.json', function(data) {
    var template = Handlebars.compile($('#keynotesTemplate').html());
    $('#keynotesContainer').html(template({
      keynotes: data
    }));
  });
});
