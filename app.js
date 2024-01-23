let bstart=document.querySelector(".bstart");
let astart=document.querySelector(".astart");
let start=document.querySelector("#start-btn");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=document.querySelector(".turn");
let wcount=document.querySelector(".wcount");

let turnO =true;
let oW=0;
let xW=0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

start.addEventListener("click",() =>{
    bstart.classList.add("hide");
    astart.classList.remove("hide");
})

const resetGame = () =>{

    // turnO =true;
    enabledBtns();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
         if(turnO){
            box.innerText="O";
            box.style.color="green";
            turnO=false;
            turn.innerText="X's Turn";
         }else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
            turn.innerText="O's Turn";
         }
         box.disabled=true;

         checkWinner();
    })
})

const enabledBtns = () =>{
    boxes.forEach((box) =>{
        box.disabled = false;
        box.innerText="";
    })
}

const disabledBtns = () =>{
    boxes.forEach((box) =>{
        box.disabled = true;
    })
}
  
const showWinner= (winner) =>{
    if(winner==='O'){
        oW++;
    }else{
        xW++;
    }
    wcount.innerText=`O-${oW}    X-${xW}`;
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBtns();
}

const showDraw=() =>{
    msg.innerText=`Match is draw`;
    msgContainer.classList.remove("hide");
    disabledBtns();
}

const  checkWinner = ()=>{
    let count=0;
    boxes.forEach((box)=>{
        if (box.innerText!=="") {
            count++;
        }
    })
    if (count===9) {
        showDraw();
    }
    for(pettern of winPatterns){
        let pos1=boxes[pettern[0]].innerText;
        let pos2=boxes[pettern[1]].innerText;
        let pos3=boxes[pettern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
        
    }
}

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);