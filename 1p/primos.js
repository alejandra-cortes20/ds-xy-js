function primo(numero) {
    for(let i = 2,raiz=Math.sqrt(numero); i <= raiz; i++)
        if(numero % i === 0) return false;
    return numero > 1;
}
for (let x=0; x<=32; x++) {
    if(primo(x))
    console.log("el numero  " + x + " es primo");
}