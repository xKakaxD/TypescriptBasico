"use strict";
//Tipos Básicos
let age = 5;
const firstName = 'Kaká';
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, false, false, true];
const names = ["Kaká", "Lobo", "Aline", "Felipe"];
//Tupla
const person = [2, 'Lobo'];
//Lista de Tupla
const people = [
    [1, 'Kaká'],
    [3, 'Aline'],
    [4, 'Felipe'],
];
//Interssection
const productId = false;
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
//Type Assertion (Tratar uma variável de um tipo como se fosse de outra)
const productName = 'Boné';
//let itemId = productName as string;
let itemId = productName;
console.log(itemId);
