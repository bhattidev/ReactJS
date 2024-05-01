import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
function Practice() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedAnchor, setSelectedAnchor] = useState(null);

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
    <div>
      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 h-screen bg-gray-200 p-4 ${
          isSidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 overflow-hidden`}
      >
        {/* Sidebar content */}
        <div className='flex flex-col'>
          <button onClick={handleSidebarToggle} className='text-2xl mr-auto'>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500'
            onClick={() => handleAnchorClick('Anchor 1')}
          >
            Anchor 1
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500'
            onClick={() => handleAnchorClick('Anchor 2')}
          >
            Anchor 2
          </a>
          <a
            href='#'
            className='py-2 px-4 my-2 hover:text-blue-500'
            onClick={() => handleAnchorClick('Anchor 3')}
          >
            Anchor 3
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className='ml-64'>
        {/* Navbar */}
        <nav className='bg-gray-300 p-4 flex justify-between'>
          <button onClick={handleSidebarToggle} className='text-2xl'>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div>
            <span className='mr-4'>Main Content</span>
            {selectedAnchor && (
              <span>
                {selectedAnchor}
                <button onClick={handleCloseAnchor}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </span>
            )}
          </div>
        </nav>

        {/* Rest of the page content */}
        <div className='p-4'>{/* Your main content here */}</div>
      </div>
    </div>
  );
}
export default Practice;
