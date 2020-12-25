import { Menu } from "antd";
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PackageJson from "../package.json";
import Home from "./components/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "16px 50px" }}>
          <div className="site-layout-content">
            <div>
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Build v{PackageJson.version}-
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            {process.env.REACT_APP_COMMIT_REF?.substring(0, 7)}
          </a>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}
