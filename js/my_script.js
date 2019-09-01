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