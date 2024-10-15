import React, { useEffect } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Formik, Form, ErrorMessage } from "formik";
import { signInSchema } from "../../services/auth";
import { useSignInMutation } from "../../store/api/endpoints/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../../store/slice/auth";
import InputPassword from "../../components/custom/input-password";
import { SignInType } from "@/types";
// import Logo from "./components/logo";
// import MobileLogo from "./components/mobile-logo";
//import { useTheme } from "@/services/providers/theme-provider";

const SignIn: React.FC = () => {
    const [signIn, data] = useSignInMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues: SignInType = {
        email: "john@mail.com",
        password: "changeme",
    };

    const handleSubmit = async (values: SignInType, action: any) => {
        await signIn(values);
        data.isSuccess && action.resetForm();
    };

    useEffect(() => {
        const isSuccess = data?.isSuccess;
        if (isSuccess) {
            dispatch(
                saveUserInfo({
                    token: data?.data?.access_token,
                })
            );
            navigate("/");
        }
    }, [data]);

    return (
        <div className="w-screen h-screen flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center">
            {/* <Logo /> */}
            <div className="lg:basis-1/2 dark:bg-white dark:text-dark flex flex-col justify-center lg:flex-row items-center h-screen">
                <div className="lg:w-7/12 w-screen px-4 lg:mt-0 lg:px-0 mx-auto">
                    {/* <MobileLogo /> */}
                    <div className="text-2xl mb-6">Sign In</div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signInSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleBlur, handleChange, isSubmitting }) => (
                            <Form className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="John@example.com"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component={"div"}
                                        className="text-sm text-danger"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <InputPassword
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="****"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component={"div"}
                                        className="text-sm text-danger"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="default"
                                    disabled={isSubmitting}
                                    className="w-full"
                                >
                                    {isSubmitting && (
                                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Sign In
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
