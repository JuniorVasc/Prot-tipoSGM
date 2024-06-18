<?php
// Conexão com o banco de dados (altere as informações conforme necessário)
$servername = "localhost";
$username = "root";
$password = "carrosrapidos";
$dbname = "itstock";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos de usuário e senha estão definidos
    if (isset($_POST["username"]) && isset($_POST["password"])) {
        // Recupera os valores dos campos de usuário e senha
        $username = $_POST["username"];
        $password = $_POST["password"];
        
        // Prepara a consulta SQL para buscar o usuário pelo nome de usuário
        $sql = "SELECT * FROM usuarios WHERE username = '$username'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            // Usuário encontrado, verifica a senha
            $row = $result->fetch_assoc();
            if (password_verify($password, $row["password"])) {
                // Senha correta, redireciona para a página de sucesso
                header("Location: ../menu.html");
                exit;
            } else {
                // Senha incorreta, redireciona de volta para o formulário de login
                header("Location: index.html");
                exit;
            }
        } else {
            // Usuário não encontrado, redireciona de volta para o formulário de login
            header("Location: index.html");
            exit;
        }
    }
}

// Fecha a conexão com o banco de dados
$conn->close();
?>
