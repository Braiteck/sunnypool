$(function () {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000
	})


	// Клиенты
	$('.clients .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		margin: 20,
		responsive: {
			0: {
				items: 2
			},
			375: {
				items: 3
			},
			768: {
				items: 4
			},
			1024: {
				items: 5
			},
			1286: {
				items: 6
			}
		}
	})


	// Страница проекта
	$('.project_info .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 750
	})


	// Страница проекта
	$('.slider_in_text .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500
	})


	// Отзывы
	$('.reviews .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: true,
		smartSpeed: 500,
		responsive: {
			0: {
				margin: 20,
				items: 1
			},
			768: {
				margin: 24,
				items: 2
			},
			1024: {
				margin: 40,
				items: 2
			},
			1280: {
				margin: 96,
				items: 2
			}
		}
	})


	// Моб. версия
	if ($(window).width() < 360) {
		$('meta[name=viewport]').attr('content', 'width=360')
	} else {
		$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
	}
})



$(window).load(function () {
	// Шапка
	headerHeight = $('header').innerHeight()

	$('header').wrap('<div class="header_wrap" style="height: ' + headerHeight + 'px"></div>')
})



$(window).resize(function () {
	// Шапка
	setTimeout(function () {
		headerHeight = $('header').innerHeight()

		$('.header_wrap').height('auto')

		$('header').wrap('<div class="header_wrap" style="height: ' + headerHeight + 'px"></div>')
	}, 100)

	if ($(window).scrollTop() > headerHeight) {
		$('header').addClass('fixed')
	} else {
		$('header').removeClass('fixed')
	}
})



$(window).scroll(function () {
	// Шапка
	if ($(window).scrollTop() > headerHeight) {
		$('header').addClass('fixed')
	} else {
		$('header').removeClass('fixed')
	}
})