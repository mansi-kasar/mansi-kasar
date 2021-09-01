import Image from "next/image";
import LogoGraphicsLayout from "../../../components/Layout/LogoGraphicsLayout";
import Card from "../../../components/Reusable Comp/logoFolioCard";
import { LogoFolio } from "../../../components/data/logofolio.data";

const logoGraphicDesign = ({ data }) => {
  return (
    <LogoGraphicsLayout title="M K.|Logo & Graphic Design">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-7 lg:gap-x-12 mt-14">
          <Image src="/assets/all-projects/LogoGraphicDesign/1.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/2.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/3.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/4.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/5.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/6.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/7.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/8.png" />
          <Image src="/assets/all-projects/LogoGraphicDesign/9.png" />
          {/* {data.map((items, index) => (
          <Card
            key={index}
            title={items.title}
            projLink={`/projects/logo-graphic-design/${items.id}`}
            imgSrc={items.thumbnailSrc}
            summary={items.summary}
            buttonText="View Case Study"
          />
        ))} */}
        </div>
    </LogoGraphicsLayout>
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
