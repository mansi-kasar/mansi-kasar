import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import CaseStudyCard from "../../../components/ProjectView/CaseStudy/CaseStudyCard";
import { CaseList } from "../../../components/data/Casestudies.data";
import Card from "../../../components/Reusable Comp/projectCard";


const CaseStudies = ({ data }) => {
  // console.log(data);
  return (
    <ProjectListLayout title="Case Studies">
      {/* <div className="flex flex-col items-center space-y-20 lg:flex-col lg:space-y-28"> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-7 md:gap-x-2 lg:gap-x-6 "> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 ">
        {data.map((items, index) => (
          <Card
            key={index}
            title={items.title}
            projLink={`/projects/casestudies/${items.id}`}
            imgSrc={items.thumbnailSrc}
            summary={items.summary}
            buttonText="View Case Study"
          />
          // <CaseStudyCard key={index} {...items} />
        ))}
      </div>
    </ProjectListLayout>
  );
};

export default CaseStudies;
export const getStaticProps = async (context) => {
  return {
    props: {
      data: CaseList,
    },
    revalidate: 10,
  };
};
