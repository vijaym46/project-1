import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function StatisticsChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Subscribers",
        borderColor: '#f3545d',
        pointBackgroundColor: 'rgba(243, 84, 93, 0.6)',
        pointRadius: 0,
        backgroundColor: 'rgba(243, 84, 93, 0.4)',
        fill: true,
        borderWidth: 2,
        data: [154, 184, 175, 203, 210, 231, 240, 278, 252, 312, 320, 374]
      },
      {
        label: "New Visitors",
        borderColor: '#fdaf4b',
        pointBackgroundColor: 'rgba(253, 175, 75, 0.6)',
        pointRadius: 0,
        backgroundColor: 'rgba(253, 175, 75, 0.4)',
        fill: true,
        borderWidth: 2,
        data: [256, 230, 245, 287, 240, 250, 230, 295, 331, 431, 456, 521]
      },
      {
        label: "Active Users",
        borderColor: '#177dff',
        pointBackgroundColor: 'rgba(23, 125, 255, 0.6)',
        pointRadius: 0,
        backgroundColor: 'rgba(23, 125, 255, 0.4)',
        fill: true,
        borderWidth: 2,
        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: false,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      }
    },
    layout: {
      padding: { left: 5, right: 5, top: 15, bottom: 15 }
    },
    scales: {
      y: {
        ticks: { font: { weight: "500" }, beginAtZero: false, maxTicksLimit: 5, padding: 10 },
        grid: { drawTicks: false, display: false }
      },
      x: {
        grid: { zeroLineColor: "transparent" },
        ticks: { padding: 10, font: { weight: "500" } }
      }
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      const legendContainer = document.getElementById("myChartLegend");
      legendContainer.innerHTML = chartRef.current.legend.legendItems.map(item =>
        `<li><span style="background-color:${item.fillStyle}"></span>${item.text}</li>`
      ).join('');
    }
  }, []);

  return (
    <div className="card-body">
      <div className="chart-container h-96" style={{ minHeight: '375px' }}>
        <Line ref={chartRef} data={data} options={options} />
      </div>
      <div id="myChartLegend" className="mt-4 flex flex-wrap"></div>
    </div>
  );
}

export default StatisticsChart;