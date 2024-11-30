let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));

function calculateLogics() {
  buttons.map(function(button) {
    button.addEventListener("click", (element) => {
      switch(element.target.innerText) {
        case "AC":
          display.innerText = "0";
          break;
        
        case "=":
          try {
            display.innerText = eval(display.innerText);
          } catch (element) {
            display.innerText = "Bruh... error";
          }
          break;
        
        case "%":
          let passedText = display.innerText + "/100";
          display.innerText = eval(passedText);
          break;
  
        case "+/-":
          display.innerText = "-"
          break;
  
        default:
          if (display.innerText === "0" && element.target.innerText !== ".") {
            display.innerText = element.target.innerText;
          } else {
            display.innerText += element.target.innerText;
          }
      }
    });
  });  
}

calculateLogics();
