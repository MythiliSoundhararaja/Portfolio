import React from "react";
import { Link } from "react-router-dom";

export const Awards = () => {
  const navItems = [
    { name: "Home", path: "/", active: false },
    { name: "Projects", path: "/projects", active: false },
    { name: "Awards", path: "/awards", active: true },
    { name: "Contact", path: "/contact", active: false },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center w-full min-h-screen">
      <div className="w-full max-w-[1728px] overflow-hidden">
        {/* 🧭 Navigation Bar - Compact Single Row (1x4 on mobile) */}
        <nav className="w-full flex justify-center pt-8 sm:pt-10 px-4 sm:px-6">
          <div className="w-full max-w-[700px] bg-black rounded-[60px] border border-solid border-[#524d4d] flex items-center justify-center p-2 sm:p-3 gap-1 sm:gap-3">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex-shrink-0 px-2 py-1 sm:px-4 sm:py-2 text-center whitespace-nowrap"
              >
                <div
                  className={`text-base sm:text-lg md:text-xl font-['Poppins',Helvetica] transition-colors duration-200 ${
                    item.active
                      ? "text-white font-bold"
                      : "text-[#ababab] font-medium hover:text-white"
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </nav>

        {/* Page Title */}
        <section className="text-left mt-8 sm:mt-12 ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-40 px-4 sm:px-6">
          <h1 className="font-['Poppins',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            Awards & Participations
          </h1>
        </section>

        {/* SPARSHA Award Section */}
        <section className="px-4 sm:px-6 md:px-8 mt-8 sm:mt-10">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-lg sm:text-xl md:text-2xl text-black mb-4 sm:mb-6">
            India AI Impact Festival Winner – 2024
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <img
              src="/myth_saprsh.png"
              alt="Sparsha Award 1"
              className="rounded-2xl object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
            />
            <img
              src="/sparsh_myth2.png"
              alt="Sparsha Award 2"
              className="rounded-2xl object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
            />
          </div>

          <p className="font-['Poppins',Helvetica] text-[#4a4a4a] text-sm sm:text-base md:text-lg mt-4 sm:mt-6 max-w-[900px] leading-relaxed">
            SPARSHA earned us the top prize at India AI Impact Festival 2024 — an
            AI-powered disaster response app built with geolocation, offline
            access, and seamless UX under stress.
          </p>
        </section>

        {/* Hackathon Highlights Section */}
        <section className="px-4 sm:px-6 md:px-8 mt-12 sm:mt-16 pb-8 sm:pb-16">
          <h2 className="font-['Poppins',Helvetica] font-semibold text-lg sm:text-xl md:text-2xl text-black mb-4 sm:mb-6">
            Hackathon Highlights ft. Finalist
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
              <img
                src="/nex_svce1.png"
                alt="Make-a-thon"
                className="rounded-xl w-full h-56 sm:h-64 md:h-72 object-cover"
              />
              <h3 className="font-['Poppins',Helvetica] font-semibold text-base sm:text-lg mt-3 sm:mt-4">
                Make-a-thon – (SVCE College)
              </h3>
              <p className="font-['Poppins',Helvetica] text-sm md:text-base text-[#4a4a4a] mt-2">
                Finalist at the Make-a-thon Hackathon hosted by SVCE for our work
                on NEX, an AI-powered education and career guidance platform.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
              <img
                src="/Innothon.png"
                alt="Innothon"
                className="rounded-xl w-full h-56 sm:h-64 md:h-72 object-cover"
              />
              <h3 className="font-['Poppins',Helvetica] font-semibold text-base sm:text-lg mt-3 sm:mt-4">
                Innothon – (KCG College of Technology)
              </h3>
              <p className="font-['Poppins',Helvetica] text-sm md:text-base text-[#4a4a4a] mt-2">
                Created a user-friendly disaster response app with geolocation
                (What3Words) and SARIMA forecasting, focused on offline usability
                and accessibility for high-stress scenarios.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
              <img
                src="/rd_thon.png"
                alt="HackHerVerse"
                className="rounded-xl w-full h-56 sm:h-64 md:h-72 object-cover"
              />
              <h3 className="font-['Poppins',Helvetica] font-semibold text-base sm:text-lg mt-3 sm:mt-4">
                HackHerVerse Women’s Hackathon – (Google Developers & WTM)
              </h3>
              <p className="font-['Poppins',Helvetica] text-sm md:text-base text-[#4a4a4a] mt-2">
                Selected as a finalist at HackHerVerse, co-hosted by Google
                Developers, Women Techmakers, and Rajalakshmi Engineering College,
                for building the AI-driven RayDot healthcare platform.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition">
              <img
                src="/diva.png"
                alt="TechDivathon"
                className="rounded-xl w-full h-56 sm:h-64 md:h-72 object-cover"
              />
              <h3 className="font-['Poppins',Helvetica] font-semibold text-base sm:text-lg mt-3 sm:mt-4">
                TechDivathon – (Panimalar College)
              </h3>
              <p className="font-['Poppins',Helvetica] text-sm md:text-base text-[#4a4a4a] mt-2">
                Recognized as a finalist in TechDivathon, a 24-hour women-centric
                national hackathon by Panimalar, for innovative, user-focused
                solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black py-4 sm:py-6 flex flex-col items-center justify-center mt-8">
          <div className="flex items-center gap-2">
            <img
              className="w-4 h-4 sm:w-5 sm:h-5"
              alt="Copyright icon"
              src="/copyright.png"
            />
            <span className="font-['Poppins',Helvetica] font-light text-white text-xs sm:text-sm">
              © 2025 Mythili. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Awards;