import React, { useState, useEffect } from "react";
import axios from "axios";

const HistoriqueComponent = () => {
  const [historique, setHistorique] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/books/1"); // Remplace '/api/books/1' par l'URL de ton API
        setHistorique(response.data.tome);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchData();
  }, []);

  const handleSuppressionCarte = (tomeNumber) => {
    // Logique de suppression de la carte
    // ...

    // Mettre à jour le state
    setHistorique(updatedHistorique);

    // Mettre à jour l'API avec la nouvelle version de l'historique
    // ...
  };

  return (
    <div>
      {historique.length === 0 ? (
        <div>Historique vide</div>
      ) : (
        <div>
          {historique.map((tome) => (
            <div key={tome.tomeNumber}>
              <a href={tome.href}>
                <img src={tome.image} alt="" />
              </a>
              <p>Title: {tome.title}</p>
              <p>Href: {tome.href}</p>
              {/* ... Ajouter d'autres éléments selon la structure de tes données */}
              <button onClick={() => handleSuppressionCarte(tome.tomeNumber)}>
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistoriqueComponent;

// import React, { useState, useEffect } from "react";

// const HistoriqueComponent = () => {
//   // Utiliser le state pour gérer les données
//   const [histoNom, setHistoNom] = useState([]);
//   const [histoUrl, setHistoUrl] = useState([]);
//   const [histoImg, setHistoImg] = useState([]);
//   const [histoType, setHistoType] = useState([]);
//   const [histoLang, setHistoLang] = useState([]);
//   const [histoEp, setHistoEp] = useState([]);

//   useEffect(() => {
//     // Charger les données depuis le localStorage lors du montage du composant
//     const loadFromLocalStorage = () => {
//       setHistoNom(JSON.parse(localStorage.getItem("histoNom")) || []);
//       setHistoUrl(JSON.parse(localStorage.getItem("histoUrl")) || []);
//       setHistoImg(JSON.parse(localStorage.getItem("histoImg")) || []);
//       setHistoType(JSON.parse(localStorage.getItem("histoType")) || []);
//       setHistoLang(JSON.parse(localStorage.getItem("histoLang")) || []);
//       setHistoEp(JSON.parse(localStorage.getItem("histoEp")) || []);
//     };

//     loadFromLocalStorage();
//   }, []);

//   useEffect(() => {
//     // Masquer ou afficher en fonction de la longueur de histoNom
//     if (histoNom.length === 0) {
//       // Cacher
//       // Tu peux utiliser la logique de rendu conditionnel ici
//     } else {
//       // Afficher
//       // Boucle pour afficher les éléments historiques
//       // Assure-toi de ne pas afficher plus de 20 éléments
//     }
//   }, [histoNom]);

//   const handleSuppressionCarte = (urlcurr) => {
//     // Logique de suppression de la carte
//     const index = histoUrl.indexOf(urlcurr);

//     // Utiliser les méthodes set pour mettre à jour le state
//     setHistoNom([...histoNom.slice(0, index), ...histoNom.slice(index + 1)]);
//     setHistoUrl([...histoUrl.slice(0, index), ...histoUrl.slice(index + 1)]);
//     setHistoImg([...histoImg.slice(0, index), ...histoImg.slice(index + 1)]);
//     setHistoType([...histoType.slice(0, index), ...histoType.slice(index + 1)]);
//     setHistoLang([...histoLang.slice(0, index), ...histoLang.slice(index + 1)]);
//     setHistoEp([...histoEp.slice(0, index), ...histoEp.slice(index + 1)]);

//     // Mettre à jour le localStorage
//     localStorage.setItem("histoNom", JSON.stringify(histoNom));
//     localStorage.setItem("histoUrl", JSON.stringify(histoUrl));
//     localStorage.setItem("histoImg", JSON.stringify(histoImg));
//     localStorage.setItem("histoType", JSON.stringify(histoType));
//     localStorage.setItem("histoLang", JSON.stringify(histoLang));
//     localStorage.setItem("histoEp", JSON.stringify(histoEp));
//   };

//   return (
//     <></>
//     // Ton rendu JSX ici
//     // N'oublie pas d'utiliser les méthodes map pour afficher les éléments historiques
//     // et d'ajouter la logique de rendu conditionnel pour le cas où histoNom.length === 0
//   );
// };

// export default HistoriqueComponent;
