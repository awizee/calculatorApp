const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    display.innerText += e.target.innerText;
  });
}
