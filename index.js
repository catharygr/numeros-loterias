
const container = document.querySelector('#container')
const containerUno = document.querySelector('#containerUno')


document.querySelector('.btn').addEventListener('click', muchaSuerte)

const numeroRandom = () =>  Math.floor(Math.random() * 50) + 1
const numeroRandomDos = () =>  Math.floor(Math.random() * 9) + 1

 let numerosAleatorios = []
 let dosAleatorios = []

function muchaSuerte() {

  numerosAleatorios = []
  dosAleatorios = []
  container.innerHTML = ''
  containerUno.innerHTML = ''
  numerosAleatorios.push(numeroRandom())
  dosAleatorios.push(numeroRandomDos())

  do {
    const numNuevo = numeroRandom()
    const esDuplicado =  numerosAleatorios.find( num => num === numNuevo )

   if (!esDuplicado) {
     numerosAleatorios.push(numNuevo)
   }
} while (numerosAleatorios.length < 5)

numerosAleatorios.sort( (a,b) => a - b)


numerosAleatorios.forEach( num => {
  container.innerHTML += `
  <div class="cuadro-suerte">${num}</div>
  `})

  do {
    const otroNumero = numeroRandomDos()
    const esDuplicadoDos =  dosAleatorios.find( num => num === otroNumero )

   if (!esDuplicadoDos) {
     dosAleatorios.push(otroNumero)
   }
} while (dosAleatorios.length < 2)

dosAleatorios.sort( (a,b) => a - b)

dosAleatorios.forEach( num => {
  containerUno.innerHTML += `
  <div class=" cuadro-suerte   doblede-suerte">${num}</div>
  `})



}








  






































/* 
1- hacer una funcion que genere numeros aleatorios del 1 al 50, extra punto por hacer arrow function
2- Crear la funcion que generara 6 mas un punto de  la loterias
3- dentro de la funcion 
-crear nuestro array que tendra los 6 numeros principales 
-Generar el primer numero y empujarlo en nuestro array
-Crear un loop 
-dentro del loop , generar un numero aleatorio llamado actual numero
-comparar el numero actual con nuestro array para ver si hay un numero duplicado
- Hacer una condional en el caso de no ser dupliacdo empujar el numero actual en nuestro array 
-La condicion de nuestro loop es ejecutarse mientras que la longitud de nuestro array es menor de 6 
-Oedenar los numeros 
-escribir los numeros en el DOM

4- Generar un numero aleatorio 1 al 9 y escribirlo en el DOM











*/