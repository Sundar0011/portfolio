import React from "react";
import Heading from "../components/Heading";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mb-16">
      <Heading name="Contact" />
      <div className="grid grid-rows-2 md:p-10">
        <div
          data-aos="fade-up"
          className="text-white p-5 font-audiowide flex justify-center text-center"
        >
          "I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello, feel free to reach out. Let's connect and create something amazing together!"
        </div>
        <div data-aos="fade-up" className="grid md:grid-cols-2">
          <div className="m-2 border border-green-400 rounded-md grid grid-cols-10 w-auto h-auto">
            <div className="col-span-2 flex justify-center items-center">
              <IoIosCall className="text-green-400 bg-transparent h-10 w-10 border-2 border-green-400 rounded-[50%]" />
            </div>
            <div className="text-white flex items-center max-sm:text-[12px]">
              9003985212
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="m-2 border border-green-400 rounded-md grid grid-cols-10 w-auto h-auto"
          >
            <div className="col-span-2 flex justify-center items-center">
              <FaLinkedin className="text-blue-800 bg-transparent h-10 w-10 border-2 border-green-400 rounded-[50%]" />
            </div>
            <div className="col-span-8 text-white flex justify-start items-center max-sm:text-[12px] break-all">
              <a
                href="http://www.linkedin.com/in/sundaravel-s-440438267"
                
              >
                http://www.linkedin.com/in/sundaravel-s-440438267
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="m-2 border border-green-400 rounded-md grid grid-cols-10 w-auto h-auto"
          >
            <div className="col-span-2 flex justify-center items-center">
              <FaGithub className="text-white bg-transparent h-10 w-10 border-2 border-green-400 rounded-[50%]" />
            </div>
            <div className="col-span-8 text-white flex justify-start items-center max-sm:text-[12px] break-all">
                <a href="https://github.com/Sundar0011">https://github.com/Sundar0011</a>
              
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="m-2 border border-green-400 rounded-md grid grid-cols-10 w-auto h-auto"
          >
            <div className="col-span-2 flex justify-center items-center">
              <IoMail className="text-red-500 bg-transparent h-10 w-10 border-2 border-green-400 rounded-[50%]" />
            </div>
            <div className="col-span-8 text-white flex justify-start items-center max-sm:text-[12px] break-all">
            <a href="sundarav61@gmail.com">sundarav61@gmail.com</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
