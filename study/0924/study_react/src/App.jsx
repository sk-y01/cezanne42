import './styles/child.scss';
import ChildUserComp from './components/ChildUserComp'
import studyData from './study_data.json'
import UserComp from './components/UserComp';

function App() {
  return (
    <>
      {/* 첫번째 방식 - 데이터 그대로 전달, 자식 컴포넌트에서 처리 */}
      <ChildUserComp studyData={studyData} />
      <hr />
      {/* 두번째 방식 - 부모 컴포넌트에서 데이터 가공 후 자식 컴포넌트로 전달 */}
      <UserComp studyData={studyData} />
    </>
  )
}

export default App