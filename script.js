const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
   if(confirmPassword.value !== password.value){
    alert('Passwords do not match!')
   }
})


