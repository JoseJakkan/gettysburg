let user = JSON.parse(sessionStorage.getItem("player1Key"));

document.getElementById("ganador2").innerHTML = user.player2.name;
