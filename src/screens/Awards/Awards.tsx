import React from "react";
import { Link } from "react-router-dom";

export const Awards = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: "Home", active: false, path: "/" },
    { name: "Projects", active: false, path: "/projects" },
    { name: "Awards", active: true, path: "/awards" },
    { name: "Contact", active: false, path: "/contact" },
  ];

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Best AI Innovation Award",
      organization: "Tech Excellence Summit 2024",
      year: "2024",
      description: "Recognized for developing an innovative machine learning solution that improved healthcare diagnostics accuracy by 35%.",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "Outstanding UI/UX Design",
      organization: "Design Masters Conference",
      year: "2023",
      description: "Awarded for creating an intuitive user interface that enhanced user engagement by 60% in a fintech application.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Design"
    },
    {
      id: 3,
      title: "Computer Vision Excellence",
      organization: "AI Research Institute",
      year: "2023",
      description: "Honored for breakthrough research in real-time object detection systems for autonomous vehicles.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Computer Vision"
    },
    {
      id: 4,
      title: "Young Innovator Award",
      organization: "National Technology Foundation",
      year: "2022",
      description: "Recognized as a promising young talent in the field of artificial intelligence and machine learning.",
      image: "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Innovation"
    },
    {
      id: 5,
      title: "Best Student Project",
      organization: "University Research Symposium",
      year: "2022",
      description: "Awarded for developing a natural language processing system that achieved 98% accuracy in sentiment analysis.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Academic"
    },
    {
      id: 6,
      title: "Data Science Champion",
      organization: "Analytics Excellence Awards",
      year: "2021",
      description: "Recognized for outstanding contribution to predictive analytics in the e-commerce sector.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Data Science"
    }
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full min-h-screen">
      <div className="bg-white overflow-hidden w-full max-w-[1728px] relative">
        {/* Header Section */}
        <section className="relative w-full max-w-[1554px] mx-auto pt-[50px]">
          <div className="relative">
            {/* Navigation Bar */}
            <div className="w-full max-w-[1104px] h-[70px] mx-auto bg-black rounded-[60px] border border-solid border-[#524d4d] flex items-center justify-center px-6">
              {navItems.map((item, index) => (
                <Link
                  key={`nav-${index}`}
                  to={item.path}
                  className={`px-8 py-4 cursor-pointer ${index > 0 ? "ml-8" : ""}`}
                >
                  <div
                    className={`text-[28px] font-['Poppins',Helvetica] ${item.active ? "text-white font-bold" : "text-[#ababab] font-medium"}`}
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
            <Link
              to="/contact"
              className="inline-block bg-black text-white font-['Poppins',Helvetica] font-medium text-[18px] px-8 py-4 rounded-full hover:bg-[#333] transition-colors duration-200"
            >
              Start a Conversation
            </Link>
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