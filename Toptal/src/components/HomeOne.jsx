import Slider from './Slider';

function HomeOne() {
  return (
    <>
      <div className='bg-bgGray w-full z-0 py-24 2xl:pb-32'>
        <div className='m-[5%] flex flex-col lg:flex-row 2xl:justify-center'>
          <div className='mb-5 flex flex-col justify-center items-center lg:w-1/2 xl:w-1/2 2xl:w-1/3'>
            <h1 className=' text-5xl text-center leading-normal font-medium text-gray-800 lg:text-left'>
              Hire the{' '}
              <a href='#' className='border-b-2 border-black'>
                Top 3%
              </a>{' '}
              of Freelance Talent
              <sup>®</sup>
            </h1>
            <p className='mt-5 text-center mb-11 text-gray-500 lg:text-left'>
              Toptal is an exclusive network of the top freelance software
              developers, designers, finance experts, product managers, and
              project managers in the world. Top companies hire Toptal
              freelancers for their most important projects.
            </p>

            <a className='bg-green-400 px-11 py-4 my-5 w-fit text-white text-center text-xl font-bold'>
              Hire Top Talent
            </a>
          </div>
          <Slider className='lg:w-1/2 xl:w-1/2 2xl:w-2/3' />
        </div>
      </div>
    </>
  );
}

export default HomeOne;
