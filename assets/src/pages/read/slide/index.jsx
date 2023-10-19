import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageSlider = () => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(8);
  const [currentScanIndex, setCurrentScanIndex] = useState(1);
  const [bookData, setBookData] = useState(null);
  const [book, setBook] = useState ([])

  useEffect(() => {
    // Utilise Axios pour récupérer les données depuis le serveur PHP
    axios
      .get("http://localhost:8000/api/books")
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Assure que cela ne s'exécute qu'une seule fois lors du montage du composant

  const handleClick = (event) => {
    const clickX = event.nativeEvent.offsetX;
    const imageWidth = event.target.width;

    if (clickX > 0.6 * imageWidth) {
      nextScan();
    } else if (clickX < 0.4 * imageWidth) {
      prevScan();
    }
  };

  const nextScan = () => {
    const newScanIndex = currentScanIndex + 1;
    if (
      newScanIndex < bookData.tome[0].chapter[currentChapterIndex].scans.length
    ) {
      setCurrentScanIndex(newScanIndex);
    } else {
      // Si vous atteignez la dernière image du chapitre, passez au chapitre suivant
      nextChapter();
    }
  };

  const prevScan = () => {
    const newScanIndex = currentScanIndex - 1;
    if (newScanIndex >= 0) {
      setCurrentScanIndex(newScanIndex);
    } else {
      // Si vous êtes sur la première image du chapitre, passez au chapitre précédent
      prevChapter();
    }
  };

  const nextChapter = () => {
    const newChapterIndex = currentChapterIndex + 1;
    if (newChapterIndex < bookData.tome[0].chapter.length) {
      setCurrentChapterIndex(newChapterIndex);
      setCurrentScanIndex(0); // Remettre à zéro le scan lorsque vous passez à un nouveau chapitre
    }
  };

  const prevChapter = () => {
    const newChapterIndex = currentChapterIndex - 1;
    if (newChapterIndex >= 0) {
      setCurrentChapterIndex(newChapterIndex);
      setCurrentScanIndex(0); // Remettre à zéro le scan lorsque vous passez à un nouveau chapitre
    }
  };

  return (
    <>
      {book.map((book) => {
        return (<div>{book.tome.map((tomes)=>{return(<div>{tomes.chapter.map((chapters)=>{return(<div>{chapters.scans.map((scan)=>{return(<><div><img src={scan.start} alt="" /></div></>)})}</div>)})}</div>)})}</div>);
      })}
    </>
  );
};

export default ImageSlider;
