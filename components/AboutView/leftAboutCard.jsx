// card comp without view case study and live preview
import Image from "next/image";
import Link from "next/link";

const aboutCard = () => {
  return (
    <div className="mt-14 grid grid-cols-2 md:grid-cols-2 gap-x-14 gap-y-7 md:gap-x-14 lg:gap-x-14 xl:gap-x-14 ">
      <div className="grid grid-cols-1 justify-items-end">
        <Image
          src="https://mansikasar-website.s3.ap-south-1.amazonaws.com/about+me+photo/about+me+photo.jpeg"
          width={500}
          height={384}
          quality="100"
          objectFit="cover"
          alt="Picture of dog"
        />
        {/* <Link href={props.projLink} passHref>
          <a>
          </a>
        </Link> */}
      </div>

      <div className="grid grid-cols-1 place-content-center">
        {/* <h1 className="subpixel-antialiased text-xs lg:text-xl text-card md:text-sm mb-3 sm:text-xs font-poppins">
          <a>{props.category}</a>
        </h1> */}

        <h1 className="subpixel-antialiased text-sm mb-2 lg:mb-14 md:mb-8 sm:mb-2 lg:text-4xl font-playfair font-bold text-card md:text-2xl sm:text-sm">
          About Me
          {/* <Link href={props.projLink} passHref>
            <a>{props.title}</a>
          </Link> */}
        </h1>

        <p className="subpixel-antialiased text-xs lg:text-lg font-poppins sm:text-xs md:text-sm w-9/12">
          <span className="text-brand">
            An engineer who eloquently fell in love with designing.&nbsp;
          </span>
          To me, design is a notion that is essentially responsible for a
          product&apos;s stature while also offering a sense of freedom and a
          distinct storyline for the same idea.
          <br />
          <br />
          The sheer scope of each project, each element in this field amazes me
          and the satisfaction achieved each time, is my motivation.
          <br />
          <br />I find peace upon finally finding the perfect combination and
          theme that does justice to the product, and finding welcoming people
          throughout my journey while working in this field was the icing on the
          cake.
        </p>

        {/* <div className="flex mt-2 md:mt-4 lg:mt-16 sm:mt-2 w-24">
          <Link href={props.projLink}>
            <a className="flex items-center px-4 py-2 space-x-2 lg:px-16 md:py-4 lg:px-16 md:py-4 text-white bg-brand">
              <span className="text-xs font-bold lg:text-base ">View</span>
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default aboutCard;
