import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  // const [currentImage, setCurrentImage] = useState(1);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Utilise Axios pour récupérer les chemins des images depuis le serveur PHP
    axios
      .get("http://localhost:8000/api/books")
      .then((response) => {
        setImages(response.data["hydra:member"]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Assure que cela ne s'exécute qu'une seule fois lors du montage du composant
  const handleClick = (event) => {
    const clickX = event.nativeEvent.offsetX; // Coordonnée X du clic par rapport à l'élément
    const imageWidth = event.target.width;

    // Si le clic est dans les 60% à droite, passe à l'image suivante
    if (clickX > 0.6 * imageWidth) {
      nextImage();
    } else if (clickX < 0.4 * imageWidth) {
      // Si le clic est dans les 40% à gauche, revient à l'image précédente
      prevImage();
    }
  };

  const nextImage = () => {
    const newImage = currentImage + 1;

    // Vérifie que l'image suivante existe
    if (newImage <= images.length) {
      setCurrentImage(newImage);
    }
  };

  const prevImage = () => {
    const newImage = currentImage - 1;

    // Vérifie que l'image précédente existe
    if (newImage >= 1) {
      setCurrentImage(newImage);
    }
  };

  return (
    <div>
      {images.map((tome) => {
        return (
          <>
            {tome.tome.map((chapter) => {
              return (
                <>
                  {chapter.chapter.map((scans) => {
                    return (
                      <>
                        <>
                          {scans.chapterNumber === 1 ? (
                            <>
                              {scans.scans.map((img) => {
                                return (
                                  <>
                                    <div>
                                      {img.content?.map((src) => {
                                        return (
                                          <div>
                                            <img
                                              src={src}
                                              style={{
                                                width: "30%",
                                                cursor: "pointer",
                                              }}
                                              onClick={handleClick}
                                            />
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </>
                                );
                              })}
                            </>
                          ) : null}
                        </>
                      </>
                    );
                  })}
                </>
              );
            })}
          </>
        );
      })}
    </div>
  );
};
// const ImageSlider = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     // Utilise Axios pour récupérer les chemins des images depuis le serveur PHP
//     axios
//       .get("http://localhost:8000/api/books")
//       .then((response) => {
//         setImages(response.data["hydra:member"]);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // Assure que cela ne s'exécute qu'une seule fois lors du montage du composant

//   const handleClick = (event) => {
//     const clickX = event.nativeEvent.offsetX;
//     const imageWidth = event.target.width;

//     if (clickX > 0.6 * imageWidth) {
//       nextImage();
//     } else if (clickX < 0.4 * imageWidth) {
//       prevImage();
//     }
//   };

//   const nextImage = () => {
//     const newImage = currentImage + 1;
//     if (newImage < images.length) {
//       setCurrentImage(newImage);
//     }
//   };

//   const prevImage = () => {
//     const newImage = currentImage - 1;
//     if (newImage >= 0) {
//       setCurrentImage(newImage);
//     }
//   };

//   return (
//     <div>
//       {images[currentImage]?.tome.map((chapter) => (
//         <div key={chapter.chapterNumber}>
//           {chapter.chapterNumber === 1 &&
//             chapter.scans.map((img) => (
//               <div key={img.chapterNumber}>
//                 {img.content?.map((src, index) => (
//                   <img
//                     key={index}
//                     src={src}
//                     alt=""
//                     style={{ width: "30%", cursor: "pointer" }}
//                     onClick={handleClick}
//                   />
//                 ))}
//               </div>
//             ))}
//         </div>
//       ))}
//     </div>
//   );
// };

export default ImageSlider;
