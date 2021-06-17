<?php
session_start();
if((!isset ($_SESSION['email']) == true) and (!isset ($_SESSION['senha']) == true))
{
  unset($_SESSION['email']);
  unset($_SESSION['senha']);
  header('location:../Projeto3/login.html');
  }
$logado = $_SESSION['email'];
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width" />
  <title>PROJETO WEB</title>
  <link rel="stylesheet" href="../Projeto3/css/main.css" />
  <link rel="stylesheet" href="../Projeto3/css/index.css" />
  <link rel="icon" href="../Projeto3/media/icone.ico">
</head>
<body>
    <div class="container">
        <iframe width="1344" height="756" src="http://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>
        <span>você está logado através do e-mail: <?php echo $_SESSION['email']?></span >
    </div>
</body>
<style>
.container{
    display: inline-flex;
    justify-content: center;
}
span{
    position: absolute;
    bottom: 5%;
}
</style>
</html>
