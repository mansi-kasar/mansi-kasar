import Image from "next/image";
import LogoGraphicsLayout from "../../../components/Layout/LogoGraphicsLayout";
import Card from "../../../components/Reusable Comp/logoFolioCard";
import { LogoFolio } from "../../../components/data/logofolio.data";

const logoGraphicDesign = ({ data }) => {
  return (
    <LogoGraphicsLayout title="M K.|Logo & Graphic Design">
      <div className="grid grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-7 lg:gap-x-12 mt-14">
        {/* <img
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/1.png"/> */}
        <Image
          // className="aspect-h-16 aspect-w-16"
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/1.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/2.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/3.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/4.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/5.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/6.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/7.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/8.png"
          layout="responsive"
          width="384"
          height="384"
        />
        <Image
          src="https://mansikasar.s3.amazonaws.com/LogoGraphicDesign/9.png"
          layout="responsive"
          width="384"
          height="384"
        />
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
