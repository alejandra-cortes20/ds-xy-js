let obj={}
for(let i=0; i<10000; i++){
  let name= 'name'+(1+Math.floor(Math.random()*1e4))
  obj[name]=name
}
console.log(obj)

console.log(Object.values(obj).length)