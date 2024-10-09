
import { Layout } from 'antd'
import './App.css'
// import FeedbackRequest from './pages/Feedback&Request/Feedback&Request'
// import LoginForm from './pages/Login/Login'
import Sider from 'antd/es/layout/Sider'
import Sidebar from './component/Sidebar'
import { Content, Header } from 'antd/es/layout/layout'
import ReviewList from './pages/Feedback&Request/Feedback&Request'

function App() {


  return (
    <>
      {/* <LoginForm/> */}
      <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider width={200} style={{ background: '#f8f8f8' }}>
        <Sidebar />
      </Sider>

      {/* Content */}
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div className="avatar-container">
            <img
              src="https://via.placeholder.com/40" // avatar placeholder
              alt="avatar"
              className="avatar"
            />
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>
          <ReviewList />
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

export default App
