const name = document.getElementById('name')
const password = document.getElementById('pwd')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const email = document.getElementById('email')

form.addEventListener('submit', (e) => {
  let messages = []
  if (email.value === '' || email.value == null) {
    window.alert('Email is required')
    messages.push('Email is required')
  }
  if (name.value === '' || name.value == null) {
    window.alert('Name is required')
  }

  if (pwd.value.length <= 6) {
    window.alert('pwd must be longer than 6 characters')
  }

  if (pwd.value.length >= 20) {
    window.alert('pwd must be less than 20 characters')
  }

  if (pwd.value === 'pwd') {
    window.alert('password cannot be password')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})