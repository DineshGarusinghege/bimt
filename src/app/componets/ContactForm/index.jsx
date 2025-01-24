import React from 'react';
import { ToastContainer } from 'react-toastify';

const ContactForm = ({ handleSubmit }) => {
  return (
    <div className="relative w-full">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          background: 'linear-gradient(48deg, #272A5D 0%, #F2295B 100%)',
        }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto w-[1450px] flex flex-col lg:flex-row"
        style={{
          padding: '100px 10px',
          gap: '100px',
        }}
      >
        {/* Left Side - Contact Form */}
        <div className="flex flex-col w-1/2 gap-5">
          {/* Title */}
          <h2 className="text-white font-['Avenir LT Std'] text-[40px] font-bold capitalize mb-0 p-0">
            Feel Free To Write
          </h2>

          {/* Contact Form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Row 1 - First Name & Last Name */}
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '25px',
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '25px',
                }}
              />
            </div>

            {/* Row 2 - Phone & Email */}
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Phone"
                className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '25px',
                }}
              />
              <input
                type="email"
                placeholder="Email"
                className="flex h-[41px] w-[321.6px] px-[16px] py-[8px] border border-gray-300 text-sm"
                style={{
                  color: '#5A5A5A',
                  fontFamily: 'Work Sans',
                  fontSize: '16px',
                  fontWeight: '600',
                  lineHeight: '25px',
                }}
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="flex h-[110px] w-[673.21px] px-[14px] py-[5px] border border-gray-300 text-sm resize-none"
              style={{
                color: '#5A5A5A',
                fontFamily: 'Work Sans',
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '25px',
              }}
            ></textarea>

            {/* Button */}
            <button
              className="h-[51.6px] w-[673.21px] border border-white rounded-[10px] font-['Work Sans'] text-white font-semibold text-[20px] leading-[20px] transition duration-300 ease-in-out hover:bg-white hover:text-[#272A5D] active:bg-white active:text-[#272A5D]"
            >
              SEND
            </button>
          </form>
          <ToastContainer />
        </div>

        {/* Right Side - Contact Info */}
        <div className="flex flex-col w-1/2 gap-10 pl-12">
          <h2 className="text-white font-['Avenir LT STD'] text-[40px] font-bold capitalize">
            Get In Touch With Us
          </h2>
          <p className="text-white font-['Work Sans'] font-normal text-[16px] mb-[-30px] mt-0 mr-0 ml-0">
            We&#39;re dedicated to providing expert legal services tailored to your needs. Whether
            you seek advice or have a specific inquiry, our experienced team is ready to assist with
            professionalism and care.
          </p>
          <div className="flex flex-col gap-6 mt-4">
            {/* Contact Details */}
            <div className="flex items-center gap-4">
              <div className="w-[65px] h-[65px] iconBg flex items-center justify-center text-white">
                <svg
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-phone-alt"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  fill="#ffffff"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
              </div>
              <p className="text-[#ffffff] font-normal text-[16px] font-['Work Sans']">
                Have any question? <br />
                <span className="font-semibold">+94 115 33 22 22</span>
              </p>
            </div>
            {/* Repeat for other contact details */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
