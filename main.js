const burgerMenu = document.querySelector('.burger-menu')
const burgerBtn = document.querySelector('.burger-btn')
const burgerCloseBtn = document.querySelector('.burger-close-btn')

const openBurgerMenu = () => {
  burgerMenu.classList.add('burger-menu--active')
  document.body.style.overflow = 'hidden'
}

const closeBurgerMenu = () => {
  burgerMenu.classList.remove('burger-menu--active')
  document.body.style.overflow = 'auto'
}

burgerBtn.addEventListener('click', () => openBurgerMenu())

burgerCloseBtn.addEventListener('click', () => closeBurgerMenu())
