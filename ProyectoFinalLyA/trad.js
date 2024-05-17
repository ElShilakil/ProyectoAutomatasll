// Función para convertir texto a binario
  document.getElementById("textToBinBtn").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    var binaryResult = "";

    for (var i = 0; i < inputText.length; i++) {
      binaryResult += inputText[i].charCodeAt(0).toString(2) + " ";
    }

    document.getElementById("outputText").value = binaryResult.trim();
  });

  // Función para convertir binario a texto
  document.getElementById("binToTextBtn").addEventListener("click", function() {
    var inputBinary = document.getElementById("inputBinary").value;
    var textResult = "";

    inputBinary.split(" ").forEach(function(binaryChar) {
      textResult += String.fromCharCode(parseInt(binaryChar, 2));
    });

    document.getElementById("outputBinary").value = textResult;
  });

  // Obtener referencia al botón de ayuda
var helpBtn = document.getElementById('helpBtn');

// Agregar un evento de clic al botón de ayuda
helpBtn.addEventListener('click', function() {
  // Mostrar la ventana modal
  showModal('ayuda.png');
});

// Función para mostrar la ventana modal con la imagen
function showModal(imagePath) {
  // Crear elemento de imagen
  var img = document.createElement('img');
  img.src = imagePath;

  // Crear contenedor de la ventana modal
  var modal = document.createElement('div');
  modal.classList.add('modal');

  // Agregar la imagen al contenedor modal
  modal.appendChild(img);

  // Agregar la ventana modal al cuerpo del documento
  document.body.appendChild(modal);

  // Agregar evento de clic al contenedor modal para cerrarlo al hacer clic fuera de él
  modal.addEventListener('click', function() {
    document.body.removeChild(modal);
  });
}
