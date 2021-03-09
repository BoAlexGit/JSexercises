<?php
	/*if(isset($_POST['name'])) {
	    echo'
	        <script type="text/javascript">
	        var elm=parent.window.document.getElementById("result");
	        elm.innerHTML=elm.innerHTML+"<br />Получено имя '.str_replace("\r","",str_replace("\n","<br />",htmlspecialchars(stripslashes($_POST['name'])))).' с текстом '.str_replace("\r","",str_replace("\n","<br />",htmlspecialchars(stripslashes($_POST['phone'])))).' ";
	        </script>
	    ';
	}*/

if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['msgs'])) {

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$msgs = $_POST['msgs'];
		
	$to      = 'ab@webformyself.com';
	$subject = 'запись на консультацию';
	$message = 'Имя поциентки: '.$name.'; Телефон пациентки: '.$phone.'; Сообщение: '.$msgs;
	$headers = 'From: kosinets@doctor.com' . "\r\n" .
		'Reply-To: kosinets@doctor.com' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
	
	mail($to, $subject, $message, $headers);
}	

?>