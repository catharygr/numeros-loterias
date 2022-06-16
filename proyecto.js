const container = document.querySelector('#container')
const containerDos = document.querySelector('#containerDos')
document.querySelector('#btn').addEventListener('click', ganaAhora)


// Generar numero aleatorio en una funcion
function numeroRandom() {
  return Math.floor(Math.random() * 50) + 1
}

// array donde se guardara los numeros de la suerte
let numAleatorios = []


// Funcion que ejecuta el boton 
function ganaAhora() {
  // vaciar numerosAleatorios antiguos y el container
  numAleatorios = []
  container.innerHTML = ''
  
  // empujar el primer numero a nuestro array
  numAleatorios.push(numeroRandom())

// se compara el numero para ver si se duplica con el metodo find y  sei no es duplicado se empuja en el array original 
  do {
       const numActual = numeroRandom()
       const esDuplicado =  numAleatorios.find( num => num === numActual )

      if (!esDuplicado) {
        numAleatorios.push(numActual)
      }
  } while (numAleatorios.length < 6)
  
  // Ordenar los numeros en un array
  numAleatorios.sort( (a,b) => a - b)
 

  numAleatorios.forEach( num => {
    container.innerHTML += `
    <div class="cuadrado">${num}</div>
    `})

    containerDos.innerHTML = `
    <div class="cuadrado cuadrado-dos">${Math.floor(Math.random() * 9) + 1}</div>
    `

  }






























// document.querySelector('#btn').addEventListener('click', ganaAhora)



// function ganaAhora() {
// const numeros = document.querySelector('#numeros')
// numeros.textContent = Math.floor(Math.random() * 50 )

// }

// ganaAhora()