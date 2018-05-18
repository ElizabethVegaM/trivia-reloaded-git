document.getElementById("enteredName").addEventListener("click", function(){
    var username = document.getElementById("username").value;
    document.getElementById("demo").innerHTML = "Bienvenida " + username;
    document.getElementById("welcome").style.display='none';
    document.getElementById("gameplay").style.display='block';
});
    
document.getElementById("yesPlay").addEventListener("click", yesPlay);
function yesPlay() {
    document.getElementById("gameplay").style.display='none';
    document.getElementById('question1').innerHTML='<h3>¿Han egresado hombres en Laboratoria?</3>';
    document.getElementById("answer1").style.display='block';
    document.getElementById('question2').innerHTML='<h3>¿Hay Laboratoria en Concepción?</3>';
    document.getElementById("answer2").style.display='block';
};

function oneNo() {
    document.getElementById("rightAnswersText").innerHTML =
        document.getElementById("rightAnswersText").innerHTML +
        "<div class='answer'>" +
        "<p>No han egresado hombres</p>"
        "</div>";
        document.getElementById("questionOne").style.display='none';
        document.getElementById("questionTwo").style.display='block';
}
function oneYes() {
    document.getElementById("wrongAnswersText").innerHTML =
        document.getElementById("wrongAnswersText").innerHTML +
        "<div class='answer'>" +
        "<p>No han egresado hombres</p>"
        "</div>";
        document.getElementById("questionOne").style.display='none';
        document.getElementById("questionTwo").style.display='block';
}

function twoNo() {
    document.getElementById("rightAnswersText").innerHTML =
        document.getElementById("rightAnswersText").innerHTML +
        "<div class='answer'>" +
        "<p>No hay Laboratoria en Concepción</p>"
        "</div>";
        document.getElementById("questions").style.display='none';
        document.getElementById("end").style.display='block';
}
function twoYes() {
    document.getElementById("wrongAnswersText").innerHTML =
        document.getElementById("wrongAnswersText").innerHTML +
        "<div class='answer'>" +
        "<p>No hay Laboratoria en Concepción</p>"
        "</div>";
        document.getElementById("questions").style.display='none';
        document.getElementById("end").style.display='block';
}

function endGame() {
    document.getElementById("scoreBoard").style.display="block";
    document.getElementById("end").style.display='none';
}

document.getElementById("noPlay").addEventListener("click", noPlay);
function noPlay() {
    document.getElementById("buttons").style.display='none';
    document.getElementById("otroDia").innerHTML = '<h3>Juguemos otro día</h3>';
}