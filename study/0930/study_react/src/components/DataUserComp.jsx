import React from 'react'

const DataUserComp = ({ user }) => {
  const { name } = user;

  return (
    <>
      <p>{name}</p>
    </>
  )
}

export default DataUserComp