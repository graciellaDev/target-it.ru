let buttonCall = document.querySelector('.nav__btn-to-form'),
    body = document.querySelector('body'),
    modalFormCall = document.querySelector('.modal-order-phone'),
    formOrder = document.querySelector('#order-form'),
    closeOrderForm = document.querySelector('#close-order'),
    keyUp = -1

//function open modal form
function openModalForm(wrapper, form) {
  wrapper.classList.toggle('visible')
  form.classList.add('move-down')
  setTimeout(function() {
    form.style.top = '0'
  }, 300)
  body.classList.add('hidden')
}

// open modal order
buttonCall.addEventListener('click', () => {
  let mobMenu = document.querySelector('.nav__link-social')
  if(mobMenu.classList.contains('bottom')) {
    closeMobMenu()
  }
  openModalForm(modalFormCall, formOrder)
})

modalFormCall.addEventListener('click', function(event) {
  let elTarget = event.target.classList
  // if(elTarget.contains('modal-order-phone') && !formOrder.classList.contains('move-up')){
  //   closeModalForm()
  // }
})

// closing modal form
function closeModalForm(form, wrapperForm) {

  form.classList.toggle('move-up')
  keyUp = setTimeout(function() {
    wrapperForm.classList.toggle('visible')
    form.style.top = '-100%'
    form.classList.toggle('move-down')
    form.classList.toggle('move-up')
    body.classList.remove('hidden')
  }, 1000)
}

closeOrderForm.addEventListener('click', () => closeModalForm(formOrder, modalFormCall))

//create overlay
function createOverlay(el) {
  let overlay = document.createElement('div')
  overlay.classList.add('overlay')
  el.append(overlay)
  return overlay
}


//open mobile menu
let burger = document.querySelector('.nav__burger'),
    mobMenu = document.querySelector('.nav__link-social'),
    nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
  body.classList.add('hidden')
  let overlay = createOverlay(nav)
  setTimeout(function() {
    overlay.classList.add('visible')
  }, 0)
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
  let overlay = document.querySelector('.overlay')
  mobBody.classList.add('nav__link-social_mob-up')
    setTimeout(() => {
      mobMenu.classList.remove('bottom')
      mobMenu.classList.remove('nav__link-social_mob-up')
      overlay.classList.remove('visible')
      setTimeout(() => {
        overlay.remove()
        body.classList.remove('hidden')
      }, 300)
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
body.addEventListener('click', (e) => {
  let thisTarget = e.target
  if(thisTarget.classList.contains('overlay')) {
    closeMobMenu()
  }
  if(thisTarget.classList.contains('visible')) {
    let visibleModal = document.querySelector('.visible'),
        form = visibleModal.querySelector('form')

    closeModalForm(form, visibleModal)
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

// open modal advice
let buttonOpenAdvice = document.querySelector('.button-more'),
    modalAdvice = document.querySelector('.modal-advice'),
    formAdvice = document.querySelector('#form-advice'),
    closeAdvice = document.querySelector('#close-advice')

buttonOpenAdvice.addEventListener('click', () => {
  openModalForm(modalAdvice, formAdvice)
})

// close modal advice
closeAdvice.addEventListener('click', () => closeModalForm(formAdvice, modalAdvice))
