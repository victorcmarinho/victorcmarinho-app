import Link from "next/link";
import { ReactNode } from "react";
import MOF from "../../Drivers";

const ItemLink = MOF<HTMLLIElement, { href: string; children: ReactNode }>(
  ({ href, children }, ref) => (
    <li ref={ref} className="relative w-fit">
      <Link
        className="hover:after:absolute hover:after:content-[' '] hover:after:w-full hover:after:h-[0.18rem] hover:after:left-0 hover:after:top-8 hover:after:bg-primary"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
);

export default ItemLink;
