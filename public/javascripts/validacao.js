window.addEventListener('load',init);

function init(){
    document.forms['formulario'].addEventListener('submit',validarNome,false);
    document.forms['formulario'].addEventListener('submit',validarEquipe,false);
    document.forms['formulario'].addEventListener('submit',validarDatanasc,false);
    document.forms['formulario'].addEventListener('submit',validarDatanasc2,false);
    document.forms['formulario'].addEventListener('submit',validarSexo,false);
    document.forms['formulario'].addEventListener('submit',validarNCarro,false);
}

function validarNome(evt){
    let campoTexto = document.forms['formulario'].nome;
    let valorDigitado = campoTexto.value;
    if (valorDigitado == null || valorDigitado == ''){
        evt.preventDefault();
        adicionarClasseError(campoTexto);
        return false;
    }
    removerClasseError(campoTexto);
    return true;
}

function validarEquipe(evt){
    let campoTexto = document.forms['formulario'].equipe;
    let valorDigitado = campoTexto.value;
    if (valorDigitado == null || valorDigitado == ''){
        evt.preventDefault();
        adicionarClasseError(campoTexto);
        return false;
    }
    removerClasseError(campoTexto);
    return true;
}

function validarDatanasc(evt){
    let campoTexto = document.forms['formulario'].datanasc;
    let valorDigitado = campoTexto.value;
    if (valorDigitado == null || valorDigitado == ''){
        evt.preventDefault();
        adicionarClasseError(campoTexto);
        return false;
    }
    removerClasseError(campoTexto);
    return true;
}

function validarDatanasc2(evt){
    let campoTexto = document.forms['formulario'].datanasc;
    let valorDigitado = campoTexto.value;
    var data_array = valorDigitado.split("-"); // quebra a data em array
    var anoDigitado = data_array[0];
 
    // para o IE onde será inserido no formato dd/MM/yyyy
    if(data_array[0].length != 4){
        anoDigitado = data_array[2];
    }
 
    var hoje = new Date();
    var anoAtual = hoje.getFullYear();
 
    var diferenca = anoAtual - anoDigitado;
    var anoLimite = anoAtual-18;
    
    if(diferenca < 18){
        evt.preventDefault();
        alert("Cadastro permitido apenas para pilotos nascidos até " + anoLimite + ".");
        adicionarClasseError(campoTexto);
        return false;
    }
    removerClasseError(campoTexto);
    return true;
}

function validarSexo(evt){
    let radiosButton = document.forms['formulario'].sexo;
    for (i = 0; i < radiosButton.length; i++){
        if (radiosButton[i].checked){
            removerClasseError(campoTexto);
            return true;
        }
    }
    evt.preventDefault();
    adicionarClasseError(campoTexto);
    return false;
}
    

function validarNCarro(evt){
    let campoTexto = document.forms['formulario'].ncarro;
    let valorDigitado = campoTexto.value;
    if (valorDigitado == null || valorDigitado == ''){
        evt.preventDefault();
        adicionarClasseError(campoTexto);
        return false;
    }
    removerClasseError(campoTexto);
    return true;
}

function adicionarClasseError(campo){
    campo.classList.add('error');
}

function removerClasseError(campo){
    campo.classList.remove('remove');
}
