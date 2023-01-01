import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "id", width: 90 },
  { field: "age", headerName: "age", width: 110 },
];

const rows = [
  { id: "World", age: 2000 },
  { id: "World", age: 1985 },
  { id: "World", age: 1978 },
  { id: "World", age: 2009 },
  { id: "World", age: 1968 },
];

export default function Table() {
  return (
    <Box sx={{ height: 400, width: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
