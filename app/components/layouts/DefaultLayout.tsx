import React, { useState, type ReactNode } from 'react';
import { BarChartOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router';
import Header from './Header';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/', icon: <HomeOutlined />, label: 'Trang chủ' },
  {
    key: 'sub1',
    label: 'Tính năng',
    icon: <BarChartOutlined />,
    children: [
      { key: '/python', label: 'Python' },
      { key: '/powerbi', label: 'PowerBI'}
    ],
  },
];

const getLevelKeys = (items1: any[]) => {
  const key: Record<string, number> = {};
  const func = (items2: any[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) key[item.key] = level;
      if (item.children) func(item.children, level + 1);
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

interface Props {
  children?: ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['sub1']);
  const navigate = useNavigate();
  const location = useLocation();
  // const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Layout className='h-screen'>
      <Sider width={256} theme="light" breakpoint="lg" collapsedWidth="0">
        <div className='h-8 m-4 bg-[#f5f5f5] rounded-xl text-center leading-8 justify-center font-bold'>
          POWER BI
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          className=''
          items={items}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>
      <Layout>
        <Header />
        <Content className='p-4'>
          <div className='p-4 bg-white rounded-2xl min-h-[85vh]' 
          >
            {children || <Outlet />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;