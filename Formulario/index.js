document.addEventListener('DOMContentLoaded',function() {

    const form = document.getElementById('registracionForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        //validacion para confirmar la contraseña

        if (password != confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        //Enviar datos al servidor
        console.log('Datos de registro: ', {username, email, password});
        alert('Registro exitoso');

        //Limpiar el formulario
        form.reset();
    });
});