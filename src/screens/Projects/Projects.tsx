import React from "react";
import { Link } from "react-router-dom";

export const Projects = () => {
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
      description:
        "Created a user-friendly disaster response app with geolocation (What3Words) and SARIMA forecasting. Focused on offline usability and accessibility for high-stress scenarios.",
      image: "/project1.png",
    },
    {
      id: 2,
      title: "NEX – Education & Career Platform",
      description:
        "Developed a platform that turns learning content into engaging videos using Remotion. Included personalized career guidance through quizzes and interactive roadmaps.",
      image: "/project2.png",
    },
    {
      id: 3,
      title: "RayDot – AI-Powered Healthcare Platform",
      description:
        "Led the development of an AI-based Clinical Decision Support System and chatbot for better patient care. Integrated OCR, Chroma, and FAISS to streamline document management and knowledge retrieval.",
      image: "/project3.png",
    },
    {
      id: 4,
      title: "Smart Public Toilets – Urban Sanitation Innovation",
      description:
        "Designed an eco-friendly, sensor-based smart toilet system to improve public sanitation infrastructure. Focused on real-time cleanliness updates, automation, and a seamless user experience.",
      image: "/project4.png",
    },
    {
      id: 5,
      title: "Book Automation – CLI for Library Management",
      description:
        "Built a Python-based command-line tool to automate book tracking, issuing, and return operations. Designed for simple, efficient use by libraries or personal collections with minimal manual effort.",
      image: "/project5.png",
    },
    {
      id: 6,
      title: "Soccer Player Re-identification – CV Model",
      description:
        "Developed a deep learning pipeline to detect and track soccer players across video frames. Used OpenCV and CNNs to extract features for re-identifying players in sports analytics tasks.",
      image: "/project6.png",
    },
  ];

  return (
    <div className="bg-white flex flex-col justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full max-w-[1728px] relative mx-auto">
        {/* Hero Section */}
        <section className="relative w-full max-w-[1554px] mx-auto px-4 sm:px-6">
          
          {/* 🧭 Navigation Bar */}
          <nav className="w-full flex justify-center pt-10">
            <div className="w-full max-w-[850px] bg-black rounded-[60px] border border-[#524d4d] flex flex-wrap items-center justify-center p-2 sm:p-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 ${
                    index > 0 ? "mt-2 sm:mt-0 sm:ml-2 md:ml-4" : ""
                  } w-full sm:w-auto text-center`}
                >
                  <span
                    className={`text-base sm:text-lg md:text-xl font-['Poppins',Helvetica] ${
                      item.active
                        ? "text-white font-bold"
                        : "text-[#ababab] font-medium hover:text-white transition"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Page Title */}
          <div className="text-left mt-8 sm:mt-12 ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-40">
            <h1 className="font-['Poppins',Helvetica] font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight">
              Projects
            </h1>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="w-full max-w-[1200px] mx-auto py-8 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 justify-center">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-[#e0e0e0] overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover"
                  />
                </div>

                <div className="p-4 sm:p-6 flex flex-col">
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-lg sm:text-xl mb-2 sm:mb-3 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="font-['Poppins',Helvetica] font-normal text-[#6d6d6d] text-sm sm:text-base leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
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

export default Projects;