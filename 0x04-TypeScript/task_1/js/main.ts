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
    (teacher: Teacher): string;
}

function printTeacher(firstName: string , lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}





