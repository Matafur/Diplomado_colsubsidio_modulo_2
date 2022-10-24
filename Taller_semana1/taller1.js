
function imprimir(param1,param2="x"){

    if (typeof param1 === 'number'){
        param1 = Math.pow(`${param1}`,2);
        
        let i = 0;
        while ( i < param1 ){
            
            console.log(`${param2} `.repeat(param1) ) 
            i++ 
        }
    }else if(typeof param1 === 'undefined' ){
        console.log("Ingrese numero")
    
    }else if(typeof param1 === 'string'){
        console.log("Caracteres no validos, ingrese un numero")
    }


}
imprimir(4,'a')