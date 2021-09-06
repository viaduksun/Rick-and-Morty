import React, { useEffect, useState } from "react";
import FilterBlock from "./FilterBlock/FilterBlock";
import styles from "./FilterBlock.module.scss";
import locationQueryMaker from "./locationQueryMaker";
import { useDispatch } from "react-redux";
import { setLocationQueryAction } from "../../store/locations/actions";

const LocationFilters = () => {
  const [name, setName] = useState({
    checkboxA: {
      title: "Earth",
      checked: false,
    },
    checkboxB: {
      title: "World",
      checked: false,
    },
    checkboxC: {
      title: "Planet",
      checked: false,
    },
    checkboxD: {
      title: "Rick",
      checked: false,
    },
    checkboxE: {
      title: "Base",
      checked: false,
    },
  });
  const [type, setType] = useState({
    checkboxA: {
      title: "Planet",
      checked: false,
    },
    checkboxB: {
      title: "Daycare",
      checked: false,
    },
    checkboxC: {
      title: "Spacecraft",
      checked: false,
    },
    checkboxD: {
      title: "Microverse",
      checked: false,
    },
    checkboxE: {
      title: "Dream",
      checked: false,
    },
  });
  const [dimension, setDimension] = useState({
    checkboxA: {
      title: "Dimension C-137",
      checked: false,
    },
    checkboxB: {
      title: "Post-Apocalyptic",
      checked: false,
    },
    checkboxC: {
      title: "Replacement",
      checked: false,
    },
    checkboxD: {
      title: "Cronenberg",
      checked: false,
    },
    checkboxE: {
      title: "Fantasy",
      checked: false,
    },
    checkboxF: {
      title: "Unknown",
      checked: false,
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    const currentQuery = locationQueryMaker(name, type, dimension);
    dispatch(setLocationQueryAction(currentQuery));
  }, [dispatch, name, type, dimension]);

  const handleNameChange = (event) => {
    setName({
      ...name,
      [event.target.name]: {
        title: event.target.id,
        checked: event.target.checked,
      },
    });
  };
  const handleTypeChange = (event) => {
    setType({
      ...type,
      [event.target.name]: {
        title: event.target.id,
        checked: event.target.checked,
      },
    });
  };
  const handleDimensionChange = (event) => {
    setDimension({
      ...dimension,
      [event.target.name]: {
        title: event.target.id,
        checked: event.target.checked,
      },
    });
  };
  return (
    <div className={styles.FilterBlock}>
      <FilterBlock
        title="Name"
        handleChange={handleNameChange}
        checkState={name}
      />
      <FilterBlock
        title="Type"
        handleChange={handleTypeChange}
        checkState={type}
      />
      <FilterBlock
        title="Dimension"
        handleChange={handleDimensionChange}
        checkState={dimension}
      />
    </div>
  );
};

export default LocationFilters;
