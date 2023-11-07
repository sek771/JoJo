import React from "react";
import ImageSlider from "./slide";
import ChapterList from "./chapter-list";
import BreadCrumb from "./breadcrump";
import FooterDesktop from "../../components/layouts/footer/desktop";

const Chapitre2 = () => {
  return (
    <>
      <section className="h-screen bg-cyan-950">
        <div className="grid justify-items-center">
          <div className="my-10 w-screen ">
            <div className=" bg-cyan-950">
              <BreadCrumb />
            </div>
            <div className=" bg-cyan-950">
              <ChapterList />
            </div>
          </div>
          <div className=" bg-cyan-950">
            <ImageSlider />
          </div>
        </div>
        <div className=" bg-cyan-950">
          <FooterDesktop />
        </div>
      </section>
    </>
  );
};
export default Chapitre2;
