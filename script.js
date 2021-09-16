function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    console.log("Valor em dolar inserido: " + valorEmDolarNumerico);
    var valorEmRealNumerico = valorEmDolarNumerico * 5;
    console.log("Valor inserido convertido para Real: " + valorEmRealNumerico);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmRealNumerico; //.toFixed(2)
  
    elementoValorConvertido.innerHTML = valorConvertido;
  }
