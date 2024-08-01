//declaração de variaveis
let anoNascimento
let anoAtual
let idadeCachorro
let nome:
let qualCalculo

//entrada de dados pelo usuário 
nome = promt("Qual seu nome ?");
anoNascimento  = parseInt(prompt("Qual o ano de nascimento"));
anoatual = parseInt(prompt("Qual o ano atual"));

//primeiro desafio
resultado = anoAtual - anoNascimento;

//segundo desafio 
idadeCachorro = resultado * 7;

//terceiro desafio (mostrar o nome do usuario)

//quarto desafio (perguntar qual calculo o usuario quer)
qualCalculo = parseInt(promt("digite 1 para idade humana e 2 para idade canina"));

//mostrar o resultado 
if (qualCalculo == 1) {
    alert(nome + ", a idade é: " + resultado);
    console.log(nome);
}
else if (qualCalculo == 2) {
    alet(nome + ", a idade em anos caninos é: " + idadeCachorro);
} else { 
    alert(nome + ", por favor digite um numero valido.");
}
//desafio ultimato//

//fazer uma calculadora que verifica quantos pontos tem um estudante
//precisa passar de ano no ultimo trimestre

//dica: o estudante precisa informar as notas do primeiro e segundo trimestre 
//com esses dados, a calculadora percisa informar quantos pontos ele precisa para passar
// de ano no terceiro trimestre. Se o estudante ja estiver aprovado no segundo trimestre , 
//mandar uma mensagem de parabens

// utilizar como media o valor 6.0

let nota1;perseInt(prompt("Qual a nota do 1trim?"));
let nota2;perseInt(prompt("qual a nota do 2trim?")):

resultado = 180 - (nota1+nota2)

if(resultado >= 60) {
    alert( "ainda precisa de " + "para passar de " +  "para passar")
} else {alert("parabens!)}
