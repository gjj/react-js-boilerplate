import React from "react";
import { Header } from "antd/lib/layout/layout";
import { Menu } from "antd";
import { Link } from "react-router-dom";

function NavbarTop() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>

        <Menu.Item key="Login" style={{ float: "right" }}>
          <Link to="signup">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default NavbarTop;
