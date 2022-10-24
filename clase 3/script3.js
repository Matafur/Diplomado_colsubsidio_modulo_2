
function imprimir(numero){
    if (typeof numero === 'number'){
        let i = 0
        while ( i < numero ){
            console.log("C is fun")
            i++
        }
    }else if(typeof numero === 'undefined' ){
        console.log("Missing number of ocurrens")
    
    }else if(typeof numero === 'string'){
        console.log("Ingrese numero")
    }


}
