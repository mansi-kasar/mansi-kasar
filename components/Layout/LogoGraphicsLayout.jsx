import SideNav from "../ProjectView/SideNav";
import Meta from "./Meta";

const LogoGraphicsLayout = (props) => {
  return (
    <div>
      <div className="py-8 xl:pl-24 xl:pr-24 lg:mb-12 lg:p-4">
        <Meta title={props.title} />
        <div className="grid grid-cols-1 md:grid-cols-1 ">
          <div className="col-span-1 mb-10 lg:mb-0">
            <SideNav />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 ">
            <div className="col-span-3">{props.children}</div>
          </div>

          <div className="flex flex-col items-center mb-4 lg:mb-6 font-poppins">
            <h1 className="mt-16 text-3xl font-semibold text-heroH lg:text-5xl font-playfair">
              <span>Other Contributions</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 mt-16 gap-y-5 2xl:gap-x-16">
            <div className="flex justify-center lg:justify-start md:justify-start 2xl:justify-end">
              <iframe
                src="https://www.instagram.com/p/B9jdPzfHTwU/embed/captioned/?cr=1&v=13&wp=998&rd=https%3A%2F%2Fwww.saloneegupta.me&rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A1486.7000000029802%2C%22ls%22%3A1483.7000000029802%2C%22le%22%3A1484.8000000044703%7D"
                className=" max-w-7xl border"
                height="1482"
                width="550"
              />
            </div>

            <div className="flex justify-center lg:justify-end md:justify-end 2xl:justify-start">
              <iframe
                src="https://www.instagram.com/p/B32Cl9HHTIw/embed/captioned/?cr=1&v=13&wp=998&rd=https%3A%2F%2Fwww.saloneegupta.me&rp=%2F#%7B%22ci%22%3A0%2C%22os%22%3A1486.7000000029802%2C%22ls%22%3A1483.7000000029802%2C%22le%22%3A1484.8000000044703%7D"
                className="max-w-7xl border"
                height="1495"
                width="550"
                scrolling="yes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoGraphicsLayout;
