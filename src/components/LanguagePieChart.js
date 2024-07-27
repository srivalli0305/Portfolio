// src/components/LanguagePieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the required components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const LanguagePieChart = () => {
    // Data for the pie chart
    const data = {
        labels: ['JavaScript', 'Python', 'Java', 'C', 'HTML','CSS',], // Languages
        datasets: [
            {
                label: 'Languages I Know',
                data: [70, 80, 60, 50, 65,65], // Percentages or number of projects in each language
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)' 
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    // Options for the pie chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <div style={{ width: '30%', margin: 'auto' }}>
            <h2>Languages I Know</h2>
            <Pie data={data} options={options} />
        </div>
    );
};

export default LanguagePieChart;
