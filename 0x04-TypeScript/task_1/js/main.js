var printTeacher = function (firstName, lastName) {
    firstName = firstName[0].toUpperCase();
    return "".concat(firstName, ". ").concat(lastName);
};
console.log(printTeacher("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.lastName;
    };
    return StudentClass;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Working from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to director tasks";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (parseInt(salary) < 500) {
        return new Teacher;
    }
    return new Director;
}
console.log(createEmployee("200"));
