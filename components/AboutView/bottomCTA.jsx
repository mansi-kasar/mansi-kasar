import Link from "next/link";
import {
  FaRegEnvelope,
} from "react-icons/fa";


const bottomCTA = () => {
  return (
    <div className="flex mb-6 space-x-6 justify-center mt-20">
      <Link href="mailto:mansikasar5@gmail.com">
        <a className="flex items-center px-4 py-2 space-x-2 border text-heroH border-brandOutline">
          <FaRegEnvelope className="text-xl" />
          <span className="text-sm font-bold lg:text-base font-poppins">Let&apos;s Talk</span>
        </a>
      </Link>
      <Link href="/projects/casestudies">
        <a
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center px-4 py-2 space-x-2 text-white bg-brand"
        >
          {/* <FiDownload className="text-xl" /> */}
          <span className="text-sm font-bold lg:text-base font-poppins">View Projects</span>
        </a>
      </Link>
    </div>
  );
};

export default bottomCTA;
