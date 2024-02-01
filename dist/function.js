"use strict";
const sum = (x, y) => {
    return x + y;
};
const value = sum(1, 4);
const sub = (x, y) => {
    return x - y;
};
//como retornar em string ou em number?
const sum2 = (x, y) => {
    return (x + y).toString();
};
const value2 = sum2(2, 3);
//Void não retorna valor assim como em outras linguagens
const log = (message) => {
    console.log(message);
};
