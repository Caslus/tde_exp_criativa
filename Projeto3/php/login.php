<?php
    session_start();
    $email = $_POST['p_email'];
    $senha = $_POST['p_senha'];
    $conexao = mysqli_connect('localhost', 'root', '', 'dados');
    $result = mysqli_query($conexao,"SELECT * FROM usuarios WHERE email = '".$email."' AND pass = '".$senha."'");
    if(mysqli_num_rows($result)>0){
        $_SESSION['email'] = $email;
        $_SESSION['senha'] = $senha;
        echo json_encode(array('msg'=>'redirecionando', 'redirect'=>'../Projeto3/php/site.php'));
    }
    else{
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        echo json_encode(array('msg'=>'email ou senha inválidos'));
    }
?>