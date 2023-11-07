import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Book from "../../pages/book";
import Home from "../../pages/home page";
import PhantomBlood from "../../pages/phantomblood/";
import BattleTendency from "../../pages/battletendency";
import StardustCrusaders from "../../pages/stardustcrusaders";
import Dashboard from "../../pages/dashboard";
import TomeUn from "../../pages/phantomblood/tome1";
import Read from "../../pages/read";
import Chapitre1 from "../../pages/tome1/Chapitre/chapitre1";
import Chapitre2 from "../../pages/tome1/Chapitre/chapitre2";
import Chapitre3 from "../../pages/tome1/Chapitre/chapitre3";
import Chapitre4 from "../../pages/tome1/Chapitre/chapitre4";
import Chapitre5 from "../../pages/tome1/Chapitre/chapitre5";
import Chapitre6 from "../../pages/tome1/Chapitre/chapitre6";
import Chapitre7 from "../../pages/tome1/Chapitre/chapitre7";
import Chapitre8 from "../../pages/tome1/Chapitre/chapitre8";
export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Book",
    element: <Book />,
  },
  {
    path: "/phantomblood",
    element: <PhantomBlood />,
  },
  {
    path: "/battletendency",
    element: <BattleTendency />,
  },
  {
    path: "/stardustcrusaders",
    element: <StardustCrusaders />,
  },
  {
    path: "/profil",
    element: <Dashboard />,
  },
  {
    path: "/phantomblood/diolenvahisseur",
    element: <TomeUn />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre1",
    element: <Chapitre1 />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre2",
    element: <Chapitre2 />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre3",
    element: <Chapitre3 />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre4",
    element: <Chapitre4 />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre5",
    element: <Chapitre5 />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre6",
    element: <Chapitre6 />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre7",
    element: <Chapitre7 />,
  },
  {
    path: "/phantomblood/diolenvahisseur/chapitre8",
    element: <Chapitre8 />,
  },
]);
