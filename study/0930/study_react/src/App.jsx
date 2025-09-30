import { useEffect, useState } from 'react'
import DataUserComp from './components/DataUserComp'

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // async function getUserData() {
    //   const response = await fetch('http://jarryjeong.pe.kr/test/v0/api/20');
    //   const data = await response.json();

    //   // 결과 값을 setUserData 즉, state 함수에 인자로 추가 후 userData에 할당
    //   setUserData(data);
    // }

    const getUserData = async () => {
      const response = await fetch('http://jarryjeong.pe.kr/test/v0/api/20');
      const data = await response.json();

      // 결과 값을 setUserData 즉, state 함수에 인자로 추가 후 userData에 할당
      setUserData(data);
    }

    getUserData();
  }, [userData]);

  return (
    <>
      {
        userData && userData.map(user => (
          <DataUserComp key={user.name} user={user} />
        ))
      }
    </>
  )
}

export default App