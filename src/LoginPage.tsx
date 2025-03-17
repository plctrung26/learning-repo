import { Button, Input } from "antd"
import './styles/LoginPage.scss'
import { useState } from "react";

const LoginPage = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="page-space">
            <div className="page-form">
                <div className="form-icon">
                    <img src="https://s3.ap-southeast-1.amazonaws.com/nurturewave-be-dev/uploads%2Fimages%2F0b8821d6-1a35-4986-af30-232f74a04b51_download+(2).jpeg " />
                </div>
                <div className="form-title">
                    CMS Login
                </div>
                <div className="form-input-space">
                    <div className="form-input">
                        <div className="input-title">
                            Username or email
                        </div>
                        <Input
                            className="input"
                            placeholder="Username or email"
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
                        />
                    </div>
                    <div className="submit-button-space">
                        <Button
                            className="submit-button">
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LoginPage