import { useContext, useEffect, useRef, useState } from 'react';
import 'styles/FloorVarChart/floorVarChart.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import externalTooltipHandler from './FloorVarCustomTooltip';
import CollectionContext from 'contexts/collectionContext';
import outlier from 'outliers';

const FloorVarChart = ({ type, isOutliers, timeFrame, floorPrice }) => {
  type = type === 'list' ? 'listings' : 'orders';
  const { collectionData } = useContext(CollectionContext);
  const [data, setData] = useState(null);
  const max = useRef(20);

  const getTime = (timestamp) => {
    const hours = new Date(+timestamp).getHours();

    return hours;
  };

  const plugin = {
    id: 'chartAreaBorder',
    afterDraw: (chart, args, opts) => {
      const ctx = chart.ctx,
        x = chart.tooltip.caretX,
        y = chart.tooltip.caretY,
        chartBottom = chart.chartArea.bottom,
        chartLeft = chart.chartArea.left;

      const {
        chartArea: { top, left, width, height },
      } = chart;
      const {
        borders: { tLtR, tLbL, tRbR, bLbR },
      } = opts;

      if (chart.tooltip._active && chart.tooltip._active.length) {
        // draw line Y
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([3, 5]);
        ctx.moveTo(x, y);
        ctx.lineTo(x, chartBottom);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#1E2134';
        ctx.stroke();
        ctx.restore();

        // draw line X
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([3, 5]);
        ctx.moveTo(x, y);
        ctx.lineTo(chartLeft, y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#1E2134';
        ctx.stroke();

        ctx.restore();
      }

      ctx.save();
      if (tLtR && tLtR.borderWidth !== 0) {
        ctx.beginPath();
        ctx.strokeStyle = tLtR.borderColor || Chart.defaults.color;
        ctx.lineWidth = tLtR.borderWidth || 0;
        ctx.borderStyle = tLtR.borderDash || [];
        ctx.borderTopWidth = tLtR.borderTopWidth || 0;
        ctx.setLineDash(tLtR.borderDash || []);
        ctx.lineDashOffset = tLtR.borderDashOffset || 0;
        ctx.moveTo(left, top);
        ctx.lineTo(left + width, top);
        ctx.stroke();
      }

      if (tLbL && tLbL.borderWidth !== 0) {
        ctx.beginPath();
        ctx.strokeStyle = tLbL.borderColor || Chart.defaults.color;
        ctx.lineWidth = tLbL.borderWidth || 0;
        ctx.borderStyle = tLbL.borderDash || [];
        ctx.borderTopWidth = tLbL.borderTopWidth || 0;
        ctx.setLineDash(tLbL.borderDash || []);
        ctx.lineDashOffset = tLbL.borderDashOffset || 0;
        ctx.moveTo(left, top);
        ctx.lineTo(left, top + height);
        ctx.stroke();
      }

      if (tRbR && tRbR.borderWidth !== 0) {
        ctx.beginPath();
        ctx.strokeStyle = tRbR.borderColor || Chart.defaults.color;
        ctx.lineWidth = tRbR.borderWidth || 0;
        ctx.borderStyle = tRbR.borderDash || [];
        ctx.borderTopWidth = tRbR.borderTopWidth || 0;
        ctx.setLineDash(tLbL.borderDash || []);
        ctx.lineDashOffset = tRbR.borderDashOffset || 0;
        ctx.moveTo(left + width, top);
        ctx.lineTo(left + width, top + height);
        ctx.stroke();
      }

      if (bLbR && bLbR.borderWidth !== 0) {
        ctx.beginPath();
        ctx.strokeStyle = bLbR.borderColor || Chart.defaults.color;
        ctx.lineWidth = bLbR.borderWidth || 0;
        ctx.borderStyle = bLbR.borderDash || [];
        ctx.borderTopWidth = bLbR.borderTopWidth || 0;
        ctx.setLineDash(bLbR.borderDash || []);
        ctx.lineDashOffset = bLbR.borderDashOffset || 0;
        ctx.moveTo(left, top + height);
        ctx.lineTo(left + width, top + height);
        ctx.stroke();
      }

      ctx.restore();
    },
  };

  useEffect(() => {
    if (collectionData && collectionData[type]) {
      if (timeFrame === false) {
        const time = +timeFrame.split(' ')[0];

        const filteredData = collectionData[type].filter(
          (item) =>
            getTime(item.timestamp) <= time && {
              y: +item.price,
              x: +getTime(item.timestamp),
              img: item.image_url,
              price: item.price,
              timestamp: item.timestamp,
              tokenId: item.token_id,
              tokenRank: item.token_rank,
            }
        );

        const maxPrice = Math.max(...filteredData.map((item) => +item.price));
        max.current = maxPrice;

        setData(
          filteredData.map((item) => ({
            y: +item.price,
            x: +getTime(item.timestamp),
            img: item.image_url,
            price: item.price,
            timestamp: item.timestamp,
            tokenId: item.token_id,
            tokenRank: item.token_rank,
          }))
        );
      } else {
        setData({
          above: collectionData[type]
            .filter((item) => +item.price >= +floorPrice)
            .map((i) => +i.price),
          below: collectionData[type]
            .filter((item) => +item.price <= +floorPrice)
            .map((i) => +i.price),
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionData, isOutliers, timeFrame, type]);

  return (
    <div className='floor__container'>
      <Chart
        style={{ paddingLeft: '0' }}
        type='line'
        data={{
          labels: ['6:55 AM', '9:55 AM', '10:55 AM', '11:55 AM', '12:55 AM'],

          datasets: [
            {
              label: false,
              data: data?.above,
              fill: false,
              cubicInterpolationMode: 'monotone',
              tension: 0.4,
              borderColor: '#27AF52',
              pointBackgroundColor: '#244677',
              pointHoverBackgroundColor: '#244677ff',
              pointRadius: 0,
              pointHoverRadius: 7,
              pointHoverBorderWidth: 8,
              pointHoverBorderColor: 'rgb(100,100,100, 0.3)',
              hoverBorderJoinStyle: 'bevel',
            },
            {
              label: false,
              data: [+floorPrice],
              fill: false,
              cubicInterpolationMode: 'monotone',
              tension: 0.4,
              borderColor: '#FD8F25',
              pointBackgroundColor: '#244677',
              pointHoverBackgroundColor: '#244677ff',
              pointRadius: 5,
              pointHoverRadius: 7,
              pointHoverBorderWidth: 8,
              pointHoverBorderColor: 'rgb(100,100,100, 0.3)',
              hoverBorderJoinStyle: 'bevel',
            },
            {
              label: false,
              data: data?.below,
              fill: false,
              cubicInterpolationMode: 'monotone',
              tension: 0.4,
              borderColor: '#FD2F7A',
              pointBackgroundColor: '#244677',
              pointHoverBackgroundColor: '#244677ff',
              pointRadius: 0,
              pointHoverRadius: 7,
              pointHoverBorderWidth: 8,
              pointHoverBorderColor: 'rgb(100,100,100, 0.3)',
              hoverBorderJoinStyle: 'bevel',
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,

          layout: {
            padding: {
              bottom: 40,
            },
          },

          scales: {
            x: {
              offset: true,
              grid: {
                display: false,
                lineWidth: 0,
                color: '#244677',
                tickWidth: 0,
                // tickLength: 0,
                // padding: 30,
              },
              ticks: {
                callback: function (val) {
                  return this.getLabels()[val];
                },
              },
              min: 0,
              beginAtZero: true,
            },

            y: {
              grid: {
                color: '#244677',
                lineWidth: 2,
                tickWidth: 0,
                drawBorder: false,
                drawOnChartArea: true,
              },

              ticks: {
                stepSize: 1,
              },
              max: max.current,
              min: 0,
              // beginAtZero: true,
            },
          },

          plugins: {
            tooltip: {
              enabled: false,
              position: 'average',
              external: externalTooltipHandler,
            },

            legend: { display: false },

            chartAreaBorder: {
              borders: {
                tLtR: {
                  borderWidth: 5,
                  borderColor: '#0b1e39',
                },
                tLbL: {
                  borderWidth: 0,
                  borderColor: '#244677',
                },
                tRbR: {
                  borderTopWidth: 0,
                  borderColor: 'transparent',
                  lineDashOffset: 5,
                },
                bLbR: {
                  borderWidth: 0,
                  borderColor: '#244677',
                },
              },
            },
          },
        }}
        plugins={[plugin]}
      />
      {console.log(collectionData)}
      <span className='ETH__hider_bottom'></span>
      <span className='ETH__hider_top'></span>
    </div>
  );
};

export default FloorVarChart;
