import Router from "./router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
