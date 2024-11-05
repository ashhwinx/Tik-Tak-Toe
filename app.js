let btnBox= document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let winmsg =document.querySelector(".winmsg");
let newBtn =document.querySelector(".new-btn");
let winConatiner =document.querySelector(".winner");


let turnX=true;

const winnerMessage = (winner)=>{
    winmsg.innerText= "Congratulatioins, Winner "+ winner;
    winConatiner.classList.remove("hide")
    newBtn.addEventListener("click",()=>{
        newGame()
    })
}
const newGame = () =>{
    let turnX=true;
    btnBox.forEach((bix)=>{
        bix.innerText="";
    })
    winConatiner.classList.add("hide")
    

}
const winingPat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [1,4,8],
    [2,4,6],
]

btnBox.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if (turnX){
            box.innerText="X";
            turnX=false;
        } else{
            box.innerText="O";
            turnX= true;
        }
        box.disabled=true;

        checkWinner()
    })
})

const checkWinner = ()=>{
    for (let pattern of winingPat){
        let pat0= btnBox[pattern[0]].innerText;
        let pat1= btnBox[pattern[1]].innerText;
        let pat2= btnBox[pattern[2]].innerText;

        if (pat0 != "" && pat1!="" && pat2!=""){
            if(pat0 == pat1 && pat1==pat2){
               winnerMessage(pat0)
               console.log("winner")
            }
        }
    }
}