import { Input, Col, Row, Button, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { handleLogin } from '../../services/authService';

const { Title } = Typography;

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogin = () => {
        const isLoggedIn = handleLogin(username, password, dispatch);
        if (isLoggedIn) {
            navigate('/home');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <>
            <Row justify='center' style={{ height: '100vh' }} align='middle'>
                <Col span={18}>
                    <img width="64" height="64" src="https://img.icons8.com/cute-clipart/64/apartment.png" alt="apartment" style={{ marginBottom: '16px', display: "block", marginLeft: 'auto', marginRight: 'auto' }} />
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '16px' }}>Sign In</Title>
                    <Input
                        placeholder="Your username..."
                        style={{ marginBottom: '16px' }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Your password..."
                        style={{ marginBottom: '16px' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type='primary'
                        style={{ display: 'block', margin: 'auto', width: '128px' }}
                        onClick={onLogin}
                    >
                        Sign In
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default LoginForm;