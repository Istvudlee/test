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
warp_questions.onclick = function(e) {
  e.preventDefault();
  let target = e.target;
  let parventtarget = target.parentNode;
  if(target.tagName != 'A' ) return;
  for(i = 0; i < block_answer.length; i++) {
    if(parventtarget.parentNode.contains(block_answer[i])) {
      block_answer[i].classList.toggle('show_quest')
    }
  }
}
// Табы документы(Дать на проверку)  = переписать под "делегировагие событий"

let toogledoc = document.querySelector('.toogledoc');
let toogleTagA = toogledoc.querySelectorAll('a');
let divdoc = document.querySelectorAll('.contentwr');
toogledoc.onclick = function(e) {
	let target = e.target; 
	if(target.classList === 'activetab') return;
	for (i=0; i < toogledoc.children.length; i++) {
    if (toogleTagA[i].classList.contains("activetab")) {
			toogleTagA[i].classList.remove("activetab");
		}
	}
	target.classList.add('activetab');
  for(i = 0; i < divdoc.length; i++ ) {
		divdoc[i].classList.remove("show")
	 if(target.dataset.number === divdoc[i].dataset.number) {
		divdoc[i].classList.add("show");
	 }
	}
	return false;
}
let fullfon = document.querySelector('.fullfon');
let blockforma = document.querySelector('.blockforma');
let button_form = document.querySelectorAll('#button_head');
for (i = 0; i < button_form.length; i++) {
	button_form[i].onclick = function(e) {
		e.preventDefault();
		blockforma.classList.remove('show-form');
		fullfon.classList.add('fullopen');
		blockforma.style.left = document.documentElement.clientWidth/2 - blockforma.offsetWidth/2 +'px'
		blockforma.style.top = document.documentElement.clientHeight/2 - blockforma.offsetHeight/2 +'px'
	}
}
//Black full Screen
fullfon.onclick = function() {
	fullfon.classList.remove('fullopen');
	blockforma.classList.add('show-form');
	for (i = 0; i < img.length; i++) {
   if(img[i].classList.contains("bigimg")){
		img[i].classList.remove("bigimg")
	 }
	}
}
// Slider
// let arrows = document.querySelector('.arrows');
// let slider = document.querySelector('.slider');
// let wrap_slids = document.getElementById('wrap_slids')
// let count = 1;
// let witdth = slider.offsetWidth;
// let leftCoord = 0;
// let rightCoord = 0;
// arrows.onclick = function(e) {
// 	e.preventDefault();
// 	let target = e.target;
// 	if (target.tagName != 'A') return;
//   if (target.classList == 'right') {
// 	 alert(leftCoord);
// 	 let rigthPosition = Math.min(-wrap_slids.offsetWidth, -witdth * count);
// 	 alert(rigthPosition);
// 	 leftCoord += rigthPosition;
// 	 alert(leftCoord);
// 	}
// 	wrap_slids.style.left = leftCoord + 'px';
// }