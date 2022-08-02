interface IHuman {
    name: string
    age: number
    walk(): void
}

class HumanFactory {
    HUMAN_TYPE = {
        STUDENT: 'stundent',
        EMPLOYEE: 'employee'
    }
    makeHuman(human_type: string): IHuman {
        switch (human_type) {
            case this.HUMAN_TYPE.STUDENT:
                return new Student
            case this.HUMAN_TYPE.EMPLOYEE:
                return new Employee
            default:
                return new Student

        }
    }
}

class Human implements IHuman {
    name = ''
    age = 0
    walk(): void { }
}

class Student extends Human {
    constructor() {
        super()
        this.name = 'Mert'
        this.age = 30
    }

    walk(): void {
        console.log('Student walks')
    }
}

class Employee extends Human {
    constructor() {
        super()
        this.name = 'Merdjan'
        this.age = 30
    }
    walk(): void {
        console.log('I do walk')
    }
}

/////////////////////
const human = new HumanFactory().makeHuman('employee')
console.log(human.name)
human.walk()
/////////////////////