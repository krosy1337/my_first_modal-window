const body = document.body
const TIMEOUT = 300

const popupOpen = target => {
    const popupElement = document.querySelector('[data-popup="'+target.dataset.key+'"]')
    const card = popupElement.querySelector('.popup__card')
    popupElement.classList.add('open')
    card.classList.add('open')
}

const popupClose = target => {
    target.classList.remove('open')
    target.querySelector('.popup__card').classList.remove('open')
}

const bodyOpen = () => {
    body.classList.remove('lock')
    body.style.paddingRight = '0';
}

const bodyLock = () => {
    const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';
    body.classList.add('lock')
    body.style.paddingRight = lockPaddingValue;
}



body.addEventListener('click', event => {
    const target = event.target
    if (target.classList.contains('modal__link')) {
        bodyLock()
        popupOpen(target)
        event.preventDefault()
    }
    if (target.classList.contains('popup_close')) {
        popupClose(target.closest('.popup'))
        setTimeout(() => bodyOpen(), TIMEOUT)
        event.preventDefault()
    }
    if (target.classList.contains('popup__wrapper')) {
        popupClose(target.closest('.popup'))
        setTimeout(() => bodyOpen(), TIMEOUT)
    }
})
