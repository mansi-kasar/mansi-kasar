import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import { CaseList } from "../../../components/data/Casestudies.data";
import RightCard from "../../../components/Reusable Comp/rightProjectCard";
import LeftCard from "../../../components/Reusable Comp/leftProjectCard";

// import CaseStudyCard from "../../../components/ProjectView/CaseStudy/CaseStudyCard";
// import Card from "../../../components/Reusable Comp/projectCard";
// import Link from "next/link";
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
      projLink: "/projects/casestudies/2",
      liveLink:
        "https://www.behance.net/gallery/124166733/Case-Study-noQ-Virtual-Slot-booking-avoid-crowd",
      imgSrc: "/assets/all-projects/uixCaseStudy/2.png",
    },
  ];

  // console.log(data);
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
