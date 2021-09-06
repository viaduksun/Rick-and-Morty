import React, { useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  deleteNoteAction,
  selectNoteAction,
  setInitialNotes,
} from "../../store/watchList/actions";
import "./WatchlistTable.scss";

// function createData(id, number, name, date) {
//   return { id, number, name, date };
// }

// const notes = [
//   createData("id1", 1, "Some name", "2021-09-06"),
//   createData("id2", 2, "Donut", "2021-09-06"),
//   createData("id3", 3, "Eclair", "2021-09-06"),
//   createData("id4", 4, "Frozen yoghurt", "2021-09-06"),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

const headCells = [
  { id: "number", numeric: true, disablePadding: true, label: "No" },
  { id: "name", numeric: false, disablePadding: true, label: "Episode name" },
  { id: "date", numeric: true, disablePadding: false, label: "Date" },
  { id: "delete", numeric: false, disablePadding: false, label: "Delete" },
];

function EnhancedTableHead({ classes }) {
  return (
    <TableHead className={classes.tableHeader}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            inputProps={{ "aria-label": "select all desserts" }}
            disabled
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "normal"}
            className={classes.tableHeaderCells}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = () => {
  const classes = useToolbarStyles();
  return (
    <Toolbar className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Watch list
      </Typography>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "&.MuiIconButton-colorPrimary": {
      background: "green",
    },
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    overflow: "hidden",
  },
  table: {
    minWidth: 750,
    overflow: "hidden",
    // background: "yellow",
    // display: "flex",
    // flexDirection: "column",
  },
  tableBody: {
    // background: "green",
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  tableHeader: {
    backgroundColor: "rgb(230, 230, 230)",
  },
  tableHeaderCells: {
    fontSize: "16px",
  },
}));

const StyledRow = withStyles({
  root: {
    background: "linear-gradient(45deg, #5bbec9 20%, #b8f8ff 90%)",
    borderRadius: 5,
    color: "white",
    height: 40,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(24, 79, 84, 0.3)",
    transition: "all 0.2s ease 0s",
    width: "200%",
    // border: "4px solid black",
    "&.Mui-selected": {
      background: "#439aa3",
    },
    "&.Mui-selected&:hover": {
      background: "#439aa3",
    },
    "&:hover": {
      background: "linear-gradient(45deg, #22828c 20%, #b8f8ff 90%)",
    },
  },
  label: {
    textTransform: "capitalize",
  },
})(TableRow);
const StyledButtonDelete = withStyles({
  root: {
    color: "#00616b",
  },
})(DeleteIcon);

export default function WatchlistTable() {
  const dispatch = useDispatch();
  useEffect(() => {
    const notesFromLocal = localStorage.getItem("notes");
    if (notesFromLocal) {
      dispatch(setInitialNotes(JSON.parse(notesFromLocal)));
    }
  }, [dispatch]);
  const notes = useSelector((state) => state.watchList.notes);

  const classes = useStyles();
  // const [order, setOrder] = React.useState("asc");
  // const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClick = (event, id) => {
    dispatch(selectNoteAction(id));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleDeleteNote = (event, id) => {
    dispatch(deleteNoteAction(id));
  };

  // const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, notes.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
            />
            {/* <TableBody className={classes.tableBody}> */}
            <TransitionGroup
              component={TableBody}
              className={classes.tableBody}
            >
              {notes
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((note, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <CSSTransition
                      key={note.id}
                      classNames={"note"}
                      timeout={800}
                    >
                      <StyledRow
                        hover
                        role="checkbox"
                        aria-checked={note.completed}
                        tabIndex={-1}
                        selected={note.completed}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            onClick={(event) => handleClick(event, note.id)}
                            checked={note.completed}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell align="left">{index + 1}</TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="note"
                          padding="none"
                        >
                          {note.name}
                        </TableCell>
                        <TableCell align="left">{note.date}</TableCell>
                        <TableCell align="left">
                          <IconButton
                            color="#ff004d"
                            className={classes.iconButton}
                            aria-label="directions"
                            onClick={(e) => handleDeleteNote(e, note.id)}
                          >
                            <StyledButtonDelete />
                          </IconButton>
                        </TableCell>
                      </StyledRow>
                    </CSSTransition>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TransitionGroup>
            {/* </TableBody> */}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={notes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
