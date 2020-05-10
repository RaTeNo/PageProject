$(function() {
	// Проверка браузера
	if (!supportsCssVars()) {
		$('body').addClass('lock')
		$('.supports_error').addClass('show')
	}


	
	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll() + 'px')


	
	// Fancybox
	$.fancybox.defaults.hash             = false
	$.fancybox.defaults.backFocus        = false
	$.fancybox.defaults.autoFocus        = false
	$.fancybox.defaults.animationEffect  = 'zoom'
	$.fancybox.defaults.transitionEffect = 'slide'
	$.fancybox.defaults.speed            = 500
	$.fancybox.defaults.gutter           = 40
	$.fancybox.defaults.i18n             = {
		'en': {
			CLOSE       : "Закрыть",
			NEXT        : "Следующий",
			PREV        : "Предыдущий",
			ERROR       : "Запрошенный контент не может быть загружен.<br /> Пожалуйста, повторите попытку позже.",
			PLAY_START  : "Запустить слайдшоу",
			PLAY_STOP   : "Остановить слайдшоу",
			FULL_SCREEN : "На весь экран",
			THUMBS      : "Миниатюры",
			DOWNLOAD    : "Скачать",
			SHARE       : "Поделиться",
			ZOOM        : "Увеличить"
		}
	}

	// Увеличение картинки
	$('.fancy_img').fancybox({
		mobile : {
			clickSlide : "close"
		}
	})


	// Моб. версия
	if ($(window).width() < 360) {
		$('meta[name=viewport]').attr('content', 'width=360px, user-scalable=no')
	} else {
		$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
	}
	
})



// Вспомогательные функции
function setHeight(className) {
	let maxheight = 0

	className.each(function() {
		let elHeight = $(this).outerHeight()

		if (elHeight > maxheight) {
			maxheight = elHeight
		}
	})

	className.outerHeight(maxheight)
}


function is_touch_device() {
	return !!('ontouchstart' in window)
}


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