import React, { useEffect, useState } from "react";
import FilterBlock from "./FilterBlock/FilterBlock";
import styles from "./FilterBlock.module.scss";
import charactersQueryMaker from "./charactersQueryMaker";
import { useDispatch } from "react-redux";
import { setCurrentFilterAction } from "../../store/characters/actions";

const CharacterFilters = () => {
  const [status, setStatus] = useState({
    checkboxA: {
      title: "Alive",
      checked: false,
    },
    checkboxB: {
      title: "Dead",
      checked: false,
    },
    checkboxC: {
      title: "Unknown",
      checked: false,
    },
  });
  const [gender, setGender] = useState({
    checkboxA: {
      title: "female",
      checked: false,
    },
    checkboxB: {
      title: "male",
      checked: false,
    },
    checkboxC: {
      title: "genderless",
      checked: false,
    },
    checkboxD: {
      title: "unknown",
      checked: false,
    },
  });
  const [species, setSpecies] = useState({
    checkboxA: {
      title: "human",
      checked: false,
    },
    checkboxB: {
      title: "poopybutthole",
      checked: false,
    },
    checkboxC: {
      title: "humanoid",
      checked: false,
    },
    checkboxD: {
      title: "alian",
      checked: false,
    },
    checkboxE: {
      title: "mythological creature",
      checked: false,
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const currentQuery = charactersQueryMaker(status, gender, species);
    dispatch(setCurrentFilterAction(currentQuery));
  }, [dispatch, status, gender, species]);

  // console.log(status);
  const handleStatusChange = (event) => {
    setStatus({
      ...status,
      [event.target.name]: {
        title: event.target.id,
        checked: event.target.checked,
      },
    });
  };
  const handleGenderChange = (event) => {
    setGender({
      ...gender,
      [event.target.name]: {
        title: event.target.id,
        checked: event.target.checked,
      },
    });
  };
  const handleSpeciesChange = (event) => {
    setSpecies({
      ...species,
      [event.target.name]: {
        title: event.target.id,
        checked: event.target.checked,
      },
    });
  };
  return (
    <div className={styles.FilterBlock}>
      <FilterBlock
        title="Status"
        handleChange={handleStatusChange}
        checkState={status}
      />
      <FilterBlock
        title="Gender"
        handleChange={handleGenderChange}
        checkState={gender}
      />
      <FilterBlock
        title="Species"
        handleChange={handleSpeciesChange}
        checkState={species}
      />
    </div>
  );
};

export default CharacterFilters;
