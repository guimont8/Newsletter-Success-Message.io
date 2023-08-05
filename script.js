let button1 = document.querySelector(".button1");
let invalid = document.querySelector(".invalid");
let emailInput = document.querySelector("#inputEmail");
let hide = document.querySelector(".hide");
let button2 = document.querySelector(".button2");
let emailSpan = document.querySelector("#emailSpan");
let section1 = document.querySelector(".section1");
let principalImg = document.querySelector(".principalImg");
const emailModel = /\w+@\w+\.\w+/;
let listaEmails = [];


function saveEmail(email) {
    email = email.value;
    if (emailModel.test(email)) {
        emailSpan.textContent = email
        invalid.style.display = "none";
        section1.style.display = "none";
        hide.style.display = "flex";
        principalImg.style.display = "none";
    } else {
        invalid.style.display = "flex";
        emailInput.style.background = "hsla(0, 72%, 66%, 0.801)";
    }
}
button1.addEventListener("click", function () {
    saveEmail(emailInput),function (){
        showEmail(emailInput)
    };
});
//---------------------------------------------------------------------//
button2.addEventListener("click", function (){
    hide.style.display = "none";
    section1.style.display = "flex";
    if (window.innerWidth <= 1200) {
        principalImg.style.display = "flex"};
});

