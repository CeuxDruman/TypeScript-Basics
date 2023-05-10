"use strict";
// NOTES
/*
tsc main.ts -outDir scripts --> Compile ts file into a js file.
node .\scripts\main.js --> Execute the result of the compilation of the main.js program. (node is a js interpreter that make use of Chrome)
Right click on html file > "Open with Live Server" to create a local server and launch it.
*/
// Task 1
console.log("Hola mundo");
var myText = "Hola mundo de nuevo";
console.log(myText);
var tagOne = "<div class=\"ejemplo\">";
var tagTwo = "<div class='ejemplo'>";
console.log(tagOne);
console.log(tagTwo);
console.log("Esta es una línea\nEsta es otra línea");
console.log("Esta es la primera l\u00EDnea\nEsta es la segunda l\u00EDnea");
console.log("Es valor de mi variable es " + myText);
// Task 2
var op1 = 10;
var op2 = 15;
console.log("Mis variables iniciales son " + op1 + " y " + op2);
op1++;
op2 += 4;
console.log("Mis variables finales son " + op1 + " y " + op2);
var resultado = op1 / op2;
console.log("Resultado: " + resultado);
console.log("Resultado: " + resultado.toPrecision(2));
var varUnknownType;
console.log("Variable tiene valor: " + varUnknownType + " y es de tipo " + typeof (varUnknownType));
varUnknownType = "Ahora hay un texto";
console.log("Variable tiene valor: " + varUnknownType + " y es de tipo " + typeof (varUnknownType));
varUnknownType = 2.8;
console.log("Variable tiene valor: " + varUnknownType + " y es de tipo " + typeof (varUnknownType));
var varUndefinedType;
//varUndefinedType = 10; // No lo admite.
console.log("Variable tiene valor: " + varUndefinedType + " y es de tipo " + typeof (varUndefinedType));
//varUndefinedType = null; // No lo admite.
console.log("Variable tiene valor: " + varUndefinedType + " y es de tipo " + typeof (varUndefinedType));
var varVoid = undefined;
//varVoid = 10; // No lo admite.
console.log("Variable tiene valor: " + varVoid + " y es de tipo " + typeof (varVoid));
//varVoid = null; // No lo admite.
console.log("Variable tiene valor: " + varVoid + " y es de tipo " + typeof (varVoid));
function printMessage() {
    console.log("Generic message");
}
function printGivenMessage(msg) {
    console.log(msg);
}
printMessage();
printGivenMessage("Parameter message");
function add(op1, op2) {
    return op1 + op2;
}
var fAdd = add;
console.log(add(10, 15));
console.log(fAdd(20, 25));
