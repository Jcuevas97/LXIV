


var board=[[0,1,2,3],
           [0,1,2,3],
           [0,1,2,3],
           [0,1,2,3]];
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

function moveup(board, row, col){
    for (var i = row; i >= 1; i--) {
        if(board[row-1][col]==0){
            board[row-1][col]=board[row][col]
            board[row][col]=0
        }
    }
}
function moveallup(board){
    for (var row=1; row<board.length; row++){
        for (var col=0; col<board[row].length; col++){
            moveup(board, row, col);
        }
    }
}
function merge(board){
    for (var row=1; row<board.length; row++){
        for (var col=0; col<board[row].length; col++){
            if(board[row-1][col]==board[row][col]){
                board[row-1][col]=board[row-1][col]*2
                board[row][col]=0
            }
        }
    }
}
function handle(board,key){
    if (e.keyCode == '38') {
        // up arrow
        moveup(board);
        merge(board);
        moveup(board);
    }
    else if (e.keyCode == '40') {
        // down arrow
        board=rotateclock(board);
        board=rotateclock(board);
        moveup(board);
        merge(board);
        moveup(board);
        board=rotateclock(board);
        board=rotateclock(board);
    }
    else if (e.keyCode == '37') {
       // left arrow
        board=rotateclock(board);
        moveup(board);
        merge(board);
        moveup(board);
        board=rotateclock(board);
        board=rotateclock(board);
        board=rotateclock(board);
    }
    else if (e.keyCode == '39') {
       // right arrow
        board=rotateclock(board);
        board=rotateclock(board);
        board=rotateclock(board);
        moveup(board);
        merge(board);
        moveup(board);
        board=rotateclock(board);
    }
}

function addrand(board){
    
    
    
    
    
}
