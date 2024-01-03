let numero = 0;

if(numero = 0){
    console.log( numero, 'é zero');
}
if(numero < 0 ){
    console.log( numero, 'é negativo');
}
if(numero > 0){
    console.log( numero, 'é positivo');
}

let nome =  joão;
let idade = 14

function verificarIdade(nome,idade){
    if(idade <18){
        console.log(nome,'é menor de idade');
    }else{
        console.log(nome,'é maior de idade');
    }
}
verificarIdade(nome,idade);

//Desenvolva uma função que valide se uma string é vazia ou não.

let string = '';

function verificarString(string){
    if(string==''){
    console.log(string, 'é uma string vazia');
    }else{
        console.log(string, 'não é uma string vazia');
    }
}
verificarString(string);
//Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.
let numero1 = 1;
let numero2 = 2;

function media(numero1,numero2){
    if(numero1==''|numero2==''){
    console.log(numero1, 'ou',numero2);
    return;
    }else{
    let calculo = (numero1+numero2)/2;
        console.log('a média de', numero1, 'e', numero2, 'é:',calculo);
    }

}
media(numero1,numero2);

// uma função que receba um array como parâmetro e retorne o seu tamanho.
let array = ['casa','carro','cachorro', 'gato']

function qtdArray(array){
    let qtd = array.length;
    console.log('a lista tem',qtd,'objetos');
}
qtdArray(array);

//Crie um array e utilize a função includes para verificar se um elemento específico está presente

let array2 = ['casa','carro','cachorro', 'gato']
let verificar = 'talti';

function verArray(array2){
    if(array2.includes(verificar)){
    console.log(verificar,'Está na lista');
    }else{
        console.log(verificar,'Não está na lista');
    }
}
verArray(array2);

//Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares.

let array3 = [1,2,3,4,5];

function somaArray(array3){
     if()
}

