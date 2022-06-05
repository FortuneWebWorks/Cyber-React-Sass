import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const BarLineChart = () => {
  return (
    <Chart
      data={{
        labels: ['hello', 'test'],
        datasets: [
          {
            type: 'line',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'green',
          },
          {
            type: 'line',
            data: [15, 20],
            borderColor: 'yellow',
          },
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
        plugins: {
          legend: {
            display: true,
          },
        },
      }}
    />
  );
};

export default BarLineChart;
