import { Linked, Node } from '../../../../agcl/linked/node5es.js'

let num_1 = new Node('num_1')
let num_2 = new Node('num_2')

let number = new Linked(num_1)

number.append(num_2)
number.append(new Node('num_3'))
number.append(new Node('num_4'))

number.traverse(number.getHead())

console.log(number.contains('num_2'))
console.log(number.contains('hola'))

console.log(number.getTail())