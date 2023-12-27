
// calculadora --------------
class Calc {
  constructor() {

  }

  somar(n1, n2) {
      try {
          if (isNaN(n1) || isNaN(n2)) {
              throw new Error("Apenas números");
          }
          return n1 + n2;
      } catch (error) {
          console.error(error.message);
      }
  }

  subtrair(n1, n2) {
      try {
          if (isNaN(n1) || isNaN(n2)) {
              throw new Error("Apenas números");
          }
          return n1 - n2;
      } catch (error) {
          console.error(error.message);
      }
  }

  multiplicar(n1, n2) {
      try {
          if (isNaN(n1) || isNaN(n2)) {
              throw new Error("Apenas números");
          }
          return n1 * n2;
      } catch (error) {
          console.error(error.message);
      }
  }

  dividir(n1, n2) {
      try {
          if (isNaN(n1) || isNaN(n2)) {
              throw new Error("Apenas números");
          }
          if (n2 === 0) {
              throw new Error("Divisão por zero não é permitida");
          }
          return n1 / n2;

      } catch (error) {
          console.error(error.message);
      }
  }


  exponenciacao(n1, n2) {
      try {
          if (isNaN(n1) || isNaN(n2)) {
              throw new Error("Apenas números");
          }
          return n1 ** n2;
      } catch (error) {
          console.error(error.message);
      }
  }


  fatoracao(numero) {
      try {
          if (isNaN(numero)) {
              throw new Error("Apenas números");
          }

          const fatores = [];

          for (let i = 2; i <= numero; i++) {
              while (numero % i === 0) {
                  fatores.push(i);
                  numero /= i;
              }
          }

          return fatores;
      } catch (error) {
          console.error(error.message);
      }

  }

  porcentagem(n1, n2) {
      try {
          if (isNaN(n1) || isNaN(n2)) {
              throw new Error("Apenas números");
          }
          return (n1 / n2) * 100;
      } catch (error) {
          console.error(error.message);
      }
  }

  RaizQuadrada(n1) {
      try {
          if (isNaN(n1)) {
              throw new Error("Apenas números");
          }
          return Math.sqrt(n1);
      } catch (error) {
          console.error(error.message);
      }
  }
}



let calc = new Calc();

function insert(num) {
  let resultadoElement = document.getElementById('resultado');
  let resultado = resultadoElement.innerHTML;

  if (resultado.length < 16) {
      resultadoElement.innerHTML = resultado + num;
  }
}

function apagarValor() {
  document.getElementById('resultado').innerHTML = "";

}

function back() {
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular() {
  let expressao = document.getElementById('resultado').innerHTML;
  if (expressao) {
      let valores = expressao.split(/[\+\-\*\÷\√\^\%\F]/);
      let operador = expressao.match(/[\+\-\*\÷\√\^\%\F]/);

      if (valores.length === 2 && operador) {
          let valor1 = Number(valores[0]);
          let valor2 = Number(valores[1]);

          switch (operador[0]) {
              case "+":
                  document.getElementById('resultado').innerHTML = (`${calc.somar(valor1, valor2)}`);
                  break;
              case "-":
                  document.getElementById('resultado').innerHTML = (`${calc.subtrair(valor1, valor2)}`);
                  break;
              case "*":
                  document.getElementById('resultado').innerHTML = (`${calc.multiplicar(valor1, valor2)}`);
                  break;
              case "÷":
                  if (valor2 !== 0) {
                      document.getElementById('resultado').innerHTML = (`${calc.dividir(valor1, valor2)}`);
                  } else {
                      document.getElementById('resultado').innerHTML = ("Erro");
                  }
                  break;
              case "√":
                  document.getElementById('resultado').innerHTML = (`${calc.RaizQuadrada(valor1)}`)
                  break;
              case "^":
                  document.getElementById('resultado').innerHTML = (`${calc.exponenciacao(valor1, valor2)}`)
                  break;

              case "%":
                  document.getElementById('resultado').innerHTML = (`${calc.porcentagem(valor1, valor2)}`)
                  break;
              case "F":
                  document.getElementById('resultado').innerHTML = (`${calc.fatoracao(valor1)}`);
                  break;

              default:
                  console.log("Operador não reconhecido");
                  break;
          }
      } else {
          console.log("Expressão inválida");
      }
  }
}



