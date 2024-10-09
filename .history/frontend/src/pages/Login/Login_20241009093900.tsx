import { useForm } from 'react-hook-form';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
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
        <div className="min-h-screen flex flex-col md:flex-row">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="Login_Left w-full md:w-1/2 bg-gray-900 flex justify-center items-center p-6">
            </div>
            <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-6">
                <div className="max-w-sm w-full px-4 sm:px-8 shadow-[0px_5px_25px_5px_rgba(0,0,0,0.3)] rounded-lg">
                    <div className="flex flex-col items-center mb-7">
                        <img src={ChungCu} alt="Logo" className="w-[100px] h-[100px] mb-4" />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-lg">
                            Sign In
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email Address</label>
                            <Input
                                className="focus:border-black"
                                style={{ width: '100%' }}
                                {...register('email')}
                                placeholder="Enter your email"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Password</label>
                            <Input.Password
                                className="focus:border-black"
                                style={{ width: '100%' }}
                                {...register('password')}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                visibilityToggle
                                placeholder="Enter your password"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                        </div>
                        <Button type="primary" htmlType="submit" className="w-full mt-5" style={{ width: '100%' }}>
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
