import { Learner, EducationalLevel } from './learner.js';
import { Course } from './course.js';
var courses = [new Course("Agile essential practices", 20, 90, true, 2019),
    new Course("Web Software Engineering", 15, 99, true, 2018),
    new Course("Automated testing", 25, 50, false, 2020),
    new Course("Design and Architecture principles", 30, 75, true, 2020)];
export var learner = new Learner("Carlos Alberto", "Mata Gil", "avatar.png", 29, EducationalLevel.UNIVERSITY, courses);
//console.log(learner);
console.log(learner.courses);
// tsc -p .\tsconfig.json --> Compile ts files into js files using the config available in tsconfig.json file
var learnerTable = document.getElementById("learner");
// ! --> Indicas que SIEMPRE va a existir, existe un 0% de probabilidades de que no encuentre y por lo tanto sea null;
var statisticsTable = document.getElementById("statistics");
showLearnerData(learner);
showStatistics(learner);
function showLearnerData(learner) {
    var tbodyLearner = document.createElement("tbody");
    tbodyLearner.innerHTML = "<tr><td colspan=\"2\"><img src=\"./" + learner.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Names:</td><td>" + learner.names + "</td></tr>\n    <tr><td>Surnames:</td><td>" + learner.surnames + "</td></tr>\n    <tr><td>Educational level:</td><td>" + learner.educationalLevel + "</td></tr>\n    <tr><td>Age:</td><td>" + learner.age + "</td></tr>";
    learnerTable.appendChild(tbodyLearner);
}
function showStatistics(learner) {
    var numberOfCertificates = learner.getCertifiedCourses();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Certified courses</b></td><td>" + numberOfCertificates + "</td>";
    statisticsTable.appendChild(trElement);
}
