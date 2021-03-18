console.log('connected')

const form = document.getElementById('signUpForm');

function registerUser(e) {
    e.preventDefault();
    // Get elements
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let passwordOne = document.getElementById('passwordOne').value;
    let passwordTwo = document.getElementById('passwordTwo').value;
    let errorContainer = document.getElementById('errorContainer');

    if (!name) {
        errorContainer.innerHTML = "Please your name";
    }

    if (!email) {
        errorContainer.innerHTML = "Please your email";
    }

    if (passwordOne !== passwordTwo) {
        errorContainer.innerHTML = "The password don't match";
    }

}

form.addEventListener('submit', registerUser)