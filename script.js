// Script para scroll suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Função para o envio de formulário (Exemplo básico)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Obrigado pelo contato! Em breve entraremos em contato.");
    this.reset();  // Reseta o formulário
});
