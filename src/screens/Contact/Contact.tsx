import React from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

export const Contact = (): JSX.Element => {
  const navItems = [
    { name: "Home", active: false, path: "/" },
    { name: "Projects", active: false, path: "/projects" },
    { name: "Awards", active: false, path: "/awards" },
    { name: "Contact", active: true, path: "/contact" },
  ];

  // 📧 EmailJS form handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Send auto-reply to the sender
    emailjs
      .sendForm(
        "service_c0r8crc",   // EmailJS service ID
        "template_dkr80w9",  // auto-reply template ID
        form,
        "Imw3EVmVLEQoOrmFp"  // public key
      )
      .then(() => {
        // Send a copy to yourself
        emailjs.send(
          "service_c0r8crc",
          "template_gdjh1wl",
          {
            from_name: form.from_name.value,
            reply_to: form.reply_to.value,
            message: form.message.value,
          },
          "Imw3EVmVLEQoOrmFp"
        );

        alert("✅ Message sent successfully! You’ll hear back from me soon 💌");
        form.reset();
      })
      .catch((error) => alert("❌ Failed to send message: " + error.text));
  };

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      {/* Navigation Bar */}
      <div className="w-full max-w-[850px] h-[60px] mx-auto bg-black rounded-[60px] border border-solid border-[#524d4d] flex items-center justify-center px-6 mt-8">
        {navItems.map((item, index) => (
          <Link
            to={item.path}
            key={`nav-${index}`}
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

      {/* Main Contact Section */}
      <section className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-10 py-16 px-8">
        {/* Left: Say Hello */}
        <div className="flex-1">
          <div className="bg-[#F8F7F5] rounded-2xl p-8 flex items-center gap-6 shadow-sm">
            {/* Avatar */}
            <img
              src="/3d_stand.png"
              alt="Mythili Avatar"
              className="w-[110px] h-[110px] object-contain"
            />

            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-bold font-['Poppins',Helvetica] mb-2">
                Say Hello!
              </h2>
              <p className="text-[#444] text-lg font-['Poppins',Helvetica] leading-relaxed mb-4">
                Got a cool project, a random idea, or just want to say hi? Don’t
                be shy — I don’t byte (unless it’s Python). 🐍
              </p>
            </div>
          </div>

          {/* Contact Info Below */}
            {/* <div>
              <p className="font-semibold">Phone</p>
              <p className="text-[#444]">+91 8939897205</p>
            </div> */}
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-[#444]">mythilisoundhararajan@gmail.com</p>
            </div>
        
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold font-['Poppins',Helvetica] mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-black text-lg"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-black text-lg"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-black text-lg resize-none"
            />
            <button
              type="submit"
              className="bg-black text-white text-lg px-6 py-3 rounded-full hover:bg-[#333] transition-all duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 mt-12 pt-6 pb-4 text-center text-sm font-['Poppins',Helvetica] text-gray-600">
        <p>
          Designed by <span className="font-semibold text-black">Mythili</span> — yes,
          all of it.{" "}
          <span className="italic text-gray-500">(she think she slayed)</span>
        </p>

        <div className="flex justify-center items-center gap-6 mt-4">

          <a
            href="mailto:mythilisoundhararajan@gmail.com"
            className="text-black text-base"
          >
            <img
              src="/email_logo.png"
              alt="Email"
              className="w-8 h-8 object-contain"
            />
            
          </a>

          <a
            href="https://www.linkedin.com/in/mythilisoundhararajan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img
              src="public\linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 object-contain"
            />  
          </a>

          <span className="text-black text-base">© 2025 by Mythili</span>
        </div>
      </footer>
    </div>
  );
};
