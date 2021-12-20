import hljs from "highlight.js";
import { InforiverChart } from "@visualbi/inforiver-charts";
import { toggleContainer } from "../../assets/scripts/router";
import dataRows from "../datasets/complex";

const getColumnChartHorizontal = () => {
    toggleContainer(true);
    const pageTitle = document.getElementById('page-title');
    pageTitle.textContent = 'Column Chart (Horizontal)';
    const codeOptions = document.getElementById('code-options');
    const optionsValue = hljs.highlight(`
        const options = {
            container: '<HTML Element>',
            chartOptions: {
                chartType: 'columnChart',
                orientation: 'horizontal'
            },
            datasource: {
                metadata: {
                    row: "Country",
                    measures: ["Sales"],
                },
                dataRows: '<Datrows>',
            }
        }
    `, { language: 'javascript' });
    codeOptions.innerHTML = optionsValue.value;
    const visualDOM = document.getElementById('visual-render-area');
    const columnChart = new InforiverChart({
        container: visualDOM,
        chartOptions: {
            chartType: 'columnChart',
            orientation: 'horizontal'
        },
        datasource: {
            metadata: {
                row: "Country",
                measures: ["Sales"],
            },
            dataRows,
        }
    });
    columnChart.render();
}

export default getColumnChartHorizontal;