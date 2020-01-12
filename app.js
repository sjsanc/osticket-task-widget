let pageTicket = $('#sample-ticket').text(); // grab page ticket val
// NEEDS TO BE REFACTORED BUT SORT OF GETS THE JOB DONE LOL
let grabTicket = () => {
  if ($('#grab-ticket-button').text() == 'Grab') {
    $('#grab-ticket-input').val(pageTicket); // set input as ticket val
    $('#grab-ticket-input').css('background-color', '#89CCFF');
    $('#grab-ticket-button').html('<em>Clear</em>').css({'background-color': 'var(--primary-grey)', 'color': '#5D5D5D'});


  } else if ($('#grab-ticket-button').html() == '<em>Clear</em>') {
    $('#grab-ticket-input').val(''); // reset input
    $('#grab-ticket-input').css('background-color', 'var(--primary-grey)');
    $('#grab-ticket-button').text('Grab').css({'background-color': 'var(--primary-blue)', 'color': 'white'});
  }
}

// Apply delete/complete function to existing tasks on load
$('.delete').on('click', function() {
  $(this).parents().eq(1).remove();

});
$('.complete').on('click', function() {
  $(this).parents().eq(1).remove();
  today++
  $('#tasksTodayCount').text(today);
  console.log("tickets completed today:" + today)
});


// Add an item
$('#submit-task').on('click', function() {

  // Get item values
  let content = $('#input-textarea').val();
  let ticket = $('#grab-ticket-input').val();


  // Error message HTML
  let errorContentEmpty = '<div id="error-message"><span>Woops! Text area cant be empty.</span></div>';
  let errorTicketInvalid = '<div id="error-message"><span>Oh dear! That ticket number looks weird.</span></div>';

  // Insert item html

  if (content == '') {
    $('#container').append(errorContentEmpty);
    setTimeout(function() {
      $('#error-message').fadeOut(300, function () {$(this).remove();});
    }, 2500);
  } else if (ticket.length < 5 || ticket == '' ) {
    $('#container').append(errorTicketInvalid);
    setTimeout(function() {
      $('#error-message').fadeOut(300, function() {$(this).remove();});
    }, 2500);
  } else {
    var count = $('#item-container').children('div').length + 1;

    var itemDiv = '<div class="item" id="item' + count + '"> <a href="#" class="ticketNo item-item">' + ticket + '</a> <p class="task-content">' + content + '</p> <p class="task-age item-item">now</p> <div class="btn-wrapper item-item"> <button class="btn-act delete"><i class="fas fa-times"></i> <button class="btn-act complete"><i class="fas fa-check"></i> </div> </div>';

    $('#item-container').append(itemDiv);
    console.log('Task successfully created with ID:' + count);
  };

  // Clear fields
  $('#input-textarea').val('');
  $('#grab-ticket-input').val('');

  // Reset ticket colour
  $('#grab-ticket-input').css('background-color', 'var(--primary-grey)');
  $('#grab-ticket-button').text('Grab').css({'background-color': 'var(--primary-blue)', 'color': 'white'});

  // Apply delete & complete class to item upon creation
  $('.delete').on('click', function() {
    $(this).parents().eq(1).remove();
  });
  $('.complete').on('click', function() {
    $(this).parents().eq(1).remove();
    today++
    $('#tasksTodayCount').text(today);
    console.log("tickets completed today:" + today)
  });
});


// STAT FUNCTIONALITY
$('.fa-chart-bar').data('set', 0); // init stat counter
$('#stat-panel').toggle(false); // make sure it's hidden

  // Open/Close stat panel
$('.fa-chart-bar').click('click', function() {
  if ($('.fa-chart-bar').data('set') == 0) {
    $('#stat-panel').toggle();
    $('.fa-chart-bar').data('set', 1);
    $('.fa-chart-bar').css({'background-color': 'var(--primary-grey)', 'color': 'var(--primary-orange)'});
  } else if ($('.fa-chart-bar').data('set') == 1) {
    $('#stat-panel').toggle();
    $('.fa-chart-bar').data('set', 0);
    $('.fa-chart-bar').css({'background-color': 'white', 'color': '#828282'});
  }
});

var today = $('#tasksTodayCount').text();
var week = $('#tasksWeekCount').text();
var all = $('#tasksAllCount').text();
