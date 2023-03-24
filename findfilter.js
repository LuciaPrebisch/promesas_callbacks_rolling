// metodos: FIND (para buscar un ID en particular)
// metodos: FILTER (para buscar muchos ID)

/*
const materiales = [{
    id: 1,
    nombre: "aluminio",
    estaEnDeposito: true
} , {
    id: 2,
    nombre: "Cobre" ,
    estaEnDeposito: false
} , {
    id: 3,
    nombre: "Cobre",
    estaEnDeposito: true
}]

const materialBuscado = materiales.find (mat => mat.id === 2)  // se denomina una nueva variable "mat" que hace referencia a todo el objeto que va a buscar por ejemplo el 2 

console.log(materialBuscado) // muestra todo el objeto
console.log(materialBuscado.nombre) // muestra solo el nombre del id 2


---------------         FILTER        -----------------------------------------
el filter busca todas las coincidencias y las devuelve en un nuevo vector
const todosLosMateriales = materiales.filter (mat => mat.nombre === "Cobre")
console.log(todosLosMateriales)
*/


/* --------- EJERCICIO ---------- 
1. Teniendo en cuenta el siguiente objeto: */

const golosinas = [
{
	idGolosinas: 1,
	golosina: "Chicle Globo",
	variante: "Frutilla",
	idMarca: 3,
	costoCaja: 425
},
{
	idGolosinas: 2,
	golosina: "Alfajor",
	variante: "Dulce de Leche",
	idMarca: 2,
	costoCaja: 300
},
{
	idGolosinas: 3,
	golosina: "Gomitas",
	variante: "masticables",
	idMarca: 1,
	costoCaja: 150
},
{
	idGolosinas: 4,
	golosina: "Alfajor",
	variante: "Chocolate",
	idMarca: 2,
	costoCaja: 300
}]
/*
a) Obtene el nombre de la golosina y la variate del idGolosinas = 3
b) Obtene el ID de la golosina Chicle Globo
c) Mostra la marca de los alfajores teniendo en cuenta el siguiente objeto: */
const marcas = [
{
	idMarca: 1,
	nombreMarca: "Mogul"
},
{
	idMarca: 2,
	nombreMarca: "Jorgito"
},
{
	idMarca: 3,
	nombreMarca: "Beldent"
}]

//a: 
const golosinaBuscada = golosinas.find(golo => golo.idGolosinas === 3)
console.log(golosinaBuscada.golosina)
console.log(golosinaBuscada.variante)

//b:
const golosinaBuscada2 = golosinas.find(golo => golo.idGolosinas === 1)
console.log(golosinaBuscada2.idMarca)

//c: 
const todosLosAlfajores = marcas.find (golo => golo.idMarca === 2)
console.log(todosLosAlfajores.nombreMarca)