import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import DesignCard from "../../../components/ProjectView/Design/DesignCard";
import { DesignList } from "../../../components/data/Design.data";
import Card from "../../../components/Reusable Comp/projectCard";

const Designs = ({ dataDesign }) => {
  // console.log(data);
  return (
    <ProjectListLayout title="Designs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12 md:gap-x-2 lg:gap-x-6 ">
        {dataDesign.map((items, index) => (
          <Card
            key={index}
            title={items.title}
            projLink={`/projects/designs/${items.id}`}
            imgSrc={items.thumbnailSrc}
            summary={items.summary}
            buttonText="View Project"
          />
          // <CaseStudyCard key={index} {...items} />
        ))}
      </div>

      {/* <div className="flex flex-col items-center space-y-20 lg:items-stretch lg:flex-col lg:space-y-28">
        {dataDesign.map((items, index) => (
          <DesignCard key={index} {...items} />
        ))}
      </div> */}
    </ProjectListLayout>
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
