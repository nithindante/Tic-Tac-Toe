let grids = document.querySelector(".grids");
let child = grids.childNodes;
let lines = document.querySelectorAll(".lines");
let playerPerson = function (name,symbol) {
    return{
        name,
        symbol,
    };
}

let gameBoard = (function () {
    let board=[];
    for(let i=0;i<9;i++)
    {
        board.push("X");
    }
    console.log(board);
    for (let i=0;i<board.length;i++)
    { 
    let lines = document.createElement("div");
    lines.classList.add("lines")
    grids.appendChild(lines);
    board[i]=lines;
    }

    function setCall(index,symbol) 
    {  
        if((board[index-1].innerHTML===""))
        {
            board[index-1].innerHTML=game.currentplayer.symbol;
            return true;
        }
        else
        return false;
    }
    function win()
    {

    }
    function draw()
    {

    }

    return{
        board,
        lines,
        setCall,
        win,
        draw,
    };
})();

let game = (()=>{
    let player1 = playerPerson("Mike","X");
    let player2 = playerPerson("Robin","O");
    let currentplayer = player1;
    let switchPlayer = function(){   
        if(currentplayer===player1)
        {
         currentplayer=player2 ;
         return currentplayer;
        }
        else
        {
            currentplayer= player1;
            return currentplayer;
        }
    }
    function win () {
        console.log(gameBoard.board)
      return true;
    }
 
    let draw = function () {
        
    }
    child.forEach((div,index)=>{
        div.addEventListener("click", function () { 
            if(gameBoard.setCall(index,currentplayer.symbol))
            {
                div.innerHTML=currentplayer.symbol;
                win();
                {

                }
                if(draw)
                {

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