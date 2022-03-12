const button =document.getElementById("btn");

//Dinamic Import
button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello()
})


