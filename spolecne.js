//3
const menuButton = document.querySelector('#menu-tlacitko');
const menu = document.querySelector('#menu-polozky');
const icon = document.querySelector('i');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
    menu.classList.contains('show') ? icon.className = 'fas fa-xmark' : icon.className = 'fas fa-bars';
  });
