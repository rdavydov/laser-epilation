// window.addEventListener('load', () => {
// 	let position = 0;
// 	let slidesToView = 1;

//     if (window.matchMedia("(max-width: 425px)").matches) {
//         slidesToView = 2
//     }

// 	const slidesToScroll = 1;
// 	const container = document.querySelector('.slider-container');
// 	const track = document.querySelector('.slider-track');
// 	const items = document.querySelectorAll('.result_slider-item');
// 	const btnPrev = document.querySelector('.slider-prev');
// 	const btnNext = document.querySelector('.slider-next');
// 	const itemsCount = items.length;
// 	const itemWidth = container.offsetWidth / slidesToView;
// 	const movePosition = slidesToScroll * itemWidth;

// 	items.forEach((item) => {
// 		item.style.minWidth = itemWidth;
// 	});

// 	btnPrev.addEventListener('click', () => {
// 		position += movePosition;

// 		checkBtns();
// 		setPosition();
// 	});

// 	btnNext.addEventListener('click', () => {
// 		position -= movePosition;

// 		checkBtns();
// 		setPosition();
// 	});

// 	const checkBtns = () => {
// 		if(position === 0) {
// 			btnPrev.disabled = true
// 		} else {
// 			btnPrev.disabled = false;
// 		};

// 		if(position <= -(itemsCount - slidesToView) * itemWidth) {
// 			btnNext.disabled = true;
// 		} else {
// 			btnNext.disabled = false;
// 		};
// 	}

// 	const setPosition = () => {
// 		track.style.transform = `translateX(${position}px)`;
// 	};
// });

const opacityLeft = document.querySelector('.swiper-opacity-left');
const opacityRight = document.querySelector('.swiper-opacity-right');
const exampleSlide = document.querySelector('.example-slide');

opacityRight.style.width = exampleSlide.style.width;
opacityLeft.style.width = exampleSlide.style.width;