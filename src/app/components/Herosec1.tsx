import React from 'react'
import Image from 'next/image'

export const Herosec1=()=>{
    return(
       
        <section className=" body-font bg-white relative w-full min-h-screen sm:h-[700px] mt-20">

            <div className="absolute inset-0">
          <Image
            src="/image/bg_house.jpg"
            width={400}
            height={400}
            alt="banner"
            className=" w-full h-full opacity-20"
          />
        </div>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl mb-4  text-[#044E83] font-extrabold text-6xl tracking-wider">Governor Sindh
    </h1>
    <h2 className='title-font sm:text-4xl mb-4 text-[#044E83] text-5xl tracking-wider'>Kamran Khan Tessori</h2>
    <h2 className='title-font sm:text-4xl mb-4 text-cyan-500 text-4xl font-extrabold pb-4 w-[80%]'>Certified Cloud Applied Generative AI Engineer (GenEng)</h2>
      <p className="mb-8  text-[#044E83] font-extrabold text-xl ">Earn up to $5,000 / month</p>
      <p className="mb-8  text-[#044E83] font-extrabold text-2xl w-[70%]">Now admissions are open in Hyderabad</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#044E83] border-0 py-6 px-6 focus:outline-none hover:bg-[#254155] hover:animate-bounce rounded text-lg">Apply Now</button>
        <div className="ml-4 inline-flex text-[#044E83] font-extrabold  border-0 py-2 px-6 focus:outline-none  rounded text-lg">562,143<br></br>Accepted Applications</div>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full  w-full xl:w-1/3 md:w-1/2">
      <img className="object-cover object-center rounded h-[39rem] w-full " alt="hero" src="/image/Picture1.png"/>
    </div>
  </div>
</section>
    )
}

export default Herosec1