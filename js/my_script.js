let buttonMenu = document.querySelector('.menu_but');
let menu = document.querySelectorAll('.menu_ul, .mail, .work_hour');
buttonMenu.onclick = function() {
  for(i = 0; i < menu.length; i++ ) { 
   menu[i].classList.toggle('mobmenu_show')
  }
}