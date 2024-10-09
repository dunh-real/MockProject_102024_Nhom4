import React from 'react';
import { Menu } from 'antd';
import {
  ApartmentOutlined,
  CalendarOutlined,
  DollarOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const Sidebar: React.FC = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item key="1" icon={<ApartmentOutlined />}>
        Apartments
      </Menu.Item>
      <Menu.Item key="2" icon={<CalendarOutlined />}>
        Works schedule
      </Menu.Item>
      <Menu.Item key="3" icon={<DollarOutlined />}>
        Salary & Bonus
      </Menu.Item>
      <Menu.Item key="4" icon={<FileTextOutlined />}>
        Feedback & Request
      </Menu.Item>
      <Menu.Item key="5" icon={<InfoCircleOutlined />}>
        Legal documents
      </Menu.Item>
      <Menu.Item key="6" icon={<TeamOutlined />}>
        Contract information
      </Menu.Item>
      <Menu.Item key="7" icon={<InfoCircleOutlined />}>
        Training
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
