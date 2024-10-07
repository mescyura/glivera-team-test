document.addEventListener('DOMContentLoaded', () => {
	const header = document.getElementById('header');
	let lastScrollY = window.scrollY;

	function handleScroll() {
		if (window.scrollY > lastScrollY) {
			header.style.top = '-72.4px';
		} else {
			header.style.top = '0';
		}
		lastScrollY = window.scrollY;
	}

	function checkWindowSize() {
		if (window.innerWidth <= 1024) {
			window.addEventListener('scroll', handleScroll);
		} else {
			window.removeEventListener('scroll', handleScroll);
			header.style.top = '0';
		}
	}

	checkWindowSize();
	window.addEventListener('resize', checkWindowSize);
});
