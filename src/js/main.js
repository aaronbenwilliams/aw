'use strict';

// Get all expandables
var expandables = document.querySelectorAll('.js-expandable');

function expandChildren(e) {
	var target = e.target;
	// If it's expandable and isn't already expanded

	if (target.classList.contains('js-expandable') && !target.classList.contains('is-expanded')) {
		// inline the scrollheight
		target.style.height = target.scrollHeight + 'px';
		target.classList.add('is-expanded');
	} else if (target.classList.contains('is-expanded')) {
		// Otherwise, remove the inline style and the is-expanded class
		target.setAttribute('style', '');
		target.classList.remove('is-expanded');
	}
}

// Just adding click event bindings
Array.from(expandables).forEach(function (expandable) {
	expandable.addEventListener('click', expandChildren);
});

// Added by Niki Liu @nikiliu
function recalculateHeight(expandable) {
	// If an expandable is expanded, recalculate its height
	if (expandable.classList.contains('js-expandable') && expandable.classList.contains('is-expanded')) {
		expandable.style.height = expandable.scrollHeight + 'px';
	}
}

window.addEventListener('resize', function (e) {
	Array.from(expandables).forEach(function (expandable) {
		recalculateHeight(expandable);
	});
});

$('#toggle').click(function() {
	$(this).toggleClass('activated');
	$('#overlay').toggleClass('open');
});
