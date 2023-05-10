export var EducationalLevel;
(function (EducationalLevel) {
    EducationalLevel["HIGH_SCHOOL"] = "High school";
    EducationalLevel["UNIVERSITY"] = "University";
    EducationalLevel["POSTGRADUATE"] = "Postgraduate";
})(EducationalLevel || (EducationalLevel = {}));
// export --> this class will be visible from other files
var Learner = /** @class */ (function () {
    function Learner(names, surnames, avatar, age, educationalLevel) {
        this.names = names;
        this.surnames = surnames;
        this.avatar = avatar;
        this.age = age;
        this.educationalLevel = educationalLevel;
    }
    return Learner;
}());
export { Learner };
