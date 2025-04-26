import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom";
import { EyeOutlined } from '@ant-design/icons';
import ArticleUpdateDrawer from "./Article/container/ArticleUpdateDrawer";
import CustomModal from "../components/CutomModal/CustomModal";
import CustomInput from "../components/FormComponents/CustomInput";

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await createCategory({
  //         data: {
  //           "title": "BobTestingCate1111",
  //           "name": "BobTestingCate1111",
  //           "image": "https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F6ce1303f-83be-49d2-a572-bb926130ca9c_uploads_images_131617ff-bc98-4763-959b-5e718c8ec2dd_Group%2B1.png",
  //           "status": "active"
  //         }
  //       });
  //       console.log(data)
  //     } catch (error) {
  //       console.log("Error fetching article data:", error);
  //     }
  //   };

  //   fetchData();

  // }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getAllCategory();
  //       console.log(data)
  //     } catch (error) {
  //       console.log("Error fetching article data:", error);
  //     }
  //   };

  //   fetchData();

  // }, [])



  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }}>
      <div>
        <div>The website is in building Components steps. You can visit the proccess at the buttons below</div>
        <Button onClick={() => { navigate('/login') }}>Login Page</Button>
        <Button onClick={() => { navigate('/account') }}>Custom Table</Button>
        <Button onClick={() => { navigate('/article') }}>Draggable Table</Button>
        <div>
          <Button onClick={() => { }}>
            Open Drawer
          </Button>
          <ArticleUpdateDrawer></ArticleUpdateDrawer>
        </div>
        <ArticleUpdateDrawer></ArticleUpdateDrawer>
        <div>
          <Button onClick={() => { }}>Open Modal</Button>
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
    </div>



  )
}

export default App
