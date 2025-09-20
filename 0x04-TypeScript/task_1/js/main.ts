interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    printTeacher(firstName: string, lastName: string): string;
}


 function printTeacher(firstName:string, lastName:string): string{
    firstName = firstName[0].toUpperCase();
    return `${firstName}. ${lastName} `;
}

console.log(printTeacher("John", "Doe"));

// Writing a class

interface Student {
    firstName: string;
    lastName: string;
    workOnHomeWork(): string;
    displayName(): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): Student;
}

class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.lastName;
    }
}


interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}


class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workTeacherTasks(): string {
        return "Getting to director tasks";
    }
}


function createEmployee(salary: string){
    if (parseInt(salary) < 500){
        return new Teacher;
    }

    return new Director;
}

console.log(createEmployee("200"))


