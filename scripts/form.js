const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}


//Password Documentation 
//Add event listener to DOM contents i.e the password and the password confirmation id items
document.addEventListener("DOMContentLoaded", function() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("password-conf");
  
    //Valid the accuracy of the data entered (the assword)
    function validatePassword() {
      if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
      } else {
        confirmPassword.setCustomValidity("");
      }
    }
  
    password.onchange = validatePassword;
    confirmPassword.onkeyup = validatePassword;
});
  
  