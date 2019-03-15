$(function() {
  $.getJSON('content/sponsors.json', function(sponsors) {
    var template = Handlebars.compile($('#sponsorsTemplate').html());
    // $('#platinumSponsorsContainer').replaceWith(template(sponsors.platinum));
    // $('#goldSponsorsContainer').replaceWith(template(sponsors.gold));
    // $('#silverSponsorsContainer').replaceWith(template(sponsors.silver));
    // $('#bronzeSponsorsContainer').replaceWith(template(sponsors.bronze));
    $('#supporterSponsorsContainer').replaceWith(template(sponsors.supporter));
  });
});
