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
function openMobMenu() {
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
}
let burger = document.querySelector('.nav__burger'),
    mobMenu = document.querySelector('.nav__link-social'),
    nav = document.querySelector('.nav')

burger.addEventListener('click', () => {
  openMobMenu()
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

// close mob menu by click on link
document.querySelectorAll('.nav-link').forEach(function(el) {
  el.addEventListener('click', () => {
    const screenWidth = window.screen.width
    if(screenWidth <= '1334') {
      closeMobMenu()
    }
  })
})

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

// mobile swipe on menu
let startMenuY = 0,
    distanceMenuY = 0,
    moveMenuY = false

nav.addEventListener('touchstart', function(e) {
  startMenuY = e.touches[0].clientY;
})

nav.addEventListener('touchmove', function(e) {
  let coordY = e.touches[0].clientY
  distanceMenuY = coordY- startMenuY
  moveMenuY = true

})

nav.addEventListener('touchend', function(e) {
  if(moveMenuY && distanceMenuY > 0) {
    openMobMenu()
    startMenuY = 0
    distanceMenuY = 0
    moveMenuY = true
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
let closeAdvice = document.querySelector('#close-advice')

function sendAjaxForm(result_form, ajax_form, url) {
  $.ajax({
      url:     url, //url страницы (action_ajax_form.php)
      type:     "POST", //метод отправки
      dataType: "html", //формат данных
      data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
      success: function(response) { //Данные отправлены успешно
        result = $.parseJSON(response);
        $('.name-client').html(result.name);
        $('#contact-form')[0].reset();
        $('#result-form').addClass('result-form_visible');
        $('body').addClass('body-hidden')
    },
    error: function(response) { // Данные не отправлены
      //result = $.parseJSON(response);
      //$('.nameClient').html(result.name);
      $('.name-client').html(document.querySelector('.contact-form__element input[name = "name"]').value);
      $('#result-form-error').addClass('result-form_visible');
      $('body').addClass('body-hidden')
    }
  })
 }

// work slider Swiper
const workGallery = new Swiper('.work-swiper', {
  direction: 'horizontal',
  loop: false,
  clickable: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 700,
  rewind: true,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.work-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'black__bullet swiper-pagination-bullet',
    bulletActiveClass: 'black__bullet_active swiper-pagination-bullet-active'
  }

});

// click on tab in block work
let tabs = document.querySelectorAll('.tab-button')

tabs.forEach(function(el) {
  el.addEventListener('click', function() {
    let tabActive = document.querySelector('.tab-button_active'),
        spanActive = document.querySelector('.tab-span-active'),
        targetPath = this.getAttribute('data-path')
        tabDescriptionActive = document.querySelector('.tab-description_active'),
        newTabDescriptionActive = document.querySelector(`[data-target = '${targetPath}']`)


    spanActive.style.opacity = '0'
    setTimeout(() => {
      tabActive.classList.remove('tab-button_active')
      spanActive.remove()
      this.classList.add('tab-button_active')
      let newSpanActive = document.createElement('span')
      newSpanActive.classList.add('tab-span-active')
      this.appendChild(newSpanActive)
      tabDescriptionActive.classList.remove('tab-description_active')
      newTabDescriptionActive.classList.add('tab-description_active')
    }, 300)

  })
})
