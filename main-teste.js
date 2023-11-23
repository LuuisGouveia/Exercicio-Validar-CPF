function validaCPF (cpf) {
    cpfReal = String(cpf)
    cpfLimpo = cpf.replace(/\D+/g, '');
    cpfArray = [...cpfLimpo];
    cpfReduzido = cpfArray.splice(0, 9);
    
    function multiplicarCpf1 (cpfReduzido) {
        num1 = Number(cpfReduzido[0]) * 10
        num2 = Number(cpfReduzido[1]) * 9
        num3 = Number(cpfReduzido[2]) * 8
        num4 = Number(cpfReduzido[3]) * 7
        num5 = Number(cpfReduzido[4]) * 6
        num6 = Number(cpfReduzido[5]) * 5
        num7 = Number(cpfReduzido[6]) * 4
        num8 = Number(cpfReduzido[7]) * 3
        num9 = Number(cpfReduzido[8]) * 2
        
        numTotal = Number(num1+num2+num3+num4+num5+num6+num7+num8+num9);
        return numTotal
    }

    cpfMultiplicado = multiplicarCpf1(cpfReduzido);
    

   function validacaoCPF1 (cpfMultiplicado) {
        let vCPF = 11 - (cpfMultiplicado % 11)
        return String(vCPF);
    }

    resValCpf = validacaoCPF1(cpfMultiplicado);
    cpfReduzido2 = [...cpfReduzido, String(resValCpf)];

     function multiplicarCpf2 (cpfReduzido2) {
         num1 = Number(cpfReduzido2[0]) * 11
         num2 = Number(cpfReduzido2[1]) * 10
         num3 = Number(cpfReduzido2[2]) * 9
         num4 = Number(cpfReduzido2[3]) * 8
         num5 = Number(cpfReduzido2[4]) * 7
         num6 = Number(cpfReduzido2[5]) * 6
         num7 = Number(cpfReduzido2[6]) * 5
         num8 = Number(cpfReduzido2[7]) * 4
         num9 = Number(cpfReduzido2[8]) * 3
         num10 = Number(cpfReduzido2[9]) * 2
        
         numTotal = Number(num1+num2+num3+num4+num5+num6+num7+num8+num9+num10);
         if (numTotal < 0) {
             return numTotal = 0
         }else{
             return numTotal
         }
     }

    cpfMultiplicado2 = multiplicarCpf2(cpfReduzido2);

    function validacaoCPF2 (cpfMultiplicado2) {
         let vCPF = 11 - (Number(cpfMultiplicado2) % 11)
         return String(vCPF);
     }

     resValCpf2 = validacaoCPF2(cpfMultiplicado2);

      if (resValCpf === String(cpfArray[0]) && resValCpf2 === String(cpfArray[1])){
          return console.log('CPF Valido')
      } else{
          return console.log('CPF Invalido')
         }

    
}

validaCPF('070.987.720-03');


