import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import { EyeOutlined } from '@ant-design/icons';
import CustomModal from "./components/CutomModal/CustomModal";
import { useDispatch } from "react-redux";
import { openModal } from "./redux/modalSlice";
import { openDrawer } from "./redux/drawerSlice";
import StaticContentButtonGroup from "./components/ButtonGroup/StaticContentButtonGroup";
import CustomInput from "./components/FormComponents/CustomInput";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
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
        <Button onClick={() => dispatch(openDrawer())}>
          Open Drawer
        </Button>
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
        <StaticContentButtonGroup />
      </div>

      <div>
        <Button onClick={() => dispatch(openModal())}>Open Modal</Button>
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
      <CustomInput />

    </div>
  )
}

export default App
