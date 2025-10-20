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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Get values safely
    const from_name = (form.elements.namedItem("from_name") as HTMLInputElement)?.value;
    const reply_to = (form.elements.namedItem("reply_to") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    if (!from_name || !reply_to || !message) {
      alert("❌ Please fill in all fields.");
      return;
    }

    // Send auto-reply to sender
    emailjs
      .sendForm(
        "service_c0r8crc",
        "template_dkr80w9",
        form,
        "Imw3EVmVLEQoOrmFp"
      )
      .then(() => {
        // Send copy to yourself
        return emailjs.send(
          "service_c0r8crc",
          "template_gdjh1wl",
          {
            from_name,
            reply_to,
            message,
          },
          "Imw3EVmVLEQoOrmFp"
        );
      })
      .then(() => {
        alert("✅ Message sent successfully! You’ll hear back from me soon 💌");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("❌ Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen px-4 sm:px-6">
      {/* Navigation Bar */}
      <div className="w-full max-w-[850px] mx-auto bg-black rounded-[60px] border border-solid border-[#524d4d] flex flex-wrap items-center justify-center p-2 sm:p-3 mt-8">
        {navItems.map((item, index) => (
          <Link
            to={item.path}
            key={`nav-${index}`}
            className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 ${
              index > 0 ? "mt-2 sm:mt-0 sm:ml-2 md:ml-4" : ""
            } w-full sm:w-auto text-center`}
          >
            <div
              className={`text-base sm:text-lg md:text-xl font-['Poppins',Helvetica] ${
                item.active
                  ? "text-white font-bold"
                  : "text-[#ababab] font-medium hover:text-white transition"
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>

      {/* Main Contact Section */}
      <section className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 py-12 sm:py-16 px-4 sm:px-6">
        {/* Left: Say Hello */}
        <div className="flex-1 w-full">
          <div className="bg-[#F8F7F5] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-sm">
            <img
              src="/3d_stand.png"
              alt="Mythili Avatar"
              className="w-24 sm:w-28 h-24 sm:h-28 object-contain"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold font-['Poppins',Helvetica] mb-2">
                Say Hello!
              </h2>
              <p className="text-[#444] text-base sm:text-lg font-['Poppins',Helvetica] leading-relaxed">
                Got a cool project, a random idea, or just want to say hi? Don’t
                be shy — I don’t byte (unless it’s Python). 🐍
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-semibold text-base sm:text-lg">Email</p>
            <p className="text-[#444] text-base sm:text-lg">mythilisoundhararajan@gmail.com</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 w-full">
          <h2 className="text-xl sm:text-2xl font-bold font-['Poppins',Helvetica] mb-4 sm:mb-6">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-black text-base sm:text-lg"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-black text-base sm:text-lg"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full px-4 py-3 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-black text-base sm:text-lg resize-none"
            />
            <button
              type="submit"
              className="bg-black text-white text-base sm:text-lg px-6 py-3 rounded-full hover:bg-[#333] transition-all duration-200 w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 mt-8 sm:mt-12 pt-6 pb-4 text-center text-sm sm:text-base font-['Poppins',Helvetica] text-gray-600 px-4">
        <p>
          Designed by <span className="font-semibold text-black">Mythili</span> — yes,
          all of it.{" "}
          <span className="italic text-gray-500">(she think she slayed)</span>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-4">
          <a href="mailto:mythilisoundhararajan@gmail.com">
            <img src="/email_logo.png" alt="Email" className="w-8 h-8 object-contain" />
          </a>
          <a
            href="https://www.linkedin.com/in/mythilisoundhararajan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 object-contain" />
          </a>
          <span className="text-black">© 2025 by Mythili</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;