function perimetroCuadrado(lado){
    return lado*4;
}

function AreaCuadrado(lado){
    return lado*lado;
}

function perimetroTriangulo(lado1,lado2,ladoBase){
    return lado1+lado2+ladoBase;
}

function AreaTriangulo(base,altura){
    return (base*altura)/2;
}
//
function diametroCirculo(radio){
    return radio*2;
}

function circunferenciaCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
}

function areaCirculo(radio){
    return (radio*radio)*Math.PI;
}

function calcularPerimetroCuadrado(){
    let input =document.getElementById("InputCuadrado");
    let CuadradpValue =input.value;
    
    alert("Perimetro del cuadrado:"+perimetroCuadrado(CuadradpValue));
}

function calcularAreaCuadrado(){
}

function calcularAlturaTrianguloIsosceles(lado1,lado2,ladoBase){

    //Validando que almenos 2 lados sean iguales.
    if(lado1==lado2){
        return Math.sqrt(Math.pow(lado1,2)-(Math.pow(lado2,2)/4));
    }else{
        console.log("Lado1 diferete del lado2");
    }

}


