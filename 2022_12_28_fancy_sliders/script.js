//graph

const xValues = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const yValues = [
  6, 8, 6.5, 7, 6.8, 5, 7.5, 5.8, 8, 6.4, 6, 8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8,
  6, 8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8, 6,
  8, 6.5, 7, 6.8, 5, 7.5, 5.8, 8, 6.4, 6, 8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8, 6,
  8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8, 6, 8, 6.5, 7, 6.8,
];
const barColors = "#BACEFB";

const myChart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "",
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        min: 0,
        max: 10,
        grid: {
          display: false,
        },
        border: {
          color: "#DEE0F6",
          width: 10,
          z: 2,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

function moveScrollRight() {
  if (myChart.options.scales.x.max == xValues.length) {
    return;
  } else {
    myChart.options.scales.x.min = myChart.options.scales.x.min + 10;
    myChart.options.scales.x.max = myChart.options.scales.x.max + 10;
    myChart.update();
  }
}

function moveScrollLeft() {
  if (myChart.options.scales.x.min <= 0) {
    return;
  } else {
    myChart.options.scales.x.min = myChart.options.scales.x.min - 10;
    myChart.options.scales.x.max = myChart.options.scales.x.max - 10;
    myChart.update();
  }
}

// slider

const slider = document.querySelector(".slider");
const progress = document.querySelector(".progress");
const valueDisplay = document.querySelector(".value-display");

progress.style.width = `${(slider.value / slider.max) * 100}%`;
valueDisplay.innerHTML = `$${slider.value}`;

function adjustProgress() {
  let sliderValue = slider.value;
  let sliderMax = slider.max;
  let percentage = (sliderValue / sliderMax) * 100;

  progress.style.width = `${percentage}%`;
  valueDisplay.innerHTML = `$${slider.value}`;
  valueDisplay.style.left = `${percentage - 4}%`;
}

// progress bar

const progressBar = document.querySelector(".progress-bar");
const percentageDisplay = document.querySelector(".percentage-display");
const progressButton = document.querySelector(".start-button");
let isFinished = true;

function startProgress() {
  let width = 0;
  let time = setInterval(frame, 100);

  function frame() {
    if (width >= 100) {
      clearInterval(time);
      isFinished = true;
    } else {
      isFinished = false;
      width++;
      if (100 - width >= 83) {
        percentageDisplay.style.right = "83%";
        progressBar.style.width = "17%";
      } else {
        percentageDisplay.style.right = 100 - width + "%";
        progressBar.style.width = width + "%";
      }
      percentageDisplay.innerHTML = width + "%";
    }
  }
}

progressButton.addEventListener("click", (event) => {
  if (isFinished) {
    startProgress();
  }
});
