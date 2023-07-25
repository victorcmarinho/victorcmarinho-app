import MOF from "@/app/Drivers";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Works from "../Works";

const Main = MOF<HTMLElement>((_, ref) => (
  <main ref={ref} className="flex flex-col gap-14">
    <Home />
    <About />
    <Skills />
    <Works />
  </main>
));

export default Main;
