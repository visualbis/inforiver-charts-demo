import hljs from "highlight.js";
import { InforiverChart } from "@visualbi/inforiver-charts";
import { toggleContainer } from "../../assets/scripts/router";
import dataRows from "../datasets/dualgroup";
import { groupBy } from "../utils";

const getLineChart = () => {
  toggleContainer(true);
  const pageTitle = document.getElementById("page-title");
  pageTitle.textContent = "Column Chart";
  const codeOptions = document.getElementById("code-options");
  const optionsValue = hljs.highlight(
    `
        const options = {
            container: '<HTML Element>',
            chartOptions: {
                chartType: 'lineChart'
            },
            datasource: {
                metadata: {
                    row: "Country",
                    measures: ["Sales"],
                },
                dataRows: '<Datrows>',
            }
        }
    `,
    { language: "javascript" }
  );
  codeOptions.innerHTML = optionsValue.value;
  const visualDOM = document.getElementById("visual-render-area");
  const lineChart = new InforiverChart({
    container: visualDOM,
    chartOptions: {
      chartType: "lineChart",
    },
    datasource: {
      metadata: {
        row: ["Year", "Quarter"],
        measures: ["AC"],
        // measureMeta: {
        //   AC: ["Profit"],
        //   PY: "Sales",
        // },
      },

      dataRows,
    },
    feature: {
      toolbar: {
        exportAsPDF: true,
      },
    },
  });
  lineChart.render();
};

export default getLineChart;
