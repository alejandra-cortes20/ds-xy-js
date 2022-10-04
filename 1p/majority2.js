let v = [], cont = 1, p = 0,m, r = 0;


for (i = 0; i <5; i++)
  v[i] = Math.floor(Math.random() * (5-1)+1);
console.log(v)
mayoritario = Math.floor(v.length / 2)
v.sort()
console.log(v)

if (r > mayoritario)
  console.log("mayoritario " + m)
else 
  console.log("no se encontro mayoritario")