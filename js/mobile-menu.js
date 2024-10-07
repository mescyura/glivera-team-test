const backdrop = document.querySelector('.backdrop');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelectorAll('.menu-btn-close');

const toggle = () => {
	backdrop.classList.toggle('is-hidden');
	mobileMenu.classList.toggle('is-open');
};
const disableScroll = () =>
	document.body.classList.toggle('is-scroll-disabled');

backdrop.addEventListener('click', function (event) {
	if (event.target === backdrop) {
		toggle();
	}
});

menuBtnOpen.addEventListener('click', toggle);

menuBtnClose.forEach(function (e) {
	e.addEventListener('click', toggle);
});

menuBtnOpen.addEventListener('click', disableScroll);

menuBtnClose.forEach(function (e) {
	e.addEventListener('click', disableScroll);
});
