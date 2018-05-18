document.getElementById("enteredName").addEventListener("click", function(){
    var username = document.getElementById("username").value;
    document.getElementById("demo").innerHTML = "Bienvenida " + username;

function yesPlay() {
    
}

document.getElementById("yesPlay").addEventListener("click", yesPlay);
function yesPlay() {
    document.getElementById("gameplay").style.display='none';
    document.getElementById('question1').innerHTML='<h3>¿Han egresado hombres en Laboratoria?</3>';
    document.getElementById("answer1").style.display='block';
}


document.getElementById("noPlay").addEventListener("click", noPlay);
function noPlay() {
    document.getElementById("buttons").style.display='none';
    document.getElementById("otroDia").innerHTML = '<h3>Juguemos otro día</h3>';
}




/*
    var wantToPlay = prompt("¿quieres jugar? s/n");
    if (wantToPlay.toLowerCase() == "s") {
        var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }

        var answer2 = prompt("¿hay laboratoria en concepción? s/n");
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
    } else {
        document.getElementById("warningMessage").innerText = "Bueno Chao";
    }
*/
