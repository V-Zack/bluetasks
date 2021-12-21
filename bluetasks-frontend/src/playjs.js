/*const n = 10;
 
let x = 20;

x = x + 10;

console.log(x);

const v1 = 32;
const v2 = `Olá, minha idade é ${v1} ANOS `;

console.log(v2);



const x = 10;
const y = "10";

if(x !== y ) {
   console.log("x e y não são iguais!") 
}else{
    console.log(false)
}

const x2 = 10;
const y2 = "10";

if(x === y ) {
   console.log("x2 e y2 são iguais!") 
}else{
    console.log(false)
}



const numeros = [ 1, 2, 3, 4 ];
console.log(numeros);

const e = numeros[0];
console.log(e);

const c = {
    cor: "azul",
    ano: 2010
}
console.log(c.ano);

const carros = [
    {
        cor: "vermelho",
        ano: 2000
    },
    {
        cor: "branco",
        ano: 2020
    },
    {
        cor: "amarelo",
        ano: 1982
    }
]

console.log(carros[2].ano);



const letters = ["a", "b", "c" ];
console.log(letters);
console.log(...letters);

const person = {

    name: "João",
    age: 20
}

const otherPerson = {
    ...person,
    hand: "left"
}        
console.log(person);
console.log(otherPerson);



function print(msg){
    console.log(msg);
}
const print2 = (msg) => console.log(msg);
const print3 = () => console.log("Default message");
const mult = (a, b) => a * b;

print("Estou aprendendo REACT!");
print2("EU VOU DOMINAR REACT!");
print3();
const r = mult(2, 4);
print(r);

class Carro{
    constructor(){
        this.velAtual = 0; 
    }

    acelerar(v){
        this.velAtual += v;
    }

    velocidade(){
        return this.velAtual;
    } 
}

const carro = new Carro();
carro.acelerar(40);
carro.acelerar(10);
print(carro.velocidade());



const multiplicar = (a, b) => a * b;


function processar(v1, v2, op){
    return op(v1, v2);
}

const result = processar(4, 5, (a, b) => a + b);
console.log(result);

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.map(v => v * 2));

console.log(numeros.filter(v => v % 2 === 0));
console.log(numeros.filter(v => v % 2 !== 0));

*/
const letras = ["A","B","C" ];

//const letraA = letras[0];
//const letraB = letras[1];

const [letraA, letraB, letraC ] = letras;
console.log(`letras A = ${letraA}, letras B = ${letraB}, letras C = ${letraC} `);
const [ ,l, ] = letras;
console.log(l);

const carro = {
    modelo: "Fusca",
    ano: 1982,
    motoristas : ["Pedro", "Zé" ] 
}

const {modelo, motoristas } = carro;

console.log(modelo, motoristas, l );
