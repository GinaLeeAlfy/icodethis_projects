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
  6.760303884742813, 9.256807416080715, 7.442852731657041, 6.470418779470219,
  5.934628033520009, 5.992187351335641, 8.760817881606993, 5.878232602480328,
  9.41477090786461, 6.881721101208281, 4.015471946031732, 6.637926524410822,
  5.540069877453323, 8.908921111553651, 7.24173653925115, 6.618247187483945,
  8.86398106412154, 6.379076840545604, 7.168437125979471, 6.600877645673674,
  5.378857453212041, 8.342845590541128, 6.3815250660144365, 8.859788600309034,
  5.0531804204358295, 6.772121315622035, 5.685565780904011, 6.311583843210944,
  7.06167224051055, 8.205196019816842, 8.210960609359539, 6.021673729854677,
  5.637953858466291, 7.858297594986065, 6.449236367077548, 7.761998589119278,
  5.813644639646606, 6.502026893485732, 7.111589483350171, 8.59432057632005,
  4.559666878838988, 7.693356234192979, 6.8279198488317805, 6.568560027158826,
  6.430440559980654, 6.00567977840203, 6.927187678150878, 5.392211527296863,
  8.823390888237947, 4.266968858751328, 5.899827874715904, 6.664045580241345,
  7.123895366294402, 6.2871173226226365, 5.616987125669216, 6.256901375197271,
  7.2750810609742, 6.801225641197369, 5.913038611351225, 7.433235219195439,
  5.521451151265638, 7.219750563417488, 7.418998967016449, 6.272236935415281,
  7.151849846837643, 6.960714279709258, 8.949601911105969, 5.776907020077417,
  6.945489891552484, 5.670455161485157, 6.429338994827535, 7.616033142485437,
  6.445123726807482, 6.434175216222519, 6.539092329492874, 6.0938021550195725,
  10.100084305041152, 5.852380498378638, 6.6506671595554305, 5.161137855523347,
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
      if (width <= 7) {
        percentageDisplay.style.right = "93%";
        progressBar.style.width = "7%";
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
