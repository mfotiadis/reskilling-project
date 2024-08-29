import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="sticky w-full bg-white border-t border-gray-200 py-8">
      <div className="flex flex-wrap justify-between">

        <div className="flex flex-col justify-center items-start w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl mb-16">Site name</h2>
          <div className="flex space-x-4">
            <FaFacebookF/>
            <FaLinkedinIn/>
            <FaYoutube/>
            <FaInstagram/>
          </div>
        </div>

        <div className="w-full md:w-1/4 flex flex-wrap justify-end">
        {/* spacer */}
        </div>


        <div className="w-full md:w-2/4 flex flex-wrap justify-end">
          <div className="w-full sm:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Topic</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Topic</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Topic</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600">Page</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
