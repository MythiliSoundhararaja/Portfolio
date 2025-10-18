import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Home = (): JSX.Element => {
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

  // Tech stack images
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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1728px] relative">
        {/* Navigation Bar */}
        <nav className="w-full flex justify-center pt-[50px] px-4">
          <div className="w-full max-w-[850px] h-auto md:h-[60px] bg-black rounded-[60px] border border-solid border-[#524d4d] flex flex-wrap md:flex-nowrap items-center justify-center px-4 sm:px-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-4 sm:px-6 md:px-8 py-3 cursor-pointer ${
                  index > 0 ? "ml-0 md:ml-8" : ""
                }`}
              >
                <div
                  className={`text-[18px] sm:text-[22px] md:text-[28px] font-['Poppins',Helvetica] ${
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

        {/* Hero Section */}
        <section className="relative w-full max-w-[1554px] mx-auto pt-[50px] px-4 md:px-8">
          <div className="flex flex-col md:flex-row mt-16 md:mt-24">
            <div className="flex-1 flex flex-col justify-center mt-8 md:mt-32 md:ml-32">
              <div className="font-['Poppins',Helvetica] font-normal text-black text-[36px] sm:text-[50px]">
                Hi I'm
              </div>
              <div className="font-['Poppins',Helvetica] font-normal text-black text-[64px] sm:text-[100px] leading-tight">
                Mythili
              </div>
              <div className="max-w-[513px] font-['Poppins',Helvetica] font-normal text-black text-[18px] sm:text-[23px] mt-4">
                Crafting seamless experiences at the crossroads of machine
                learning and design.
              </div>
            </div>
            <div className="flex-1 relative flex justify-center items-center mt-8 md:mt-0">
              <img
                className="w-[260px] sm:w-[340px] md:w-[440px] h-auto object-cover"
                alt="Mythili 3D Avatar"
                src="/3d_main-removebg-preview.png"
              />
            </div>
          </div>
        </section>

        <Separator className="w-full h-px my-12" />

        {/* What I Do Section */}
        <section className="w-full max-w-[1554px] mx-auto py-12 px-4 md:px-8">
          <div className="mb-12 sm:mb-16 ml-0 md:ml-20 text-center md:text-left">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-xl sm:text-2xl">
              What I do
            </h2>
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#070707] text-3xl sm:text-4xl mt-2">
              I'm Specialized in
            </h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 mt-12">
            {specializations.map((spec, index) => (
              <Card
                key={`spec-${index}`}
                className="border-none shadow-none w-full max-w-[340px]"
              >
                <CardContent className="flex flex-col items-center pt-6">
                  <img
                    className="w-[86px] sm:w-[106px] h-[86px] sm:h-[106px] object-cover mb-6"
                    alt={spec.title}
                    src={spec.imageSrc}
                  />
                  <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-2xl sm:text-3xl text-center mb-4">
                    {spec.title}
                  </h4>
                  <p className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-base sm:text-lg text-center">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="w-full h-px my-12" />

        {/* About Me Section */}
        <section className="relative w-full py-12 px-4 md:px-8">
          <div className="max-w-[1554px] mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-1 px-0 md:px-12 flex flex-col justify-center mb-8 md:mb-0">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-2xl md:text-3xl mb-4 text-center md:text-left">
                About me
              </h2>
              <h3 className="font-['Poppins',Helvetica] font-medium text-black text-3xl md:text-4xl mb-8 flex justify-center md:justify-start items-center">
                ML Engine
                <span className="opacity-[0.76] text-[#2f2f2f] inline-block transform scale-x-[-1]">
                  e
                </span>
                r & UI/UX Designer
              </h3>
              <p className="font-['Poppins',Helvetica] font-normal text-black text-base sm:text-lg max-w-[734px] text-center md:text-left">
                I'm Mythili, a Machine Learning Engineer and UI/UX Designer who
                loves building human-centered solutions. I enjoy working at the
                intersection of design and intelligence — making technology both
                smart and delightful. Whether it's deep learning or a deep user
                need, I'm always up for solving meaningful problems.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                className="w-[280px] sm:w-[350px] md:w-[400px] h-auto object-cover"
                alt="Mythili portrait"
                src="/3d_me_2-removebg-preview.png"
              />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full bg-neutral-800 py-8 overflow-hidden">
          <h2 className="text-center text-white text-2xl font-['Poppins',Helvetica] mb-6">
            Tech Stack
          </h2>

          <div className="relative w-full">
            <div className="flex gap-4 animate-scroll whitespace-nowrap justify-center items-center">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`tech-${index}`}
                  className="inline-flex items-center justify-center w-[80px] sm:w-[90px] h-[60px] sm:h-[65px] bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(96,95,95,1)_100%)] rounded-2xl shadow-md"
                >
                  <img
                    className="w-[35px] sm:w-[40px] h-[35px] sm:h-[40px] object-contain"
                    alt={tech.alt}
                    src={tech.src}
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
                display: flex;
                animation: scroll 45s linear infinite;
              }

              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}
          </style>
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
              © 2025 Mythili Soundhararajan. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
