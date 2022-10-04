let v = [],p = 0;
for (i = 0; i < 10e3 - 1; i++)
  v[i] = (Math.floor(Math.random() * 10e3))

function up(a, b) {
  return a - b;
}
function BBinario(x,v) {
  v.sort(up);
  console.log(v)
  var low = 0, high = v.length - 1, mid, element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = v[mid]
    if (element < x) {
      low = mid + 1
    } else if (element > x) {
      high = mid - 1;
    } else {
      return "posicion en arreglo:  "  + mid;
    }
    p++
  }
  return "posicion en arreglo:  " + -1
}
x = Math.floor(Math.random() * 10e3);
console.log("n " + x)
console.log(BBinario(x, v))
console.log("pasos " + p)
p=0

for (i = 0; i < 10e4 - 1; i++)
  v[i] = (Math.floor(Math.random() * 10e4))
x = Math.floor(Math.random() * 10e4);
console.log("n " + x)
console.log(BBinario(x, v))
console.log("pasos " + p)
p=0

for (i = 0; i < 10e5 - 1; i++)
  v[i] = (Math.floor(Math.random() * 10e5))
x = Math.floor(Math.random() * 10e5);
console.log("n " + x)
console.log(BBinario(x, v))
console.log("pasos " + p)