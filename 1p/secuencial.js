let v = [], p = 0;

for (i = 0; i < 10e3; i++)
  v[i] = (Math.floor(Math.random() * 10e3))
function BSecunecial(x, v) {
  console.log(v);
  for (var i in v) {
    if (v[i] == x) {
      return "La posicion en el Arreglo es: " + i;
    }
    p++
  }
  return "La posicion en el Arreglo es: " + -1;
}

x = Math.floor(Math.random() * 10e3)
console.log("n " + x)
console.log(BSecunecial(x, v))
console.log("pasos "+p)
p=0
for (i = 0; i < 10e4; i++)
  v[i] = (Math.floor(Math.random() * 10e4))

x = Math.floor(Math.random() * 10e4)
console.log("n " + x)
console.log(BSecunecial(x, v))
console.log("pasos "+p)
p=0
for (i = 0; i < 10e5; i++)
  v[i] = (Math.floor(Math.random() * 10e5))
x = Math.floor(Math.random() * 10e5)
console.log("n " + x)
console.log(BSecunecial(x, v))
console.log("pasos "+p)