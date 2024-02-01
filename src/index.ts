//Tipos Básicos
let age: number = 5
const firstName: string = 'Kaká';
const isValid: Boolean = true;
let idk: any = 5

idk = "12"
idk = true

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: Boolean[] = [true, false, false, false, true];
const names: string[] = ["Kaká", "Lobo", "Aline", "Felipe"];

//Tupla

const person: [number, string] = [2, 'Lobo'];

//Lista de Tupla
const people: [number, string] [] =[
    [1, 'Kaká'],
    [3, 'Aline'],
    [4, 'Felipe'],
];

//Interssection
const productId: string | number | boolean = false;

//Enum
enum Direction{
    Up = 1,
    Down = 2,
}

console.log(Direction);
