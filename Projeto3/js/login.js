window.onload = function(){
    formRegistro = document.getElementById('formRegistro');
    formLogin = document.getElementById('formLogin');
    formRegistro.style.transition = "none";
    formRegistro.style.transform = "translateY(-200%)";
}
var tela = false;
var clickSfx = new Audio('../Projeto3/media/click.m4a');
function alternar(){
    clickSfx.play();
    formRegistro.style.transition = "1s";
    if(!tela){
        tela=true;
        formLogin.style.transform = "translateY(-200%)";
        formRegistro.style.transform = "translateY(0%)";
    }
    else{
        tela=false;
        formRegistro.style.transform = "translateY(-200%)";
        formLogin.style.transform = "translateY(0%)";
    }
}

function registrar(){
    clickSfx.play();
    user = document.getElementById('userRegistro').value;
    email = document.getElementById('emailRegistro').value;
    data = document.getElementById('dataRegistro').value;
    senha = document.getElementById('senhaRegistro').value;
    confirmarSenha = document.getElementById('confirmarSenhaRegistro').value;
    if(user!="" && email!="" && data!="" && senha!="" && confirmarSenha!=""){
        if(user.length<=16){
            if(senha==confirmarSenha){
                var erro = document.getElementById('mensagemErro');
                if(erro!=null){
                    erro.style.display = 'none';
                }
                document.getElementById('botaoRegistro').style.display = 'none'; 

                $.ajax({
                    type:'POST',
                    dataType:'json',
                    url:'./php/registro.php',
                    data: {p_user:user, p_email:email, p_data:data, p_senha:$.MD5(senha)},
                    success: function(response){
                        erroRegistro(response);
                        document.getElementById('mensagemErro').style.color = 'rgb(232, 188, 100)';
                    }
                });

            }
            else{
                erroRegistro('as senhas não correspondem');
            }
        }
        else{
            erroRegistro('usuário deve ter no máximo 16 caracteres');
        }
    }
    else{
        erroRegistro('todos os campos devem ser preenchidos');
    }

}

function erroRegistro(mensagem){
    var erro = document.getElementById('mensagemErro');
    if(erro == null){
        erro = document.createElement('a');
        erro.id = 'mensagemErro';
        erro.innerHTML = mensagem;
        $(erro).insertBefore($('#botaoRegistro'));
        $('<br>').insertAfter('#mensagemErro');
    }
    else{
        erro.innerHTML = mensagem;
    }
}

function login(){
    clickSfx.play();
    email = document.getElementById('emailLogin').value;
    senha = document.getElementById('senhaLogin').value;
    if(email!='' && senha!=''){
        $.ajax({
            type:'POST',
            dataType:'json',
            url:'./php/login.php',
            data: {p_email:email, p_senha:$.MD5(senha)},
            success: function(response){
                if(response.redirect){
                    erroLogin(response.msg);
                    document.getElementById('mensagemErroLogin').style.color = 'rgb(232, 188, 100)';
                    window.location.href = response.redirect;
                }
                else{
                    erroLogin(response.msg);
                }
            }
        });
    }
    else{
        erroLogin('todos os campos devem ser preenchidos')
    }
}

function erroLogin(mensagem){
    var erro = document.getElementById('mensagemErroLogin');
    if(erro == null){
        erro = document.createElement('a');
        erro.id = 'mensagemErroLogin';
        erro.innerHTML = mensagem;
        $(erro).insertBefore($('#botaoLogin'));
        $('<br>').insertAfter('#mensagemErroLogin');
    }
    else{
        erro.innerHTML = mensagem;
    }
}