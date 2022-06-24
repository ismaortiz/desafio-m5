export function welcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.className = "page-a";
  div.innerHTML = `
    <custom-text variant="titulo">Piedra, Papel <span>ó</span> <br> Tijeras</custom-text>
    <custom-button class="start-button">Empezar</custom-button>
    <div class="container">
      <custom-hand type="tijera"></custom-hand>
      <custom-hand type="piedra"></custom-hand>
      <custom-hand type="papel"></custom-hand>
    </div>
  `;
  style.innerHTML = `
    .page-a {
      padding: 115px 26px 0px 27px;
      margin: 0 auto;
      max-width: 375px;
      display: flex;
      flex-direction: column;
      gap: 70px;
    }
    .container{
      display:flex;
      justify-content: space-around;
      align-items: flex-end;
    }
    @media (min-width: 951px) {
      .page-a {
        gap: 150px;
        justify-content: flex-end;
      }
  `;
  div.appendChild(style);
  const buttonEL = div.querySelector(".start-button")!;
  buttonEL.addEventListener("click", () => {
    params.goTo("/instructions");
  });
  return div;
}
