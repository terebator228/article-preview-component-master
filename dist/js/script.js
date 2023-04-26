const btn = document.querySelector('.card__btn'),
      share = document.querySelector('.card__contacts-wrap'),
      card = document.querySelector('.card'),
      circle = document.querySelector('.card__circle'),
      arrow = document.querySelector('.card__circle svg path');

function hideContacts() {
    share.classList.remove('card__contacts-wrap_active')
}

function showContacts() {
    share.classList.add('card__contacts-wrap_active')
}

btn.addEventListener('click', (e) => {
    if (share.classList.contains('card__contacts-wrap_active')) {
        hideContacts();
        return
    }
    showContacts();
})

document.addEventListener('click', (e) => {
    if (e.target !== circle && e.target !== arrow) {
        hideContacts();
    }
})


