interface IPerson {
    id: number;
    sayMyName(): string;
}
// readyonly- não pode alterar, protected só pode ser acessada na classe ou sub classe, private só pode ser acessada dentor da classe
class Person implements IPerson{
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number)
    {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string{
        return this.name;
    }
}

class Employee extends Person{
    constructor(id: number, name: string, age: number){
        super(id, name, age)
    }
    //age não pode por ser private e essa eh uma sub classe (EXTENDS)
    whoAmI(){
        return this.name
    }
}

const kaka = new Person (1, 'Kaká', 24);
