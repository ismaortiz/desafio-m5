import { state } from "../../state";
function newPage(div, result) {
  const style = document.createElement("style");
  div.innerHTML = `
        <div class="container">
          <custom-hand class="rotar" type="${result.computerPlay}" size="XL"></custom-hand>
          <custom-hand type="${result.myPlay}" size="XL"> </custom-hand>
        </div>
      `;
  style.innerHTML = `
        .container{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          gap: 130px;
        }
        .rotar{
          transform: rotate(-180deg);
        }
        @media (min-width: 951px) {
          .container{
            gap: 350px;
          }
      `;
  div.appendChild(style);
}
function contador(c, params, div) {
  c.addEventListener("finish", (e: any) => {
    const currentSate = state.getState();
    const currentGame = currentSate.currentGame;
    const myPlay = currentGame.myPlay;
    const computerPlay = currentGame.computerPlay;
    let final = e.detail.finish;
    if (final && myPlay == "") {
      params.goTo("/instructions");
    } else {
      const result = { myPlay, computerPlay };
      newPage(div, result);
      setTimeout(() => {
        params.goTo("/result");
      }, 2000);
    }
  });
}

export function play(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.className = "page-c";
  div.innerHTML = `
  <custom-counter></custom-counter>
  <div class="container">
  <custom-hand type="tijera" size="big"></custom-hand>
  <custom-hand type="piedra" size="big"></custom-hand>
  <custom-hand type="papel" size="big"></custom-hand>
  </div>
  `;
  style.innerHTML = `
  .page-c {
    padding: 125px 5px 0 5px;
    margin: 0 auto;
    max-width: 375px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-direction: column;
  }
  .container{
      display:flex;
      justify-content: space-around;
      height: 310px;
      align-items: flex-end;
  }
  @media (min-width: 768px) {
    .page-c {
      max-width: 70%;
      gap: 150px;
      height: 100vh;
      justify-content: flex-center;
    }
  `;
  const handsEls: any = div.querySelectorAll("custom-hand");
  const counterEl = div.getElementsByTagName("custom-counter");
  const counter = counterEl[0];
  for (const hand of handsEls) {
    hand.addEventListener("change", (e: any) => {
      const jugada = e.detail.jugada;
      hand.style.alignSelf = "center";
      const resultado = state.setMove(jugada)!;
      state.pushToHistory({ ...resultado });
    });
  }
  contador(counter, params, div);
  div.appendChild(style);
  return div;
}
