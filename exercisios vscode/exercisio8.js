ano = 2026
function bissexto (ano){
    return (ano % 4 == 0 && (ano %100 !== 0 || ano % 400 ===0))
}
if (bissexto(ano)){
    console.log (ano + 'é um ano bissexto')
}
else{
    console.log(ano="nao é bissexto")
}

console.log()
