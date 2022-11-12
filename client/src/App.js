import "./App.css";
import Header from "./components/Header"
import Main from './components/Main';
import Sensex from './components/Sensex';
import Nifty from './components/Nifty';
import Portfolio from './components/Portfolio';
import Script from './components/Script';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const [script, setScript] = useState('')
  const [info, setInfo] = useState({})
  const navigate = useNavigate()

  const changeScript = (name) => {           // when a script is changed
    setScript(name)
    navigate('/script')
  }

  useEffect(() => {                           // fetching web api for script data
    if (script !== '') {
      const fetchData = async () => {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${script}.BSE&outputsize=full&apikey=9JG6U79FW48YJD7V`)
        const json = await response.json()
        setInfo(json["Time Series (Daily)"])
      }
      fetchData()
    }    
  }, [script])

  return (                                         // commponents
    <>
      <Header changeScript={changeScript} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sensex" element={<Sensex />} />
        <Route path="/nifty" element={<Nifty />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/script" element={<Script info={info} script={script} />} />
      </Routes>
    </>
  )
}


