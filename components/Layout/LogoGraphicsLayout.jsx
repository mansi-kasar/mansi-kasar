import SideNav from "../ProjectView/SideNav";
import Meta from "./Meta";

const LogoGraphicsLayout = (props) => {
  return (
    <div className="py-8 xl:pl-24 xl:pr-24 lg:mb-12 lg:p-4">
      <Meta title={props.title} />
      <div className="grid grid-cols-1 md:grid-cols-1 ">
        <div className="col-span-1 mb-10 lg:mb-0">
          <SideNav />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="col-span-3">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default LogoGraphicsLayout;