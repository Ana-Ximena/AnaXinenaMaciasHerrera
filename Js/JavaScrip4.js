document.addEventListener("keydown",function(event){console.log(event)});
document.addEventListener("keydown", function(event){
    const texto = document.getElementById("Texto");
    if(event.key === "ArrowUp"){
        texto.textContent="Flecha ariba";
    }
    else if(event.key=== "ArrowDown"){
        texto.textContent="Flecha abajo";
    }
})
document.addEventListener("keydown",function(event){

    const elemento = document.getElementById("cuerpo");
    if (event.key ==="1"){

        elemento.className = "cuerpo01";

    }

    if(event.key ==="2"){

        elemento.className = "cuerpo02";
    
    }

    if(event.key ==="3"){

        elemento.className = "cuerpo03";
    
    }
    if(event.key ==="4"){

        elemento.className = "cuerpo04";
    
    }
    if(event.key ==="5"){

        elemento.className = "cuerpo05";
    
    }
   
});