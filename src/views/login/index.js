import React, { Component, Fragment } from "react";
// css
import "./index.scss";
// 组件
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "login",
    };
  }
switchForm=(val)=>{
this.state.formType=val
this.setState({
  formType:val
})
}
  render() {
    return (
      <Fragment>
        <div className="login_warp">
          {this.state.formType == "login" ? (
            <LoginForm switchForm={this.switchForm}></LoginForm>
          ) : (
            <RegisterForm switchForm={this.switchForm}></RegisterForm>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Login;
