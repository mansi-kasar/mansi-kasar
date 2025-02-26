import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import CaseStudyCard from "../../../components/ProjectView/CaseStudy/CaseStudyCard";
import { CaseList } from "../../../components/data/Casestudies.data";
import Card from "../../../components/Reusable Comp/projectCard";
import RightCard from "../../../components/Reusable Comp/rightProjectCard";
import LeftCard from "../../../components/Reusable Comp/leftProjectCard";
import Link from "next/link";

// import RightCard from "../../../components/Reusable Comp/rightProjectCard";

const CaseStudies = ({ data }) => {
  const projectData = [
    {
      title: "B2BSouq Case Study",
      content:
        "Redesigned a Dubai-based business buying and selling platform to enhance the website's architecture and give it a more modern look.",
      cta: "View",
      category: "UX Design, Re-Design",
      caseLink: "/projects/casestudies/0",
      liveLink:
        " https://www.behance.net/gallery/124166733/Case-Study-noQ-Virtual-Slot-booking-avoid-crowd",
      projLink: "/projects/casestudies/0",
      imgSrc: "/assets/all-projects/uixCaseStudy/0.png",
    },
    {
      title: "VES noQ Case Study",
      content:
        "A virtual slot-booking app to help students on campus, especially during submission season when the college's print shop is a chaos.",
      cta: "View",
      category: "App, UX Design",
      caseLink: "/projects/uiux-casestudies/0",
      projLink: "/projects/casestudies/1",
      liveLink:
        "https://www.behance.net/gallery/124166733/Case-Study-noQ-Virtual-Slot-booking-avoid-crowd",
      imgSrc: "/assets/all-projects/uixCaseStudy/1.png",
    },
    {
      title: "Proj.co Case Study",
      content:
        "Proj.co is a social media-like online marketplace where people can find, save, and engage in collaborative projects.",
      cta: "View",
      category: "UX Design, Collaboration",
      caseLink: "/projects/uiux-casestudies/0",
      projLink: "/projects/casestudies/1",
      liveLink:
        "https://www.behance.net/gallery/124166733/Case-Study-noQ-Virtual-Slot-booking-avoid-crowd",
      imgSrc: "/assets/all-projects/uixCaseStudy/2.png",
    },
  ];

  // console.log(data);
  return (
    <div>
      <div className="p-4 mt-16 mb-10 lg:mt-32 items-center">
      {/* <div className="flex flex-col items-center mb-10 lg:h-16 lg:mb-16 ">
        <h1 className="text-4xl font-semibold font-poppins lg:text-5xl font-playfair">
          Case Studies
        </h1>
      </div> */}
          <ProjectListLayout title="Case Studies">

      <LeftCard {...projectData[0]} />
      <RightCard {...projectData[1]} />
      <LeftCard {...projectData[2]} />

      <div className="flex mt-16 md:mt-16 sm:mt-4 lg:mt-16 place-content-center  ">
        <Link href="/projects/casestudies">
          <a
            className="flex text-center items-center px-16 py-4 space-x-2 border text-heroH border-brandOutline"
          >
          {/* <a className="flex items-center px-4 py-2 space-x-2 border text-heroH border-brandOutline"> */}
            {/* <FiDownload className="text-xl" /> */}
            <span className="text-sm font-bold lg:text-base ">View more projects</span>
          </a>
        </Link>
      </div>
      </ProjectListLayout>

        </div>
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
