import { Learner, EducationalLevel } from './learner.js';
import { Course } from './course.js';
var courses = [new Course("Agile essential practices", 20, 90, true, 2019),
    new Course("Web Software Engineering", 15, 99, true, 2018),
    new Course("Automated testing", 25, 50, false, 2020),
    new Course("Design and Architecture principles", 30, 75, true, 2020)];
export var learner = new Learner("Carlos Alberto", "Mata Gil", "avatar.png", 29, EducationalLevel.UNIVERSITY, courses);
//console.log(learner);
//console.log(learner.courses);
// tsc -p .\tsconfig.json --> Compile ts files into js files using the config available in tsconfig.json file
var learnerTable = document.getElementById("learner");
// ! --> Indicas que SIEMPRE va a existir, existe un 0% de probabilidades de que no encuentre y por lo tanto sea null;
var statisticsTable = document.getElementById("statistics");
var coursesTable = document.getElementById("courses");
var btnFilter = document.getElementById("filter-button");
var searchText = document.getElementById("search-text");
// btnFilter.onclick = filterByName;
btnFilter.onclick = function () {
    var text = searchText.value;
    text = (text == null) ? "" : text;
    coursesTable.getElementsByTagName("tbody")[0].remove();
    var filteredCourses = learner.courses.filter(function (c) { return c.name.match(text); });
    showLearnerCourses(filteredCourses);
};
showLearnerData(learner);
showStatistics(learner);
showLearnerCourses(learner.courses);
/* function filterByName(): void {
    let text: string = searchText.value;
    text = (text==null)?"":text;
    coursesTable.getElementsByTagName("tbody")[0].remove();
    let filteredCourses: Course[] = learner.courses.filter(function(c){return c.name.match(text);});
    showLearnerCourses(filteredCourses);
} */
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
function showLearnerCourses(courses) {
    var coursesTbody = document.createElement("tbody");
    var state = courses.map(function (c) { return (c.calification > 60) ? 'green' : 'red'; });
    var index = 0;
    for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
        var course = courses_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n        <td>" + course.hours + "</td>\n        <td style=\"color: " + state[index] + "\">" + course.calification + "</td>\n        <td>" + course.certified + "</td>\n        <td>" + course.year + "</td>";
        coursesTbody.appendChild(trElement);
        index++;
    }
    coursesTable.appendChild(coursesTbody);
}
