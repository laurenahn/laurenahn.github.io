import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadarChart = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            height: 500,
            type: 'radar',
            toolbar: {
                show:false
            },

        },
        title: {
            offsetY: 20,
            text: 'Skill tree',
            style: {
                fontFamily: 'MS Windows 95', // Set font for title
            },
        },
        xaxis: {
            categories: ['Product', 'Coding', 'Growth', 'Game Economics', 'Game Design', 'Chinese', 'Blockchains', 'Docker', 'Game Services' ],
            labels: {
                style: {
                    //fontWeight: 'bold',
                    //fontSize: '8px',
                    fontFamily: 'MS Windows 95', // Set font for x-axis labels
                },
            },
            
        },
        yaxis: {
            tickAmount:4,
            stepsize: 25,
            max:100,
            min:0,
            labels: {
                style: {
                    //fontSize: '8px',
                    fontFamily: 'MS Windows 95', // Set font for x-axis labels
                },
            },
        },
        grid: {
            padding: {
                bottom: -20, // Reduce bottom padding
                top:-30,
                // Other padding options...
            },
            offsetX: -100,
            // Other grid options...
        },

        
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: 'Series 1',
            data: [99, 30, 70, 99, 80, 35, 90, 60, 90],
        },
        // ... other series data
    ]);

    return (
        <div>
            <div id="chart" >
                <ReactApexChart options={chartOptions} series={chartSeries} type="radar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default RadarChart;
