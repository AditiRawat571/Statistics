import React from 'react'

const LineProgressBar = ({percentage}) => {
  return (
    <>
      <div style={{ width: '90%', height: '5px', background: '#ddd',borderRadius:'10px',marginTop:'10px' }}>
      <div
        style={{
          width: `${percentage}%`,
          height: '100%',
          background: 'rgba(33, 150, 243, 1)',
          transition: 'width 0.5s ease-in-out',
        }}
      />
    </div>
    </>
  )
}

export default LineProgressBar
