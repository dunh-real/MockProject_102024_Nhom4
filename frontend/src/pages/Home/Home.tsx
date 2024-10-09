import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { handleLogout } from '../../services/authService';

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = Cookies.get('jwt');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const onLogout = () => {
        handleLogout(dispatch);
        navigate('/login');
    };

    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <Button type="primary" onClick={onLogout}>
                Log Out
            </Button>
        </div>
    );
}

export default Home;