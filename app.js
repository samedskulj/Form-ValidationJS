const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const formControlSuccess = document.querySelector(".form-control");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkInputs();
})
//Trebamo dobiti sve vrijednosti iz inputa - username, password...
function checkInputs() {
    const vrijednostUsername = username.value.trim(); //funkcija trim brise "white space"
    const vrijednostEmail = email.value.trim();
    const vrijednostPassword = password.value.trim();
    const vrijednostPassword2 = password2.value.trim();
    //Provjeravamo vrijednosti od svakog inputa
    if(vrijednostUsername === "")
    {
        setErrorFor(username, "Username cannot be blank")
    } else {
        setSuccessFor(username)
    }
    if(vrijednostEmail === "")
     {
        setErrorFor(email, "Email cannot be blank")
        isEmail(email);
     } else if (!isEmail(vrijednostEmail)) {
        setErrorFor(email, "Email is not valid")
     } else {
        setSuccessFor(email)
     }

    if(vrijednostPassword === "")
    {
        setErrorFor(password, "Password cannot be blank")
    } else {
        setSuccessFor(password)
    }
    if(vrijednostPassword2 === "")
    {
        setErrorFor(password2, "Password2 cannot be blank")
    } else if(vrijednostPassword !== vrijednostPassword2) { //provjera da li je input value od "password" isti kao i u "password2"
        setErrorFor(password2, "Password2 does not match")
    } else {
        setSuccessFor(password2)
    }
    //prikazi poruku
      if(vrijednostUsername !== "" && vrijednostPassword !== "" && vrijednostPassword === vrijednostPassword2 && vrijednostEmail !== "" && isEmail(vrijednostEmail)) {
          setTimeout(prikaziPoruku, 1000);
      }
        
    }

function setErrorFor(input, message) {
   const formControl = input.parentElement //.form-control
   const small = formControl.querySelector("small");

   small.innerText = message;
   formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement //.form-control
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}
function prikaziPoruku() {
    alert("Uspijesno ste napravili account")
}