const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('navigation-list');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
});
