// event bubbling conccept in this example
// we are using Maths ka random function for generating this 

// for generating the bubbles we are using for loop 

var timer=6;
var hitrn;
var score=0;
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
            makeBubble(
                document.querySelector("#pbtm").innerHTML=`<h3> Game Over </h3>`
            )
        }
        
    },1000);
}

function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    // query selector se html ko add kro 
    document.querySelector("#hitval").innerHTML=hitrn
}

// function for increasing score 
function increaseScore(){
    score +=10;
    document.querySelector("#score").innerHTML=score;
}

makeBubble();
getNewHit();
runTimer();
increaseScore();

// concept :-- event bubbling in javascript :
// --> 

document.querySelector("#pbtm")
.addEventListener(function name(details) {
    alert("chal raha hai");
})
