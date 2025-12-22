import MOF from "@/app/Drivers";
import { ReactNode } from "react";

export const Title = MOF<
  HTMLHeadingElement,
  { children: ReactNode; as: "h2" | "h3"; id?: string }
>(({ children, as = "h2", id }, ref) => (
  <>
    {as === "h2" && (
      <h2
        id={id}
        className="relative mb-mb6 mt-mb2 text-center font-default text-primary text-h2 after:absolute after:content-[''] after:w-24 after:h-[0.18rem] after:left-1/2 after:-translate-x-1/2 after:bottom-[-0.5rem] after:bg-primary"
        ref={ref}
      >
        {children}
      </h2>
    )}
    {as === "h3" && (
      <h3
        id={id}
        className="relative mb-mb2 font-default text-secondary text-2xl"
        ref={ref}
      >
        {children}
      </h3>
    )}
  </>
));
