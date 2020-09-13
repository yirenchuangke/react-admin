import React, { Component } from "react";
import "./index.scss";
import { Button } from 'antd';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="warp">
         
         <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}

export default Home;
