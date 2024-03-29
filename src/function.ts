interface MathFunc {
    (x: number, y: number): number;
}

const sum: MathFunc = (x: number, y: number) => {
    return x + y;
}

const value = sum(1, 4);

const sub: MathFunc = (x: number, y: number) =>{
    return x - y;
}


//como retornar em string ou em number?
const sum2 = (x: number, y: number): string | number=>{
    return (x + y).toString();
}

const value2 = sum2(2, 3);

//Void não retorna valor assim como em outras linguagens

const log = (message: string): void => {
    console.log(message);
};
