//graph

const DATA_COUNT = 39;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 996 };

const xValues = [
  15, 31, 46, 50, 82, 142, 184, 216, 279, 346, 384, 418, 440, 470, 490, 501,
  509, 514, 523, 540, 556, 572, 586, 597, 608, 620, 643, 661, 678, 696, 724,
  757, 775, 803, 834, 884, 899, 954, 995,
];

const yValues = [
  0, 225, 100, 158, 67, 79, 20, 154, 42, 83, 45, 201, 130, 156, 59, 212, 34, 86,
  9, 5, 66, 105, 76, 199, 40, 206, 0, 78, 37, 150, 77, 154, 58, 63, 0, 82, 0,
  34, 0,
];

const barColors = "#7E83F1";

const myChart = new Chart("myChart", {
  type: "scatter",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "",
        backgroundColor: barColors,
        borderColor: barColors,
        data: yValues,
        showLine: true,
        pointStyle: false,
      },
    ],
  },
  options: {
    elements: {
      line: true,
    },
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        border: {
          display: false,
        },
        ticks: {
          stepSize: 75,
          callback: function (value) {
            return value + "%";
          },
        },
      },
      x: {
        beginAtZero: true,
        min: 0,
        max: 996,

        ticks: {
          stepSize: 166,
        },

        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        enabled: true,
        displayColors: false,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            label = context.parsed.y + "%";
            return label;
          },
          title: function () {
            return "Fri, April 10, 7:51 PM";
          },
        },
      },

      interaction: {
        mode: "y",
      },
    },
  },
});
