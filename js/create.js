// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop zone when file is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
  dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropZone.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropZone.addEventListener('drop', handleDrop, false);

// Handle file input change
fileInput.addEventListener('change', handleFiles, false);

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight() {
  dropZone.classList.add('highlight');
}

function unhighlight() {
  dropZone.classList.remove('highlight');
}

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

function handleFiles() {
  const files = fileInput.files || event.dataTransfer.files;
  if (files.length === 0) return;

  const file = files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    imagePreview.src = e.target.result;
    imagePreview.style.display = 'block';
  };

  reader.readAsDataURL(file);
  uploadFile(file);
}

function uploadFile(file) {
  const url = 'YOUR_UPLOAD_URL_HERE';
  const formData = new FormData();

  formData.append('file', file);

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => console.log(`Uploaded ${file.name}`))
  .catch(error => console.error(`Error uploading ${file.name}: ${error}`));
}


//Validate data if there is any input
function validateForm(){
    clearMessages();
    let errorFlag = false;
  console.log("HIIIIII!");
if(nameInput.value.length <1){
    errorNodes[0].innerText = "Art title cannot be blank";
      nameInput.classList.add("error-border");
      errorFlag = true;
}
if(email.value.length <1){
    errorNodes[1].innerText = "About your art is missing";
    email.classList.add("error-border");
    errorFlag = true;
}
if(message.value.length <1){
    errorNodes[3].innerText = "Minimum bid is blank";
    message.classList.add("error-border");
    errorFlag = true;
}
if(subject.value.length <1){
    errorNodes[2].innerText = "Price is important";
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

