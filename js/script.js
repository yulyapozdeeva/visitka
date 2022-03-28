
let myImageSlider = new Swiper('.image-slider', {
	// Стрелки
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 2,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: false,

	// Отступ между слайдами
	spaceBetween: 114,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	// Брейк поинты(адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 2,
		},
		1182: {
			//spaceBetween: 0,
		},
		1334: {
			//spaceBetween: 40,
		},
		1483: {
			slidesPerView: 2,
		}
	},


	// Брейк поинты (адаптив)
	// Соотношение сторон
	// breakpoints: {
	// 	'@0.15': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.49': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.75': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.955': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.22': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.40': {
	// 		slidesPerView: 2,
	// 	}
	// },



	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});

let myImageSlider2 = new Swiper('.image-slider-2', {
	// Стрелки
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 2,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: false,

	// Отступ между слайдами
	spaceBetween: 114,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	// Брейк поинты(адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 2,
		},
		1182: {
			//spaceBetween: 0,
		},
		1334: {
			//spaceBetween: 40,
		},
		1483: {
			slidesPerView: 2,
		}
	},


	// Брейк поинты (адаптив)
	// Соотношение сторон
	// breakpoints: {
	// 	'@0.15': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.49': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.75': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.955': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.22': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.40': {
	// 		slidesPerView: 2,
	// 	}
	// },



	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});

let myImageSlider3 = new Swiper('.image-slider-3', {
	// Стрелки
	// Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// Включение/отключение
	// перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,

	// Переключение при клике на слайд
	slideToClickedSlide: false,

	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},

	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},

	// Автовысота
	autoHeight: false,

	// Количество слайдов для показа
	slidesPerView: 2,

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: false,

	// Отступ между слайдами
	spaceBetween: 114,

	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Активный слайд по центру
	centeredSlides: true,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
	freeMode: true,

	// Скорость
	speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
	effect: 'slide',

	// Брейк поинты(адаптив)
	// Ширина экрана
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		480: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		992: {
			slidesPerView: 2,
		},
		1182: {
			//spaceBetween: 0,
		},
		1334: {
			//spaceBetween: 40,
		},
		1483: {
			slidesPerView: 2,
		}
	},


	// Брейк поинты (адаптив)
	// Соотношение сторон
	// breakpoints: {
	// 	'@0.15': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.49': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.75': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@0.955': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.22': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.40': {
	// 		slidesPerView: 2,
	// 	}
	// },



	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
	},

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});

$(document).ready(function () {
	$(window).scroll(function () {
		/*если прокрутка больше 300 показ. кнопку*/
		if ($(this).scrollTop() > 700) {
			$('.arrow, .alert').fadeIn();
			/*если нет то скрываем кнопку*/
		} else {
			$('.arrow, .alert').fadeOut();
		}
	});
	/*при клике по кнопке переходим вверх стр.*/
	$('.arrow').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 700);
		return false;
	});
});

$('a[href*="#"]').on('click', function () {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 1400);
	return false;
});