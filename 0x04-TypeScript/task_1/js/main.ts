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
    (firstName: string, lastName: string): string;
}

// const printTeacher: printTeacherFunction = (firstName, lastName) => {
//     return `${firstName}. ${lastName}`;
// }

function printTeacher(firstName: string = "John", lastName:string = "Doe"){
    return `${firstName}. ${lastName}`;
}

// Writing a class

interface Student {
    firstName: string;
    lastName: string;
    workOnHomeWork(): string;
    displayName(): string;
}

interface StudentConstructor{
    new (firstName: string, lastName:string): Student;
}

class StudentClass {
     firstName: string;
     lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string{
        return 'Currently working';
    }

    displayName():string {
        return this.lastName;
    }
}




