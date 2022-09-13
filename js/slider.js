new Swiper('.portfolio__slider', {
	loop: true,
	loopedSlides: 4,
	slidesPerView: "auto",
	spaceBetween: -10,
	grabCursor: true,
	slideToClickedSlide: true,
	speed: 1000,
	preloadImages: false,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	parallax: true,

	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
	},

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	hashNavigation: {
		watchState: true,
	},

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
	speed: 1000,
	preloadImages: false,
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
	parallax: true,

	lazy: {
		loadOnTransitionStart: true,
		loadPrevNext: true,
	},

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},

	hashNavigation: {
		watchState: true,
	},

	breakpoints: {
		320: {
			spaceBetween: 0,
			slidesPerView: 1,
			watchOverflow: false,
			loop: true,
			loopedSlides: 3,
		},
		420: {
			slidesPerView: "auto",
		},
		768: {
			slidesPerView: 3,
			watchOverflow: true,
			loop: false,
			loopedSlides: 0,
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
})