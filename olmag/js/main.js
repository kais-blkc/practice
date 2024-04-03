/* ========== MODAL LOGIC ========== */
let btnOpenModal = document.querySelectorAll("*[data-modal-open]");
const btnCloseModal = document.querySelectorAll("*[data-modal-close]");
const btnBlockModal = document.querySelectorAll("*[data-modal-block]");
const modals = document.querySelectorAll(".modal-wrapper");

btnOpenModal.forEach((btn) => {
	btn.addEventListener("click", toggleModalClass);
});
btnCloseModal.forEach((btn) => {
	btn.addEventListener("click", toggleModalClass);
});

modals.forEach((modal) => {
	modal.addEventListener("click", (e) => {
		if (e.target.className.includes("modal-wrapper")) {
			modal.classList.remove("active");
			document.body.classList.remove("scroll-off");
		}
	});
});

function toggleModalClass() {
	btnBlockModal.forEach((block) => {
		if (
			this.dataset.modalOpen === block.dataset.modalBlock ||
			this.dataset.modalClose === block.dataset.modalBlock
		) {
			block.classList.toggle("active");
			this.classList.toggle("active");

			// If state active hide body scroll
			if (block.className.includes("active") && block.className.includes("modal")) {
				document.body.classList.add("scroll-off");
			} else {
				document.body.classList.remove("scroll-off");
			}
		}
	});
}

/* TABS */
new Tabs({
	titleContainer: ".product-chars .chars__titles",
	title: ".product-chars .chars__title",
	content: ".product-chars .chars__content",
});

new Tabs({
	titleContainer: ".product-media .pm__titles",
	title: ".product-media .pm__title",
	content: ".product-media .pm__content",
});

new Tabs({
	titleContainer: ".works-list .wl__cats",
	title: ".works-list .wl__cats-item",
	content: ".works-list .wl__content",
});

/* FANCYBOX */
Fancybox.bind("[data-fancybox]", {});

/* SLIDERS */
const MainHeroSlider = new Swiper(".mh__slider", {
	slidesPerView: "auto",
	centeredSlides: true,
	// loop: true,
	effect: "coverflow",
	spaceBetween: 20,
	navigation: {
		nextEl: ".mh__slider .swiper-button-next",
		prevEl: ".mh__slider .swiper-button-prev",
	},
	pagination: {
		el: ".mh__slider .swiper-pagination",
	},
});

const ServicesSlider = new Swiper(".services__slider", {
	spaceBetween: 20,
	navigation: {
		nextEl: ".services__slider .swiper-button-next",
		prevEl: ".services__slider .swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: "auto",
		},
		1000: {
			slidesPerView: 4,
		},
	},
});

const blogSlider = new Swiper(".blog__slider", {
	slidesPerView: "auto",
	spaceBetween: 20,
	navigation: {
		nextEl: ".blog__slider .swiper-button-next",
		prevEl: ".blog__slider .swiper-button-prev",
	},
});

const workListSlider = new Swiper(".wl__slider", {
	slidesPerView: "auto",
	spaceBetween: 50,
	navigation: {
		nextEl: ".wl__slider .swiper-button-next",
		prevEl: ".wl__slider .swiper-button-prev",
	},
	pagination: {
		el: ".wl__slider .swiper-pagination",
	},
});

const workReviewsSlider = new Swiper(".wr__slider", {
	slidesPerView: 1,
	spaceBetween: 50,
	navigation: {
		nextEl: ".wr__slider .swiper-button-next",
		prevEl: ".wr__slider .swiper-button-prev",
	},
});

const wsContentSlider = new Swiper(".wsc__imgs-slider", {
	slidesPerView: 1,
	spaceBetween: 50,
	navigation: {
		nextEl: ".wsc__imgs-slider .swiper-button-next",
		prevEl: ".wsc__imgs-slider .swiper-button-prev",
	},
	pagination: {
		el: ".wsc__imgs-slider .swiper-pagination",
	},
});

const wseSlider = new Swiper(".wse__slider", {
	slidesPerView: "auto",
	navigation: {
		nextEl: ".wse__slider .swiper-button-next",
		prevEl: ".wse__slider .swiper-button-prev",
	},
	breakpoints: {
		320: {
			spaceBetween: 15,
		},
		767: {
			spaceBetween: 44,
		},
	},
});

const wsCertificatesSlider = new Swiper(".ws-certificates__slider", {
	slidesPerView: "auto",
	spaceBetween: 50,
	navigation: {
		nextEl: ".ws-certificates__slider .swiper-button-next",
		prevEl: ".ws-certificates__slider .swiper-button-prev",
	},
});

const aboutHeroSlider = new Swiper(".ah__slider", {
	slidesPerView: 1,
	spaceBetween: 50,
	navigation: {
		nextEl: ".ah__slider .swiper-button-next",
		prevEl: ".ah__slider .swiper-button-prev",
	},
});

const aboutVideosSlider = new Swiper(".ab__videos-slider", {
	slidesPerView: 1,
	spaceBetween: 50,
	navigation: {
		nextEl: ".ab__videos-control .swiper-button-next",
		prevEl: ".ab__videos-control .swiper-button-prev",
	},
});

const aboutCertificatesSlider = new Swiper(".ac__slider", {
	spaceBetween: 50,
	navigation: {
		nextEl: ".ac__slider .swiper-button-next",
		prevEl: ".ac__slider .swiper-button-prev",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 4,
		},
	},
});

const productHeroSmallSlider = new Swiper(".ph__imgs-small-slider", {
	slidesPerView: 4,
	spaceBetween: 20,
	direction: "vertical",
	watchSlidesProgress: true,
	navigation: {
		nextEl: ".ph__imgs-big-slider .swiper-button-next",
		prevEl: ".ph__imgs-big-slider .swiper-button-prev",
	},
});

const productHeroBigSlider = new Swiper(".ph__imgs-big-slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: ".ph__imgs-big-slider .swiper-button-next",
		prevEl: ".ph__imgs-big-slider .swiper-button-prev",
	},
	pagination: {
		el: ".ph__imgs-big-slider .swiper-pagination",
	},
	thumbs: {
		swiper: productHeroSmallSlider,
	},
});

const productImgsSlider = new Swiper(".pm__imgs-slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
	navigation: {
		nextEl: ".pm__imgs-slider .swiper-button-next",
		prevEl: ".pm__imgs-slider .swiper-button-prev",
	},
});

const productVideoSlider = new Swiper(".pm__video-slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
	navigation: {
		nextEl: ".pm__video-slider .swiper-button-next",
		prevEl: ".pm__video-slider .swiper-button-prev",
	},
});

const quizSlider = new Swiper(".quiz__slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	// effect: 'fade',
	autoHeight: true,
	navigation: {
		nextEl: ".quiz__slider .quiz__nav .swiper-button-next",
		prevEl: ".quiz__slider .quiz__nav .swiper-button-prev",
	},
});
const quizResetBtn = document.querySelector(".quiz-reset-btn");
quizResetBtn?.addEventListener("click", () => {
	quizSlider.slideTo(0);
});

const quizWseSlider = new Swiper(".quiz-wse__slider", {
	spaceBetween: 20,
	autoHeight: true,
	navigation: {
		nextEl: ".quiz-wse__slider .swiper-button-next",
		prevEl: ".quiz-wse__slider .swiper-button-prev",
	},
	pagination: {
		el: ".quiz-wse__slider .swiper-pagination",
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
	},
});

const quizMainStart = document.querySelector("#quiz__main-start");
quizMainStart?.addEventListener("click", () => {
	quizSlider.slideNext();
});

const quizInputRangeBlocks = document.querySelectorAll(".quiz__item-range-block");
quizInputRangeBlocks?.forEach((block) => {
	const inputNum = block.querySelector(".quiz__item-input-num input");
	const inputRange = block.querySelector(".quiz__item-range input");

	inputNum?.addEventListener("change", () => {
		const rangeProgressWidth =
			inputNum.value < 10 ? inputNum.value * 10 + 10 + "%" : inputNum.value * 10 + "%";

		inputRange.value = inputNum.value;
		inputRange.style.setProperty("--range-progress", rangeProgressWidth);
	});

	inputRange?.addEventListener("input", changeInputRange);
	inputRange?.addEventListener("change", changeInputRange);

	function changeInputRange() {
		const rangeProgressWidth =
			inputNum.value < 10 ? inputNum.value * 10 + 10 + "%" : inputNum.value * 10 + "%";

		inputNum.value = inputRange.value;
		inputRange.style.setProperty("--range-progress", rangeProgressWidth);
	}

	console.log(inputNum, inputRange);
});

/* Close catalog btn header */
const modalCatalogWrapper = document.querySelector('[data-modal-block="modal-catalog"]');
const modalCatalogBurger = document.querySelectorAll('[data-modal-open="modal-catalog"]');

window.addEventListener("scroll", (e) => {
	modalCatalogWrapper.classList.remove("active");
	modalCatalogBurger.forEach((item) => item.classList.remove("active"));
});

modalCatalogWrapper.addEventListener("click", (e) => {
	if (e.target.className.includes("modal-wrapper")) {
		modalCatalogBurger.forEach((item) => item.classList.remove("active"));
	}
});

// const demo = $("#demo");
// demo.carousel3d();
(function ($) {
	$("#main-hero").carousel3d({
		with: 556,
		perspective: 9500,
	});

	const indicatorLi = $(".carousel3d-indicator li");
	const btnPrev = $(".js-carousel3d-prev");
	const btnNext = $(".js-carousel3d-next");
	const carouselItems = $(".page.carousel3d-list");
	$(carouselItems[0]).addClass("active");

	btnPrev.on("click", curSlide);
	btnNext.on("click", curSlide);

	function curSlide() {
		indicatorLi.each((index, item) => {
			if ($(item).hasClass("active")) {
				$(carouselItems[index]).addClass("active");
			} else {
				$(carouselItems[index]).removeClass("active");
			}
		});
	}
})(jQuery);

/* Tabs */
const dataTabItems = document.querySelectorAll("*[data-tab-item]");

dataTabItems.forEach((tabItem) => {
	const curId = tabItem.dataset.tabItem;
	const tabTitle = tabItem.querySelector(`[data-tab-title="${curId}"]`);
	const tabContent = tabItem.querySelector(`[data-tab-content="${curId}"]`);

	tabTitle.addEventListener("click", () => {
		clearAllTabsById(dataTabItems, curId);

		tabTitle.classList.add("active");
		tabContent.classList.add("active");
	});
});

function clearAllTabsById(tabs, curId) {
	tabs.forEach((tabItem) => {
		const tabTitle = tabItem.querySelector(`[data-tab-title="${curId}"]`);
		const tabContent = tabItem.querySelector(`[data-tab-content="${curId}"]`);

		tabTitle?.classList.remove("active");
		tabContent?.classList.remove("active");
	});
}

/* Catalog filter inputs */
const sidebarFilterItem = document.querySelectorAll(".sidebar-filter__item");

sidebarFilterItem.forEach((item) => {
	const itemInput = item.querySelector(".sidebar-filter__item-title input");
	const subItemInputs = item.querySelectorAll(".sidebar-filter__subitem-item input");

	itemInput.addEventListener("change", () => {
		if (itemInput.checked) {
			subItemInputs.forEach((input) => (input.checked = true));
		} else {
			subItemInputs.forEach((input) => (input.checked = false));
		}
	});

	subItemInputs.forEach((input) => {
		input.addEventListener("change", () => {
			filterCheckItemInputs(itemInput, subItemInputs);
		});
	});
});

function filterCheckItemInputs(itemInput, subItemInputs) {
	let status = false;

	subItemInputs.forEach((input) => {
		if (input.checked) {
			status = true;
			return;
		}
	});

	console.log(itemInput);

	if (status) itemInput.checked = true;
	else itemInput.checked = false;
}

/* Reset form */
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
	const formResetBtn = form.querySelector("input[type=reset]");
	const formInputs = form.querySelectorAll("input");

	formResetBtn?.addEventListener("click", (e) => {
		e.preventDefault();

		formInputs.forEach((input) => {
			if (input.type == "checkbox") {
				input.checked = false;
			}
			if (input.type == "text") {
				input.value = "";
			}
		});
	});
});

/* Accordion height */
const accTitles = document.querySelectorAll(".psa__header-title");
const accBody = document.querySelector(".psa__body");

if (window.innerWidth > 900) {
	accTitles?.forEach((item) => {
		item.addEventListener("click", () => {
			setTimeout(setAccHeight, 301);
		});
	});
	setAccHeight();
}

// window.addEventListener("resize", () => {
// 	if (window.innerWidth < 900) {
// 		accBody.style.height = "auto";
// 	}
// });

function setAccHeight(curTitle) {
	const curAccContent = document.querySelector(".psa__content.active .psa__content-wrapper");
	const curAccTitle = document.querySelector(".psa__header-title.active");
	const accTitleOffsetTop = curAccTitle.getBoundingClientRect().top + window.scrollY;
	const accBodyOffsetTop = accBody.getBoundingClientRect().top + window.scrollY;
	const difference = accTitleOffsetTop - accBodyOffsetTop;

	accBody.style.height = curAccContent.clientHeight + difference + "px";
}
