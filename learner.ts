import {Course} from './course.js';

export enum EducationalLevel {
    HIGH_SCHOOL = "High school",
    UNIVERSITY = "University",
    POSTGRADUATE = "Postgraduate"
}

// export --> this class will be visible from other files
export class Learner {
    constructor(public names: string, public surnames: string, public avatar: string, public age: number, public educationalLevel: EducationalLevel, public courses: Course[]) {

    }

    public getCertifiedCourses(): number {
        let totalCertifiedCourses: number = 0;

        for(let index = 0; index < this.courses.length; index++) {
            let course: Course = this.courses[index];

            if(course.certified) {
                totalCertifiedCourses++;
            }
        }
        return totalCertifiedCourses;
    }
}