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