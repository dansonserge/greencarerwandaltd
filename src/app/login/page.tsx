// @ts-nocheck
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import Layout from "../components/Layout";
import Image from "next/image";
import BannerImageOne from "@public/assets/BannerImageOne.svg";
import { useState } from "react";
import CustomButton from "@/app/components/CustomButton";
import Alert from "../components/Tools/Alert";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  interface FormDataType {
    email: string;
    password: string;
  }
  interface TouchedFieldsType {
    email: boolean;
    password: boolean;
  }

  interface AlertsInterface {
    title: string;
    message: string;
    isError: boolean;
    showAlert: boolean;
  }

  const initValues = {
    email: "",
    password: "",
  };
  const alertMessage: AlertsInterface = {
    title: "eeee",
    message: "sssss",
    isError: false,
    showAlert: false,
  };
  const initTouchedValues = {
    email: false,
    password: false,
  };

  const initState: { values: FormDataType; isLoading: boolean } = {
    values: initValues,
    isLoading: false,
  };

  const [formData, setFormData] = useState(initState);
  const [touched, setTouched] = useState<TouchedFieldsType>(initTouchedValues);
  const [alert, setAlert] = useState<AlertMessage>(alertMessage);

  const { values, isLoading } = formData;

  const handleSendpassword = () => {
    console.log("sending the password");
  };

  const onBlurHandler = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) => {
    console.log(target.value);
    setFormData((prev) => ({
      ...prev, // Ensure we spread all the previous state first
      values: { ...prev.values, [target.name]: target.value }, // Only update the specific field
      isLoading: false,
    }));
  };

  const onSubmit = async () => {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify(formData.values),
    };

    const res = await fetch("api/auth/login", requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status == 400) {
          console.log("test");
          response.json().then((data) => {
            toast.error(data.message);
          });
        } else {
          toast.success("Succcessfully authenticated!");
          response.json().then((data) => {
            setAlert({
              title: "Success",
              message: data.message,
              isError: false,
              showAlert: true,
            });

            localStorage.setItem("user-details", JSON.stringify(data));
            router.push("/blog");
          });
        }
      })
      .finally(() => {
        setFormData({ ...formData, isLoading: false });
      })
      .catch((error) => {
        console.error(error);
      });
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

          {/* {alert.showAlert && (
            <Alert title={alert.title} message={alert.message} />
          )} */}

          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="ml-2 font-[700]">
              email <span className=" text-red-400">*</span>
            </label>
            <input
              type="text"
              name="email"
              className={`contactUsInput border ${
                touched.email && values.email.length === 0 && "border-red-400"
              }`}
              value={values.email}
              onChange={handleChange}
              onBlur={onBlurHandler}
            ></input>
            {touched.email && values.email.length === 0 && (
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
          <div
            className="flex justify-end"
            onClick={() =>
              onSubmit().then(() => {
                setFormData({ ...formData, isLoading: false });
              })
            }
          >
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
