let a, b, i;
a = 1;
for (i = 200; i <= 300; i++) {
  if (i % 7 == 0) {
    a = i * a;
  }
}
console.log("resultado multiplicatoria rango 200-300  " + a);