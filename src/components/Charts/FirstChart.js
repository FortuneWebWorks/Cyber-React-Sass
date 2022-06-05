import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const BarLineChart = () => {
  return (
    <Chart
      data={{
        labels: ['hello', 'test'],
        datasets: [
          // {
          //   type: 'line',
          //   data: [
          //     { x: 2, y: 2 },
          //     { x: 4, y: 5 },
          //     { x: 4, y: 1 },
          //   ],
          //   borderColor: 'green',
          // },
          // {
          //   type: 'line',
          //   data: [
          //     { x: 0, y: 1 },
          //     { x: 2, y: 10 },
          //     { x: 9, y: 1 },
          //   ],
          //   borderColor: 'yellow',
          // },
          {
            type: 'bar',
            data: [10, 5],
            backgroundColor: '#739AD3',
            barThickness: 5,
            label: 'bar',
          },
        ],
      }}
      options={{
        maintainAspectRatio: false,
        interaction: {
          mode: 'y',
        },
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
          myScale: {
            position: 'left', // `axis` is determined by the position as `'y'`
          },
        },
      }}
    />
  );
};

export default BarLineChart;
