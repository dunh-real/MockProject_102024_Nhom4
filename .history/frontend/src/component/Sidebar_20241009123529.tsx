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
        <Menu.Item
          key="apartments"
          icon={<HomeOutlined />}
          style={{
            padding: '12px 24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          Apartments
        </Menu.Item>
        <Menu.Item
          key="schedule"
          icon={<ScheduleOutlined />}
          style={{
            padding: '12px 24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          Work Schedule
        </Menu.Item>
        <Menu.Item
          key="feedback"
          icon={<FileTextOutlined />}
          style={{
            backgroundColor: '#f05a28',
            color: 'white',
            padding: '12px 24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          Feedback & Request
        </Menu.Item>
        <Menu.Item
          key="legal"
          icon={<FileDoneOutlined />}
          style={{
            padding: '12px 24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          Legal Documents
        </Menu.Item>
        <Menu.Item
          key="contract"
          icon={<InfoCircleOutlined />}
          style={{
            padding: '12px 24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          Contract Information
        </Menu.Item>
        <Menu.Item
          key="training"
          icon={<InfoCircleOutlined />}
          style={{
            padding: '12px 24px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          }}
        >
          Training
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
