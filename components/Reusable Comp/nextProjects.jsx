import Image from "next/image";
import Link from "next/link";
const NextProject = (props) => {
  return (
    <div className="flex flex-col  space-y-3 max-w-card font-poppins">
      <div className="mt-8">
        <Image
          // loading="priority"
          src={props.imgSrc}
          width={720}
          height={576}
          quality="100"
          layout="responsive"
          objectFit="cover"
          alt={props.title}
          className="object-left"
        />
      </div>
      <div className="mt-8">
      <Link href={props.projLink}>
        <a>
          <h1 className="font-playfair text-4xl mt-8 font-lightbold">
            {props.title}
          </h1>
        </a>
        {/* <h1 className="text-lg font-semibold text-card md:text-2xl ">
        </h1> */}
      </Link>
    </div>
    </div>
  );
};

export default NextProject;
