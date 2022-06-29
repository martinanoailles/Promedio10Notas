let nota, suma, promedio, contador: number;
contador = 1;
suma = 0;
while (contador <= 10) {
  nota = Number(prompt("Ingrese una nota"));
  suma = nota + suma;
  contador = contador + 1;
}
promedio = suma / 10;
console.log("El promedio de las notas es:", promedio);
