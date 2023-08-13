import React from 'react'
import CustomButton from '../CustomButton';
import SendMessageIcon from "@/assets/send-message-icon.svg";

function ContactUsForm() {
  return (
    <div className="bg-white px-4 md:px-10 py-5 md:absolute contactUsForm ">
    <p className="ml-2 gradient-accent-color font-[700] text-2xl py-4">Contact us now</p>
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="ml-2 font-[700]">Name</label>
        <input type="text" name="names" className="contactUsInput"></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="ml-2 font-[700]">Email</label>
        <input type="email" name="email" className="contactUsInput"></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="ml-2 font-[700]">Phone</label>
        <input type="phone" name="phone" className="contactUsInput"></input>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="ml-2 font-[700]">Message</label>
        <textarea name="message" className="contactUsTeaxtArea"></textarea>
      </div>

      <div className="ml-auto">
        <CustomButton
          type="normal-right"
          text="Send"
          icon={SendMessageIcon}
        />
      </div>
    </form>
  </div>
  )
}

export default ContactUsForm