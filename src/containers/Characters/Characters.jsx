import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCharacters from "../../api/getCharacters";
import CharacterField from "../../components/CharacterField/CharacterField";
import CharacterFilters from "../../components/Filters/CharacterFilters";
import Loader from "../../components/UI/Loader/Loader";
import { setCharacterPages } from "../../store/characters/actions";
import styles from "./Characters.module.scss";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.characters.currentPage);
  const currentQuery = useSelector(
    (state) => state.characters.currentFilterQuery
  );
  useEffect(() => {
    setIsLoading(true);
    getCharacters(currentPage, currentQuery).then((res) => {
      setCharacters(res.results);
      dispatch(setCharacterPages(res.info.pages));
      setIsLoading(false);
    });
  }, [currentPage, currentQuery, dispatch]);
  return (
    <div className={styles.Characters}>
      {isLoading && <Loader />}
      <div className="container">
        <div className="flex-row">
          <CharacterFilters />
          <CharacterField characters={characters} />
        </div>
      </div>
    </div>
  );
};

export default Characters;
