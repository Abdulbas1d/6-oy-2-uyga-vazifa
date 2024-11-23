import React from 'react'
import './index.css'

function Car(props) {
  const { car } = props
  return (
    <div>
      <div className="cars">
        <button> 
          <p></p>
          <h3 className='car'>{car}</h3>
        </button>
      </div>
    </div>
  )
}

export default Car