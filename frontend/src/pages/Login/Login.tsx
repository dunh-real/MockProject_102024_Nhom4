import { Col, Row } from "antd";
import './Login.styles.css';
import LoginForm from "../../components/form/LoginForm";

function Login() {
    return (
        <Row>
            <Col xs={0} sm={0} md={0} lg={12}>
                <img className="image-login" src={require('../../assets/images/login-image.jpg')} alt="Login" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
                <LoginForm />
            </Col>
        </Row>
    );
}

export default Login;