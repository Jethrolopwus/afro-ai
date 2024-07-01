import Image from 'next/image'
import product1 from "@/public/assets/images/product1.png"
import product2 from "@/public/assets/images/product2.png"
import arrow from "@/public/assets/images/arrowUp.png"
import star from "@/public/assets/images/star.png"

const Products = () => {
  return (
    <div className=''>
      <div className='w-full min-h-screen px-4 md:px-8 lg:px-16 py-8'>
        <div className='text-center md:text-left'>
          <button className='px-6 py-1 rounded-md border-2 font-thin text-primary-50 my-10'>
            PRODUCTS
          </button>
          <div className='flex flex-col md:flex-row gap-4 md:gap-2'>
            <h2 className='text-primary-50 text-3xl md:text-6xl w-full md:w-[70%] font-inter'>
              EXPERIENCE THE POWER OF AFRO INTELLIGENCE
            </h2>
            <span className='mt-4 md:mt-0'>
              <Image src={star} alt=''width={60} />
            </span>
          </div>
          <hr className=' mt-4 opacity-50' />
        </div>
        <div className='flex flex-col md:flex-row justify-around mt-12 h-auto gap-3 '>
          <div className='w-full md:w-auto cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out'>
            <Image src={product1} alt='' width={800}  className='w-full md:w-auto ' />
            <h2 className='py-2 flex justify-between items-center text-xl md:text-2xl font-inter bg-black text-primary-50 px-6'>
              AI Assistant
              <span>
                <Image src={arrow} alt='' className='bg-black border-2 rounded-xl px-2 py-1 border-slate-300' />
              </span>
            </h2>
          </div>
          <div className='w-full md:w-auto cursor-pointer shadow-2xl hover:scale-110 transform transition-transform duration-500 ease-in-out'>
            <Image src={product2} alt='' width={800}  className='w-full md:w-auto' />
            <h2 className='py-2 flex justify-between items-center text-xl md:text-2xl font-inter bg-black text-primary-50 px-6'>
              Campus Genie
              <span>
                <Image src={arrow} alt='' className='bg-black border-2 rounded-xl px-2 py-1 border-slate-300' />
              </span>
            </h2>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between w-full  h-auto md:h-[200px] gap-8 '>
          <p className='w-full md:w-1/2 text-lg md:text-xl px-4 md:px-8 md:py-8 font-inter text-primary-50'>
            Empowering Africa&apos;s Technology revolution with Afro Intelligence
          </p>
          <p className='w-full md:w-1/2 text-md font-inter md:py-8 text-primary-50'>
            Afro Intelligence is dedicated to revolutionizing Africa&apos;s tech scene with innovative AI solutions.
            By understanding local nuances, we foster inclusive development and empower communities to thrive.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Products
