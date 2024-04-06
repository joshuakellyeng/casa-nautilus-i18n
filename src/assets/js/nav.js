// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener('scroll', (e) => {
	const scroll = document.documentElement.scrollTop;
	if (scroll > 50) {
		document.querySelector('body').classList.add('scroll');
		document.querySelector('header').classList.add('header-scrolled');
	} else {
		document.querySelector('body').classList.remove('scroll');
		document.querySelector('header').classList.remove('header-scrolled');
	}
});

// mobile nav toggle code
const dropDowns = Array.from(
	document.querySelectorAll('#cs-navigation .cs-dropdown')
);
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}

// footer modal code
// open modal by id
function openModal(id) {
	document.getElementById(id).classList.add('open');
	document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
	document.querySelector('.jw-modal.open').classList.remove('open');
	document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function () {
	// close modals on background click
	document.addEventListener('click', (event) => {
		if (event.target.classList.contains('jw-modal')) {
			closeModal();
		}
	});
});
