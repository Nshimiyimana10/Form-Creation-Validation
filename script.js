const form = document.getElementById("registration-form");
const submitBtn = document.getElementById("submit");
const feedbackDiv = document.getElementById("form-feedback");

document.addEventListener("DOMContentLoaded", () =>{
    console.log("HTML form loaded before JavaScript");
    form.addEventListener("submit", (event) =>{
      event.preventDefault()

      const userName = document.getElementById("username").value.trim()
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

    })
})