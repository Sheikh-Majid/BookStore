import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="max-w-screen-2xl container mx-auto md:px-20 px-4  mt-40 mb-10">
        <h1 className="text-3xl font-bold text-center mb-8">
          About Books Store
        </h1>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="card w-full md:w-1/2 bg-base-100 shadow-xl dark:bg-slate-800 dark:text-white">
            <div className="card-body">
              <h2 className="card-title">Our Story</h2>
              <p>
                Welcome to Books Store, a passion project brought to life by
                Sheikh Majid. As a lifelong book lover and advocate for
                knowledge, Sheikh Majid established this bookstore with a vision
                to create a haven for readers of all ages and interests.
              </p>
              <p className="mt-4">
                Our journey began in 2020, amidst global challenges, with a
                simple yet powerful mission: to connect people with the
                transformative power of books. We believe that every book has
                the potential to open minds, spark imagination, and change
                lives.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body dark:bg-slate-800 dark:text-white">
                <h2 className="card-title">What We Offer</h2>
                <p>
                  At Books Store, we pride ourselves on our carefully curated
                  selection of books spanning various genres and topics. From
                  contemporary fiction to classic literature, from academic
                  texts to children's picture books, we strive to cater to
                  diverse reading preferences and educational needs.
                </p>
                <p className="mt-4">
                  Our bookstore is more than just a retail space; it's a
                  community hub where ideas are exchanged, stories are shared,
                  and friendships are forged over a shared love of reading. We
                  regularly host author events, book clubs, and reading sessions
                  to foster a vibrant literary community.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl mt-8">
              <div className="card-body dark:bg-slate-800 dark:text-white">
                <h2 className="card-title">Visit Us</h2>
                <p>123 Literature Lane, Noida, BT 12345</p>
                <p>Monday - Saturday: 9AM - 8PM</p>
                <p>Sunday: 10AM - 6PM</p>
                <p className="mt-4">
                  Whether you're seeking your next great read, looking for a
                  thoughtful gift, or simply want to browse our shelves, we
                  welcome you to Majid's Books. Let's embark on literary
                  adventures together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
