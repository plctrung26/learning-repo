import { Button } from "antd"
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }}>
      <div>The website is in building Components steps. You can visit the proccess at the buttons below</div>
      <Button onClick={() => { navigate('/login') }}>Login Page</Button>
      <Button onClick={() => { navigate('/account') }}>Custom Table</Button>
      <Button onClick={() => { navigate('/article') }}>Draggable Table</Button>
    </div>
  )
}

export default App
