var ps = require("prompt-sync");
var prompt = ps();

let alive = true;
let operator;
let n1;
let n2;
let result;

while (alive)
{

    console.log("Välj en operator (*, /, +, -)"); //Fråga användaren om nummer
    operator = prompt();    //Användarinput
    operator = operator.toLowerCase(); //Konvertering till lowercase
    if (operator == "exit")     //Check if exit
    {
        break;
    }

    n1 = (prompt("Skriv första numret: ")); //Nummer 1
    n1 = n1.toLowerCase();  //Till lowercase för att kolla exit
    if (n1 == "exit")   //kolla exit
    {
        break;
    }
    if (n1 == "result") //kolla resultat
    {
        n1 = result;
    }
    n1 = parseInt(n1);  //konvertera till int

    n2 = (prompt("Skriv andra numret: "));  
    n2 = n2.toLowerCase();
    if (n2 == "exit")
    {
        break;
    }
    if (n2 == "result")
    {
        n2 = result;
    }
    n2 = parseInt(n2);

    //Switch cases för miniräknaren
    switch (operator) 
    {
        case '*' :
            result = n1*n2;
            console.log(n1 * n2);
            break;
        case '+' :
            result = n1+n2;
            console.log(n1 + n2);
            break;
        case '-' :
            result = n1-n2;
            console.log(n1 - n2);
            break;
        case '/' :
            result = n1/n2;
            console.log(n1 / n2);
            break;
    }


}