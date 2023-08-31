//graph

const DATA_COUNT = 39;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 996 };

const xValues = [
  29, 31, 46, 49, 82, 142, 184, 216, 279, 346, 384, 418, 440, 457, 466, 468,
  475, 502, 523, 528, 530, 547, 565, 572, 572, 579, 579, 603, 648, 696, 724,
  757, 775, 803, 834, 884, 899, 909, 995,
];

const yValues = [
  78, 61, 213, 138, 134, 220, 201, 195, 17, 74, 145, 85, 39, 36, 60, 66, 131,
  35, 161, 0, 9, 191, 77, 216, 67, 75, 118, 66, 134, 150, 9, 31, 163, 135, 188,
  16, 133, 36, 105,
];

const barColors = "#BACEFB";

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
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y + "%";
            }
            return label;
          },
        },
      },
    },
  },
});
