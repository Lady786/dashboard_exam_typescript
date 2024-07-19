import { useState } from 'react';
import { DesktopOutlined, FileOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <NavLink to="/products">Products</NavLink>,
    '1',
    <FileOutlined />
  ),
  getItem(
    <NavLink to="/category">Category</NavLink>,
    '2',
    <DesktopOutlined />
  ),
];

const GeneralLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* Breadcrumb items can be added here */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default GeneralLayout;
