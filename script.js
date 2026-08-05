console.log("Portfolio Loaded");
const text = [
    "Java Developer",
    "DSA Learner",
    "Problem Solver",
    "BCA Student"
];

let index = 0;

setInterval(() => {
    document.getElementById("typing").innerHTML = text[index];
    index++;

    if(index==text.length){
        index=0;
    }

},2000);
const texts = [
    "Java Developer",
    "Full Stack Learner",
    "DSA Enthusiast",
    "Problem Solver"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    currentText = texts[index];

    if (!isDeleting) {
        typing.textContent = currentText.substring(0, charIndex++);
    } else {
        typing.textContent = currentText.substring(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();