// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
let nome = 'Daniel Costa';
console.log('Me chamo: ' + nome);

// 2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.
let idade = 25;
let altura = 1.75;
console.log('Idade:', idade, 'Altura:', altura);

// 3. Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
let preco = 50;
let desconto = 0.2; 
let precoComDesconto = preco - (preco * desconto);
console.log('Preço com desconto:', precoComDesconto);

// 4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!"
let temperatura = 30;
if (temperatura > 25) {
    console.log('Está calor!');
} else {
    console.log('Está fresco!');
}

// 5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade!');
    } else {
        console.log('Você é menor de idade!');
    }
}
verificarIdade(20);

// 6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
let nota = 2;
if (nota >= 7) {
    console.log('Aprovado');
} else if (nota >= 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}

// 7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".
let numero1 = 10;
let numero2 = 20;
console.log(numero1 === numero2 ? 'Os números são iguais' : 'Os números são diferentes');

// 8. Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos`);

// 9. Crie um loop que imprima os números de 1 a 10 na tela.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let numero = 5;
do {
    console.log('Número digitado:', numero);
} while (numero !== 5);

// 11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// 12. Crie um loop que exiba todos os números pares de 0 a 20.
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function calcularAreaCirculo(raio) {
    return Math.PI * Math.pow(raio, 2);
}
console.log('Área do círculo:', calcularAreaCirculo(5));

// 14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.
// Onde irei declarar as variáveis
let num1 = 10;
let num2 = 20;

// Aqui a soma será feita
let soma = num1 + num2;

// Aqui receberemos o resultado da soma
console.log('A soma é:', soma);

// 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções: x = 10 y = 20 z = x+y
function somar(a, b) {
    return a + b;
}

let resultado = somar(10, 20);
console.log('Resultado da soma:', resultado);
