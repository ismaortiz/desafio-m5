type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  computerPlay: Jugada;
  myPlay: Jugada;
};
const state = {
  data: {
    currentGame: {
      computerPlay: "",
      myPlay: "",
    },
    history: JSON.parse(localStorage.getItem("saved-state")!) || [],
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    currentState.currentGame.computerPlay = this.computerMove();
    const resultado = currentState.currentGame;
    return resultado;
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
  pushToHistory(play: Game) {
    this.data.history.push(play);
    localStorage.setItem("saved-state", JSON.stringify(this.data.history));
  },
  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    let result = "";
    const ganoConPiedra = myPlay == "piedra" && computerPlay == "tijera";
    const ganoConPapel = myPlay == "papel" && computerPlay == "piedra";
    const ganoConTijeras = myPlay == "tijera" && computerPlay == "papel";
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
