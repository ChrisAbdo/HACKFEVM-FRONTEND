import Image from 'next/image';
import { useState, useEffect } from 'react';
import Web3 from 'web3';
const Navbar = ({ Web3Handler, account }) => {
  // make the navbar fade into white when scrolled down at least 1 pixel
  const [scroll, setScroll] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
      //   make the navbar fade into white when scrolled down at least 1 pixel
      const background = document.getElementById('navbar');
      background.classList.add('bg-white');
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.setAttribute('data-theme', 'light');
        navbar.style.transition = 'all 0.2s ease';
      } else {
        navbar.removeAttribute('data-theme');
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="navbar" className="navbar sticky top-0 z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Image
          className="hover:animate-spin cursor-pointer"
          src="/sun.png"
          width={50}
          height={50}
          alt="yo"
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </div>

      <div className="navbar-end">
        <div className="flex space-x-8 mr-8 text-lg">
          <a
            href="/create"
            id="create"
            className="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300
         
                active:after:content-[''] active:after:absolute active:after:block active:after:w-full active:after:h-[1px]"
          >
            Create
          </a>
          <a
            href="/assign"
            className="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            Assign
          </a>
          <a
            href="/"
            className="hidden md:block relative before:content-[''] before:absolute before:block before:w-full before:h-[1px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            Claim
          </a>
        </div>
        <button
          onClick={() => {
            Web3Handler();
          }}
          className="relative inline-block px-4 py-2 font-medium group "
        >
          <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
          {account ? (
            <span className="relative text-black">
              {account.slice(0, 6) + '...' + account.slice(-4)}
            </span>
          ) : (
            <span className="relative text-black">Connect Wallet</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
