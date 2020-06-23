<?php
$errorMSG = "";

// EMPRESA
if (empty($_POST["empresa"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $empresa = $_POST["empresa"];
}

// NIT
if (empty($_POST["nit"])) {
    $errorMSG = utf8_decode("Complete este campo");
} else {
    $nit = $_POST["nit"];
}

// PROCESO SELECCION
if (empty($_POST["proceso_seleccion"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $proceso_seleccion = $_POST["proceso_seleccion"];
}

// NUMERO COLABORADORES
if (empty($_POST["numero_colaboradores"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $numero_colaboradores = $_POST["numero_colaboradores"];
}

// NOMBRE Y APELLIDO
if (empty($_POST["first_name"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $first_name = $_POST["first_name"];
}

// OPCION FUNCIONES
if (empty($_POST["funciones"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $funciones = $_POST["funciones"];
}

// TELEFONO O CEL
if (empty($_POST["telephone"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $telephone = $_POST["telephone"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= utf8_decode("Complete este campo");
} else {
    $email = $_POST["email"];
}

/****************************** ENVIAR A CRM SALES UP ******************************/
$url = 'https://api.salesup.com/integraciones/P02APCA8E9FBC-0DA4-423E-A95E-4DB8265CD8D0';
$params = array(

    'empresa' => ($empresa), 
    'nombre' => ($first_name),
    'puesto' => ($funciones),
    'movil' => ($telephone),
    'correo' => ($email),
    'comentarios' => ("Nuevo lead PSA 2020: Formulario Contacto Externo")." | ".("NIT: ".$nit)." | ".("Proceso Seleccion: ".$proceso_seleccion)." | ".("Numero de colaboradores: ".$numero_colaboradores)
    //'comentarios' => ("NIT-".$nit ."Proceso Seleccion-".$proceso_seleccion ."Numero de colaboradores-".$numero_colaboradores)
);


$request = curl_init();
curl_setopt($request, CURLOPT_URL, $url);
curl_setopt($request, CURLOPT_POST, 1);
curl_setopt($request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($request, CURLOPT_POSTFIELDS, http_build_query($params));
curl_setopt($request, CURLOPT_CONNECTTIMEOUT, 60);
curl_setopt($request, CURLOPT_TIMEOUT, 60);

$result = curl_exec($request);

curl_close($request);
//print_r($result); 


/****************************** ENVIAR EMAIL ******************************/
//CONTACTOS Y ASUNTO
$Contacts = array('soluciones@grupo-alianza.com');

$Subject = "Nuevo lead PSA 2020: Formulario Contacto Externo";


// CUERPO DE TEXTO MENSAJE
$Body = "";

$Body .= utf8_decode("Empresa: ");
$Body .= utf8_decode($empresa);
$Body .= "\n";

$Body .= utf8_decode("NIT: ");
$Body .= utf8_decode($nit);
$Body .= "\n";

$Body .= utf8_decode("Proceso Selección: ");
$Body .= utf8_decode($proceso_seleccion);
$Body .= "\n";

$Body .= utf8_decode("Número de Colaboradores: ");
$Body .= utf8_decode($numero_colaboradores);
$Body .= "\n";

$Body .= utf8_decode("Nombre y Apellido: ");
$Body .= utf8_decode($first_name);
$Body .= "\n";

$Body .= utf8_decode("Descripción de funciones: ");
$Body .= utf8_decode($funciones);
$Body .= "\n";

$Body .= utf8_decode("Teléfono o Celular: ");
$Body .= utf8_decode($telephone);
$Body .= "\n";

$Body .= utf8_decode("Correo eletrónico: ");
$Body .= utf8_decode($email);
$Body .= "\n";

// send email
foreach ($Contacts as $Contact){
    $to =  $Contact;
    $success = mail($to, $Subject, $Body, "From:".$email);
}

// redirect to success page
if ($success && $errorMSG == ""){
    echo "success";
}
else{
    if($errorMSG == ""){
        echo "Algo salío mal :(";
    }
    else {
        echo $errorMSG;
    }
}

?>
