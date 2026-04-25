document.addEventListener("DOMContentLoaded", function() {

document.getElementById("sendEmail").addEventListener("click", function(event) {
   let nombre = document.getElementById("name").value;
emailjs.init("kP12sgvGUS74sBu7R");
    emailjs.send("service_qs1xx1a","template_toxexqp",{
title: "Nuevo mensaje de contacto "+nombre,
name: nombre,
time: new Intl.DateTimeFormat('es-MX', {
  timeZone: 'America/Mexico_City',
  dateStyle: 'medium',
  timeStyle: 'short'
}).format(new Date()),
message: document.getElementById("message").value,
contact: document.getElementById("email").value,
}).then(() => {
      
      alert('Correo enviado');
    }, (err) => {
    
      console.log(JSON.stringify(err));
    });


});

})