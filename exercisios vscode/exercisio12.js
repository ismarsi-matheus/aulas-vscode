medida1=9
medida2=8
medida3=3

//equilatero

if(medida1 == medida2 ==medida3){
    console.log("o triangulo é equilatero")
}
else if (medida3 =medida2==medida1){
    console.log("o triangulo é equilatero")
}
else if (medida2==medida3==medida1){
    console.log("o triangulo e equilatero")
}
//isoceles
else if(medida1==medida2 !=medida3){
    console.log("o trianguloe isoceles")
}
else if (medida1 != medida2 ==medida3){
    console.log("o triangulo e isoceles")
}
else if (medida2!=medida1 ==medida3){
    console.log("o triangulo e isoceles")
}
//escaleno
else if(medida1 != medida2!=medida3){
    console.log("o triangulo e escaleno")
}
else if(medida3!=medida2 !=medida1){
console.log("o  triangulo e escaleno")
}
else if (medida2 !=medida3 !=medida3){
    console.log("o triangulo e escaleno")
}