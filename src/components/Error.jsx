import React from 'react'

const Error = ({ error }) => {
  return (
    <div className="error-container">
      <p>{error}</p>
    </div>
  )
}

export default Error
