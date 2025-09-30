import React from 'react'

// 단일 데이터 컴포넌트
const LastUserComp = ({ study }) => {
  // 객체 구조 분해 할당
  const { name, job, country, email, phone, address } = study;

  return (
    <>
      <div className="user__item">
        <div className="user__info">
          <strong>{name}</strong>
          <span>{job}</span>
        </div>
        <hr />
        <div className="user__content">
          <ul>
            <li><span>출신</span><p>{country}</p></li>
            <li><span>이메일</span><p>{email}</p></li>
            <li><span>전화번호</span><p>{phone}</p></li>
            <li><span>주소</span><p>{address}</p></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default LastUserComp