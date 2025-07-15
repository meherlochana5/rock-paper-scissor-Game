let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
const drawgame=()=>{
    console.log("Game was Draw");
     mesg.innerText="Game was Draw.Play Again!";
     mesg.style.backgroundColor="black";
}
const userscoree=document.querySelector("#user-score");
const computerscore=document.querySelector("#comp-score");
const mesg=document.querySelector("#mesg");
const showwinner=(userwin,userchoice,compterchoice)=>{
    if(userwin){
        userscore++;
        userscoree.innerText=userscore;
        console.log("You win");
        
        mesg.innerText=`You win! ${userchoice} beats Computer choice  ${compterchoice}`;
        mesg.style.backgroundColor="green";
       
    }else{
        compscore++;
     computerscore.innerText=compscore;
       console.log("You lose"); 
       
       mesg.innerText=`You lose! ${compterchoice} beats Your choice ${userchoice}`;
       mesg.style.backgroundColor="red";
    }
}
const generatecompterchoice=()=>{
    const options=["rock","paper","scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const playgame=(userchoice)=>{
    console.log("Your choice was clicked", userchoice);
    const compterchoice=generatecompterchoice();
    console.log("Computer choice was clicked", compterchoice);
    if(userchoice===compterchoice){
        //Draw
         drawgame();
    }else {
        let userwin=true;
        if(userchoice==="rock"){
           userwin=compterchoice==="scissor"?true:false;
        }else if(userchoice==="paper"){
            userwin=compterchoice==="rock"?true:false;
        }else{
            userwin=compterchoice==="paper"?true:false;
        }
showwinner(userwin,userchoice,compterchoice);
    }
    
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id"); 
        playgame(userchoice) 
    });
});
