import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import { CaseList } from "../../../components/data/Casestudies.data";
import RightCard from "../../../components/Reusable Comp/rightProjectCard";
import LeftCard from "../../../components/Reusable Comp/leftProjectCard";
import { projectData } from "../../../components/data/projectData.data";
// import CaseStudyCard from "../../../components/ProjectView/CaseStudy/CaseStudyCard";
// import Card from "../../../components/Reusable Comp/projectCard";
// import Link from "next/link";
// import RightCard from "../../../components/Reusable Comp/rightProjectCard";

const CaseStudies = ({ data }) => {

  return (
    <div>
      <ProjectListLayout title="Case Studies">
        <LeftCard {...projectData[0]} />
        <RightCard {...projectData[1]} />
        <LeftCard {...projectData[2]} />

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
