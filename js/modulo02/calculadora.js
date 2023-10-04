function calculadorasimples() {
    const operacao = parseInt(prompt('Escolha uma opção:'));
  
    if (!operacao || operacao > 6 || operacao < 1) {
      alert('Operação Inválida');
      calculadorasimples();
    } else {
      let n1 = Number(prompt('Insira o primeiro valor:'));
      let n2 = Number(prompt('Insira o segundo valor:'));
      let resultado;
  
      if (isNaN(n1) || isNaN(n2)) {
        alert('Erro - Parâmetros inválidos');
        calculadorasimples();
      } else {
        function soma() {
          resultado = n1 + n2;
          alert(`${n1} + ${n2} = ${resultado}`);
          novaoperacao();
        }
  
        function subtracao() {
          resultado = n1 - n2;
          alert(`${n1} - ${n2} = ${resultado}`);
          novaoperacao();
        }
  
        function multiplicacao() {
          resultado = n1 * n2;
          alert(`${n1} x ${n2} = ${resultado}`);
          novaoperacao();
        }
  
        function divisao() {
          resultado = n1 / n2;
          alert(`O resultado da divisão entre os números ${n1} e ${n2} é ${resultado}`);
          novaoperacao();
        }
  
        function resto() {
          resultado = n1 % n2;
          alert(`O resto da divisão entre os números ${n1} e ${n2} é ${resultado}`);
          novaoperacao();
        }
  
        function potencia() {
          resultado = Math.pow(n1, n2);
          alert(`${n1} elevado a ${n2} é ${resultado}`);
          novaoperacao();
        }
  
        function novaoperacao() {
          let opcao = Number(prompt('Deseja realizar outra operação?\n1 - Sim\n2 - Não'));
          if (opcao === 1) {
            calculadorasimples();
          } else if (opcao === 2) {
            alert('Até mais!');
          } else {
            alert('Digite uma opção válida');
            novaoperacao();
          }
        }
  
        switch (operacao) {
          case 1:
            soma();
            break;
          case 2:
            subtracao();
            break;
          case 3:
            multiplicacao();
            break;
          case 4:
            divisao();
            break;
          case 5:
            resto();
            break;
          case 6:
            potencia();
            break;
        }
      }
    }
  }
  
  calculadorasimples();
  