import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useFirestoreConnect } from "react-redux-firebase";

import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { CircularProgress } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

const columns = [
  { id: "id", label: "ID", minWidth: 170 },
  { id: "login", label: "Username", minWidth: 100 },
  {
    id: "type",
    label: "Type",
    minWidth: 170,
  },
  {
    id: "node_id",
    label: "Node ID",
    minWidth: 170,
  },
  {
    id: "url",
    label: "Github Account",
    minWidth: 170,
  },
];

export default function ColumnGroupingTable() {
  useFirestoreConnect([{ collection: "users" }]);
  const users = useSelector((state) => state.firestore.ordered.users) || [];

  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClick = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <>
      {!!users.length ? (
        <Paper sx={{ width: "100%", margin: "16px 0 0" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ top: 10, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        id={row.id}
                        key={row.id}
                        tabIndex={-1}
                        onClick={({ target: { id } }) => handleClick(id)}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              id={row.id}
                              key={column.id}
                              sx={{ cursor: "pointer" }}
                            >
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            page={page}
            component="div"
            count={users.length}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[10, 25, 100]}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={60} />
        </Box>
      )}
    </>
  );
}
