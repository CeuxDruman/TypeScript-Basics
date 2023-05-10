// NOTES
/*
tsc main.ts -outDir scripts --> Compile ts file into a js file.
node .\scripts\main.js --> Execute the result of the compilation of the main.js program. (node is a js interpreter that make use of Chrome)
Right click on html file > "Open with Live Server" to create a local server and launch it.
*/

// Task 1

console.log("Hola mundo");

let myText: string="Hola mundo de nuevo";
console.log(myText);

let tagOne: string="<div class=\"ejemplo\">";
let tagTwo: string="<div class='ejemplo'>";

console.log(tagOne);
console.log(tagTwo);

console.log("Esta es una línea\nEsta es otra línea");
console.log(`Esta es la primera línea
Esta es la segunda línea`);
console.log(`Es valor de mi variable es ${myText}`);

// Task 2

let op1: number=10;
let op2: number=15;

console.log(`Mis variables iniciales son ${op1} y ${op2}`);

op1++;
op2+=4;

console.log(`Mis variables finales son ${op1} y ${op2}`);

let resultado: number = op1/op2;

console.log(`Resultado: ${resultado}`);
console.log(`Resultado: ${resultado.toPrecision(2)}`);

let varUnknownType: any;
console.log(`Variable tiene valor: ${varUnknownType} y es de tipo ${typeof(varUnknownType)}`);
varUnknownType = "Ahora hay un texto";
console.log(`Variable tiene valor: ${varUnknownType} y es de tipo ${typeof(varUnknownType)}`);
varUnknownType = 2.8;
console.log(`Variable tiene valor: ${varUnknownType} y es de tipo ${typeof(varUnknownType)}`);

let varUndefinedType: undefined;
//varUndefinedType = 10; // No lo admite.
console.log(`Variable tiene valor: ${varUndefinedType} y es de tipo ${typeof(varUndefinedType)}`);
//varUndefinedType = null; // No lo admite.
console.log(`Variable tiene valor: ${varUndefinedType} y es de tipo ${typeof(varUndefinedType)}`);

let varVoid:void = undefined;
//varVoid = 10; // No lo admite.
console.log(`Variable tiene valor: ${varVoid} y es de tipo ${typeof(varVoid)}`);
//varVoid = null; // No lo admite.
console.log(`Variable tiene valor: ${varVoid} y es de tipo ${typeof(varVoid)}`);

function printMessage(): void{
    console.log("Generic message");
}

function printGivenMessage(msg:string): void{
    console.log(msg);
}

printMessage();
printGivenMessage("Parameter message");

function add(op1:number, op2:number):number{
    return op1+op2;
}

var fAdd = add;

console.log(add(10,15));
console.log(fAdd(20,25));