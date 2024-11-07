// The browser seems to be validating the mail by itself - have to check how to access this, and use it for a simpler function.



const mailInput = document.getElementById('email');
const mailErr = document.getElementById('email-error');

function validateEmail(mailInput) {
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // console.log(mailInput)
    if (!mailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        mailErr.innerHTML = "Enter Valid mail";
        return false;
    };

    mailErr.HTML = "";
    return true;
    // return emailRegex.test(mailInput);
}

// mailInput.addEventListener

// oninput = (event) => {};

const works = () => console.log('working');

works();

//  https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event


