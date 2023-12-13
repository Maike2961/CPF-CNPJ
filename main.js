  //formatação do cpf no input
  var cpf = document.getElementById("cpfcnpj");
  cpf.addEventListener('input',() => {
      let valida = cpf.value
      if (valida.length == 3 || valida.length == 7) {
          cpf.value += '.'
      } else if (valida.length == 11) {
          cpf.value += '-'
      } else {
          return false
      }
  })
  //formatação do cnpj no input
  var cnpj = document.getElementById("cnpj");
  cnpj.addEventListener('input', () => {
      let valida = cnpj.value.length
      if (valida === 2 || valida === 6) {
          cnpj.value += '.'
      } else if (valida === 10) {
          cnpj.value += '/'
      } else if (valida === 15) {
          cnpj.value += '-'
      } else {
          return false
      }
  })

  const valida1cpf = () => {
      let cnpjteste = document.getElementById("cpfcnpj")
      cnpjteste.addEventListener('input', function () {
          var teste = cnpjteste.value
          const cpf = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
          let dados = teste.replace(cpf, '$1.$2.$3-$4').length;
          if (dados == 14) {
              validar2cpf(teste)
          } else {
              return false
          }
      })
  }
  valida1cpf()

  //calculo do CPF
  const validar2cpf = (getcpf) => {
      let soma = 0
      console.log(getcpf)
      cpf = getcpf.replace(/[^\d]+/g, '');
      console.log(typeof (cpf))
      if (
          cpf.length != 11 ||
          cpf == "00000000000" ||
          cpf == "11111111111" ||
          cpf == "22222222222" ||
          cpf == "33333333333" ||
          cpf == "44444444444" ||
          cpf == "55555555555" ||
          cpf == "66666666666" ||
          cpf == "77777777777" ||
          cpf == "88888888888" ||
          cpf == "99999999999" ||
          cpf == "01234567890") {
          document.getElementById("tela").innerHTML = "CPF inválido"
          return false
      } else {
          //primeiro digito
          soma += cpf[0] * 10
          soma += cpf[1] * 9
          soma += cpf[2] * 8
          soma += cpf[3] * 7
          soma += cpf[4] * 6
          soma += cpf[5] * 5
          soma += cpf[6] * 4
          soma += cpf[7] * 3
          soma += cpf[8] * 2
          soma = (soma * 10) % 11;

          if (soma == 10 || soma == 11) {
              soma = 0
          }
          console.log(`Primeiro Digito é ${soma}`)
          if (soma != cpf[9]) {
              document.getElementById("tela").innerHTML = "CPF inválido"
              return false
          }
          
          //segundo digito
          soma = 0
          soma += cpf[0] * 11
          soma += cpf[1] * 10
          soma += cpf[2] * 9
          soma += cpf[3] * 8
          soma += cpf[4] * 7
          soma += cpf[5] * 6
          soma += cpf[6] * 5
          soma += cpf[7] * 4
          soma += cpf[8] * 3
          soma += cpf[9] * 2
          soma = (soma * 10) % 11;
          if (soma == 10 || soma == 11) {
              soma = 0
          }
          if (soma != cpf[10]) {
              document.getElementById("tela").innerHTML = "CPF inválido"
              return false
          } else {
              console.log(`Segundo Digito é ${soma}`)
              document.getElementById("tela").innerHTML = "É valido esse CPF: " + getcpf
          }
      }

  }
  const validacnpj = () => {
      let cnpjteste = document.getElementById("cnpj")
      cnpjteste.addEventListener('input', function () {
          var teste = cnpjteste.value
          const cnpj = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/
          let dados = teste.replace(cnpj, '$1.$2.$3/$3-$5').length;
          if (dados == 18) {
              valida2cnpj(teste)
          }
      })
  }
  validacnpj()

  const valida2cnpj = (getcnpj) => {
      //console.log(getcnpj)
      let cnpj = getcnpj.replace(/[^\d]+/g, "")
      console.log(cnpj)
      if (
          cnpj.length != 14 ||
          cnpj == "00000000000000" ||
          cnpj == "11111111111111" ||
          cnpj == "22222222222222" ||
          cnpj == "33333333333333" ||
          cnpj == "44444444444444" ||
          cnpj == "55555555555555" ||
          cnpj == "66666666666666" ||
          cnpj == "77777777777777" ||
          cnpj == "88888888888888" ||
          cnpj == "99999999999999") {
          document.getElementById("tela").innerHTML = "CNPJ inválido"
          return false
      } else {
          //document.getElementById("tela").innerHTML = "CNPJ válido por enquanto"
          tamanho = cnpj.length - 2
          numeros = cnpj.substring(0, tamanho);
          digitos = cnpj.substring(tamanho);
          soma = 0;
          pos = tamanho - 7;
          for (i = tamanho; i >= 1; i--) {
              soma += numeros.charAt(tamanho - i) * pos--;
              if (pos < 2)
                  pos = 9;
          }
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0)){
              document.getElementById("tela").innerHTML = "CNPJ inválido"
              return false
          };
          tamanho = tamanho + 1;
          numeros = cnpj.substring(0, tamanho);
          soma = 0;
          pos = tamanho - 7;
          for (i = tamanho; i >= 1; i--) {
              soma += numeros.charAt(tamanho - i) * pos--;
              if (pos < 2)
                  pos = 9;
          }
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1)){
              document.getElementById("tela").innerHTML = "CNPJ inválido"
              return false
          }else{
              document.getElementById("tela").innerHTML = "É valido esse CNPJ: " + getcnpj
          }


      }

  }


