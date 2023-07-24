import Link from "next/link";
import { ReactNode } from "react";
import MOF from "../../Drivers";

const ItemLink = MOF<
  HTMLLIElement,
  { href: string; children: ReactNode; activated: boolean; onClick: () => void }
>(({ href, children, activated, onClick }, ref) => (
  <li ref={ref} className="relative w-fit">
    <Link
      className={
        activated
          ? "after:absolute after:content-[' '] after:w-full after:h-[0.18rem] after:left-0 after:top-8 after:bg-primary"
          : "hover:after:absolute hover:after:content-[' '] hover:after:w-full hover:after:h-[0.18rem] hover:after:left-0 hover:after:top-8 hover:after:bg-primary"
      }
      onClick={onClick}
      href={href}
    >
      {children}
    </Link>
  </li>
));

export default ItemLink;
