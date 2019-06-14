 var dice1, dice2, points, sum = 0,
     flag1 = 0,
     flag2 = 0,
     whoseTurn = 1;



 document.querySelector("#func").addEventListener("click", function(ev) {
     ev.preventDefault();

     dice1 = Math.floor(1 + Math.random() * 6);
     dice2 = Math.floor(1 + Math.random() * 6);
     sum = dice1 + dice2;
     document.querySelector("#sum").value = sum;
    
     switch (dice1) {
         case 1:
             document.querySelector("#dice01").src = "js_game_of_crap/images/dice1.png";
             break;
         case 2:
             document.querySelector("#dice01").src = "../js_game_of_crap/images/dice2.png";
             break;
         case 3:
             document.querySelector("#dice01").src = "../js_game_of_crap/images/dice3.png";
             break;
         case 4:
             document.querySelector("#dice01").src = "../js_game_of_crap/images/dice4.png";
             break;
         case 5:
             document.querySelector("#dice01").src = "../js_game_of_crap/images/dice5.png";
             break;
         case 6:
             document.querySelector("#dice01").src = "../js_game_of_crap/images/dice6.png";


     }
     switch (dice2) {
         case 1:
             document.querySelector("#dice2").src = "../js_game_of_crap/images/dice1.png";
             break;
         case 2:
             document.querySelector("#dice2").src = "../js_game_of_crap/images/dice2.png";
             break;
         case 3:
             document.querySelector("#dice2").src = "../js_game_of_crap/images/dice3.png";
             break;
         case 4:
             document.querySelector("#dice2").src = "../js_game_of_crap/images/dice4.png";
             break;
         case 5:
             document.querySelector("#dice2").src = "../js_game_of_crap/images/dice5.png";
             break;
         case 6:
             document.querySelector("#dice2").src = "../js_game_of_crap/images/dice6.png";


     }





     if (whoseTurn == 1) {
         if (flag1 == 0) {
             if (sum == 7 || sum == 11) {
                 document.querySelector("#winner").innerText = whoseTurn;
                 document.querySelector(".vicmsg").style.display = "block";

             } else if (sum == 2 || sum == 3 || sum == 12) {
                 document.querySelector("#winner").innerHTML = "2";
                 document.querySelector(".vicmsg").style.display = "block";

             } else {
                 points = sum;
                 document.querySelector("#points1").value = points;

             }
             flag1 = 1;
         } else {
             if (sum == 7 || sum == 11) {
                 document.querySelector("#winner").innerText = "2";
                 document.querySelector(".vicmsg").style.display = "block";

             } else if (sum == points) {
                 document.querySelector("#winner").innerText = whoseTurn;
                 document.querySelector(".vicmsg").style.display = "block";

             }
         }
         whoseTurn = 2;

     } else if (whoseTurn == 2) {
         if (flag2 == 0) {
             if (sum == 7 || sum == 11) {
                 document.querySelector("#winner").innerText = whoseTurn;
                 document.querySelector(".vicmsg").style.display = "block";
                 document.querySelector("#func").disabled = true;

             } else if (sum == 2 || sum == 3 || sum == 12) {
                 document.querySelector("#winner").innerHTML = "1";
                 document.querySelector(".vicmsg").style.display = "block";
                 document.querySelector("#func").disabled = true;

             } else {
                 points = sum;
                 document.querySelector("#points2").value = points;

             }
             flag2 = 1;
         } else {
             if (sum == 7 || sum == 11) {
                 document.querySelector("#winner").innerText = "1";
                 document.querySelector(".vicmsg").style.display = "block";
                 document.querySelector("#func").disabled = true;


             } else if (sum == points) {
                 document.querySelector("#winner").innerText = whoseTurn;
                 document.querySelector(".vicmsg").style.display = "block";
                 document.querySelector("#func").disabled = true;


             }
         }
         whoseTurn = 1;
     }


     document.querySelector("#turn").innerText = whoseTurn;



 });

 document.querySelector("#reset").addEventListener("click", function() {
     flag1 = 0;
     flag2 = 0;
     whoseTurn = 1;
     document.querySelector("#points1").value = "";
     document.querySelector("#points2").value = "";
     document.querySelector("#sum").value = "";
     document.querySelector(".vicmsg").style.display = "none";
     document.querySelector("#turn").innerText = whoseTurn;
     document.querySelector("#func").disabled = false;
     document.querySelector("#dice01").src = "";
     document.querySelector("#dice2").src = "";

 });
