// Exercicio 2| `10 em 10` | Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".|

function contarAteDez(x) {
  while (x < 100) {
    x += 10
    if (x === 60 || x === 90) {
      console.log('Continue')
      continue
    }
    console.log(contarAteDez)
  }
}
