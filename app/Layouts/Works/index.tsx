import { ReposDTO } from "@/app/DTOs/Repos.dto";
import fetcher from "@/app/Services/fetcher";
import { Title } from "@/app/components/Title";
import Image from "next/image";
import Link from "next/link";
import { FaStairs, FaStar } from "react-icons/fa6";

const Works = async () => {
  const response = await fetcher<ReposDTO[]>(
    "https://api.github.com/users/victorcmarinho/repos?sort=stargazers_count&direction=asc",
    {
      next: { revalidate: 36 * 100000 },
    }
  );

  return (
    <section
      className="flex flex-col justify-center items-center mr-4 ml-4"
      id="work"
    >
      <Title as="h2">Work</Title>
      <ul className="flex flex-wrap gap-8 justify-center">
        {response.map(
          ({ id, html_url, description, name, stargazers_count }) => (
            <li key={id} className="w-[320px] h-[213px] ">
              <Link
                href={html_url}
                target="_blank"
                className="flex flex-col w-full h-full rounded-lg p-5 shadow-[0_4px_25px_rgba(14,36,49,.15)] overflow-hidden"
              >
                <Title as="h3"> {name.replace(/-/gi, " ")}</Title>
                <span className="text-yellow-300 flex  items-center gap-2">
                  {stargazers_count}
                  <FaStar />
                </span>
                <p className="text-ellipsis">{description}</p>
              </Link>
            </li>
          )
        )}
      </ul>
    </section>
  );
};

export default Works;
