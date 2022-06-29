import { useContext, useEffect, useRef, useState } from 'react';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import externalTooltipHandler from './CustomTooltip';
import CollectionContext from 'contexts/collectionContext';
import outlier from 'outliers';

const ETHPrice = ({ type, isOutliers, timeFrame }) => {
  type = type === 'list' ? 'listings' : 'orders';
  const { collectionData } = useContext(CollectionContext);
  const [data, setData] = useState(null);
  const chart = useRef();

  const getTime = (timestamp) => {
    const hours = new Date(+timestamp).getHours();

    return hours;
  };

  const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { left, top, width, height },
      } = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.setLineDash(options.borderDash || []);
      ctx.lineDashOffset = options.borderDashOffset;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    },
  };

  useEffect(() => {
    if (collectionData && collectionData[type]) {
      if (timeFrame) {
        const time = +timeFrame.split(' ')[0];

        const filteredData = collectionData[type].filter(
          (item) =>
            getTime(item.timestamp) <= time && {
              x: +item.price,
              y: +getTime(item.timestamp),
              img: item.image_url,
              price: item.price,
              timestamp: item.timestamp,
              tokenId: item.token_id,
              tokenRank: item.token_rank,
            }
        );

        console.log(filteredData);

        setData(
          filteredData.map((item) => ({
            x: +item.price,
            y: +getTime(item.timestamp),
            img: item.image_url,
            price: item.price,
            timestamp: item.timestamp,
            tokenId: item.token_id,
            tokenRank: item.token_rank,
          }))
        );
      } else if (isOutliers) {
        const needToCheck = collectionData[type].map((item) =>
          parseInt(item.price)
        );

        setData(
          collectionData[type].map((item) => ({
            x: +item.price,
            y: +getTime(item.timestamp),
            img: item.image_url,
            price: item.price,
            timestamp: item.timestamp,
            tokenId: item.token_id,
            tokenRank: item.token_rank,
          }))
        );
        // console.log(outlier(needToCheck));
      } else {
        setData(
          collectionData[type].map((item) => ({
            x: +item.price,
            y: +getTime(item.timestamp),
            img: item.image_url,
            price: item.price,
            timestamp: item.timestamp,
            tokenId: item.token_id,
            tokenRank: item.token_rank,
          }))
        );
      }
    }
  }, [collectionData, isOutliers, timeFrame, type]);

  return (
    <div>
      <Chart
        ref={chart}
        style={{ paddingLeft: '0' }}
        type='scatter'
        data={{
          labels: ['6:55 AM', '9:55 AM', '10:55 AM', '11:55 AM', '12:55 AM'],

          datasets: [
            {
              label: false,
              data: data,
              pointBackgroundColor: '#244677',
              pointHoverBackgroundColor: '#244677ff',
              pointRadius: 5,
              pointHoverRadius: 7,
              pointHoverBorderWidth: 8,
              pointHoverBorderColor: 'rgb(100,100,100, 0.3)',
              hoverBorderJoinStyle: 'bevel',
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
                lineWidth: 2,
                color: '#244677',
                tickWidth: 0,
              },
              ticks: {
                callback: function (val) {
                  return this.getLabels()[val];
                },
              },
              // min: -1,
              beginAtZero: true,
            },

            y: {
              grid: {
                color: '#244677',
                lineWidth: 2,
                tickWidth: 0,
                drawBorder: true,
              },
              // min: 0,
              beginAtZero: true,
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
              borderColor: '#244677',
              borderWidth: 2,
            },
          },
        }}
        plugins={[chartAreaBorder]}
      />
    </div>
  );
};

export default ETHPrice;
