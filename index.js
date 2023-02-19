const userName = document.querySelector('#username');
const emailId = document.querySelector('#email');
const passwordId = document.querySelector('#password');
const confirmPasswordId = document.querySelector('#confirm-password');
const formCreateAccount = document.querySelector('#form_create_account');

const validateName = () => {
    let valid = false;
    const name = userName.value.trim();

    if (!isPresent(name)) {
        error(userName, 'Rellene este campo.');
    } else if (!isNameValid(name)) {
        error(userName, `El nombre solo puede contener texto.`)
    } else {
        success(userName);
        valid = true;
    }
    return valid;
};


const validateEmail = () => {
    let valid = false;
    const email = emailId.value.trim();
    if (!isPresent(email)) {
        error(emailId, 'Rellene este campo.');
    } else if (!isEmailValid(email)) {
        error(emailId, 'Email inválido.')
    } else {
        success(emailId);
        valid = true;
    }
    return valid;
};

const validatePassword = () => {
    let valid = false;
    const password = passwordId.value.trim();

    if (!isPresent(password)) {
        error(passwordId, 'Rellene este campo.');
    } else if (!isPasswordValid(password)) {
        error(passwordId, 'No debe tener más de 8 caracteres');
    } else {
        success(passwordId);
        valid = true;
    }

    return valid;
};

const validateConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordId.value.trim();
    const password = passwordId.value.trim();

    if (!isPresent(confirmPassword)) {
        error(confirmPasswordId, 'Rellene este campo.');
    } else if (password !== confirmPassword) {
        error(confirmPasswordId, 'Las contraseñas no coinciden');
    } else {
        success(confirmPasswordId);
        valid = true;
    }
    return valid;
};

const isNameValid = (username) => {
    const re = /^[a-zA-ZÀ-ÿ\s]{5,40}$/;
    return re.test(username);
}

const isPasswordValid = (password) => {
    const re = /^.{4,8}$/;
    return re.test(password);
};

const isEmailValid = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
};

const isPresent = value => value === '' ? false : true;

const success = (input) => {
    const getField = input.parentElement;

    // remove the error class
    getField.classList.remove('error');
    getField.classList.add('success');
    getField.classList.add('field.success');
    
    // hide the error message
    const error = getField.querySelector('small');
    error.textContent = '';
}

const error = (input, message) => {
    const getField = input.parentElement;
    // add the error class
    getField.classList.remove('success');
    getField.classList.add('error');
    
    // show the error message
    const error = getField.querySelector('small');
    error.textContent = message;
};

formCreateAccount.addEventListener('submit', function (e) {
    e.preventDefault();

    // validate fields
    let isUsernameValid = validateName(),
        isEmailValid = validateEmail(),
        isPasswordValid = validatePassword(),
        isConfirmPasswordValid = validateConfirmPassword();

    let isFormValid = isEmailValid &&
        isUsernameValid && 
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit form is ok
    if (isFormValid) {
        alert("¡Registro con éxito!");
        formCreateAccount.reset();
    }
});

const returned = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // old timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

formCreateAccount.addEventListener('input', returned(function (e) {
    switch (e.target.id) {
        case 'email':
            validateEmail();
            break;
        case 'username':
            validateName();
            break;
        case 'password':
            validatePassword();
            break;
        case 'confirm-password':
            validateConfirmPassword();
            break;
    }
}));