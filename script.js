let aguaCounter = localStorage.getItem("aguaCount")
  ? parseInt(localStorage.getItem("aguaCount"))
  : 0;
let glassCount = localStorage.getItem("glassCount")
  ? parseInt(localStorage.getItem("glassCount"))
  : 0;
const aguaImage = document.getElementById("aguaImage");
const aguaCounterDisplay = document.getElementById("aguaCounter");
const inputMl = document.getElementById("inputMl");
const titulo = document.getElementById("Titulo");
const progressText = document.getElementById("progressText");

inputMl.value = glassCount;
updateaguaImage();

function incrementCounter() {
  aguaCounter++;
  updateaguaImage();
}

function decrementCounter() {
  if (aguaCounter !== 0) {
    aguaCounter--;
    updateaguaImage();
  }
}

function updateaguaImage() {
  if (aguaCounter < 2) {
    aguaImage.src = "agua1.png";
  } else if (aguaCounter < 4) {
    aguaImage.src = "agua2.png";
  } else if (aguaCounter < 6) {
    aguaImage.src = "agua3.png";
  } else {
    aguaImage.src = "agua4.png";
  }

  titulo.textContent = `Contador de Copos d'Água ${glassCount}ml`;
  aguaCounterDisplay.textContent =
    aguaCounter + ` - ${(aguaCounter * parseFloat(glassCount)) / 1000} Litros`;

  localStorage.setItem("aguaCount", aguaCounter);
}

function zeroCounter() {
  aguaCounter = 0;
  aguaCounterDisplay.textContent = aguaCounter;

  glassCount = 0;
  inputMl.value = glassCount;
  localStorage.setItem("glassCount", glassCount);

  updateaguaImage();
}

function setaMl() {
  localStorage.setItem("glassCount", inputMl.value);
  glassCount = inputMl.value;

  titulo.textContent = `Contador de Copos d'Água ${inputMl.value}ml`;
  aguaCounterDisplay.textContent =
    aguaCounter + ` - ${(aguaCounter * parseFloat(glassCount)) / 1000} Litros`;
}
