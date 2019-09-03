$(document).ready(function(){
	$(".menu_ul, .mobmenu_show, .bl_map").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(".mapk, .license").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		let $mapk = document.querySelector('.mapk'),
				$license = document.querySelector('.license'),
				id,
				top;
    if ($mapk.contains(event.target)) {
				 id = '#map_block';
		} else if ($license.contains(event.target)) {
		  	 id = '#international_block';
	  }
	   top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});