
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

londonHere.addEventListener('mouseover', moveLondon);
dest.addEventListener('mouseover',move);
parisHere.addEventListener('mouseover', moveParis);
