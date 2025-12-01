import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfhibff",
        "template_uph7x1n",
        form.current,
        "Dt7zK3ni6FTLeBe9t"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <>
      <div
        className="certification-container c-section"
        style={{ overflow: "hidden" }}
      >
        <div className="edu-container exp-card">
          <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="lg:w-1/3 md:w-1/2 bg-blend-color-burn flex flex-col md:ml-auto w-full md:py-0 mt-0 md:mt-0"
            >
              <h2
                className="text-lg mb-1 font-medium title-font title"
                style={{ color: "#64FFDA" }}
              >
                Contact Me
              </h2>
              <div className="relative mb-4">
                <label for="name" className="lead mb-2 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="lead mb-2 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="message" className="lead mb-2 text-sm text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
