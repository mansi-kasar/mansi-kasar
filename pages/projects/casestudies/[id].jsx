// import { CaseList } from "../../../components/data/Casestudies.data";
import { CaseList } from "../../../components/data/Casestudies.data";
import NextProject from "../../../components/Reusable Comp/nextProjects";
import ProjectListLayout from "../../../components/Layout/ProjectListLayout";
import Image from "next/image";
import { projectData } from "../../../components/data/projectData.data";

export const getStaticProps = async ({ params }) => {
  //put the caselist as caseLists and filter out the id and makse sure its the parsm.id
  const caseLists = CaseList.filter((p) => p.id.toString() === params.id);

  return {
    props: {
      //return the id which is the first index(0)
      singleCase: caseLists[0],
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const paths = CaseList.map((singleCase) => ({
    params: { id: singleCase.id.toString() },
  }));
  return { paths, fallback: false };
};

const CaseStudy = ({ singleCase }) => {
  return (
    <>
      <ProjectListLayout title={singleCase.title}>
        <h1 className="text-xl font-medium text-exp lg:text-3xl">
          {singleCase.title}
        </h1>

        {singleCase.liveLink ? <h1 className="text-lg font-normal text-exp lg:text-xl">
          The new re-designed website: <a className="font-medium font-poppins underline text-blue-600" href={`https://${singleCase.liveLink}`}>{singleCase.liveLink}</a>
        </h1>:<></>}

        {singleCase.contentImages.map((imageSrc, index) => (
          <Image
            loading="priority"
            // loading="lazy"
            key={index}
            src={imageSrc}
            alt={singleCase.title}
            layout="responsive"
            width={singleCase.contentWidth}
            height={singleCase.contentHeight}
            // quality={100}
          />
        ))}

        {/* <div className=" aspect-w-16 aspect-h-16 md:aspect-h-14 lg:aspect-h-9">
          <iframe
          className="absolute inset-0 w-full h-full overflow-hidden"
          src={singleCase.videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div> */}

        {singleCase.videoUrl ? (
          <>
            <hr className="border-t-2 border-gray-900 mt-16" />

            <div className=" aspect-w-16 aspect-h-16 md:aspect-h-14 lg:aspect-h-9">
              <iframe
                className="absolute inset-0 w-full h-full overflow-hidden"
                src={singleCase.videoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </>
        ) : (
          <></>
        )}

        <hr className="border-t-2 border-gray-900 mt-16" />

        <h1 className="text-xl font-lightbold text-exp lg:text-2xl mb-4 font-poppins mx-12 mt-16">
          Check out my other projects
        </h1>
        <div className="grid grid-cols-2">
          {singleCase.next.map((data, index) => (
            <NextProject key={index} {...projectData[data]} align={index} />
          ))}
        </div>
      </ProjectListLayout>
    </>
  );
};

export default CaseStudy;
