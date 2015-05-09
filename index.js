//display(blankslate());

document.onkeyup = checkKey;


$(document).ready(function() {
 $("#startbutton").click(function() {
    console.log("clicked");
    $("#gameStart").html("true");
    display(blankslate());
 });   
});

function checkKey(e) {
    if ($("#gameStart").text() == "false") {
        return;
    }
    var sound = document.getElementById("keypresssound");
                            sound.loop = false;
                            sound.src = "./audioloops/press.wav";
                            sound.play();
    console.log(e.keyCode);
    e = e || window.event;
    var before = getBoard();
    console.log("Before:");
    console.log(before);
    var after=handle(before,e.keyCode);
    display(after);
    console.log("AFter:");
    console.log(after);
    console.log("GetBoard after:");
    console.log(getBoard());
   
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
         rboard[row][col]=board[row][board[row].length-col-1];
        }
    }
    return rboard;
}
function rotateclock(board){
    return reverse(transpose(board));
}

function moveup(board, row, col){
    for (var i = row; i >= 1; i--) {
        if(board[i-1][col]==0 && board[i][col] != 0){
            board[i-1][col]=board[i][col]
            board[i][col]=0
        }
    }
}
function moveallup(board){
    for (var col=0; col<board[0].length; col++){
        for (var row=1; row<board.length; row++){
            moveup(board, row, col);
        }
    }
}
function merge(board){
    for (var col=0; col<board[0].length; col++){
        for (var row=1; row<board.length; row++){
            if(board[row-1][col]==board[row][col]){
                board[row-1][col]=board[row-1][col]*2;
                board[row][col]=0;
            }
        }
    }
}

// boad = some nonesense
// handle(board, UP)
// print(board)
//
//
function handle(board,key){
    if (key == '65') {
        // up arrow
        moveallup(board);
        merge(board);
        moveallup(board);
    }
    else if (key == '68') {
        // down arrow
        board=rotateclock(board);
        board=rotateclock(board);
        moveallup(board);
        merge(board);
        moveallup(board);
        board=rotateclock(board);
        board=rotateclock(board);
    }
    else if (key == '87') {
       // left arrow
        board=rotateclock(board);
        moveallup(board);
        merge(board);
        moveallup(board);
        board=rotateclock(board);
        board=rotateclock(board);
        board=rotateclock(board);
    }
    else if (key == '83') {
       // right arrow
        board=rotateclock(board);
        board=rotateclock(board);
        board=rotateclock(board);
        moveallup(board);
        merge(board);
        moveallup(board);
        board=rotateclock(board);
    }
    else{
        return;
    }
    addrand(board);
    return board;
}

function addrand(board){
    var count= 0;
    for (var row=0; row<board.length; row++){
        for (var col=0; col<board[row].length; col++){
    if(board[row][col]==0){
        count++;
    }
    
    
    
        }
    }
    if (count==0){
        return;
    }
    var thenum= Math.floor((Math.random()*count)+1);
    count=0;
    for (var row=0; row<board.length; row++){
        for (var col=0; col<board[row].length; col++){
             if(board[row][col]==0){
        count++;
        if(count==thenum){
            board[row][col]=Math.floor(Math.random()*2)+1;
            return;
        }
    }
        }
    }
    
}




