import React from 'react'

const ResidentsList = ({ residentsList }) => {
  return (
    <div className="residents-container">
      {residentsList && residentsList.map((res, index) => (
        <ul key={index}>{res.name}</ul>
      ))}
    </div>
  )
}

export default ResidentsList
