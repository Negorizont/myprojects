function showMenu() {
	let nav = document.querySelector('nav');
	let buttonOpen = nav.querySelector('.open');
	let buttonClose = nav.querySelector('.close');
	let menu = nav.querySelector('.nav-bar');

	buttonOpen.addEventListener('click', function () {
		menu.classList.remove('close');
		menu.classList.add('open');
	});

	buttonClose.addEventListener('click', function () {
		menu.classList.remove('open');
		menu.classList.add('close');
	});
}
showMenu();