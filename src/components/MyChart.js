import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const MyChart = () => {
  const data = {
    labels: ['20', '', '25', '', '30', '', '35', '', '40', '', '60', '', '65'],
    datasets: [
      {
        label: 'Person B',
        backgroundColor: 'rgba(33, 150, 243, 1)',
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 1,
        data: [10, 20, 30, 38, 48, 57, 67, 76, 86, 95, 102, 110, 115],
        barPercentage: 0.5, // Adjust this value to control the width of Person B's bars
        categoryPercentage: 1, // Adjust this value to control the spacing between Person B's bars
      },
      {
        label: 'Person A',
        backgroundColor: 'rgba(25, 118, 210, 1)',
        borderColor: 'rgba(25, 118, 210, 1)',
        borderWidth: 1,
        data: [10, 20, 30, 38, 48, 57, 67, 76, 86, 95, 102, 110, 115],
        barPercentage: 1, // Adjust this value to control the width of Person A's bars
        categoryPercentage: 0.5, // Adjust this value to control the spacing between Person A's bars
      },
      {
        label: 'Person A',
        backgroundColor: 'rgba(13, 71, 161, 1)',
        borderColor: 'rgba(13, 71, 161, 1)',
        borderWidth: 1,
        data: [10, 20, 30, 38, 48, 57, 67, 76, 86, 95, 102, 110, 115],
        barPercentage: 1, // Adjust this value to control the width of Person A's bars
        categoryPercentage: 0.5, // Adjust this value to control the spacing between Person A's bars
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        max: 350,
        ticks: {
            stepSize: 100,
           
        },
        stacked: true,
        grid: {
          display: false,
           // Hide the first vertical grid line
        },
      },
      y: {
        beginAtZero: true,
        max: 350,
        ticks: {
            stepSize: 100,
            
        },
        stacked: true,
      },     
    },
    plugins: {
        legend: {
          display: false, // Set this to false to hide the legends
        },
      },
  };

  return <Bar data={data} options={options} />;
};

export default MyChart;
