import React from "react";
import Image from "next/image";

export const Herosec2 = () => {
  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-[#044E83]">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur
          Developing Billion-Dollar Valued Developers and Solopreneurs
          </h1>
          <p className="lg:w-full w-full text-start text-xl tracking-wider pt-5 text-zinc-800">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained in
          this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This program
          has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
           other team members.
          </p>
        </div>
        <div className="flex flex-wrap  -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="w-full h-full items-center justify-center rounded-full  mb-4">
              <Image
                src={require("../../../public/image/picture2.jpg")}
                alt={"hero2"}
                className="rounded-[8px] w-full h-full object-cover shadow-xl  shadow-zinc-700 "
              ></Image>
            </div>
          </div>
        
        
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="w-full h-full items-center justify-center rounded-full  mb-4">
              <Image
                src={require("../../../public/image/picture3.jpg")}
                alt={"hero3"}
                className="rounded-[8px] w-full h-full object-cover shadow-xl  shadow-zinc-700 "
              ></Image>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="w-full h-full items-center justify-center rounded-full  mb-4">
              <Image
                src={require("../../../public/image/picture4.jpg")}
                alt={"hero4"}
                className="rounded-[8px] w-full h-full object-cover shadow-xl  shadow-zinc-700 "
              ></Image>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Herosec2;
