document.addEventListener('DOMContentLoaded', function () {
	const navList = document.querySelector('.content-section__pagination-list');

	navList.addEventListener('click', function (event) {
		const clickedItem = event.target.closest(
			'li.content-section__pagination-list-item'
		);

		if (clickedItem) {
			const allItems = document.querySelectorAll(
				'.content-section__pagination-list-item'
			);
			allItems.forEach(item => item.classList.remove('active'));

			clickedItem.classList.add('active');
		}
	});
});
