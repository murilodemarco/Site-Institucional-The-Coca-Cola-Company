// Obtem o botão de formulario

var botaoEnviar = document.querySelector("enviar");

botaoEnviar.addEventListener("click", function(event){
    event.preventDefault();

    //Captura de Formulario
    var form = document.querySelector("#afrmContato");

    //Verifica se o usuario preencheu e-mail ou telefone
    if(form.email.value=='' && form.telefone.value==''){
        return alert('Por favor, preencha um e-mail e/ou um telefone para que possa retornar o seu contato');
    }else {
        //Monta o texto de retorno
        msgRetorno=form.nomesobrenome.value + ", agradecemos o seu contato! <br><br>Vamos avaliar suas considerações e retornaremos"

        //Abre a div de retorno
        document.getElementById('formRetorno').style.display="block";
        //Efetua o retorno
        document.getElementById('textoRetorno').innerHTML=msgRetorno;
        //Fecha o formulario
        document.getElementById('formulario').style.display='none';
        return;
    }

});