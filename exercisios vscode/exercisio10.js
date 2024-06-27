peso = 150
altura = 1.80
imc = peso / (altura*altura)

if(imc<= 18.5){
    console.log(peso/(altura*altura))
    console.log("abaixo do peso")
}
else if(imc> 18.5 && imc <= 25){
    console.log(peso/(altura*altura))
    console.log("peso normal")
}
else if(imc> 25){
    console.log(peso/(altura*altura))
    console.log("acima do peso")
}
