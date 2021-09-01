import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import DesignCard from "../../../components/ProjectView/Design/DesignCard";
import { DesignList } from "../../../components/data/Design.data";
import { DesignData } from "../../../components/data/OtherDesign.data";
import Card from "../../../components/Reusable Comp/projectCard";
import RightCard from "../../../components/Reusable Comp/rightProjectCard";
import LeftCard from "../../../components/Reusable Comp/leftProjectCard";

const Designs = ({ dataDesign }) => {
  // console.log(data);
  return (
    <div>
      <ProjectListLayout title="Case Studies">
        <LeftCard {...DesignData[0]} />
        <RightCard {...DesignData[1]} />
        <LeftCard {...DesignData[2]} />
        <RightCard {...DesignData[3]} />
        <LeftCard {...DesignData[4]} />

        {/* <div className="flex mt-16 md:mt-16 sm:mt-4 lg:mt-16 place-content-center  ">
      <Link href="/projects/casestudies">
        <a
          className="flex text-center items-center px-16 py-4 space-x-2 border text-heroH border-brandOutline"
        >
          <span className="text-sm font-bold lg:text-base ">View more projects</span>
        </a>
      </Link>
    </div> */}
      </ProjectListLayout>
    </div>

    // <ProjectListLayout title="Designs">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12 md:gap-x-2 lg:gap-x-6 ">
    //     {dataDesign.map((items, index) => (
    //       <Card
    //         key={index}
    //         title={items.title}
    //         projLink={`/projects/designs/${items.id}`}
    //         imgSrc={items.thumbnailSrc}
    //         summary={items.summary}
    //         buttonText="View Project"
    //       />
    //     ))}
    //   </div>
    // </ProjectListLayout>
  );
};

export default Designs;
export const getStaticProps = async (context) => {
  return {
    props: {
      dataDesign: DesignList,
    },
    revalidate: 10,
  };
};
