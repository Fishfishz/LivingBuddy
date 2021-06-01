import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TablePaginationActions from "./pagenation";
import TablePagination from "@material-ui/core/TablePagination";
import Book from "./book.js";

const RoomTable = ({ data, filteredData, bookedData, service }) => {
  const MAX_STRING_SIZE = {
    survey_name: 30,
    survey_association: 20,
    survey_platform: 15,
    survey_language: 15,
    target_group: 18,
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 40 + "em",
      paddingLeft: 3 + "em",
      paddingRight: 3 + "em",
    },
    tableHead: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "600",
      color: "#000000",
    },
    tableEntry: {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    tableHeadProjName: {
      width: 23 + "em",
    },
    tableHeadProjAttrs: {
      width: 12 + "em",
    },
    tableHeadProjDDL: {
      width: 5 + "em",
    },
    tableCell: {
      height: 3 + "em",
    },
    projName: {
      color: "#7370BB",
      fontFamily: "Open Sans",
      fontSize: 1 + "em",
      fontStyle: "normal",
      fontWeight: "bold",
    },
    deadline: {
      color: "#7370BB",
      fontWeight: "600",
    },
  });

  const classes = useStyles();

  // Mapp out each row of the table and assign it to the tableContent constant
  const tableContent = (rowsPerPage > 0
    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    : data
  ).map((entry) => {
    return (
      <TableRow >
        <TableCell>{entry.id}</TableCell>
        <TableCell>{entry.availability.toString()}</TableCell>
        <TableCell>{entry.reserved}</TableCell>
        <TableCell>{entry.timeLeft}</TableCell>
        <TableCell>{entry.location}</TableCell>
      </TableRow>
    );
  });

  return (
    <div id="table-container">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className={classes.tableHead + " " + classes.tableHeadProjName}
                align="left"
              >
                ID
              </TableCell>
              <TableCell
                className={classes.tableHead + " " + classes.tableHeadProjAttrs}
                align="left"
              >
                Availability
              </TableCell>
              <TableCell
                className={classes.tableHead + " " + classes.tableHeadProjAttrs}
                align="left"
              >
                Reserved
              </TableCell>
              <TableCell
                className={classes.tableHead + " " + classes.tableHeadProjAttrs}
                align="left"
              >
                Time left(in min)
              </TableCell>
              <TableCell
                className={classes.tableHead + " " + classes.tableHeadProjAttrs}
                align="left"
              >
                Location
              </TableCell>
            </TableRow>
          </TableHead>

          {tableContent}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={6}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Book data={filteredData} bookedData={bookedData} service={service}/>
    </div>
  );
};

export default RoomTable;
