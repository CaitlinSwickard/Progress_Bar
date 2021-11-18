// html elements to target
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll(".circle")


let currentActive = 1
// logic for buttons on progress bar
next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  // console.log(currentActive);
  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
})


// function to update the active class on the progress bar
const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  // logic to fill out the blue line as progress completes with next button
  const actives = document.querySelectorAll('.active');
  // console.log((actives.length / circles.length) * 100);
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 99 + "%";

  // disable buttons logic
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
