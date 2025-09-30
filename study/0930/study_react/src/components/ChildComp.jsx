import React from 'react'

const ChildComp = ({ num, name, strings, users }) => {
  /**
   *  Props 받는 방법
   *  1. props 로 받아 온다.
   * 
   */
  // console.log('props : ', props);
  // console.log('props num : ', props.num);

  /** 
   *  2. Props Name 그대로 명시
   * 
   */
  return (
    <div>
      <span>{ num }</span>
      <span>{ name }</span>
      {
        strings.map(str => (
          <p key={str}>{ str }</p>
        )) && (
          <p></p>
        )
      }
      <p>{ users.name }</p>
      <p>{ users.address }</p>
    </div>
  )
}

export default ChildComp