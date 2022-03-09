let buttonCall = document.querySelector('.nav__btn-to-form'),
    body = document.querySelector('body'),
    modalForm = document.querySelector('.modal-order-phone')
    form = document.querySelector('.order-form'),
    closeForm = document.querySelector('.order-form__close'),
    keyUp = -1

// open modal order
buttonCall.addEventListener('click', () => {
  modalForm.classList.toggle('modal-order-phone_visible')
  form.classList.add('move-down')
  setTimeout(function() {
    form.style.top = '0'
  }, 300)
  body.classList.add('hidden')
})

modalForm.addEventListener('click', function(event) {
  let elTarget = event.target.classList
  if(elTarget.contains('modal-order-phone') && !form.classList.contains('move-up')){
    closeModalForm()
  }

})

// closing modal form
function closeModalForm() {
  form.classList.toggle('move-up')
  keyUp = setTimeout(function() {
    modalForm.classList.toggle('modal-order-phone_visible')
    form.style.top = '-100%'
    form.classList.toggle('move-down')
    form.classList.toggle('move-up')
    body.classList.remove('hidden')
  }, 1000)
}

closeForm.addEventListener('click', closeModalForm)

//open mobile menu
let burger = document.querySelector('.nav__burger'),
    mobMenu = document.querySelector('.nav__link-social')

burger.addEventListener('click', () => {
  body.classList.add('hidden-mob')
  setTimeout(function() {
    mobMenu.classList.add('nav__link-social_mob-down')
    setTimeout(() => {
      mobMenu.classList.add('bottom')
      mobMenu.classList.remove('nav__link-social_mob-down')
    }, 1000);
  }, 300)
})

// close mob menu
let mobBody = document.querySelector('.nav__link-social'),
    startY = 0,
    distanceY = 0,
    moveY = false


function closeMobMenu() {
  mobBody.classList.add('nav__link-social_mob-up')
    setTimeout(() => {
      mobMenu.classList.remove('bottom')
      mobMenu.classList.remove('nav__link-social_mob-up')
      body.classList.remove('hidden-mob')
    }, 1000);
}

// mobile swipe-menu
mobBody.addEventListener('touchstart', function(e) {
  startY = e.touches[0].clientY;
})

mobBody.addEventListener('touchmove', function(e) {
  let coordY = e.touches[0].clientY
  distanceY = coordY- startY
  moveY = true

})

mobBody.addEventListener('touchend', function(e) {
  if(moveY && distanceY < 0) {
    closeMobMenu()
    startY = 0
    distanceY = 0
    moveY = true

  }
})

//mob menu close by clicking on overlay
//mobOverlay = document.querySelector('.hidden-mob')
body.addEventListener('click', (e) => {
  let thisTarget = e.target


  if(thisTarget.classList.contains('nav')) {
    closeMobMenu()
  }
})

let menu = document.querySelector('.nav__link-social')

menu.addEventListener('click', (e) => {
  elClick = e.target
  let userWidth = document.documentElement.clientWidth
  if(userWidth <= 1290 ) {
    let arrayMenuLink = document.querySelectorAll('.nav-link'),
        buttonOrder = document.querySelector('.nav__btn-to-form'),
        mobLinkSocial = document.querySelectorAll('.mob-social__item > a')

    arrayMenuLink.forEach((e) => {
      e.addEventListener('click', closeMobMenu)
    })
    buttonOrder.addEventListener('click', closeMobMenu)
    mobLinkSocial.forEach((e) => {
      e.addEventListener('click', closeMobMenu)
    })
  }
})
