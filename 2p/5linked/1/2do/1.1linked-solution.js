import { Linked, Node } from '../../../../agcl/linked/node5es.js'

let patito1 = new Node('patito1')
let patito2 = new Node('patito2')

let mama_patito = new Linked(patito1)

mama_patito.append(patito2)
mama_patito.append(new Node('patito3'))
mama_patito.append(new Node('patito4'))

mama_patito.traverse(mama_patito.getHead())

console.log(mama_patito.contains('patito2'))
console.log(mama_patito.contains('una abeja'))

console.log(mama_patito.getTail())