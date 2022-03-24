function calcula_perda() {
    var lucro_medio_maquina = Number(input_lucro_medio_maquina.value);
    var total_maquinas = Number(input_total_maquinas.value);
    var maquinas_off = Number(input_maquinas_off.value);
    var horas_off = Number(input_horas_off.value);

    var lucro_total = lucro_medio_maquina * total_maquinas * horas_off;
    var perda_total = lucro_medio_maquina * maquinas_off * horas_off;

    var porcentagem_perda = (perda_total * 100) / lucro_total;

   if (maquinas_off > total_maquinas ){
       return mensagem.innerHTML='Digite um total de máquinas válido'
   }

    if(lucro_medio_maquina == ''){
        return mensagem.innerHTML='Digite o lucro médio'
        input_lucro_medio_maquina.style.borderColor = 'red'
    }
    else if(total_maquinas == ''){ 
        return mensagem.innerHTML='Digite o total de máquinas'
        input_total_maquinas.style.borderColor = 'red'
    }
    else if (maquinas_off == ''){
        return mensagem.innerHTML='Digite o total de máquinas em manutenção'
        input_maquinas_off.style.borderColor = 'red'
    }
    else if(horas_off == ''){
        return mensagem.innerHTML = 'Digite as horas em manutenção'
        input_horas_off.style.borderColor='red'
    }
    else{ 
        mensagem.innerHTML = `O valor perdido será de ${perda_total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})},
        equivalente a ${porcentagem_perda.toFixed(1)}
        % <br>da renda da indústria durante as horas em manutenção.`
    }
}