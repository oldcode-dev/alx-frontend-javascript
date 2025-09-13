// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//     return `${firstName}. ${lastName}`;
// }
function printTeacher(firstName, lastName) {
    if (firstName === void 0) { firstName = "John"; }
    if (lastName === void 0) { lastName = "Doe"; }
    return "".concat(firstName, ". ").concat(lastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomeWork = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.lastName;
    };
    return StudentClass;
}());
