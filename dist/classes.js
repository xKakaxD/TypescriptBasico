"use strict";
// readyonly- não pode alterar, protected só pode ser acessada na classe ou sub classe, private só pode ser acessada dentor da classe
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
    //age não pode por ser private e essa eh uma sub classe (EXTENDS)
    whoAmI() {
        return this.name;
    }
}
const kaka = new Person(1, 'Kaká', 24);
