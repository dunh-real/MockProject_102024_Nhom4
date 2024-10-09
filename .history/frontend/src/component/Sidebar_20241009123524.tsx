import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ScheduleOutlined, FileTextOutlined, FileDoneOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div style={{ width: '20%', minHeight: '100vh', backgroundColor: '#fbc7a7', padding: '1rem' }}>
      <Menu
        defaultSelectedKeys={['feedback']}
        mode="inline"
        style={{ backgroundColor: '#fbc7a7', borderRight: 0 }}
      >
        <Menu.Item key="apartments" icon={<HomeOutlined />} style={{ padding: '12px 24px', position: 'relative' }}>
          Apartments
          <div style={{ borderBottom: '1px solid #f05a28', position: 'absolute', left: 0, right: 0, bottom: 0 }}></div>
        </Menu.Item>
        <Menu.Item key="schedule" icon={<ScheduleOutlined />} style={{ padding: '12px 24px', position: 'relative' }}>
          Work Schedule
          <div style={{ borderBottom: '1px solid #f05a28', position: 'absolute', left: 0, right: 0, bottom: 0 }}></div>
        </Menu.Item>
        <Menu.Item
          key="feedback"
          icon={<FileTextOutlined />}
          style={{ backgroundColor: '#f05a28', color: 'white', padding: '12px 24px', position: 'relative' }}
        >
          Feedback & Request
          <div style={{ borderBottom: '1px solid white', position: 'absolute', left: 0, right: 0, bottom: 0 }}></div>
        </Menu.Item>
        <Menu.Item key="legal" icon={<FileDoneOutlined />} style={{ padding: '12px 24px', position: 'relative' }}>
          Legal Documents
          <div style={{ borderBottom: '1px solid #f05a28', position: 'absolute', left: 0, right: 0, bottom: 0 }}></div>
        </Menu.Item>
        <Menu.Item key="contract" icon={<InfoCircleOutlined />} style={{ padding: '12px 24px', position: 'relative' }}>
          Contract Information
          <div style={{ borderBottom: '1px solid #f05a28', position: 'absolute', left: 0, right: 0, bottom: 0 }}></div>
        </Menu.Item>
        <Menu.Item key="training" icon={<InfoCircleOutlined />} style={{ padding: '12px 24px', position: 'relative' }}>
          Training
          <div style={{ borderBottom: '1px solid #f05a28', position: 'absolute', left: 0, right: 0, bottom: 0 }}></div>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
