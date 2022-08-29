const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const allSection = document.getElementsByTagName("section");
const sections = [];
let count = 0;

for (let i = 0; i < allSection.length; i++) {
  let sectionArr = document.getElementById(`section-${i + 1}`);
  sections.push(sectionArr);
}

function next() {
  prevBtn.classList.remove("disabled");
  if (count < allSection.length - 1) {
    sections[count].classList.add("d-none");
    count++;
    console.log(count);
    sections[count].classList.remove("d-none");
  }
  if (count === allSection.length - 1) {
    nextBtn.classList.add("disabled");
  }
}
function prev() {
  nextBtn.classList.remove("disabled");
  if (count !== 0) {
    sections[count].classList.add("d-none");
    count--;
    sections[count].classList.remove("d-none");
  }
  if (count === 0) {
    prevBtn.classList.add("disabled");
  }
}
