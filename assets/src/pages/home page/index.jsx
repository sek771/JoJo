import React from "react";
import Icon from "./icon";
import Partie from "./partie";
import HistoriqueComponent from "./historique";
import Headerdesktop from "../../components/layouts/header/desktop";
import FooterDesktop from "../../components/layouts/footer/desktop";

const Home = () => {
  return (
    <>
      <Headerdesktop />
      <main className="bg-blue-900">
        <section className="bg-jojo   w-full h-screen ">
          <div>
            <h1 className="uppercase">jojoread</h1>
          </div>
        </section>
        <section>
          <div className="lg:grid lg:grid-cols-2 ">
            <div className="lg:m-32 flex items-center justify-center m-12 h-screen">
              <HistoriqueComponent />
              {/* <a href="">
                <img
                  src="/medias/cover-page/part-1/tome-1.jpg"
                  alt="tome 1"
                  width={450}
                  height={150}
                />
              </a> */}
            </div>
            <Partie />
          </div>
          <Icon />
        </section>
      </main>
      <FooterDesktop />
    </>
  );
};
export default Home;
