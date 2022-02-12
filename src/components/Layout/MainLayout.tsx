import { Avatar, Badge, Dropdown, Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  UserOutlined,
  DashboardOutlined,
  BellOutlined,
  CalculatorOutlined,
} from '@ant-design/icons';
import styles from './style.module.scss';
import { getPathKey } from 'helper/enum';
import { lazy, useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';
const { Content, Sider } = Layout;
// const { SubMenu } = Menu;
const Dashboard = lazy(() => import('features/dashboard/pages'));
const Packages = lazy(() => import('features/packages/pages'));
const InterestTool = lazy(() => import('features/tool-interest/pages'));
export default function MainLayout() {
  const location = useLocation();
  const match = useRouteMatch();
  const [collapsed, setcollapsed] = useState(false);
  const [key, setKey] = useState<any>(null);

  const onCollapse = () => {
    setcollapsed(!collapsed);
  };
  const listNotify = [
    { key: '0', name: 'Noti 1' },
    { key: '1', name: 'Noti 2' },
    { key: '2', name: 'Noti 3' },
  ];
  const menuNavbar = (
    <Menu style={{ minWidth: '10rem' }}>
      <Menu.Item key="0">
        <a href="">Profile</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="">Account settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );
  const notifyNavbar = (
    <Menu style={{ minWidth: '20rem' }}>
      {listNotify &&
        listNotify.map((item: any) => (
          <Menu.Item key={item.key} style={{ padding: '1.3rem 0.4rem' }}>
            {item.name}
          </Menu.Item>
        ))}
    </Menu>
  );
  useEffect(() => {
    let path = location.pathname.split('/')[2];
    let handleKey = getPathKey(path);
    setKey(handleKey);
  }, [location.pathname.split('/')[2]]);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} theme="light">
        <div className={styles.title}>
          <Link to={'/'}>INVEST</Link>
        </div>
        {key ? (
          <Menu defaultSelectedKeys={[key]} mode="inline">
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              <Link to={`${match.path}`}>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to={`${match.path}/packages`}>Investment packages</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<CalculatorOutlined />}>
              <Link to={`${match.path}/interest-tool`}>Interest tool</Link>
            </Menu.Item>
            {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            */}
          </Menu>
        ) : (
          <Menu mode="inline">
            <Menu.Item key="99" icon={<CalculatorOutlined />}>
              <Link to={`${match.path}/interest-tool`}>Home</Link>
            </Menu.Item>
          </Menu>
        )}
      </Sider>
      <Layout className="site-layout">
        <div className={styles.headerPage}>
          <Dropdown overlay={notifyNavbar} trigger={['click']}>
            <Badge count={2}>
              <BellOutlined className={styles.notify} />
            </Badge>
          </Dropdown>
          <Dropdown overlay={menuNavbar} trigger={['click']}>
            <Avatar size={40} icon={<UserOutlined />} className={styles.dropAvt} />
          </Dropdown>
        </div>
        <Content style={{ margin: '0 16px' }}>
          <Switch>
            <Route path={`/dashboard`} component={Dashboard} exact />
            <Route path={`${match.url}/packages`} component={Packages} />
            <Route path={`${match.url}/interest-tool`} component={InterestTool} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}
