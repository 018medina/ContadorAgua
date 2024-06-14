let count = localStorage.getItem("waterCount")
  ? parseInt(localStorage.getItem("waterCount"))
  : 0;
let glass = localStorage.getItem("glassCount")
  ? parseInt(localStorage.getItem("glassCount"))
  : 0;
const countElement = document.getElementById("count");
const inputMl = document.getElementById("inputMl");
const titulo = document.getElementById("Titulo");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

increaseBtn.addEventListener("click", () => {
  if (count < 12) {
    count++;
    updateCounter();
  }
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

function updateCounter() {
  countElement.textContent = count;
  titulo.textContent = `Contador de Copos de Água ${glass}ml`;
  progressText.textContent = `${count} de 12 copos - ${
    (count * parseFloat(glass)) / 1000
  } Litros`;
  progressBar.style.width = `${(count / 12) * 100}%`;

  increaseBtn.disabled = count === 12;
  decreaseBtn.disabled = count === 0;

  localStorage.setItem("waterCount", count);
}

function setaMl() {
  localStorage.setItem("glassCount", inputMl.value);
  glass = inputMl.value;

  titulo.textContent = `Contador de Copos de Água ${inputMl.value}ml`;
  progressText.textContent = `${count} de 12 copos - ${
    (count * parseFloat(inputMl.value)) / 1000
  } Litros`;
}

updateCounter();
