let count = localStorage.getItem("waterCount")
  ? parseInt(localStorage.getItem("waterCount"))
  : 0;
const countElement = document.getElementById("count");
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
  progressText.textContent = `${count} de 12 copos (${
    (count * 450) / 1000
  })Litros`;
  progressBar.style.width = `${(count / 12) * 100}%`;

  increaseBtn.disabled = count === 12;
  decreaseBtn.disabled = count === 0;

  localStorage.setItem("waterCount", count);
}

updateCounter();
