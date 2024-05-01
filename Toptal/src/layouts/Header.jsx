import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';
import { useState } from 'react';

export function Header() {
  const [hover, setHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedAnchor, setSelectedAnchor] = useState(null);

  const handleDropdown = () => {
    setHover(!hover);
  };
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAnchorClick = (anchor) => {
    setSelectedAnchor(anchor);
    setIsSidebarOpen(false);
  };

  const handleCloseAnchor = () => {
    setSelectedAnchor(null);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed z-50 top-[66px] left-0 h-screen bg-gray-200 ${
          isSidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 overflow-hidden`}
      >
        {/* Sidebar content */}
        <div className='flex flex-col '>
          <button
            onClick={handleSidebarToggle}
            className='text-2xl absolute right-1'
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500'
            onClick={() => handleAnchorClick('Top 3%')}
          >
            Top 3%
          </a>

          <a href='#' className=' hover:text-blue-500'>
            <button
              className='px-3 hover:border-b-2'
              onMouseEnter={handleDropdown}
              onMouseLeave={handleDropdown}
            >
              <div
                key={2}
                className={` py-5 ${
                  activeIndex !== null && activeIndex !== 2 ? 'opacity-50' : ''
                }`}
                onMouseEnter={() => setActiveIndex(2)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                Hire Talent
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={`size-2 mx-1 ${hover ? 'rotate-180' : 'rotate-0'}`}
                />
              </div>

              <div
                className={`shadow-custom absolute flex-col left-0 z-1 ${
                  hover ? 'flex' : 'hidden'
                }`}
              >
                <div className='flex flex-col items-start bg-white'>
                  <a
                    href=''
                    className=' px-4 py-3 hover:text-blue-700'
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Developers
                  </a>
                  <a
                    href=''
                    className='  px-4 py-3 hover:text-blue-700'
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Designers
                  </a>
                  <a
                    href=''
                    className=' whitespace-nowrap px-4 py-3 hover:text-blue-700'
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Marketing Experts
                  </a>
                  <a
                    href=''
                    className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Product Managers
                  </a>
                  <a
                    href=''
                    className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Project Managers
                  </a>
                  <a
                    href=''
                    className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                    onClick={() => handleAnchorClick('Anchor 2')}
                  >
                    Finance Experts
                  </a>
                </div>
              </div>
            </button>
          </a>

          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('Clients')}
          >
            Clients
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('Blogs')}
          >
            Blogs{' '}
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('About')}
          >
            About
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500 '
            onClick={() => handleAnchorClick('Anchor 3')}
          >
            Why
          </a>
        </div>
      </div>

      <div className=' bg-bgGray relative z-10 h-[66px]'>
        <div className=' px-[5%] flex justify-between text-sm 2xl:justify-center  '>
          <div className='flex justify-center items-center 2xl:mr-[300px]'>
            <img src={logo} className='my-5' alt='logo' width='110px' />

            <nav className='2xl:block xl:block lg:block md:hidden sm:hidden smaller:hidden'>
              <div id='nav-links' className=' px-3 flex items-center '>
                <a
                  key={1}
                  href=''
                  className={`py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 1
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(1)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Top 3%
                </a>

                <button
                  className='px-3 relative hover:border-b-2 hover:border-blue-700'
                  onMouseEnter={handleDropdown}
                  onMouseLeave={handleDropdown}
                >
                  <div
                    key={2}
                    className={` py-5 ${
                      activeIndex !== null && activeIndex !== 2
                        ? 'opacity-50'
                        : ''
                    }`}
                    onMouseEnter={() => setActiveIndex(2)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    Hire Talent
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className={`size-2 mx-1 ${
                        hover ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>

                  <div
                    className={`shadow-custom absolute flex-col left-0 z-1 ${
                      hover ? 'flex' : 'hidden'
                    }`}
                  >
                    <div className='flex flex-col items-start'>
                      <a href='' className=' px-4 py-3 hover:text-blue-700'>
                        Developers
                      </a>
                      <a href='' className='  px-4 py-3 hover:text-blue-700'>
                        Designers
                      </a>
                      <a
                        href=''
                        className=' whitespace-nowrap px-4 py-3 hover:text-blue-700'
                      >
                        Marketing Experts
                      </a>
                      <a
                        href=''
                        className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                      >
                        Product Managers
                      </a>
                      <a
                        href=''
                        className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                      >
                        Project Managers
                      </a>
                      <a
                        href=''
                        className='whitespace-nowrap px-4 py-3 hover:text-blue-700 '
                      >
                        Finance Experts
                      </a>
                    </div>
                  </div>
                </button>

                <a
                  key={3}
                  href=''
                  className={` px-3 py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 3
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(3)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Why
                </a>
                <a
                  key={4}
                  href=''
                  className={`px-3 py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 4
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(4)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Clients
                </a>
                <a
                  key={5}
                  href=''
                  className={`px-3  py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 5
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(5)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  Blog
                </a>
                <a
                  key={6}
                  href=''
                  className={` px-3 py-5 hover:border-b-2 hover:border-blue-700 ${
                    activeIndex !== null && activeIndex !== 6
                      ? 'opacity-50'
                      : ''
                  }`}
                  onMouseEnter={() => setActiveIndex(6)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  About
                </a>
              </div>
            </nav>
          </div>

          <div className='flex justify-center items-center'>
            <button>
              <FontAwesomeIcon
                icon={faBars}
                onClick={handleSidebarToggle}
                className='px-3 py-4 size-7 2xl:hidden xl:hidden lg:hidden md:block sm:block smaller:block'
              />
              <div>
                {selectedAnchor && (
                  <span>
                    {selectedAnchor}
                    <button onClick={handleCloseAnchor}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </span>
                )}
              </div>
            </button>

            <div className='flex items-center align-middle 2xl:block xl:block lg:block md:hidden sm:hidden smaller:hidden'>
              <a href='' className='px-3 py-4 hover:text-blue-500'>
                Apply as a Freelance
              </a>

              <span className='px-3 py-4'>
                <a
                  href=''
                  className='bg-green-400 py-2 px-4 rounded-md text-white hover:bg-green-300'
                >
                  Hire Top Talent
                </a>
              </span>

              <a href='' className='px-3 py-4 hover:text-blue-500'>
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
