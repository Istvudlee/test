let buttonMenu = document.querySelector('.menu_but');
let menu = document.querySelectorAll('.menu_ul, .mail, .work_hour');
buttonMenu.onclick = function () {
	for (i = 0; i < menu.length; i++) {
		menu[i].classList.toggle('mobmenu_show')
	}
}
let warp_questions = document.querySelector('.warp_questions');
let block_answer = document.querySelectorAll('.block_answer');
let blck_question = document.querySelectorAll('.blck_question');
warp_questions.onclick = function (e) {
	e.preventDefault();
	let target = e.target;
	let parventtarget = target.parentNode;
	if (target.tagName != 'A') return;
	for (i = 0; i < block_answer.length; i++) {
		if (parventtarget.parentNode.contains(block_answer[i])) {
			block_answer[i].classList.toggle('show_quest')
		}
	}
}
// Табы документы(Дать на проверку)  = переписать под "делегировагие событий"

let toogledoc = document.querySelector('.toogledoc');
let toogleTagA = toogledoc.querySelectorAll('a');
let divdoc = document.querySelectorAll('.contentwr');
toogledoc.onclick = function (e) {
	let target = e.target;
	if (target.classList === 'activetab') return;
	for (i = 0; i < toogledoc.children.length; i++) {
		if (toogleTagA[i].classList.contains("activetab")) {
			toogleTagA[i].classList.remove("activetab");
		}
	}
	target.classList.add('activetab');
	for (i = 0; i < divdoc.length; i++) {
		divdoc[i].classList.remove("show")
		if (target.dataset.number === divdoc[i].dataset.number) {
			divdoc[i].classList.add("show");
		}
	}
	return false;
}
let fullfon = document.querySelector('.fullfon');
let blockforma = document.querySelector('.blockforma');
let button_form = document.querySelectorAll('#button_head, #button_proc, #button');
for (i = 0; i < button_form.length; i++) {
	button_form[i].onclick = function (e) {
		e.preventDefault();
		blockforma.classList.remove('show-form');
		fullfon.classList.add('fullopen');
		blockforma.style.left = document.documentElement.clientWidth / 2 - blockforma.offsetWidth / 2 + 'px'
		blockforma.style.top = document.documentElement.clientHeight / 2 - blockforma.offsetHeight / 2 + 'px'
	}
}
//Black full Screen
fullfon.onclick = function () {
	fullfon.classList.remove('fullopen');
	blockforma.classList.add('show-form');
}
// // Comments
// let arrows = document.querySelector('.arrows');
// let slider = document.querySelectorAll('.slider');
// let wrapSlids = document.getElementById('wrap_slids')
// let count = 1;
// let witdth = slider[1].offsetWidth;
// let position = 0;
// arrows.onclick = function (e) {
// 	e.preventDefault();
// 	let target = e.target;
// 	if (target.tagName != 'A') return;
// 	if (target.classList == 'right') {
// 		position -= witdth;
// 		let rigthPosition = Math.max(position, -witdth * (slider.length - count));
// 		position = rigthPosition;
// 	}
// 	if (target.classList == 'left') {
// 		position += witdth;
// 		let rigthPosition = Math.min(0, position);
// 		position = rigthPosition;
// 	}
// 	wrap_slids.style.left = position + 'px';
// }
// // SWIPE TEST
// window.addEventListener('load', function () {
// 	for (i=0; i < slider.length; i++) {
// 	let slaidMob = document.querySelector('.slider');
// 	let start,
// 		  touchFinger,
// 			finish,
// 			summaSwipe;
// 	slider[i].addEventListener('touchstart', function (e) {
// 		touchFinger = e.changedTouches[0];
// 		start = touchFinger.clientX;

// 	});
// 	slider[i].addEventListener('touchend', function (e) {
// 		let touchFinger = e.changedTouches[0];
// 		finish = touchFinger.clientX;
// 		summaSwipe = start + finish;
// 		console.log(start);
// 		console.log(finish);
// 		console.log(summaSwipe);
// 		if (start > finish && summaSwipe > 300) {
// 			swipe('right');
// 		} else if (start < finish && summaSwipe > 300) {
// 			swipe('left');
// 		}
// 	});

// 	function swipe(direction) {
// 		switch (direction) {
// 			case 'right':
// 				position -= witdth;
// 				let leftPosition = Math.max(position, -witdth * (slider.length - count));
// 				position = leftPosition;
// 				break;
// 			case 'left':
// 				position += witdth;
// 				leftPositionTwo = Math.min(0, position);
// 				position = leftPositionTwo;
// 				break;
// 		}
// 		wrap_slids.style.left = position + 'px';
// 	}
//  }	
// });