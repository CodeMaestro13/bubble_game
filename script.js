// event bubbling conccept in this example
// we are using Maths ka random function for generating this 

// for generating the bubbles we are using for loop 

var timer=30;
var hitrn;
var score=0;
var highscore=localStorage.getItem("highScore") || 0 ;
document.querySelector("#highScore").innerHTML=highscore;

function makeBubble(){
    var clutter=" ";
for(var i=0;i<=139;i++){
    var rn=Math.floor(Math.random()*10);
   clutter+=  `<div class="bubble">${rn}</div>`;
}

// for sending the code to our respective section this code we use queryselector 
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h1> Game Over </h1>`;
        }
        
    },1000);
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    // query selector se html ko add kro 
    document.querySelector("#hitval").innerHTML=hitrn;
}

// function for increasing score 
function increaseScore(){
    score +=10;
    document.querySelector("#score").innerHTML=score;

    // logic for highscore
    if(score>highscore){
        highscore=score;
        localStorage.setItem("highScore",highscore);
        document.querySelector("#highScore").innerHTML=highscore;
    }
}

// function for high score

// function highScore(){
//     if(score>=highScore){
//         highscore+=score;
//         document.querySelector("#highScore").innerHTML=highscore;
//     }
// }

// concept :-- event bubbling in javascript :
// --> agar ek element pe event call kiya or if its not work on that then uske parent pr event call hoga or udhar bhi nahi to parent ke parent pr call hoga and its go on--in on 

document.querySelector("#pbtm")
.addEventListener("click", function(details){
    var clickednum=Number(details.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

makeBubble();
runTimer();
getNewHit();
// highScore();
