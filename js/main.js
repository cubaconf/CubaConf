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

  var keynoteTemplate = Handlebars.compile($("#keynoteTemplate").html());
  $('#keynotesContainer').html(keynoteTemplate({
    keynotes: keynotes
  }));
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
