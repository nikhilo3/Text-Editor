import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.pmode} bg-${props.pmode}`}>
  <div className="container-fluid" style={{border: props.pmode==='dark'?'1px solid white':'none'}}>
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">about</Link>
        </li>
      </ul>
    </div>
    <button className={`btn btn-${props.pmode==='light'?'dark':'light'} my-4 mx-5`} onClick={props.function1} >{props.text}</button>
  </div>
</nav>
    </>
  )
}


Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'textutils'
}