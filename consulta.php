
<?php
//validacion del metodo GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $mensaje = 'Se ejecutó el método GET';
    echo $mensaje;
} else {
    echo 'El método ejecutado no es GET';
}
?>