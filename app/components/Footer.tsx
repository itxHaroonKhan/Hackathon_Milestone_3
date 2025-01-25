import React from 'react';

const Footer = () => {
  return (
    <div>
      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="w-full">
  <footer className="bg-blueGray-100">
    <div className="container mx-auto px-4">
      <div className="items-center xl:justify-between flex flex-wrap -mx-4">
        <div className="px-4 relative xl:w-6/12 w-full sm:w-full">
          <div className="text-center xl:text-left py-6 text-sm text-blueGray-500">
            Copyright ©  2025
            <a
              href="/"
              target="_blank"
              className="font-semibold ml-1"
            >
              Haroon Rasheed
            </a>
            . All rights reserved.
          </div>
        </div>
        <div className="px-4 relative xl:w-6/12 w-full sm:w-full">
          <ul className="justify-center xl:justify-end mx-auto flex flex-wrap list-none pl-0 mb-0">
            <li>
              <a
                href="/"
                target="_blank"
                className="text-sm block px-4 bg-transparent no-underline text-blueGray-500 hover:text-blueGray-700 py-4 md:py-6 mx-auto"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                className="text-sm block px-4 bg-transparent no-underline text-blueGray-500 hover:text-blueGray-700 py-4 md:py-6 mx-auto"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                className="text-sm block px-4 bg-transparent no-underline text-blueGray-500 hover:text-blueGray-700 py-4 md:py-6 mx-auto"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>

    </div>
  );
}

export default Footer;
