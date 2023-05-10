export enum EducationalLevel{
    HIGH_SCHOOL = "High school",
    UNIVERSITY = "University",
    POSTGRADUATE = "Postgraduate"
}

// export --> this class will be visible from other files
export class Learner{

    constructor(public names: string, public surnames: string, public avatar: string, public age: number, public educationalLevel: EducationalLevel)
    {

    }
}