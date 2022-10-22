import { Linked, Node } from '../../../../agcl/linked/node5es.js'

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')

let abecedario = new Linked(a)
abecedario.append(b)
abecedario.append(c)

abecedario.traverse(abecedario.getHead())

abecedario.InsertAfter(new Node('f'), 'b')
abecedario.traverse(abecedario.getHead())

abecedario.InsertBefore(new Node('e'),'b')
abecedario.traverse(abecedario.getHead())