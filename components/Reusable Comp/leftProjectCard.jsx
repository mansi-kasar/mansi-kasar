// card comp without view case study and live preview
import Image from "next/image";
import Link from "next/link";
const projectCard = (props) => {
  return (
    <div className="mt-14 grid grid-cols-2 md:grid-cols-2 gap-x-14 gap-y-7 md:gap-x-14 lg:gap-x-14 xl:gap-x-14 py-16 bg-gray-100">

      <div className="grid grid-cols-1 justify-items-end content-center">
        <Link href={props.projLink} passHref>
          {/* <a> */}
            <Image
              src={props.imgSrc}
              width={500}
              height={384}
              quality="100"
              // layout="responsive"
              objectFit="cover"
    
              // width="500"
              // height="384"
              // quality="100"
              // layout="responsive"
              // objectFit="cover"
              alt="Picture of dog"
              // className="object-left"
            />
          {/* </a> */}
        </Link>
      </div>

      <div className="grid grid-cols-1 place-content-center">
        <h1 className="subpixel-antialiased text-xs lg:text-xl text-card md:text-sm mb-3 sm:text-xs font-poppins">
          <span>{props.category}</span>
        </h1>

        <h1 className="subpixel-antialiased text-sm mb-2 lg:mb-14 md:mb-8 sm:mb-2 lg:text-4xl font-playfair font-bold text-card md:text-2xl sm:text-sm">
          <Link href={props.projLink} passHref>
            <span>{props.title}</span>
          </Link>
        </h1>

        <p className="subpixel-antialiased text-xs lg:text-lg font-poppins sm:text-xs md:text-sm w-9/12">
          {props.content}
        </p>

        <div className="flex mt-2 md:mt-4 lg:mt-16 sm:mt-2 w-24" >
          <Link href={props.projLink}>
              <a
              className="flex items-center px-4 py-2 space-x-2 lg:px-16 md:py-4 lg:px-16 md:py-4 text-white bg-brand hover:bg-purple-500"
                // className="flex text-center items-center px-16 py-4 space-x-2 text-white bg-brand"
              >
                {/* <FiDownload className="text-xl" /> */}
                <span className="text-xs font-bold lg:text-base font-poppins">
                  View
                </span>
              </a>
            </Link>
        </div>

      </div>

    </div>
  );
};

export default projectCard;
