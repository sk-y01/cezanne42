import ChildComp from './components/ChildComp'
import MapComp from './components/MapComp';

function App() {
  /**
   * 
   * const [state 변수, state 함수] = useState(초기화);
   * 
   * DataType : Number => useState(0)
   * DataType : String => useState('')
   * DataType : Boolean => useState(false)
   * DataType : Object => useState({})
   * DataType : Array => useState([])
   * 
   */

  const strings = ['a', 'b', 'c', 'd'];
  const users = {
    name : 'Lee',
    address : 'Daejeon'
  };

  return (
    <>
      <ChildComp num={100} name={"props"} strings={strings} users={users} />
      <MapComp />
    </>
  )
}

export default App
