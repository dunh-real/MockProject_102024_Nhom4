<?php
session_start();
include 'db.php';

$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (empty($username) || empty($password)) {
        $error = 'Username và Password không được để trống!';
    } else {
        $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            //session
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['username'] = $user['username'];

            //navigate
            header("Location: dashboard.php");
            exit();
        } else {
            $error = 'Sai username hoặc password!';
        }
    }
}
?>