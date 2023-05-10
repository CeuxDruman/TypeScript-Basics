export var EducationalLevel;
(function (EducationalLevel) {
    EducationalLevel["HIGH_SCHOOL"] = "High school";
    EducationalLevel["UNIVERSITY"] = "University";
    EducationalLevel["POSTGRADUATE"] = "Postgraduate";
})(EducationalLevel || (EducationalLevel = {}));
// export --> this class will be visible from other files
var Learner = /** @class */ (function () {
    function Learner(names, surnames, avatar, age, educationalLevel, courses) {
        this.names = names;
        this.surnames = surnames;
        this.avatar = avatar;
        this.age = age;
        this.educationalLevel = educationalLevel;
        this.courses = courses;
    }
    Learner.prototype.getCertifiedCourses = function () {
        var totalCertifiedCourses = 0;
        for (var index = 0; index < this.courses.length; index++) {
            var course = this.courses[index];
            if (course.certified) {
                totalCertifiedCourses++;
            }
        }
        return totalCertifiedCourses;
    };
    return Learner;
}());
export { Learner };
