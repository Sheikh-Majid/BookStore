import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="p-4">
        <div className="container mx-auto text-center ">
          <p className="hover:text-black transition-all duration-300 cursor-pointer">
            &copy; 2024 Sheikh Majid. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 ">
            <a
              href="#"
              className="mx-2 hover:text-gray-400  transition-all duration-300 cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="mx-2 hover:text-gray-400  transition-all duration-300 cursor-pointer"
            >
              Terms of Service
            </a>
          </div>
          <div className="mt-4">
            <div className="flex justify-center mt-4 ">
              <a
                href="#"
                className="mx-2 hover:text-gray-400  transition-all duration-300 cursor-pointer"
              >
                Contact us: info@bookstore.com
              </a>
              <span>|</span>
              <a
                href="#"
                className="mx-2 hover:text-gray-400  transition-all duration-300 cursor-pointer"
              >
                +123 456 7890
              </a>
            </div>
            <div className="flex justify-center mt-2">
              <a
                href="#"
                className="mx-2 hover:text-gray-400  transition-all duration-300 cursor-pointer"
              >
                Facebook
              </a>
              <a
                href="#"
                className="mx-2 hover:text-gray-400  transition-all duration-300 cursor-pointer"
              >
                Twitter
              </a>
              <a
                href="#"
                className="mx-2 hover:text-gray-400 transition-all duration-300 cursor-pointer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
