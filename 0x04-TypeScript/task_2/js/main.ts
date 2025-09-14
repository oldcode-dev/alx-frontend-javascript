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


function createEmployee(income: string | number){
    const salary = Number(income);
    if (salary < 500){
        return new Teacher();
    }

    return new Director();
}



function isDirector(employee: object){
    if (employee === Director){
        return true;
    }

    return false;
}

function executeWork(employee: object){
    if(employee === Director){
        const director = new Director();
        return director.workDirectorTasks();
    }

    const teacher = new Teacher();
    return teacher.workTeacherTasks();
}


type Subjects = "Math" | "History";


function teachClass(todayClass:Subjects): string{
    if (todayClass === "Math"){
        return "Teaching Math";
    }else if (todayClass === "History"){
        return "Teaching History";
    }
} 



