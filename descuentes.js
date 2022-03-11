var precioOriginal=100;
var descuento=15;


function calcularPrecioConDescuento(precio,descuento){
    let porcentajePrecioConDescuento=100-descuento;
    let precioConDescuento=(precio*porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    let inputPrice = document.getElementById("Price");    
    let inputDiscount = document.getElementById("Discount");
        
    document.getElementById("ResultPrice").innerText="El precio con descuento son: $"+calcularPrecioConDescuento(inputPrice.value,inputDiscount.value);
}

