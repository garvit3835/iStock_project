import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({ changeScript }) {
  const [name, setName] = useState('')

  const handleChange = async (event) => {    // form input change
    await setName(event.target.value)
  }

  const handleSubmit = async (event) => {    // form submit
    event.preventDefault()
    await changeScript(name)

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iStocks</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Log-In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 bg-light" list="datalistOptions" type="text" value={name}
              name="script" placeholder="Search script name" onChange={handleChange} required />
            <datalist id="datalistOptions">
              <option value="RELIANCE" />
              <option value="TCS" />
              <option value="ADANIPORTS" />
              <option value="HDFCBANK" />
              <option value="TATAMOTORS" />
            </datalist>
            <button className="btn btn-outline-light" type="Submit" value="Submit" onClick={handleSubmit}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
