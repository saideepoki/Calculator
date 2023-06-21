var operand1 = 0,operator,finalEval;
var display = document.getElementById("content-1");
var buttons = document.getElementsByClassName("button");

for(var i = 0; i<buttons.length; i++) {
    display.style.marginTop = "auto";
    buttons[i].addEventListener("click",function() {
        var value = this.getAttribute("data-value");
        if(value == "+") {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText += value; // fething number from display
        }
        else if(value == "-") {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText += value; // fething number from display
        }
        else if(value == "/") {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText += value; // fething number from display
        }
        else if(value == "*") {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText += value; // fething number from display
        }
        else if(value == "%") {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText += value; // fething number from display
        }
        else if(value == "=") {
            finalEval = display.textContent; // etching whole string from display to pass int eval
            var result = eval(finalEval); // evaluating the final expression fetched from display
            display.innerText = result;
        }
        else if(value == "AC") {
            display.innerText = "";
        }
        else if( value == "+/-") {
            var string = display.innerText;
            display.innerText = string.replace(string.charAt(string.length -1 ),""); // if this button is clicked the extra operators can be removed by keep deleting the last characters from the string
        }
        else {
            display.innerText += value;
        }
    });
}