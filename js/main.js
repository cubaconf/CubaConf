$(function() {
  var count = 6;
  var left = $(window).width() / (count + 2);

  for (var i = 1; i <= count; i++) {
    var cloud = $('<div>');
    cloud.addClass('cloud');
    cloud.width(getRandom(10, 20) + '%');
    cloud.height('200px');
    cloud.offset({ top: 10 * getRandom(1, 27), left: left * i });

    cloud.appendTo($('.sky'));
  }

  $.getJSON('content/keynotes.json', function(data) {
    var template = Handlebars.compile($('#keynotesTemplate').html());
    $('#keynotesContainer').html(template({
      keynotes: data
    }));
  })

  $.getJSON('content/submissions.json', function(data) {
    var template = Handlebars.compile($('#submissionsTemplate').html());
    $('#submissionsContainer').html(template({
      submissions: data
    }));
    $('#submissionsContainer [data-toggle="popover"]').popover();
    $('#submissionsContainer [data-i18n]').localize();
  })
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Handlebars.registerHelper('truncate', function(string) {
  if (string.length > 500) {
    return string.substring(0, 500) + '...';
  }
  return string;
});
