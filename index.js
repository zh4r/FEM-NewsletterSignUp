function validateEmail() {
    const mailErr = document.getElementById('email-error');
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const button = document.querySelector('button');

    if (!emailPattern.test(email)) {
        emailInput.classList.add('invalidMail');
        mailErr.style.display = 'block';
        button.disabled = true;
    } else {
        emailInput.classList.remove('invalidMail');
        mailErr.style.display = 'none';
        button.disabled = false;
    }
}