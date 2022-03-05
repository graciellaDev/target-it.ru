let buttonCall = document.querySelector('.nav__btn-to-form'),
    body = document.querySelector('body'),
    modalForm = document.querySelector('.modal-order-phone')
    form = document.querySelector('.order-form'),
    closeForm = document.querySelector('.order-form__close')

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
  if(elTarget.contains('modal-order-phone')){
    elTarget.toggle('modal-order-phone_visible')
  }

})

// closing modal form
function closeModalForm() {
  form.classList.toggle('move-up')
  setTimeout(function() {
    modalForm.classList.toggle('modal-order-phone_visible')
    form.style.top = '-100%'
    form.classList.toggle('move-down')
    form.classList.toggle('move-up')
  }, 1000)
}

closeForm.addEventListener('click', closeModalForm)
