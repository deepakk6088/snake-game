const board=document.querySelector(".board");
const boardHeight=30;
const boardWidth=30;

const cols=Math.floor(board.clientWidth/boardWidth)
const rows=Math.floor(board.clientHeight/boardHeight)
for (let i=0;i< cols*rows ;i++){
    const block=document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);

}