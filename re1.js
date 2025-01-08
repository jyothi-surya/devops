document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let userName = document.getElementById("userName").value;
    let phone = document.getElementById("phone").value;
    let gender = document.querySelector('input[name="gender"]:checked');


    if (/\s/.test(fullName)) {
      alert("Full Name cannot contain spaces.");
      event.preventDefault();
      return false;
    }

 
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      event.preventDefault();
      return false;
    }

    if (/\s/.test(password)) {
      alert("Password cannot contain spaces.");
      event.preventDefault();
      return false;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password must match.");

      event.preventDefault();
      return false;
    }


    
    if (phone === "") {
      alert("Phone number is required.");
      event.preventDefault();
      return false;
    }

    if (!gender) {
      alert("Please select your gender.");
      event.preventDefault();
      return false;
    }

    alert("Registration successful!");
  });
