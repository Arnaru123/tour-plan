<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
$subscribe = $_POST['subscribe'];
$booking = $_POST['booking'];
$footer = $_POST['footer'];


// Формирование самого письма

if(isset($subscribe)){
    $title = "Subscribe";
    $body = "
    <h2>Newsletter subscribe</h2>    
    <b>Email:</b> $subscribe
    ";    
} else if(isset($booking)){
    $title = "Booking Best Tour Plan";
    $body = "
    <h2>New message</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br>
    <b>Email:</b> $booking<br><br>
    <b>Message:</b><br>$message
    ";
} else if(isset($message)){
    $title = "New message Best Tour Plan";
    $body = "
    <h2>New message</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br><br>    
    <b>Message:</b><br>$message
    ";    
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;    
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

// Настройки вашей почты
$mail->Host = 'smtp.gmail.com'; // SMTP сервера вашей почты
$mail->Username = ''; // Логин на почте
$mail->Password = ''; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('', 'Best Tour Plan'); // Адрес самой почты и имя отправителя

// Получатель письма
$mail->addAddress('');  

    
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');