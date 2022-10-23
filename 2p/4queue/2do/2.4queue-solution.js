function queue() {
  this.Tamaño_queue = []
  this.max = 5
  this.entrada = entrada
  this.salida = salida
  this.llena = llena
  this.vacia = vacia
  this.mostrar = mostrar
}


function entrada(element) {
  if (this.llena()) {
    console.log("fila llena, elimina elementos")
  }
  else {
    this.Tamaño_queue.push(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("fila vacia, introduce elementos")
  }
  else {
    this.Tamaño_queue.shift()
  }
}

function llena() {
  if (this.Tamaño_queue.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_queue.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let show = ""
  for (let i = 0; i < this.Tamaño_queue.length; ++i) {
    show += this.Tamaño_queue[i] + "\n"
  }
  return show
}

let prueba = new queue();

prueba.entrada("rosa")
prueba.entrada("morado")
prueba.entrada("azul")
prueba.entrada("verde")
prueba.entrada("rojo")
console.log(prueba.mostrar())
prueba.entrada("gris")
prueba.salida()
prueba.salida()
prueba.salida()
prueba.salida()
prueba.salida()
prueba.salida()