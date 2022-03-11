var moedas = ["Real", "Dólar Americano", "Euro", "Libra Esterlina", "Dólar Canadense", "Dólar Australiano", "Franco Suíço", "Coroa Dinamarquesa", "Iene", "Coroa Norueguesa", "Coroa Sueca"]
var cotacaoMoedas = [1, 5.42, 6.34, 7.40, 4.23, 3.88, 5.91, 0.85, 0.049, 0.60, 0.62]
var valor 

var btnCalcular = document.getElementById("btnCalc")

btnCalcular.onclick = function(event) {
    valor = Number(document.getElementById("idValor").value)
    transformarValorEntrada()
    document.getElementById("idOut").innerHTML = "Valor convertido: " + valor.toFixed(2)
    document.getElementById("idMoedaEntrada").value = ""
    document.getElementById("idMoedaSaida").value = ""
    document.getElementById("idValor").value = ""
}


//Transformando em real
function transformarValorEntrada(){
   let moedaEntrada = document.getElementById("idMoedaEntrada").value
   for (let i = 0; i < moedas.length; i++) {
       if(moedaEntrada == moedas[i]){
            valor = cotacaoMoedas[i] * valor
       }
      
   } 

   let moedaSaida = document.getElementById("idMoedaSaida").value
   for (let i = 0; i < moedas.length; i++) {
       if(moedaSaida == moedas[i]){
           valor = valor / cotacaoMoedas[i]
       }
   } 
}