<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (!$data) {
        throw new Exception("No input data received.");
    }

    $name = isset($data['name']) ? trim($data['name']) : '';
    $email = isset($data['email']) ? trim($data['email']) : '';
    $phone = isset($data['phone']) ? trim($data['phone']) : '';
    $subject = isset($data['subject']) ? trim($data['subject']) : 'New Contact Form Submission';
    $service = isset($data['service']) ? trim($data['service']) : '';
    $message = isset($data['message']) ? trim($data['message']) : '';
    $captcha = isset($data['captcha']) ? trim($data['captcha']) : '';

    if (empty($name) || empty($email) || empty($message)) {
        throw new Exception("Name, email, and message are required fields.");
    }

    $secretKey = "6LdhHCstAAAAAAV29x6Qui92P2WFaarpU8A__1N3";

    // Use cURL for reCAPTCHA validation as it is more robust than file_get_contents
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        'secret' => $secretKey,
        'response' => $captcha
    ]));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Bypasses local SSL certificate checks in XAMPP
    $recaptchaResponse = curl_exec($ch);
    
    if ($recaptchaResponse === false) {
        $curlError = curl_error($ch);
        curl_close($ch);
        throw new Exception("reCAPTCHA connection error: " . $curlError);
    }
    
    curl_close($ch);
    $result = json_decode($recaptchaResponse);

    if (!$result || !$result->success) {
        throw new Exception("reCAPTCHA verification failed.");
    }

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'logez2003@gmail.com';
    $mail->Password = 'pzir mhzw eqmm tqtu';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('logez2003@gmail.com', $name . ' (via Portfolio)');
    $mail->addAddress('logeshfreelance@gmail.com');
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Contact Form: ' . $subject;

    $mail->Body = "
Name: $name
Email: $email
Phone: $phone

Project Details:
- Service Needed: $service

Subject: $subject

Message:
$message
";

    $mail->send();

    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully!"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}
?>
