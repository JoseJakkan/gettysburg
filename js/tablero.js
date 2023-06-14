// Captura de nombre de usuario

let jugador = JSON.parse(sessionStorage.getItem("player1Key"));

document.getElementById("jugador1").innerHTML = jugador.player1.name;
document.getElementById("jugador2").innerHTML = jugador.player2.name;

//Funcionamiento de juego

turno = true;

let cuadricula = document.getElementsByClassName("casilla");

for (const celda of cuadricula) {
  celda.addEventListener("click", () => {
    if (turno) {
      if (!celda.classList.contains("dixie")) {
        document.getElementById("turno2").style.backgroundColor = "blue";
        document.getElementById("turno1").style.backgroundColor = "grey";
        celda.classList.add("union");
      }
    } else {
      if (!celda.classList.contains("union")) {
        document.getElementById("turno2").style.backgroundColor = "grey";
        document.getElementById("turno1").style.backgroundColor = "blue";
        celda.classList.add("dixie");
      }
    }

    turno = !turno;
    victory();
  });
}

const victory = () => {
  //Fila 1
  if (
    cuadricula[0].classList.contains("union") &&
    cuadricula[1].classList.contains("union") &&
    cuadricula[2].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));

    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[0].classList.contains("dixie") &&
    cuadricula[1].classList.contains("dixie") &&
    cuadricula[2].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player2.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  }
  //fila 2
  if (
    cuadricula[3].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[5].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[3].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[5].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  }
  //fila 3
  if (
    cuadricula[6].classList.contains("union") &&
    cuadricula[7].classList.contains("union") &&
    cuadricula[8].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[6].classList.contains("dixie") &&
    cuadricula[7].classList.contains("dixie") &&
    cuadricula[8].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  }
  //columna 1
  if (
    cuadricula[0].classList.contains("union") &&
    cuadricula[3].classList.contains("union") &&
    cuadricula[6].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[0].classList.contains("dixie") &&
    cuadricula[3].classList.contains("dixie") &&
    cuadricula[6].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  }
  //columna 2
  if (
    cuadricula[1].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[7].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[1].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[7].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  }
  //columna 3
  if (
    cuadricula[2].classList.contains("union") &&
    cuadricula[5].classList.contains("union") &&
    cuadricula[8].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[2].classList.contains("dixie") &&
    cuadricula[5].classList.contains("dixie") &&
    cuadricula[8].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  }
  //diagonal 1
  if (
    cuadricula[0].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[8].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[0].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[8].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  }
  //diagonal 2
  if (
    cuadricula[2].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[6].classList.contains("union")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[2].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[6].classList.contains("dixie")
  ) {
    jugador.winner = jugador.player1.name;
    sessionStorage.setItem(PLAYER1_KEY, JSON.stringify(jugador));
    window.location.assign("ganadorDixie.html");
  } else if (document.querySelectorAll(".union, .dixie").length == 9) {
    window.location.assign("empate.html");
  }
};
