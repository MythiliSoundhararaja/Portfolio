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
    { src: "/image-5.png", alt: "Python" },
    { src: "/image-6.png", alt: "JavaScript" },
    { src: "/image-7.png", alt: "React" },
    { src: "/image-8.png", alt: "TensorFlow" },
    { src: "/image-9.png", alt: "PyTorch" },
    { src: "/material-icon-theme-pytorch.svg", alt: "PyTorch" },
    { src: "/material-icon-theme-figma.svg", alt: "Figma" },
    { src: "/mdi-github.svg", alt: "GitHub" },
    { src: "/simple-icons-n8n.svg", alt: "n8n" },
    { src: "/devicon-googlecolab.svg", alt: "Google Colab" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1728px] relative">
        {/* Hero Section */}
        <section className="relative w-full max-w-[1554px] mx-auto pt-[50px]">
          <div className="relative">
            {/* Navigation Bar */}
            <div className="w-full max-w-[900px] h-[56px] mx-auto bg-black rounded-[48px] border border-solid border-[#524d4d] flex items-center justify-center px-5">
              {navItems.map((item, index) => (
                <Link
                  to={item.path}
                  key={`nav-${index}`}
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

            {/* Hero Content */}
            <div className="flex mt-16">
              <div className="flex-1 flex flex-col justify-center mt-32">
                <div className="font-['Poppins',Helvetica] font-normal text-black text-[72px]">
                  Hi I'm
                </div>
                <div className="font-['Poppins',Helvetica] font-normal text-black text-[200px] leading-none -mt-4">
                  Mythili
                </div>
                <div className="max-w-[513px] font-['Poppins',Helvetica] font-normal text-black text-[23px] mt-4">
                  Crafting seamless experiences at the crossroads of machine
                  learning and design.
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="flex justify-center items-center">
                  <img
                    className="w-[800px] h-[800px] object-cover"
                    alt="Mythili 3D Avatar"
                    src="/3d_main-removebg-preview.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="w-full h-px my-12" />

        {/* What I Do Section */}
        <section className="w-full max-w-[1554px] mx-auto py-12">
          <div className="mb-16">
            <h2 className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-2xl text-left">
              What I do
            </h2>
            <h3 className="font-['Poppins',Helvetica] font-semibold text-[#070707] text-4xl text-left mt-2">
              I'm Specialized in
            </h3>
          </div>

          <div className="flex justify-between gap-8 mt-12">
            {specializations.map((spec, index) => (
              <Card key={`spec-${index}`} className="border-none shadow-none">
                <CardContent className="flex flex-col items-center pt-6">
                  <img
                    className="w-[106px] h-[106px] object-cover mb-6"
                    alt={spec.title}
                    src={spec.imageSrc}
                  />
                  <h4 className="font-['Poppins',Helvetica] font-semibold text-black text-3xl text-center mb-4">
                    {spec.title}
                  </h4>
                  <p className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-lg text-center">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="w-full h-px my-12" />

        {/* About Me Section */}
        <section className="relative w-full py-12">
          <div className="max-w-[1554px] mx-auto flex">
            <div className="flex-1 px-12 flex flex-col justify-center">
              <h2 className="font-['Poppins',Helvetica] font-semibold text-[#6d6d6d] text-2xl mb-4">
                About me
              </h2>
              <h3 className="font-['Poppins',Helvetica] font-medium text-black text-4xl mb-8 flex items-center">
                ML Engine
                <span className="opacity-[0.76] text-[#2f2f2f] inline-block transform scale-x-[-1]">
                  e
                </span>
                r & UI/UX Designer
              </h3>
              <p className="font-['Poppins',Helvetica] font-normal text-black text-xl max-w-[734px]">
                I'm Mythili, a Machine Learning Engineer and UI/UX Designer who
                loves building human-centered solutions. I enjoy working at the
                intersection of design and intelligence — making technology both
                smart and delightful. Whether it's deep learning or a deep user
                need, I'm always up for solving meaningful problems.
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <img
                className="w-[492px] h-[725px] object-cover"
                alt="Mythili portrait"
                src="/3d_me_2-removebg-preview.png"
              />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full bg-neutral-800 py-8">
          <img
            className="w-full max-w-[1718px] h-[19px] mx-auto"
            alt="Above decoration"
            src="/above.png"
          />

          <div className="flex justify-center gap-6 my-8">
            {techStack.map((tech, index) => (
              <div
                key={`tech-${index}`}
                className="w-[163px] h-[109px] bg-[linear-gradient(180deg,rgba(217,217,217,1)_0%,rgba(96,95,95,1)_100%)] flex items-center justify-center rounded-lg"
              >
                <img
                  className="w-[76px] h-[76px] object-contain"
                  alt={tech.alt}
                  src={tech.src}
                />
              </div>
            ))}
          </div>

          <img
            className="w-full max-w-[1718px] h-[19px] mx-auto"
            alt="Below decoration"
            src="/below.png"
          />
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
              <span className="font-['Poppins',Helvetica] font-medium text-white text-xl">
                <span className="font-['Poppins',Helvetica] font-medium text-white text-base">
                  +91 8939897205
                </span>
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
              <span className="font-['Poppins',Helvetica] font-light text-white text-lg">
                <span className="font-['Poppins',Helvetica] font-light text-white text-sm">
                  2025 by Mythili
                </span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};