let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name.trim() === '') {
        alert('Please enter your name.');
    } else if (email.trim() === '') {

        alert('Please enter your email.');
    } else {
        alert('Form submitted successfully!');
    }
});
