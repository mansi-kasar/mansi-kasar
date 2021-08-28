// import { CaseList } from "../../../components/data/Casestudies.data";
import { LogoFolio } from "../../../components/data/logofolio.data";

import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import Image from "next/image";
export const getStaticProps = async ({ params }) => {
  //put the caselist as caseLists and filter out the id and makse sure its the parsm.id
  const caseLists = LogoFolio.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      //return the id which is the first index(0)
      singleCase: caseLists[0],
    },
    revalidate: 10,
  };
};
export const getStaticPaths = async () => {
  const paths = LogoFolio.map((singleCase) => ({
    params: { id: singleCase.id.toString() },
  }));
  return { paths, fallback: false };
};

const CaseStudy = ({ singleCase }) => {
  return (
    <ProjectListLayout>
      <div className="flex flex-col items-center mb-4 lg:mb-6 font-poppins">
        <h1 className="text-xl font-medium text-exp lg:text-3xl">
          {singleCase.title}
        </h1>
      </div>
          <div className="flex flex-col items-center mb-4 lg:mb-6 font-poppins">
            <p className="mt-4">
              {singleCase.caption}
            </p>
          </div>
      {singleCase.contentSrc.map((items, index) => (
        <div key={index}>
          <Image
            key={index}
            src={items.contentSrc}
            alt={items.caption}
            layout="responsive"
            width={singleCase.contentWidth}
            height={singleCase.contentHeight}
            quality={100}
          />
        </div>
      ))}
    </ProjectListLayout>
  );
};

export default CaseStudy;
