const buttons = document.querySelectorAll("buttons")
const display = document.querySelector("#display")

buttons.addEventListener("click", (e) => {
  for( let button of buttons) {
    button.style.backgroundColor = "blue"
  }
})
