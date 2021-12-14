import getColumnChart from "../../pages/useCases/columnChart";
import getColumnChartHorizontal from "../../pages/useCases/columnChartHorizontal";

export const toggleContainer = (hasChart = false) => {
    const content = document.getElementById('content-info');
    const visualContainer = document.getElementById('visual-container');
    if (hasChart) {
        content.setAttribute('class', 'hide');
        visualContainer.setAttribute('class', '');
    } else {
        content.setAttribute('class', '');
        visualContainer.setAttribute('class', 'hide');
    }
}

const HomePage = () => {
    toggleContainer();
    const content = document.getElementById('content-info');
    content.innerHTML = `
        <h4>Home Page</h4>
    `;
}

new Router({
    '#/home/': HomePage,
    '#/usecases/columnChart/': getColumnChart,
    '#/usecases/columnChart_horizontal/': getColumnChartHorizontal,
});