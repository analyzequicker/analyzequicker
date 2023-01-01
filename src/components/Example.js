import { useState } from "react";

import Button from "@mui/material/Button";

import { DataGrid } from "@mui/x-data-grid";

export default function Example() {
  const [value, setValue] = useState("initial state");

  return (
    <div>
      <Button variant="contained" onClick={() => setValue("state after click")}>
        Hello World - {value}
      </Button>
    </div>
  );
}
