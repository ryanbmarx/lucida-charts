import { sidebar } from "./utils/sidebar.js";

document.addEventListener("DOMContentLoaded", function (e) {
  const data = [
    {
      label: "Batu Kawan",
      data: [
        {
          label: "Borneo Taiko Clay Sdn Bhd.",
          value: 1760000000,
        },
        {
          label: "Kuala Lumpur Kepong",
          value: 1500000000,
          highlight: true,
        },
        {
          label: "TMK PJSC",
          value: 995000000,
        },
        {
          label: "Mitsubishi Gas Chemical",
          value: 450000000,
        },
        {
          label: "Astra Agro",
          value: 104000000,
        },
      ],
    },
    {
      label: "Astra Agro",
      data: [
        {
          label: "Astra Graphia Tbk.",
          value: 1760000000,
        },
        {
          label: "Astra International",
          value: 1650000000,
        },
        {
          label: "Astra Otoparts Tbk",
          value: 400000000,
        },
        {
          label: "Grokul Agro Resources",
          value: 200000000,
        },
        {
          label: "Eagle High Plantations",
          value: 124000000,
          highlight: true,
        },
      ],
    },
    {
      label: "Indofood",
      data: [
        {
          label: "Indomobil Sukses Int.",
          value: 234000000,
        },
      ],
    },
    { label: "Anglo Eastern" },
    { label: "IJM" },
  ];
  const mainContainer = document.querySelector("#container");
  const max = 1800000000;
  data.forEach((d) => {
    const chartContainer = document.createElement("div");
    chartContainer.classList.add("container__subchart");
    const chartLabel = document.createElement("h3");
    chartLabel.classList.add("chart-sublabel");
    chartLabel.innerText = d.label;
    chartContainer.appendChild(chartLabel);

    if (d.data) {
      d.data.sort((a, b) => b.value - a.value);
      const chart = sidebar(d.data, max);
      chartContainer.append(chart);
    } else {
      const noData = document.createElement("p");
      noData.classList.add("no-data");
      noData.innerText = "No data available";
      chartContainer.appendChild(noData);
    }
    mainContainer.append(chartContainer);
  });
});
