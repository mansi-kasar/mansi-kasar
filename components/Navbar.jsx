import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  // states for open/closed mobile nav
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  // router for active navitem
  const router = useRouter();

  return (
    <>
      {/* mobile first */}
      <nav className="sticky top-0 z-50 flex flex-wrap items-center xl:px-20 lg:px-2 lg:py-1 bg-white">
        <div>
          <Link href="/">
            <a className="items-center p-2 mr-4">
              <h1 className="text-xl font-semibold text-navItems font-cardo p-2 px-4 font-playfair">
                Mansi Kasar
              </h1>
            </a>
          </Link>
        </div>

        <button className="p-2 ml-auto lg:hidden pr-5 " onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* wider size screens */}
        {/* ternary operator to show or hide menu */}

        {/* <div className="grid grid-cols-2"> */}
        <div
          className={`${
            open ? "" : "hidden"
          } w-full lg:flex lg:flex-grow lg:w-17/48`}
        >
          <div className="flex flex-col items-start w-full lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            {/* <div className={router.pathname == "/" ? "text-brand" : ""}> */}
            <Link href="/">
              <a
                className={`items-center justify-center w-full p-2 mr-4 rounded font-poppins lg:w-auto ${
                  router.pathname === "/"
                    ? "text-brand font-medium"
                    : "text-heroH "
                }`}
              >
                Home
              </a>
            </Link>
            {/* </div> */}
            <Link href="/about">
              <a
                className={`items-center justify-center w-full p-2 mr-4  rounded font-poppins lg:w-auto ${
                  router.pathname === "/about"
                    ? "text-brand font-medium"
                    : "text-heroH "
                }`}
              >
                About
              </a>
            </Link>
            <Link href="/projects/casestudies">
              <a
                className={`items-center justify-center w-full p-2 mr-4  rounded font-poppins lg:w-auto ${
                  router.pathname.startsWith("/projects")
                    ? "text-brand font-medium"
                    : "text-heroH "
                }`}
              >
                Projects
              </a>
            </Link>

            {/* <Link href="https://medium.com/@mansikasar">
                <a
                  className="items-center justify-center w-full p-2 mr-4 font-medium rounded font-poppins lg:w-auto"
                  target="_blank"
                >
                  Blog
                </a>
              </Link> */}

            <Link href="https://drive.google.com/file/d/1Ktk7mGMvH_1S4CH53JLByzOdJuuHTWCb/view?usp=sharing">
              <a
                target="_blank"
                rel="noopener noreferrer"
                download
                className={`items-center justify-center w-full p-2 mr-4  rounded font-poppins lg:w-auto ${
                  router.pathname === "/test"
                    ? "text-brand font-medium"
                    : "text-heroH "
                }`}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>

        <div
          className={`${
            open ? "" : "hidden"
          } w-full lg:flex lg:flex-grow lg:w-auto md:w-1/12`}
        >
          <div className="flex flex-row items-start w-full lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link href="https://www.linkedin.com/in/mansi-kasar-363b19184">
              <a
                className="items-center justify-center p-2 ml-4 font-medium rounded font-poppins lg:w-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mansi-kasar-363b19184/"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-3xl text-heroH"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                </svg>
              </a>
            </Link>

            <Link href="https://www.behance.net/mansikasar">
              <a
                className="items-center justify-center  p-2 ml-4 font-medium rounded font-poppins lg:w-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.behance.net/mansikasar"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-3xl text-heroH"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path>
                </svg>
              </a>
            </Link>

            <Link href="https://medium.com/@mansikasar/">
              <a
                className="items-center justify-center  p-2 ml-4 font-medium rounded font-poppins lg:w-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@mansikasar/"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9699 2.26419C13.9766 2.25312 13.979 2.23991 13.9765 2.22718C13.974 2.21444 13.9669 2.20311 13.9566 2.19542C13.9538 2.19259 13.951 2.18975 13.9482 2.18834L13.944 2.18692L9.7209 0.0475051C9.65675 0.0175136 9.58715 0.00134043 9.5165 9.95361e-06C9.43498 -0.000515914 9.35464 0.0198031 9.28294 0.0590846C9.21123 0.0983661 9.15048 0.155339 9.1063 0.224726L6.6745 4.22709L9.7258 9.24811L13.9699 2.26419ZM13.2251 11.8646C13.6528 12.0815 14 11.9298 14 11.5258V3.50686L9.9337 10.198L13.2251 11.8646ZM5.3354 3.31546V7.87075L9.3331 9.89461L5.3354 3.31546ZM0.3878 10.091L4.0208 11.9305C4.10159 11.9739 4.1912 11.9976 4.2826 12C4.5087 12 4.6669 11.8228 4.6669 11.5258V2.24363C4.66692 2.23507 4.66465 2.22666 4.66034 2.2193C4.65602 2.21194 4.64983 2.20589 4.6424 2.2018L0.5173 0.11414C0.4526 0.0790677 0.380666 0.0598847 0.3073 0.0581385C0.1267 0.0581385 0 0.199206 0 0.436683V9.45581C0 9.69754 0.175 9.98322 0.3878 10.091Z"
                    fill="black"
                  />
                </svg>
              </a>
            </Link>

            <Link href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw">
              <a
                className="items-center justify-center  p-2 ml-4 font-medium rounded font-poppins lg:w-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="text-3xl text-heroH"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                </svg>
              </a>
            </Link>

            <Link href="https://www.instagram.com/man.si.my.art/">
              <a
                className="items-center justify-center  p-2 ml-4 font-medium rounded font-poppins lg:w-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/man.si.my.art/"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-3xl text-heroH"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
