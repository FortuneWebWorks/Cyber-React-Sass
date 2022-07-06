import { useContext, useEffect, useRef, useState } from 'react';
import 'styles/ETHPriceChart/ETHPrice.scss';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import externalTooltipHandler from './CustomTooltip';
import CollectionContext from 'contexts/collectionContext';
import outlier from 'outliers';

const LargeChart = ({ type, isOutliers, timeFrame }) => {
  type = type === 'list' ? 'listings' : 'orders';
  const { collectionData } = useContext(CollectionContext);
  const [data, setData] = useState(null);
  const [labels, setLabels] = useState(null);
  const max = useRef(240);

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

  const checkOutliers = (data) => {
    const outliers = data.filter(outlier('price'));
    const maxPrice = Math.max(...outliers.map((item) => +item.price));
    max.current = maxPrice;

    const outliersFiltered = outliers.map((item) => item);

    const result = [
      ...outliersFiltered
        .reduce((mp, o) => {
          if (!mp.has(+o.price)) mp.set(+o.price, { ...o, count: 0 });
          mp.get(+o.price).count++;
          return mp;
        }, new Map())
        .values(),
    ];

    const formattedData = result
      .map((item) => ({
        y: +item.count,
        x: +item.price,
        price: item.price,
        count: item.count,
      }))
      .sort((a, b) => +a.x - +b.x);

    const ranges = getRange(formattedData.length, 0, 5);

    const labels = formattedData.map((item, index) => {
      index = index !== 0 ? index + 1 : index;

      if (ranges.includes(index)) {
        return {
          label: index === 0 ? 0 : item.x,
          color: '#AB7CE1',
          labelColor: '#5B5E61',
        };
      }

      return {
        label: item.x,
        color: '#AB7CE1',
        labelColor: '#5B5E6100',
      };
    });

    setLabels(labels);

    setData(formattedData);
  };

  function getRange(upper, lower, steps) {
    const difference = upper - lower;
    const increment = difference / (steps - 1);
    return [
      lower,
      ...Array(steps - 2)
        .fill('')
        .map((_, index) => Math.ceil(lower + increment * (index + 1))),
      upper,
    ];
  }

  useEffect(() => {
    if (collectionData && collectionData[type]) {
      if (timeFrame) {
        const time = +timeFrame.split(' ')[0];

        const filteredData = collectionData[type].filter(
          (item) => getTime(item.timestamp) <= time
        );

        const result = [
          ...filteredData
            .reduce((mp, o) => {
              if (!mp.has(+o.price)) mp.set(+o.price, { ...o, count: 0 });

              mp.get(+o.price).count++;
              return mp;
            }, new Map())
            .values(),
        ];

        const formattedData = result
          .map((item) => ({
            y: +item.count,
            x: +item.price,
            price: item.price,
            count: item.count,
          }))
          .sort((a, b) => +a.x - +b.x);

        const ranges = getRange(formattedData.length, 0, 5);

        const labels = formattedData.map((item, index) => {
          index = index !== 0 ? index + 1 : index;

          if (ranges.includes(index)) {
            return {
              label: index === 0 ? 0 : item.x,
              color: '#AB7CE1',
              labelColor: '#5B5E61',
            };
          }

          return {
            label: item.x,
            color: '#AB7CE1',
            labelColor: '#5B5E6100',
          };
        });

        setLabels(labels);

        const maxPrice = Math.max(...filteredData.map((item) => +item.price));
        max.current = maxPrice;

        if (isOutliers) {
          checkOutliers(filteredData);
          return;
        }

        setData(formattedData);
      } else {
        if (isOutliers) {
          checkOutliers(collectionData[type]);
          return;
        }

        setData(
          collectionData[type].map((item) => ({
            y: +item.price,
            x: +getTime(item.timestamp),
            img: item.image_url,
            price: item.price,
            timestamp: item.timestamp,
            tokenId: item.token_id,
            tokenRank: item.token_rank,
          }))
        );
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collectionData, isOutliers, timeFrame, type]);

  return (
    <div className='ETH__container'>
      <Chart
        style={{ paddingLeft: '0' }}
        type='bar'
        data={{
          labels: labels?.map((label) => label.label),

          datasets: [
            {
              label: false,
              data: data,
              backgroundColor: labels?.map((label) => label.color),
              barThickness: 4,
            },
            // {
            //   label: false,
            //   data: [{ x: 3, y: 7 }],
            //   backgroundColor: '#FD8F25',
            //   barThickness: 4,
            // },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,

          onClick: function (e, el) {
            if (el[0]) {
              const updated = [...labels];
              const updateTarget = updated[el[0].index];
              updateTarget.color =
                updateTarget.color === '#AB7CE1' ? '#FD8F25' : '#AB7CE1';

              setLabels(updated);
            }

            this.update();
          },

          layout: {
            padding: {
              bottom: 40,
            },
          },

          scales: {
            x: {
              // stacked: true,
              offset: true,
              grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
                lineWidth: 2,
                color: '#244677',
                tickWidth: 0,
                // tickLength: 0,
                // padding: 30,
              },
              ticks: {
                // stepSize: 1,
                // callback: function (val) {
                //   return this.getLabels()[val];
                // },
                color: labels?.map((label) => label.labelColor),
                autoSkip: false,
                maxRotation: 0,
              },
              // min: 0,
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
                stepSize: 2,
              },
              max: 10,
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
      {/* <span className='ETH__hider_bottom'></span> */}
      <span className='ETH__hider_top'></span>
    </div>
  );
};

export default LargeChart;
