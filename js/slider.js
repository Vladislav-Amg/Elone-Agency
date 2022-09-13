new Swiper('.portfolio__slider', {
	loop: true,
	loopedSlides: 4,
	slidesPerView: "auto",
	spaceBetween: -10,
	grabCursor: true,
	slideToClickedSlide: true,
	preloadImages: false,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	parallax: true,
	speed: 1000,

	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
	},

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	hashNavigation: {},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpdown: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		420: {
			slidesPerView: "auto",
		}
	}
});

new Swiper('.blog__row', {
	slidesPerView: 3,
	spaceBetween: 5,
	slideToClickedSlide: true,
	preloadImages: false,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	parallax: true,
	speed: 1000,

	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
	},

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	hashNavigation: {},

	breakpoints: {
		320: {
			slidesPerView: 1,
			loop: true,
			loopedSlides: 3,
		},
		420: {
			slidesPerView: "auto",
			loop: true,
			loopedSlides: 3,
		},
		768: {
			slidesPerView: 3,
			watchOverflow: true,
			loop: false,
			parallax: false,
		},
		1140: {
			spaceBetween: 30,
			parallax: false,
		}
	}
});

document.addEventListener('scroll', () => {
	if (window.pageYOffset > 40) document.querySelector('.header').classList.add('active');
	if (window.pageYOffset < 40) document.querySelector('.header').classList.remove('active');
});