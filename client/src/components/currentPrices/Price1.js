import { useEffect, useState } from 'react'

export default function Price1() {
    const [record, setRecord] = useState([])
    const [info, setInfo] = useState([])

  useEffect(() => {
    const fetchRecord = async () => {
      const response = await fetch(`http://localhost:5000/record`)
      const json = await response.json()
      await setRecord(json)
    }
    fetchRecord()
  }, [])

  let scriptObj = record ? record.holding : ''
  let script = scriptObj ? scriptObj.at(-1) : ''

  useEffect(() => {
    if (script !== "") {
      const fetchData = async () => {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${script}.BSE&outputsize=full&apikey=Y4VRN3CWG8VC40V7`)
        const json = await response.json()
        await setInfo(json["Time Series (Daily)"])
      }
      fetchData()
    }
  }, [script])

  let priceArray = info ? Object.keys(info) : ''
  let priceObj = priceArray ? priceArray[0] : ''
  let priceAll = priceObj ? info[priceObj] : ''
  let currentPrice = priceAll ? priceAll["4. close"] : 0
  return currentPrice
}
