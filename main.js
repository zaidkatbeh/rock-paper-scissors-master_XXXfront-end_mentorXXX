let game=document.querySelector(".game");
let result=document.querySelector(".scoreres");
    result.textContent= 0;
    // the triangle
    let mainamage=document.createElement("img");
    mainamage.src="./images/bg-triangle.svg";
    
    mainamage.className="mainpic";

    // the paper
    let paper=document.createElement("div");
    paper.className="paper";
    let paperimage= document.createElement("img");
    paperimage.setAttribute("src","./images/icon-paper.svg")
    paper.append(paperimage);
    // the rock
    let rock=document.createElement("div");
    rock.className="rock";
    let rockimage= document.createElement("img");
    rockimage.setAttribute("src","./images/icon-rock.svg")
    rock.appendChild(rockimage);
    // the scissors
    let scissors=document.createElement("div");
    scissors.className="scissors";
    let scissorsimage= document.createElement("img");
    scissorsimage.setAttribute("src","./images/icon-scissors.svg");
    scissors.appendChild(scissorsimage);

    //add the rock,paper and the scissors
    game.appendChild(paper);
    game.appendChild(rock);
    game.appendChild(scissors);
    game.appendChild(mainamage);
    //////////////////////////////////////
    // add pick function
    function resultfunction(picked){
        game.innerHTML="";
        let you=document.createElement("div");
        let youText=document.createElement("span");
        youText.textContent="you piecked"
        youText.style.fontSize="30px";
        youText.style.color="white";
        youText.style.marginLeft="-40px";
        youText.style.display="block";
        you.appendChild(youText);
        you.style.float="left";
        
        
        if(picked=="rock")
        {
            let yourpick=rock.cloneNode(true);
            yourpick.style.left="0%";
            yourpick.style.bottom="40%";
            yourpick.style.top="unset";
            you.appendChild(yourpick);
        }
        else if(picked=="scissors")
        {
            let yourpick=scissors.cloneNode(true);
            yourpick.style.left="0%";
            yourpick.style.bottom="40%";
            yourpick.style.right="unset";
            yourpick.style.top="unset";
            you.appendChild(yourpick);
        }
        else if(picked=="paper")
        {
            let yourpick=paper.cloneNode(true);
            yourpick.style.left="0%"
            yourpick.style.top="unset";
            yourpick.style.bottom="40%"
            you.appendChild(yourpick);
        }
        let bot=document.createElement("div");
        let bottext=document.createElement("span");
        bottext.style.display="block";
        bottext.textContent="the house piecked"
        bottext.style.fontSize="30px";
        bottext.style.color="white";
        bottext.style.marginRight="-30px"
        bot.appendChild(bottext);
        bot.style.float="right";
        let x=Math.floor(Math.random() * 10)%3;
        let botpick;
        if(x==0)
            {
                botpick=paper.cloneNode(true);
                botpick.style.left="80%"
                botpick.style.top="unset";
                botpick.style.bottom="40%"
                
            }
        else if(x==1)
            {
                botpick=rock.cloneNode(true);
                botpick.style.left="80%"
                botpick.style.top="unset";
                botpick.style.bottom="40%"
            }
        else if(x==2)
            {
                botpick=scissors.cloneNode(true);
                botpick.style.left="80%";
                botpick.style.right="unset";
                botpick.style.top="unset";
                botpick.style.bottom="40%"
            }
        bot.appendChild(botpick);
        game.appendChild(you);
        game.appendChild(bot);
        you.className="youmeta";

        
        let result=document.createElement("div");
        result.className="result";
        let resultText=document.createElement("span");
            resultText.appendChild( document.createTextNode(showresult(x,picked)));
        let playAgain=document.createElement("button");
        playAgain.addEventListener("click",function(){
            startgame();
        })
        playAgain.textContent="play again";
        result.style.position="absolute";
        result.appendChild(resultText);
        result.appendChild(playAgain);
        game.appendChild(result);
    }
    function showresult(bot,you){
        let res;
        if(bot==0)
            {
                if(you=="rock")
                res= "you lose";
                else if(you=="scissors")
                res= "you win";
                else if(you=="paper")
                res= "tie";
            }
        else if(bot==1)
            {
                if(you=="rock")
                res= "tie";
                else if(you=="scissors")
                res= "you lose";
                else if(you=="paper")
                res= "win";
            }
        else if(bot==2)
            {
                if(you=="rock")
                res= "you win";
                else if(you=="scissors")
                res= "tie";
                else if(you=="paper")
                res= "you lose";
            }
            if(res=="you win")
            {
                result.textContent++;
            }
            else if(res=="you lose")
            {
                result.textContent--;
            }
            return res;
    }
    
    rock.addEventListener("click",function(){
        resultfunction("rock");
    });
    paper.addEventListener("click",function(){
        resultfunction("paper");
    });
    scissors.addEventListener("click",function(){
        resultfunction("scissors");
    })



    // pop up the rules 
function open_rules(){
    document.querySelector(".rules").style.visibility="visible";
    // create a black color behind the window
    let x=document.createElement("div");
    document.body.appendChild(x);
    x.style.width="100%";
    x.id="blackwindow";
    x.style.height="100%";
    x.style.top="0%";
    x.style.position="absolute";
    x.style.backgroundColor="rgba(0, 0, 0,0.5)";
}
    // hide the rules 
function closerules(){
    document.querySelector(".rules").style.visibility="hidden";
    let x=document.getElementById("blackwindow");
    x.remove();
}
     //add the rock,paper and the scissors on start again
function startgame(){
    game.innerHTML="";
    game.appendChild(paper);
    game.appendChild(rock);
    game.appendChild(scissors);
    game.appendChild(mainamage);
}



