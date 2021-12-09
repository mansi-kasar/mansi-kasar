import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa";

const info = () => {
  return (
    <div className="flex mb-6 space-x-6 justify-center mt-28 mx-44">
      <p className="text-center text-xs lg:text-lg font-poppins sm:text-xs md:text-sm">
        I create not out of a sense of duty, but simply because I{" "}
        <span className="text-brand">love</span> the art. During these two
        years, I had the pleasure of working with some amazing people from the{" "}
        <span className="text-brand">
          Indian Institute of Technology-Kharagpur(IIT-K), Insane AI, Infigon
          Futures, B2BSouq-Dubai
        </span>
        , and many more.
      </p>
      {/* <Link href="mailto:mansikasar5@gmail.com">
        <a className="flex items-center px-4 py-2 space-x-2 border text-heroH border-brandOutline">
          <FaRegEnvelope className="text-xl" />
          <span className="text-sm font-bold lg:text-base">Let's Talk</span>
        </a>
      </Link>
      <Link href="https://drive.google.com/file/d/1lKhVBicL9IAH0Xwr6x_5Y6k7UgLMHvAL/view?usp=sharing">
        <a
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center px-4 py-2 space-x-2 text-white bg-brand"
        >
          <span className="text-sm font-bold lg:text-base ">Resume</span>
        </a>
      </Link> */}
    </div>
  );
};

export default info;
