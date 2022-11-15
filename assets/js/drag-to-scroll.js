const container = document.querySelector('.tariff-list');
let mouseDown = false;
let startX, scrollLeft;

const startDragging = (e) => {
  	mouseDown = true;
  	startX = e.pageX - container.offsetLeft;
  	scrollLeft = container.scrollLeft;
};
const stopDragging = (event) => {
  	mouseDown = false;
};

container.addEventListener('mousemove', (e) => {
  	e.preventDefault();
  	if(!mouseDown) { return; }
  	const x = e.pageX - container.offsetLeft;
  	const scroll = x - startX;
  	container.scrollLeft = scrollLeft - scroll;
});

container.addEventListener('mousedown', startDragging, false);
container.addEventListener('mouseup', stopDragging, false);
container.addEventListener('mouseleave', stopDragging, false);