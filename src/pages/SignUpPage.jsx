/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import { useForm } from "react-hook-form";
import Label from "../components/label/Label";
import FormGroup from "./../common/FormGroup";
import Button from "../components/button/Button";
import { signUpSchema } from "../validation/authValidation";
import { toast, ToastContainer } from "react-toastify";
import api from "../api";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignUpPage = () => {
  const nav = useNavigate();

  const { register: registerUser } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const handleSignUp = (data) => {
    (async () => {
      try {
        // await api.post(`/register`, data);
        await registerUser(data.name, data.email, data.password);
        localStorage.setItem("signUpSuccess", "success");
        nav("/sign-in");
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data);
      }
    })();
  };

  return (
    <LayoutAuthentication heading="Sign Up">
      <ToastContainer />
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text-3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label>Full name</Label>
          <input
            type="text"
            className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                ${errors.name ? "border-error" : "border-strock"}
                `}
            placeholder={
              errors.name ? errors.name.message : "Enter your full name"
            }
            {...register("name", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <input
            type="email"
            className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                ${errors.email ? "border-error" : "border-strock"}
                `}
            placeholder={
              errors.email ? errors.email.message : "Enter your email"
            }
            {...register("email", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <input
            type="password"
            className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                ${errors.password ? "border-error" : "border-strock"}
                `}
            placeholder={
              errors.password ? errors.password.message : "Create your password"
            }
            {...register("password", { required: true })}
          />
        </FormGroup>
        <FormGroup>
          <Label>Cofirm Password</Label>
          <input
            type="password"
            className={`w-full px-6 py-4 text-sm font-medium border texr-text-1 rounded-xl placeholder:text-text-4
                ${errors.comfirmPassword ? "border-error" : "border-strock"}
                `}
            placeholder={
              errors.comfirmPassword
                ? errors.comfirmPassword.message
                : "Comfirm your password"
            }
            {...register("comfirmPassword", { required: true })}
          />
        </FormGroup>
        <Button className="w-full mt-5 text-teal-50 bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
