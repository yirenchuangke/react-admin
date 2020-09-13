import React, { Component } from "react";
// css
import "./index.scss";
// ANTD
import { Form, Input, Button, Row, Col } from "antd";
import {
  UserOutlined,
  UnlockOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFinish = (val) => {
    console.log(val);
  };
  tiggleForm = () => {
    this.props.switchForm("Register");
  };
  render() {
    return (
      <div>
        <div className="form_header">
          <h4 className="column">登录</h4>
          <span onClick={this.tiggleForm}>账号注册</span>
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
                  message: "邮箱不能为空",
                },
                {
                  type: "email",
                  message: "请输入正确的邮箱",
                },
              ]}
            >
              <Input
                allowClear
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入邮箱"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "密码不能为空",
                },
                {
                  min: 6,
                  max: 12,
                  message: "密码长度应该在6至12位",
                },
              ]}
            >
              <Input.Password
                allowClear
                prefix={<UnlockOutlined className="site-form-item-icon" />}
                placeholder="请输入密码"
              />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[
                {
                  required: true,
                  message: "请输入验证码",
                },
                {
                  len: 6,
                  message: "请输入长度为6位的验证码",
                },
              ]}
            >
              <Row gutter={13}>
                <Col span={15}>
                  <Input
                    allowClear
                    prefix={<QrcodeOutlined className="site-form-item-icon" />}
                    placeholder="请输入验证码"
                  />
                </Col>
                <Col span={9}>
                  <Button type="danger" block>
                    获取验证码
                  </Button>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
