import { state } from "../../state";
function getDate() {
  const currentSate = state.getState();
  const currentGame = currentSate.currentGame;
  const puntaje = state.score();
  const maquina = puntaje.score.computerPlay;
  const you = puntaje.score.myPlay;
  const win = state.whoWins(currentGame.myPlay, currentGame.computerPlay);
  return { maquina, you, win };
}
export function result(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  const resultado = getDate();
  div.className = "page-d";
  div.innerHTML = `
  <div class="container">
  <custom-star class="star" type="${resultado.win}"></custom-star>
  <div class="score-container">
    <custom-text variant="body">Score</custom-text>
    <custom-text variant="right" style="text-align: right">Vos: ${resultado.you}</custom-text>
    <custom-text variant="right" style="text-align: right">Maquina ${resultado.maquina}</custom-text>
  </div>
  <custom-button class="button-return">Volver a Jugar</custom-button>
  <div>
  `;
  style.innerHTML = `
  body{
    background-color: ${
      resultado.win == "ganaste"
        ? "rgba(136, 137, 73, 0.9)"
        : "rgba(137, 73, 73, 0.9)"
    };
    background-image: none;
  }
  .page-d{
    margin:0 auto;
    max-width: 400px;
    height: 100%;
  }
  .container{
    display:flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 360px;
    padding-top: 25px;
    gap:20px;
  }
  @media (min-width: 951px) {
    .container{
      gap:50px;
      padding-top: 80px;
    }
  }
  .score-container{
    width: 259px;
    border: 10px solid #000000;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding: 15px 30px;
    margin: 0 auto ;
  }
  .star{
    margin: 0 auto;
  }
`;
  div.appendChild(style);
  state.clearCurrentGame();
  const button = div.querySelector(".button-return")!;
  button.addEventListener("click", () => {
    params.goTo("/instructions");
  });
  return div;
}
