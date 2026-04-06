function operacion(event, tipo) {
   
    event.preventDefault();

    let n1, n2, resultado;

       if (tipo === 'suma') {
        n1 = parseFloat(document.getElementById('s1').value);
        n2 = parseFloat(document.getElementById('s2').value);
        resultado = n1 + n2;
    } 
    else if (tipo === 'resta') {
        n1 = parseFloat(document.getElementById('r1').value);
        n2 = parseFloat(document.getElementById('r2').value);
        resultado = n1 - n2;
    } 
    else if (tipo === 'multi') {
        n1 = parseFloat(document.getElementById('m1').value);
        n2 = parseFloat(document.getElementById('m2').value);
        resultado = n1 * n2;
    } 
    else if (tipo === 'divi') {
        n1 = parseFloat(document.getElementById('d1').value);
        n2 = parseFloat(document.getElementById('d2').value);
        resultado = n1 / n2 ;
    }


    document.getElementById('resultado').innerText = "Resultado: " + resultado;
}

// EXERCICIO "2"

// Función auxiliar para no repetir código: obtiene el valor del input
function obtenerTexto() {
    return document.getElementById('textoInput').value;
}

// Función auxiliar para mostrar el resultado
function mostrar(valor) {
    document.getElementById('results').innerText = "Resultado: " + valor;
}

// 1. Ordenar Ascendente (A-Z)
function ordenarAsc() {
    let texto = obtenerTexto();
    // split('') convierte texto en lista, sort() ordena, join('') une de nuevo
    let res = texto.split('').sort().join('');
    mostrar(res);
}

// 2. Ordenar Descendente (Z-A)
function ordenarDesc() {
    let texto = obtenerTexto();
    let res = texto.split('').sort().reverse().join('');
    mostrar(res);
}

// 3. Desglose como lista
function desglosar() {
    let texto = obtenerTexto();
    let lista = texto.split('').join(' - '); // Separa cada letra con un guion
    mostrar(lista);
}
function separarestrela (){
    let texto = obtenerTexto();
    let lista = texto.split('').join(' * '); // Separa cada letra con una estrella
    mostrar(lista);
}

// 4. Concatenar nombre al final
function miNombre() {
    let texto = obtenerTexto();
    mostrar(texto + " - Priscila");
}

// 5. Concatenar nombre compañero al inicio
function nombreCompa() {
    let texto = obtenerTexto();
    mostrar("Priscila: " + texto);
}

// 6. Tamaño de la palabra
function verTamano() {
    let texto = obtenerTexto();
    mostrar("Cantidad de letras: " + texto.length);
}

// 7. Letra al final
function ultimaLetra() {
    let texto = obtenerTexto();
    // Usamos length - 1 porque las posiciones empiezan en 0
    mostrar(texto.charAt(texto.length - 1));
}

// 8. Letra al inicio
function primeraLetra() {
    let texto = obtenerTexto();
    mostrar(texto.charAt(0));
}

// 9. Primera mitad
function primeraMitad() {
    let texto = obtenerTexto();
    let mitad = Math.floor(texto.length / 2);
    mostrar(texto.substring(0, mitad));
}

// 10. Segunda mitad
function segundaMitad() {
    let texto = obtenerTexto();
    let mitad = Math.floor(texto.length / 2);
    mostrar(texto.substring(mitad));
}