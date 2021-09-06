const charactersQueryMaker = (status, gender, species) => {
  const statusArr = Object.keys(status).map((item) => {
    if (item === "checkboxA" && status[item].checked) {
      return "status=alive";
    }
    if (item === "checkboxB" && status[item].checked) {
      return "status=dead";
    }
    if (item === "checkboxC" && status[item].checked) {
      return "status=unknown";
    }
    return null;
  });
  const genderArr = Object.keys(gender).map((item) => {
    if (item === "checkboxA" && gender[item].checked) {
      return "gender=female";
    }
    if (item === "checkboxB" && gender[item].checked) {
      return "gender=male";
    }
    if (item === "checkboxC" && gender[item].checked) {
      return "gender=genderless";
    }
    if (item === "checkboxD" && gender[item].checked) {
      return "gender=unknown";
    }
    return null;
  });
  const speciesArr = Object.keys(species).map((item) => {
    if (item === "checkboxA" && species[item].checked) {
      return "species=human";
    }
    if (item === "checkboxB" && species[item].checked) {
      return "species=poopybutthole";
    }
    if (item === "checkboxC" && species[item].checked) {
      return "species=humanoid";
    }
    if (item === "checkboxD" && species[item].checked) {
      return "species=alian";
    }
    if (item === "checkboxE" && species[item].checked) {
      return "species=mythological";
    }
    return null;
  });

  const filteredStatusArr = statusArr.filter((item) => item !== null);
  const filteredGenderArr = genderArr.filter((item) => item !== null);
  const filteredSpeciesArr = speciesArr.filter((item) => item !== null);

  let addQueryStatus = "";
  let addQueryGender = "";
  let addQuerySpecies = "";

  if (filteredStatusArr.length > 0) {
    addQueryStatus = `&${filteredStatusArr.join("&")}`;
  }
  if (filteredGenderArr.length > 0) {
    addQueryGender = `&${filteredGenderArr.join("&")}`;
  }
  if (filteredSpeciesArr.length > 0) {
    addQueryGender = `&${filteredSpeciesArr.join("&")}`;
  }

  const finalQuery = addQueryStatus + addQueryGender + addQuerySpecies;

  return finalQuery;
};

export default charactersQueryMaker;
