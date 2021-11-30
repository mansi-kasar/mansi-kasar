import Image from "next/image";
import Link from "next/link";
const NextProject = (props) => {

  const getAlignment = (type) => {
    switch (type) {
      // case "Not Started":
      // return "bg-gray-100 text-gray-500";
      case 0:
        return "start";
      case 1:
        return "end";
    }
  };

  return (
    <div className="flex flex-col space-y-3 max-w-card font-poppins justify-between">
      <div className={`grid mt-8 justify-items-center`}>
        <Image
          loading="priority"
          // loading="eager"
          src={props.imgSrc}
          width={450}
          height={356}
          quality="100"
          objectFit="cover"
          alt={props.title}
          className="object-left"
        />
      </div>
      <div className={`grid mt-8 justify-items-center`}>
      <Link href={props.projLink}>
        <a>
          <h1 className="font-playfair text-3xl mt-8 font-bold">
            {props.title}
          </h1>
        </a>
      </Link>
    </div>
    </div>
  );
};

export default NextProject;
