function calcularSignoChino() {
    const anioNacimiento = document.getElementById('anioNacimiento').value;
    if (!anioNacimiento || isNaN(anioNacimiento)) {
        alert('Por favor, ingresa un año de nacimiento válido.');
        return;
    }

    const signosZodiacoChino = [
        "rata", "buey", "tigre", "conejo", "dragon", "serpiente",
        "caballo", "cabra", "mono", "gallo", "perro", "cerdo"
    ];

    const signoZodiacoChino = signosZodiacoChino[(anioNacimiento - 1900) % 12];

    const resultado = `
        <p>Tu signo zodiacal chino es: ${signoZodiacoChino}</p>
        <img src="imagenes/${signoZodiacoChino}.jpg" alt="${signoZodiacoChino}">
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
