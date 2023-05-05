function showContent(content) {
  // Get all tab links and content sections
  var tablinks = document.getElementsByClassName('tablinks');
  var sections = document.getElementsByClassName('content-section');

  // Remove the active class from all tab links and content sections
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
    sections[i].classList.remove('active');
  }

  // Add the active class to the selected tab link and content section
  document.getElementById(content + '-tab').classList.add('active');
  document.getElementById(content + '-section').classList.add('active');
}