
document.querySelector(".carousel-btns .left").onclick = function () {
    const img = document.querySelector(".carousel img:nth-child(5)");
    const before = document.querySelector(".carousel img:nth-child(1)");
    img.remove();
    document.querySelector(".carousel").insertBefore(img, before);
  };
  document.querySelector(".carousel-btns .right").onclick = function () {
    const img = document.querySelector(".carousel img:nth-child(1)");
    img.remove();
    document.querySelector(".carousel").appendChild(img);
  };
  
  document.querySelectorAll(".card-wrap").forEach(
    (ele, id) =>
      (ele.onclick = () => {
        location.href = "details.html?id=" + (id + 1);
      }))


      // Get data
const email = document.querySelector("#email");
const password = document.querySelector("#verify");
const verify = document.querySelector("verify");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validate data if there is any input
function validateForm(){
    clearMessages();
    let errorFlag = false;
  console.log("HIIIIII!");

if(email.value.length <1){
    errorNodes[1].innerText = "Email is missing";
    email.classList.add("error-border");
    errorFlag = true;
}

if(password.value.length <1){
    errorNodes[2].innerText = "Password is missing";
    password.classList.add("error-border");
    errorFlag = true;
}
if(verify.value.length <1){
  errorNodes[0].innerText = "Password verification needed";
    nameInput.classList.add("error-border");
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
    
    email.classList.remove("error-border");
    password.classList.remove("error-border");
    verify.classList.remove("error-border");

    }
