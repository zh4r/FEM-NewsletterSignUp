const mailInput = document.getElementById('email');
const email = input.value;

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

addEventListener("input", (event) => {});

oninput = (event) => {};


//  https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event