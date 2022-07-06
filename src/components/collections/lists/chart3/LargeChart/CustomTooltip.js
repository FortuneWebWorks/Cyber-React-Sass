import 'styles/largeChart/largeChartCustomTooltip.scss';

const getOrCreateTooltip = (chart, tooltip) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div');
  const tooltipData = tooltip?.dataPoints?.at(0)?.raw;

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'long_chart_custom__tooltip';
  }

  tooltipEl.innerHTML = `
      <div>
        <div>
          <span>Price: ${tooltipData?.price} ETH</span>
          <span>Count: ${tooltipData?.count}</span>
        </div>
        <div>
          <div>
            <span>Count</span>
            <span></span>
          </div>
          <div>
            <span>Cumulative</span>
            <span></span>
          </div>
        </div>
      </div>
    `;

  chart.canvas.parentNode.appendChild(tooltipEl);

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart, tooltip);

  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top =
    positionY + tooltip.caretY - (tooltip.height + 10) + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

export default externalTooltipHandler;
