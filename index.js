const thanks = document.getElementById('thanks');
const main = document.querySelector('main');
const button = document.querySelector('button');
let mailSpan = document.getElementById('mailSpan');
thanks.classList.add('hide');

function validateEmail() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const mailErr = document.getElementById('email-error');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        emailInput.classList.add('invalidMail');
        mailErr.style.display = 'block';
        button.disabled = true;
        console.log(email);
    } else {
        emailInput.classList.remove('invalidMail');
        mailErr.style.display = 'none';
        button.disabled = false;
        console.log(email);
    }
}

function hideMain() {
    const email = document.getElementById('email').value;
    thanks.classList.toggle('hide');
    main.classList.toggle('hide');
    mailSpan.textContent = email;
}

// function hideThanks() {
//     thanks.classList.add('hide');
//     main.classList.remove('hide');
//     mailSpan.textContent = '';
// }

button.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail();
    if (!button.disabled) {
    hideMain();
    }
})