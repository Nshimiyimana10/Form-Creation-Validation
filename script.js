const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit");
const feedbackDiv = document.getElementById("form-feedback");

document.addEventListener("DOMContentLoaded", () =>{
    console.log("HTML form loaded before JavaScript");
    form.addEventListener("submit", (event) =>{
      event.preventDefault()

      const username = document.getElementById("username").value.trim()
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const isValid = true;
      const messages = [];

      if(username.length > 3){
        const error1 ="please enter correct username"
         messages.push(error1)
      }

      if(!email.includes("@") && !email.includes(".")){
        const error2 = "Please enter valid email"
       messages.push(error2);
      }

    })
})