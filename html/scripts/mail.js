

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSumbit);
$( ".message-div" ).hide();

function handleSumbit(e) {
    e.preventDefault();
    const form = new FormData(this);

    let name = form.get('name');
    let lastName = form.get('lastName');
    let mail = form.get('mail');
    let comentario = form.get('comentario');
    let celular = form.get("celular");
    console.log(celular);

    $form.reset();
    sendEmail(name, lastName, mail, comentario, celular);

}

function submitEmail(){
    $( " .form-div " ).hide();
    $( " .message-div " ).show();
}

function sendEmail(name, lastName, mail, comentario, celular) {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "zarateguarinnicolasandres@gmail.com",
        Password : "cfvoldjobsqgkrpb",
        To : 'zarateguarinnicolasandres@gmail.com',
        From : "zarateguarinnicolasandres@gmail.com",
        Subject : `${name} ${lastName} te envio un Email`,
        Body : `Nombre: ${name} <br />
                Apellido: ${lastName} <br />
                Correo: ${mail} <br />
                Celular: ${celular} <br />
                Mensaje: ${comentario} <br />
                `
    }).then((comentario) => {
        console.log(comentario);
        submitEmail();
    } )

    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "zarateguarinnicolasandres@gmail.com",
    //     Password : "cfvoldjobsqgkrpb",
    //     To : `${mail}`,
    //     From : "zarateguarinnicolasandres@gmail.com",
    //     Subject : `Gracias por contactarte con Sama Healthy Bar`,
    //     Body : `<h1>Sama Healthy Bar</h1> <br />
    //             Esperamos que the haya gustado nuestra comida
    //             `
    // }).then((comentario) => submitEmail() )
}
