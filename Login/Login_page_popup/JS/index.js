const wrapper = document.querySelector('.wrapper')
const login_link = document.querySelector('.login-link')
const register_link = document.querySelector('.register-link')
const button_login = document.querySelector('.btnLogin-popup')
const icon_close = document.querySelector('.icon-close')

register_link.addEventListener('click',()=> {
    wrapper.classList.add('active');
})

login_link.addEventListener('click',()=> {
    wrapper.classList.remove('active')
})

button_login.addEventListener('click',()=> {
    wrapper.classList.add('active-popup')
})

icon_close.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup')
})