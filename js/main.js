const wrapper = document.querySelector('.more')
const btnPopup = document.querySelector('.button-logo')
const btnPopup1 = document.querySelector('.button__title')
const close = document.querySelector('.times')
btnPopup1.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})
close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})