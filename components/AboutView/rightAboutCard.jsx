// card comp without view case study and live preview
import Image from "next/image";
import Link from "next/link";

const aboutCard = () => {
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-2 gap-x-14 gap-y-7 md:gap-x-14 lg:gap-x-14 xl:gap-x-14 place-content-center justify-center">
      <div className="grid grid-cols-1 place-content-center justify-items-end">
        {/* <h1 className="subpixel-antialiased text-xs lg:text-xl text-card md:text-sm mb-3 sm:text-xs  font-poppins">
        </h1> */}

        <h1 className="subpixel-antialiased text-sm mb-2 lg:mb-14 md:mb-8 sm:mb-2 lg:text-4xl font-playfair font-bold text-card md:text-2xl sm:text-sm text-right">
          What I want my designs to stand for.
          {/* <Link href={props.projLink} passHref>
            <a>{props.title}</a>
          </Link> */}
        </h1>

        <p className="subpixel-antialiased text-xs lg:text-lg font-poppins sm:text-xs md:text-sm w-9/12 text-right">
          My goal is to be able to put myself in another&apos;s shoes and create&nbsp;
          <span className="text-white bg-brand">designs that elicit empathy</span>,
          allowing me to communicate the stories in a way that other
          stakeholders can understand. To use UX Design to bring people from all
          over the world together by bringing order out of chaos and
          understanding out of uncertainty.
        </p>

        {/* <div className="flex mt-2 md:mt-4 lg:mt-16 sm:mt-2">
          <Link href={props.projLink}>
            <a
              className="flex items-end px-4 py-2 space-x-2 lg:px-16 md:py-4 lg:px-16 md:py-4 text-white bg-brand"
            >
              <span className="text-xs font-bold lg:text-base ">View</span>
            </a>
          </Link>
        </div> */}
      </div>

      <div className="grid grid-cols-1 justify-items-start">
        <Image
          src="/assets/about-me/2.jpeg"
          width="500"
          height="384"
          alt="Picture of dog"
        />
        {/* <Link href={props.projLink} passHref>
          <a>
            
          </a>
        </Link> */}
      </div>
    </div>
  );
};

export default aboutCard;
