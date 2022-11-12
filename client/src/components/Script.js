import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

Chart.defaults.color = 'rgb(248, 249, 250)';

export default function Script({ info, script }) {
  const [quantity, setQuantity] = useState(0)

  const objectArray = info ? Object.keys(info) : ""                      // fixing fetched data from api
  const price = objectArray[0] ? info[objectArray[0]]["4. close"] : 0

  const handleChange = async (event) => {            // form input change
    await setQuantity(event.target.value)
  }

  const handleBuy = async (event) => {                                     // form submit on buy
    await alert(`${quantity} shares of ${script} bought at ${price} each`)   
    await event.preventDefault()

    let data = {                                                    // setting the data in json format 
      script: script,                                              
      price: price,                                                
      quantity: quantity
    }

    await fetch(`http://localhost:5000/buyorder`, {                // passing the data to server
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      return
    })
  }

  const handleSell = async (event) => {                             // form submit on sell
    await alert(`${quantity} shares of ${script} sold at ${price} each`)
    await event.preventDefault()

    let data = {                                                    // setting the data in json format
      script: script,
      price: price,
      quantity: -quantity
    }
  
    await fetch(`http://localhost:5000/sellorder`, {                // passing the data to server
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      return
    })
  }

  return (
    <>
      <div className="chartbox">                                  {/*  the line graph  */}                       
        <Line
          data={{
            labels: [
              objectArray.length === 0 ? 0 : objectArray[9],        // dates   
              objectArray.length === 0 ? 0 : objectArray[8],
              objectArray.length === 0 ? 0 : objectArray[7],
              objectArray.length === 0 ? 0 : objectArray[6],
              objectArray.length === 0 ? 0 : objectArray[5],
              objectArray.length === 0 ? 0 : objectArray[4],
              objectArray.length === 0 ? 0 : objectArray[3],
              objectArray.length === 0 ? 0 : objectArray[2],
              objectArray.length === 0 ? 0 : objectArray[1],
              objectArray.length === 0 ? 0 : objectArray[0]
            ],
            datasets: [{
              data: [
                objectArray[9] ? info[objectArray[9]]["4. close"] : 0,    // prices
                objectArray[8] ? info[objectArray[8]]["4. close"] : 0,
                objectArray[7] ? info[objectArray[7]]["4. close"] : 0,
                objectArray[6] ? info[objectArray[6]]["4. close"] : 0,
                objectArray[5] ? info[objectArray[5]]["4. close"] : 0,
                objectArray[4] ? info[objectArray[4]]["4. close"] : 0,
                objectArray[3] ? info[objectArray[3]]["4. close"] : 0,
                objectArray[2] ? info[objectArray[2]]["4. close"] : 0,
                objectArray[1] ? info[objectArray[1]]["4. close"] : 0,
                objectArray[0] ? info[objectArray[0]]["4. close"] : 0
              ],
              label: script,
              borderColor: "rgb(248, 249, 250)",                  // graph colours/fonts etc..
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
      <form>
        <div className=" width-25 center-x d-flex mb-2">
          <span className="input-group-text rounded-pill rounded-end" id="inputGroup-sizing-default">Quantity</span>
          <input type="number" className="form-control invback text-light rounded-pill rounded-start" onChange={handleChange}
            aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="1-1000000" />
        </div>
        <div className='d-flex justify-content-center p-2'>
          <button type="submit" value="Submit" className="btn btn-success mx-3 btn-lg" onClick={handleBuy}>BUY</button>
          <button type="submit" value="Submit" className="btn btn-danger mx-3 btn-lg" onClick={handleSell}>SELL</button>
        </div>
      </form>
    </>
  )
}
