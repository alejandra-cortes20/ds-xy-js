let v = [], v2 = [], m, r = 0;

for (i = 0; i <5; i++)
  v[i] = Math.floor(Math.random() *(4-1)+1);
console.log(v)
for (i = 0; i <= 4; i++)
  v2[i] = 0;
posicion = 1;
mayoritario = Math.floor(v.length/2)
if (r > mayoritario) 
  console.log("mayoritario " + m)
else
  console.log("no se encontro mayoritario")