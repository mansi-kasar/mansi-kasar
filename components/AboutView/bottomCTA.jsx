import Link from "next/link";
import {
  FaRegEnvelope,
} from "react-icons/fa";


const bottomCTA = () => {
  return (
    <div className="flex mb-6 space-x-6 justify-center mt-20">
      <Link href="https://drive.google.com/file/d/1Ktk7mGMvH_1S4CH53JLByzOdJuuHTWCb/view?usp=sharing">
        <a 
        target="_blank"
        rel="noopener noreferrer"
        download
        className="flex items-center px-4 py-2 space-x-2 border text-heroH border-brandOutline">
          <span className="text-sm font-bold lg:text-base font-poppins">Resume</span>
        </a>
      </Link>

      <Link href="/projects/casestudies">
        <a
          // target="_blank"
          // rel="noopener noreferrer"
          // download
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
