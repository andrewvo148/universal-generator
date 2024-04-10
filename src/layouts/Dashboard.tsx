import React, { useEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  SettingOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Routes, Route, Outlet, Link, NavLink, useLocation } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const DashboardLayout: React.FC = () => {

  const [collapsed, setCollapsed] = useState(false);
  const selectedKey= location.pathname;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme="dark" defaultSelectedKeys={[selectedKey]} mode="inline">
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            <Link to="/">Entity</Link>
          </Menu.Item>
          <Menu.Item key="/dto" icon={<PieChartOutlined />}>
            <Link to="/dto">DTO</Link>
          </Menu.Item>
          <Menu.SubMenu key="Settings" title="Settings" icon={<SettingOutlined />}>
            <Menu.Item key="templates">
              <Link to="/settings/templates">Templates</Link>
            </Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
