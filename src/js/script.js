

"use strict";
var burgerBtn = document.querySelector('.menu');
var burgerBtnClose = document.querySelector('.menu-dropdown-btn');
var burgerMenu = document.querySelector('.menu-dropdown');
var openMenu = function openMenu() {
  burgerMenu.classList.add('visible');
};
var closeMenu = function closeMenu() {
  burgerMenu.classList.remove('visible');
};
burgerBtn.addEventListener('click', openMenu);
burgerBtnClose.addEventListener('click', closeMenu);

