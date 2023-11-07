"use client";

import React, { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import axios from "axios";
import { styles } from "./styles";

const ChapterList = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/books").then((response) => {
      setList(response.data["hydra:member"]);
    });
  }, []);

  const HideMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Menu styles={styles} isOpen={showMenu === true ? false : null}>
      <ul>
        <li>
          <p>
            {list.map((book) => {
              return (
                <>
                  {book.tome.map((chapter) => {
                    return (
                      <>
                        {chapter.chapter.map((se) => {
                          return (
                            <>
                              <section>
                                <div>
                                  <a href="http://localhost:8000/read">
                                    chapitre {se.chapterNumber}
                                  </a>
                                </div>
                              </section>
                            </>
                          );
                        })}
                      </>
                    );
                  })}
                </>
              );
            })}
          </p>
        </li>
      </ul>
    </Menu>
  );
};

export default ChapterList;
