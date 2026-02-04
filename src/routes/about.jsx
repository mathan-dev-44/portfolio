import { createFileRoute } from "@tanstack/react-router";
import About from "../reactComponents/about/About";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <About />
  );
}
