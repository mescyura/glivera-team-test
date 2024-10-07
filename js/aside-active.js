const asideItems = document.querySelectorAll('.sidebar__menu li');
const mobileMenuItems = document.querySelectorAll('.mobile-menu__menu li');

function setActiveItem(name) {
	// Remove active class
	asideItems.forEach(item => item.classList.remove('active'));
	mobileMenuItems.forEach(item => item.classList.remove('active'));

	// Add active class
	document
		.querySelector(`.sidebar__menu li[data-name="${name}"]`)
		.classList.add('active');
	document
		.querySelector(`.mobile-menu__menu li[data-name="${name}"]`)
		.classList.add('active');
}

// Add click event listeners to aside items
asideItems.forEach(item => {
	item.addEventListener('click', () => {
		const name = item.getAttribute('data-name');
		setActiveItem(name);
	});
});

// Add click event listeners to mobile menu items
mobileMenuItems.forEach(item => {
	item.addEventListener('click', () => {
		const name = item.getAttribute('data-name');
		setActiveItem(name);
	});
});
