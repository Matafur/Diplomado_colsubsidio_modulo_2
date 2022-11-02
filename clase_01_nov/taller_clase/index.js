
const card = document.getElementById("cards"); //creamos la constante donde lo vamos agregar
const fragment = document.createDocumentFragment() // creamos el fragment 

const img = document.createElement("img"); // creamos el elemento img
img.textContent = "Don Ramon" //le damos texto a la etiqueta img
img.setAttribute("class", "card-img-top") // agregamos atributos a la etiqueta IMG
img.setAttribute("src", "./descarga.jpg") // agregamos atributos a la etiqueta IMG
fragment.appendChild(img) // aplicamos fragment agregandole el contenido de la constante img



const bodys = document.createElement("div") // creamos el div que ira dentro de card

bodys.setAttribute("class","card-body") // agregamos atributos a la etiqueta div
fragment.appendChild(bodys) // aplicamos fragment a la etiqueta div

card.appendChild(fragment) // agregamos a la cosntante card lo que se haya guardado en la constante fragment

const fragmento = document.createDocumentFragment() // creamos una nueva constante fragment para todo lo que ira dentro del nuevo div


const h5 = document.createElement( 'h5'); // creamos la etiqueta h5
h5.textContent = "Card Title" // agregamos contenido a la etiqueta h5
h5.setAttribute("class","card-title") // agregamos atributos a la etiqueta h5
fragmento.appendChild(h5) // agregamos el contenido a fragmento



const p = document.createElement("p");  // creamos la etiqueta p
p.textContent = "Some quick example text to build on the card title and make up the bulk" // agregamos contenido a la etiqueta p
p.setAttribute("class","card-text")  // agregamos atributos a la etiqueta p
fragmento.appendChild(p) // agregamos el contenido a fragmento



const a = document.createElement("a"); // creamos la etiqueta a
a.textContent = "Go somewhere" // agregamos contenido a la etiqueta a
a.setAttribute("class","btn btn-primary") // agregamos atributos a la etiqueta a
fragmento.appendChild(a) // agregamos el contenido a fragmento
 


bodys.appendChild(fragmento) //las etiquetas h5,p y a se agregaron anteriormente a fragmento, ahora estamos agregando todo a la etiquta bodys (div) contenedor











