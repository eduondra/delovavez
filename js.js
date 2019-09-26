let firstNumber = prompt("Zadej prvni cislo");
let secondNumber = prompt("Zadej druhe cislo");

let pyth = Math.sqrt(firstNumber * secondNumber) + (secondNumber * secondNumber);

if (pyth > 5) {
    document.write(" Bod " + "[" + firstNumber + ";" + secondNumber + "]" + " je v dostrelo delove veze");
    document.body.style.backgroundColor = "green";
} else {
    document.write(" Bod " + "[" + firstNumber + ";" + secondNumber + "]" + " neni v dostrelo delove veze");
    document.body.style.backgroundColor = "red";
}