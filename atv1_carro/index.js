let tipoCarro;
let kmPercorrido;
let diasAlugado;
let valorTotal;

//.toUpperCase(); Função para transformar o valor da string original convertido em letras maiúsculas.
tipoCarro = prompt("Digite L para carro de Luxo e P para carro Popular: ").toUpperCase();
kmPercorrido = parseFloat(prompt("Insira a quantidade de KM percorrido: "));
diasAlugado = parseInt(prompt("Insira a quantidade de dias alugados"));


if ((tipoCarro !== "L" && tipoCarro !== "P") || isNaN(kmPercorrido) || isNaN(diasAlugado)) {
    alert("Você inseriu alguma informação incorreta,tente novamente");
} else {

    if (tipoCarro == "P") {

        if (kmPercorrido <= 100) {
            valorTotal = (diasAlugado * 90) + (kmPercorrido * 0.20);
        } else {
            valorTotal = (diasAlugado * 90) + (kmPercorrido * 0.10);
        }

    } else {

        if (kmPercorrido <= 200) {
            valorTotal = (diasAlugado * 150) + (kmPercorrido * 0.30);
        } else {
            valorTotal = (diasAlugado * 150) + (kmPercorrido * 0.25);
        }
    }

    alert(`O valor a ser pago é de R$ ${valorTotal}`)
}
