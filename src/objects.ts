//Type se colocar '? o campo vira opcional'
type Order = {
    productId: string;
    price: number
}

type User = {
    firstName: string;
    age: number;
    email?: string;
    password: string;
    orders: Order[];
    register(): string;//propriedade como função
};

const user: User = {
    firstName: 'Kaká',
    age: 24,
    email:'kaka@gmail.com',
    password: '1234',
    orders: [{productId: '1', price: 200 }],
    register() {
        return 'Registrado';
    },
}

const printLog = (message: string) => {}

printLog(user.email!)//a ! diz pro typescript que ela existe sim, que não eh undefined

//Unions unir 2 typer
type Author = {
    books: string[]
}

const author: Author & User = {
    age: 26,
    books: ['lorem','ipsum','fake'],
    firstName: 'Itachi',
    orders: [],
    password: '12345',
    register() {
        return 'Não Registrado';
    },
};

//Interface READONLY  não deixa alterar depois a variável

interface UserIterface{
    userName: string;
    password: string;
    readonly age: number;
}

const emailUser: UserIterface = {
    userName: 'xKakaxD',
    age: 24,
    password: '12345'
};

interface AuthorInterface{
    books: string[];
}

const newAuthor: UserIterface & AuthorInterface = {
    userName: 'xKakaxD',
    age: 24,
    password: '12345',
    books: []
}

//Uma Diferença entre interface e type, se alterar para interface o bloco a baixo não vai funcionar.
type Grade = number | string;
const grade: Grade = 1;

