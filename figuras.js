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
