const thanks = document.getElementById('thanks');
const main = document.querySelector('main');
const button = document.querySelector('button');
const emailInput = document.getElementById('email');
let mailSpan = document.getElementById('mailSpan');
thanks.classList.add('hide');

function validateEmail() {
    const email = emailInput.value;
    const mailErr = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        emailInput.classList.add('invalidMail');
        mailErr.style.display = 'block';
        button.disabled = true;
    } else {
        emailInput.classList.remove('invalidMail');
        mailErr.style.display = 'none';
        button.disabled = false;
    }
};

function toggleHide() {
    const email = document.getElementById('email').value;
    thanks.classList.toggle('hide');
    main.classList.toggle('hide');
    mailSpan.textContent = email;
};

button.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail();
    if (!button.disabled) {
        toggleHide();
    }
});

    //TODO: Dismiss button doesn't work with enter.
button.addEventListener('keypress', (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("dismiss").click();
    }
});