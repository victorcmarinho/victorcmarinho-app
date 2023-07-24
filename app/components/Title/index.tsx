import MOF from "@/app/Drivers";
import { ReactNode } from "react";

export const Title = MOF<
  HTMLHeadingElement,
  { children: ReactNode; as: "h2" | "h3" }
>(({ children, as = "h2" }, ref) => (
  <>
    {as === "h2" && (
      <h2
        className="relative mb-mb6 mt-mb2 text-center font-default text-primary text-h2  after:absolute after:content-[' '] after:w-full after:h-[0.18rem] after:left-0 after:top-8 after:bg-primary"
        ref={ref}
      >
        {children}
      </h2>
    )}
    {as === "h3" && (
      <h2
        className="relative mb-mb2 font-default text-secondary text-2xl"
        ref={ref}
      >
        {children}
      </h2>
    )}
  </>
));
