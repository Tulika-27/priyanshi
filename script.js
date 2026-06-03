/* ====================
   TYPING EFFECT
==================== */

const words = [
    "Aspiring Software Engineer",
    "Frontend Learner",
    "Tech Explorer",
    "Creative Builder"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typing.textContent =
        currentWord.substring(0,letterIndex+1);

        letterIndex++;

        if(letterIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);
            return;
        }

    }else{

        typing.textContent =
        currentWord.substring(0,letterIndex-1);

        letterIndex--;

        if(letterIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect,
    deleting ? 60 : 120);
}

typeEffect();

/* ====================
   DARK MODE
==================== */

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }
});
const funCards = document.querySelectorAll(".funfacts .card");

funCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 12;
        const rotateX = -(y - centerY) / 12;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    });

});