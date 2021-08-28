import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaLinkedin,
  FaBehance,
  FaYoutube,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

const SideNav = () => {
  const sideNavItems = [
    {
      name: "Case Studies",
      path: "/projects/casestudies",
    },
    {
      name: "Designs",
      path: "/projects/designs",
    },
    {
      name: "Coded websites",
      path: "/projects/coded-websites",
    },
    {
      name: "Logo & Graphic Design ",
      path: "/projects/logo-graphic-design",
    },
  ];
  const router = useRouter();
  return (
    <div>
        <div>
          <Link href="/projects/casestudies">
            <a
              className={`${
                router.pathname === "/projects/casestudies" ? "text-brand" : "text-heroH "
              }`}
            >
              <div className="flex flex-col items-center mb-4 lg:mb-6 font-poppins">
                <h1 className="mb-4 text-3xl font-semibold lg:mb-10 text-heroH lg:text-5xl"><span class="text-brand">Projects</span></h1>
              </div>
            </a>
          </Link>
        </div>
      <div className="w-48 font-poppins text-heroH">
        {/* <div className="hidden mb-6 text-xl font-normal tracking-wider uppercase lg:block ">
          <h1 className="">Mansi</h1>
          <h1 className="">Kasar.</h1>
        </div>
        <ul className="items-center hidden space-x-4 lg:flex mb-28">
          <li className="">
            <Link href="https://www.behance.net/mansikasar">
              <a target="_blank" rel="noopener noreferrer">
                <FaBehance className="text-lg text-black" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/mansi-kasar-363b19184/">
              <a target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg text-black" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/man.si.my.art/">
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-lg text-black" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/channel/UCzUxG5w_pdgFm6RwoWp0fRw">
              <a target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-lg text-heroH" />
              </a>
            </Link>
          </li>
        </ul> */}


      
      </div>
      <div className="flex flex-wrap flex-col items-center mb-6 lg:mb-11 font-poppins">
      <div className="flex flex-wrap flex-row items-stretch">
          {sideNavItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <a
                className={`${
                  router.pathname.startsWith(item.path)
                    ? "text-brand"
                    : "text-heroH "
                } p-4`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
