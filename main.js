/**
 * 
1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, 
exiba a mensagem "É um número", 
caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, 
exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, 
exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for,
 exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, 
exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
 */
//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!');
//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let n1 = 3;
let n2 = 5;
let sum = Number(n1) + Number(n2);
alert(`A SOMA DOS NÚMEROS ${n1} + ${n2} = ${sum}`);
/*3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, 
exiba a mensagem "É um número", 
caso contrário, exiba a mensagem "Não é um número".
*/
let numero = 4;
if(!isNaN(numero)){
    alert(`PARABÉNS E UM NÚMRO`);
}else{
    alert('NÃO É NÚMERO');
}
/**
 * 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, 
exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
 */
let dado = 'quero aprender mais';
if(typeof dado === 'string'){
    alert('É uma string');
}else{
    alert('Não é uma string')
}
/*5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, 
exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/
let opcao = false;
if( typeof opcao === 'boolean'){
    alert('É um booleano');
}else{
    alert ('Não é um booleano')
}
//6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
let primeiroNumero = 3;
let segundoNumero  = 8;
let sub = Number(primeiroNumero) - Number(segundoNumero)
alert(`A SUBTRAÇÃO DOS NÚMEROS ${primeiroNumero} - ${segundoNumero} = ${sub}`);
//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let primeiroNumero1 = 3;
let segundoNumero2  = 8;
let mult = Number(primeiroNumero1) * Number(segundoNumero2)
alert(`A SUBTRAÇÃO DOS NÚMEROS ${primeiroNumero1} * ${segundoNumero2} = ${mult}`);
//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas
let primeiroNumeroDiv = 3;
let segundoNumeroDiv  = 8;
let div = (Number(primeiroNumeroDiv) / Number(segundoNumeroDiv)).toFixed(2)
alert(`A DIVISÃO DOS NÚMEROS ${primeiroNumeroDiv} / ${segundoNumeroDiv} = ${div}`);

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for,
 //exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par"
let meuNumero = 10;

if (meuNumero % 2 === 0) {
    alert('É um número par');
} else {
    alert('Não é um número par');
}
//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, 
//exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let meuNumero1 = 7;

if (meuNumero1 % 2 !== 0) {
    alert('É um número ímpar');
} else {
    alert('Não é um número ímpar');
}