$(function(){
	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}


	// Ленивая загрузка
	setTimeout(function(){
		observer = lozad('.lozad', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() +'px')


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	// Фокус при клике на название поля
	$('body').on('click', '.form .label', function() {
    	$(this).closest('.line').find('.input, textarea').focus()
	})


	// Моб. меню
	$('body').on('click', '.mob_header .mob_menu_link', function(e) {
    	e.preventDefault()

		$(this).addClass('active')
		$('body').addClass('lock')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
    })

	$('body').on('click', 'header .close, .overlay', function(e) {
    	e.preventDefault()

    	$('.mob_header .mob_menu_link').removeClass('active')
		$('body').removeClass('lock')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
    })
})



// Вспомогательные функции
function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}