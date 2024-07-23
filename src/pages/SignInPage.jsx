/* eslint-disable no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import { useForm } from "react-hook-form";
import Label from "../components/label/Label";
import FormGroup from "./../common/FormGroup";
import Button from "../components/button/Button";
import { signInSchema } from "../validation/authValidation";
import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const SignInPage = () => {
  const nav = useNavigate();
  const [showSignUpSuccessToast, setShowSignUpSuccessToast] = useState(false);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("signUpSuccess") === "success") {
      setShowSignUpSuccessToast(true);
      toast.success("Account created successfully!");
    }
    setTimeout(() => {
      localStorage.removeItem("signUpSuccess");
      setShowSignUpSuccessToast(false);
    }, 2000);
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const handleSignIn = (data) => {
    (async () => {
      try {
        await login(data.email, data.password);
        // localStorage.setItem("user", JSON.stringify(res.data));
        nav("/");
      } catch (error) {
        console.log(error.response?.data || "Failed to sign in");
        toast.error(error.response?.data);
      }
    })();
  };

  return (
    <LayoutAuthentication heading="Welcome Back">
      <ToastContainer />
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text-3 lg:mb-8">
        Dont have an account?{" "}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <form onSubmit={handleSubmit(handleSignIn)}>
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
              errors.password ? errors.password.message : "Enter your password"
            }
            {...register("password", { required: true })}
          />
        </FormGroup>
        <Button className="w-full mt-5 text-teal-50 bg-primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
