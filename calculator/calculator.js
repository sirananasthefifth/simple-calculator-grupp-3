var ps = require("prompt-sync");
var prompt = ps();

let alive = true;
let operator;
let n1;
let n2;

while (alive)
{

    console.log("Välj en operator (*, /, +, -)");
    operator = prompt();
    operator = operator.toLowerCase();
    if (operator == "exit")
    {
        break;
    }

    n1 = (prompt("Skriv första numret: "));
    n1 = n1.toLowerCase();
    if (n1 == "exit")
    {
        break;
    }
    n1 = parseInt(n1);

    n2 = (prompt("Skriv andra numret: "));
    n2 = n2.toLowerCase();
    if (n2 == "exit")
    {
        break;
    }
    n2 = parseInt(n2);

    switch (operator) 
    {
        case '*' :
            console.log(n1 * n2);
            break;
        case '+' :
            console.log(n1 + n2);
            break;
        case '-' :
            console.log(n1 - n2);
            break;
        case '/' :
            console.log(n1 / n2);
            break;
    }


}