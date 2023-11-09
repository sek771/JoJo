import React from "react";
import ImageSlider from "./slide";
import ChapterList from "./chapter-list";
import BreadCrumb from "./breadcrump";
import Footer from "../../components/layouts/footer/index.jsx";

const Chapitre4 = () => {
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
          <Footer />
        </div>
      </section>
    </>
  );
};
export default Chapitre4;
