var valorEmDolarTexto = prompt("Quantos euros você vai precisar ter lá na Irlanda?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
var valorEmReal = valorEmDolarNumero * 6.73
var valorEmRealFixado = valorEmReal.toFixed(2)

alert("Então você vai precisar de R$ " + valorEmRealFixado)

// Revisão
// variáveis var int - float - string
// alert - parseInt - parsefloat - prompt
// operações + somar * multiplicar
// comentários final