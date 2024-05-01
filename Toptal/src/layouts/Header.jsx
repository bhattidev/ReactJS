import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';
import { useState } from 'react';

export function Header() {
  const [open, setOpen] = useState(false);

  const handleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className=' bg-bgGray relative z-10 h-[64px]'>
        <div className=' px-[5%] flex justify-between'>
          <div className='flex'>
            <img src={logo} className='my-4' alt='logo' width='100px' />

            <nav>
              <div id='nav-links' className=' px-3'>
                <a href='' className=' py-4'>
                  Top 3%
                </a>

                <button
                  className='px-3 py-5 relative'
                  onMouseEnter={handleDropdown}
                  onMouseLeave={handleDropdown}
                >
                  Hire Talent
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className=' size-2 px-1'
                  />
                  <div
                    className={`shadow-custom mt-5 absolute flex-col left-0 z-1 ${
                      open ? 'flex' : 'hidden'
                    }`}
                  >
                    <div className='flex flex-col items-start'>
                      <a href='' className=' px-4 py-3'>
                        Developers
                      </a>
                      <a href='' className='  px-4 py-3'>
                        Designers
                      </a>
                      <a href='' className=' whitespace-nowrap px-4 py-3'>
                        Marketing Experts
                      </a>
                      <a href='' className='whitespace-nowrap px-4 py-3'>
                        Product Managers
                      </a>
                      <a href='' className='whitespace-nowrap px-4 py-3'>
                        Project Managers
                      </a>
                      <a href='' className='whitespace-nowrap px-4 py-3'>
                        Finance Experts
                      </a>
                    </div>
                  </div>
                </button>

                <a href='' className='px-3 py-5'>
                  Why
                </a>
                <a href='' className='px-3 py-5'>
                  Clients
                </a>
                <a href='' className='px-3 py-5'>
                  Blog
                </a>
                <a href='' className='px-3 py-5'>
                  About
                </a>
              </div>
            </nav>
          </div>

          <div className='flex'>
            <a href='' className=''>
              Apply as a Freelance
            </a>
            <span>
              <a href='' className=''>
                Hire Top Talent
              </a>
            </span>
            <a href='' className=''>
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
