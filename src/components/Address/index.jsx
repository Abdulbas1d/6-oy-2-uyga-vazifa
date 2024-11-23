import React from 'react'
import './index.css'

function Address(props) {
  const { region, zip } = props.address
  return (
    <div className='address'>
      <div className="addres">
        <p></p>
        <h3>{region}</h3>
      </div>
      <div className="zip">
        <p></p>
        <h3>{zip}</h3>
      </div>
    </div>
  )
}

export default Address