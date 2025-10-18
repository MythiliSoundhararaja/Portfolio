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
<<<<<<< HEAD
    <div className="bg-white flex flex-col min-h-screen">
      {/* Navigation Bar (same as Projects page) */}
      <nav className="w-full flex justify-center pt-[50px]">
        <div className="w-full max-w-[850px] h-[60px] bg-black rounded-[60px] border border-solid border-[#524d4d] flex items-center justify-center px-6">
          {navItems.map((item, index) => (
=======
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

            {/* Page Title */}
            <div className="text-center mt-16">
              <h1 className="font-['Poppins',Helvetica] font-bold text-black text-[80px] leading-tight">
                Awards & Recognition
              </h1>
              <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[24px] mt-4 max-w-[800px] mx-auto">
                A collection of honors and achievements that recognize my contributions to machine learning, 
                design innovation, and technological advancement.
              </p>
            </div>
          </div>
        </section>

        {/* Awards Grid Section */}
        <section className="w-full max-w-[1554px] mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-black bg-opacity-80 text-white px-3 py-1 rounded-full text-[12px] font-['Poppins',Helvetica] font-medium">
                      {award.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-[#f0f0f0] text-[#333] text-[12px] font-['Poppins',Helvetica] font-medium rounded-full">
                      {award.category}
                    </span>
                  </div>
                  
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-[24px] mb-2 line-clamp-2">
                    {award.title}
                  </h3>
                  
                  <h4 className="font-['Poppins',Helvetica] font-medium text-[#6d6d6d] text-[16px] mb-3">
                    {award.organization}
                  </h4>
                  
                  <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[14px] line-clamp-3">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full bg-[#f8f6f4] py-16">
          <div className="max-w-[1554px] mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-[48px] mb-4">
                Achievement Highlights
              </h2>
              <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[20px] max-w-[600px] mx-auto">
                Numbers that reflect my journey and impact in the tech industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-['Poppins',Helvetica] font-bold text-black text-[64px] mb-2">
                  6+
                </div>
                <div className="font-['Poppins',Helvetica] font-medium text-[#6d6d6d] text-[18px]">
                  Awards Received
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-['Poppins',Helvetica] font-bold text-black text-[64px] mb-2">
                  3
                </div>
                <div className="font-['Poppins',Helvetica] font-medium text-[#6d6d6d] text-[18px]">
                  Years Experience
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-['Poppins',Helvetica] font-bold text-black text-[64px] mb-2">
                  15+
                </div>
                <div className="font-['Poppins',Helvetica] font-medium text-[#6d6d6d] text-[18px]">
                  Projects Completed
                </div>
              </div>
              
              <div className="text-center">
                <div className="font-['Poppins',Helvetica] font-bold text-black text-[64px] mb-2">
                  98%
                </div>
                <div className="font-['Poppins',Helvetica] font-medium text-[#6d6d6d] text-[18px]">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="w-full py-16">
          <div className="max-w-[1554px] mx-auto text-center px-8">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-black text-[48px] mb-4">
              Let's Create Something Amazing
            </h2>
            <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[20px] mb-8 max-w-[600px] mx-auto">
              Ready to work on your next project? I'd love to discuss how we can bring your vision to life.
            </p>
>>>>>>> a1f2d3cbdf4bef16fc4b4059954a40928f01d15b
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
