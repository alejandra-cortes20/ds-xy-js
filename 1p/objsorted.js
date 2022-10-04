let obj = {}, obj2 = {}, x=0;;

for (i = 1; i <= 10e3; i++) {
  x = Math.floor(Math.random() * 10e3);
  obj[x] = x;
}
keys = Object.keys(obj)
for (i = 0; i < keys.length; i++) {
  let name = "name:"
  obj2[name + keys[i]] = name + keys[i]
}

console.log(obj2)