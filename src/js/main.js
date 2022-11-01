import $ from 'jquery';

//webp
// import * as functions from "./modules/functions.js";

// functions.isWebp();

//mobile menu
$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.navbar-toggler');

	menuBtn.addEventListener('click', function () {
		body_lock.classList.toggle('lock');
	})
});

