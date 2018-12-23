'use strict'

$(document).ready(function () {

	$('.js-tab-trigger').click(function () {
		var id = $(this).attr('data-tab'); // присваиваем в id значение дата-атрибута залоговков ТАБов
		content = $('.js-tab-content[data-tab="' + id + '"]');

		$('.js-tab-trigger.active').removeClass('active'); //убираем класс Active у активной вкладки
		$(this).addClass('active'); //добавляем класс active только у таба, по которому кликнули - this

		$('.js-tab-content.active').removeClass('active'); //убираем класс Active у всех content
		content.addClass('active'); //добавляем класс active только у контента, по табу которому кликнули -- content
	});

	// -------------------------------------Подключение и активация Owl Carousel-------------------------------------------
	$('.slider-people').owlCarousel({
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1,
				nav: true
			},
			1000: {
				items: 2,
				nav: true,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
			}
		}
	});
	
	$('.slider-companies').owlCarousel({
		dots: true,
		responsive: {
			0: {
				items: 1,
				dots: true
			},
			600: {
				items: 3,
				dots: true
			},
			1000: {
				items: 4,
				dots: true
			}
		}
	});

});