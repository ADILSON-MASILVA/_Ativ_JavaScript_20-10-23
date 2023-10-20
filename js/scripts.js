    /* LISTA DE ATIVIDADES 02 20-10-2023 */ 

/* Exercício 1: Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console. */

let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");

if (numero1 > numero2) {
  console.log("O maior número é: " + numero1);
} else if (numero2 > numero1) {
  console.log("O maior número é: " + numero2);
} else {
  console.log("Os números são iguais.");
}

/* Exercício 2: Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.*/

let numero = prompt("Digite um número: ");

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");
}

/* Exercício 3: Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console. */

let numero = prompt("Digite um número: ");
numero = parseInt(numero);

let i = 1;

while (i <= numero) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
/* Exercício 4: Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.  */

let numero = prompt("Digite um número para a tabuada: ");
numero = parseInt(numero);

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}
/* Exercício 5: Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console. */

let numero = prompt("Digite um número: ");
numero = parseInt(numero);

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é igual a zero.");
}

/* Exercício 6: Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console. */

let letra = prompt("Digite uma letra: ");

if (
  letra === "a" ||
  letra === "e" ||
  letra === "i" ||
  letra === "o" ||
  letra === "u"
) {
  console.log("A letra é uma vogal.");
} else {
  console.log("A letra é uma consoante.");
}
/* Exercício 7: Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console. */

let nota = prompt("Digite a nota: ");
nota = parseFloat(nota);

if (nota >= 0 && nota <= 10) {
  console.log("A nota é válida.");
} else {
  console.log("A nota não é válida. A nota deve estar entre 0 e 10.");
}

/* Exercício 8: Escreva um programa em JavaScript que exiba os números de 1 a 100 no console. Utilize uma estrutura de repetição while, do-while ou for para percorrer os números de 1 a 100 e exibir cada número no console. */

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

/* Exercício 9: Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console. */

let operacao = prompt("Digite uma operação (+, -, *, /): ");
let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");

numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

let resultado;

switch (operacao) {
  case "+":
    resultado = numero1 + numero2;
    break;
  case "-":
    resultado = numero1 - numero2;
    break;
  case "*":
    resultado = numero1 * numero2;
    break;
  case "/":
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      console.log("Não é possível dividir por zero.");
    }
    break;
  default:
    console.log("Operação inválida.");
}

if (resultado !== undefined) {
  console.log("Resultado: " + resultado);
}
/* Exercício 10: Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.. */

javascript
Copy code
let numero = prompt("Digite um número: ");
numero = parseInt(numero);

for (let i = 1; i <= numero; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}



