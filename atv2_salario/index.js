let salarioFuncionario;
let anosTrabalhados;
let generoFuncionario;

//.toUpperCase(); Função para transformar o valor da string original convertido em letras maiúsculas, para comparação.
generoFuncionario = prompt("Insira o gênero do funcionário, F = Feminino e M = Masculino ").toUpperCase();
salarioFuncionario = parseFloat(prompt("Insira o Salário Atual do funcionário:"));
anosTrabalhados = parseInt(prompt("Insira a quantidade de anos trabalhados pelo funcionário: "));

if ((generoFuncionario !== "M" && generoFuncionario !== "F") || isNaN(salarioFuncionario) || isNaN(anosTrabalhados)) {
    alert("Você inseriu alguma informação incorreta,tente novamente");
} else {

    if (generoFuncionario == "F") {

        if (anosTrabalhados < 5) {
            salarioFuncionario = (0.04 * salarioFuncionario) + salarioFuncionario;
        } else if (anosTrabalhados >= 5 && anosTrabalhados <= 10) {
            salarioFuncionario = (0.07 * salarioFuncionario) + salarioFuncionario;
        } else if (anosTrabalhados >= 15 && anosTrabalhados <= 20) {
            salarioFuncionario = (0.12 * salarioFuncionario) + salarioFuncionario;
        } else if (anosTrabalhados > 20) {
            salarioFuncionario = (0.23 * salarioFuncionario) + salarioFuncionario;
        } else {
            alert("Não houve ajuste");
        }

    } else {

        if (anosTrabalhados < 5) {
            salarioFuncionario = (0.03 * salarioFuncionario) + salarioFuncionario;
        } else if (anosTrabalhados >= 5 && anosTrabalhados <= 15) {
            salarioFuncionario = (0.08 * salarioFuncionario) + salarioFuncionario;
        } else if (anosTrabalhados >= 20 && anosTrabalhados <= 30) {
            salarioFuncionario = (0.14 * salarioFuncionario) + salarioFuncionario;
        } else if (anosTrabalhados > 30) {
            salarioFuncionario = (0.25 * salarioFuncionario) + salarioFuncionario;
        } else {
            alert("Não houve ajuste");
        }

    }
    alert(`O salário do funcionario é R$ ${salarioFuncionario}`);
}