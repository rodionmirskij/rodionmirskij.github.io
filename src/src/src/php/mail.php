<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$check1 = $_POST['user_chek1'];
$check2 = $_POST['user_chek2'];
$radio = $_POST['Radio'];




//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'marskiy.sites@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'dvgdnzdbnzvltrzmnk18'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('marskiy.sites@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('rodion.mirskig@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Тема письма';
$mail->Body    = '' ."Обратная связь". $email . " <br>" . $phone . " <br>" . $check1 . " <br>" . $check2 . " <br>" . $radio;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>