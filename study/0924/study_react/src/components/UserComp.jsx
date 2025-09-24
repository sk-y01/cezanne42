import React from 'react'
import LastUserComp from './LastUserComp'

const UserComp = (props) => {
  console.log('UserComp props : ', props);
  // 첫번째 방법
  // props를 객체 구조 분해 할당으로 처리
  // const { studyData } = props;

  // 두번째 방법
  // props.studyData

  return (
    <>
      {
        // 삼항 연산자로 조건부 렌더링
        props.studyData.length > 0
        ? (
          <div className="ChildUserComp">
            {
              props.studyData.map(study => (
                <LastUserComp key={study.id} study={study} />
              ))
            }
          </div>
        ) : (
          <p>데이터가 없습니다.</p>
        )
      }
    </>
  )
}

export default UserComp