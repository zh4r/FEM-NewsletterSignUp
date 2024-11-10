const thanks = document.getElementById('thanks');
const main = document.querySelector('main');
const button = document.querySelector('button');

thanks.classList.add('hide');

function validateEmail() {
    const mailErr = document.getElementById('email-error');
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    let mailSpan = document.getElementById('mailSpan').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        emailInput.classList.add('invalidMail');
        mailErr.style.display = 'block';
        button.disabled = true;

    } else {
        emailInput.classList.remove('invalidMail');
        mailErr.style.display = 'none';
        button.disabled = false;
        mailSpan = email;
    }
}

function hideMain() {
    main.classList.add('hide');
    thanks.classList.remove('hide');
} 

function hideThanks() {
    thanks.classList.add('hide');
    main.classList.remove('hide');
} 