import SideNav from "../ProjectView/SideNav";
import Meta from "./Meta";

const ProjectLayout = (props) => {
  return (
    <div className="p-4 xl:pl-36 xl:pr-36 lg:mt-32 lg:mb-12">
      <Meta title={props.title} />
      <div className="grid grid-cols-1 md:grid-cols-1 ">
        <div className="col-span-1 mb-10 lg:mb-0">
          <SideNav />
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-3">{props.children}</div>
      </div>
    </div>
  );
};

export default ProjectLayout;
