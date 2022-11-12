import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <>
        <div className="start">
          <img src="header.jpg" className="img-t" alt="..." />
          <div className="welcome">
            <div className="text-light f-big">Welcome to iStocks</div>
            <div className="text-light f-small">Sign up to start virtual-trading</div>
            <br />
            <button type="button" className="btn btn-outline-light btn-lg f-login"> Signup Now </button>
          </div>
        </div>
        <br />
        <br />
        <div className="gaps">
          <div className="card-group text-light p-2">
            <a href="/sensex" className="card card-body glass nav-link text-light">
              <h5 className="card-title pad-horz">SENSEX</h5>
              <p className="card-text pad-horz">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text pad-horz"><small className="text-muted">Last updated 3 mins ago</small></p>
            </a>
            <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
            <a href="/nifty" className="card card-body glass nav-link text-light">
              <h5 className="card-title pad-horz">NIFTY 50</h5>
              <p className="card-text pad-horz">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text pad-horz"><small className="text-muted">Last updated 3 mins ago</small></p>
            </a>
          </div>
        </div>
      </>
    )
  }
}
