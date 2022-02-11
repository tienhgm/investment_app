import { Avatar, Badge, Dropdown, Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined,
  BellOutlined,
} from '@ant-design/icons';
import styles from './style.module.scss';
import { useState } from 'react';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function MainLayout() {
  const [collapsed, setcollapsed] = useState(false);
  const onCollapse = () => {
    setcollapsed(!collapsed);
  };
  const menuNavbar = (
    <Menu style={{ minWidth: '10rem' }}>
      <Menu.Item key="0">
        <a href="">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="">Account settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} theme="light">
        <div className={styles.title}>INVEST</div>
        <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Investment packages
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <div className={styles.headerPage}>
          <Badge count={2}>
            <BellOutlined className={styles.notify} />
          </Badge>

          <Dropdown overlay={menuNavbar} trigger={['click']}>
            <Avatar size={40} icon={<UserOutlined />} className={styles.dropAvt} />
          </Dropdown>
        </div>
        <Content style={{ margin: '0 16px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
        </Content>
      </Layout>
    </Layout>
  );
}
