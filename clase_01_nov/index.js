const lista = document.getElementById("lista"); //a donde lo vamos agregar

console.log(lista); // mostrar por consola que elemento estamos utilizando

let conjunto = ["primer elemento" , "segundo elemento" , "tercer elemento"]

conjunto.forEach(element => {
    
    const li = document.createElement("li"); // creando el elemento li dentro del elemento ul

    li.textContent = element // agregando contenido a la etiqueta li

    li.setAttribute("id","elemento")
    
    lista.appendChild(li); // insertando la variable lista al padre (ul)-    

})

lista.setAttribute("class","d-flex text-danger")
