
const dest = document.querySelector('.moving');
const londonHere = document.querySelector('.londonMove');
const parisHere = document.querySelector('.parisMove');
function move(){
  dest.classList.toggle('topDownxNY');
}
function moveLondon(){
  londonHere.classList.toggle('topDownxLondon');
}
function moveParis(){
  parisHere.classList.toggle('topDownxParis');
}

londonHere.addEventListener('click', moveLondon);
dest.addEventListener('click',move);
parisHere.addEventListener('click', moveParis);


let spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});

	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});
