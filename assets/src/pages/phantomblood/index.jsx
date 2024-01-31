import React, { useEffect, useState } from "react";
import axios from "axios";

const PhantomBlood = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("/api/books").then((response) => {
      setBooks(response.data["hydra:member"]);
    });
  }, []);

  return (
    <>
      <section className="bg-blue-900 grid justify-items-center">
        <div className="glass-t ">
          <div className="flex items-center justify-center ">
            <img
              src="/medias/bannière/phantom-blood.jpg"
              alt=""
              className="glass-b"
              width={1000}
              height={400}
            />
          </div>
          <div>
            {books.map((book) => {
              return (
                <>
                  <div className="flow-root">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 uppercase">
                          auteur
                        </dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          {book.authors}
                        </dd>
                      </div>

                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900 uppercase">
                          pays
                        </dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          {book.country}
                        </dd>
                      </div>

                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">éditeur</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          {book.editor}
                        </dd>
                      </div>

                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">résumé</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          À la fin du XIXe siècle, en Angleterre, lord Joestar
                          voit arriver dans sa maison le jeune
                          <br />
                          Dio Brando, le fils d'un homme qui lui a sauvé la vie.
                          Reconnaissant, il décide de l'adopter
                          <br />
                          mais le jeune homme s'avère particulièrement ambitieux
                          et prêt à tout pour s'emparer de
                          <br />
                          la fortune familiale.
                        </dd>
                      </div>
                    </dl>
                  </div>
                  
                  {/* <h1 className="uppercase text-2xl">résumé : </h1>
            <p className="text-xl">
              À la fin du XIXe siècle, en Angleterre, lord Joestar voit arriver
              dans sa maison le jeune
              <br />
              Dio Brando, le fils d'un homme qui lui a sauvé la vie.
              Reconnaissant, il décide de l'adopter
              <br />
              mais le jeune homme s'avère particulièrement ambitieux et prêt à
              tout pour s'emparer de
              <br />
              la fortune familiale.
            </p> */}
                </>
              );
            })}
          </div>
        </div>
        <div className="h-screen">
          <div className="grid grid-cols-4">
            {books.map((book) => {
              if (book.title === "JOJO'S BIZARRE ADVENTURE")
                return (
                  <div>
                    {book.tome.map((tome) => {
                      return (
                        <div className="flex flex-col items-center justify-center">
                          <h1>
                            Tome {tome.tomeNumber} - {tome.title}
                          </h1>
                          <h2>Nombre de chapitres {tome.chapter.length}</h2>
                          <a href={tome.href}>
                            <img
                              src={tome.image}
                              alt={tome.title}
                              width={200}
                              height={200}
                              className="glass card-1"
                            />
                          </a>
                        </div>
                      );
                    })}
                  </div>
                );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default PhantomBlood;
