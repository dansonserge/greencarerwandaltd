// @ts-nocheck
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import SendMessageIcon from "@/assets/send-message-icon.svg";

function ContactUsForm() {
  interface FormDataType {
    names: string;
    email: string;
    phone: string;
    message: string;
  }
  interface TouchedFieldsType {
    names: boolean;
    email: boolean;
    phone: boolean;
    message: boolean;
  }

  const initValues = {
    names: "",
    email: "",
    phone: "",
    message: "",

  };
  const initTouchedValues = {
    names: false,
    email: false,
    phone: false,
    message: false,

  };

  const initState: { values: FormDataType, isLoading: boolean } = { values: initValues, isLoading: true };

  const [formData, setFormData] = useState(initState);
  const [touched, setTouched] = useState<TouchedFieldsType>(initTouchedValues);

  const { values, isLoading } = formData;

  const handleSendEmail = () => {
    console.log("sending the email");
  };

  const onBlurHandler = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setFormData((prev) => ({
      ...prev.values,
      values: { ...prev.values, [target.name]: target.value },
      isLoading: true
    }));

    const onSubmit = async () =>{
      setFormData((prev) => ({
        ...prev,
        isLoading:true
      }))
    }

  return (
    <div className="bg-white px-4 md:px-10 py-5  contactUsForm w-full lg:w-5/6">
      <p className="ml-2 gradient-accent-color font-[700] text-2xl py-4">
        Contact us now
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="ml-2 font-[700]">
            Name <span className=" text-red-400">*</span>
          </label>
          <input
            type="text"
            name="names"
            className={`contactUsInput border ${
              touched.names && values.names.length === 0 && "border-red-400"
            }`}
            value={values.names}
            onChange={handleChange}
            onBlur={onBlurHandler}
          ></input>
          {touched.names && values.names.length === 0 && (
            <span className="ml-2 text-red-400">Required</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="ml-2 font-[700]">
            Email <span className=" text-red-400">*</span>
          </label>
          <input
            type="email"
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
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="ml-2 font-[700]">
            Phone <span className=" text-red-400">*</span>
          </label>
          <input
            type="phone"
            name="phone"
            className={`contactUsInput border ${
              touched.phone && values.phone.length === 0 && "border-red-400"
            }`}
            value={values.phone}
            onChange={handleChange}
            onBlur={onBlurHandler}
          ></input>
          {touched.phone && values.phone.length === 0 && (
            <span className="ml-2 text-red-400">Required</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="ml-2 font-[700]">
            Message <span className=" text-red-400">*</span>
          </label>
          <textarea
            name="message"
            className={`contactUsTeaxtArea border ${
              touched.message && values.message.length === 0 && "border-red-400"
            }`}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlurHandler}
          ></textarea>
          {touched.message && values.message.length === 0 && (
            <span className="ml-2 text-red-400">Required</span>
          )}
        </div>

        <div className="ml-auto" onClick={() => handleSendEmail()}>
          <CustomButton
            type="normal-right"
            text="Send"
            isLoading={isLoading}
            icon={SendMessageIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
