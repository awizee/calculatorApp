const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

let output = " ";
let final = [];
const symbol = [];

for (let button of buttons) {
  button.addEventListener("click", (e) => {
    final = e.target.textContent;
    final.push(output);

    switch (e.target.textContent) {
      case "+":
        symbol.push("+");
        output = " ";
        console.log(output);
        console.log(symbol);
        break;
      case "-":
        symbol.push("-");
        output = " ";
        console.log(output);
        console.log(symbol);
        break;
      case "*":
        symbol.push("*");
        output = " ";
        console.log(output);
        console.log(symbol);
        break;
      case "/":
        symbol.push("/");
        output = " ";
        console.log(output);
        console.log(symbol);
        break;
      case "=":
        symbol.push("=");
        console.log(output);
        console.log(symbol);
    }
    display.innerText += button.textContent;
  });
}
