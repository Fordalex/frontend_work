// Submitting the registration form
var registerForm = document.getElementById('registerForm');

function registerUser(e) {
    e.preventDefault();

    var passwordOne = document.getElementById('passwordOne').value;
    var passwordTwo = document.getElementById('passwordTwo').value;
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML= '';

    if (passwordOne !== passwordTwo) {
        errorContainer.innerHTML = 'Passwords must match';
    } else if (passwordOne.length < 6) {
        errorContainer.innerHTML = 'The password must be 6 or more digits';
    } 

}

registerForm.addEventListener('submit', registerUser);