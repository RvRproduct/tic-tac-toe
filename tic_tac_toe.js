// Roberto Reynoso
// JavaScript
// Tic Tac Toe, using lists, loops, if statments, functions accordingly.

// functions and variables that will return
// the result
let player_x_message = "Player X WON!"
let player_0_message = "Player 0 WON!"
let tie = "Tied Match"

function PlayerX(){
    document.getElementById('print')
        .innerHTML = player_x_message
}

function Player0(){
    document.getElementById('print')
        .innerHTML = player_0_message
}

// Checks the placements of the X's and 0's
// Then will determine a winner
function game(){
    // spots in the game
    let spots = ['','','','','','','','','']
    spots[0] = document.getElementById("spots0").value;
    spots[1] = document.getElementById("spots1").value;
    spots[2] = document.getElementById("spots2").value;
    spots[3] = document.getElementById("spots3").value;
    spots[4] = document.getElementById("spots4").value;
    spots[5] = document.getElementById("spots5").value;
    spots[6] = document.getElementById("spots6").value;
    spots[7] = document.getElementById("spots7").value;
    spots[8] = document.getElementById("spots8").value;

    // player X
    if ((spots[0] == 'x' || spots[0] == 'X') && (spots[1] == 'x' ||
    spots[1] == 'X') && (spots[2] == 'x' || spots[2] == 'X')){
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 1) && (i != 2)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
        }
    }
    else if ((spots[0] == 'x' || spots[0] == 'X') && (spots[3] == 'x' ||
    spots[3] == 'X') && (spots[6] == 'x' || spots[6] == 'X')) {
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 3) && (i != 6)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
    
        }

    }

    else if ((spots[6] == 'x' || spots[6] == 'X') && (spots[7] == 'x' ||
    spots[7] == 'X') && (spots[8] == 'x' || spots[8] == 'X')) {
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 6) && (i != 7) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
    
        }

    }

    else if ((spots[2] == 'x' || spots[2] == 'X') && (spots[5] == 'x' ||
    spots[5] == 'X') && (spots[8] == 'x' || spots[8] == 'X')) {
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 2) && (i != 5) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
    
        }

    }

    else if ((spots[0] == 'x' || spots[0] == 'X') && (spots[4] == 'x' ||
    spots[4] == 'X') && (spots[8] == 'x' || spots[8] == 'X')) {
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
    
        }

    }

    else if ((spots[2] == 'x' || spots[2] == 'X') && (spots[4] == 'x' ||
    spots[4] == 'X') && (spots[6] == 'x' || spots[6] == 'X')) {
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
    
        }

    }

    else if ((spots[1] == 'x' || spots[1] == 'X') && (spots[4] == 'x' ||
    spots[4] == 'X') && (spots[7] == 'x' || spots[7] == 'X')) {
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
    
        }

    }

    else if ((spots[3] == 'x' || spots[3] == 'X') && (spots[4] == 'x' ||
    spots[4] == 'X') && (spots[5] == 'x' || spots[5] == 'X')) {
        PlayerX()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_x_message)
                {break;}
            }
    
        }

    }

// player 0
    else if ((spots[0] == '0') && (spots[1] == '0') && (spots[2] == '0')){
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 1) && (i != 2)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
        }
    }

    else if ((spots[0] == '0') && (spots[3] == '0') && (spots[6] == '0')) {
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 3) && (i != 6)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
    
        }

    }

    else if ((spots[6] == '0') && (spots[7] == '0') && (spots[8] == '0')) {
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 6) && (i != 7) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
    
        }

    }

    else if ((spots[2] == '0') && (spots[5] == '0') && (spots[8] == '0')) {
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 2) && (i != 5) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
    
        }

    }

    else if ((spots[0] == '0') && (spots[4] == '0') && (spots[8] == '0')) {
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
    
        }

    }

    else if ((spots[2] == '0') && (spots[4] == '0') && (spots[6] == '0')) {
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
    
        }

    }

    else if ((spots[1] == '0') && (spots[4] == '0') && (spots[7] == '0')) {
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
    
        }

    }

    else if ((spots[3] == '0') && (spots[4] == '0') && (spots[5] == '0')) {
        Player0()
        for (let i = 0; i < spots.length; i++){
            if ((i != 0) && (i != 4) && (i != 8)){
                document.getElementById(`spots${i}`).disabled = true;

                window.alert(player_0_message)
                {break;}
            }
    
        }

    }

    // Tie?
    else if ((spots[0] == 'X' || spots[0] == '0') && (spots[1] == 'X' || spots[1] == '0')
    && (spots[2] == 'X' || spots[2] == '0') && (spots[3] == 'X' || spots[3] == '0') && 
    (spots[4] == 'X' || spots[4] == '0') && (spots[5] == 'X' || spots[5] == '0') &&
    (spots[6] == 'X' || spots[6] == '0') && (spots[7] == 'X' || spots[7] == '0') && 
    (spots[8] == 'X' || spots[8] == '0')) {
        document.getElementById('print')
            .innerHTML = tie;
        window.alert(tie);
    }

    else if ((spots[0] == 'x' || spots[0] == '0') && (spots[1] == 'x' || spots[1] == '0')
    && (spots[2] == 'x' || spots[2] == '0') && (spots[3] == 'x' || spots[3] == '0') && 
    (spots[4] == 'x' || spots[4] == '0') && (spots[5] == 'x' || spots[5] == '0') &&
    (spots[6] == 'x' || spots[6] == '0') && (spots[7] == 'x' || spots[7] == '0') && 
    (spots[8] == 'x' || spots[8] == '0')) {
        document.getElementById('print')
            .innerHTML = tie;
        window.alert(tie);
    }
    else {

        // result
        if (notice == 1) {
            document.getElementById('print')
                .innerHTML = "Player X's Turn";
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0's Turn"
        }
    }
}

// reset
function game_2() {
    location.reload();
    // spots in the game
    let spots = ['','','','','','','','','']
    spots[0] = document.getElementById("spots0").value;
    spots[1] = document.getElementById("spots1").value;
    spots[2] = document.getElementById("spots2").value;
    spots[3] = document.getElementById("spots3").value;
    spots[4] = document.getElementById("spots4").value;
    spots[5] = document.getElementById("spots5").value;
    spots[6] = document.getElementById("spots6").value;
    spots[7] = document.getElementById("spots7").value;
    spots[8] = document.getElementById("spots8").value;
    for (let i = 0; i < spots.length; i++){
        document.getElementById(`spots${i}`).value = '';
    }
}
  
// tracks moves
notice = 1;
function game_3() {
    if (notice == 1) {
        document.getElementById(`spots${0}`).value = "X";
        document.getElementById(`spots${0}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${0}`).value = "0";
        document.getElementById(`spots${0}`).disabled = true;
        notice = 1;
    }
}
  
function game_4() {
    if (notice == 1) {
        document.getElementById(`spots${1}`).value = "X";
        document.getElementById(`spots${1}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${1}`).value = "0";
        document.getElementById(`spots${1}`).disabled = true;
        notice = 1;
    }
}
  
function game_5() {
    if (notice == 1) {
        document.getElementById(`spots${2}`).value = "X";
        document.getElementById(`spots${2}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${2}`).value = "0";
        document.getElementById(`spots${2}`).disabled = true;
        notice = 1;
    }
}
  
function game_6() {
    if (notice == 1) {
        document.getElementById(`spots${3}`).value = "X";
        document.getElementById(`spots${3}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${3}`).value = "0";
        document.getElementById(`spots${3}`).disabled = true;
        notice = 1;
    }
}
  
function game_7() {
    if (notice == 1) {
        document.getElementById(`spots${4}`).value = "X";
        document.getElementById(`spots${4}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${4}`).value = "0";
        document.getElementById(`spots${4}`).disabled = true;
        notice = 1;
    }
}
  
function game_8() {
    if (notice == 1) {
        document.getElementById(`spots${5}`).value = "X";
        document.getElementById(`spots${5}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${5}`).value = "0";
        document.getElementById(`spots${5}`).disabled = true;
        notice = 1;
    }
}
  
function game_9() {
    if (notice == 1) {
        document.getElementById(`spots${6}`).value = "X";
        document.getElementById(`spots${6}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${6}`).value = "0";
        document.getElementById(`spots${6}`).disabled = true;
        notice = 1;
    }
}
  
function game_10() {
    if (notice == 1) {
        document.getElementById(`spots${7}`).value = "X";
        document.getElementById(`spots${7}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${7}`).value = "0";
        document.getElementById(`spots${7}`).disabled = true;
        notice = 1;
    }
}
  
function game_11() {
    if (notice == 1) {
        document.getElementById(`spots${8}`).value = "X";
        document.getElementById(`spots${8}`).disabled = true;
        notice = 0;
    }
    else {
        document.getElementById(`spots${8}`).value = "0";
        document.getElementById(`spots${8}`).disabled = true;
        notice = 1;
    }
}