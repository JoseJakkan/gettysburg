let jugador = JSON.parse(sessionStorage.getItem(PLAYER1_KEY));

document.getElementById("ganador1").innerHTML = jugador.winner;