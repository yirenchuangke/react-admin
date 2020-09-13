import React, { Component } from "react";
// css
import "./index.scss";
// 组件
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (val) => {
    console.log(val);
  };
  render() {
    return (
      <div className="login_warp">
        <div>
          <div className="form_header">
            <h4 className="column">登录</h4>
            <span>账号注册</span>
          </div>
          <div className="form_content">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入账号",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登 录
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
