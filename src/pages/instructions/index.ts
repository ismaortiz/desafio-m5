export function instructions(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.className = "page-b";
  div.innerHTML = `
  <custom-text variant="body">
    Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
  </custom-text>
  <custom-button class="play-button">¡Jugar!</custom-button>
  <div class="container">
    <custom-hand type="tijera"></custom-hand>
    <custom-hand type="piedra"></custom-hand>
    <custom-hand type="papel"></custom-hand>
  </div>
  `;
  style.innerHTML = `
  .page-b {
    padding: 80px 26px 0px 27px;
    margin: 0 auto;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .container{
    display:flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  @media (min-width: 951px) {
    .page-b {
      gap: 120px;
      justify-content: flex-end;
    }
  }
  `;
  div.appendChild(style);
  const button = div.querySelector(".play-button")!;
  button.addEventListener("click", () => {
    params.goTo("/play");
  });
  return div;
}
