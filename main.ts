import {Learner, EducationalLevel} from './learner.js';

export const learner = new Learner("Carlos Alberto", "Mata Gil", "avatar.png", 29, EducationalLevel.UNIVERSITY);

//console.log(learner);

// tsc -p .\tsconfig.json --> Compile ts files into js files using the config available in tsconfig.json file

let learnerTable: HTMLElement = document.getElementById("learner")!;
// ! --> Indicas que SIEMPRE va a existir, existe un 0% de probabilidades de que no encuentre y por lo tanto sea null;

showLearnerData(learner);

function showLearnerData(learner: Learner):void{
    let tbodyLearner = document.createElement("tbody");
    tbodyLearner.innerHTML = `<tr><td colspan=2><img src="./${learner.avatar}" height="100"></td></tr>
    <tr><td>Names:</td><td>${learner.names}</td></tr>
    <tr><td>Surnames:</td><td>${learner.surnames}</td></tr>
    <tr><td>Educational level:</td><td>${learner.educationalLevel}</td></tr>
    <tr><td>Age:</td><td>${learner.age}</td></tr>`
    learnerTable.appendChild(tbodyLearner);
}