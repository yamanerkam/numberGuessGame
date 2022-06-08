const subt = document.querySelector("#subt")
const guessField = document.querySelector("#guessField")
const guesses=document.querySelector(".guesses")
const lastResult =document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const start=document.querySelector(".start")
let randomNumber;
var triedNumbers=[];
let ten=10;
var one=0;
lowOrHi.style.visibility ="hidden";
start.style.visibility = "hidden";
let conietro=true
createNumberr();

guessField.addEventListener("keyup", function(e) {
        if (e.keyCode === 13) {
            
            e.cancelBubble
            
            subt.click();
        }
    });
 
subt.onclick = function(e) {
    compare(guessField,randomNumber)


}

start.addEventListener("click",()=>{
    lowOrHi.style.visibility ="hidden";
    start.style.visibility = "hidden";
    deletee()
    createNumberr()
    guessField.disabled=false;
    subt.disabled=false;
})

function numbers(a,b){
    if(a>b){
        lowOrHi.textContent="Too high! Try again!"
        lowOrHi.style.visibility="visible"

        
    }else if(b>a){
        lowOrHi.textContent="Too low! Try again!"
        lowOrHi.style.visibility="visible"

    }
}
function tenie(tenn,a,b){
    if(tenn==0){
        lowOrHi.textContent=`Game Over! Number was ${randomNumber}`
        guessField.disabled=true;
        subt.disabled=true;
        start.style.visibility="visible"
        lowOrHi.style.visibility="visible"
    }
}

function compare(guessField,randomNumber){


    if(guessField.value==""){
        alert("Please enter a valid number")
    }

    triedNumbers.forEach(element => {
        if(element==guessField.value){
            guessField.textContent=""
            alert(`you already have entered ${element}`)
            conietro=false;

        }
        ;
    });



    if(guessField.value>=1 && guessField.value<=100){
        if(guessField.value==randomNumber){
            console.log("yesss")
            //deletee();
            start.style.visibility="visible"
            lowOrHi.style.visibility="visible"
            lowOrHi.textContent=`You guessed correctly! The answer is ${randomNumber}!`
            guessField.disabled=true;
            subt.disabled=true;
    
       
    
        }else if(conietro==true){
            console.log(guessField.value)
            triedNumbers[one]=guessField.value
            guesses.textContent+=`${" "} ${triedNumbers[one]}`
            one++
            ten--
            lastResult.textContent=ten  
            numbers(guessField.value,randomNumber) 
            tenie(ten)
        }
    }else{
        alert("enter a number between 1 and 100 please")
    }
    
    conietro=true
    
    guessField.value=""
}



 function deletee(){
    ten=10;
    one=0;
    triedNumbers=[];
    guesses.textContent=""
    lastResult.textContent=10

}

function createNumberr(){
    randomNumber = Math.floor((Math.random() * 100) + 1);
    console.log(randomNumber)
}