let downBtn = document.querySelector('.info .metadata .downBtn');
let title = document.querySelector('.info .metadata .title');

downBtn.addEventListener('click', () => {
  downBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
})