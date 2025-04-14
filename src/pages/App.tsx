import { Button, Form, Input } from "antd"
import { useNavigate } from "react-router-dom";
import { EyeOutlined } from '@ant-design/icons';
import ArticleDrawer from "./Article/container/ArticleDrawer";
import StaticContentButtonGroup from "./StaticContent/container/StaticContentButtonGroup";
import CustomModal from "../components/CutomModal/CustomModal";
import CustomInput from "../components/FormComponents/CustomInput";
import CustomTextEditor from "../components/FormComponents/CustomTextEditor";
import { useEffect, useState } from "react";
import { getArticleRowData } from "../apis/article/articleApi";
import { ArticleData } from "../types/article/ArticleDataType";

function App() {
  const navigate = useNavigate();
  const id: string = "95b9bc18-1ed4-4b13-baea-7f515c076e3f"
  const [apiData, setApiData] = useState<ArticleData>()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getArticleData();
  //       if (data) {
  //         const finalData = data.data.map((item: ArticleData) => ({
  //           ...item,
  //           key: item.id
  //         }))
  //         setApiData(finalData)
  //       }

  //     } catch (error) {
  //       console.log("Error fetching article data:", error);
  //     }
  //   };

  //   fetchData();

  // }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await logIn({ username: 'superAdmin', password: '123qwe!@#QWE' });
  //       console.log("Successfully fetch login", res)
  //     } catch (error) {
  //       console.log("Error fetching article data:", error);
  //     }
  //   };

  //   fetchData();

  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticleRowData({ id: id });
        setApiData(data)
        console.log(data)
      } catch (error) {
        console.log("Error fetching article data:", error);
      }
    };

    fetchData();

  }, [])

  useEffect(() => {
    console.log(apiData)
  }, [apiData])

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
          <ArticleDrawer></ArticleDrawer>
        </div>
        <div>
          <StaticContentButtonGroup />
        </div>
        <ArticleDrawer></ArticleDrawer>
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
      <div style={{ width: "500px", height: "600px" }}>
        <CustomTextEditor text={""} />
      </div>
    </div>



  )
}

export default App
