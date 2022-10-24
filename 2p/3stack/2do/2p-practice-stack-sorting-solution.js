var y = []
var z = []
function pila(max) {
  this.tam_pila = []
  this.max = max
  this.llena = llena
  this.vacio = vacio
  this.entrada = ent
  this.salida = exit
  this.mostrar = most
  this.peek = peek
}

function ent(element) {
  if (this.llena()) {
    console.log("stack llena")
  } else {
    this.tam_pila.unshift(element)
  }
}

function exit() {
  if (this.vacio()) {
    console.log("pila vacia, introduce elementos")
  }
  else {
    return this.tam_pila.shift()
  }
}

function llena() {
  if (this.tam_pila.length === this.max)
    return true
  else
    return false
}

function vacio() {
  if (this.tam_pila.length === 0)
    return true
  else
    return false
}

function most() {
  let m = ""
  for (let i = 0; i < this.tam_pila.length; ++i) {
    m += this.tam_pila[i] + "\n"
  }
  return m
}

function peek() {
  return this.tam_pila[0]
}

function pila_num(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var comenzar = Date.now()
    let a = new pila(x);
    let b = new pila(x);
    let c, d;
    let i = 1;
    c = Math.floor(Math.random() * (x - 1) + 1)
    a.entrada(c)
    while (i < x) {
      while (b.vacio() != true) {
        a.entrada(b.salida())
        pasos++
      }
      d = Math.floor(Math.random() * (x - 1) + 1)
      while (d <= a.peek() && a.vacio() != true) {
        b.entrada(a.salida())
        pasos++
      }
      if (d >= a.peek() || a.vacio()) {
        a.entrada(d)
        pasos++
      }
      i++
    }
    while (!b.vacio()) {
      a.entrada(b.salida())
    }
    y[j - 1] = pasos;
    console.log(a.mostrar())
    console.log("pasos en el ciclo " + j + " de " + x + " numeros aleatorios son: " + pasos)
    var date = Date.now()
    z[j - 1] = date - comenzar
    console.log("tiempo requerido en el ciclo " + j + " de " + x + " numeros aleatorios son: " + z[j - 1] + "s")
    pasos = 0
  }
}
pila_num(10)
y[5] = (y[0] + y[1] + y[2] + y[3] + y[4]) / (5)
y[6] = (y[0] + y[1] + y[2] + y[3] + y[4])
z[5] = (z[0] + z[1] + z[2] + z[3] + z[4]) / (5)
z[6] = (z[0] + z[1] + z[2] + z[3] + z[4])
console.log("promedio de pasos totales en 10 numeros aleatorios " + y[5])
console.log("total de pasos en 10 numeros aleatorios: " + y[6])
console.log("tiempo promedio total en 10 numeros aleatorios " + y[5] + "s")
console.log("total de tiempo en 10 numeros aleatorios " + z[6] + "s")
console.log("-10-")
//-------------------------------------------------------------
pila_num(100)
y[5] = (y[0] + y[1] + y[2] + y[3] + y[4]) / (5)
y[6] = (y[0] + y[1] + y[2] + y[3] + y[4])
z[5] = (z[0] + z[1] + z[2] + z[3] + z[4]) / (5)
z[6] = (z[0] + z[1] + z[2] + z[3] + z[4])
console.log("promedio de pasos totales en 100 numeros aleatorios" + y[5])
console.log("total de pasos en 100 numeros aleatorios " + y[6])
console.log("tiempo promedio total en 100 numeros aleatorios " + z[5] + "s")
console.log("tiempo total en 100 numeros aleatorios " + z[6] + "s")
console.log("-100-")
//-------------------------------------------------------------
pila_num(1000)
y[5] = (y[0] + y[1] + y[2] + y[3] + y[4]) / (5)
y[6] = (y[0] + y[1] + y[2] + y[3] + y[4])
z[5] = (z[0] + z[1] + z[2] + z[3] + z[4]) / (5)
z[6] = (z[0] + z[1] + z[2] + z[3] + z[4])
console.log("promedio de pasos total en 1000 numeros aleatorios " + y[5])
console.log("total de pasos en 1000 numeros aleatorios " + y[6])
console.log("tiempo promedio total en 1000 numeros aleatorios " + z[5] + "s")
console.log("tiempo total en 1000 numeros aleatorios " + z[6] + "s")
console.log("-1000-")