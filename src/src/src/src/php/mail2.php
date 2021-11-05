<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email2 = $_POST['user_email2'];
$mess = $_POST['messenger'];





$mail->setFrom('rodion.mirskij@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('marskiy.sites@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Тема письма';
$mail->Body    = '' ."Пользователь оставил вам сообщение". $name . " <br>" . $email2 . " <br>" . $mess;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>