import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaBehance,
  FaYoutube,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

import { FiDownload } from "react-icons/fi";

const heroSection = () => {
  return (
    <div>
      <div className="flex flex-col px-4 py-14 lg:flex-row lg:p-0 justify-center items-center lg:mt-19 bg-hero-pattern"
      // style={{backgroundImage: "url('/assets/bgimage.png')"}}
      >
        {/* left */}
        {/* <div className="px-4 pt-2 font-poppins lg:pt-0 xl:w-2/6 lg:w-2/5"> */}
        <div className="flex flex-col mt-18 mb-18 md:mt-36 md:mb-36 w-9/12 lg:w-5/12 md:w-5/12 sm:w-9/12 justify-center">
          {/* <p className="mt-4 mb-4 text-xl font-medium lg:text-2xl text-heroP lg:pt-20">
          </p> */}
          <h1 className="px-4 mb-6 text-3xl font-playfair font-semibold space lg:text-5xl text-heroH text-center">
          Hey! I&#39;m <span className="text-brand">Mansi Kasar</span>, <br/>a UI/UX
            Designer.
          </h1>
          <p className="mb-6 text-base font-normal text-heroH lg:mb-4 lg:text-lg text-center">
          Focused on creating beautiful user experiences through Design.
          </p>
          <div className="flex mb-6 space-x-6 justify-center">
            <Link href="mailto:mansikasar5@gmail.com">
              <a className="flex items-center px-4 py-2 space-x-2 border text-heroH border-brandOutline">
                <FaRegEnvelope className="text-xl" />
                <span className="text-sm font-bold lg:text-base font-poppins">Let&#39;s Talk</span>
              </a>
            </Link>
            <Link href="https://drive.google.com/file/d/1NAdepmWeKaHF7zovXGmKQL7OcMFIU8xN/view?usp=sharing">
              <a
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center px-4 py-2 space-x-2 text-white bg-brand"
              >
                {/* <FiDownload className="text-xl" /> */}
                <span className="text-sm font-bold lg:text-base font-poppins">
                  Resume
                </span>
              </a>
            </Link>
          </div>
        </div>
        {/* middle */}
        {/* <div className="order-first px-4 pt-2 lg:order-none lg:mt-11 xl:w-3/6 lg:w-2/5">
          <div className="w-full">
            <Image
              src="/assets/heroImg.png"
              width="583"
              height="554.46px"
              quality="100"
              alt="Picture of Mansi"
            />
          </div>
        </div> */}
        {/* right */}
        {/* <div className="hidden lg:flex lg:flex-col lg:items-center lg:ml-auto xl:w-1/6 lg:w-1/5 h-510">
          <svg
            className="mt-16 mb-7"
            width="1"
            height="209"
            viewBox="0 0 1 209"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="209"
              x2="0.499991"
              y2="2.18557e-08"
              stroke="black"
            />
          </svg>
          <div className="lg:flex lg:flex-col lg:h-72 lg:justify-between">
            <Link href="https://www.linkedin.com/in/mansi-kasar-363b19184/">
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl text-heroH" />
              </a>
            </Link>
            <Link href="https://www.behance.net/mansikasar">
              <a target="_blank" rel="noopener noreferrer">
                <FaBehance className="text-3xl text-heroH" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw">
              <a target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-3xl text-heroH" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/man.si.my.art/">
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-heroH" />
              </a>
            </Link>
          </div>
        </div> */}
      </div>
            <div className="flex justify-center pt-4">
              <Image
              height="80"
              width="80"
              src="/assets/arrow.gif"
              />
            </div>
    </div>
    
  );
};

export default heroSection;
