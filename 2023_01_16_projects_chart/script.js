const dataValues = document.querySelectorAll(".data");
const labelNames = document.querySelectorAll(".label");
const circles = document.querySelectorAll(".circle");
const total = document.querySelector(".total");
let tooltipEl = document.getElementById("chartjs-tooltip");

const data = {
  labels: ["Completed", "Overdue", "In Progress"],
  datasets: [
    {
      label: "Projects",
      data: [167, 24, 123],
      backgroundColor: ["#00E8C3", "#F6B902", "#7F6AFF"],
      hoverOffset: 4,
      pointStyle: "circle",
    },
  ],
};

const myChart = new Chart("myChart", {
  type: "doughnut",
  data: data,
  options: {
    tooltip: {
      backgroundColor: "black",
    },
    borderWidth: 0,
    cutout: 95,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

for (let index = 0; index < labelNames.length; index++) {
  const label = labelNames[index];
  const value = dataValues[index];
  const color = circles[index];
  label.innerHTML = data.labels[index];
  value.innerHTML = data.datasets[0].data[index];
  color.style.backgroundColor = data.datasets[0].backgroundColor[index];
}

total.innerHTML = data.datasets[0].data.reduce((a, b) => a + b, 0);
