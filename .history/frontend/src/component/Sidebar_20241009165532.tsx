import { Menu } from 'antd';
import { HomeOutlined, ScheduleOutlined, FileTextOutlined, FileDoneOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div style={{ width: '20%', minHeight: '100vh', backgroundColor: '#FAF0E8', padding: '1rem' }}>
      <Menu
        defaultSelectedKeys={['feedback']}
        mode="inline"
        style={{ backgroundColor: '#FAF0E8', borderRight: 0 }}
      >
        <Menu.Item
          key="apartments"
          icon={<HomeOutlined />}
          style={{
            padding: '12px 24px',
            border:1, borderStyle:'solid', borderColor:'#F8A869'
          }}
        >
          Apartments
        </Menu.Item>
        <Menu.Item
          key="schedule"
          icon={<ScheduleOutlined />}
          style={{
            padding: '12px 24px',
            border:1, borderStyle:'solid', borderColor:'#F8A869'
          }}
        >
          Work Schedule
        </Menu.Item>
        <Menu.Item
          key="Salary"
          icon={<ScheduleOutlined />}
          style={{
            padding: '12px 24px',
            border:1, borderStyle:'solid', borderColor:'#F8A869'
          }}
        >
          Salary & Bonus
        </Menu.Item>
        <Menu.Item
          key="feedback"
          icon={<FileTextOutlined />}
          style={{
            backgroundColor: '#171615',
            color: 'white',
            padding: '12px 24px',
            border:1, borderStyle:'solid', borderColor:'#F8A869'
          }}
        >
          Feedback & Request
        </Menu.Item>
        <Menu.Item
          key="legal"
          icon={<FileDoneOutlined />}
          style={{
            padding: '12px 24px',
            border:1, borderStyle:'solid', borderColor:'#F8A869'
          }}
        >
          Legal Documents
        </Menu.Item>
        <Menu.Item
          key="contract"
          icon={<InfoCircleOutlined />}
          style={{
            padding: '12px 24px',
            border:1, borderStyle:'solid', borderColor:'#F8A869'
          }}
        >
          Contract Information
        </Menu.Item>
        <Menu.Item
          key="training"
          icon={<InfoCircleOutlined />}
          style={{
            padding: '12px 24px',
            border: 1, borderStyle: 'solid', borderColor: '#F8A869'
          }}
        >
          Training
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
