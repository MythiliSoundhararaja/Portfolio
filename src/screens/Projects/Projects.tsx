import React from "react";
import { Link } from "react-router-dom";

export const Projects = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "Home", active: false, path: "/" },
    { name: "Projects", active: true, path: "/projects" },
    { name: "Awards", active: false, path: "/awards" },
    { name: "Contact", active: false, path: "/contact" },
  ];

  // Project data matching the Figma design
  const projects = [
    {
      id: 1,
      title: "SPARSHA – Disaster Management App",
      description: "Created a user-friendly disaster response app with geolocation (What3Words) and SARIMA forecasting. Focused on offline usability and accessibility for high-stress scenarios.",
      image: "/project2.png"
    },
    {
      id: 2,
      title: "NEX – Education & Career Platform",
      description: "Developed a platform that turns learning content into engaging videos using Remotion. Included personalized career guidance through quizzes and interactive roadmaps.",
      image: "/project1.png"
    },
    {
      id: 3,
      title: "RayDot – AI-Powered Healthcare Platform",
      description: "Led the development of an AI-based Clinical Decision Support System and chatbot for better patient care. Integrated OCR, Chroma, and FAISS to streamline document management and knowledge retrieval.",
      image: "/project3.png"
    },
    {
      id: 4,
      title: "Smart Public Toilets – Urban Sanitation Innovation",
      description: "Designed an eco-friendly, sensor-based smart toilet system to improve public sanitation infrastructure. Focused on real-time cleanliness updates, automation, and a seamless user experience.",
      image: "/project4.png"
    },
    {
      id: 5,
      title: "Book Automation – CLI for Library Management",
      description: "Built a Python-based command-line tool to automate book tracking, issuing, and return operations. Designed for simple, efficient use by libraries or personal collections with minimal manual effort.",
      image: "/project5.png"
    },
    {
      id: 6,
      title: "Soccer Player Re-identification – CV Model",
      description: "Developed a deep learning pipeline to detect and track soccer players across video frames.Used OpenCV and CNNs to extract features for re-identifying players in sports analytics tasks.",
      image: "/project6.png"
    }
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

            {/* Page Title */}
            <div className="text-left mt-16 px-8">
              <h1 className="font-['Poppins',Helvetica] font-bold text-black text-[80px] leading-tight">
                Projects
              </h1>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="w-full max-w-[1554px] mx-auto py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-[600px] mx-auto"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[250px] sm:h-[280px] lg:h-[320px] object-cover"
                  />
                </div>
                
                <div className="p-4 sm:p-6 flex flex-col min-h-[200px]">
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-[18px] sm:text-[20px] mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-[13px] sm:text-[14px] leading-relaxed flex-1 overflow-hidden line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black h-[92px] flex items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-[1554px] px-8">
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