function showContent(content) {
	// Get all content sections
	var sections = document.getElementsByClassName('content-section');

	// Hide all content sections
	for (var i = 0; i < sections.length; i++) {
		sections[i].classList.remove('active');
	}

	// Show the selected content section
	document.getElementById(content + '-section').classList.add('active');
}
