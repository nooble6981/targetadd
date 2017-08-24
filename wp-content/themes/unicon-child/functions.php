<?php 
function my_phpmailer_init( $PHPMailer ){
	$PHPMailer->IsSMTP();
	$PHPMailer->SMTPAuth = true;
	$PHPMailer->SMTPSecure = 'ssl';
	$PHPMailer->Host = 'smtp.gmail.com';
	$PHPMailer->Port = 465;
	$PHPMailer->Username = 'support@targead.com';
	$PHPMailer->Password = 'PAs5worD987';
}
add_action( 'phpmailer_init', 'my_phpmailer_init' );


?>