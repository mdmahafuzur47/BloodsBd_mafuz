import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {/* CTA */}
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <Image
            src={"/images/logo.png"}
            width={300}
            height={300}
            className="w-40 md:w-60"
            alt="bloods bd logo"
          />
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-primary mt-2 md:mt-0">
            BLOODSBD.COM
          </h1>
          <p className="text-lg px-4 md:px-0 text-center md:text-xl">
            Be the Reason Someone Smiles Today Donate Blood and Save Lives.
          </p>
          <button className="btn text-white btn-primary text-xl font-bold">
            Become A Hero
          </button>
          <div className="hidden xl:grid grid-cols-3 mt-10 gap-3 w-full px-2 xl:px-14">
            <div className="w-full flex flex-col justify-center items-center p-4 gap-3">
              <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-primary">
                Donner
              </p>
              <p className="text-gray-800 font-bold text-xl">200</p>
            </div>

            <div className="w-full flex flex-col justify-center items-center p-4 gap-3">
              <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-primary">
                Organization
              </p>
              <p className="text-gray-800 font-bold text-xl">200</p>
            </div>

            <div className="w-full flex flex-col justify-center items-center p-4 gap-3">
              <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-bold text-primary">
                Blood Bank
              </p>
              <p className="text-gray-800 font-bold text-xl">200</p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full px-3 2xl:px-16 pt-8">
          <Image
            src={"/images/hero.png"}
            width={400}
            height={500}
            alt="bloods bangladesh"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
