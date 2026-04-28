import Router from "./router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
function App() {
  return (
    <div className="min-h-screen">
      <Router />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
