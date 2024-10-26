import React from "react";
import { ChangePasswordType } from "../../../../types/settings";
import { Form, Formik, ErrorMessage } from "formik";
import { Label } from "../../../../components/ui/label";
import InputPassword from "../../../../components/custom/input-password";
import { ChangePasswordSchema } from "../../../../services/schemas/settings";
import { Button } from "../../../../components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

const Security: React.FC = () => {
  const initialValues: ChangePasswordType = {
    old_password: "",
    new_password: "",
    new_password_confirmation: ""
  };

  const handleSubmit = async () => {};

  return (
    <div className="w-full md:w-10/12 lg:w-12/12 mt-5">
      <h2 className="text-xl font-bold mb-4">Security Resident</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={ChangePasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleBlur, handleChange, isSubmitting }) => (
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="old_password">Enter your current password</Label>
              <InputPassword
                name="old_password"
                id="old_password"
                value={values.old_password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="****"
                className="w-full text-[17px] p-3"
              />
              <ErrorMessage
                name="old_password"
                component={"div"}
                className="text-sm text-danger"
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <Label htmlFor="new_password">Enter your new password</Label>
              <InputPassword
                name="new_password"
                id="new_password"
                value={values.new_password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="****"
                className="w-full text-[17px] p-3"
              />
              <ErrorMessage
                name="new_password"
                component={"div"}
                className="text-sm text-danger"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="new_password_confirmation">Re-enter your new password</Label>
              <InputPassword
                name="new_password_confirmation"
                id="new_password_confirmation"
                value={values.new_password_confirmation}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="****"
                className="w-full text-[17px] p-3"
              />
              <ErrorMessage
                name="new_password_confirmation"
                component={"div"}
                className="text-sm text-danger"
              />
            </div>
            <div className="text-end">
              <Button type="submit" disabled={isSubmitting} className="px-11 py-2">
                {isSubmitting && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Security;
