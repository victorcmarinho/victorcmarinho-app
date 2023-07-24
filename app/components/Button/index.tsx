import MOF from "@/app/Drivers";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";

interface DynamicLinkProps extends LinkProps {
  as: "button" | "a";
  children: ReactNode;
}

interface DynamicButtonProps extends ComponentPropsWithoutRef<"button"> {
  as: "button" | "a";
  children: ReactNode;
}

export type ButtonProps = DynamicLinkProps | DynamicButtonProps;

const className =
  "bg-primary py-3 px-9 font-default text-white rounded-lg hover:bg-[#14337b]";

const Button = MOF<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, as = "button", ...rest }, ref) => (
    <>
      {as === "button" && (
        <button
          ref={ref as ForwardedRef<HTMLButtonElement>}
          {...(rest as ComponentPropsWithoutRef<"button">)}
          className={className}
        >
          {children}
        </button>
      )}
      {as === "a" && (
        <Link
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...(rest as LinkProps)}
          className={className}
        >
          {children}
        </Link>
      )}
    </>
  )
);

export default Button;
