// Exercicio 5| `Fatorial` | Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6 |

function mostrarFatorial(num) {
  let operacaoFatorial = num - 1
  let resultadoFatorial = num * operacaoFatorial
  while (operacaoFatorial != 1) {
    operacaoFatorial -= 1
    resultadoFatorial *= operacaoFatorial
  }
  return resultadoFatorial
}

console.log(mostrarFatorial(3))