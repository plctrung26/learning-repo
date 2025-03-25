import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import { EyeOutlined } from '@ant-design/icons';
import CustomModal from "./components/CutomModal/CustomModal";

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
      <div>
        <CustomDrawer toolTipTitle="Helloooo" openButtonIcon={<EyeOutlined className="button-icon" />}>
          <Form
            layout="vertical"
          >
            <Form.Item
              label="Username or email"
              name="username"
              rules={[{ required: true, message: "Please enter your username or email" }]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" >Login</Button>
            </Form.Item>
          </Form>
        </CustomDrawer>
      </div>
      <div>
        <ButtonGroup isDelete={true} isDetail={true} isEdit={true} />
      </div>

      <div>
        <CustomModal openButtonIcon={<EyeOutlined className="button-icon" />}>
          <Form
            layout="vertical"
          >
            <Form.Item
              label="Username or email"
              name="username"
              rules={[{ required: true, message: "Please enter your username or email" }]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" >Login</Button>
            </Form.Item>
          </Form>
        </CustomModal>
      </div>


    </div>
  )
}

export default App
