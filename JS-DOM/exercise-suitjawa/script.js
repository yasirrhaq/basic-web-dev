function getComputerChoice() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getResult(comp, player) {
  // rules
  if (player == comp) return "DRAW";
  if (player == "gajah") return comp == "orang" ? "WIN!" : "LOSE!";
  if (player == "orang") return comp == "gajah" ? "LOSE!" : "WIN!";
  if (player == "semut") return comp == "orang" ? "LOSE!" : "WIN!";
}

function rollAnimation() {
  const imgComputer = document.querySelector(".img-komputer");
  const img = ["gajah", "semut", "orang"];
  let i = 0;
  const initialTime = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - initialTime > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + img[i++] + ".png");
    if (i == img.length) i = 0;
  }, 100);
}

const choices = document.querySelectorAll("li img");
choices.forEach(function (choice) {
  choice.addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    const playerChoice = choice.className;
    const result = getResult(computerChoice, playerChoice);

    rollAnimation();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + computerChoice + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = result;
    }, 1000);
  });
});