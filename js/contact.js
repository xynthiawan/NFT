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
if(message.value.length <1){
    errorNodes[3].innerText = "Any feedback?";
    message.classList.add("error-border");
    errorFlag = true;
}
if(subject.value.length <1){
    errorNodes[2].innerText = "Subject is none existing";
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
    message.classList.remove("error-border");
    subject.classList.remove("error-border");

    }

