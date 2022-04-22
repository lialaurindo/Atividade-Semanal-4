// Exercicio 1| `For/Break/Continue` | Utilize a estrutura de repetição for para imprimir no console conforme instruções:

// a) números de 1 a 50

for (let contagem = 1; contagem <= 50; contagem + 1) {
}
console.log(contagem)


// b) quando chegar no número 25 interrompa a instrução e pare o loop

for (let contagem = 1; contagem <= 50; contagem + 1) {
  console.log(contagem)

  if (contagem === 25) {
    break
  }
}

// c) quando chegar no número 10 pule a instrução

for (let contagem = 1; contagem <= 50; contagem + 1) {
  console.log(contagem)

  if (contagem === 10) {
    continue
  }
}
