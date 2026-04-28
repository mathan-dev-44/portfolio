import Router from "./router";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen">
      <Router />
      <Analytics />
    </div>
  );
}

export default App;
