import './index.css';

function requireAll(icon) {
  icon.keys().forEach(icon);
}

requireAll(require.context('../src/images/svg', true, /\.svg$/));

const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');
const menuOverlay = document.querySelector('.overlay');
const cross = menuButton.querySelector('.cross');
const contents = document.querySelector('.category_contents');
const contentsButton = document.querySelector('.category__button');
const popup = document.querySelector('.popup');
const article = document.querySelector('.article');
const popupImage = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__figure-text');

function openPopup(e) {
  if (e.target.classList.contains('article__image')) {
    popup.classList.add('popup_active');
    document.body.classList.add('scroll-lock');
    popupImage.src = e.target.src;
    popupText.textContent = e.target.nextElementSibling.textContent;
  }
}

function closePopup(e) {
  if (e.target.classList.contains('popup__image')
    || e.target.classList.contains('popup__overlay')
    || e.target.classList.contains('popup__figure-text')) {
    popup.classList.remove('popup_active');
    document.body.classList.remove('scroll-lock');
  }
}

const toggleContentsButton = () => {
  contents.classList.toggle('category_opened');
  contentsButton.classList.toggle('category__button_active');
};

const toggleMenuButton = () => {
  menu.classList.toggle('header__menu_opened');
  document.body.classList.toggle('scroll-lock');
  menuOverlay.classList.toggle('overlay_active');
  cross.classList.toggle('cross_active');
};

const closeMenu = (e) => {
  if (e.target.classList.contains('header__menu-link') || e.target.classList.contains('overlay')) {
    menuButton.classList.remove('header__menu-button_opened');
    menu.classList.remove('header__menu_opened');
    menuOverlay.classList.remove('overlay_active');
    cross.classList.remove('cross_active');
    document.body.classList.remove('scroll-lock');
  }
};

const closeContents = (e) => {
  if (e.target.classList.contains('contents__link')) {
    contents.classList.remove('category_opened');
    contentsButton.classList.remove('category__button_active');
  }
};

menuButton.addEventListener('click', toggleMenuButton);
menu.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);
contentsButton.addEventListener('click', toggleContentsButton);
contents.addEventListener('click', closeContents);
article.addEventListener('click', openPopup);
popup.addEventListener('click', closePopup);
