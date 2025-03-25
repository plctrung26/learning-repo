import { Button, Form, Input, message } from "antd"
import './styles/LoginPage.scss'
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()

    const onFinish = async (values: { username: string; password: string }) => {
        console.log("Form Submitted with Data:", values);
        try {
            const response = await axios.post("https://dev-api-nurture.vinova.sg/api/v1/admins/auth/login", values);
            console.log("Login successful:", JSON.stringify(response.data.data.tokens.refreshToken));
            message.success("Login successful!");
            sessionStorage.setItem("access_token", response.data.data.tokens.accessToken);
            navigate("/static-content", { replace: true })
        } catch (error) {
            console.error("Login failed:", error);
            message.error("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="page-space">
            <div className="page-form">
                <div className="form-icon">
                    <img src="https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F0b8821d6-1a35-4986-af30-232f74a04b51_download+(2).jpeg " />
                </div>
                <div className="form-title">
                    CMS Login
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
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
            </div>
        </div >
    )
}

export default LoginPage