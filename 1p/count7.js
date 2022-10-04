let a, b, i;
a = 0;
for (i = 200; i <= 300; i++) {
  if (i % 7 == 0) {
    a = a + 1;
  }
}
console.log("multiplos del 7 en el rango 200-300: " + a + "multiplos")