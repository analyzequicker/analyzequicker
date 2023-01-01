// import Plot from "react-plotly.js";
// import axios from "axios";

import React, { useState } from "react";

// this.state = { data: "no data yet" };

function App() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  );
}

export default App;
