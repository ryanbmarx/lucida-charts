import { sidebar } from "../../../utils/sidebar";
import { initFrame } from "@newswire/frames";
import { csvParse } from "d3-dsv";
import { format } from "d3-format";


document.addEventListener("DOMContentLoaded", function (e) {
    initFrame();

    const container = document.querySelector("#chart");
    fetch("land-loss.csv")
        .then((resp) => resp.text())
        .then((text) => {
            return csvParse(text, function (d) {
                return {
                    label: d.company,
                    value: +d.loss,
                };
            });
        })
        .then(data => {
            data.sort((a, b) => b.value - a.value);
            container.appendChild(sidebar(data, null, format(",")));
        })
        .catch(e => console.error(e))
});
