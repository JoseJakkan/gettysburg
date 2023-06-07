let user = JSON.parse(sessionStorage.getItem("player1Key"));

document.getElementById("jugador1").innerHTML = user.player1.name;
document.getElementById("jugador2").innerHTML = user.player2.name;
document.getElementById("jugador1m").innerHTML = user.player1.name;
document.getElementById("jugador2m").innerHTML = user.player2.name;
