import React from 'react'

// { studyData }
// = const { studyData } = props

// 넘겨 받은 데이터가 많을 경우, (기준에 따라 다름)
// props

// 넘겨 받은 데이터가 적을 경우,
// 객체 구조 분해 할당으로 받기 (일반적으로 사용)

// props 받으면 console로 일단 확인해본다.
// 확인 후 또는 개발 완료 후 반드시 console을 지운다.

const ChildUserComp = ({ studyData }) => {
  console.log('studyData : ', studyData);

  return (
    <>
      <div className="ChildUserComp">
        {
          // 조건부 렌더링
          // studyData 가 true 즉, 데이터가 있을 때만 map 실행
          // 단항 연산자로 조건부 렌더링
          studyData && studyData.map(study => (
            <div className="user__item" key={study.id}>
              <div className="user__info">
                <strong>{study.name}</strong>
                <span>{study.job}</span>
              </div>
              <hr />
              <div className="user__content">
                <ul>
                  <li><span>출신</span><p>{study.country}</p></li>
                  <li><span>이메일</span><p>{study.email}</p></li>
                  <li><span>전화번호</span><p>{study.phone}</p></li>
                  <li><span>주소</span><p>{study.address}</p></li>
                </ul>
              </div>
            </div>
          ))
        }
        {
          // 삼항 연산자로 조건부 렌더링
          studyData.length > 0
          ? (
            studyData.map(study => (
              <div className="user__item" key={study.id}>
                <div className="user__info">
                  <strong>{study.name}</strong>
                  <span>{study.job}</span>
                </div>
                <hr />
                <div className="user__content">
                  <ul>
                    <li><span>출신</span><p>{study.country}</p></li>
                    <li><span>이메일</span><p>{study.email}</p></li>
                    <li><span>전화번호</span><p>{study.phone}</p></li>
                    <li><span>주소</span><p>{study.address}</p></li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p>데이터가 없습니다.</p>
          )
        }
      </div>
    </>
  )
}

export default ChildUserComp