
function imprimir(param1,param2="X"){

    if (typeof param1 === 'number'){
//        param1 = Math.pow(`${param1}`,2);
        
        let i = 0;
        while ( i < param1 ){
            
            console.log(`${param2}`.repeat(param1) ) 
            i++ 
        }
    }else if(typeof param1 === 'undefined' || typeof param1 === 'string' ){
        console.log("Missing Size")
    
    }/*else if(typeof param1 === 'string'){
        console.log("Caracteres no validos, ingrese un numero")
    }*/


}
imprimir('o')