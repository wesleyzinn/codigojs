let tentativa = 0;
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
let resultado = min + Math.trunc(dif * aleatorio);

function AdivinhaNumero() {
    tentativa = prompt("Digite a sua tentativa");

    let dados = window.document.getElementById('tentativas');

    if(tentativa == resultado){
        dados.innerHTML += "<p> Parabéns, o número que eu pensei é esse: " + tentativa + ".<p>"
        document.getElementById('botao').style.visibility = 'hidden';
    } else if(tentativa < resultado){
        dados.innerHTML += "<p> Você falou " + tentativa + ". Meu número é <b>MAIOR</b><p>"
    } else if(tentativa > max){
        dados.innerHTML += "<p> <b>Digite um número entre 1 a 100.</b><p>"
    } else if(tentativa > resultado){
        dados.innerHTML += "<p>Vocẽ falou " + tentativa + ". Meu número é MENOR<p>"
    } 



}
