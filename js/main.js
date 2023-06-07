//Crear Objetos

const jugador = {
  player1: {
    name: "Ulysses S. Grant",
    side: "Union",
  },
  player2: {
    name: "Robert E. Lee",
    side: "Dixie",
  },
};

//Storage

document.getElementById("start").addEventListener("click", () => {
  let user1 = document.getElementById("getFirst");
  let side1 = document.getElementById("firstSide");

  let user1value = user1.value;
  let side1value = side1.value;

  let user2 = document.getElementById("getSecond");
  let side2 = document.getElementById("secondSide");

  let user2value = user2.value;
  let side2value = side2.value;

  if (user1value != "" && user2value != "") {
    jugador.player1.name = user1value;
    jugador.player2.name = user2value;
    jugador.player1.side = side1value;
    jugador.player2.side = side2value;
  }

  sessionStorage.setItem("player1Key", JSON.stringify(jugador));

  window.location.assign("tablero.html");
});

//
