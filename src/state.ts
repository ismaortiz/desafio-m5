type Jugada = "piedra" | "papel" | "tijeras";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};
const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: {
      Yo: 0,
      Maquina: 0,
    },
  },
  getState() {
    return this.data;
  },
  setMove(move: Jugada) {
    let currentState = this.getState();
    currentState.currentGame.myPlay = move;
  },
  clearCurrentGame() {
    const currentState = this.getState();
    currentState.currentGame.myPlay = "";
    currentState.currentGame.computerPlay = "";
  },
  computerMove() {
    const moves = ["piedra", "papel", "tijera"];
    const randomN = Math.floor(Math.random() * 3);
    return moves[randomN];
  },
  pushToHistory(play: any) {
    this.data.history.push(play);
    localStorage.setItem("saved-state", JSON.stringify(this.data.history));
  },

  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    let result = "";
    const ganoConPiedra = myPlay == "piedra" && computerPlay == "tijeras";
    const ganoConPapel = myPlay == "papel" && computerPlay == "piedra";
    const ganoConTijeras = myPlay == "tijeras" && computerPlay == "papel";
    const gane = [ganoConPapel, ganoConPiedra, ganoConTijeras].includes(true);

    if (myPlay === computerPlay) {
      result = "empate";
    } else if (gane) {
      result = "ganaste";
    } else {
      result = "perdiste";
    }
    return result;
  },

  score() {
    const history = this.getState().history;
    const respuesta = {
      score: {
        computerPlay: 0,
        myPlay: 0,
      },
    };
    for (const r of history) {
      const win = this.whoWins(r.myPlay, r.computerPlay);
      if (win == "ganaste") {
        respuesta.score.myPlay++;
      } else if (win == "perdiste") {
        respuesta.score.computerPlay++;
      }
    }
    return respuesta;
  },
};

export { state };
