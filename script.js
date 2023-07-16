const formulario = document.getElementById('formulario');
const respuesta = document.getElementById('consultar');

const consultaphp = async () => {
    const url = 'consulta.php';
    const config = {
        method: 'GET'
    }

    try {
        // Realizar la consulta utilizando el método GET
        const respuesta = await fetch(url, config);
            const data = await respuesta.text();
            alert(data);
            console.log('Consulta exitosa', data);
        
    } catch (error) {
        alert('Ocurrió un error en la consulta: ' + error);
        console.log(error);
    }
};

respuesta.addEventListener('click', consultaphp);
