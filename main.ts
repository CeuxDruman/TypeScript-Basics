import {Learner, EducationalLevel} from './learner.js';

export const learner = new Learner("Carlos Alberto", "Mata Gil", "avatar.png", 29, EducationalLevel.UNIVERSITY);

console.log(learner);

// tsc -p .\tsconfig.json --> Compile ts files into js files using the config available in tsconfig.json file