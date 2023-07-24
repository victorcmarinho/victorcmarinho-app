import MOF from "@/app/Drivers";
import Button from "../Button";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Home = MOF<HTMLElement>((_, ref) => (
  <section
    ref={ref}
    className="max-w-5xl mr-auto ml-auto h-screen flex justify-center items-center"
  >
    <div className="flex flex-col mr-mb2  ml-mb2">
      <div className="flex flex-row relative flex-wrap-reverse gap-8  ">
        <div>
          <h1 className="text-6xl mb-mb5 font-default">
            Hi, <br /> I&apos;am{" "}
            <span className="text-primary">Victor Marinho</span> <br />{" "}
            Fullstack Developer
          </h1>
          <Button
            as="a"
            href={
              "mailto:victorcmarinho@gmail.com?subject=Gostaria de saber mais"
            }
          >
            Contato
          </Button>
        </div>

        <div className="bg-[rgb(75,111, 236)] rounded-full ">
          <Image
            alt="Imagem de perfil"
            src={"https://avatars.githubusercontent.com/u/15037403?v=4"}
            width={"290"}
            height={"290"}
            className="rounded-full"
          ></Image>
        </div>
      </div>
      <ul className="flex flex-row text-4xl gap-8">
        <li>
          <Link href={"https://github.com/victorcmarinho"} title="Meu Github">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            href={"https://br.linkedin.com/in/victorcmarinho"}
            title="Meu Linkedin"
          >
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </div>
  </section>
));

export default Home;
