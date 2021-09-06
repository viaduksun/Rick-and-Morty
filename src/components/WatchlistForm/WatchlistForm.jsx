import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import RefreshIcon from "@material-ui/icons/Refresh";
import { addNote } from "../../store/watchList/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: "20px",
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

export default function WatchlistForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  // { id, number, name, date }
  const classes = useStyles();
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  const handleAddNote = (e) => {
    e.preventDefault();
    if (value.trim()) {
      const newNote = {
        id: Date.now(),
        completed: false,
        date: new Date().toLocaleString(),
        name: value,
      };
      dispatch(addNote(newNote));
      setValue("");
    }
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        value={value}
        className={classes.input}
        placeholder="Episod name"
        inputProps={{ "aria-label": "Episode name" }}
        onChange={(event) => handleInputChange(event)}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
        onClick={(e) => handleAddNote(e)}
        type="submit"
      >
        <PlaylistAddIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={() => setValue("")}
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <RefreshIcon />
      </IconButton>
    </Paper>
  );
}
