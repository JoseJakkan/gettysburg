let jugador = JSON.parse(sessionStorage.getItem(PLAYER1_KEY));

document.getElementById("ganador2").innerHTML = jugador.winner;
