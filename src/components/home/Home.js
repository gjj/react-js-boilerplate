import React from "react";
import { Layout, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <>
    
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>
    </>
  );
}

export default Home;
