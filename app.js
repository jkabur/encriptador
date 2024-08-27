alert('Bienvenido al Encriptador de texto by Kabur');

function encriptarTexto() {
    let texto = document.getElementById("inputTexto").value.trim();

if (!/^[a-z\s]*$/.test(texto)) {
    alert("El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas y espacios.");
    return; 
}

    if (texto === "") {
        mostrarAlerta();
        return;
    }

    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    document.getElementById("outputTexto").value = textoEncriptado;
    mostrarResultado();
}

function desencriptarTexto() {
    let texto = document.getElementById("inputTexto").value.trim();

    if (texto === "") {
        mostrarAlerta();
        return;
    }

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    document.getElementById("outputTexto").value = textoDesencriptado;
    mostrarResultado();
}

function mostrarAlerta() {
    document.getElementById("no-text-message-text").style.display = "block";
    document.getElementById("placeholderImage").src = "img/detective-enojado.jpg";
    document.getElementById("placeholderImage").style.display = "block";
    document.getElementById("outputTexto").style.display = "none";
    document.getElementById("copiarBtn").style.display = "none";
}

function mostrarResultado() {
    document.getElementById("no-text-message-text").style.display = "none";
    document.getElementById("placeholderImage").style.display = "none";
    document.getElementById("outputTexto").style.display = "block";
    document.getElementById("copiarBtn").style.display = "block";
}

function copiarTexto() {
   
    let texto = document.getElementById("outputTexto").value;

    navigator.clipboard.writeText(texto).then(function() {

        alert('Texto copiado al portapapeles!');
    }).catch(function(error) {
   
        console.error('Error al copiar el texto: ', error);
        alert('No se pudo copiar el texto. Intenta nuevamente.');
    });
}


