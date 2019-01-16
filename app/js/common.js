"use strict";

$(document).ready(function () {
	$(".js-tab-trigger").click(function () {
		var id = $(this).attr("data-tab"); // присваиваем в id значение дата-атрибута залоговков ТАБов
		content = $('.js-tab-content[data-tab="' + id + '"]');

		$(".js-tab-trigger.active").removeClass("active"); //убираем класс Active у активной вкладки
		$(this).addClass("active"); //добавляем класс active только у таба, по которому кликнули - this

		$(".js-tab-content.active").removeClass("active"); //убираем класс Active у всех content
		content.addClass("active"); //добавляем класс active только у контента, по табу которому кликнули -- content
	});

	// -------------------------------------Карусель 1-------------------------------------------
	$(".slider-people").owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			1200: {
				items: 2,
				nav: true
			},
			1400: {
				items: 2,
				nav: true
			}
		}
	});

	// -------------------------------------Карусель 2-------------------------------------------
	$(".slider-companies").owlCarousel({
		loop: true,
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