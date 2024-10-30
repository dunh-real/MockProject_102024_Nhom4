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
import { store } from "../../store";

const SignIn: React.FC = () => {
    const [signIn, data] = useSignInMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (values: SignInType, action: any) => {
        try {
            const response = await signIn(values).unwrap();
            if (response) {
                action.resetForm();

                // Log the response to check the structure
                console.log("API Response:", response);

                // Ensure the role is being passed correctly
                if (response.role) {
                    const payload = {
                        token: response.access_token,
                        role: response.role
                    };
                    console.log("Dispatching payload:", payload);
                    dispatch(saveUserInfo(payload));

                    // Log the Redux state after dispatch
                    console.log("Redux state after dispatch:", store.getState().auth);

                    console.log("Role set in Redux and cookies:", response.role);
                } else {
                    console.error("Role is undefined in the response data.");
                }
            }
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    // useEffect(() => {
    //     const isSuccess = data?.isSuccess;
    //     if (isSuccess) {
    //         const userInfo = {
    //             data: data?.data
    //             // Add any other user information you want to log
    //         };
    //         console.log("User Role Information:", userInfo); // Log user information
    //         dispatch(
    //             saveUserInfo({
    //                 token: data?.data?.access_token,
    //                 role: data?.data?.role
    //             })
    //         );
    //         navigate("/");
    //     }
    // }, [data]);

    return (
        <div className="w-screen h-screen flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center">
            {/* <Logo /> */}
            <div className="lg:basis-1/2 dark:bg-white dark:text-dark flex flex-col justify-center lg:flex-row items-center h-screen">
                <div className="lg:w-7/12 w-screen px-4 lg:mt-0 lg:px-0 mx-auto">
                    {/* <MobileLogo /> */}
                    <div className="text-2xl mb-6">Sign In</div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
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
