import React, { useRef } from 'react';
import Discord from "../../images/discord.jpeg";
import Dev from "../../images/Dev.png";
import Medium from "../../images/Medium.png";
import Quora from "../../images/quora.jpeg";
import Pinterest from "../../images/Pinterest.jpeg";
import Vimeo from "../../images/Vimeo.png";
import Behance from '../../images/Behance.png';
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import AppFooterCopyright from './AppFooterCopyright';

const CopyAddressButton = ({ walletAddress }) => {
  const addressRef = useRef(null);

  const handleCopyClick = () => {
    if (addressRef.current) {
      const textArea = document.createElement('textarea');
      textArea.value = walletAddress;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      window.alert('Address copied to clipboard');
    }
  };

  return (
    <div className="flex items-center">
      <span ref={addressRef} className="break-all mr-2">
        {walletAddress}
      </span>
      <button
        onClick={handleCopyClick}
        className="p-2 rounded-xl bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
      >
        Copy
      </button>
    </div>
  );
};

const WalletAddress = `0xcfdEf8165d722DC56a1FD06923de261B5B9d8626`;

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub className="m-2" />,
    url: 'https://github.com/Devhunter416',
  },
  {
    id: 2,
    icon: <img src={Discord} alt="Discord Logo" width={45} className="m-2" />,
    url: 'https://discord.com/users/taro_taka',
  },
  {
    id: 3,
    icon: <FiLinkedin className="m-2" />,
    url: 'https://www.linkedin.com/in/',
  }
];

const AppFooter = () => {
  return (
    <div className="container mx-auto mt-32">
      {/* Footer social links */}
      <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
        <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-10">
          Let's go social
        </p>
        <ul className="grid grid-cols-2 gap-3 sm:gap-8 md:grid md:grid-cols-4 ml-2">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-xl bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
            >
              <i className="text-xl sm:text-2xl md:text-4xl">
                {link.icon}
              </i>
            </a>
          ))}
        </ul>

        <div className="w-full mt-10 flex flex-col dark:bg-gray-800 opacity-90 bg-gray-100 hover:shadow-2xl border-none items-center p-4 md:p-6 lg:p-12 xl:p-8 md:w-9/12 rounded-xl font-general-medium text-ternary-dark dark:text-ternary-light" >
          <p className="font-semibold font-sans text-indigo-400 mb-2 md:text-xl lg:text-xl shadow-sm sm:text-base xsm:text-base 2xsm:text-base 3xsm:text-base">
            A quick reminder, we are not alergic to coffee please!! But real <code className="dark:text-white text-xl text-indigo-600 ">
              Eth</code> not <code className=' text-indigo-600 text-xl dark:text-white ' >Faucets.</code>
          </p>
          <div className="w-full md:w-9/12 xl:w-2/3 mx-auto mt-6">
            <p className="mb-2 md:mb-4 text-center text-[#999] font-semibold font-sans text-base xsm:text-base 2xsm:text-base 3xsm:base">My wallet address:</p>
            <div className="w-full dark:bg-gray-500 rounded-full bg-gray-200 p-4 md:p-3 2sm:p-4 xsm:p-4 text-center items-center text-gray-800">
              <CopyAddressButton
                walletAddress={WalletAddress}
                //className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl break-all max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <AppFooterCopyright />
    </div>
  );
};

export default AppFooter;