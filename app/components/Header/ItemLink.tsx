import Link from "next/link";
import { ReactNode } from "react";
import MOF from "../../Drivers";

const ItemLink = MOF<
  HTMLLIElement,
  { href: string; children: ReactNode; activated: boolean; onClick: () => void }
>(({ href, children, activated, onClick }, ref) => (
  <li ref={ref} className="relative w-fit">
    <Link
      className={`relative inline-block transition-colors ${activated
        ? "text-primary after:absolute after:content-[''] after:w-full after:h-[0.18rem] after:left-0 after:-bottom-2 after:bg-primary"
        : "hover:text-primary hover:after:absolute hover:after:content-[''] hover:after:w-full hover:after:h-[0.18rem] hover:after:left-0 hover:after:-bottom-2 hover:after:bg-primary"
        }`}
      onClick={onClick}
      href={href}
    >
      {children}
    </Link>
  </li>
));

export default ItemLink;
