// levanto los campos del formulario que voy a validar
const email = document.getElementById('email');
const password = document.getElementById('password');
// levanto los campos de error
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
// levanto el formulario
const form = document.getElementById('form');
//en el evento submit valido que los campos esten llenos y no dejo que se envie automaticamente el formulario
form.addEventListener('submit', (e) => {
    // limpio los mensajes de error
    errorEmail.innerText = "";
    errorPassword.innerText = "";

    if (email.value === '' || email.value == null) {
        e.preventDefault();
        errorEmail.innerText = "El correo electrónico es obligatorio";
    }
    if (password.value === '' || password.value == null) {
        e.preventDefault();
        errorPassword.innerText = "La contraseña es obligatoria";
    }
  
});

// si toca enter en el campo email o password se valida el campo
email.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (email.value === '' || email.value == null) {
            errorEmail.innerText = "El correo electrónico es obligatorio";
        }else{
            errorEmail.innerText = "";
        
        }
    }
});
password.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        if (password.value === '' || password.value == null) {
            errorPassword.innerText = "La contraseña es obligatoria";
        }else{
            errorPassword.innerText = "";
        }
    }
});

// si toca tabb en el campo email o password se valida el campo
email.addEventListener('blur', ()=> {
    if (email.value === '' || email.value == null) {
        errorEmail.innerText = "El correo electrónico es obligatorio";
    }
    else{
        errorEmail.innerText = "";
    }
});
password.addEventListener('blur', ()=> {
    if (password.value === '' || password.value == null) {
        errorPassword.innerText = "La contraseña es obligatoria";
    }else{
        errorPassword.innerText = "";
    }
});