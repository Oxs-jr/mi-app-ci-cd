function saludar() {
    document.getElementById('resultado').textContent =
    '¡Hola desde CI/CD! 🎉';
}

// Función probada con Jest
function sumar(a, b) {
    return a + b;
}

module.exports = { sumar };
