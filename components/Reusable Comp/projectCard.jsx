// card comp without view case study and live preview
import Image from "next/image";
import Link from "next/link";
const projectCard = (props) => {
  return (
    <div className="flex flex-col space-y-3 max-w-card font-poppins">
      <div className="">
        <Link href={props.projLink} passHref>
          <a>
            <Image
              src={props.imgSrc}
              width="720"
              height="576"
              alt="Picture of dog"
              className="rounded-3xl"
            />
          </a>
        </Link>
      </div>
      <h1 className="text-lg font-semibold text-card md:text-2xl ">
        <Link href={props.projLink} passHref>
          <a>{props.title}</a>
        </Link>
      </h1>
      <p className="font-light">{props.summary}</p>

      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <p className="font-medium">
            <div>
              <Link href={props.projLink} passHref>
                <button className="px-4 py-3 text-white bg-brand rounded-3xl ">
                  <a>{props.buttonText}</a>
                  {/* View Design */}
                </button>
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
