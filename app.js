let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"]

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is start");
        started=true;
    }
    levelUp();
});

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randbtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function checkAns(idx){
    // console.log("curr level: ",level);
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp(),100);
        }
    }else{
        h2.innerHTML=`Game Over!! Your Score was <b>${level}</b><br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn =this;
    userflash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);

    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
