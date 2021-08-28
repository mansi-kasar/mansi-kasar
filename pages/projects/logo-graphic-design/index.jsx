import Image from "next/image";
import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import Card from "../../../components/Reusable Comp/logoFolioCard";
import { LogoFolio } from "../../../components/data/logofolio.data";

const logoGraphicDesign = ({ data }) => {
  return (
    <ProjectListLayout title="M K.|Logo & Graphic Design">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-12 md:gap-x-2 lg:gap-x-6 ">
        {data.map((items, index) => (
          <Card
            key={index}
            title={items.title}
            projLink={`/projects/logo-graphic-design/${items.id}`}
            imgSrc={items.thumbnailSrc}
            summary={items.summary}
            buttonText="View Case Study"
          />
        ))}
      </div>
    </ProjectListLayout>
  );
};

export default logoGraphicDesign;

export const getStaticProps = async (context) => {
    return {
      props: {
        data: LogoFolio,
      },
      revalidate: 10,
    };
  };
  