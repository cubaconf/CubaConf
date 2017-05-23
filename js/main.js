$(function() {
  var count = 6;
  var left = $(window).width() / (count + 2);
  var submissions;

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
    submissions = data;

    var template = Handlebars.compile($('#submissionsTemplate').html());
    $('#submissionsContainer').html(template({
      submissions: submissions
    }));
    $('#submissionsContainer button').click(function() {
      var modalTemplate = Handlebars.compile($('#submissionModalTemplate').html());
      $('body').append(modalTemplate(submissions[$(this).data('id')]));
      $("#submissionModal").on('hidden.bs.modal', function () {
        $(this).remove();
      });
      $('#submissionModal [data-i18n]').localize();
      $('#submissionModal').modal();
    });
  })
});

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
