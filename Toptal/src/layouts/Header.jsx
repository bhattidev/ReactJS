import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';

export function Header() {
  return (
    <>
      <div className=' bg-bgGray relative z-10 h-[64px] w-full'>
        <div className=' px-[5%]'>
          <div className='flex'>
            <img src={logo} className='my-4' alt='logo' width='100px' />

            <nav>
              <div id='nav-links' className=' px-3'>
                <a href='' className='px-3 py-4'>
                  Top 3%
                </a>

                <a href='' className='px-3 py-5 relative' id='dropdown'>
                  Hire Talent
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className=' size-2 px-1'
                  />
                  <div
                    id='dropdown-list'
                    className='flex bg-white left-0 mt-5 absolute'
                  >
                    <a href=''>Developers</a>
                    <a href=''>Designers</a>
                    <a href=''>Marketing Experts</a>
                    <a href=''>Product Managers</a>
                    <a href=''>Project Managers</a>
                    <a href=''>Finance Experts</a>
                  </div>
                </a>

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

          <div className='float-end flex align-baseline'>
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
