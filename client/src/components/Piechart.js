import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../styles/Piechart.css';

const Piecharts = ({ chartOptions }) => {
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

const Piechart = () => {
  const chartOptions1 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Average Rating by Genre',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'Self-help', y: 19.9 },
          { name: 'Personal Finance', y:20.2 },
          { name: 'Psychology', y: 19.8 },
          { name: 'Philosophy', y: 18.9 },
          { name: 'Business', y: 21.1 }
        ],
      },
    ],
  };

  const chartOptions2 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Self-improvement Books by Rating',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'Rich Dad, Poor Dad', y: 12.8 },
          { name: 'The Psychology of Money', y: 9.7 },
          { name: 'Ikigai', y: 15.7 },
          { name: 'The Millionaire fastlane', y: 10.4 },
          { name: 'Hooked', y: 10.6 },
          { name: 'Atomic Habits', y: 10.6 },
          { name: 'How to win friends and influence people', y: 9.5 },
          { name: 'Rework', y: 14 },
        ],
      },
    ],
  };

  const chartOptions3 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Number of Books by Genre',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'Personal Finance', y: 10 },
          { name: 'Self-help', y: 10 },
          { name: 'Business', y: 20 },
          { name: 'Psychology', y: 30 },
          { name: 'Business', y: 10 },
          { name: 'Philosophy', y:20 },
        ],
      },
    ],
  };

  const chartOptions4 = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Percentage of Top Books by Title',
    },
    series: [
      {
        name: 'Data',
        colorByPoint: true,
        data: [
          { name: 'ATomic Habits', y: 25 },
          { name: 'The Psychology of Money', y: 45 },
          { name: 'Rework', y: 30 },
          { name: 'The Millionaire Fastlane', y: 30 },
          { name: 'How to win friends and influence people', y: 30 },
        ],
      },
    ],
  };

  return (
    <section id='piecharts'>
    <div className="pie-container">
      <div className="pie-chart">
        <Piecharts chartOptions={chartOptions1} />
      </div>
      <div className="pie-chart">
        <Piecharts chartOptions={chartOptions2} />
      </div>
      <div className="pie-chart">
        <Piecharts chartOptions={chartOptions3} />
      </div>
      <div className="pie-chart">
        <Piecharts chartOptions={chartOptions4} />
      </div>
    </div>
    </section>
  );
};

export default Piechart;