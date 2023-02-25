// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate data if there is any input
function validateForm(){
    clearMessages();
    let errorFlag = false;
  console.log("HIIIIII!");
if(nameInput.value.length <1){
    errorNodes[0].innerText = "Name cannot be blank";
      nameInput.classList.add("error-border");
      errorFlag = true;
}
if(email.value.length <1){
    errorNodes[1].innerText = "Email is missing";
    email.classList.add("error-border");
    errorFlag = true;
}

if(password.value.length <1){
    errorNodes[2].innerText = "Password is missing";
    subject.classList.add("error-border");
    errorFlag = true;
}
if(!errorFlag){
    success.innerText = "Success!";
}
}

function clearMessages(){
    for (let i = 0; i <errorNodes.length; i++){
    errorNodes[i].innerText ="";
    success.innerText =" ";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    password.classList.remove("error-border");

    }
