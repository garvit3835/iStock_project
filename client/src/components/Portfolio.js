import React, { useEffect, useState } from 'react'
import Price1 from './currentPrices/Price1'
import Price2 from './currentPrices/Price2'
import Price3 from './currentPrices/Price3'
import Price4 from './currentPrices/Price4'
import Price5 from './currentPrices/Price5'

export default function Portfolio() {
  const [record, setRecord] = useState([])

  useEffect(() => {                                      // fetching records from DB
    const fetchRecord = async () => {
      const response = await fetch(`http://localhost:5000/record`)
      const json = await response.json()
      await setRecord(json)
    }
    fetchRecord()
  }, [])

  let balance = record.balance ? (record.balance).toFixed(2) : 0     // assigning balance
  
  let currentPrice1 = (parseFloat(Price1())).toFixed(2)                   // assigning current price, 
  let holding1 = record.holding ? record.holding.at(-1) : 0               // holding, order price, quantity 
  let orderPrice1 = record.price ? record.price.at(-1) : 0                // and net profit/loss for 5 table values.
  let quantity1 = record.quantity ? record.quantity.at(-1) : "loading"
  let pl1 = quantity1*(currentPrice1 - orderPrice1)
  let npl1 = (pl1).toFixed(2)
  
  let currentPrice2 = (parseFloat(Price2())).toFixed(2)
  let holding2 = record.holding ? record.holding.at(-2) : 0
  let orderPrice2 = record.price ? record.price.at(-2) : 0
  let quantity2 = record.quantity ? record.quantity.at(-2) : "loading"
  let pl2 = quantity2*(currentPrice2 - orderPrice2)
  let npl2 = (pl2).toFixed(2)

  let currentPrice3 = (parseFloat(Price3())).toFixed(2)
  let holding3 = record.holding ? record.holding.at(-3) : 0
  let orderPrice3 = record.price ? record.price.at(-3) : 0
  let quantity3 = record.quantity ? record.quantity.at(-3) : "loading"
  let pl3 = quantity3*(currentPrice3 - orderPrice3)
  let npl3 = (pl3).toFixed(2)

  let currentPrice4 = (parseFloat(Price4())).toFixed(2)
  let holding4 = record.holding ? record.holding.at(-4) : 0
  let orderPrice4 = record.price ? record.price.at(-4) : 0
  let quantity4 = record.quantity ? record.quantity.at(-4) : "loading"
  let pl4 = quantity4*(currentPrice4 - orderPrice4)
  let npl4 = (pl4).toFixed(2)

  let currentPrice5 = (parseFloat(Price5())).toFixed(2)
  let holding5 = record.holding ? record.holding.at(-5) : 0
  let orderPrice5 = record.price ? record.price.at(-5) : 0
  let quantity5 = record.quantity ? record.quantity.at(-5) : "loading"
  let pl5 = quantity5*(currentPrice5 - orderPrice5)
  let npl5 = (pl5).toFixed(2)

  return (
    <>
    <div>
      <hr className='text-light' />
      <p className="fs-3 text-light mx-3">{record.name}</p>
      <p className="fs-4 text-light mx-3">Margin : {balance}</p>
      <hr className='text-light' />
      <table className="table text-light text-center">
        <thead>
          <tr>
            <th className="tabhead">SCRIPT</th>
            <th className="tabhead">QUANTITY</th>
            <th className="tabhead">BUY/SELL PRICE</th>
            <th className="tabhead">CURRENT PRICE</th>
            <th className="tabhead">NET P/L</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <th className="tabbody">{holding1}</th>
            <th className="tabbody">{quantity1}</th>
            <th className="tabbody">{orderPrice1}</th>
            <th className="tabbody">{currentPrice1}</th>
            <th className="tabbody">{npl1}</th>
          </tr>
          <tr>
            <th className="tabbody">{holding2}</th>
            <th className="tabbody">{quantity2}</th>
            <th className="tabbody">{orderPrice2}</th>
            <th className="tabbody">{currentPrice2}</th>
            <th className="tabbody">{npl2}</th>
          </tr>
          <tr>
            <th className="tabbody">{holding3}</th>
            <th className="tabbody">{quantity3}</th>
            <th className="tabbody">{orderPrice3}</th>
            <th className="tabbody">{currentPrice3}</th>
            <th className="tabbody">{npl3}</th>
          </tr>
          <tr>
            <th className="tabbody">{holding4}</th>
            <th className="tabbody">{quantity4}</th>
            <th className="tabbody">{orderPrice4}</th>
            <th className="tabbody">{currentPrice4}</th>
            <th className="tabbody">{npl4}</th>
          </tr>
          <tr>
            <th className="tabbody">{holding5}</th>
            <th className="tabbody">{quantity5}</th>
            <th className="tabbody">{orderPrice5}</th>
            <th className="tabbody">{currentPrice5}</th>
            <th className="tabbody">{npl5}</th>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

