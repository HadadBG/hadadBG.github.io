
document.addEventListener("DOMContentLoaded", function() {

document.getElementById("sendEmail").addEventListener("click", function(event) {
    document.getElementById("fecha_envio").value =
    new Date().toLocaleString("es-MX", {
      timeZone: "America/Mexico_City"
    });
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    document.getElementById("contactForm").submit(); // Envía el formulario
    alert("Enviando Correo... ¡Gracias por contactarme!");

})
});


const isMobile = window.innerWidth < 768;

particlesJS('particles-js', {
  particles: {
    number: {
      value: isMobile ? 20 : 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.4 },
    size: {
      value: isMobile ? 3 : 5,
      random: true
    },
    line_linked: {
      enable: true, 
      distance: 200,
      color: "#ffffff",
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: isMobile ? 1 : 3, 
      out_mode: "out"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false },
      onclick: { enable: false }
    }
  },
  retina_detect: !isMobile 
});