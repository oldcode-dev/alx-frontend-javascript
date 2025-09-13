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


