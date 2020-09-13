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
class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFinish = (val) => {
    console.log(val);
  };
  tiggleForm = () => {
    this.props.switchForm("login");
  };
  render() {
    return (
      <div>
        <div className="form_header">
          <h4 className="column">账号注册</h4>
          <span onClick={this.tiggleForm}>已有账号</span>
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
                  message: "请输入用户名",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="请输入用户名"
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
              ]}
            >
              <Row gutter={13}>
                <Col span={15}>
                  <Input
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
                注 册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
