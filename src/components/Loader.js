import React from "react";
import "./style/Home.css";
import { Space, Spin } from "antd";

const Loader = () => {
  return (
    <div className="loader">
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
};

export default Loader;
