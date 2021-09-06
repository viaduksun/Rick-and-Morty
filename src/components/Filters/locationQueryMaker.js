
const locationQueryMaker = (name, type, dimension) => {
  const nameArr = Object.keys(name).map((item) => {
    if (item === "checkboxA" && name[item].checked) {
      return "name=earth";
    }
    if (item === "checkboxB" && name[item].checked) {
      return "name=world";
    }
    if (item === "checkboxC" && name[item].checked) {
      return "name=planet";
    }
    if (item === "checkboxD" && name[item].checked) {
      return "name=rick";
    }
    if (item === "checkboxE" && name[item].checked) {
      return "name=base";
    }
    return null;
  });
  const typeArr = Object.keys(type).map((item) => {
    if (item === "checkboxA" && type[item].checked) {
      return "type=planet";
    }
    if (item === "checkboxB" && type[item].checked) {
      return "type=daycare";
    }
    if (item === "checkboxC" && type[item].checked) {
      return "type=spacecraft";
    }
    if (item === "checkboxD" && type[item].checked) {
      return "type=microverse";
    }
    if (item === "checkboxE" && type[item].checked) {
      return "type=dream";
    }
    return null;
  });
  const dimensionArr = Object.keys(dimension).map((item) => {
    if (item === "checkboxA" && dimension[item].checked) {
      return "dimension=c-137";
    }
    if (item === "checkboxB" && dimension[item].checked) {
      return "dimension=post-Apocalyptic";
    }
    if (item === "checkboxC" && dimension[item].checked) {
      return "dimension=replacement";
    }
    if (item === "checkboxD" && dimension[item].checked) {
      return "dimension=cronenberg";
    }
    if (item === "checkboxE" && dimension[item].checked) {
      return "dimension=fantasy";
    }
    if (item === "checkboxF" && dimension[item].checked) {
      return "dimension=unknown";
    }
    return null;
  });

  const filteredNameArr = nameArr.filter((item) => item !== null);
  const filteredTypeArr = typeArr.filter((item) => item !== null);
  const filteredDimentionArr = dimensionArr.filter((item) => item !== null);

  let addQueryName = "";
  let addQueryType = "";
  let addQueryDimention = "";

  if (filteredNameArr.length > 0) {
    addQueryName = `&${filteredNameArr.join("&")}`;
  }
  if (filteredTypeArr.length > 0) {
    addQueryType = `&${filteredTypeArr.join("&")}`;
  }
  if (filteredDimentionArr.length > 0) {
    addQueryDimention = `&${filteredDimentionArr.join("&")}`;
  }

  const finalQuery = addQueryName + addQueryType + addQueryDimention;

  return finalQuery;
};

export default locationQueryMaker;
