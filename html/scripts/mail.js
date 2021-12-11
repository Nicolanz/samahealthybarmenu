

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSumbit);

function handleSumbit(e) {
    e.preventDefault();
    const form = new FormData(this);

    let name = form.get('name');
    let lastName = form.get('lastName');
    let mail = form.get('mail');
    let comentario = form.get('comentario');

    $form.reset();
    sendEmail(name, lastName, mail, comentario);

}

function sendEmail(name, lastName, mail, comentario) {
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
                Mensaje: ${comentario} <br />
                `
    }).then((comentario) => console.log(comentario) )

    Email.send({
        Host : "smtp.gmail.com",
        Username : "zarateguarinnicolasandres@gmail.com",
        Password : "cfvoldjobsqgkrpb",
        To : `${mail}`,
        From : "zarateguarinnicolasandres@gmail.com",
        Subject : `Gracias por contactarte con Sama Healthy Bar`,
        Body : `<h1>Sama Healthy Bar</h1> <br />
                Esperamos que the haya gustado nuestra comida
                `
    }).then((comentario) => console.log(comentario) )
}
