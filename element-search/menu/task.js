const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach((el) => {
  el.addEventListener('click', (event) => {
    const menuSub = el.nextElementSibling;
    if (menuSub) {
      menuSub.classList.toggle('menu_active');
      if (menuSub.children.length) {
        event.preventDefault();
      }
    }
  });
});