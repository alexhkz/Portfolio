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
// 			modal.classList.add('active');
// 		});

// 		close.addEventListener('click', () => {
// 			modal.classList.remove('active');
// 		});

// 		modal.addEventListener('click', (e) => {
// 			if (e.target === '.menu.active') {
// 				document.querySelector('.menu.active').classList.remove('active');
// 				this.classList.remove('active');
// 			}
// 		});
// 	}

// 	const hamburger = document.querySelector('.hamburger'),
// 		menu = document.querySelector('.menu'),
// 		closeElem = document.querySelector('.menu__close');

// 	bindModal(hamburger, menu, closeElem);
// });