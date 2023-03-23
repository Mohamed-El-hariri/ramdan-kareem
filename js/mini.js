const card = document.querySelector('.card');
const content = card.querySelector('.content');

card.style.height = `${content.offsetHeight}px`;
card.style.width = `${content.offsetWidth}px`;