const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});
// "use strict";

// window.addEventListener('DOMContentLoaded', () => {
// 	function bindModal(trigger, modal, close) {
// 		trigger.addEventListener('click', (e) => {
// 			if (e.target) {
// 				e.preventDefault();
// 			}
// 			// modal.style.display = 'block';
// 			// document.body.style.overflow = 'hidden';
// 			menu.classList.add('active');
// 		});

// 		close.addEventListener('click', () => {
// 			// modal.style.display = 'none';
// 			// document.body.style.overflow = '';
// 			menu.classList.remove('active');
// 		});

// 		modal.addEventListener('click', (e) => {
// 			if (e.target !== '.menu.active') {
// 				// modal.style.display = 'none';
// 				// document.body.style.overflow = '';
// 				menu.classList.remove('active');
// 			}
// 		});
// 	}

// 	const hamburger = document.querySelector('.hamburger'),
// 		menu = document.querySelector('.menu'),
// 		closeElem = document.querySelector('.menu__close');

// 	bindModal(hamburger, menu, closeElem);
// });