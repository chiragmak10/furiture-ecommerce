import { FC, ReactElement } from "react";

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="bg-purple-200 py-12 h-60 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="footer-column">
            <h3 className="text-purple-800 font-semibold text-lg">Hekto</h3>
            <p className="text-gray-500 mt-2">Email address field</p>
          </div>
          <div className="footer-column">
            <h3 className="text-purple-800 font-semibold text-lg">
              Categories
            </h3>
            <ul className="mt-2">
              <li className="text-gray-500">Customer Care</li>
              <li className="text-gray-500">Laptops & Computers</li>
              <li className="text-gray-500">My Account</li>
              <li className="text-gray-500">Blog</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="text-purple-800 font-semibold text-lg">
              Enter Email Address
            </h3>
            <button className="bg-purple-800 text-white px-4 py-2 rounded-md mt-2">
              Sign Up
            </button>
          </div>
          <div className="footer-column">
            <h3 className="text-purple-800 font-semibold text-lg">
              Contact Info
            </h3>
            <p className="text-gray-500 mt-2">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
