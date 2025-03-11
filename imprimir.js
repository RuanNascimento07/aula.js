let numero = 1;
while(numero < 10){
console.log(numero);
numero = numero + 1;
}
const lanches = ["x-egg","x-ovo", "x-bacon", "x-tudo", "x-frango"];
const precos = [12,15,15,20,12];
const tamanho = lanches.length;
let contador = 0;
while (contador < tamanho) {
    console.log(lanches[contador]+ " - R$ " + precos[contador]);
    contador = contador + 1;
}