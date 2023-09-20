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
    plugins: {
      legend: {
        position: "bottom",
        onHover: handleHover,
        onLeave: handleLeave,
        labels: {
          usePointStyle: true,
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return datasets[0].data.map((data, i) => ({
              text: ` ${data} ${chart.data.labels[i]}`,
              fillStyle: datasets[0].backgroundColor[i],
              index: i,
              fontColor: "white",
            }));
          },
        },
      },
    },
  },
});

// Append '4d' to the colors (alpha channel), except for the hovered index
function handleHover(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color, index, colors) => {
      colors[index] =
        index === item.index || color.length === 9 ? color : color + "4D";
    }
  );
  legend.chart.update();
}

// Removes the alpha channel from background colors
function handleLeave(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach(
    (color, index, colors) => {
      colors[index] = color.length === 9 ? color.slice(0, -2) : color;
    }
  );
  legend.chart.update();
}
