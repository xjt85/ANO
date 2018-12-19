$(function() {

	$('.js-tab-trigger').click(function () { 
		var id = $(this).attr('data-tab'); // присваиваем в id значение дата-атрибута залоговков ТАБов
		content = $('.js-tab-content[data-tab="' + id + '"]');
		
		$('.js-tab-trigger.active').removeClass('active'); //убираем класс Active у активной вкладки
		$(this).addClass('active'); //добавляем класс active только у таба, по которому кликнули - this
		
		$('.js-tab-content.active').removeClass('active'); //убираем класс Active у всех content
		content.addClass('active'); //добавляем класс active только у контента, по табу которому кликнули -- content

		
	});

});
