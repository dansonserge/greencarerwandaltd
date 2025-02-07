// @ts-nocheck
import React, { useState } from "react";
import CustomButton from "../CustomButton";
import SendMessageIcon from "@public/assets/send-message-icon.svg";
import toast from "react-hot-toast";

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

  const initState: { values: FormDataType; isLoading: boolean } = {
    values: initValues,
    isLoading: false,
  };

  const [formData, setFormData] = useState(initState);
  const [touched, setTouched] = useState<TouchedFieldsType>(initTouchedValues);

  const { values, isLoading } = formData;

  const handleSendEmail = async () => {
    setFormData((prev) => ({ ...prev, isLoading: true }));

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: values.names,
      email: values.email,
      phone: values.phone,
      message: values.message,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("api/contact", requestOptions);
      if (!response.ok) {
        toast.error("Failed to send message. Please try again.");
        throw new Error("Failed to send message");
      }
      toast.success("Message sent successfully!");
      setFormData({ values: initValues, isLoading: false }); // Reset form
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending email:", error);
      setFormData((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const onBlurHandler = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setFormData((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

  return (
    <div className="bg-white px-4 md:px-10 py-5 contactUsForm w-full lg:w-5/6">
      <p className="ml-2 gradient-accent-color font-[700] text-2xl py-4">
        Contact us now
      </p>
      <div className="flex flex-col gap-5">
        {["names", "email", "phone", "message"].map((field, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label className="ml-2 font-[700]">
              {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
              <span className=" text-red-400">*</span>
            </label>
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                className={`contactUsInput border ${
                  touched[field] && !values[field] && "border-red-400"
                }`}
                value={values[field]}
                onChange={handleChange}
                onBlur={onBlurHandler}
              />
            ) : (
              <textarea
                name={field}
                className={`contactUsTeaxtArea border ${
                  touched[field] && !values[field] && "border-red-400"
                }`}
                value={values[field]}
                onChange={handleChange}
                onBlur={onBlurHandler}
              />
            )}
            {touched[field] && !values[field] && (
              <span className="ml-2 text-red-400">Required</span>
            )}
          </div>
        ))}
        <div className="ml-auto" onClick={handleSendEmail}>
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
