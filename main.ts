import {Learner, EducationalLevel} from './learner.js';
import {Course} from './course.js';

let courses = [new Course("Agile essential practices", 20, 90, true, 2019), 
new Course("Web Software Engineering", 15, 99, true, 2018),
new Course("Automated testing", 25, 50, false, 2020),
new Course("Design and Architecture principles", 30, 75, true, 2020)]

export const learner = new Learner("Carlos Alberto", "Mata Gil", "avatar.png", 29, EducationalLevel.UNIVERSITY, courses);

//console.log(learner);
//console.log(learner.courses);

// tsc -p .\tsconfig.json --> Compile ts files into js files using the config available in tsconfig.json file

let learnerTable: HTMLElement = document.getElementById("learner")!;
// ! --> Indicas que SIEMPRE va a existir, existe un 0% de probabilidades de que no encuentre y por lo tanto sea null;
let statisticsTable: HTMLElement = document.getElementById("statistics")!;
let coursesTable: HTMLElement = document.getElementById("courses")!;
let btnFilter: HTMLElement = document.getElementById("filter-button")!;
let searchText: HTMLInputElement = <HTMLInputElement>document.getElementById("search-text")!;

// btnFilter.onclick = filterByName;
btnFilter.onclick = () => { // TypeScript doesn't support return type on arrow functions natively
    let text: string = searchText.value;
    text = (text == null) ? "" : text;
    coursesTable.getElementsByTagName("tbody")[0].remove();
    let filteredCourses: Course[] = learner.courses.filter(c => c.name.match(text));
    showLearnerCourses(filteredCourses);
}

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

function showLearnerData(learner: Learner): void {
    let tbodyLearner = document.createElement("tbody");
    tbodyLearner.innerHTML = `<tr><td colspan="2"><img src="./${learner.avatar}" height="100"></td></tr>
    <tr><td>Names:</td><td>${learner.names}</td></tr>
    <tr><td>Surnames:</td><td>${learner.surnames}</td></tr>
    <tr><td>Educational level:</td><td>${learner.educationalLevel}</td></tr>
    <tr><td>Age:</td><td>${learner.age}</td></tr>`
    learnerTable.appendChild(tbodyLearner);
}

function showStatistics(learner: Learner): void {
    let numberOfCertificates: number = learner.getCertifiedCourses();
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b>Certified courses</b></td><td>${numberOfCertificates}</td>`
    statisticsTable.appendChild(trElement);
}

function showLearnerCourses(courses: Course[]): void {
    let coursesTbody: HTMLElement = document.createElement("tbody");
    let state: string[] = courses.map(c => (c.calification > 60) ? 'green' : 'red');
    let index: number = 0;
    for(let course of courses) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${course.name}</td>
        <td>${course.hours}</td>
        <td style="color: ${state[index]}">${course.calification}</td>
        <td>${course.certified}</td>
        <td>${course.year}</td>`
        coursesTbody.appendChild(trElement);
        index++;
    }
    coursesTable.appendChild(coursesTbody);
}