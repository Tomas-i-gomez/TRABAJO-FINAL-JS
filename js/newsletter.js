const enviarEmail = document.getElementById ('emailUser')
let correoUsuario = ''

setenviarEmail.addEventListener('click', () => enviarEmail(correoUsuario.value))


function enviarEmail() {
    emailjs.init('fguFZTescLONEYMQ1')
    emailjs.send('service_3mlofoi', 'template_4vsc76h', {
    name:`Info Bebidas`,
    message: `Su suscripción fue realizada con exito!! Pronto estaremos contactandonos con usted para más información`,
    to_email: `${emailUser}`,
    from_name: `Info Bebidas`, })

    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
     }, function(error) {
        console.log('FAILED...', error);
     });
    }

