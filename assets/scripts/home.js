$(document).ready(function() {
  //   $('#time-now').html('7.21pm');
  //Run Time

  setInterval(function(startTime) {
    $('#time-now').html(moment().format('h:mm'));
    $('#ampm').html(moment().format('a'));
    $('#current-date').html(moment().format('MMMM DD, YYYY'));
  }, 1000);
});
