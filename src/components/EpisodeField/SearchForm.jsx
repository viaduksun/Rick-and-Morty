import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RefreshIcon from "@material-ui/icons/Refresh";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useDispatch } from "react-redux";
import {
  setEpisodeCurrentPage,
  setEpisodeQueryAction,
} from "../../store/episodes/actions";

const useStylesSearch = makeStyles((theme) => ({
  root: {
    padding: "2px 4px 2px 10px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const SearchForm = () => {
  const classes = useStylesSearch();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    const query = "&name=" + inputValue;
    dispatch(setEpisodeCurrentPage(1));
    dispatch(setEpisodeQueryAction(query));
  };
  const handleReset = (event) => {
    event.preventDefault();
    setInputValue("");
    dispatch(setEpisodeCurrentPage(1));
    dispatch(setEpisodeQueryAction(""));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Enter episode name"
          inputProps={{ "aria-label": "Enter episode name" }}
          onChange={handleInputChange}
          value={inputValue}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={handleSubmit}
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={handleReset}
        >
          <RefreshIcon />
        </IconButton>
      </Paper>
    </form>
  );
};
export default SearchForm;
