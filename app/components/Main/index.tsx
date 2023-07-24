import MOF from "@/app/Drivers";
import Home from "../Home";
import About from "../About";

const Main = MOF<HTMLElement>((_, ref) => (
  <main ref={ref} className="flex flex-col gap-14">
    <Home />
    <About />
  </main>
));

export default Main;
