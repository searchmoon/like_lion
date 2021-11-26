const mainBtn = document.querySelector('.fav_lang');
const listBtn = document.querySelector('.lang_lists');

mainBtn.addEventListener('click', () => {
  mainBtn.classList.toggle('on');
});

listBtn.addEventListener('click', (event) => {
  if (event.target.nodeName === "BUTTON") {
      mainBtn.innerText = event.target.innerText;
      mainBtn.classList.remove('on');
  }
});