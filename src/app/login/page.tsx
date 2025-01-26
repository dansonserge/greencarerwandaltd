// @ts-nocheck
"use client";
import Layout from "../components/Layout";
import Image from "next/image";
import BannerImageOne from "@public/assets/BannerImageOne.svg";
import { useState } from "react";
import CustomButton from "@/app/components/CustomButton";

const Login = () => {
  interface FormDataType {
    username: string;
    password: string;
  }
  interface TouchedFieldsType {
    username: boolean;
    password: boolean;
  }

  const initValues = {
    username: "",
    password: "",
  };
  const initTouchedValues = {
    username: false,
    password: false,
  };

  const initState: { values: FormDataType; isLoading: boolean } = {
    values: initValues,
    isLoading: false,
  };

  const [formData, setFormData] = useState(initState);
  const [touched, setTouched] = useState<TouchedFieldsType>(initTouchedValues);

  const { values, isLoading } = formData;

  const handleSendpassword = () => {
    console.log("sending the password");
  };

  const onBlurHandler = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setFormData((prev) => ({
      ...prev.values,
      values: { ...prev.values, [target.name]: target.value },
      isLoading: false,
    }));

  const onSubmit = async () => {
    setFormData((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };
  return (
    <Layout>
      <div className="flex justify-evenly md:pt-24">
        <div>
          <Image src={BannerImageOne} alt={"Banner Image One"} width={840} />
        </div>

        <div className=" md:w-1/4 flex flex-col justify-center gap-5">
          <p className="ml-2 gradient-accent-color font-[1000] text-2xl">
            Login
          </p>
          <div className="flex flex-col gap-3">
            <label htmlFor="username" className="ml-2 font-[700]">
              Username <span className=" text-red-400">*</span>
            </label>
            <input
              type="text"
              name="username"
              className={`contactUsInput border ${
                touched.username &&
                values.username.length === 0 &&
                "border-red-400"
              }`}
              value={values.username}
              onChange={handleChange}
              onBlur={onBlurHandler}
            ></input>
            {touched.username && values.username.length === 0 && (
              <span className="ml-2 text-red-400">Required</span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password" className="ml-2 font-[700]">
              Password <span className=" text-red-400">*</span>
            </label>
            <input
              type="password"
              name="password"
              className={`contactUsInput border ${
                touched.password &&
                values.password.length === 0 &&
                "border-red-400"
              }`}
              value={values.password}
              onChange={handleChange}
              onBlur={onBlurHandler}
            ></input>
            {touched.password && values.password.length === 0 && (
              <span className="ml-2 text-red-400">Required</span>
            )}
          </div>
          <div className="flex justify-end" onClick={() => handleSendEmail()}>
            <CustomButton
              type="normal-right"
              text="Login"
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
