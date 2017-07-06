import React from 'react';
import ReactDOM from 'react-dom';
import {Bar} from 'react-chartjs-2';

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartData: {
        labels: ['I DON\'T GET IT', 'NOT REALLY', 'NEUTRAL', 'I ALMOST GET IT', 'I GOT THIS!'],
        datasets: [
          {
            data: [5, 10, 8, 7, 9], // this.props.votes
            backgroundColor: ['rgba(255, 45, 45, 0.8)', 'rgba(51, 153, 255, 0.8)', 'rgba(255, 255, 102, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(75, 192, 192, 0.8)']
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="barchart">
        <Bar
        data={this.state.barChartData}
        options={{
          title: {
            display: true,
            text: "Thumbs Range",
            fontSize: 25
          },
          legend: {
            display: false,
          },
            scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: '# of Votes',
                fontSize: 20
              },
              ticks: {beginAtZero: true}}]
          },
          layout: {
            padding: {
            left: 40,
            right: 40,
            bottom: 40,
            top: 40
            }
          }
        }}
        />
      </div>
    )
  }

}


export default BarChart;