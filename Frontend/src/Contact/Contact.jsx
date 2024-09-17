import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-40 mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="card w-full md:w-1/2 bg-base-100 shadow-xl">
            <div className="card-body dark:bg-slate-800 dark:text-white">
              <h2 className="card-title dark:text-white">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input input-bordered dark:text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered dark:text-black"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24 dark:text-black"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-blue-600 hover:bg-blue-500 text-white">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-24 h-24 mx-auto text-blue-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <p className="mt-4 text-lg">We'd love to hear from you!</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
