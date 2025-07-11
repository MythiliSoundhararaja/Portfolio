import React from "react";
import { Link } from "react-router-dom";

export const Contact = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "Home", active: false, path: "/" },
    { name: "Projects", active: false, path: "/projects" },
    { name: "Awards", active: false, path: "/awards" },
    { name: "Contact", active: true, path: "/contact" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full max-w-[1728px] relative">
        {/* Header Section */}
        <section className="relative w-full max-w-[1554px] mx-auto pt-[50px]">
          <div className="relative">
            {/* Navigation Bar */}
            <div className="w-full max-w-[900px] h-[56px] mx-auto bg-black rounded-[48px] border border-solid border-[#524d4d] flex items-center justify-center px-5">
              {navItems.map((item, index) => (
                <Link
                  key={`nav-${index}`}
                  to={item.path}
                  className={`px-6 py-3 cursor-pointer ${index > 0 ? "ml-6" : ""}`}
                >
                  <div
                    className={`text-[22px] font-['Poppins',Helvetica] ${item.active ? "text-white font-bold" : "text-[#ababab] font-medium"}`}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="w-full max-w-[1554px] mx-auto py-16 px-8">
          <div className="flex items-center justify-between">
            {/* Left Side - Contact Form and Info */}
            <div className="flex-1 max-w-[600px]">
              {/* Page Title */}
              <div className="mb-12">
                <h1 className="font-['Poppins',Helvetica] font-bold text-black text-[80px] leading-tight mb-4">
                  Let's Talk
                </h1>
                <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[24px]">
                  Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-4 border border-[#e0e0e0] rounded-lg font-['Poppins',Helvetica] font-normal text-[16px] focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-4 border border-[#e0e0e0] rounded-lg font-['Poppins',Helvetica] font-normal text-[16px] focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-4 border border-[#e0e0e0] rounded-lg font-['Poppins',Helvetica] font-normal text-[16px] focus:outline-none focus:border-black transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-4 border border-[#e0e0e0] rounded-lg font-['Poppins',Helvetica] font-normal text-[16px] focus:outline-none focus:border-black transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full px-4 py-4 border border-[#e0e0e0] rounded-lg font-['Poppins',Helvetica] font-normal text-[16px] focus:outline-none focus:border-black transition-colors duration-200 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white font-['Poppins',Helvetica] font-medium text-[18px] py-4 rounded-lg hover:bg-[#333] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-[18px]">Email</h3>
                    <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[16px]">mythili@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-[18px]">Phone</h3>
                    <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[16px]">+91 8939897205</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f0f0f0] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-[18px]">Location</h3>
                    <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[16px]">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Character */}
            <div className="flex-1 flex justify-center items-center">
              <div className="relative">
                <img
                  className="w-[480px] h-[1130px] object-cover"
                  alt="3D Contact Character"
                  src="/3d_stand.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="w-full bg-[#f8f6f4] py-16">
          <div className="max-w-[1554px] mx-auto px-8 text-center">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-[48px] mb-4">
              Let's Connect
            </h2>
            
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:mythilisoundhararajan@gmail.com"
                className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-[#333] transition-colors duration-200"
                aria-label="Send Email"
              >
                <img
                  src="/public/mail_logo.png"
                  alt="Email Icon"
                  className="w-6 h-6 object-contain"
                />
              </a>


              
              <a
                href="#"
                className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-[#333] transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
 
              <a
                href="#"
                className="w-16 h-16 bg-black rounded-full flex items-center justify-center hover:bg-[#333] transition-colors duration-200"
              >
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black h-[92px] flex items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-[1000px]">
            <div className="flex items-center">
              <img
                className="w-[18px] h-[18px] mr-4"
                alt="Phone icon"
                src="/vector-2.svg"
              />
              <span className="font-['Poppins',Helvetica] font-medium text-white text-base">
                +91 8939897205
              </span>
            </div>

            <img className="h-6" alt="Contact emoji" src="/contactemoji.png" />

            <div className="flex items-center">
              <div className="relative w-[18px] h-[27px] mr-4">
                <img
                  className="w-[18px] h-[18px]"
                  alt="Copyright icon"
                  src="/vector.svg"
                />
                <div className="absolute top-0 left-[3px] font-['Poppins',Helvetica] font-light text-white text-lg">
                  c
                </div>
              </div>
              <span className="font-['Poppins',Helvetica] font-light text-white text-sm">
                2025 by Mythili
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};