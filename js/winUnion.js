let user = JSON.parse(sessionStorage.getItem("player1Key"));

document.getElementById("ganador1").innerHTML = user.player1.name;
