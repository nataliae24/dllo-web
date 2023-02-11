const userName = document.querySelector('#username');
const emailId = document.querySelector('#email');
const passwordId = document.querySelector('#password');
const confirmPasswordId = document.querySelector('#confirm-password');
const form = document.querySelector('#form_create_account');

const checkName = () => {
    let valid = false;
    const name = userName.value.trim();

    if (!isRequired(name)) {
        showError(userName, 'Rellene este campo.');
    } else if (!isNameValid(name)) {
        showError(userName, `El nombre solo puede contener texto.`)
    } else {
        showSuccess(userName);
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailId.value.trim();
    if (!isRequired(email)) {
        showError(emailId, 'Rellene este campo.');
    } else if (!isEmailValid(email)) {
        showError(emailId, 'Email inválido.')
    } else {
        showSuccess(emailId);
        valid = true;
    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = passwordId.value.trim();

    if (!isRequired(password)) {
        showError(passwordId, 'Rellene este campo.');
    } else if (!isPasswordValid(password)) {
        showError(passwordId, 'No debe tener más de 8 caracteres');
    } else {
        showSuccess(passwordId);
        valid = true;
    }

    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    // check confirm password
    const confirmPassword = confirmPasswordId.value.trim();
    const password = passwordId.value.trim();

    if (!isRequired(confirmPassword)) {
        showError(confirmPasswordId, 'Rellene este campo.');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordId, 'Las contraseñas no coinciden');
    } else {
        showSuccess(confirmPasswordId);
        valid = true;
    }
    return valid;
};

const isNameValid = (username) => {
    const re = /^[a-zA-ZÀ-ÿ\s]{5,40}$/;
    return re.test(username);
}

const isEmailValid = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
};

const isPasswordValid = (password) => {
    const re = /^.{4,8}$/;
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
    
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    formField.classList.add('form-field.success');
    
    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = checkName(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        alert("¡Registro con éxito!");
        form.reset();
    }
});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkName();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));