let grids = document.querySelector(".grids");
let child = grids.childNodes;
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
        board.push("");
    }
    
    for ( let i=0;i<board.length;i++)
    { 
    const lines = document.createElement("div");
    lines.classList.add("lines")
    board[i]=lines.innerHTML;
    grids.appendChild(lines);
    }

    return{
        board,
    };
})();

let game = (()=>{
    let player1 = playerPerson("Mike","X");
    let player2 = playerPerson("Robin","O");
    let currentplayer = player1;
    child.forEach((div)=>{
        div.addEventListener("click", function(){
            console.log("andi");
            div.innerHTML="X";
        });
    });
    
   
    
})();