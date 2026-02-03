import { useState } from "react";
import Router from "./router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Router />
    </div>
  );
}

export default App;
