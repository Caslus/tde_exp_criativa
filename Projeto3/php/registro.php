<?php
    $user = $_POST['p_user'];
    $email = $_POST['p_email'];
    $data = $_POST['p_data'];
    $senha = $_POST['p_senha'];
    $conexao = mysqli_connect('localhost', 'root', '', 'dados');

    $rsUsers = mysqli_query($conexao,"SELECT * FROM usuarios WHERE user = '".$user."'");
    $rsEmails = mysqli_query($conexao,"SELECT * FROM usuarios WHERE email = '".$email."'");
    $numUsers = mysqli_num_rows($rsUsers);
    $numEmails = mysqli_num_rows($rsEmails);

    if($numUsers > 0 || $numEmails > 0) {
        echo json_encode('usuário já existe');
    }
    else{
        $query = mysqli_query($conexao, "INSERT INTO usuarios (user, email, data, pass) VALUES ('$user', '$email', '$data', '$senha')");
        if(!$query){
            echo json_encode(mysqli_error($conexao));
            die();
        }
        else{
            echo json_encode('registro realizado');
        }
    }
?>