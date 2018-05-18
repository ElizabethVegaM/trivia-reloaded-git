document.getElementById("enteredName").addEventListener("click", function(){
    var username = document.getElementById("username").value;
    document.getElementById("demo").innerHTML = "Bienvenida " + username;
    document.getElementById("gameplay").style.display='block';
});
    
document.getElementById("yesPlay").addEventListener("click", yesPlay);
function yesPlay() {
    document.getElementById("gameplay").style.display='none';
    document.getElementById('question1').innerHTML='<h3>¿Han egresado hombres en Laboratoria?</3>';
    document.getElementById("answer1").style.display='block';
};


document.getElementById("noPlay").addEventListener("click", noPlay);
function noPlay() {
    document.getElementById("buttons").style.display='none';
    document.getElementById("otroDia").innerHTML = '<h3>Juguemos otro día</h3>';
}