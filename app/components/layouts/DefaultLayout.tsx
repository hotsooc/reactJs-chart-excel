import React, { type ReactNode } from 'react';
import { BarChartOutlined, HomeOutlined, MenuOutlined, SearchOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Dropdown } from 'antd';
import { Outlet, useNavigate } from 'react-router';
import Banner from './Banner';
import { FooterSection } from './Footer';

const { Content } = Layout;

interface Props {
  children?: ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const menuItems: MenuProps['items'] = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: 'Trang chủ',
      onClick: () => navigate('/'),
    },
    {
      type: 'divider',
    },
    {
      key: 'sub1',
      label: 'Tính năng',
      icon: <BarChartOutlined />,
      children: [
        { 
          key: '/reactjs', 
          label: 'React Js',
          onClick: () => navigate('/reactjs') 
        },
        { 
          key: '/powerbi', 
          label: 'Power BI',
          onClick: () => navigate('/powerbi') 
        }
      ],
    },
  ];

  return (
    <>
      <div className="bg-[url('/image/image_1.png')] h-120 bg-cover bg-center flex items-center justify-center">
        <div className="flex items-start justify-between w-full px-10">
          <Dropdown 
            menu={{ items: menuItems }} 
            trigger={['click']} 
            placement="bottomLeft"
          >
            <MenuOutlined className="text-white! text-[24px] cursor-pointer hover:opacity-80 transition-opacity" />
          </Dropdown>
          
          <img src="/image/image_2.png" alt="logo" />
          
          <div className="flex gap-4">
            <SearchOutlined className="text-white! text-[24px]" />
            <ShoppingOutlined className="text-white! text-[24px]" />
            <UserOutlined className="text-white! text-[24px]" />
          </div>
        </div>
      </div>

      <Layout>
        <Banner />
        <Content>
            {children || <Outlet />}
        </Content>
      </Layout>
      <FooterSection />
    </>
  );
};

export default DefaultLayout;