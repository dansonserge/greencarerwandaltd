import ContactUsForm from "./ContactUsForm";
import Image from "next/image";
import GreenCareLogo from "@public/assets/GreenCareLogo.svg";

const ContactUsSection = () => {
  return (
    <div className="bg-[#F1F3F4] pt-5 pb-5 md:pt-10 md:pb-10">
      <div className="flex flex-col md:flex-row px-10 md:px-20 gap-5">
        <div className="w-full md:w-4/12 flex flex-col gap-5 md:gap-10">
          <div className="md:mb-5">
            <Image src={GreenCareLogo} alt={"logo"} height={89} />
          </div>
          <div className="font-[400] text-[#272727] text-md">
            <p className="gradient-accent-color text-xl font-bold mb-3">
              GreenCare Rwanda Ltd
            </p>
            <p>Rwanda, Southern Province</p>
            <p>Huye Industrial Zone</p>
            <p>TIN #: 106386718</p>
          </div>
          <div>
            <p className="gradient-accent-color text-xl font-medium">
              info@greencarerwandaltd.com
            </p>
            <p className=" text-dark-blue font-[700] text-2xl">
              +250 784 030 834
            </p>
          </div>
          <div className="font-[400] text-[#272727] text-md hidden md:block">
            <p>CMVX+657, Butare</p>
            <p>-2.556801907665808, 29.697951648243407</p>
          </div>
        </div>
        <div className="w-full md:w-4/12  md:relative left-9">
          <ContactUsForm />
        </div>
        <div className="w-full md:w-4/12 text-center h-[350px] md:h-[450px]">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8082.989606821302!2d29.69637199741683!3d-2.554226083737236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c30d62bea7cae5%3A0xe246ef4e6e11ddaa!2sGreencare%20Rwanda%20ltd!5e0!3m2!1sen!2srw!4v1690661446299!5m2!1sen!2srw"
            loading="lazy"
            className="border-none w-full h-full"
          ></iframe> */}

          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1pvhfvLfYFzfHll3thmCdkGiD56R1JHk&ehbc=2E312F"
            loading="lazy"
            className="border-none w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
