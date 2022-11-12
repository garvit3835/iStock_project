import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

Chart.defaults.color = 'rgb(248, 249, 250)';

export default class Sensex extends Component {
  render() {
    return (
      <>
      <div className="chartbox">
        <Line
          data={{
            labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
            datasets: [{
              data: [115, 120, 130, 110, 125, 105, 110, 95, 100, 115],
              label: "SENSEX",
              borderColor: "rgb(248, 249, 250)",
              fill: true,
              backgroundColor: "rgba(248, 249, 250, 0.2)",
            }]
          }}
          options={{
            plugins: {
              tooltip: {
                backgroundColor: "#006688"
              },
              legend: {
                labels: {
                  color: "rgb(248, 249, 250)",
                  font: {
                    size: 18
                  }
                }
              }
            },
            scales: {
              y: {
                grid: {
                  color: "rgb(248, 249, 250)"
                },
                ticks: {
                  color: "rgb(248, 249, 250)"
                }
              },
              x: {
                grid: {
                  color: "rgb(248, 249, 250)"
                },
                ticks: {
                  color: "rgb(248, 249, 250)"
                }
              }
            },
            title: {
              display: false,
              text: 'World population per region (in millions)'
            },
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
      <br />
      <table className="table text-light text-center">
        <thead>
          <tr>
            <th className="tabhead">#</th>
            <th className="tabhead">SCRIPT</th>
            <th className="tabhead">OPEN</th>
            <th className="tabhead">HIGH</th>
            <th className="tabhead">LOW</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="tabbody">#</th>
            <th className="tabbody">Company</th>
            <th className="tabbody">Script Name</th>
            <th className="tabbody">Opening Price</th>
            <th className="tabbody">Closing Price</th>
          </tr>
          <tr>
            <th className="tabbody">#</th>
            <th className="tabbody">Company</th>
            <th className="tabbody">Script Name</th>
            <th className="tabbody">Opening Price</th>
            <th className="tabbody">Closing Price</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Script Name</th>
            <th>Opening Price</th>
            <th>Closing Price</th>
          </tr>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Script Name</th>
            <th>Opening Price</th>
            <th>Closing Price</th>
          </tr>
        </tbody>
      </table>
    </>
    )
  }
}
