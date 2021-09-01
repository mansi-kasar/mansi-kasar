import Image from "next/image";
const Companies = () => {
  return (
    <div className="flex flex-col mx-auto mt-16 md:mt-32">
    <h1 className="mx-auto font-medium font-poppins lg:text-lg">  I&#39;ve worked with some beautiful people and cherished every experience</h1>
    <div className="flex flex-wrap justify-center max-w-xs gap-5 mx-auto md:max-w-xl md:gap-8 lg:max-w-3xl mt-7 lg:mt-9">
      <div className="relative w-10 h-10 lg:w-25 lg:h-25">
        <Image
          src="/assets/companies/infigon-logo-new.png"
          alt="Adobe Ai Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-10 h-10 lg:w-14 lg:h-14">
        <Image
          src="/assets/companies/Jabal Khalil logo-04.png"
          alt="Adobe Ps Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-10 h-10 lg:w-14 lg:h-14">
        <Image
          src="/assets/companies/logo1448--alpha.png"
          alt="Figma Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-10 h-10 lg:w-14 lg:h-14">
        <Image
          src="/assets/companies/LTI_Lets_solve_logo_bl.jpg"
          alt="Adobe XD Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-10 h-10 lg:w-14 lg:h-14">
        <Image
          src="/assets/companies/iitlogo.gif"
          alt="Html Logo"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </div>
  );
};

export default Companies;
