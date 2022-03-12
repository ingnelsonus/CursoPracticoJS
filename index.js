/*
let hello="Hello";
let world ="World";


let epicPhrase2=`${hello}${world}`;

let lorem="Frase epica 1, texto de ejemplo \n"+
          "Otra frase epica que necesitemos";

let lorem2=`Otra frase epica que necesitemos
            esta es otra frase en otra linea`;

console.log(lorem);
console.log(lorem2);

let person={
    'name':'Nelson',
    'age':'31',
    'Country':'CO'
};

console.log(person.name,person.age);

let {name,age,Country}=person;
console.log(name,age,Country);

let team1 =['Nelson','Julian','Ricardo'];
let team2=['Valeria','Yessica','Camila'];
let education=['David',...team1,...team2];
console.log(education);


{
    var globalvar="Global var";
}

{
    let globalLet='Global Let';
    console.log(globalLet);
}

console.log(globalvar);


const a="b";
*/


///////////Arrow Functions, Promesas y Parámetros en objetos//////////////////

let name="Nelson";
let age="31";

obj ={name:name,edad:edad};
obj2={name,edad};
console.log(obj2);


const names=[
    {name:"Nelson",age:"31"},
    {name:"Diana",age:"41"}
]

let listOfNames=names.map(function(item){
    console.log(item.name);
});


let listOfNames2=names.map(item=>console.log(item.name));
const cuadrado =num=>num*num;

const helloPromise=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('All right');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(response=>console.log(response))
.catch(error=>console.log(error));

//////////////////////////Clases, Módulos(export, import) y Generadores//////////////////////////////
class Calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }

    Sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }


}

const calc=new Calculator();
console.log(calc.Sum(2,2));


import{hello} from './Module';
hello();

function*helloworld(){
    if(true){
        yield 'Hello';
    }
    if(true){
        yield 'World';
    }
}

const generatorHello=helloworld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
