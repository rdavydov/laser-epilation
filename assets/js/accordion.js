const accordion = document.querySelectorAll('.accordion-item');
const plusArr = document.querySelectorAll('.plus');
const accordionBtn = document.querySelectorAll('.qna_accordion-button');

for(let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function() {
		this.classList.toggle('active');
	});
};

for (let i = 0; i < accordionBtn.length; i++) {
	accordionBtn[i].addEventListener('click', () => {
		plusArr[i].classList.toggle('active');		
	});
};