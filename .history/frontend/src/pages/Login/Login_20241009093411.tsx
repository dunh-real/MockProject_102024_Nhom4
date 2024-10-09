import { useForm } from 'react-hook-form';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Helmet } from "react-helmet";
import ChungCu from '../../../public/Image/ChungCu.png';

const schema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => {
        console.log('Form data:', data);
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
            <div className="Login_Left bg-gray-900 flex justify-center items-center w-full lg:w-1/2 h-64 lg:h-auto">

            </div>
            <div className="flex justify-center items-center w-full lg:w-1/2 bg-white py-8 px-4 lg:px-8">
                <div className="max-w-sm w-full">
                    
                    <h2 className="text-3xl lg:text-4xl font-extrabold mb-7 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg">
                        Sign In
                    </h2>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email Address</label>
                            <Input
                                className="focus:border-black"
                                {...register('email')}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">Password</label>
                            <Input.Password
                                className="focus:border-black"
                                {...register('password')}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                visibilityToggle
                                placeholder="Enter your password"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>

                        <Button type="primary" htmlType="submit" className="w-full">
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
