const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit");
const feedbackDiv = document.getElementById("form-feedback");

document.addEventListener("DOMContentLoaded", () =>{
    form.addEventListener("submit", function(event){
      const username = document.getElementById("username").value.trim()
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const isValid = true;
      const messages = [];

      if(username.length < 3){
        event.preventDefault()
        isValid = false;
        const error1 ="please enter correct username"
        messages.push(error1)
      }

      if(!email.includes("@") && !email.includes(".")){
        event.preventDefault()
        isValid =false;
        const error2 = "Please enter valid email"
       messages.push(error2);
      }

      if(!password.length >= 8){
        event.preventDefault()
        isValid = false;
        const error3 = "Please enter correct password"
        messages.push(error3)
      }

    })

    if(isValid = true){
        event.preventDefault()
        feedbackDiv.style.display = "block"
        feedbackDiv.textContent = "Registration successful!"
        feedbackDiv.style.color = "#28a745";
    }

    else{
        event.preventDefault()
        feedbackDiv.innerHTML = messages.join("") + "<br>";
        feedbackDiv.style.color ="#dc3545"
    }
})