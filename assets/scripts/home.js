$(document).ready(function() {
  //   $('#time-now').html('7.21pm');
  //Run Time

  setInterval(function(startTime) {
    $('#time-now').html(moment().format('h:mm'));
    $('#ampm').html(moment().format('a'));
    $('#current-date').html(moment().format('MMMM DD, YYYY'));
  }, 1000);
});

function openCity(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' active';
  document.getElementById;

  //Show the caret on the active tab
  //remove carets on all tabs
  var tabCaret = [];
  tabCaret = document.getElementsByClassName('fas');
  for (var i = 0; i < tabCaret.length; i++) {
    tabCaret[i].style.visibility = 'hidden';
  }

  var activeTab = tabName + 'Active';
  console.log(activeTab);
  var showCaret = document.getElementById(activeTab);
  console.log(showCaret);
  showCaret.style.visibility = 'visible';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

// Social Media share

function fbshare(e) {
  console.log('clicked facebook');
  e.preventDefault();
  var facebookWindow = window.open(
    'https://www.facebook.com/sharer/sharer.php?u=' + 'www.ipsafari.com',
    'facebook-popup',
    'height=350,width=600'
  );
  if (facebookWindow.focus) {
    facebookWindow.focus();
  }
  return false;
}

function linkedinshare(e) {
  e.preventDefault();
  var linkedinWindow = window.open(
    'https://linkedin.com/share?url=' + 'www.ipsafari.com',
    'twitter-popup',
    'height=350,width=600'
  );
  if (linkedinWindow.focus) {
    linkedinWindow.focus();
  }
  return false;
}

function twittershare(e) {
  e.preventDefault();
  var twitterWindow = window.open(
    'https://twitter.com/share?url=' + 'www.ipsafari.com',
    'twitter-popup',
    'height=350,width=600'
  );
  if (twitterWindow.focus) {
    twitterWindow.focus();
  }
  return false;
}

function redditshare(e) {
  e.preventDefault();
  var redditWindow = window.open(
    'https://www.reddit.com/login/',
    'reddit-popup',
    'height=350,width=600'
  );
  if (redditWindow.focus) {
    redditWindow.focus();
  }
  return false;
}

// Social Media click listeners

document.getElementById('facebook').addEventListener('click', fbshare);
document.getElementById('linkedin').addEventListener('click', linkedinshare);
document.getElementById('twitter').addEventListener('click', twittershare);
document.getElementById('reddit').addEventListener('click', redditshare);
