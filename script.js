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
            display.innerText = safeEval(display.innerText);
          } catch (error) {
            display.innerText = "Bruh... error";
          }
          break;
        
        case "%":
          let passedText = display.innerText + "/100";
          display.innerText = safeEval(passedText);
          break;
  
        case "+/-":
          display.innerText = (parseFloat(display.innerText) * -1).toString();
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

function safeEval(expression) {
  // Так как eval() не безопасен, создаем простой парсер для базовых математических операций
  // Можно использовать регулярные выражения для проверки допустимых символов
  if (/^[0-9+\-*/(). ]+$/.test(expression)) {
    return Function(`'use strict'; return (${expression})`)();
  } else {
    throw new Error("Invalid input");
  }
}

calculateLogics();
