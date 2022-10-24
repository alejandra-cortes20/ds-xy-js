var pt = []
var tt = []

function fila(maximo) {
  this.Tamaño_Fila = []
  this.max = maximo
  this.llena = llena
  this.vacia = vacia
  this.entrada = entrada
  this.salida = salida
  this.mostrar = mostrar
  this.peek = peek
}
function entrada(element) {
  if (this.llena()) {
    console.log("fila llena, elimina elementos")
  } else {
    this.Tamaño_Fila.push(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("fila vacia, introduce elementos")
  }
  else {
    return this.Tamaño_Fila.shift()
  }
}

function llena() {
  if (this.Tamaño_Fila.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Fila.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let show = ""
  for (let i = 0; i < this.Tamaño_Fila.length; ++i) {
    show += this.Tamaño_Fila[i] + "\n"
  }
  return show
}

function peek() {
  return this.Tamaño_Fila[0]
}

function ord_fila(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let f = new fila(x);
    let q = new fila(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    f.entrada(n)
    while (i < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (f.vacia() != true) {
        q.entrada(f.salida())
        pasos++
      }
      while (r > q.peek()) {
        f.entrada(q.salida())
        pasos++
      }
      if (q.vacia()) {
        f.entrada(r)
        pasos++
      }
      if (r <= q.peek()) {
        f.entrada(r)
        pasos++
      }
      while (q.vacia() != true) {
        f.entrada(q.salida())
      }
      i++
    }
    pt[j - 1] = pasos;
    console.log(f.mostrar())
    console.log("pasos del ciclo " + j + " de " + x + " numeros aleatorios " + pasos)
    var end = Date.now()
    tt[j - 1] = end - start
    console.log("tiempo requerido en el ciclo " + j + " de " + x + " numeros aleatorios " + tt[j - 1] + "s")
    pasos = 0
  }
}
ord_fila(10)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("promedio de pasos totales en 10 numeros aleatorios " + pt[5])
console.log("total de Pasos en 10 numeros aleatorios: " + pt[6])
console.log("promedio de tiempo total en 10 numeros aleatorios" + tt[5] + "s")
console.log("total de tiempo en 10 numeros aleatorios: " + tt[6] + "s")
console.log("-10-")
//-------------------------------------------------------------
ord_fila(100)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("promedio de pasos totales en 100 numeros aleatorios " + pt[5])
console.log("total de Pasos en 100 numeros aleatorios : " + pt[6])
console.log("promedio de tiempo total en 100 numeros aleatorios " + tt[5] + "s")
console.log("Total de tiempo en 100 numeros aleatorios: " + tt[6] + "s")
console.log("-100-")
//-------------------------------------------------------------
ord_fila(1000)
pt[5] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4]) / (5)
pt[6] = (pt[0] + pt[1] + pt[2] + pt[3] + pt[4])
tt[5] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4]) / (5)
tt[6] = (tt[0] + tt[1] + tt[2] + tt[3] + tt[4])
console.log("promedio de pasos totales en 1000 numeros aleatorios " + pt[5])
console.log("Total de pasos en 1000 numeros aleatorios " + pt[6])
console.log("promedio de tiempo total en 1000 numeros aleatorios " + tt[5] + "s")
console.log("Total de tiempo en 1000 numeros aleatorios " + tt[6] + "s")
console.log("-1000-")