


var board=[[0,1,2,3],
           [0,0,2,0],
           [0,1,0,3],
           [0,1,2,0]];
document.onkeyup = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
    }
    else if (e.keyCode == '39') {
       // right arrow
    }
}
function blankslate(){
    return [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
}
function transpose(board) {
     var tboard=blankslate();
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
         tboard[row][col]=board[col][row];
        }
    }
    return tboard;
}
function reverse(board) {
     var rboard=blankslate();
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
         rboard[row][col]=board[row][board[row].length-row-1];
        }
    }
    return rboard;
}
function rotateclock(board){
    return reverse(transpose(board));
}
function moveup(board,row,col){
    if();
    if else();
    
    
    
    
}