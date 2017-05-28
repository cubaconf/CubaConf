$(function() {
  $.getJSON('content/submissions.json', function(data) {
    submissions = data;
    $.each(submissions, function(index, submission) {
      if (submission.location === 'Unknown') {
        submission.location = null;
      }
    });
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
  });
});
