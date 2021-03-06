$(document).on('turbolinks:load', function () {
  activateChosen();

  $('#friend_ethnicity').change(function() {
    if ($(this).find('option:selected').text() == "Other") {
      $('.other_ethnicity_wrapper').show();
    } else {
      if ($('.other_ethnicity_wrapper').is(":visible")) {
        $('#friend_other_ethnicity').val('');
        $('.other_ethnicity_wrapper').hide();
      }
    }
  });

  $('#detention_case_status').change(function() {
    if ($(this).find('option:selected').text() == "Other") {
      $('.other_case_status_wrapper').show();
    } else {
      if ($('.other_case_status_wrapper').is(":visible")) {
        $('#detention_other_case_status').val('');
        $('.other_case_status_wrapper').hide();
      }
    }
  });

  $('#friend_no_a_number').change(function() {
    if ($(this).prop('checked')) {
      $('#friend_a_number').val('');
    }
  });

  $('#add_family_relationship_modal').on('shown.bs.modal', function(){
    $('#new_family_relationship')[0].reset();
  });

  $('.open_activity_modal').click(function() {
    $('#activity_modal').modal('show');
  });

  $('.open_detention_modal').click(function() {
    $('#detention_modal').modal('show');
  });

  $('.open_ankle_monitor_modal').click(function() {
    $('#ankle_monitor_modal').modal('show');
  });
});

function activateChosen() {
  var all_chosen_selects = $('.chzn-select');
  for (var i=0; i<all_chosen_selects.length;i++) {
    var chosen_select = all_chosen_selects[i];
    var attributes = {
      allow_single_deselect: true,
      no_results_text: 'No results matched',
    };
    if (chosen_select.id == 'filterrific_activity_type') {
      attributes['width'] = '33%'
    } else {
      attributes['width'] = '100%'
    }
    $(chosen_select).chosen(attributes);

    // remove duplicated chosen-containers
    if ($(chosen_select).next().next().hasClass('chosen-container')) {
      $(chosen_select).next().next().remove();
    }
  }
}


