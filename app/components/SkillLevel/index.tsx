import MOF from "@/app/Drivers";
import Image from "next/image";
import { memo } from "react";
import { MdOutlineFlutterDash } from "react-icons/md";

interface SkillLevelProps {
  pct: number;
  title: string;
  icon: "angular" | "flutter" | "nestjs" | "nextjs";
}

const Flutter = MOF(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z" />
  </svg>
));

const SkillLevel = MOF<HTMLDivElement, SkillLevelProps>(
  ({ icon, pct, title }, ref) => (
    <div
      ref={ref}
      className="flex justify-between items-center relative font-default py-2 px-4 mb-mb4 rounded-lg shadow-[0_4px_25px_rgba(14,36,49,.15)]"
    >
      <div className="flex items-center gap-8">
        <Image
          width={48}
          height={48}
          alt={title}
          src={`/${icon}.png`}
          className="w-[48px] h-[48px] object-contain"
        />
        <span>{title}</span>
      </div>
      <div
        className="absolute left-0 bottom-0 bg-primary h-1 rounded-lg z-back"
        style={{ width: `${pct}%` }}
      ></div>
      <span>{pct}%</span>
    </div>
  )
);

export default SkillLevel;
