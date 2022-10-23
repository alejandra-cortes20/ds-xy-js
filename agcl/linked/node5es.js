export { Linked, Node }

import Node from './node.js'

function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}


function getHead() {
  return this.head
}
function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises 1.1 de 5linked
//
function contains(v) {
  let c = this.head
  let num = false;
  while (c) {//exists
    if (v == c.data) {
      num = c.data
    }
    c = c.next
  }
  return num

}
function getTail() {
  let c = this.head
  let ultimo_ = ""
  while (c) {
    ultimo_ = c.data
    c = c.next
  }
  return ultimo_
}
//Metodos nuevos
function InsertAfter(nueva_letra, colocar) {
  let c = this.head
  let continuacion;
  while (c) {//exists
    if (colocar == c.data) {
      continuacion = c.next
      c.next = nueva_letra
      nueva_letra.next = continuacion
    }
    c = c.next
  }
}
function InsertBefore(nueva_letra, colocar) {
  let c = this.head
  let anterior, continuacion
  if (c.next == null) {
    this.prepend(nueva_letra)
  } else {
    if (colocar != this.head.data) {
      while (c) {//exists
        if (colocar != c.data) {
          anterior = c
        } else {
          continuacion = anterior.next
          anterior.next = nueva_letra
          nueva_letra.next = continuacion
        }
        c = c.next
      }
    } else {
      this.prepend(nueva_letra)
    }
  }
}