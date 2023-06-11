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

document.getElementById("start1").addEventListener("click", () => {
  let user1 = document.getElementById("getFirst");

  let user1value = user1.value;

  let user2 = document.getElementById("getSecond");

  let user2value = user2.value;

  if (user1value != "") {
    jugador.player1.name = user1value;
  }

  if (user2value != "") {
    jugador.player2.name = user2value;
  }

  sessionStorage.setItem("player1Key", JSON.stringify(jugador));

  window.location.assign("tablero.html");
});
