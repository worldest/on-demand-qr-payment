import React from 'react'

const Input = ({handleChange}) => {
  return (
    <div>
        <input className='inp' style={{width: 300, height: 50, border: "1px solid #e2e3e5", borderRadius: 10,padding: 12}} type="number" placeholder='Enter Amount to pay' onChange={handleChange} />
    </div>
  )
}

export default Input