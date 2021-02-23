// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateText();
  }); 

function updateText(){
    let newText = document.getElementById("text");
    newText.innerHTML = "This is really cool!";
};