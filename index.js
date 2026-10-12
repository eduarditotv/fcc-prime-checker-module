function isPrime(num) {
  // Los números menores o iguales a 1 no son primos
  if (num <= 1) {
    return false;
  }
  // El 2 es el único número primo par
  if (num === 2) {
    return true;
  }
  // Descartar otros números pares rápidamente
  if (num % 2 === 0) {
    return false;
  }
  
  // Comprobar divisores impares hasta la raíz cuadrada del número
  const limite = Math.sqrt(num);
  for (let i = 3; i <= limite; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Exportar isPrime como propiedad nombrada
module.exports = {
  isPrime
};