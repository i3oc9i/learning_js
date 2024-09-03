const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const nbOfSteps = document.querySelectorAll(".step");

const progressBar = document.querySelector(".progress-bar-front");

let currentStep = 1;

nextBtn.addEventListener("click", () => {
  currentStep += 1;
  if (currentStep > nbOfSteps.length) {
    currentStep = nbOfSteps.length;
  }
  updateStepProgress();
});

prevBtn.addEventListener("click", () => {
  currentStep -= 1;
  if (currentStep < 1) {
    currentStep = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  prevBtn.disabled = currentStep === 1 ? true : false;
  nextBtn.disabled = currentStep === nbOfSteps.length;

  nbOfSteps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add("checked");
      step.innerHTML = `<i class="fas fa-check"></i>
      <small>${index === 0 ? "Start" : index === nbOfSteps.length - 1 ? "Final" : "Step " + index}</small>`;
    } else {
      step.classList.remove("checked");
      step.innerHTML = `<i class="fas fa-times"></i>`;
    }
  });

  progressBar.style.width = `${((currentStep - 1) / (nbOfSteps.length - 1)) * 100}%`;
}
