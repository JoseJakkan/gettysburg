// Captura de nombre de usuario

let user = JSON.parse(sessionStorage.getItem("player1Key"));

document.getElementById("jugador1").innerHTML = user.player1.name;
document.getElementById("jugador2").innerHTML = user.player2.name;

//Funcionamiento de juego

turno = true;

let cuadricula = document.getElementsByClassName("casilla");

for (const celda of cuadricula) {
  celda.addEventListener("click", () => {
    if (turno) {
      if (!celda.classList.contains("dixie")) {
        celda.classList.add("union");
      }
    } else {
      if (!celda.classList.contains("union")) {
        celda.classList.add("dixie");
      }
    }

    turno = !turno;
    // victory();
    victoria();
  });
}

let full = 9;
let i = 0;
let j = 0;
const victoria = () => {
  //filas
  for (let j = 0; j < cuadricula.length; j++) {
    if (
      cuadricula[j].classList.contains("union") &&
      cuadricula[j + 1].classList.contains("union") &&
      cuadricula[j + 2].classList.contains("union")
    ) {
      const callback = () => {
        window.location.assign("ganadorUnion.html");
      };
      setTimeout(callback, 2000);
    } else if (
      cuadricula[j].classList.contains("dixie") &&
      cuadricula[j + 1].classList.contains("dixie") &&
      cuadricula[j + 2].classList.contains("dixie")
    ) {
      const callback = () => {
        window.location.assign("ganadorDixie.html");
      };
      setTimeout(callback, 2000);
    }
  }

  //columnas

  for (let j = 0; j < cuadricula.length; j++) {
    if (
      cuadricula[j].classList.contains("union") &&
      cuadricula[j + 3].classList.contains("union") &&
      cuadricula[j + 6].classList.contains("union")
    ) {
      const callback = () => {
        window.location.assign("ganadorUnion.html");
      };
      setTimeout(callback, 2000);
    } else if (
      cuadricula[j].classList.contains("dixie") &&
      cuadricula[j + 3].classList.contains("dixie") &&
      cuadricula[j + 6].classList.contains("dixie")
    ) {
      const callback = () => {
        window.location.assign("ganadorDixie.html");
      };
      setTimeout(callback, 2000);
    }
  }

  //diagonal 1

  if (
    cuadricula[j].classList.contains("union") &&
    cuadricula[j + 4].classList.contains("union") &&
    cuadricula[j + 8].classList.contains("union")
  ) {
    const callback = () => {
      window.location.assign("ganadorUnion.html");
    };
    setTimeout(callback, 2000);
  } else if (
    cuadricula[j].classList.contains("dixie") &&
    cuadricula[j + 4].classList.contains("dixie") &&
    cuadricula[j + 8].classList.contains("dixie")
  ) {
    const callback = () => {
      window.location.assign("ganadorDixie.html");
    };
    setTimeout(callback, 2000);
  }

  //diagonal 2

  if (
    cuadricula[j].classList.contains("union") &&
    cuadricula[j + 2].classList.contains("union") &&
    cuadricula[j + 4].classList.contains("union")
  ) {
    const callback = () => {
      window.location.assign("ganadorUnion.html");
    };
    setTimeout(callback, 2000);
  } else if (
    cuadricula[j].classList.contains("dixie") &&
    cuadricula[j + 2].classList.contains("dixie") &&
    cuadricula[j + 4].classList.contains("dixie")
  ) {
    const callback = () => {
      window.location.assign("ganadorDixie.html");
    };
    setTimeout(callback, 2000);
  }
};

/* const victory = () => {
  //Fila 1
  if (
    cuadricula[0].classList.contains("union") &&
    cuadricula[1].classList.contains("union") &&
    cuadricula[2].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[0].classList.contains("dixie") &&
    cuadricula[1].classList.contains("dixie") &&
    cuadricula[2].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  }
  //fila 2
  if (
    cuadricula[3].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[5].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[3].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[5].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  }
  //fila 3
  if (
    cuadricula[6].classList.contains("union") &&
    cuadricula[7].classList.contains("union") &&
    cuadricula[8].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[6].classList.contains("dixie") &&
    cuadricula[7].classList.contains("dixie") &&
    cuadricula[8].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  }
  //columna 1
  if (
    cuadricula[0].classList.contains("union") &&
    cuadricula[3].classList.contains("union") &&
    cuadricula[6].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[0].classList.contains("dixie") &&
    cuadricula[3].classList.contains("dixie") &&
    cuadricula[6].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  }
  //columna 2
  if (
    cuadricula[1].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[7].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[1].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[7].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  }
  //columna 3
  if (
    cuadricula[2].classList.contains("union") &&
    cuadricula[5].classList.contains("union") &&
    cuadricula[8].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[2].classList.contains("dixie") &&
    cuadricula[5].classList.contains("dixie") &&
    cuadricula[8].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  }
  //diagonal 1
  if (
    cuadricula[0].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[8].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[0].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[8].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  }
  //diagonal 2
  if (
    cuadricula[2].classList.contains("union") &&
    cuadricula[4].classList.contains("union") &&
    cuadricula[6].classList.contains("union")
  ) {
    window.location.assign("ganadorUnion.html");
  } else if (
    cuadricula[2].classList.contains("dixie") &&
    cuadricula[4].classList.contains("dixie") &&
    cuadricula[6].classList.contains("dixie")
  ) {
    window.location.assign("ganadorDixie.html");
  } else if (document.querySelectorAll(".union, .dixie").length == 9) {
    window.location.assign("empate.html");
  }

  console.log(cuadricula[0].getElementsByTagName("img"));
};
 */
