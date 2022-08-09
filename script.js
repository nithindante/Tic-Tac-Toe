let grids = document.querySelector(".grids");                           //calls the grids class from HTML   
let child = grids.childNodes;                                           // a node list of children is assigned to child
let lines = document.querySelectorAll(".lines");                        //calls the array of lines div 
let XYaxis = document.querySelector(".XYaxis");
let playerPerson = function (name,symbol) {                             // factory function of playerperson to define each player
    return{
        name,
        symbol,
    };
}
let gameBoard = (function () {
    let board=[];       
    for(let i=0;i<9;i++)                                                // creates board array with 9 empty elements
    {
        board.push("");
       
    }
    for (let i=0;i<board.length;i++)                                    // creates a for loop to iterate the board array
    { 
    let lines = document.createElement("div");                          // creates a div and assigns it to lines
    lines.classList.add("lines")                                        // adds class called lines
    lines.setAttribute("id","square"+ i)                                // sets an id attribute of square i
    grids.appendChild(lines);                                           // add the lines as children of grids
    board[i]=lines;                                                           
    }
    function setCell(index,symbol)                                      // calls a function to set board array elements each to selected players symbol, checks empty or not and then sets the elemens
    {  
        if((board[index-1].innerHTML===""))
        {
            board[index-1].innerHTML=game.currentplayer.symbol;
            return true;
        }
        else
        return false;
    }
    return{
        board,
        lines,
        setCell,
    };
})();

let game = (()=>{
    let player1 = playerPerson("Player1","X");                               
    let player2 = playerPerson("Player2","O");
    let currentplayer = player1;
    let switchPlayer = function()                                   // to switch players 
    {   
        if(currentplayer===player1)
        {
         currentplayer=player2 ;
        }
        else
        {
            currentplayer= player1;
        }
    }
    let button = document.querySelector(".button")                 // called the button class that represents Restart button
    button.addEventListener("click",function (e) {
       for(let i=0;i<gameBoard.board.length;i++)                   // calls a for loop to iterate the board array to set the elements to empty to replicate the restart effect
       {
        gameBoard.board[i].innerHTML="";
        currentplayer=player1;
       }
       if(XYaxis.children.length>=2)                               // checks whether XYaxis has 2 children nodes or not 
       {
       XYaxis.removeChild(XYaxis.lastElementChild);                //removes the last child node of the XYaxis parent div 
       document.getElementsByClassName("grids")[0].style.filter="blur(0px)";
       }
    })
    let win = function(symbol)                                      // function to check whether a win happened in the array 
    {
        if((document.querySelector("#square0").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square1").textContent.includes(game.currentplayer.symbol))&&(document.querySelector("#square2").textContent.includes(game.currentplayer.symbol)))
        {
            return true;
        }
        else if ((document.querySelector("#square0").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square4").textContent.includes(game.currentplayer.symbol))&&(document.querySelector("#square8").textContent.includes(game.currentplayer.symbol)))
        {
            return true;
        }
        else if ((document.querySelector("#square0").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square3").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square6").textContent.includes(currentplayer.symbol)))
        {
            return true;
        }
        else if ((document.querySelector("#square1").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square4").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square7").textContent.includes(currentplayer.symbol)))
        {
            return true;
        }
        else if ((document.querySelector("#square2").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square5").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square8").textContent.includes(currentplayer.symbol)))
        {
            return true;
        }
        else if ((document.querySelector("#square3").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square4").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square5").textContent.includes(currentplayer.symbol)))
        {
            return true;
        }
        else if ((document.querySelector("#square6").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square7").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square8").textContent.includes(currentplayer.symbol)))
        {
            return true;
        }
        else if ((document.querySelector("#square2").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square4").textContent.includes(currentplayer.symbol))&&(document.querySelector("#square6").textContent.includes(currentplayer.symbol)))
        {
            return true;
        }
    } 
    let draw = function(symbol)                                 // function to check whether a draw happened 
    {
        if(((document.querySelector("#square0").textContent.includes("O"))||(document.querySelector("#square0").textContent.includes("X")))&&((document.querySelector("#square1").textContent.includes("O"))||(document.querySelector("#square1").textContent.includes("X")))&&((document.querySelector("#square2").textContent.includes("O"))||(document.querySelector("#square2").textContent.includes("X")))&&((document.querySelector("#square3").textContent.includes("O"))||(document.querySelector("#square3").textContent.includes("X")))&&((document.querySelector("#square4").textContent.includes("O"))||(document.querySelector("#square4").textContent.includes("X")))&&((document.querySelector("#square5").textContent.includes("O"))||(document.querySelector("#square5").textContent.includes("X")))&&((document.querySelector("#square6").textContent.includes("O"))||(document.querySelector("#square6").textContent.includes("X")))&&((document.querySelector("#square7").textContent.includes("O"))||(document.querySelector("#square7").textContent.includes("X")))&&((document.querySelector("#square8").textContent.includes("O"))||(document.querySelector("#square8").textContent.includes("X"))))
        {
            return true;
        }
    }
    child.forEach((div,index)=>{                                // adds a foreach loop to iterate through child 
        div.addEventListener("click", function () {             // adds a event listner "click" on div
            if(gameBoard.setCell(index,currentplayer.symbol))   // calls function setCell() to check whether the given array is empty and proceeds further if its true 
            {
                console.log("1");
                div.textContent=currentplayer.symbol;           // update the respective div with the currentplayer symbol
                if(win(currentplayer.symbol))                   // checks for win 
                {                    
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("newDiv");
                    XYaxis.appendChild(newDiv);
                    newDiv.innerHTML=`${currentplayer.name} wins!`;
                    document.getElementsByClassName("grids")[0].style.filter="blur(15px)";
                }
                else if(draw(currentplayer.symbol))             //checks for Draw 
                {
                    console.log("Draw");
                    let newDiv = document.createElement("div");
                    newDiv.classList.add("newDiv");
                    XYaxis.appendChild(newDiv);
                    newDiv.innerHTML="Its a Draw!";
                    document.getElementsByClassName("grids")[0].style.filter="blur(15px)";
                }
                switchPlayer();
            }
        });
    });    
    return{
        player1,
        player2,
        switchPlayer,
        currentplayer,
        win,
        draw,
    };
})();