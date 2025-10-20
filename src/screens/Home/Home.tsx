import React from "react";
import { Link } from "react-router-dom";

// Mock UI components since we don't have the actual implementation
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const Separator = ({ className = "" }) => (
  <div className={`bg-gray-200 ${className}`} />
);

export const Home = () => {
  // Navigation menu items
  const navItems = [
    { name: "Home", active: true, path: "/" },
    { name: "Projects", active: false, path: "/projects" },
    { name: "Awards", active: false, path: "/awards" },
    { name: "Contact", active: false, path: "/contact" },
  ];

  // Specialization cards data
  const specializations = [
    {
      title: "Machine Learning",
      description:
        "Developing predictive models, LLMs, and intelligent systems for real-world impact.",
      imageSrc: "/ML.png",
    },
    {
      title: "Computer Vision",
      description:
        "Building image-based ML solutions, including object detection and visual automation.",
      imageSrc: "/cv.png",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating user-first digital experiences with thoughtful interfaces and smooth interactions.",
      imageSrc: "/UC.png",
    },
  ];

  // Tech stack icons
  const techStack = [
    { src: "/python_3098090.png", alt: "Python" },
    { src: "/java-script_1199124.png", alt: "JavaScript" },
    { src: "/react_logo.png", alt: "React" },
    { src: "/github_bw_logo.png", alt: "Github" },
    { src: "/vs_code_logo.png", alt: "VS Code" },
    { src: "/pytorch_logo.png", alt: "PyTorch" },
    { src: "/figma_logo.png", alt: "Figma" },
    { src: "/n8n_logo.png", alt: "N8N" },
    { src: "/colab-logo.png", alt: "Google Colab" },
    { src: "/mongodb_logo.png", alt: "MongoDB" },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center w-full min-h-screen">
      <div className="w-full max-w-[1728px] overflow-hidden">
        {/* 🧭 Navigation Bar */}
        <nav className="w-full flex justify-center pt-10 px-4 sm:px-6">
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

        {/* 👋 Hero Section */}
        <section className="relative w-full max-w-[1554px] mx-auto pt-12 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center mt-8 sm:mt-16 lg:mt-24 text-center lg:text-left">
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="font-['Poppins',Helvetica] font-normal text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Hi I’m
              </h1>
              <h2 className="font-['Poppins',Helvetica] font-bold text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mt-2">
                Mythili
              </h2>
              <p className="max-w-[500px] mx-auto lg:mx-0 font-['Poppins',Helvetica] font-normal text-gray-800 text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
                Crafting seamless experiences at the crossroads of machine
                learning and design.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center mt-8 sm:mt-12 lg:mt-0">
              <img
                src="/3d_main-removebg-preview.png"
                alt="Mythili Avatar"
                className="w-64 sm:w-80 md:w-96 lg:w-[440px] h-auto object-contain"
              />
            </div>
          </div>
        </section>

        <Separator className="w-full h-px my-8 sm:my-12" />

        {/* 💡 What I Do Section */}
        <section className="w-full max-w-[1554px] mx-auto py-8 sm:py-12 px-4 sm:px-6 md:px-8">
          <div className="mb-8 sm:mb-12 text-center lg:text-left lg:ml-20">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-lg sm:text-xl md:text-2xl">
              What I do
            </h2>
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#070707] text-2xl sm:text-3xl md:text-4xl mt-2">
              I’m Specialized in
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="border-none shadow-none w-full sm:w-[300px] md:w-[340px]"
              >
                <CardContent className="flex flex-col items-center pt-6">
                  <img
                    src={spec.imageSrc}
                    alt={spec.title}
                    className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 mb-4 sm:mb-6"
                  />
                  <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-xl sm:text-2xl md:text-3xl text-center mb-3 sm:mb-4">
                    {spec.title}
                  </h4>
                  <p className="font-['Poppins',Helvetica] font-normal text-gray-600 text-sm sm:text-base md:text-lg text-center px-2 sm:px-4">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="w-full h-px my-8 sm:my-12" />

        {/* 👩‍💻 About Me Section */}
        <section className="relative w-full py-8 sm:py-12 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1554px] mx-auto flex flex-col lg:flex-row items-center">
            <div className="flex-1 px-0 lg:px-12 flex flex-col justify-center mb-8 lg:mb-0 text-center lg:text-left">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                About me
              </h2>
              <h3 className="font-['Poppins',Helvetica] font-medium text-black text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
                ML Engineer & UI/UX Designer
              </h3>
              <p className="font-['Poppins',Helvetica] font-normal text-gray-800 text-base sm:text-lg md:text-xl max-w-[734px] mx-auto lg:mx-0 px-2 sm:px-0">
                I’m Mythili, a Machine Learning Engineer and UI/UX Designer who
                loves building human-centered solutions. I enjoy working at the
                intersection of design and intelligence — making technology both
                smart and delightful. Whether it’s deep learning or a deep user
                need, I’m always up for solving meaningful problems.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center mt-8 lg:mt-0">
              <img
                src="/3d_me_2-removebg-preview.png"
                alt="Mythili portrait"
                className="w-72 sm:w-80 md:w-96 lg:w-[400px] h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* 🧠 Tech Stack Section */}
        <section className="w-full bg-neutral-800 py-8 sm:py-10 overflow-hidden">
          <h2 className="text-center text-white text-xl sm:text-2xl font-['Poppins',Helvetica] mb-4 sm:mb-6">
            Tech Stack
          </h2>
          <div className="relative w-full">
            <div className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap justify-center items-center px-4">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="inline-flex items-center justify-center w-20 sm:w-24 h-16 sm:h-16 bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(96,95,95,1)_100%)] rounded-2xl shadow-md flex-shrink-0"
                >
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-9 sm:w-10 h-9 sm:h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
        </section>

        {/* ⚫ Footer */}
        <footer className="w-full bg-black py-4 sm:py-6 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2">
            <img
              src="/copyright.png"
              alt="Copyright icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="font-['Poppins',Helvetica] text-white text-xs sm:text-sm">
              © 2025 Mythili Soundhararajan. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;