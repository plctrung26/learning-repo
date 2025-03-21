import { Button, Form, Input, message } from "antd"
import './styles/LoginPage.scss'
import axios from "axios";


const LoginPage = () => {
    // const [passwordVisible, setPasswordVisible] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values: { username: string; password: string }) => {
        console.log("Form Submitted with Data:", values);
        try {
            const response = await axios.post("https://dev-api-nurture.vinova.sg/api/v1/admins/auth/login", values);
            console.log("Login successful:", JSON.stringify(response.data.data.tokens.refreshToken));
            message.success("Login successful!");
            sessionStorage.setItem("access_token", response.data.data.tokens.accessToken);
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
                {/* <form className="form-input-space" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-input">
                        <div className="input-title">
                            Username or email
                        </div>
                        <Input
                            className="input"
                            placeholder="Username or email"
                            {...register("username", { required: "Username is required" })}
                        ></Input>
                    </div>
                    <div className="form-input">
                        <div className="input-title">
                            Password
                        </div>
                        <Input.Password
                            className="input"
                            placeholder="input password"
                            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
                            {...register("password", { required: "Password is required" })}
                        />
                    </div>
                    <div className="submit-button-space">
                        <Button
                            className="submit-button"
                            htmlType="submit"
                            onClick={handleSubmit}>
                            Login
                        </Button>
                    </div>
                </form> */}
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
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )
}

export default LoginPage