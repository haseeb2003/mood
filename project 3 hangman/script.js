const wordEl = document.getElementById("word");
const wronglettersEl = document.getElementById("wrong-letters");
const playAgainbtn = document.getElementById("play-button");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalmassage = document.getElementById("finalmassage");
const figurepart = document.querySelectorAll(
"figurepart"
);
const words = [
    "application",
    "programming",
    "interface",
    "wizard",
    "austrio genesis imperfecta",
];
let selectedword = 
words[Math.floor(Math.random() * words.length)];
const correctletters = ["a"];
const wrongletters = [];
//display word function
function displayword(){
wordEl.innerHTML =`
${selectedword
    .split("")
    .map(
        (letter) =>
        `<span class ="letter">${
            correctletters.includes(letters)
            ? letter
             :""
            }</span>`
            )
.join("")}
`;
const innerword = wordEl.innnerText.replace(/\n/g,"")

if (innerword === selectedword){
    finalmassage.innerText = "congratulations: YOU WON";
    popup.style.display= "flex";
}
}

//wrong letter notification
function updatewronglettersEl(){
    wronglettersEl.innerHTML = `
    ${
        wrongletters.length>0
        ?"<p>Wrong</p>"
        :""
    }
    ${wrongletters.map(
        (letter) =>`<span>${letter}</span>`
    )}
        `;
// display body parts
figureparts.array.forEach((part,index)=>{
    const errors = wrongletters.length;
if(index<errors){
    part.style.display ="block";
}else{
    part.style.display ="none";
}
});
// check if lost
if(wrongletters.length===figureparts.length){
    finalmassage.innerText = "Unfortunately you lost";
    popup.style.display = "flex";
}
}
//show notification
function showNotification(){
    notification.classList.add("show");
    setTimeout(()=>{
        notification.classList.remove("show");
    },2000);
}



// keydown letter press
window.addEventlistener("keydown",(e) => {
    if (e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;
        if(selectedword.includes(letter)) {
            if(!correctletters.includes(letter)) {
               correctletters.push(letter);
               displayword();
     }else{
            showNotification();
        }
    }else{
        if(!wrongletters.includes(letter)) {
            wrongletter.push(letter);
            updatewronglettersEl();
        }else{showNotification();
        }
    }
    } 
});
//play agin
playAgainbtn.addEventListener("click",()=>{
    correctletters.splice(0);
    wrongletters.splice(0);
    selectedword = words[Math.floor(Math.random()*words.length)];
    displayword();
    updatewronglettersEl();
    popup.style.display="none";

});
displayWords();

