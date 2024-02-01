"use strict";
const user = {
    firstName: 'Kaká',
    age: 24,
    email: 'kaka@gmail.com',
    password: '1234',
    orders: [{ productId: '1', price: 200 }],
    register() {
        return 'Registrado';
    },
};
const printLog = (message) => { };
printLog(user.email); //a ! diz pro typescript que ela existe sim, que não eh undefined
const author = {
    age: 26,
    books: ['lorem', 'ipsum', 'fake'],
    firstName: 'Itachi',
    orders: [],
    password: '12345',
    register() {
        return 'Não Registrado';
    },
};
const emailUser = {
    userName: 'xKakaxD',
    age: 24,
    password: '12345'
};
const newAuthor = {
    userName: 'xKakaxD',
    age: 24,
    password: '12345',
    books: []
};
const grade = 1;
