import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { removeUserFromCommunity } from "store/actions/users";

const columns = [
  { field: "id", headerName: "User ID", minWidth: 250 },
  { field: "login", headerName: "Login", minWidth: 240 },
  { field: "type", headerName: "Type", minWidth: 240 },
  {
    field: "node_id",
    headerName: "Node ID",
    minWidth: 240,
  },
  {
    field: "url",
    headerName: "Github Account",
    minWidth: 240,
  },
];

export default function DataTable({ data = [] }) {
  const dispatch = useDispatch();

  const [checkedRow, setCheckedRow] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const handleRemoveClick = () => {
    const chekedIds = data
      .filter((user) => checkedRow.includes(user.id))
      .map((u) => u.id);
    chekedIds.forEach((id) => {
      dispatch(removeUserFromCommunity(`${id}`));
    });
    setUpdatedData(updatedData.filter((obj) => !chekedIds.includes(obj.id)));
  };

  return (
    <div
      style={{
        margin: "16px 0 0",
        height: 530,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <DataGrid
        pageSize={5}
        columns={columns}
        checkboxSelection
        rows={updatedData}
        rowsPerPageOptions={[5]}
        sx={{ cursor: "pointer" }}
        onSelectionModelChange={(id) => setCheckedRow(id)}
      />
      <Button
        disabled={!checkedRow.length}
        variant="contained"
        onClick={handleRemoveClick}
        style={{ margin: "16px 0 0" }}
      >
        Remove users
      </Button>
    </div>
  );
}
