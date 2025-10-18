import React from "react";
import { Link } from "react-router-dom";

export const Awards = (): JSX.Element => {
  const navItems = [
    { name: "Home", path: "/", active: false },
    { name: "Projects", path: "/projects", active: false },
    { name: "Awards", path: "/awards", active: true },
    { name: "Contact", path: "/contact", active: false },
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Navigation Bar (same as Projects page) */}
      <nav className="w-full flex justify-center pt-[50px]">
        <div className="w-full max-w-[850px] h-[60px] bg-black rounded-[60px] border border-solid border-[#524d4d] flex items-center justify-center px-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`px-8 py-4 cursor-pointer ${index > 0 ? "ml-8" : ""}`}
            >
              <div
                className={`text-[28px] font-['Poppins',Helvetica] ${
                  item.active
                    ? "text-white font-bold"
                    : "text-[#ababab] font-medium"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </nav>

      {/* Page Title */}
      <section className="text-left mt-8 ml-40">
        <h1 className="font-['Poppins',Helvetica] font-bold text-black text-[40px] leading-tight">
          Awards & Participations
        </h1>
      </section>

      {/* SPARSHA Award Section */}
      <section className="px-8 mt-10">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-[22px] text-black mb-6">
          India AI Impact Festival Winner – 2024
        </h2>

        <div className="grid md:grid-cols-2 gap-6 justify-center">
          <img
            src="public/myth_saprsh.png"
            alt="Sparsha Award 1"
            className="rounded-2xl object-cover w-full h-[360px]"
          />
          <img
            src="public/sparsh_myth2.png"
            alt="Sparsha Award 2"
            className="rounded-2xl object-cover w-full h-[360px]"
          />
        </div>

        <p className="font-['Poppins',Helvetica] text-[#4a4a4a] text-[16px] mt-6 max-w-[900px] leading-relaxed">
          SPARSHA earned us the top prize at India AI Impact Festival 2024 — an
          AI-powered disaster response app built with geolocation, offline
          access, and seamless UX under stress.
        </p>
      </section>

      {/* Hackathon Highlights Section */}
      <section className="px-8 mt-16 pb-16">
        <h2 className="font-['Poppins',Helvetica] font-semibold text-[22px] text-black mb-6">
          Hackathon Highlights ft. Finalist
        </h2>

        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {/* Card 1 */}
          <div className="border border-gray-300 rounded-2xl p-4 shadow-sm hover:shadow-md transition w-[500px] mx-auto">
            <img
              src="public/nex_svce.png"
              alt="Make-a-thon"
              className="rounded-xl w-full h-[250px] object-cover"
            />
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[18px] mt-4">
              Make-a-thon – (SVCE College)
            </h3>
            <p className="font-['Poppins',Helvetica] text-[14px] text-[#4a4a4a] mt-2">
              Finalist at the Make-a-thon Hackathon hosted by SVCE for our work
              on NEX, an AI-powered education and career guidance platform.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-300 rounded-2xl p-4 shadow-sm hover:shadow-md transition w-[500px] mx-auto">
            <img
              src="public/Innothon.png"
              alt="Innothon"
              className="rounded-xl w-full h-[250px] object-cover"
            />
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[18px] mt-4">
              Innothon – (KCG College of Technology)
            </h3>
            <p className="font-['Poppins',Helvetica] text-[14px] text-[#4a4a4a] mt-2">
              Created a user-friendly disaster response app with geolocation
              (What3Words) and SARIMA forecasting, focused on offline usability
              and accessibility for high-stress scenarios.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-300 rounded-2xl p-4 shadow-sm hover:shadow-md transition w-[500px] mx-auto">
            <img
              src="public\rd_thon.png"
              alt="HackHerVerse"
              className="rounded-xl w-full h-[250px] object-cover"
            />
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[18px] mt-4">
              HackHerVerse Women’s Hackathon – (Google Developers & WTM)
            </h3>
            <p className="font-['Poppins',Helvetica] text-[14px] text-[#4a4a4a] mt-2">
              Selected as a finalist at HackHerVerse, co-hosted by Google
              Developers, Women Techmakers, and Rajalakshmi Engineering College,
              for building the AI-driven RayDot healthcare platform.
            </p>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-300 rounded-2xl p-4 shadow-sm hover:shadow-md transition w-[500px] mx-auto">
            <img
              src="public/diva.png"
              alt="TechDivathon"
              className="rounded-xl w-full h-[250px] object-cover"
            />
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[18px] mt-4">
              TechDivathon – (Panimalar College)
            </h3>
            <p className="font-['Poppins',Helvetica] text-[14px] text-[#4a4a4a] mt-2">
              Recognized as a finalist in TechDivathon, a 24-hour women-centric
              national hackathon by Panimalar, for innovative, user-focused
              solutions.
            </p>
          </div>
        </div>
      </section>

        {/* Footer */}
        <footer className="w-full bg-black py-4 flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <img
              className="w-[18px] h-[18px]"
              alt="Copyright icon"
              src="/copyright.png"
            />
            <span className="font-['Poppins',Helvetica] font-light text-white text-sm">
              © 2025 Mythili. All rights reserved.
            </span>
          </div>
        </footer>
    </div>
  );
};
