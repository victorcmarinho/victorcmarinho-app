import MOF from "@/app/Drivers";
import Home from "../Home";

const Main = MOF<HTMLElement>((_, ref) => (
  <main ref={ref}>
    <Home />
  </main>
));

export default Main;
