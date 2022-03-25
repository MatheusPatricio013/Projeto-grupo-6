function calcula_perda() {
    var lucro_medio_maquina = Number(input_lucro_medio_maquina.value);
    var total_maquinas = Number(input_total_maquinas.value);
    var maquinas_off = Number(input_maquinas_off.value);
    var horas_off = Number(input_horas_off.value);

    var lucro_total = lucro_medio_maquina * total_maquinas * horas_off;
    var perda_total = lucro_medio_maquina * maquinas_off * horas_off;

    var porcentagem_perda = (perda_total * 100) / lucro_total;
    const errorMsg = document.querySelector('.input_form').style.boxShadow = "0 0 3px  #CC0000";
    const validMsg= document.querySelector('.input_form').style.boxShadow = "0 0 3px green";

   if (maquinas_off > total_maquinas ){
      mensagem.innerHTML='Digite um total de máquinas válido'
   }

    if(lucro_medio_maquina == ''){
        error_lucro_medio.innerHTML = '*Campo vazio'
        document.getElementById("input_lucro_medio_maquina").focus()
        document.getElementById("input_lucro_medio_maquina").errorMsg
            
    }
    else{
        error_lucro_medio.innerHTML = ''
        document.getElementById("input_lucro_medio_maquina").validMsg
    }
     if(total_maquinas == ''){ 
        error_total_maq.innerHTML = '*Campo vazio'
         document.getElementById("input_total_maquinas").focus()
          document.getElementById("input_total_maquinas").errorMsg
          
    }
    else{
        error_total_maq.innerHTML = ''
        document.getElementById("input_total_maquinas").validMsg
    }
     if (maquinas_off == ''){
        error_maq_off.innerHTML=`*Campo vazio`
        document.getElementById("input_maquinas_off").focus()
        document.getElementById("input_maquinas_off").errorMsg
        
    }
    else{
        error_maq_off.innerHTML=``
        document.getElementById("input_maquinas_off").validMsg
    }
     if(horas_off == ''){
        error_hr_off.innerHTML=`*Campo vazio `
        document.getElementById("input_horas_off").focus()
       document.getElementById("input_horas_off").errorMsg
    }
    else{
        error_hr_off.innerHTML=``
        document.getElementById("input_horas_off").validMsg
    }
    if(lucro_medio_maquina != '' && total_maquinas != '' && maquinas_off != '' && maquinas_off < total_maquinas && horas_off != ''){
        mensagem.innerHTML = `O valor perdido será de ${perda_total.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})},
        equivalente a ${porcentagem_perda.toFixed(1)}
        % <br>da renda da indústria durante as horas em manutenção.`
    }
}