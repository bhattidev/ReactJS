import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/img/logo.png';

export function Header() {
  return (
    <>
      <div className=' bg-bgGray relative z-10 overflow-hidden'>
        <div className=' px- flex justify-between align-baseline h-[64px] px-10 py-3'>
          <div className='flex justify-between'>
            <img src={logo} className='px-3 pb-1' alt='logo' width='100px' />

            <div id='nav-links' className=' px-3 mt-2'>
              <a href='' className='px-3 py-7'>
                Top 3%
              </a>
              <a href='' className='px-3 py-7'>
                Hire Talent
                <FontAwesomeIcon icon={faCoffee} />
                <div id='sub-nav-links'>
                  <a href=''>Developers</a>
                  <a href=''>Designers</a>
                  <a href=''>Marketing Experts</a>
                  <a href=''>Product Managers</a>
                  <a href=''>Project Managers</a>
                  <a href=''>Finance Experts</a>
                </div>
              </a>
              <a href='' className='px-3 py-7'>
                Why
              </a>
              <a href='' className='px-3 py-7'>
                Clients
              </a>
              <a href='' className='px-3 py-7'>
                Blog
              </a>
              <a href='' className='px-3 py-7'>
                About
              </a>
            </div>
          </div>

          <div className='mt-2'>
            <a href='' className='p-3 py-7'>
              Apply as a Freelance
            </a>
            <span>
              <a href='' className='p-3 py-7'>
                Hire Top Talent
              </a>
            </span>
            <a href='' className='p-3 py-7'>
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
